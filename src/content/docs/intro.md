---
title: Intro
slug: index
description: CS Notes
---

My computer science notes from various online courses, tutorial, books, blogs, Wikipedia pages, and lectures. Being used reading documentation, I wanted to make my notes look similar. It is also hosted on GitHub Pages, so I can access it anywhere and anytime.

### Main Topics

- **[Computer & Programming Fundamentals](/cs-notes/computer-and-programming-fundamentals)**
- **[Digital Signal Processing](/cs-notes/digital-signal-processing)**
- **[Digital Media Processing](/cs-notes/digital-media-processing)**
- **[Computer Networking](/cs-notes/computer-networking)**
- **[Data Structures & Algorithms](/cs-notes/data-structures-and-algorithms)**
- **[Computer Organization & Architecture](/cs-notes/computer-organization-and-architecture)**
- **[Operating System](/cs-notes/operating-system)**
- **[Theory of Computation & Automata](/cs-notes/theory-of-computation-and-automata)**
- **[Compilers & Programming Language](/cs-notes/compilers-and-programming-languages)**
- **[Database System](/cs-notes/database-system)**
- **[Computer Graphics](/cs-notes/computer-graphics)**
- **[Internet & Web](/cs-notes/internet-and-web)**
- **[Backend System](/cs-notes/backend-system)**
- **[Computer Security](/cs-notes/computer-security)**
- **[Machine Learning](/cs-notes/machine-learning)**
- **[Deep Learning](/cs-notes/deep-learning)**
- **[Software Engineering](/cs-notes/software-engineering)**
- **[Cloud Computing & Distributed Systems](/cs-notes/cloud-computing-and-distributed-systems)**

