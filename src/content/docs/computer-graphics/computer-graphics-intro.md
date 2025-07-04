---
title: Computer Graphics
slug: computer-graphics-intro
description: Computer Graphics Notes
---

### temporary

- Computer Graphics Fundamentals
  - scene
  - rendering
  - local, world, view, clip screen space
  - terminologies
  - interpolation
  - normalizing
  - vertex
    - VBO, VAO, EBO, vertices, indices
- 2d/3d transformation
  - coordinate system
  - euler rotation
  - gimbal lock
  - quarternion
  - why use 4d coordinate (afinne transformation)
- Render loop
- More about rendering
  - transparency rendering order
  - backface culling
- Graphics pipeline
- GUI
  - window system
- Frame buffer, front & back buffer, vsync.
- Primitive rendering, text rendering.
- Physics and implementation
  - gravity
  - rigid body
  - fluid
- Projection
  - orthographic, near plane, far plane
  - perspective, FOV
- Blurring, edge detection, filter
- Meshes
  - loading
  - model
- Depth buffer, buffer test, z buffer, z fighting
  - scene data -> transformation -> projection to view space -> depth value formula -> depth value -> depth value testing
- Stencil testing
- Blending, color, formula
- Shader
  - vertex shader
  - fragment shader
  - geometry shader
- Lightning
  - directional, point, spotlight
  - attenuation
  - specular, diffuse, ambient, phong, blinn phong
  - normal mapping
  - parallax mapping
  - HDR
  - bloom
  - SSAO / ambient occulsion
  - g buffer and deferred shading
- Directional shadow and point shadow
- Texture Mapping / Mipmapping
- PCF
- Over/under sampling
- Peter panning
- Shadow acne
- Depth map
- Light shadow space

# Computer Graphics

**Main source: [Cem Yuksel Introduction to Computer Graphics](https://youtube.com/playlist?list=PLplnkTzzqsZTfYh4UbhLGpI5kGd5oW_Hh)**

This may includes source outside the main source.

**Computer Graphics** is the branch of computer science that deals with creating, manipulating, and displaying visual content using computers.

The overview of computer graphics process involve these 3:

- **Modeling**, the process of representing 3D object or scene using mathematical models such as polygons, curves, or surfaces.
- **Rendering**, generating 2D images from 3D object to be shown in computer screen. Rendering also simulate virtual environment such as lighting. Involves a combination of techniques such as ray tracing, rasterization, and shading.
- **Animation**, manipulating movement and object in 3D models to produce illusion of life and action. This can be done with keyframe, motion capture, etc.

### All pages

- [Computer Images (Part 1)](/cs-notes/computer-graphics/computer-images-part-1)
- [Computer Images (Part 2)](/cs-notes/computer-graphics/computer-images-part-2)
- [2D Transformation](/cs-notes/computer-graphics/2d-transformation)
- [3D Transformation](/cs-notes/computer-graphics/3d-transformation)
- [GPU Pipeline](/cs-notes/computer-graphics/gpu-pipeline)
- [Low Level Graphics](/cs-notes/computer-graphics/low-level-graphics)
- [Curves](/cs-notes/computer-graphics/curves)
- [Surfaces](/cs-notes/computer-graphics/surfaces)
- [Textures (Part 1)](/cs-notes/computer-graphics/textures-part-1)
- [Textures (Part 2)](/cs-notes/computer-graphics/textures-part-2)
- [Shading (Part 1)](/cs-notes/computer-graphics/shading-part-1)
- [Shading (Part 2)](/cs-notes/computer-graphics/shading-part-2)
- [Rendering (Part 1)](/cs-notes/computer-graphics/rendering-part-1)
- [Rendering (Part 2)](/cs-notes/computer-graphics/rendering-part-2)
- [Ray Tracing](/cs-notes/computer-graphics/ray-tracing)
- [Shadows](/cs-notes/computer-graphics/shadows)
- [Reflections](/cs-notes/computer-graphics/reflections)
- [Sampling](/cs-notes/computer-graphics/sampling)
- [Signal Processing](/cs-notes/computer-graphics/signal-processing)
- [Computer Display](/cs-notes/computer-graphics/computer-display)
- [Computer Animation](/cs-notes/computer-graphics/computer-animation)
- [Physics-Based Animation](/cs-notes/computer-graphics/physics-based-animation)
- [Simulation](/cs-notes/computer-graphics/simulation)
