/**
 * A script to obtain all topics intro file and take the list of topics listed under
 * the ### All pages heading. Then, combine all result to generate an index.md file
 *
 * This script depends on the topic list on each intro file, so make sure they are right!
 * Always put topic list after the heading and never put anything below it.
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function extractTopicList(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  const { slug, title } = data;

  if (slug && title) {
    const extractContentAfter = content.indexOf("### All pages");
    if (extractContentAfter !== -1) {
      const topicsContent = content
        .substring(extractContentAfter + "### All pages".length)
        .trim();
      const topicsCount = topicsContent
        .split("\n")
        .filter((line) => line.trim().length > 0).length;
      return {
        slug,
        title,
        topicsContent,
        topicsCount,
      };
    }
  }

  return null;
}

function getAllIntroFiles(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  const introTopics = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const results = getAllIntroFiles(filePath);
      introTopics.push(...results);
    } else if (
      file.toLowerCase().includes("intro.md") &&
      file.toLowerCase() !== "intro.md"
    ) {
      const result = extractTopicList(filePath);
      if (result) {
        introTopics.push(result);
      }
    }
  }

  return introTopics;
}

// Topics order
const order = [
  "Digital Signal Processing",
  "Computer & Programming Fundamentals",
  "Digital Media Processing",
  "Computer Networking",
  "Data Structures & Algorithms",
  "Computer Organization & Architecture",
  "Operating System",
  "Theory of Computation & Automata",
  "Compilers",
  "Programming Language Theory",
  "Database System",
  "Computer Graphics",
  "Frontend Web Development",
  "Backend Development",
  "Computer Security",
  "Machine Learning",
  "Deep Learning",
  "Software Engineering",
  "Cloud Computing & Distributed Systems",
];

const introTopicsData = getAllIntroFiles("docs");

let num = 0;
let totalTopicsCount = 0;

const markdownContent = introTopicsData
  .sort((a, b) => {
    const indexA = order.indexOf(a.title);
    const indexB = order.indexOf(b.title);
    return indexA - indexB;
  })
  .map(({ slug, title, topicsContent, topicsCount }) => {
    const indentedTopicsContent = topicsContent
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .map((line) => `    ${line}`)
      .join("\n");
    num += 1;
    totalTopicsCount += topicsCount;
    return `${num}. [${title}](${slug}) (**${topicsCount}** subtopics)\n${indentedTopicsContent}`;
  })
  .join("\n");

const indexPath = path.join(__dirname, "docs/0index", "index.md");
fs.writeFileSync(
  indexPath,
  `---
slug: /index
id: index
title: Index
description: Index
---

This page contains all the notes on this site. The structure is similar to the sidebar on the left.

A total of **${introTopicsData.length}** topics, and a total of **${totalTopicsCount}** notes.

${markdownContent}
`
);

console.log("index.md generated successfully.");
