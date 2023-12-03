---
slug: /computer-security/math-concepts
id: math-concepts
title: Math Concepts
description: Math Concepts
---

**Main Source :**

- **[Factorization - Wikipedia](https://en.wikipedia.org/wiki/Factorization)**

### Factorization

**Factorization** is the process of decomposing a number into several numbers that, when multiplied together, result in the original number. In other words, it is a way to represent a number as a product of several numbers.

#### Integer Factorization

**Integer factorization** is the factorization of a number into their integer product. For example, we can represent the number 24 as the multiply of :

- $1 \times 24$
- $2 \times 12$
- $3 \times 8$
- $4 \times 6$

When we ask, what is the factors of 24? They are going to be 1, 2, 3, 4, 6, 12, 24. When we can represent a number with the multiply of two or more number smaller than the number itself, they are called **composite number**.

#### Prime Factorization

To review, **prime number** is a natural number greater than 1 that is divisible only by 1 and itself, with no other positive divisors. Prime number is the opposite of composite number, we can only represent them in two number, which is 1 and itself.

![Prime and composite number illustration, composite numbers can be arranged into rectangles but prime numbers cannot.](./prime-composite-number.png)  
Source : https://en.wikipedia.org/wiki/Prime_number

**Prime factorization** is the factorization using prime numbers, in other word, we represent a number in a product of prime numbers. We can get a prime factorization of a number by continuing their integer factorization. For example, number 24, we can continue with one of the factor : $2 \times 12$. $2$ is already a prime, we can still break down $12$ further into $2 \times 6$, further again into $2 \times 2 \times 3$. This result in $24 = 2 \times 2 \times 2 \times 3$, therefore, the prime factorization of $24$ is $2^3 \times 3$.

One of the way to find the prime factorization is to decompose a number into some number multiplied by a prime number. The prime number will start from $2$, increasing to $3$, $5$, and so on. While the technique is simple, it can be quite inefficient for large number like $770$. First, we can factor it by $2$, resulting in $385$, then we will try dividing $385$ by $2$, which is not possible. Divide it by $3$, also not possible, until $5$, which result in $77$.

In the worst case, the technique will be more inefficient when we encounter a prime number, this mean we will need to brute force every single prime number smaller than the number itself.

![Prime factorization tree](./prime-factorization.png)  
Source : https://thirdspacelearning.com/gcse-maths/number/factor-tree/

A better way would to decompose the number into a multiply of larger number first, just like the image above.

### Greatest Common Divisor (GCD)

Finding GCD :

1. Listing Factors
2. Factorization
3. Euclidean Algorithm

#### Relative Prime

### Least Common Multiply (LCM)

Finding LCM :

1. Factorization
2. Formula

### Modular Arithmetic

- What is congruent

#### Remainder

#### Modular Inverse

#### Modular Exponentiation

#### Euler's Totient Function

phi function