These topics are all completed, though they are subject to minor or major changes in the future. Change includes grammar or typo fix, clarification, correcting misinformation, and adding more notes. Mostly, they are listed under [TO-DOs](#to-dos).

### Android

These two are intended to be written and updated from time to time.

- [Android OS](/cs-notes/android-os)
- [Android Development](/cs-notes/android-development)

### Longest Notes

- [File System](/cs-notes/operating-system/file-system) (36282 char)
- [Parsing](/cs-notes/compilers-and-programming-languages/parsing) (33647 char)
- [Software Principles](/cs-notes/software-engineering/software-principles) (32161 char, due to many code examples)
- [Memory Management](/cs-notes/operating-system/memory-management) (27368 char)
- [Diffusion Model](/cs-notes/deep-learning/diffusion-model) (27316 char)

Excluding the [index page](/cs-notes/index).

### Credits

#### Site Generator

- This site is made using [Docusaurus](https://docusaurus.io/), an open source static site generator made by Meta with React.

#### AI Tools

- Assisted with few AI tools, such as [Poe](https://poe.com), [ChatGPT](https://chat.openai.com/), and [Bard](https://bard.google.com/). These helped me to know what to learn, paraphrasing, and gain information. Sometimes, main resources are combined with extra explanation from AI bots.

#### Learning Resources

- Various online learning resources were used to help me learn all the topics. These sources are included in each note. Although, not every information come from these, as some information may come from myself after reading from arbitrary source. I often choose what to learn in a particular topic by seeing the table of contents of a CS textbook.

#### Additional Resources

- [GitHub](https://github.com/) — For storing and hosting this site.
- [LT<sub>E</sub>X Extension for VS Code](https://github.com/valentjn/vscode-ltex) — Grammar/spell checker.
- [Perchance](https://perchance.org/ai-icon-generator) — favicon.ico generator.

> personal computer science notes website (art style waifu) by [@Perchance](https://perchance.org/ai-icon-generator)

![CS waifu](./cs-waifu.jpg)

### TO-DOs

For simplicity, TO-DOs are placed here instead of something like GitHub issues.

- **[add]**: add new note, which add a page in a topic.
- **[update]**: update existing notes, whether it is grammar/typo correction, correcting misinformation, clarifying, or adding more information to particular note.
- **[ref]**: add reference (hyperlink) to particular notes.

1. **[update]** Revisit all notes to fix English, typo, minor update/edit information, reformat to the latest writing styles, and add references to other notes. Any major update to note will be listed in separate to-dos.
2. **[update]** [/computer-graphics](/cs-notes/computer-graphics): Major update with new topics. Combine old note with new details from a textbook.
3. **[update]** [/internet-and-web](/cs-notes/internet-and-web): Minor update of information for all note.
4. **[update]** Provide an introduction to the topic of each note, to make it more reference friendly. For example, many notes may refer to [parsing](/cs-notes/compilers-and-programming-languages/parsing). However, it appears that the note doesn't have proper introduction to parsing. It instead continues to explain it as the next step of [scanning](/cs-notes/compilers-and-programming-languages/scanning). The "scanning" topic itself continues from the previous "[syntax](/cs-notes/compilers-and-programming-languages/syntax)" topic, which all root to the first note "[CPL Fundamentals](/cs-notes/compilers-and-programming-languages/cpl-fundamentals)". This assumes that reader has knowledge of the previous note in the whole topic. In other word, **separate context-dependent explanation and context-free explanation** Some note to include:
   - [/compilers-and-programming-languages/parsing](/cs-notes/compilers-and-programming-languages/parsing): about parsing
   - [/computer-organization-and-architecture/registers-and-ram](/cs-notes/computer-organization-and-architecture/registers-and-ram): provide general/introductory info about registers and ram in the beginning.
5. **[update]** If a note were to explain about something, always provide the generalized information first, then continue to explain that related to the topic. Some note to include:
   - [/internet-and-web/html#html-dom](/cs-notes/internet-and-web/html#html-dom): provide general information about DOM, then continue explaining the HTML DOM. This makes note like [XML](/cs-notes/digital-media-processing/xml) refer easily.
   - [/internet-and-web/web-url](/cs-notes/internet-and-web/web-url)/uri: add uniform resource identifier (URI) before actual web URL.
6. **[update]** [/digital-signal-processing/compression](/cs-notes/digital-signal-processing/compression)#bitmap-encoding: add bitmap encoding as another compression method.
7. **[add]** [/digital-media-processing](/cs-notes/digital-media-processing)/iso: add ISO file format.
8. **[update]** [/backend-system/websocket](/cs-notes/backend-system/websocket)#data-exchange: add web socket payload, frame, ping, pong, fin, rsv, close, timeout.
9. **[update]** [/backend-system/microservice](/cs-notes/backend-system/microservice): clarify possible wrong information.
10. **[update]** [/backend-system/soa](/cs-notes/backend-system/soa): clarify possible wrong information (emphasize more on its difference with microservice).
11. **[add]** [/cloud-computing-and-distributed-systems](/cs-notes/cloud-computing-and-distributed-systems)/distributed-systems-failure-detection-and-recovery: should add more about distributed failure detection and recovery mechanism.
    - Additional note:
      - replication, redundancy, reassignment, checkpointing, restart.
      - heartbeat mechanism, timeout, neighbour-based, gossip.
      - hot standby server clusters, active-takeover clusters, failover cluster.
12. **[update]** [/data-structures-and-algorithms/array](/cs-notes/data-structures-and-algorithms/array)#string-as-an-array: add information about string as a char array.
13. **[update]** [/computer-and-programming-fundamentals/memory](/cs-notes/data-structures-and-algorithms/array)#pointer--references-problems: add information about pointer and reference problems, such as dangling pointer, dangling reference, wild pointer, etc.
14. **[add]** [/backend-system](/cs-notes/backend-system)/serialization: add a new topic about serialization, possibly comparing various serialization method such as JSON, XML, language gnostic. Also, move protocol buffer here.
15. **[ref]** [/backend-system/rpc#protocol-buffers](/cs-notes/backend-system/rpc#protocol-buffers): ref to the previous serialization method, namely protocol buffer.
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
23. **[add]** [/digital-media-processing](/cs-notes/digital-media-processing)/zip: add ZIP archive as "other" digital media formats.
24. **[ref]** [/digital-media-processing/mime-type](/cs-notes/digital-media-processing/mime-type): ref to ZIP archive.
25. **[ref]** [/digital-media-processing/xml#xml-schema](/cs-notes/digital-media-processing/xml#xml-schema): ref to URI.
