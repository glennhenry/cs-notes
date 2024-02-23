---
slug: /software-engineering/build-and-package-management
id: build-and-package-management
title: Build & Package Management
description: Build & Package Management
---

**Main Source :**

- **[Library (computing) - Wikipedia](<https://en.wikipedia.org/wiki/Library_(computing)>)**
- **[Package manager - Wikipedia](https://en.wikipedia.org/wiki/Package_manager)**

### Package Management

#### Libraries

While developing software, developers often use libraries made by other developers. This is to reduce the time spent to develop basic functionalities, so they can focus on business requirement.

When we say libraries, they are not limited to code made by others. It is really any piece of code that used to build a complete software. They can be code provided by the language itself (often called standard library), code made by others, or even your own function. A code doesn't need to be complex in order to be called a library. Even your `addTwo` function can be considered as library. In summary, libraries are reusable code that provide specific functionality to solve common problems.

The simplest way of programming a software is, to include all the source code in a single file. Obviously this is not ideal, especially for larger and more complex projects. Another way is to separate them to multiple files, it is more realistic.

#### Linking

When using library, functions, classes, or variables are scattered around the source code (i.e., in another file). In order to connect them together, a program called **linker** will link together all the libraries used. The linking process is done during compilation process and doesn't require developer intervention. The only think that the linker need is associated library, which must exist in our source code.

There are two types of library based on how they are linked :

- **Static or archive library** : This is a type of libraries that are combined into a single file. It contains pre-compiled code, functions, classes, or variables that can be linked directly into an executable at compile time. When a static library is linked, the linker copies the pre-compiled code from the library into the final executable. This means that the compiled code from the library becomes a part of the executable. Static libraries are identified by `.a` format on Unix or `.lib` format on Windows.
- **Dynamic or shared library** : This library also contains pre-compiled code, but they are linked and loaded at runtime. Instead of copying the code into our executable, the linker creates references to the functions, classes, or variables in the dynamic library. This can reduce the size of our executable, but it requires the library to be present in the system. Dynamic libraries are identified by `.so` format on Unix or `.dll` format on Windows.

#### Dependency

After using many libraries, especially those that are external libraries developed by others, managing them can be complex. Imagine if one of your libraries need to be updated, you will need to download them again manually.

One of the scariest problem of managing library is, if one of them depend on the other. Library has specific version, some of them may use the [semantic versioning](#semantic-versioning). The problem arise when different libraries have conflicting version requirements for their dependencies. This situation, known as **dependency version conflicts**, can create a complex puzzle to solve. For example, library A requirements version 1.2.0 of library B, while library C requires the newer version of library B, which is version 1.3.0.

Furthermore, what if library A depends on library B, but library B also depends on library A, creating a **circular dependency**. Circular dependencies can occur when integrating libraries that were not originally designed to depend on each other. We can call all this problem **dependency hell**, where software can't work because of its dependencies.

#### Package Manager

All the problem can be handled by **package manager**, a specialized software that automates the process of installing, upgrading, configuring, or removing libraries.

The functions of package manager :

- **Managing dependencies** :
- **Dependency Retrieval** : Libraries are typically put on centralized code repository, which package managers can retrieve from. Example of them are Maven for Java, PyPI for Python, and NuGet for .NET.

#### Semantic Versioning

### Software Build

:::tip
In the case of interpreted language like /computer-and-programming-fundamentals/interpreter
:::

#### Artifact

#### Build Automation

makefile
make
Cmake
gradle
