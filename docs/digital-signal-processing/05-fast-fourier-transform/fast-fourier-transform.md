---
slug: /digital-signal-processing/fast-fourier-transform
id: fast-fourier-transform
title: Fast Fourier Transform
description: Fast Fourier Transform
---

**Main Source : Various source from Google**

**Fast Fourier Transform (FFT)** algorithm is a fast and efficient algorithm for computing the Discrete Fourier Transform (DFT) of a sequence of N complex numbers. FFT is able to make improvement from an $O(N^2)$ algorithm to an $O(N \: log (N))$.

### How does it works

There are some version of FFT developed over time, the most common version is the radix-2 which was originally described by Cooley-Tukey in 1965.

#### DFT Properties

DFT has some properties due to the nature of wave.

The symmetry properties states that if the input signal is real and even (symmetric), then the output will also be real and even (symmetric).  
Similarly, if the input signal is real and odd (antisymmetric), then the output will be imaginary and odd (antisymmetric).

On the other hand, the periodicity properties states that the output of DFT will repeat after a certain number of samples.

Using these properties, we can use it to perform a more efficient computation.

### The idea

The basic idea of FFT algorithm is to use divide-and-conquer algorithm strategy. FFT divides problem into smaller subproblems and solve it recursively. This can make computation more efficient because DFT has those properties.

The periodicity means that the output is periodic, this makes us able to decompose it to smaller calculation. If we have period of N, then we can divide it by N. And with the symmetry properties, we only need to calculate the first half of DFT output and the second half can be obtained by symmetry.

For example, if signal has the same output 8 times, we can divide it by 8. For each period, if signal is real-valued, then only the first half of the DFT need to be computed, because the second half of the coefficients can be obtained by symmetry.

![DFT algorithm with divide-and-conquer approach](./fft-example.png)  
Source : https://towardsdatascience.com/fast-fourier-transform-937926e591cb

After dividing into sub problems, each computation of the sub problem is the original matrix multiplication.  
So in summary, FFT provides a significant improvement over original DFT by using its properties and the nature of wave.
