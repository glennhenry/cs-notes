---
title: Intro
slug: index
description: CS Notes
---

My computer science notes from various online courses, tutorial, books, blogs, Wikipedia pages, and lectures. When learning something serious, I write it down here.

### Main Topics

- **[Computer & Programming Fundamentals](/cs-notes/computer-and-programming-fundamentals-intro)**
- **[Digital Signal Processing](/cs-notes/digital-signal-processing-intro)**
- **[Digital Media Processing](/cs-notes/digital-media-processing-intro)**
- **[Computer Networking](/cs-notes/computer-networking-intro)**
- **[Data Structures & Algorithms](/cs-notes/data-structures-and-algorithms-intro)**
- **[Computer Organization & Architecture](/cs-notes/computer-organization-and-architecture-intro)**
- **[Operating System](/cs-notes/operating-system-intro)**
- **[Theory of Computation & Automata](/cs-notes/theory-of-computation-and-automata-intro)**
- **[Compilers & Programming Language](/cs-notes/compilers-and-programming-languages-intro)**
- **[Database System](/cs-notes/database-system-intro)**
- **[Computer Graphics](/cs-notes/computer-graphics-intro)**
- **[Internet & Web](/cs-notes/internet-and-web-intro)**
- **[Backend System](/cs-notes/backend-system-intro)**
- **[Computer Security](/cs-notes/computer-security-intro)**
- **[Machine Learning](/cs-notes/machine-learning-intro)**
- **[Deep Learning](/cs-notes/deep-learning-intro)**
- **[Software Engineering](/cs-notes/software-engineering-intro)**
- **[Cloud Computing & Distributed Systems](/cs-notes/cloud-computing-and-distributed-systems-intro)**

### About The Site

This notes site is basically complete, it covered most of the important topics in computer science. They were written over time, which has led to variations in writing style, formatting, and possibly some inaccuracies that I didn't recognize earlier.

My motivation for writing these notes was to learn all the topics in computer science. Additionally, the theoretical part of CS is diverse and needs to be written for easy lookup in the future. As I finish each topic, my motivation to rewrite them decreases, especially if it involves merely rephrasing or modifying the format.

