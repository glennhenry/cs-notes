---
slug: /
id: intro
title: Intro
description: CS Notes
---

My computer science notes from various online courses, tutorial, books, blogs, Wikipedia pages, and lectures. I wanted to make my notes in website, so I can access it anywhere and anytime. I also made it to look like a documentation to improve the overall readability and presentation.

### Main CS topics

- **[Digital Signal Processing](digital-signal-processing)**
- **[Computer & Programming Fundamentals](computer-and-programming-fundamentals)**
- **[Digital Media Processing](digital-media-processing)**
- **[Computer Networking](computer-networking)**
- **[Data Structures & Algorithms](data-structures-and-algorithms)**
- **[Computer Organization & Architecture](computer-organization-and-architecture)**
- **[Operating System](operating-system)**
- **[Theory of Computation & Automata](theory-of-computation-and-automata)**
- **[Compilers & Programming Language](compilers-and-programming-languages)**
- **[Database System](database-system)**
- **[Computer Graphics](computer-graphics)**
- **[Frontend Web Development](frontend-web-development)**
- **[Backend Development](backend-development)**
- **[Computer Security](computer-security)**
- **[Machine Learning](machine-learning)**
- **[Deep Learning](deep-learning)**
- **[Software Engineering](software-engineering)**
- **[Cloud Computing & Distributed Systems](cloud-computing-and-distributed-systems)**

