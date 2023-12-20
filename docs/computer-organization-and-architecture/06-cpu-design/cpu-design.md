---
slug: /computer-organization-and-architecture/cpu-design
id: cpu-design
title: CPU Design
description: CPU Design
---

**Main Source :**

- **[Advanced CPU Designs - Crash Course Computer Science #9](https://youtu.be/rtAlC5J1U40?si=wae6I4lznG73wuzx)**

There are many things to consider when designing a CPU, such as, in what format should the instructions be, how will each component talk to each other, how will the circuit be structured to lead an efficient execution of instructions, various technique will be employed to facilitate efficient execution of instructions.

### Instruction Set

**Instruction Set** is a collection of instructions that CPU can execute. Instruction set is very important to implement the CPU, it will include the format of the instruction.

![Instruction set](./instruction-set.png)
Source : [top](https://en.wikipedia.org/wiki/Instruction_set_architecture), [bottom](http://mayurkalablogs.blogspot.com/2012/02/8086-instruction-set.html)

An instruction may contain :

- **Opcode** : The operation code or the type of instruction to be executed, such as adding number, subtracting, loading data from memory, etc.
- **Operand** : They are the data or values on which the instruction operates. They can be registers, or memory addresses.
- **Addressing Modes** : Specify how the operands are going to be accessed, we can provide a register that contains the operand, provide the operand from the memory, or even include a value directly (called **immediate value**).

### Microarchitecture

#### Pipelining

#### Cache & Memory

#### Prediction

### Interruption

### Performance Evaluation

### Multicore & Parallel Computing

#### Multiprocessing

#### Threading & Concurrency
