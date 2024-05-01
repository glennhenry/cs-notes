---
slug: /compilers/compilers-fundamentals
id: compilers-fundamentals
title: Compilers Fundamentals
description: Compilers Fundamentals
---

**Main Source :**

- **Chapter 1, Programming Language Pragmatics - Michael L. Scott**

Compiler is ...

### Compilation Process

Adding up from [compilation process](/computer-and-programming-fundamentals/compilation#compilation-process), the process can be broken down further into 6 steps. The first 3 steps is called the **frontend**, where the compilers interact with high-level source code (language-dependent). The 3 later stages are called **backend** process, where the compiler focuses on generating code that is specific to the target machine from the output of frontend (machine-dependent). The frontend stages of compiler is same for any machine, but compiler may have different internal structure during the backend stages.

![Compilation process](./compilation-process.png)  
Source : Book page 763

1. **Lexical Analysis (Scanning)** : The first steps filter out unnecessary symbols from the source code, keeping only necessary input that comes from the language (we call it tokens). This includes removing white spaces and comments, while keeping identifier (e.g., variable names, function names), keywords, literals, operators, etc. The compiler may use the **symbol table** for storing global information about the compilation and code.
2. **Syntax Analysis (Parsing)** : This steps analyze code correctness according to defined grammar. A _parse tree_ is constructed from the produced tokens from the previous step. The parse tree represents code organization based on grammar rules. For instance, a language may use [context-free grammar](/theory-of-computation-and-automata/context-free-grammar) do define its grammar. The compiler identifies if tokens belong to any valid categories. Compiler will continue constructing the tree whenever it encounters valid grammar, while encountering unexpected tokens gives a **syntax error**.

   If a grammar is defined as `<while_statement> -> while <boolean_expression> <statement>`, it basically means that a while statement must start with the keyword `while` followed by an expression that returns a boolean type, and finally a statement, which performs the actual operation. The boolean expression could be a comparison, equality checking, or other. If the compiler receives `while x = 3`, this may not conform to the grammar since `x = 3` is not a valid boolean expression. It is more like assignment, where the grammar may look like `<identifier> = <literals>` (i.e., `x` is an identifier, a name given by the programmers, and 3 is a literal number).

   ![Parse tree](./parse-tree.png)  
   Source : https://ruslanspivak.com/lsbasi-part7/

   The above is an example of a parse tree. When the compiler sees `2 * 7 + 3`, it recognizes that it is an expression. It knows that expression should be `<term> +|-|*|/ <term>` (i.e., a term combined with one choice of operator and followed by another term). It further recognizes that one of the term itself is nested with the operator `*`. A term can be obtained from a single factor, just like what 3 is, or consist of a factor multiplied by another term (which could be another single factor).

3. **Semantic Analysis** : In this step, the compiler checks the meaning of the code beyond its syntax. This can include type checking, scoping rules, and other language semantics. It may enforce that an integer type cannot be added to a string, or checking whether a variable is defined before it is used.

   Language like Java won't allow a string to be accessed with square bracket like an array (called string indexing). In contrast, Python allows you to get character at some index like `str[3]`. This will be a compile-time error in Java, as it violates the language's semantics and type system (certain rules may only be checked at runtime).

4. **Machine-independent Optimization** : These optimizations are applied without considering the specific target machine architecture. For example, some function can be inlined, meaning the actual content of a function is substituted to the call site. This can reduce overhead of calling a function.
5. **Target Code Generation** : Compiler translates the parse tree into target code specific to the target machine architecture. The target code can be assembly language, machine code, or an intermediate representation such as bytecode or LLVM IR. The target code generation stage involves mapping the high-level constructs of the source language to the low-level instructions of the target machine.
6. **Machine-dependent Optimization** : Once the target code is generated, the compiler can apply additional optimizations that are specific to the target machine architecture. Examples of machine-dependent optimizations include instruction scheduling, register allocation, and target-specific code transformations.

### Terminology

compiler vs transpiler vs decompiler vs (obfuscator, minimizer, optimizer)
