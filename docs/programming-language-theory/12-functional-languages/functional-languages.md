---
slug: /programming-language-theory/functional-languages
id: functional-languages
title: Functional Languages
description: Functional Languages
---

**Main Source :**

- []

:::tip
See also [functional programming](/computer-and-programming-fundamentals/declarative-functional-programming#functional-programming).
:::

■ First-class function values and higher-order functions
■ Extensive polymorphism
■ List types and operators
■ Recursion
■ Structured function returns
■ Constructors (aggregates) for structured objects
■ Garbage collection

### Scheme

Scheme is an interpreted, functional programming language in the Lisp family.

- **REPL** : In Scheme, users runs program by interacting with the interpreter directly by manually typing expressions into the standard input. The interpreter continuously reads these expressions, evaluates them, and prints the results back to the user in a loop known as the **read-eval-print loop (REPL)**. We can also run a program through input file using the `load` function (e.g., `load "program_name"`).
- **Prefix Notation** : Expression is written in [prefix notation](/programming-language-theory/control-flow#expression-evaluation), with input `(+ 3 4)`, the interpreter prints `7`.
- **Assignment** : We can assign variable like below.

  ```scheme
  (define x 42)
  (define y "foo")
  (define z '(1 2 3))
  ```

- **Dynamic Typing** : Scheme checks type in runtime, incompatible operation between types will result an error in runtime instead of compile-time. `(if (> a 0) (+ 2 3) (+ 2 "foo"))` if `a` is less than or equal to 0, this expression evaluates to adding number with a string (`2 + "foo"` in infix notation), which is incompatible.
- **Type Predicates** : Type predicates are functions to check the type of a value, returning `#t` (true) or `#f` (false). For example, `(number? x)` and `(boolean?) x` check if `x` is `number` or `boolean` type, respectively.
- **Symbol** : Symbol is a data type for identifier in Scheme. We can define symbol using syntactic sugar `'` followed by the symbol literal, such as `(define my-symbol 'foo)`. Then, we can use `my-symbol` variable or the actual symbol `foo` as something that represent identifiers.

  The point of having symbol type is their efficiency on certain operation. They are _interned_, meaning the same name are represented by the same object in a symbol table. This allows for comparing equality of two variable with `eq?` operator to be more efficient than using pointer, because it simply checks whether the symbols are the same object.

- **Function** : Function is defined using `define` keyword.

  ```scheme
  (define (add a b)
      (+ a b))
  ```

  Function can also be defined using lambda expression. `lambda (a b) (+ a b)` is a function that takes two formal parameter `a` and `b`. The latter is the body of the lambda expression.

:::tip
Scheme doesn't allow extra parentheses, it uses them to isolate expression (called **S-expression syntax**). The expression `((+ 3 3))` can cause runtime error due to Scheme thinking it was a function which should take argument on the left.
:::

#### Binding

We can create local binding within a specific scope to define variable or local function.

```scheme
(let ((x 2)
      (y 3))
  (+ x y))    ; Returns 5
```

`x` and `y` is only valid inside the body of `let` expression.

#### Lists

We can declare a list like `(define my-list '(1 2 3 4))`. Scheme provides several built-in functions to manipulate list, such as `car` to get the first element of the list, `cdr` to get the last element of the list, and `length` to get the number of elements in the list.

#### Control Flow & Assignment

Selection control flow such as if-else statement :

```scheme
(if (< x 10)
    (display "x is less than 10")
    (display "x is greater than or equal to 10"))
```

Or using `cond` to be able to specify multiple condition (if-elseif-else statement).

```scheme
(cond ((> x 10) (display "x is greater than 10"))
      ((< x 10) (display "x is less than 10"))
      (else (display "x is equal to 10")))
```

:::info
`display` is a function to print.
:::

Iteration is done with recursion.

```scheme
(define (count-down n)
  (if (<= n 0)
      'done
      (begin
        (display n)
        (newline)
        (count-down (- n 1)))))

(count-down 5)   ;
```

This function outputs "5 4 3 2 1" (each in newline). It recursively counts down from a given number until it reaches zero.

#### Program as Data

Scheme typically represent program as data in data structure like list. Expressions are nested within parentheses, a program represented as a list consists of nested lists, with each list representing an expression or a subexpression.

With this following program.

```scheme
(define (add x y)
  (+ x y))

(display (add 3 4))
```

We can represent it in list structure.

```scheme
'((define (add x y)
    (+ x y))
  (display (add 3 4)))
```

Since Scheme treats its own program as data that can be manipulated, transformed, and evaluated dynamically at runtime, it allows for easier metaprogramming. The property of a language that represents program code as data is called **homoiconicity**, enabling tasks such as code generation, code analysis, and program transformation.

#### Monads

Functional programming always favor program without side effect. However, the use of I/O feature such as `read` (read user input) or `display` (print to console) that interacts with external world may be a source of side effects.

We can model I/O as streams, which are unbounded-length lists generated lazily. This means that values are computed as they are needed, rather than all at once. It allows for better control over when and how the side effects occur. Furthermore, it ensures that program is properly ordered, by computing only what is needed at a given time. Only when a specific value is needed, such as when an output is required, is the corresponding prompt or input evaluated to produce the necessary result.

This style of modeling I/O system as a stream becomes the foundational model called **monad** (a more general concept) in language like Haskell. Monad is an abstraction that encapsulate a value to a sequence of computations with effects.

### Trade-offs

The principle in functional programming that favor immutability and no side effect is achieved through doing transformations and operations on new values instead on existing values. This also means that more objects will be allocated in memory. It will make manual memory management complex, thus functional language typically rely on [garbage collection](/computer-and-programming-fundamentals/memory#garbage-collection).

Immutable data structures may require more memory allocation and copying, which can make the program less efficient. On the other side, the property of immutability and no side effect make the program much more predictable, easier to debug, and readable. Furthermore, with the guarantee of data being immutable, it becomes easier to reason about and safely execute code in parallel.

A programmer who is used to OOP or imperative languages may face a steep learning curve when trying to learn a pure functional programming language. It can be less intuitive to deal with I/O operations without mutable state or side effect.

:::tip
A mutable state means it can be potentially modified by any number of entities, which can make it harder to find the actual source of modification and reason about the behavior of the program.
:::
