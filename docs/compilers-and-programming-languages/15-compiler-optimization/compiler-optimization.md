---
slug: /compilers-and-programming-languages/compiler-optimization
id: compiler-optimization
title: Compiler Optimization
description: Compiler Optimization
---

**Main Source :**

- **Book 1 chapter 12.**

Many optimization techniques can be applied to the assembly code (or intermediate representation, if the optimization happens during it). Some optimization happens within local block, global, or even the whole program.

Some type of optimization :

- **Simplification** : This includes removing redundancy and removing unnecessary computations.
- **Control flow** : Targets control flow structure (e.g., loops and conditionals), such as reducing the number of branching to reduce [pipelining stall](/computer-organization-and-architecture/cpu-design#pipelining).
- **Memory and registers** : Efficient and correct allocation of registers and memory to reduce their usage and improve speed. For example, we can store frequently used variables in registers instead of the memory to increase access speed.

### Constant Folding

Constant folding simplify expressions (or part of them) that involve constants, which is known during compile-time. For example, the [second calculation in a day](/compilers-and-programming-languages/intermediate-representation#optimization) effectively demonstrate this concept.

During compilation, expressions are checked to determine whether they contain constants or not. Only if all the operands of the expression are known are they calculated. For example, arithmetic operation typically takes two operands.

```
int result = 10 * 10 + 100 - 10

// is optimized to:
int result = 190
```

```
int result = 10 * 10 + x

// is optimized to:
int result = 100 + x
```

### Strength Reduction

Strength reduction replaces an expression to equivalent but less expensive operation.

- `x * 8` is optimized to `x << 3`, as [bit shifting](/computer-and-programming-fundamentals/bitwise-operation#bit-shifting) can be faster than multiplication. This is similar to division.
- `x ^ 2` (exponentiation) is optimized to `x * x`, as exponentiation may use techniques like Taylor series, which may be more expensive than simple multiplication.

### Loop Unrolling

In branching, CPU can try to make an educated guess about the outcome of a branch instruction before it is actually executed. This will avoid [pipeline stalls](/computer-organization-and-architecture/cpu-design#pipelining), which further improves performance.

Loop typically involve branch and jump instruction. These instructions introduce control flow changes, which may result in branch mispredictions. This happens when the CPU fails to make a correct guess. It would need to discard the speculatively executed instructions and fetch the correct instructions at the cost of extra time.

Loop unrolling modifies the structure of a loop by replicating loop iterations and combining them into a larger loop. This will make the loop repeat less, but does more work on each iteration. This will reduce the number of branching, which can increase [instruction-level parallelism](/computer-organization-and-architecture/cpu-design#superscalar), the ability to execute multiple instruction simultaneously.

```
// Original loop
for (int i = 0; i < 4; i++) {
    print(arr[i])
}

// Unrolled loop
for (int i = 0; i < 4; i += 2) {
    print(arr[i])
    print(arr[i + 1])
}
```

The first loop will call `arr[0]`, `arr[1]`, `arr[2]`, and `arr[3]`, with each being called in a different iteration. Notice that the second loop increments `i` by 2 instead. This change causes the second loop to call `arr[0]` and `arr[1]`, and then `arr[2]` and `arr[3]` in just two iterations. It's worth noting that loop unrolling may result in a different kind of loop structure, depending on the loop.

The number of iterations within the unrolled loop is called the **unrolling factor**. It should be adjusted based on the scenario, as too much unrolling can also increase code size.

### Code Hoisting

### Function Inlining

### Dead Code Elimination

### Peephole Optimization

### Instruction Selection

### Register Allocation
