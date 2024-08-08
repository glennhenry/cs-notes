---
slug: /
id: intro
title: Intro
description: CS Notes
---

My computer science notes from various online courses, tutorial, books, blogs, Wikipedia pages, and lectures. Being used reading documentation, I wanted to make my notes look similar. It is also hosted on GitHub Pages, so I can access it anywhere and anytime.

### Main Topics

- **[Computer & Programming Fundamentals](computer-and-programming-fundamentals)**
- **[Digital Signal Processing](digital-signal-processing)**
- **[Digital Media Processing](digital-media-processing)**
- **[Computer Networking](computer-networking)**
- **[Data Structures & Algorithms](data-structures-and-algorithms)**
- **[Computer Organization & Architecture](computer-organization-and-architecture)**
- **[Operating System](operating-system)**
- **[Theory of Computation & Automata](theory-of-computation-and-automata)**
- **[Compilers & Programming Language](compilers-and-programming-languages)**
- **[Database System](database-system)**
- **[Computer Graphics](computer-graphics)**
- **[Internet & Web](internet-and-web)**
- **[Backend System](backend-system)**
- **[Computer Security](computer-security)**
- **[Machine Learning](machine-learning)**
- **[Deep Learning](deep-learning)**
- **[Software Engineering](software-engineering)**
- **[Cloud Computing & Distributed Systems](cloud-computing-and-distributed-systems)**

These topics are all completed, though they are subject to minor or major changes in the future. Change includes grammar or typo fix, clarification, correcting misinformation, and adding more notes. Mostly, they are listed under [TO-DOs](#to-dos).

### Android

These two are intended to be written and updated from time to time.

- [Android OS](android-os)
- [Android Development](android-development)

### Longest Notes

- [File System](operating-system/file-system) (36282 char)
- [Parsing](/compilers-and-programming-languages/parsing) (33647 char)
- [Software Principles](software-engineering/software-principles) (32161 char, due to many code examples)
- [Memory Management](operating-system/memory-management) (27368 char)
- [Diffusion Model](deep-learning/diffusion-model) (27316 char)

Excluding the [index page](/index).

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
2. **[update]** [/computer-graphics](/computer-graphics): Major update with new topics. Combine old note with new details from a textbook.
3. **[update]** [/internet-and-web](/internet-and-web): Minor update of information for all note.
4. **[update]** [/digital-signal-processing/compression](/digital-signal-processing/compression)#bitmap-encoding: add bitmap encoding as another compression method.
5. **[add]** [/digital-media-processing](/digital-media-processing)/iso: add ISO file format.
6. **[update]** [/backend-system/websocket](/backend-system/websocket)#data-exchange: add web socket payload, frame, ping, pong, fin, rsv, close, timeout.
7. **[update]** [/backend-system/microservice](/backend-system/microservice): clarify possible wrong information.
8. **[update]** [/backend-system/soa](/backend-system/soa): clarify possible wrong information (emphasize more on its difference with microservice).
9. **[add]** [/cloud-computing-and-distributed-systems](/cloud-computing-and-distributed-systems)/distributed-systems-failure-detection-and-recovery: should add more about distributed failure detection and recovery mechanism.
   - Additional note:
     - replication, redundancy, reassignment, checkpointing, restart.
     - heartbeat mechanism, timeout, neighbour-based, gossip.
     - hot standby server clusters, active-takeover clusters, failover cluster.
10. **[update]** [/data-structures-and-algorithms/array](/data-structures-and-algorithms/array)#string-as-an-array: add information about string as a char array.
11. **[update]** [/computer-and-programming-fundamentals/memory](/data-structures-and-algorithms/array)#pointer--references-problems: add information about pointer and reference problems, such as dangling pointer, dangling reference, wild pointer, etc.
12. **[add]** [/backend-system](/backend-system)/serialization: add a new topic about serialization, possibly comparing various serialization method such as JSON, XML, language gnostic. Also, move protocol buffer here.
13. **[ref]** [/backend-system/rpc#protocol-buffers](/backend-system/rpc#protocol-buffers): ref to the previous serialization method, namely protocol buffer.
14. **[update]** [/data-structures-and-algorithms/hash-table](/data-structures-and-algorithms/hash-table)#log-structured-hash-table: add log-structured hash table, which is a hash table stored in a file system. Just explain basic idea of how it works, then explain how a more scalable data structure is the idea of common data structure for database index, made with b-tree.
15. **[update]** [/database-system/logging-and-recovery#migration](/database-system/logging-and-recovery#migration): add more about migration, particularly how it works.
16. **[update]**: [/cloud-computing-and-distributed-systems/distributed-systems-model#consensus](/cloud-computing-and-distributed-systems/distributed-systems-model#consensus) add about Byzantine failures, Two Generals' Problem.
17. **[update]** [/data-structures-and-algorithms/graph](/data-structures-and-algorithms/graph)#graph-problems: add common problem about graph, such as graph coloring.
18. **[ref]** [/compilers-and-programming-languages/compiler-optimization](/compilers-and-programming-languages/compiler-optimization): ref to graph coloring.
19. **[update]** [/computer-organization-and-architecture](/computer-organization-and-architecture): add about low level instruction, actual example of simple processor like 8080 with emulation as the example.
    - hex code disassemble to original assembly
    - cpu opcode emulation, simulate each kind of instruction
    - can refer to 8080 emulation in emulator 101
20. **[update]** [/software-engineering](/software-engineering): add/update/edit more about terminologies:
    - [/software-engineering/version-control](/software-engineering/version-control): release tags, feature-based vs trunk-based development (refer to [/software-engineering/software-process](/software-engineering/software-process)).
    - [/software-engineering/software-deployment](/software-engineering/software-deployment): a/b testing, canary release, feature flags factory.
    - [/software-engineering/creational-patterns](/software-engineering/creational-patterns): factory pattern and its use in configuration file.
    - [/software-engineering/behavioral-patterns](/software-engineering/behavioral-patterns): strategy pattern.
