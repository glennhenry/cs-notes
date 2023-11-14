---
slug: /data-structures-and-algorithms/recursion
id: recursion
title: Recursion
description: Recursion
---

**Main Source :**

-

**Recursion** is a programming concept where a function calls itself, either directly or indirectly. A recursive function often involves breaking down a problem into smaller subproblems, solving each subproblem, and combining the results to solve the overall problem.

In math, factorial (denoted as $n!$) is an operation that give us the product of all positive integers from the number $n$ up to $1$. If we ask, what is the factorial of $5$ ? Then it will be $5 \times 4 \times 3 \times 2 \times 1$, which is equal to $120$.

Factorial can be seen as a big problem that requires a smaller problem. For example, to calculate factorial of $5$, we will also need to calculate factorial of $4$. The factorial of $5$ which is the $5 \times 4 \times 3 \times 2 \times 1$ can be rewritten as $5 \times 4!$. Expanding further, the factorial of 4, which is $4 \times 3 \times 2 \times 1$ is basically just $4 \times 3!$. If we keep expanding, what is factorial $3$, what is factorial $2$, up to factorial $1$, then the problem will be the same as the original factorial $5$ question.

In other word, we can solve the factorial $5$ problem by breaking it down into smaller subproblem, each calculating its own factorial and we will combine all the result to solve the original problem. In recursion, we keep breaking down the problem into smaller subproblems, the simplest case or the most fundamental condition of the problem is called the **base case**. The factorial problem, the last question we will ask is the factorial of $1$, this is because the factorial of $1$ require no additional subproblem. The factorial of $1$ will just be $1$, no other subproblem.

Here is an example of a recursive function in Python programming language. It is a recursive function that calculates factorial.

```python
def factorial(n):
    # Base case
    if n == 1:
        return 1
    # Recursive call
    else:
        return n * factorial(n - 1)

factorial(5) # should be equal to 120
```

In the code, when we call `factorial(5)`, it will first check if the input or `n` is equal to 1 (the base case). If yes, it will just return 1, if no, it will return that input times whatever the result of `factorial(n - 1)` is. When `n` is 5, it will be conditioned to the else statement, which will return `5 * factorial(4)`. The `factorial(4)` will also return `4 * factorial(3)`. This will go on until we reach `n == 1`.
