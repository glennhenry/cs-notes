---
slug: /digital-media-processing/gif
id: gif
title: GIF
description: GIF
---

**Main Source:**

- **[GIF — Wikipedia](https://en.wikipedia.org/wiki/GIF)**

**GIF (Graphics Interchange Format)** is a digital image format that supports both static and animated images. GIF also supports transparency and uses [lossless compression](/digital-signal-processing/compression#lossless-compression).

### GIF Representation

#### GIF Color Palette

GIF uses an [indexed color palette](/digital-media-processing/bmp#indexed-color), similar to [BMP](/digital-media-processing/bmp).

Colors are stored in the color table, and reference with index. Each entry in the color table represents a specific color in RGB (24 bits in size). The number of colors in the color table is typically limited to a maximum of 256 ($2^8$), also called 8-bit color palette.

![Color Table example](./color-table.png)  
Source: http://www.flounder.com/colortable.htm

#### GIF Animation

Animated images are made possible through the sequence of image that is played in short amount of time, creating the illusion of motion. Each image in sequence is called **frame**. In GIF, the rate of frame played is not defined with FPS like animation or video. Instead, each frame has its defined duration.

For example, a frame with the duration of 10 centiseconds would mean that the frame is displayed for 0.1 seconds. This will result in a perceived frame rate of 10 frames per second if we have 10 frames of the same duration. The minimum of GIF frame duration is 1 centisecond (0.01 seconds), and the maximum duration is 65535 centiseconds (655.35 seconds or approximately 10 minutes and 55 seconds).

GIF continuously display an image for specific duration, then change to the next image or frame. This continuous process creates the illusion of motion. However, GIF may not be suitable for long animation due to the use of lossless compression and indexed color pallete, which can make the file larger and some color banding or loss of detail in certain types of images.

![Example of GIF animation, a ball bounces](./gif-example.gif)  
Source: https://www.litmus.com/blog/a-guide-to-animated-gifs-in-email

### GIF Compression

GIF uses several lossless compression:

- **LZW Compression**: LZW (Lempel-Ziv-Welch) compression is the primary compression algorithm used in GIF. It reduces the file size by indexing encountered symbols.

  LZW compression operates by creating a dictionary of symbol encountered. This process is dynamic, meaning it keeps expanding the dictionary if new pattern or sequences encountered in the data. When the algorithm encounters a sequence that is already in the dictionary, it simply outputs the corresponding code.

  ![Example of LZW Table](./lzw-table.png)  
  Source: https://www.semanticscholar.org/paper/Optimization-of-LZW-Compression-Algorithm-With-of-Maulunida-Solichin/54ecf3209d9e52f6795b55a8e4760f8e3b10009c/figure/4

- **Palette-Based Color**: GIF utilizes the [palette-based color model](#gif-color-palette).
- **Color Substitution**: GIF employs color substitution to optimize the compression further. In cases where a color occurs only a few times in the image, the GIF format can replace that color with a neighboring color from the color table. This substitution reduces the number of unique colors needed to represent the image accurately, resulting in additional compression.

### GIF Structure

GIF file consist of several components:

1. **File Header**: GIF starts with fixed-size header that identifies it as a GIF file. It contains signature such as "GIF89a" or "GIF87a" to indicate the GIF version. Also includes width and height of the image.
2. **Logical Screen Descriptor**: This contains the global information of the GIF file. This includes width and height of canvas, color index, color resolution, background color, and pixel aspect ratio.
3. **Global Color Table (optional)**: If the logical screen descriptor indicates the presence of a global color table, it is stored immediately after the logical screen descriptor.
4. **Image & Animation Data**: Image and animation follows the color table (if present). Each frame or image consist of:

   - **Graphics Control Extension**:
     - **Frame Delay**: Time delay before displaying the next frame
     - **Transparency Flag & Index**: Indicates if transparency is used with the index of the transparent color in the color table
   - **Image Descriptor**:
     - **Width and Height**: Dimensions of the image frame in pixels
     - **Local Color Table Flag**: Indicates the presence of a local color table
     - **Interlaced Flag**: Indicates if the image is interlaced
     - **Sort Flag**: Specifies if the local color table is sorted
   - **Image Data**: The color of the image using the color table index

5. **Trailer**: End of the GIF file marker, consist of single a single-byte value (0x3B).

![The structure of GIF file](./gif-structure.jpg)  
Source: https://openpreservation.org/blogs/good-gif-hunting/

### GIF Interlacing

GIF interlacing is a technique used to progressively display images as they are being downloaded or loaded. It provides an initial rendering that displays a lower resolution version of the image. It gradually improves the quality and keeps rendering more scanline slowly.

When a GIF image is interlaced, it is divided into a series of scan lines that are displayed in a specific order, allowing a low-resolution version of the image to be seen quickly, followed by a gradual improvement in quality as more scan lines are loaded.

The interlacing process rearranges how image data is loaded and rendered in a different order, consisting of multiple passes:

- Pass 1: The first pass displays every 8th row of the image, starting from the top row (row 0). So, the rows that will be displayed in this first pass are: 0, 8, 16, 24, 32, and so on.
- Pass 2: The second pass displays every 8th row, starting from the 4th row.
- Pass 3: The third pass displays every 4th row, starting from the 2nd row.
- Pass 4: The fourth pass displays every 2nd row, starting from the 1st row.

![Example of interlacing](./interlacing-demo.gif)  
Source: https://commons.wikimedia.org/wiki/File:Interlacing_demo.gif
