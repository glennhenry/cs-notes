---
title: Intro
slug: index
description: CS Notes
---

My computer science notes from online courses, tutorial, books, blogs, Wikipedia pages, lectures, and many other online sources.

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

### Credits

- This site is made using [Starlight](https://starlight.astro.build/) with the customized [Obsidian theme](https://fevol.github.io/starlight-theme-obsidian/).
- [GitHub](https://github.com/) — For storing and hosting this site.
- [LT<sub>E</sub>X Extension for VS Code](https://github.com/valentjn/vscode-ltex) — Grammar/spell checker.
- Assisted with few AI tools, such as [Poe](https://poe.com), [ChatGPT](https://chat.openai.com/), and [Bard](https://bard.google.com/). They are mostly used for paraphrasing and generating extra information.
- [Perchance](https://perchance.org/ai-icon-generator) — favicon.ico generator.
- And last but not least, **various online learning resources** which are included in each note.

### TO-DOs

- **[add]**: to add a new note.
- **[update]**: update existing notes.
- **[ref]**: add reference to particular notes.

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

#### Process

*don't mind this heading as it forces the graph view to render*
