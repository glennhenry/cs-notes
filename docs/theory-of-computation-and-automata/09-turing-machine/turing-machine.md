---
slug: /theory-of-computation-and-automata/turing-machine
id: turing-machine
title: Turing Machine
description: Turing Machine
---

**Main Source :**

- Book chapter 4.1
- Neso Academy playlist 94-99

Turing Machine is even more advanced abstract model of computation. It is capable of recognizing a language called **recursively enumerable language**.

### Components

It consists of several components :

- **Tape** : Turing machine doesn't have input in an original sense; instead, it uses a tape. A tape consist of infinite number of discrete cells spanning in two directions, left and right. The tape is initially filled with some symbols and then modified afterwards, so we can think the tape as the input. The modified tape after the computation has ended also serve as the output. It's worth noting that not all symbols is required to be read in order to produce an output.
- **Head** : The head of the Turing machine is positioned over a single cell on the tape and can read or write symbols on the tape, as well as moving in either directions for one cell.
- **Control Unit** : Similar to [FSM](/theory-of-computation-and-automata/finite-automata) or [PDA](/theory-of-computation-and-automata/pushdown-automata), the control unit specifies how the machine transitions between states based on its current state and the current symbol being read. The transition function determines the next state of the machine, the symbol to be written on the tape, and the direction to move the tape head (left or right).

![Turing machine](./turing-machine.png)  
Source : https://youtu.be/GPSk9tRsK2I?si=_D1CVWF00TLAyk0H&t=92

### Formal Definition

Turing machine $M$ is a 7-tuple $(Q, \Sigma, \Gamma, \delta, q_0, \char"2423, F)$.

- $Q$ is a set of states
- $\Sigma$ is a finite set of symbols, the input alphabet
- $\Gamma$ is a finite set of symbols, the tape alphabet
- $\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$ is the transition function. In other words, it takes the current state and reads the symbol on the tape to produces a new state, updates the tape, and moves to the left or right. For example, $\delta(q_0, a) \rightarrow (q_1, y, R)$ means transitioning from state $q_0$ to $q_1$ by reading "a" on the tape, writing "y", and moving the head to the right.
- $q_0 \in Q$ is the initial state
- $\char"2423 \in T$ or $\#$ or $b$ is the blank symbol. The empty cells on the infinite tape will be filled with this special symbol. Keep in mind that it doesn't belong to input alphabet.
- $F \subseteq Q$ is a set of final states.

### Rules

Turing machine can also undergo final state. In final state, the machine can either at **accept state** or **reject state**. The machine accepts when it satisfies the problem criteria, rejects when it doesn't, and **halts** when the machine terminates and doesn't make any further progress. So, a computation can either halt and accept, halt and reject, and loop, in which the machine fails to halt.

![Turing machine notation](./notation.png)  
Source : https://youtu.be/GPSk9tRsK2I?si=h1YKXTmrviD8U_Cx&t=357

The operations of a Turing machine are as follows : read the current symbol, update by writing a new symbol or keeping the same one at the current cell, and then move exactly one cell either to the left or right. If the machine is at either the leftmost or rightmost end of the tape, it stays at that end.

### Example

### Turing Machine Programming

### Turing Machine Modification

### Nondeterministic Turing Machine

### Church-Turing Thesis