I also want to add more information to specific notes that are still lacking (see [TODO](#to-dos)). However, I can't guarantee that I'll be able to do this, as I may not need that knowledge and might not want to spend time writing it out in detail.

#### Static Site Generator

Instead of using something simpler like OneNote, Notion, or Obsidian, it uses a static site generator. It resembles technical documentation (like for API, library, or programming language). The use of SSG allows for easy and free static deployment, so I can see my notes everywhere and anytime from a website. It relies on `.md` file for making the notes and git as the version control.

The site begins with me writing my notes in Notion. It was hard to organize as I wrote more detailed notes. Then, I switched to Docusaurus and used it for a very long time.

Although I don't write much after completing all the notes, I wish my site looked better. I didn't bother styling Docusaurus because the site design was too far from my expectations. I tried many SSG and the best design to my preference is Quartz, but it fails to fulfill many of my use cases, and Starlight with Obsidian theme just happen to be my second best.

### Credits

- This site is made using [Starlight](https://starlight.astro.build/) with the customized [Obsidian theme](https://fevol.github.io/starlight-theme-obsidian/).
- [GitHub](https://github.com/) — For storing and hosting this site.
- [LT<sub>E</sub>X Extension for VS Code](https://github.com/valentjn/vscode-ltex) — Grammar/spell checker.
- Assisted with few AI tools, such as [Poe](https://poe.com), [ChatGPT](https://chat.openai.com/), and [Bard](https://bard.google.com/). They are mostly used for paraphrasing and generating extra information.
- [Perchance](https://perchance.org/ai-icon-generator) — favicon.ico generator.
- And last but not least, **various online learning resources** which are included in each note.

> personal computer science notes website (art style waifu) by [@Perchance](https://perchance.org/ai-icon-generator)

![CS waifu](./cs-waifu.jpg)

### TO-DOs

For simplicity, TO-DOs are placed here instead of something like GitHub issues.

- **[add]**: add new note, which add a page in a topic.
- **[update]**: update existing notes, whether it is grammar/typo correction, correcting misinformation, clarifying, or adding more information to particular note.
- **[ref]**: add reference (hyperlink) to particular notes.

The site is currently still lacking:

- **Graph and backlinks don't work**. They find pages and build its structure based on the actual file system structure (as opposed to starlight nav which we can configure manually using overrided slug). Our notes structure relies on extra folder for each `.md` file to order them in the file system and to separate each note images.
  - We shall find a way to make graph and backlinks to work without changing the original structure.
  - Alternately, we may need to withdraw our expectation, that is by removing numbered folder (but still have separate folder for each note images). This means we also need to change all markdown image reference.
  - The effortless solution is to ignore graph and backlinks. They don't affect the overall site anyway.

Notes TODO:

1. **[update]** Revisit all notes to fix English, typo, minor update/edit information, reformat to the latest writing styles, and add references to newly added notes. Any major update to note will be listed in separate to-dos.
2. **[update]** [/computer-graphics](/cs-notes/computer-graphics): Major update with new topics. Combine old note with new details from a textbook.
3. **[update]** [/internet-and-web](/cs-notes/internet-and-web): Minor update of information for all note.
4. **[update]** Re-explain context-dependent notes. For example, many notes may refer to [parsing](/cs-notes/compilers-and-programming-languages/parsing). However, it appears that the note doesn't have proper introduction to parsing. It instead continues to explain it as the next step of [scanning](/cs-notes/compilers-and-programming-languages/scanning). The "scanning" topic itself continues from the previous "[syntax](/cs-notes/compilers-and-programming-languages/syntax)" topic, which all root to the first note "[CPL Fundamentals](/cs-notes/compilers-and-programming-languages/cpl-fundamentals)". This assumes that reader has knowledge of the previous note in the whole topic. Some note to include:
   - [/compilers-and-programming-languages/parsing](/cs-notes/compilers-and-programming-languages/parsing): about parsing
   - [/computer-organization-and-architecture/registers-and-ram](/cs-notes/computer-organization-and-architecture/registers-and-ram): provide general/introductory info about registers and ram in the beginning.
5. **[update]** If a note were to explain about something, always provide the generalized information first, then continue to explain that related to the topic. Some note to include:
   - [/internet-and-web/html#html-dom](/cs-notes/internet-and-web/html#html-dom): provide general information about DOM, then continue explaining the HTML DOM. This makes note like [XML](/cs-notes/digital-media-processing/xml) refer easily.
   - [/internet-and-web/web-url](/cs-notes/internet-and-web/web-url)/uri: add uniform resource identifier (URI) before actual web URL.
6. **[update]** [/digital-signal-processing/compression](/cs-notes/digital-signal-processing/compression)#bitmap-encoding: add bitmap encoding as another compression method.
7. **[add]** [/digital-media-processing-intro](/cs-notes/digital-media-processing-intro)/iso: add ISO file format.
8. **[update]** [/backend-system/websocket](/cs-notes/backend-system/websocket)#data-exchange: add web socket payload, frame, ping, pong, fin, rsv, close, timeout.
9. **[update]** [/backend-system/microservice](/cs-notes/backend-system/microservice): clarify possible wrong information.
10. **[update]** [/backend-system/soa](/cs-notes/backend-system/soa): clarify possible wrong information (emphasize more on its difference with microservice).
11. **[add]** [/cloud-computing-and-distributed-systems-intro](/cs-notes/cloud-computing-and-distributed-systems-intro)/distributed-systems-failure-detection-and-recovery: should add more about distributed failure detection and recovery mechanism.
    - Additional note:
      - replication, redundancy, reassignment, checkpointing, restart.
      - heartbeat mechanism, timeout, neighbour-based, gossip.
      - hot standby server clusters, active-takeover clusters, failover cluster.
12. **[update]** [/data-structures-and-algorithms/array](/cs-notes/data-structures-and-algorithms/array)#string-as-an-array: add information about string as a char array.
13. **[update]** [/computer-and-programming-fundamentals/memory](/cs-notes/data-structures-and-algorithms/array)#pointer--references-problems: add information about pointer and reference problems, such as dangling pointer, dangling reference, wild pointer, etc.
14. **[add]** [/computer-and-programming-fundamentals-intro](/cs-notes/computer-and-programming-fundamentals-intro)/serialization: add a new topic about serialization, possibly comparing various serialization method such as JSON, XML, language gnostic. Also, move protocol buffer here.
15. **[ref]** [/backend-system/rpc#protocol-buffers](/cs-notes/backend-system/rpc#protocol-buffers): ref to serialization, protocol buffer.
16. **[update]** [/data-structures-and-algorithms/hash-table](/cs-notes/data-structures-and-algorithms/hash-table)#log-structured-hash-table: add log-structured hash table, which is a hash table stored in a file system. Just explain basic idea of how it works, then explain how a more scalable data structure is the idea of common data structure for database index, made with b-tree.
17. **[update]** [/database-system/logging-and-recovery#migration](/cs-notes/database-system/logging-and-recovery#migration): add more about migration, particularly how it works.
18. **[update]**: [/cloud-computing-and-distributed-systems/distributed-systems-model#consensus](/cs-notes/cloud-computing-and-distributed-systems/distributed-systems-model#consensus) add about Byzantine failures, Two Generals' Problem.
19. **[update]** [/data-structures-and-algorithms/graph](/cs-notes/data-structures-and-algorithms/graph)#graph-problems: add common problem about graph, such as graph coloring.
20. **[ref]** [/compilers-and-programming-languages/compiler-optimization](/cs-notes/compilers-and-programming-languages/compiler-optimization): ref to graph coloring.
21. **[update]** [/computer-organization-and-architecture](/cs-notes/computer-organization-and-architecture): add about low level instruction, actual example of simple processor like 8080 with emulation as the example.
    - hex code disassemble to original assembly
    - cpu opcode emulation, simulate each kind of instruction
    - can refer to 8080 emulation in emulator 101
22. **[update]** [/software-engineering](/cs-notes/software-engineering): add/update/edit more about terminologies:
    - [/software-engineering/version-control](/cs-notes/software-engineering/version-control): release tags, feature-based vs trunk-based development (refer to [/software-engineering/software-process](/cs-notes/software-engineering/software-process)).
    - [/software-engineering/software-deployment](/cs-notes/software-engineering/software-deployment): a/b testing, canary release, feature flags factory.
    - [/software-engineering/creational-patterns](/cs-notes/software-engineering/creational-patterns): factory pattern and its use in configuration file.
    - [/software-engineering/behavioral-patterns](/cs-notes/software-engineering/behavioral-patterns): strategy pattern.
23. **[add]** [/digital-media-processing-intro](/cs-notes/digital-media-processing-intro)/zip: add ZIP archive as "other" digital media formats.
24. **[ref]** [/digital-media-processing/mime-type](/cs-notes/digital-media-processing/mime-type): ref to ZIP archive.
25. **[ref]** [/digital-media-processing/xml#xml-schema](/cs-notes/digital-media-processing/xml#xml-schema): ref to URI.
