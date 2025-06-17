---
title: Concurrency
slug: compilers-and-programming-languages/concurrency
description: Concurrency
---

**Main Source:**

- **Book 2 chapter 12**

A program is concurrent when it contains more than one active execution context, whether both is run together or interleaved. By execution context, it means the state associated with the execution of a particular task. It includes information such as the values of registers, [stack pointer](/cs-notes/computer-organization-and-architecture/registers-and-ram#type-of-registers), [call stack](/cs-notes/compilers-and-programming-languages/subroutines#call-stack), etc.

The approach for concurrency:

- **[Multithreading](/cs-notes/computer-and-programming-fundamentals/concurrency#multithreading)**: The use of [thread](/cs-notes/computer-and-programming-fundamentals/concurrency#thread) for a single execution context, and multiple of them to achieve parallel execution.
- **[Multiprocessing](/cs-notes/computer-and-programming-fundamentals/concurrency#multiprocessing)**: A [process](/cs-notes/computer-and-programming-fundamentals/concurrency#process) is instance of running program that run in separate memory spaces. CPU with multiple core (multiprocessor) can be utilized to run multiple processes in parallel multiprocessing.
- **[Coroutine](/cs-notes/computer-and-programming-fundamentals/concurrency#coroutine)**: Coroutine is an approach to interleave execution of different tasks. It still relies on thread, but the less number of thread is needed to achieve concurrency (although not parallel).

:::tip
See [concurrency](/cs-notes/computer-and-programming-fundamentals/concurrency) and [multithreading](/cs-notes/operating-system/multithreading).
:::
