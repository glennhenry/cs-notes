---
slug: /computer-organization-and-architecture/registers-and-ram
id: registers-and-ram
title: Registers & RAM
description: Registers & RAM
---

**Main Source :**

- []

**Registers & RAM** are important components in CPU, they serve as storage or memory for the CPU. Registers is a smaller storage with higher speed that is suitable to hold intermediate result. While RAM is the larger storage with lower speed that is suitable to hold the program's data and instructions actively used by CPU during program's execution. Both memory is a type of volatile memory, it can only store data while the device is running.

### Latch

Latch is the simplest form of memory in digital electronics that capable of storing a single bit of information. A latch uses a combination of [logic gates](/computer-organization-and-architecture/boolean-logic#logic-gates) that works by having a **feedback loop**, that is when the output of a gate is connected back to one of its own inputs.

We can construct a latch using self-looping OR and AND gates. We will have two input, A and B, the A is our input, while B is the input from the output.

- **OR** :
  - When input A is 0, the output will be 0.
  - When input A is 1, the output will be 1. This output value will be fed back to input B, resulting in both inputs A and B being 1, and the overall output remaining 1.
  - If input A is changed to 0, the output will still be 1 because the feedback from input B keeps it at 1.
  - When we change input A to be 1, the output will still be 1, because we can't change the B. Therefore, the self-looping OR doesn't work, it stores the value 1 permanently, we can't use this as memory.
- **AND** : Similar to AND gate, when we start from input A and B as 1, the AND gate will produce 1. When we change the input A to 0, the logical AND between 0 and 1 will be 0, this will also change the input B. Now, whatever value we use as input for input A, it won't change anything, because the input B is permanently set to 0.

![Self-looping gates](./self-looping-gates.png)  
Source : https://youtu.be/fpnE6UAfbtU?si=jzfY47w-VWxCkJXr&t=120

#### AND-OR Latch

We can use the combination of OR and AND gate with a NOT gate to create a fully functional memory called the **AND-OR latch**. We will have two input, one is "SET (S)" and the other is "RESET (R)".

![AND-OR latch set to 1](./and-or-latch-set.png)  
Source : https://youtu.be/fpnE6UAfbtU?si=w3z481li5AWxMMpF&t=163

When we have input 1 for SET, it will produce 1 from the OR gate. The OR gate will send the output to the AND gate. The AND get will take another bit from the inverse of RESET input. Because 0 negates to 1, the AND gate will produce 1 as output, the output will be fed back to the input of OR gate. In conclusion, setting the SET to 1 effectively make the output as 1.

![AND-OR latch reset to 1](./and-or-latch-reset.png)  
Source : https://youtu.be/fpnE6UAfbtU?si=w3z481li5AWxMMpF&t=163

When the RESET is 1, it will be negated to 0 by the NOT gate, making the AND gate produces 0. In conclusion, setting the RESET to 1 effectively resets the output to 0. Doesn't matter if we have 0 as the SET.

![AND-OR latch set and reset to 0](./and-or-latch-set-reset-0.png)  
Source : https://youtu.be/fpnE6UAfbtU?si=oo9ZqdgbPOLxIYWp&t=174

When the SET and RESET is 0, the output will be 0 or 1 depending on the last output. This is because the 0 in RESET will produce 1 from the NOT gate, therefore it all depends on the output of OR gate. If the last output is 1, the OR gate produces 1, and otherwise if the last output is 0.

The behavior of the output being the last output is what makes it possible to be used as memory. If we have 1 as the input for SET, this will effectively store value 1. As long as we don't set the RESET to 1, the output 1 remains in the latch. Only if we set the RESET to 1, the output will be reset.

#### Gated Latch

This AND-OR latch can be simplified so that it requires only a single input bit, either 1 or 0, which will be stored immediately. We will also have another input which determine if we are allowed to write to the memory.

![Gated latch](./gated-latch.png)  
Source : https://youtu.be/fpnE6UAfbtU?si=WfSlrlDVk_xY01hB&t=215

We will use two additional AND gates and another NOT gate. When we set the write to 0, this will effectively disable any write, because it will make the AND gate that takes input from DATA INPUT and WRITE ENABLE always produces 0.

![Closed gated latch](./gated-latch-closed.png)  
Source : https://youtu.be/fpnE6UAfbtU?si=WfSlrlDVk_xY01hB&t=215

Simplifying the gated latch :

![Simplified gated latch](./gated-latch-simplification.png)  
Source : https://youtu.be/fpnE6UAfbtU?si=RUoSfgxY7fr0jQ_U&t=255

The latch will store whatever the input is, only when the write is enabled. When the write is disabled, anything we do on the input data won't change the latch memory.

### Registers

A single latch can only store a single bit of information. A register is created by combining multiple latch. Registers have fixed size, it can range from 8 bits (1 byte) to 64 bits (8 bytes) or more, where each bit is stored by a single latch.

![8-bit registers](./8-bit-register.png)  
Source : https://youtu.be/fpnE6UAfbtU?si=H-WxLU6burkepXJv&t=308

This is an example of 8-bit registers. The latches will be connected together within a single wire that will control whether the write is enabled or not. Each latch will take an input data and produce the output data, the concept is similar as gated latch. After inputting data to each latch, we successfully stored an 8-bit number.

Registers are the fastest form of computer memory, and they are directly accessible by the CPU. When doing arithmetic operation using [ALU](/computer-organization-and-architecture/alu), we will need place to store the intermediate result or to store other information such as carry temporarily. Registers is typically the place to store this. The ALU will receive important information such as status and operand from the registers.

#### Matrix Latch

In the 8-bit register above, we need 8 wire for each latch to take the input data and another 8 wire to produce the output data. We also need a single additional wire for the enabling or disabling the write.

In certain digital circuit designs, the latches are arranged in a grid-like structure to reduce the wire required to construct a single registers.

#### Type of Registers

##### Status Registers
