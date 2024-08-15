---
slug: /digital-media-processing/swf
id: swf
title: SWF
description: SWF
---

**Main Source:**

- **[Adobe Flash Player — Wikipedia](https://en.wikipedia.org/wiki/Adobe_Flash_Player)**
- **[SWF — Wikipedia](https://en.wikipedia.org/wiki/SWF)**

SWF is a file format for flash player. **Flash player** is a multimedia software for the playback of multimedia content, such as animations, videos, and interactive applications, on web browsers. Flash player use a variety of assets such as [vector graphics](/computer-graphics/computer-images-part-1), 3d graphics, video, audio, and [raster image](/computer-graphics/computer-images-part-1). In addition to assets, we can also add interactivity to the element using a scripting language called **ActionScript**.

![Example of flash player animation](./flash-player-example.png)  
Source: https://addons.mozilla.org/id/firefox/addon/flashplayer-swf-to-html/

### How flash player work

Flash player content are stored in a file with `.swf` format. Developer creates flash player content, this includes all the assets used in the multimedia content as well as script that defines their behavior or interaction. All of these are compiled into binaries data, which is contained within the SWF file.

A browser must have an engine that can interpret SWF file and run its content. Some flash player engine can be "plugged-in" onto the browser, or built-in within the browser. The flash player itself and the SWF file structure is complex. In high-level, the binaries in the SWF file is supposed to be [parsed](/compilers-and-programming-languages/parsing), interpreted, then translated into corresponding code to render its content. Here, the flash player engine or plugin know how to do this.

The rendering process may involve low-level instruction from the SWF, such as drawing triangle and coloring it, placing them in the correct position, loading certain images, or playing audio. They will be converted into high-level instruction governed by the browser API.
