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
- [Theory of Computation & Automata](theory-of-computation-and-automata)
- [Compilers](compilers)
- [Programming Language Theory](programming-language-theory)
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
- [Query Language](database-system/query-language) (23218 char)

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

1. **[update]** computer-graphics : Should be major updated. Rewrite most of the notes due to lack of detail, lack of more important topic. Some topic to include :

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

2. **[update]** frontend-web-development : Minor update for all note, also some topic to include for addition :

   - Search engine, crawler.

3. **[update]** Revisit notes to fix English, typo, and possibly correct some information :

   - Computer Graphics
   - Frontend Web Development
   - Digital Signal Processing
   - Digital Media Processing
   - Computer Networking
   - Machine Learning
   - Deep Learning
   - Backend Development
   - Computer & Programming Fundamentals
   - Data Structures & Algorithms
   - Computer Security

4. **[update]** digital-signal-processing : /compression#svd-compression -> add svd compression.
5. **[add]** /digital-media-processing : /iso -> add ISO file format.
6. **[update]** backend-development : /websocket -> #data-exchange, add web socket payload, frame, ping, pong, fin, rsv, close, timeout.
7. **[ref]** /data-structures-and-algorithms : /complexity-theory -> ref to Turing machine and other TOC related terms.
8. **[ref]** /computer-security : /reverse-engineering -> ref to decompilation in compilers.
9. **[ref]** /software-engineering : /other-architecture-patterns -> ref to state machine in theory-of-computation-and-automata.
10. **[update]** /index : add index page containing the list of all notes
11. **[update]** /data-structures-and-algorithms : /graph -> add more terminology about graphs.
12. **[update]** /backend-development : /caching -> add more about caching.
