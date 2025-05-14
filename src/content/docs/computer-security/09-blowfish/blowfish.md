---
title: Blowfish
slug: computer-security/blowfish
description: Blowfish
---

**Main Source:**

- **[Blowfish (cipher) — Wikipedia](<https://en.wikipedia.org/wiki/Blowfish_(cipher)>)**
- **[bcrypt — Wikipedia](https://en.wikipedia.org/wiki/Bcrypt)**

**Blowfish** is another [symmetric encryption](/computer-security/encryption#symmetric--asymmetric-encryption) algorithm. While [AES](/computer-security/aes) is more secure, blowfish is considered faster, it also supports key size with variable length.

### Algorithm

Blowfish was designed to be an alternative of [DES](/computer-security/des). They share some similarities in terms of the rounds of encryption and decryption, that is to use **Feistel structure**. Another similarity is the fixed block size of 64 bits. The difference between them is the choice of key size, blowfish variable key sizes between 32 and 448 bits.

Consist of 16 rounds of encryption or decryption

1. **Key Setup**: Key is divided into 32-bit words. An 18-entry array called **P-array (P, or denoted as K)**, which is used to generate subkeys in the encryption or decryption rounds. It is initialized from the hexadecimal digits of pi ($\pi \approx 3.14159265358979323846$). Another setup is initializing the four 256-entry of **S-boxes (S0, S1, S2, S3)**, it will be used to perform substitutions. The initial value will be derived from the fraction part of pi.

2. **Encryption Process**: Operates on 64-bit blocks of input plaintext, which is divided into two 32-bit halves, referred to as left and right. Each round consist of 4 actions:

   1. **Action 1**: The left half is XORed with a subkey derived from the P-array.
   2. **Action 2**: The XORed data is fed into the Blowfish's F function. The F function involves splitting the 32-bit input into four 8-bit segments, substituting each segment with values from the S-boxes, perform a series of XOR and modular addition operations on the segments.
   3. **Action 3**: The output of F function is XORed with the right half of the data.
   4. **Action 4**: Left and right halves are swapped.

   - **Key Expansion**: The key expansion process generates subkeys used in the encryption and decryption rounds. The chosen key is cycled through the P-array and XORed with the previous subkey to generate a new subkey. This process is repeated until all the subkeys for the rounds are generated.

   After 16 rounds, the left and right halves are swapped one final time. The final block is XORed with the last two subkeys derived from the P-array, which results in encrypted form of the plaintext block.

The decryption process is similar to encryption but with the subkeys used in reverse order (i.e., instead of starting from 0, 1, 2,..., it starts from 17, 16, 15,...)

### Bcrypt

**Bcrypt** is a [password-hashing function](/computer-security/hash-function), based on the Blowfish cipher.

1. **Initialization**: Bcrypt is used to hash a password, a random [salt](/computer-security/hash-function#salting) of 128 bits (16 bytes) is generated. Bcrypt generates key based on the Blowfish key cipher, we will need to initialize P-array and S-boxes.
2. **Key Expansion**: Password and salt are combined and goes through the key expansion algorithm based on the Blowfish cipher. The password and salt will be shuffled based on the P-array (for subkey generation) and S-boxes (for substitution). The number of iteration is derived from number called **cost**, it can be from 4 to 31 (in total $2^{\text{cost}}$ iteration).
3. **Hashing**: The hashing process doesn't involve converting the password directly. Password and salt are used to modify the state of P-array and S-boxes. The modified state will be used to encrypt the fixed string "OrpheanBeholderScryDoubt". The encryption is run for 64 times using the standard Blowfish algorithm. The output of that is the resulting password hash, which will be concatenated with the selected cost and salt.
