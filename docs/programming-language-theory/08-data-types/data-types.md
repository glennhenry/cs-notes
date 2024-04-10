---
slug: /programming-language-theory/data-types
id: data-types
title: Data Types
description: Data Types
---

**Main Source :**

- **Book chapter 7**

Data type is a classification or categorization of data that determines the type of values that a variable can hold, the operations that can be performed on those values, and the way the values are represented in memory.

### Type Systems

Type system is a set of rules, constraints, and mechanisms in programming languages that define and enforce the types of values and expressions used in a program. It consists of :

- **Built-in types** (also called primitive or predefined types), common types include boolean, integer, char, float, double, etc. These are typically supported in hardware.
- **Mechanism to declare and define new types**.
- **Rules for type equivalence**, how to decide if one name is the same type of another name.
- **Type compatibility**, what operation can be performed on some types.
- **Type conversion**, a way to convert one type to another, explicitly or implicitly.
- **Type inference**, an optional feature to automatically deduces the types of expressions and variables without explicit type annotations.

With a type system, compilers determine the appropriate operation to perform on operands. For example, if `a` and `b` are integers, then `a + b` will result in an integer addition. If `b` is a floating-point number, the compiler checks whether addition between an integer and a floating-point number is allowed or defined by the user. If both answers are negative, the compiler may choose to throw an error or implicitly convert one type to another.

Some term about type system :

- **Strong typing vs weak typing** : A strongly typed language will never convert one type to another when the operation between them are not supported. Weak typed language may perform this if needed, which can potentially lead to unexpected errors.
- **Static typing vs dynamic typing** : A statically typed language does type checking at compile-time, which results in variable must be annotated by its type (expect if it has type inference) when declared. Dynamic typed is the opposite, it does type checking at runtime, and variable doesn't require explicit type annotation. By checking the type at runtime, a variable can hold different type of values during the execution of the program.

#### Polymorphism

[Polymorphism](/computer-and-programming-fundamentals/object-oriented-programming#polymorphism) allows for entities (variables, functions, etc.) to have multiple types or behave differently depending on the types of their arguments.

While polymorphism depends on type it operates on, it doesn't always imply type checking is done at runtime.

- A straightforward **ad-hoc polymorphism** like function/method overloading, in which multiple functions have the same name, but has different argument(s) or type of the argument(s). Compiler can distinguish between them by comparing the number of parameters or type of the parameters.
- **Subtype polymorphism** allows a subtype to be used where a supertype is expected. This may be encountered in [OOP](/computer-and-programming-fundamentals/object-oriented-programming) languages, where exists concept like inheritance that allows objects of different classes or types to be treated uniformly through common interfaces or base classes.
- A situation where single function or data structure can operate on values of different types, this is called **parametric polymorphism**. It may be explicit (often known as generics), where programmer specifies the function that can work on some types and another; or implicit (often known as type inference), where the compiler infer the type parameters it works on.

#### Classification of Types

- **Numeric Types** : Represent numerical values. They include integer types (such as int, long, short) for representing whole numbers, floating-point types (such as float, double) for representing decimal numbers, and sometimes additional types like byte, decimal, complex numbers.
- **Enumeration Types** : Enumeration types define a set of named values. They represent a finite set of distinct options or choices. Each value in an enumeration type is typically assigned an integer (called ordinal value) as an underlying representation. Enums provide a way to express a set of related constants and make the code more readable and expressive.

  For example, enum in C++ :

  ```cpp
  enum class Color { RED, GREEN, BLUE };
  Color myColor = Color::GREEN;

  // Using the enum values
  if (myColor == Color::RED)
      // ...
  ```

  Under the hood, integer comparison are going on.

- **Subranges Types** : Subrange types allow to define a subset of values within a range of values. For example, a subrange type `Age` may restrict values to be within a specific range, like 0 to 120. Pascal language is first to implement subrange type, for example, we can define : `type test_score = 0..100;`, restricting it to only be defined under the range of 0 to 100.
- **Composite Types** : Composite types are types that are composed of multiple values or subtypes. They are created with type constructor and used to represent structured or compound data. Examples of composite are arrays, lists, tuples, records, structs, classes, and objects. Composite types allow grouping related data together, making it easier to organize.

#### Orthogonality

Orthogonality is a characteristic of an entity having independent and non-overlapping features or dimensions. An orthogonal type system has independent type features that can be combined in many ways without restrictions or conflicts. In other word, changing feature A doesn't affect feature B. To achieve orthogonality, types need to be well-defined and clear meaning, without being ambiguous with others.

For example, a language can support variable being mutable or immutable and nullable or non-nullable.

```
mutable x: Int; // mutable variable, non-nullable
immutable x: Int; // mutable variable, non-nullable
mutable x?: Int; // mutable variable, nullable
immutable x?: Int; // mutable variable, nullable
```

We can say immutability and nullable types are orthogonal features of this language.

### Type Checking

### Structs & Unions

### Arrays

### Strings

### Sets

### Pointers & Recursive Types

### Lists

### Files I/O

### Equality Testing & Assignment
