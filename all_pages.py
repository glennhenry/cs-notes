import os
import re
import notes_stats

TOPIC_HEADING = "### All pages"
TARGET_DIR = os.path.join("src", "content", "docs")
OUTPUT_FILE = os.path.join(TARGET_DIR, "all-pages.md")

ORDER = [
    "Computer & Programming Fundamentals",
    "Digital Signal Processing",
    "Digital Media Processing",
    "Computer Networking",
    "Data Structures & Algorithms",
    "Computer Organization & Architecture",
    "Operating System",
    "Theory of Computation & Automata",
    "Compilers & Programming Languages",
    "Database System",
    "Computer Graphics",
    "Internet & Web",
    "Backend System",
    "Computer Security",
    "Machine Learning",
    "Deep Learning",
    "Software Engineering",
    "Cloud Computing & Distributed Systems",
]


def extract_frontmatter_and_content(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    frontmatter_match = re.match(
        r"^---\s*\n(.*?)\n---\s*\n", content, re.DOTALL)
    frontmatter = {}
    body = content

    if frontmatter_match:
        fm_text = frontmatter_match.group(1)
        body = content[frontmatter_match.end():]
        for line in fm_text.splitlines():
            match = re.match(r"^(\w+):\s*(.+)$", line)
            if match:
                key, value = match.groups()
                frontmatter[key.strip()] = value.strip()

    return frontmatter, body


def extract_topic_list(file_path):
    frontmatter, content = extract_frontmatter_and_content(file_path)
    slug = frontmatter.get("slug")
    title = frontmatter.get("title")

    if slug and title:
        heading_index = content.find(TOPIC_HEADING)
        if heading_index != -1:
            topics_section = content[heading_index +
                                     len(TOPIC_HEADING):].strip()
            topics_lines = [
                line for line in topics_section.splitlines()
                if line.strip() and "[" in line
            ]
            return {
                "slug": slug,
                "title": title,
                "topics_content": topics_section,
                "topics_count": len(topics_lines),
            }

    return None


def get_all_intro_files(directory):
    intro_topics = []
    for root, _, files in os.walk(directory):
        for file in files:
            lower = file.lower()
            if "intro.md" in lower and lower != "intro.md":
                path = os.path.join(root, file)
                result = extract_topic_list(path)
                if result:
                    intro_topics.append(result)
    return intro_topics


def sort_by_order(topics):
    def order_index(item):
        try:
            return ORDER.index(item["title"])
        except ValueError:
            return len(ORDER)  # Put unknown topics at the end
    return sorted(topics, key=order_index)


def generate_index_markdown(topics):
    lines = []
    total_notes = 0
    for i, topic in enumerate(topics, start=1):
        lines.append(
            f"{i}. [{topic['title']}](/cs-notes/{topic['slug']}) (**{topic['topics_count']}** subtopics)")
        indented = "\n".join("    " + line.strip()
                             for line in topic['topics_content'].splitlines() if line.strip())
        lines.append(indented)
        total_notes += topic['topics_count']
    return lines, total_notes


def write_index_md(topics, total_notes):
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    lines, _ = generate_index_markdown(topics)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("""---
title: All Pages
slug: all-pages
description: All Pages
---

This page contains all the notes on this site. The structure is similar to the sidebar on the left.

""")
        num_notes, total_char, total_word, word_rank, char_rank = notes_stats.notes_stats()
        f.write(
            f"A total of **{num_notes}** notes, **{total_char}** characters, and **{total_word}** words across **{len(topics)}** topics.\n\n"
        )
        f.write(
            f"Notes word rank:\n\n"
        )
        for i, (w, title) in enumerate(word_rank):
            f.write(f"  {i + 1}. **{title}**: {w} words\n")
        f.write(
            f"\nNotes char rank:\n\n"
        )
        for i, (c, title) in enumerate(char_rank):
            f.write(f"  {i + 1}. **{title}**: {c} characters\n")

        f.write("\n")
        f.write("All notes:\n\n")
        f.write("".join(lines))


def main():
    topics = get_all_intro_files(TARGET_DIR)
    sorted_topics = sort_by_order(topics)
    _, total_notes = generate_index_markdown(sorted_topics)
    write_index_md(sorted_topics, total_notes)
    print("✅ index.md generated successfully.")


if __name__ == "__main__":
    main()
