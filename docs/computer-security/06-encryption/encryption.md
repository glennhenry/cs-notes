---
slug: /computer-security/encryption
id: encryption
title: Encryption
description: Encryption
---

**Main Source :**

- **[Caesar cipher - Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)**

**Encryption** is the process of converting information or data from **plaintext** (readable data) to a **ciphertext** (unreadable data). By "unreadable," it means that the data cannot be understood by humans or computers without knowing how to reverse the process and convert it back to plaintext. The process of converting ciphertext back to plaintext is called **decryption**, this requires understanding on how to reverse it.

### Cipher

**Cipher** is a method or algorithm used to perform encryption and decryption. It is a set of rules or steps that determine the transformation of plaintext into ciphertext or vice versa.

#### Caesar Cipher

The **Caesar cipher** is one of the simplest and oldest known encryption techniques. The method is very simple, it simply transforms the input plaintext by shifting each letter in the plaintext a certain number of positions down or up the alphabet.

A positive shift value corresponds to shifting the letters down the alphabet (to the right), while a negative shift value corresponds to shifting the letters up the alphabet (to the left).

For example, "A" is letter 1 on alphabet, shifting it down by 3 would change it to alphabet "D", 'B' as 'E', 'C' as 'F', and so on. When the end of alphabet is reached, it repeats from the beginning. Here is all the transformation :

Plaintext: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Ciphertext: DEFGHIJKLMNOPQRSTUVWXYZABC

Here is an example of transforming a real message into the cipher text :

Plaintext: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
Ciphertext: WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ

To decrypt it, we will do the reverse process, which is shifting each of the letter to the left by 3.

![Caesar cipher shifts](./caesar-cipher.png)  
Source : https://forum.arduino.cc/t/caesar-cipher-with-arduino-pt-1/189683

#### Decipher vs Decrypt vs Decode

They are commonly used interchangeable, but they have different context.

- Decipher : Converting back ciphertext to plaintext.
- Decrypt : Converting encrypted data to original form, it is used in the context of various encryption schemes such as [symmetric and asymmetric encryption](#symmetric--asymmetric).
- Decode : Converting back encoded data into readable format, it doesn't have to be encrypted data. For example, it can include converting [ASCII](/computer-and-programming-fundamentals/data-representation#ascii) encoded text (in binary) to plaintext.

### Cryptographic Encryption

This types of algorithms are more advanced as it involves [cryptographic algorithms](/computer-security/computer-security-fundamentals#cryptography) and keys. Key is a very crucial component, it is a piece of information or a parameter that is inputted into the encryption algorithm to control the transformation of plaintext into ciphertext and vice versa. In Caesar cipher, the shifting value can be thought as the key.

The key is literally the "key" of decrypting an encrypted data, other than knowing how the algorithm encrypt the data. The encryption algorithm alone is not sufficient for decryption because there are typically multiple possible keys that could have been used with a given algorithm.

In the case of Caesar cipher, there are total of 25 possible key, shifting by 1 up to 25. However, as we are doing cryptographic encryption, brute forcing every single key may not be possible.

#### Public & Private Key

#### Symmetric & Asymmetric Encryption

#### Key Exchange
