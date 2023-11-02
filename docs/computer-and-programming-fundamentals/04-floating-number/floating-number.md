---
slug: /computer-and-programming-fundamentals/floating-number
id: floating-number
title: Floating Number
description: Floating Number
---

**Main Source :**

- **[Fixed Point Representation - Geeks For Geeks](https://www.geeksforgeeks.org/fixed-point-representation/)**

**Floating Number** is a numerical representation in computer that is used to represent real number or number with decimal point. It is a common data type used to represent numbers with a fractional component or very large or small numbers that cannot be represented using a whole number.

### Whole Number Representation

Computer can easily represent decimal or whole number using a binary representation consisting of specific number of binary digits, typically in a multiple of 8.

For example, we can use 32 binary digits (bits), which is able to make a 4 billion possible combination. We are able to represent decimal number ranging from 0 to 4.294.967.295. The calculation, which is explained in the [binary number system](/computer-and-programming-fundamentals/number-system#binary), involve summing each binary digits (0 or 1) multiplied by each power of base two based on its positional value in the binary representation.

However, that is the case if we don't consider a negative number. To consider negative number, we can use the [most significant bit](/computer-and-programming-fundamentals/binary-representation#least--most-significant-bit) as the [sign bit](/computer-and-programming-fundamentals/binary-representation#signed-magnitude), making us able to represent decimal value from -2.147.483.648 to 2.147.483.647.

![Decimal representation](./decimal-representation.png)  
Source : https://medium.com/@luischaparroc/integer-numbers-storage-in-computer-memory-47af4b59009 (cropped)

### Real Number Representation

#### Fixed-Point Representation

One way to represent fractional or number with decimal point is through the **fixed-point representation**. In fixed-point representation, we allocate some binary digits to store the integer part of the decimal value and the leftover is used to store the fractional value.

Like usual, each position represent a power of two where it increases by 1 as we go to the left. However, the part where we separate the integer and fractional value (also called **binary point** or **radix point**), is where the power of two starts to increase or decrease up to negative power of two, which correspond to fractional value (properties of exponents, e.g. $2^{-2} = \dfrac{1}{2^2}$).

![Fixed point representation](./fixed-point.png)  
Source : https://www.geeksforgeeks.org/fixed-point-representation/

By using this representation, we can represent a fractional value. For example, given a binary values of `00010.110` in a fixed-point representation, we can calculate it as usual :

($0 × 2^4$) + ($0 × 2^3$) + ($0 × 2^2$) + ($1 × 2^1$) + ($0 × 2^0$) + ($1 × 2^{-1}$) + ($1 × 2^{-2}$)

$0 + 0 + 0 + 2 + 0 + 0.5 + 0.25 = 2.75$

Where $2^{-1} = \dfrac{1}{2^1} = 0.5$ and $2^{-2} = \dfrac{1}{2^2} = 0.25$

##### Limitation

In fixed-point representation, the value we can achieve for all fractional bits is fixed by the negative power of two. To be able to represent value with a more complex fractional accurately, we will need more fractional bits which will increase the memory requirements and computational complexity. It is also not suitable to represent irrational numbers, because by definition it cannot be expressed as a ratio of two integers, and they have an infinite number of non-repeating decimal places.

Even sometimes we can't exactly represent a fractional value. This is because fixed-point representation uses binary (base-2) representation, and some decimal fractions don't have an exact binary representation. But, we can at least round or approximate those fractions.

The precision of the fractional value is determined by the number of fractional bits allocated, by having more fractional bits, we can represent smaller and smaller fractions, giving us a higher level of precision. Each additional bit allows us to represent a smaller increment or division of the value.

For instance, to represent $\dfrac{1}{100}$ or $0.01$, we can choose 8 fractional bits. In this case, the precision we can achieve is $\dfrac{1}{2^{8}}$ = $\dfrac{1}{256}$. With 8 fractional bits, we can represent $\dfrac{1}{100}$ as $0.00000110$ (in binary) or $0.0234375$ (in decimal).

Calculation : $0 \times 2^{-1} + 0 \times 2^{-2} + 0 \times 2^{-3} + 0 \times 2^{-4} + 0 \times 2^{-5} + 1 \times 2^{-6} + 1 \times 2^{-7} + 0 \times 2^{-8}$

$0 + 0 + 0 + 0 + 0 + \dfrac{1}{64} + \dfrac{1}{128} + 0$ = $\dfrac{3}{128} = 0.0234375$

It was a terrible precision, we can choose more fractional bits to represent it more accurately. For example, using 16 fractional bits to get the binary values of $0.00000011001100110011000000000000$, we can achieve $0.01245117187$.

#### Floating Number Representation

The floating number representation, also known as the IEEE 754 standard, is the widely used standard to represent fractional value more accurately. It also provides a wider range of representable numbers compared to fixed-point representation such as more accuracy to represent rational and irrational number and specifies special values such as positive and negative infinity.

##### Scientific Notation

So, even if floating number representation still can't achieve exact precision, at least it can achieve similar precision as scientific notation which is used everywhere in science.

##### Part of Floating Number

##### Normalization

###### Explicit

###### Implicit
