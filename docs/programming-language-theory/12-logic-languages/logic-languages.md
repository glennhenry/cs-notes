---
slug: /programming-language-theory/logic-languages
id: logic-languages
title: Logic Languages
description: Logic Languages
---

**Main Source :**

- []

Logic programming is programming based on formal logic, providing a declarative way to solve problem. Logic languages are [declarative](/computer-and-programming-fundamentals/declarative-functional-programming#declarative-programming), meaning that we specify what we want to achieve rather than how to achieve it. This is achieved by specifying logical relationship, then the language inference engine derive a solution. One major logic language is Prolog, most of them are used for AI and database.

The basic idea is :

1. Basic building blocks are logical statements. These statements are expressed in terms of **facts** and **rules**. Facts represent simple assertions about the world, while rules define relationships and dependencies between facts.
2. The logic language store all the facts and rules in a knowledge base.
3. To actually find a solution, we will need to query to the knowledge base.
4. The language engine typically uses [backtracking](/data-structures-and-algorithms/backtracking) to explore different possibilities and find multiple solutions to a query. Then, it uses logical reasoning and deduction techniques to manipulate the statements in the knowledge base as well as applying rule to derive new facts or make conclusions.

### Prolog

#### Basic Concepts

- **Facts** : Written using predicates, which consist of a predicate name followed by a list of arguments enclosed in parentheses.

  ```
  A(B1, B2, B3, ..., Bn)
  ```

  ```
  likes(john, pizza)
  ```

  This means John likes pizza. For a computer, which doesn't understand human language, it simply interprets that `john` has the predicate of `likes` associated with `pizza`. We call things like `john` or `pizza` as **constants**, they are typically written in lowercase.

- **Rules** : Written in form of clauses, in the form of head and body, separated by `:-`.

  ```
  A :- B1, B2, B3, ..., Bn
  ```

  Bi are called literals or conditions. It is read as "A if B1 and B2 and B3 and ... and Bn".

  ```
  loves(john, X) :- likes(john, X), vegetarian(X)
  ```

  For example, means that `john` has the predicate `loves` for `X` if `john` has the predicate `likes` for `X` and `X` is the predicate `vegetarian`. In human language, "john loves X if he likes X and X is a vegetarian." We consider `X` here as a **variable** (typically written in uppercase), which can hold a value (in this case as a placeholder for an unknown value).

  Rules with one or more head and zero or more body is also called **Horn clauses**. Sometimes it is written as `H ← B1, B2, B3, ..., Bn`, which means if all the `B`'s are all true, then we can deduce `H` is true as well.

  Example of deduction is :

  ```
  B ← A
  C ← B
  ```

  Remember that we assume statements are true. By the given statement, if `A` is true, we can deduce `C` is true. This is because we know that `A` implies `B`, which in turns also implies `C`.

- **Queries** : Queries or goals is the body of rules with the `?-` symbol.

  ```
  ?- B1, B2, B3, ..., Bn
  ```

  ```
  ?- likes(X, pizza)
  ?- likes(john, pizza)
  ```

  The first query ask what is the entity that has `likes` predicate to `pizza`. The answer of the query should be something like `X = entity_that_like_pizza`, such as `X = john`. The second query ask if entity 'john' has predicate `likes` to `pizza`, which will return "no" or "yes".

#### Resolution & Unification

**Unification** is when one or more terms identical (logic programming way to check for equality). It is done by creating a variable, then substituting it with some value and comparing it with the other term. If we have the query `likes(john, X)` and the fact `likes(john, pizza)`, we can substitute variable `X` with `pizza`, which will make the two terms identical or unified.

We can check for equality with query, such as `?- A = B`, which return yes or no.

The rules of unification :

- A constant unifies only with itself (i.e., `?- a = a` returns yes).
- Two terms can be unified if and only if they have the same functor (e.g., predicate) and the number of arguments are same, as well as their argument unify recursively.
- Variable unifies with anything. Variable are said to be **instantiated** if they hold a value (i.e., substituted).

#### Lists

List can be constructed by using a sequence of elements followed by `.` (dot), comma, and enclosing it within parentheses. For example, a list of `a`, `b`, and `c` : `.(a, .(b, .(c, [])))`, where `[]` is the tail of the list.

Prolog adds a syntactic sugar to construct a list, the same list can be constructed with just `[a, b, c]`. Furthermore, Prolog allows us to add a vertical bar `|` in the middle of the list to decompose a list into its head and tail parts. It will be useful in the case of the tail is a variable.

A list with elements `a`, `b`, `c` : `[a | [b, c]]`.

Some operation we can do with list are `append`, `reverse`, `sorted`, etc.

#### Arithmetic

#### Search

#### Control Flow

#### Database
