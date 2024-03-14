---
slug: /theory-of-computation-and-automata/dfa-and-nfa
id: dfa-and-nfa
title: DFA & NFA
description: DFA & NFA
---

**Main Source :**

- **[Introduction to Theory of Computation - Neso Academy](https://youtu.be/58N2N7zJGrQ?si=ApDqs6e96kyBP1XJ)**

### Finite Automata

Finite automata, or a finite state machine (FSM) is a mathematical, and the simplest model of computation. It is an abstract machine that consist of finite number of states and transitions between those states. The transitions between states is the response of the machine when taking certain input.

Components of FSM :

- **States** : Represents the possible configurations or conditions of the system being modeled.
- **Alphabet** : A finite set of symbols or inputs (possibly a formal language) that the automaton can read or process.
- **Transitions** : A set of rules that specify how the automaton transitions from one state to another based on the input symbol it reads. Each transition is associated with a specific input symbol and defines the state change that occurs when that symbol is encountered.
- **Start state** : A designated initial state from which the automaton begins its operation.
- **Accepting states** : A subset of the states that are designated as accepting or final states. When the automaton reaches an accepting state after reading the entire input, it indicates that the input is accepted or recognized by the automaton. Not all finite automata have accepting states.

![Vending machine as an example of finite state machine](./fsm.png)  
Source : https://brilliant.org/wiki/finite-state-machines/

An example of state machine is a vending machine. A vending machine is initially locked (start state). If it is being pushed, it kept locked (transition at locked state with "push" as input). If a coin is inserted, then it will be unlocked, and so on.

#### Acceptors

An automaton that recognizes or accepts certain input strings is called **acceptors**. Acceptors don't take action as input, but instead an input string belonging to a specific language or set of strings.

The purpose of an acceptor is to determine whether the input string belong to certain language. If the input string satisfies the criteria defined by the acceptor, it is accepted. If it does not meet the criteria, it is rejected.

A complex example of acceptors is a [compiler](/compilers). It is a program that determine whether a code from certain programming language follows the grammar rules and syntax of that language.

### DFA

### NFA

- Equivalence
- Conversion
- Minimization
