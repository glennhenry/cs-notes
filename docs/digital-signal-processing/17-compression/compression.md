---
slug: /digital-signal-processing/compression
id: compression
title: Compression
description: Compression
---

**Main Source : [Compression - CrashCourse Computer Science #21](https://youtu.be/OtDxDvCpPL4)**

**Compression** is the process of reducing the size or bit rate required to represent a signal while preserving as much of the original information as possible.

By removing data redundancies, it can lead to benefits such as reduced storage requirements, faster transmission, and improved resource utilization.

There are two main types of compression :

### Lossless Compression

Lossless compression algorithms aim to represent the signal in a compressed format without any loss of information. The original signal can be perfectly reconstructed from the compressed representation. Common example includes :

#### Run-length Encoding (RLE)

RLE is a simple compression algorithm to reduce repeating data without any loss of information. RLE works by replacing consecutive repeated symbols with a count of the repetition. Its effectiveness depends on the characteristics of the data whether it contains a lot of repetition or not.

![Shows how RLE reduce repeating data](./rle.png)  
Source : https://iq.opengenus.org/run-length-encoding/, https://api.video/what-is/run-length-encoding/

#### Huffman Encoding

Huffman encoding is a technique that assigns some codes to input based on their occurrence frequency. The most frequent occurring data will have shorter code, this way we can represent the data in shorter and smaller size.

#### Huffman Process

1. **Huffman Frequency Table** : First, each occurrence of data is counted and a frequency table will be created. For example, consider this data `abbaacbbdefffddfff`, the frequency table will be :

   ![Map of each character to its frequency](./huffman-frequency-table.png)

2. **Huffman Tree Construction** : With the frequency table, we will construct a [binary tree](/data-structures-and-algorithms/tree#binary-tree) where the child-most node is the less frequent data and the top most is the most frequent data. From the bottom child node, we will merge the two of the lowest frequency to create the parent node representing their frequency sum. We will keep doing this up to the top most node.

   Constructing the tree includes the use of [min-heap](/data-structures-and-algorithms/heap) by comparing all the parent node frequency with the smallest frequency we are left off in the frequency table.

   ![Huffman binary tree construction in GIF](./huffman-tree-construction.gif)  
    Source : https://commons.wikimedia.org/wiki/File:Huffman_huff_demo.gif (with speed modification)

   We will then assign 0 for left child and 1 for right child. Each of the leaf node represent the data.

   ![Fully constructed Huffman binary tree](./fully-constructed-huffman-tree.png)  
    Source : https://commons.wikimedia.org/wiki/File:Huffman_huff_demo.gif (with modification)

   Now the top most node will be the entry point of encoding and decoding process. All the possible bit from reading the binary tree is called **Huffman codes**. During transmission, we can include frequency table or the Huffman codes. So we can either reconstruct the Huffman tree or use to decode the data using Huffman codes directly.  
   For example, if we have "0001" that means it is "u" character.

   This way we can represent high frequent data in shorter term but we have to sacrifice the less frequent data.

### Lossy Compression

Lossy compression algorithms aim to achieve higher compression ratios by allowing some degree of loss of information. The compressed representation does not perfectly reconstruct the original signal, but it retains the perceptually significant information. Lossy compression is often used where minor losses in quality or accuracy are acceptable.

For example in an image, a color that is similar to the neighbor color can be discarded and changed with the similar one as it won't affect the overall image.

Lossy compression techniques are typically designed and optimized for specific types of data, such as images, audio, or video. The general algorithm for lossy compression is Transform Coding. The idea is we will discard data that doesn't have significant contribution to the overall data.

#### Transform Coding

Transform Coding is a lossy compression method that works by transforming data or signal using a function and it will output some coefficient. The coefficient contains information about the original data that can later be analyzed to achieve desired result.

The most commonly used transform function in transform coding is the [Discrete Cosine Transform (DCT)](/digital-signal-processing/discrete-cosine-transform), [Discrete Fourier Transform (DFT)](/digital-signal-processing/discrete-fourier-transform) and [Wavelet Transform](/digital-signal-processing/wavelets).

![An image is compressed with 3 different setting with different quality results](./transform-coding.gif)  
Source : https://www.dspguide.com/ch27/6.htm