Everything is completed. However, there are still many minor and major changes to be made in the future. Changes are probably grammar/typo fix, clarification, revision, update of more correct information, and adding more notes. Mostly, they are listed under [TODOs](#todo). It is not known when I will be able to complete all of this.

### Android

These will never complete since it is intended to be written and updated from time to time.

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

- This site is made using [Docusaurus](https://docusaurus.io/) an open source static site generator made by Meta with React.

#### AI Chatbot Software

- Assisted with few AI tools [Assistant Poe](https://poe.com), [ChatGPT](https://chat.openai.com/), [Bard](https://bard.google.com/). **Most of the source here are also from AI**. I combined what main resources say with extra explanation from AI bots. They are heavily used for paraphrasing.

#### Online CS Resources

- Various online resource were used in the creation of this site. These sources are included in each note. In fact, some information may come from myself after reading from arbitrary source. These resources mainly act as the curriculum of what should a topic contains and definitely for the information itself.

#### Additional Resources

- [GitHub](https://github.com/) - For storing and hosting this site.

### TODO

For simplicity, TODOs are placed here instead of something like GitHub issues.

- **[add]** : add new notes (new page)
- **[update]** : update existing notes, whether it is fixing sentences, adding more information, or giving clarification.
- **[ref]** : add reference to particular notes

1. **[update]** Revisit all notes to fix English, typo, update/edit information, add reference.
2. **[update]** [/computer-graphics](/computer-graphics) : Should be major updated. Rewrite most of the notes due to lack of detail, lack of more important topic. Some topic to include :

   - fundamentals
     - scene
     - rendering
     - local, world, view, clip screen space
     - terminologies
     - interpolation
     - normalizing
     - vertex
       - vbo, vao, ebo, vertices, indices
   - 2d/3d transformation
     - coordinate system
     - euler rotation
     - gimbal lock
     - quarternion
     - why use 4d coordinate( afinne transformation )
   - render loop
   - more about rendering
     - transparency rendering order
     - backface culling
   - graphics pipeline
   - gui
     - window system
   - Frame buffer, front & back buffer, vsync.
   - Primitive rendering, text rendering.
   - physics and implementation
     - gravity
     - rigid body
     - fluid
   - projection

     - ortographic, near plane, far plane
     - perspective, fov

   - Blurring, edge detection, filter
   - mesh
     - loading
     - model
   - depth buffer, buffer test, z buffer, z fighting
     - scene data -> trasnformation -> projection to view space -> depth value formula -> depth value -> depth value testing
   - stencil testing
   - blending, color, formula
   - shader
     - vertex shader
     - fragment shader
     - geometry shader
   - lightning
     - directional, point, spotlight
     - attenuation
     - spcular, diffuse, ambient, phong, blinn phong
     - normal mapping
     - parallax mapping
     - HDR
     - bloom
     - SSAO / ambient occulsion
     - g buffer and deferred shading
   - directional shadow and point shadow
   - mapping
   - pcf
   - over sampling
   - peter panning
   - shadow acne
   - depth map
   - light shadow space

3. **[update]** [/frontend-web-development](/frontend-web-development) : Minor update for all note, also some topic to include for addition :

   - Search engine, crawler.
   - Rename the topic to web-and-internet, because it doesn't contain development.

4. **[update]** [/digital-signal-processing/compression](/digital-signal-processing/compression)#svd-compression -> add svd compression.
5. **[update]** [/digital-signal-processing/compression](/digital-signal-processing/compression)#bitmap-encoding -> add bitmap encoding as compression.
6. **[add]** [/digital-media-processing](/digital-media-processing)/iso -> add ISO file format.
7. **[update]** [/backend-development/websocket](/backend-development/websocket)#data-exchange -> add web socket payload, frame, ping, pong, fin, rsv, close, timeout.
8. **[update]** [/backend-development/caching](/backend-development/caching) -> move caching to [computer-and-programming-fundamentals](/computer-and-programming-fundamentals), since it is a general topic. Also, add info about cpu cache, backend cache, local cache, and other cache terminology or techniques.
9. **[update]** [/backend-development/microservice](/backend-development/microservice) -> clarify wrong information.
10. **[update]** [/backend-development/soa](/backend-development/soa) -> clarify wrong information (its different with microservice).
11. **[add]** [/cloud-computing-and-distributed-systems](/cloud-computing-and-distributed-systems)/distributed-systems-failure-detection-and-recovery -> should add more about distributed failure detection and recovery mechanism.
    - Additional note:
    - replication, redundancy, reassignment, checkpointing, restart.
    - heartbeat mechanism, timeout, neighbour-based, gossip.
    - hot standby server clusters, active-takeover clusters, failover cluster.
12. **[update]** [/data-structures-and-algorithms/array](/data-structures-and-algorithms/array)#string-as-an-array -> add information about string.
13. **[update]** [/computer-and-programming-fundamentals/memory](/data-structures-and-algorithms/array)#pointer--references-problems -> add information about pointer and reference problems.
14. **[add]** [/backend-development](/backend-development)/serialization -> add full topic about serialization, possibly comparing various serialization method such as json, xml, language gnostic, protocol buffer.
15. **[ref]** [/backend-development/rpc#protocol-buffers](/backend-development/rpc#protocol-buffers) -> ref to the previous serialization method, namely protocol buffer.
16. **[update]** [/data-structures-and-algorithms/hash-table](/data-structures-and-algorithms/hash-table)#log-structured-hash-table -> add log-structured hash table.
17. **[update]** [/database-system/logging-and-recovery#migration](/database-system/logging-and-recovery#migration) -> add more about migration, particularly how it works.
18. **[update]** -> [/cloud-computing-and-distributed-systems/distributed-systems-model#consensus](/cloud-computing-and-distributed-systems/distributed-systems-model#consensus) add about Byzantine failures, Two Generals' Problem.
19. **[update]** [/data-structures-and-algorithms/graph](/data-structures-and-algorithms/graph)#graph-problems -> add common problem about graph, such as graph coloring.
20. **[ref]** [/compilers-and-programming-languages/compiler-optimization](/compilers-and-programming-languages/compiler-optimization) -> ref to graph coloring.
21. **[update]** [/computer-organization-and-architecture](/computer-organization-and-architecture) -> add about low level instruction, actual example of simple processor like 8080 with emulation as the example.
	- hex code disassemble to original assembly
	- cpu opcode emulation, simulate each kind of instruction
22. **[update]** [/software-engineering](/software-engineering) -> add/update/edit more about terminologies:
	- [/software-engineering/version-control](/software-engineering/version-control): release tags, feature-based vs trunk-based development (refer to [/software-engineering/software-process](/software-engineering/software-process)).
	- [/software-engineering/software-deployment](/software-engineering/software-deployment): a/b testing, canary release, feature flags factory.
	- [/software-engineering/creational-patterns](/software-engineering/creational-patterns): factory pattern and its use in configuration file.
	- [/software-engineering/behavioral-patterns](/software-engineering/behavioral-patterns): strategy pattern.
