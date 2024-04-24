---
slug: /
id: intro
title: Intro
description: CS Notes
---

# CS Notes

My Computer Science notes from various online courses, tutorial, and lectures. I wanted to make my notes into a documentation-like layout to improve the overall readability and presentation.

**Most of the topics covers more on the theoretical side and less on the technical side.**

### All topics

- **[Digital Signal Processing](digital-signal-processing)**
- **[Computer & Programming Fundamentals](computer-and-programming-fundamentals)**
- **[Digital Media Processing](digital-media-processing)**
- **[Computer Networking](computer-networking)**
- **[Data Structures & Algorithms](data-structures-and-algorithms)**
- **[Computer Organization & Architecture](computer-organization-and-architecture)**
- **[Operating System](operating-system)**
- **[Theory of Computation & Automata](theory-of-computation-and-automata)**
- **[Programming Language Theory](programming-language-theory)**
- [Compilers](compilers)
- **[Database System](database-system)**
- **[Computer Graphics](computer-graphics)**
- **[Frontend Web Development](frontend-web-development)**
- **[Backend Development](backend-development)**
- **[Computer Security](computer-security)**
- **[Machine Learning](machine-learning)**
- **[Deep Learning](deep-learning)**
- **[Software Engineering](software-engineering)**
- **[Cloud Computing & Distributed Systems](cloud-computing-and-distributed-systems)**

\*Bolded are completed

### Longest Notes

- [File System](operating-system/file-system) (36282 char)
- [Software Principles](software-engineering/software-principles) (30368 char, due to many code examples)
- [Memory Management](operating-system/memory-management) (27368 char)
- [Diffusion Model](deep-learning/diffusion-model) (27316 char)
- [Parsing](/programming-language-theory/parsing) (25648 char)

Excluding the [index page](/index).

### Credits

#### Site Generator

- This site is made using [Docusaurus](https://docusaurus.io/) an open source static site generator made by Meta with React.

#### AI Chatbot Software

- Assisted with few AI tools [Assistant Poe](https://poe.com), [ChatGPT](https://chat.openai.com/), [Bard](https://bard.google.com/). **Most of the source here are also from AI**. I combined what the resources say with extra explanation from AI bots (or paraphrasing).

#### Online Courses and Media Source

- Various online resource were used in the creation of this site, I try to include all resource in each section. These resources act as the curriculum of what should I learn and the structure of what a topic contains.

#### Additional Resources

- [GitHub](https://github.com/) - For storing and hosting this site.

### TODO :

- **[add]** : add new notes
- **[update]** : update existing notes
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

4. **[update]** [/digital-signal-processing/compression](/digital-signal-processing/compression)#svd-compression -> add svd compression.
5. **[update]** [/digital-signal-processing/compression](/digital-signal-processing/compression)#bitmap-encoding -> add bitmap encoding as compression.
6. **[add]** [/digital-media-processing](/digital-media-processing)/iso -> add ISO file format.
7. **[update]** [/backend-development/websocket](/backend-development/websocket)#data-exchange -> add web socket payload, frame, ping, pong, fin, rsv, close, timeout.
8. **[ref]** [/computer-security/reverse-engineering](/computer-security/reverse-engineering) -> ref to decompilation in compilers.
9. **[update]** [/backend-development/caching](/backend-development/caching) -> move caching to [computer-and-programming-fundamentals](/computer-and-programming-fundamentals), since it is a general topic. Also, add info about cpu cache, backend cache, local cache, and other cache terminology or techniques.
10. **[update]** [/backend-development/microservice](/backend-development/microservice) -> clarify wrong information.
11. **[update]** [/backend-development/soa](/backend-development/soa) -> clarify wrong information (its different with microservice).
12. **[add]** [/cloud-computing-and-distributed-systems](/cloud-computing-and-distributed-systems)/distributed-systems-failure-detection-and-recovery -> should add more about distributed failure detection and recovery mechanism.
    - Additional note:
    - replication, redundancy, reassignment, checkpointing, restart.
    - heartbeat mechanism, timeout, neighbour-based, gossip.
    - hot standby server clusters, active-takeover clusters, failover cluster.
13. **[ref]** [/programming-language-theory/target-architecture](/programming-language-theory/target-architecture) -> ref to compiler optimization in compilers.
14. **[ref]** [/programming-language-theory/control-flow](/programming-language-theory/control-flow) -> ref to compiler optimization, jump table in compilers.
15. **[ref]** [/programming-language-theory/control-flow](/programming-language-theory/control-flow) -> ref to compiler optimization, tail recursion in compilers.
16. **[update]** [/data-structures-and-algorithms/array](/data-structures-and-algorithms/array)#string-as-an-array -> add information about string.
17. **[update]** [/computer-and-programming-fundamentals/memory](/data-structures-and-algorithms/array)#pointer--references-problems -> add information about pointer and reference problems.
18. **[add]** [/backend-development](/backend-development)/serialization -> add full topic about serialization, possibly comparing various serialization method such as json, xml, language gnostic, protocol buffer.
19. **[ref]** [/backend-development/rpc#protocol-buffers](/backend-development/rpc#protocol-buffers) -> ref to the previous serialization method, namely protocol buffer.
20. **[update]** [/data-structures-and-algorithms/hash-table](/data-structures-and-algorithms/hash-table)#log-structured-hash-table -> add log-structured hash table.
21. **[update]** [/database-system/logging-and-recovery#migration](/database-system/logging-and-recovery#migration) -> add more about migration, particularly how it works.
22. **[update]** -> [/cloud-computing-and-distributed-systems/distributed-systems-model#consensus](/cloud-computing-and-distributed-systems/distributed-systems-model#consensus) add about Byzantine failures, Two Generals' Problem.
23. **[update]** [/data-structures-and-algorithms/graph](/data-structures-and-algorithms/graph)#graph-problems -> add common problem about graph, such as graph coloring.