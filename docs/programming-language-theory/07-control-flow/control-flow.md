---
slug: /programming-language-theory/control-flow
id: control-flow
title: Control Flow
description: Control Flow
---

**Main Source :**

- **Book chapter 6**
- **[What is a jump table? - stackoverflow](https://stackoverflow.com/questions/48017/what-is-a-jump-table)**

In programming languages, control flow specifies how statements or instructions are ordered, executed, and evaluated. Some statement can be executed first before the other, perhaps through the use of conditional if-statements. Some statement can be evaluated following certain order defined by user, through the use of parentheses.

There are 7 categories of control flow : sequencing, selection, iteration, procedural abstraction, recursion, concurrency, and nondeterminacy.

### Expression Evaluation

Expression consists of object (e.g., literal constant, variables) and operators, which can be a function. Operators take operand similar to how function take argument to perform computation. Some language like C++ use operator as a shorthand for calling a function. For example, `a + b` is same as `a.operator+(b)`, indicating `a` is added with `b`.

There are three notations to specify operator and operands order (operator invocation) :

- **Prefix** : Also known as **Polish notation**, the operator is placed before its operands. For example, `+ a b` (with operator `+`, operands are `a` and `b`), it's the same thing as `a + b`. With nested expression `(+ 2 (* 3 (- 4 1)))`, the innermost expression is evaluated first, and the results are used as operands for the outer expressions.
- **Postfix** : Also known as **Reverse Polish notation**, place operator after its operands. For example, `a b +` or `5 3 >`.
- **Infix** : It is the most common way of writing operators, where the operator is placed between its operands. For example, `a + b`, `5 * 3`, or `x > y`. A more complex expression is found in programming language like C++ for ternary operator. The syntax of ternary is `condition ? expression1 : expression2`, it is a category of three-operand infix operator.

#### Precedence & Associativity

Infix notation can sometimes lead to ambiguity. Even a simple expression like `2 + 3 * 5` (without parenthesis) is ambiguous. To avoid that, two concepts called **precedence** and **associativity** are used. Precedence defines the priority of operators, while associativity determines the order in which operators of the same precedence are evaluated.

Precedence is specified by the language grammar, and is different across languages. Associativity can either be two, left-associative or right-associative, where the former needs to be evaluated from left-to-right, and the latter needs to be evaluated from right-to-left.

Subtraction are example of left-associative operator, `(10 - 5) - 2 = 5 - 2 = 3` is different with `10 - (5 - 2) = 10 - 3 = 7`. On the other hand, operator like exponentiation is right-associative, `2 ^ 3 ^ 2` is evaluated as `2 ^ (3 ^ 2) = 2 ^ 9 = 512`.

![Operator precedence in C](./operator-precedence.png)  
Source : Book page 237

#### Assignments

Assignment is form of `variable = expression`. Under the hood, assignment of a variable is complex. Sometimes it's just evaluation the right-hand side expression, but it can be more complex like assigning reference, deep copy, type conversion, etc.

##### Reference & Value

More specifically, assignment is denoted as `l-value = r-value`. **L-values** are any expression that leads to a location (such as memory address) of a value, while **r-values** represents a value or a temporary result that does not have a persistent address.

- `d = a` means we are taking the value of `a` and assigning it (by copy) to the location of `d`. After the assignment, the value of `d` will be the same as the value of `a`.
- `a = b + c`, the `b + c` is an r-value expression that will not have persistent address after the evaluation. The value is then assigned to `a`.

This will make expression like `2 + 3 = a` not possible, considering `2 + 3` is just an r-value expression.

Overall there are two ways to handle variables.

- **Value model** : In the value model, variables directly store values. When we assign a value to a variable or pass it as an argument to a function, a copy of the value is made. Any modifications to the variable or the value do not affect other variables holding the same value.
- **Reference model** : In the reference model, variables hold references to memory locations where the actual data is stored. When we assign a variable to another variable or pass it as an argument to a function, a reference to the same underlying data is used. Modifications to one variable will be reflected in other variables holding the same reference.

![Reference and value model](./reference-value-model.png)  
Source : Book page 240 (with my own code example)

When r-value is expected, yet l-value is received, the l-value needs to be **dereferenced**. L-value holds location of a variable, in a language that supports pointer or reference, l-value can be pointer (variable that holds memory address).

```cpp
int x = 42;
int* ptr = &x;
int value = *ptr;
```

C++ supports pointer and reference, dereferencing a pointer is achieved through putting `*` symbol before the pointer.

:::tip
See also [pointer & reference](/computer-and-programming-fundamentals/memory#pointer--reference).
:::

:::info
Languages that use value model for primitive types require a concept called **boxing**. It is the process of wrapping a value type in some object to convert it to reference model. This will enable them to participate in scenarios that require reference types, such as storing them in collections or passing them as method parameters that expect reference types.
:::

##### Assignment Operators

Assignment operators are shorthand operators in programming languages that combine an arithmetic or bitwise operation with assignment. They are operators like `+=`, `-=`, `*=`, etc. They are commonly used to improve readability and conciseness, especially if the involved variable are too long or complex.

- `a = a + 1` -> `a += 1`
- `*(*(p + 1) + 2) = *(*(p + 1) + 2) + 20` -> `*(*(p + 1) + 2) += 20`

##### Multiway Assignment

Multiway assignment allows for assignment in parallel. For example, in Python `a, b = 1, 2`, assigning `a` and `b` to `1` and `2` respectively.

It is also useful to unpack a data structure with multiple values (like tuple).

```python
person = ("John", 30, "New York")

# name = person
# age = person
# city = person

name, age, city = person
```

#### Initialization

Initialization is the process of assigning an initial value to a variable or data structure when it is first created. It can be beneficial for data structure that can be allocated during compile-time (i.e., global variables) or preventing potential error like uninitialized variables.

- **Constructors** : Used in OOP to initialize objects of a class. We can specify initial values or attributes of an object and use keyword like `new` to initialize the object.
- **Definite Assignment** : Some languages allows declaring variable without giving a value like `int a;`. Definite assignment is a rule to enforce programmer to always assign a value to variable, even if they are not using it.
- **Dynamic Checks** : Dynamic checks are runtime checks performed by programming languages to catch error during runtime. Some languages assign default values to data types (e.g., `NaN` for floating-point number). While these values are invalid and can't be used, they can prevent errors that are unlikely to occur.

#### Ordering Within Expressions

When evaluating expressions, sometimes the ordering within them can affect overall results.

- **Side effect** : Consider the expression `a - f(b) - c * d`. Calculating `c * d` first then use the result as operand from the subtraction is a valid way to evaluate this. It is also valid to calculate `a - f(b)` first then subtract it with the result of `c * d`. However, it is possible that calling function `f(b)` causes a side effect that affects final result. It may change the value of `d`, which mean computing `c * d` will be different before and after calling it.
- **Code improvement** : The order of instructions can impact execution speed. Sometimes, it's more efficient to load data into memory before it's actually needed rather than waiting until it's required. This is because the CPU can perform computations faster than memory can be fetched. In such cases, [prefetching](/computer-organization-and-architecture/cpu-design#out-of-order-execution) the data by rearranging instructions or expressions to ensure that memory loading occurs first can be beneficial.

One improvement the compiler can make is applying mathematical identities.

For example, expression like follows.

```
a = b + c
d = c + e + b
```

Can be rearranged to

```
a = b + c
d = b + c + e
```

Then reuse the same value

```
a = b + c
d = a + e
```

So, we can reduce redundant operations.

#### Short-Circuit Evaluations

Some logical expression (such as AND) requires _all_ condition to be true in order for the overall expression to evaluate to true. In such cases, we don't need to evaluate all condition if the first condition or any other is already false. Similarly, in two option of OR expression, only one condition needs to be true.

This is called **short-circuit evaluation**, where evaluation of a logical expression stops as soon as the final outcome can be determined without evaluating the remaining subexpressions.

```
if x == 0 and long_running_computation(x) == 0
```

We don't need to evaluate the result of `long_running_computation(x)` if `x` is already not 0.

```
if x != 0 and y / x > 10
```

Not only reducing instruction, short-circuit evaluation make it possible for programmer to prevent side effects or potential error, such as dividing by 0. If compiler were to not make this optimization, then `y / x` will still be computed even when `x` is 0.

### Structured and Unstructured Flow

Structured and unstructured flow are mechanisms used to control the flow of a program or algorithm.

Structured flow control constructs, such as if-else statements, while loops, for loops, switch statements, or exception handling, provide clear control over the execution flow within a program or algorithm. In contrast, unstructured flow, commonly encountered in old languages, including construct like jump or goto statements may have lack of clarity.

```python
while condition:
    # Code executed while condition is true
```

A while loop is structured flow, it repeatedly executes a block of code as long as a given condition remains true.

In contrast, unstructured flow may combine if-statement and goto to achieve this.

```c
if (condition) {
    goto label;
} else {
    // Code executed when condition is false
    // Main loop code is here
}

label:
// Code executed when condition is true
```

`goto` statement are discouraged in modern languages as it can make code harder to understand, especially in bigger codebase (hard-to-follow code paths).

### Sequencing

Statements are executed sequentially, one after another, following the order in which they appear in the program (top-to-bottom). Sequencing is a fundamental feature of imperative programming languages that are made default.

```
statement1
statement2
statement3

# Start of block
{
    statement4
    statement5
    statement6
}
# End of block
```

Some languages allow to construct a temporary block which we could use to treat a sequence of instruction as a single unit.

### Selection

Selection (or alternation) involves making decisions based on conditions. It includes constructs like if-statements, switch statements, or case statements.

```python
if condition:
    # Code executed when condition is true
else:
    # Code executed when condition is false
```

Python itself relies on indentation as part of its syntax, interpreter knows that blocks of code is associated with the if and else clauses when they have different indentation level.

```cpp
switch (expression) {
    case value1:
        // Code executed when expression matches value1
        break;
    case value2:
        // Code executed when expression matches value2
        break;
    default:
        // Code executed when expression doesn't match any case
        break;
}
```

C++ analyze the switch statement from top-to-bottom, matching expression with each case. When one case is matched, it executes the expression under it. However, it won't stop afterwards, it will keep matching the subsequent case. This is called **fall-through behavior**, and it relies on `break` keyword to actually stop the switch matching.

:::info
Compiler can make optimization by making **jump table**. It is a data structure constructed by the compiler to efficiently map a set of input values to corresponding actions or code blocks, typically through pointers or goto statements. It is useful for state machine as it eliminates the need for conditional checks when encountering a specific state, allowing actions to be executed directly upon encountering that state.
:::

### Iteration

Iteration: Iteration allows a block of code to be repeated multiple times. It involves loop constructs such as "for" loops, "while" loops, or "do-while" loops. The control flow loops back to a specific point until a condition becomes false or a certain number of iterations is reached.

### Procedural Abstraction

The use of functions or procedures (subroutines) to encapsulate a block of code. See [subroutines](/programming-language-theory/subroutines).

### Recursion

Recursion: Recursion is a control flow mechanism where a function calls itself to solve a problem by dividing it into smaller subproblems. The control flow repeatedly enters and exits the same function until a base case is reached.

### Concurrency

The execution of multiple tasks or instructions simultaneously. See [concurrency](/programming-language-theory/concurrency).

### Nondeterminacy

Nondeterminacy: Nondeterminacy refers to situations where the order of execution is not predetermined or predictable. It is commonly associated with concurrent or parallel execution, where the execution order can vary each time the program runs.
