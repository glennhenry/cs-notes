---
slug: /digital-media-processing/image-properties
id: image-properties
title: Image Properties
description: Image Properties
---

**Main Source : Various source from Google and Youtube**

Computers represent images as a collection pixels which is the smallest unit of an image. A pixel represent color or intensity in a specific location. Image with pixel are called **raster images**.

:::tip
Find out more about images representation in [Computer Images (Part 1)](/computer-graphics/computer-images-part-1) and [Computer Images (Part 2)](/computer-graphics/computer-images-part-2)
:::

A image has more than just a color, it includes various properties that describe more of the image characteristics and attributes. Some of the information such as date taken, image format and compression methods, size, and etc; about image is stored in metadata. Metadata is typically stored in the image file header itself.

Here are some image properties :

1.  **Size / Resolution** : The dimensions of the image, related to amount of pixels present in image, measured by width x height. The higher resolution the more detailed the image is.  
    ![Comparison of small to high resolution](./resolution.png)  
    Source : https://vimeo.com/blog/post/the-basics-of-image-resolution/

2.  **Color Space** : Represent how the color are represented, such as RGB, RGBA, CMYK, HSV or grayscale.  
    ![Color space HSL and HSV](./color-space.png)  
    Source : https://en.wikipedia.org/wiki/HSL_and_HSV

3.  **Bit Depth** : Measure of how many number of bits used to represent each pixel in the image. A common bit depth is 8 bit, it is able to represent 256 different color from 0-255. With red, green, blue channel altogether represent 16.777.216 different color.
    ![Show 8 bit, 10 bit, 12 bit depth with the number of possible colors](./bit-depth.png)  
    Source : https://youtu.be/6yXYxp0UiVg

4.  **Image Format** : The image format used, such as JPEG, PNG, TIFF, BMP, GIF, or RAW. They represent different feature and compression methods.

5.  **Spatial Domain** : Properties that describe the spatial characteristics of the image, such as brightness, contrast, sharpness, texture, edges, and patterns. 

    - **Brightness** : Overall lightness or darkness of an image.

    - **Contrast** : The difference of brightness between the lightest and darkest parts of an image. Higher contrast make lighter part and darker part easier to differentiate.

    - **Alpha** : Transparency or opacity of an image or a specific pixel within an image. Typically in RGBA color space where the value range between 0 (invisible) to 1 (visible).

    - **Gamma** : Measure of the contrast between the darker and lighter parts of an image. A higher gamma value means that the darker parts of the image will appear darker, while a lower gamma value means that the darker parts of the image will appear lighter. Gamma correction is an adjustment applied to image pixel values to compensate for differences in the way human eyes perceive brightness.

    - **Saturation** : Saturation controls the intensity or purity of colors in an image. A high saturation value produces vibrant and vivid colors, while a low saturation value results in more muted or grayscale-like colors.

    - **Hue** : Represents the color itself, such as red, blue, green, etc. It denotes the position of a color on the color wheel.

    - **Dynamic Range** : Range of brightness levels that can be represented in an image, from the darkest shadows to the brightest highlights.

    - **Sharpness** : Represents how abrupt is the changes of a pixel color to another.

    - **Color Temperature** : Color temperature is a measure of the warmth or coolness of a light source. It is measured in degrees Kelvin. Warm light sources, such as candles and incandescent bulbs, have a low color temperature, while cool light sources, such as fluorescent bulbs and sunlight, have a high color temperature.

    ![Shows how all of the spatial domain affect the image](./spatial-domain.png)  
     Source : [Brightness](https://www.gifgit.com/image/adjust-image-brightness),
    [Contrast](https://visualdisplaysltd.com/resources/tools/specifying/contrast),
    [Alpha](https://blenderartists.org/t/alpha-vs-alpha-clip-transparency-and-display-problem/514289),
    [Gamma](https://doc.stride3d.net/4.0/en/manual/graphics/post-effects/color-transforms/gamma-correction.html),
    [Saturation](https://apps4lifehost.com/Apps/SmartSaturation/), [Hue](https://en.wikipedia.org/wiki/Hue),
    [Dynamic Range](https://www.imaginated.com/blog/what-is-dynamic-range/),
    [Sharpness](https://www.imatest.com/support/docs/23-1/sharpness/),
    [Color Temperature](https://www.ledrise.eu/blog/color-temperature-explained-lr/)

:::tip
Find out more about computer display [here](/computer-graphics/computer-display)
:::
