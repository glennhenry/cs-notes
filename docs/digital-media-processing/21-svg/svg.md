---
slug: /digital-media-processing/svg
id: svg
title: SVG
description: SVG
---

**Main Source :**

- **[Wikipedia SVG](https://en.wikipedia.org/wiki/SVG)**
- **[SVG in 100 seconds - Fireship](https://youtu.be/emFMHH2Bfvo)**

**SVG (Scaleable Vector Graphics)** is an [XML](/digital-media-processing/xml)-based vector image format used for displaying two-dimensional graphics on the web. SVG images are resolution-independent, meaning they can be scaled up or down without losing quality.

### SVG Vector

SVG defines a coordinate system where the origin (0,0) is typically at the top-left corner of the SVG viewport. The x-axis extends horizontally to the right, and the y-axis extends vertically downwards.

SVG uses various shape elements, such as `<rect>`, `<circle>`, `<ellipse>`, `<line>`, and `<path>`. Each shape element is represented by an XML tag and associated attributes that define its size, position, and other properties. SVG draws these shape using coodinate system, this whats make SVG scalable.

![SVG coordinate system](./svg-coordinate.png)  
Source : https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Positions

### SVG Structure

SVG follows the tree hierarchical structure of XML :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="..." height="..." viewBox="...">
  <!-- SVG content goes here -->
</svg>
```

- `<?xml version="1.0" encoding="UTF-8"?>` : Begins with the version and encoding declaration of XML.
- `svg` : Followed by `svg` tag as the root element, that includes namespace, width and height of the SVG file, viewBox that used to specify the portion of the SVG canvas that should be visible and scaled to fit the available space.

For example, this is an SVG file that defines a red filled heart shape :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="100" height="100"
     viewBox="0 0 100 100">
  <path d="M50 90c-15-15-30-30-30-50c0-20
           20-30 30-40c10 10 30 20 30 40c0 20-15 35-30 50z"
        fill="red" />
</svg>
```

- `<path>` : We specify the path we want to draw, the `d` attribute indicate the command. The path uses letter as the command to draw which kind of path or curves. This includes moveto (M), lineto (L), curveto (C), and closepath (Z). The number is used to specify the coordinate with `-` as negative number. The uppercase indicate that we move to absolute coordinate while the lowercase is relative to last coordinate.
