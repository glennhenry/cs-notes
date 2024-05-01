---
slug: /software-engineering/build-and-package-management
id: build-and-package-management
title: Build & Package Management
description: Build & Package Management
---

**Main Source :**

- **[Library (computing) - Wikipedia](<https://en.wikipedia.org/wiki/Library_(computing)>)**
- **[Package manager - Wikipedia](https://en.wikipedia.org/wiki/Package_manager)**
- **[Software repository - Wikipedia](https://en.wikipedia.org/wiki/Software_repository)**
- **[Semantic Versioning 2.0](https://semver.org/)**
- **[Software build - Wikipedia](https://en.wikipedia.org/wiki/Software_build)**

### Package Management

#### Libraries

While developing software, developers often use libraries made by other developers. This is to reduce the time spent to develop basic functionalities, so they can focus on business requirement.

When we say libraries, they are not limited to code made by others. It is really any piece of code that used to build a complete software. They can be code provided by the language itself (often called standard library), code made by others, or even your own function. A code doesn't need to be complex in order to be called a library. Even an `addTwo` function can be considered as library. In summary, libraries are reusable code that provide specific functionality to solve common problems.

The simplest way of programming a software is, to include all the source code in a single file. Obviously this is not ideal, especially for larger and more complex projects. Another way is to separate them to multiple files, it is more realistic.

#### Linking

When using library, functions, classes, or variables are scattered around the source code (i.e., in another file). In order to connect them together, a program called **linker** will link together all the libraries used. The linking process is done during compilation process and doesn't require developer intervention. The only think that the linker need is associated library, which must exist in our source code.

There are two types of library based on how they are linked :

- **Static or archive library** : This is a type of libraries that are combined into a single file. It contains pre-compiled code, functions, classes, or variables that can be linked directly into an executable at compile time. When a static library is linked, the linker copies the pre-compiled code from the library into the final executable. This means that the compiled code from the library becomes a part of the executable. Static libraries are identified by `.a` format on Unix or `.lib` format on Windows.
- **Dynamic or shared library** : This library also contains pre-compiled code, but they are linked and loaded at runtime. Instead of copying the code into our executable, the linker creates references to the functions, classes, or variables in the dynamic library. This can reduce the size of our executable, but it requires the library to be present in the system. Dynamic libraries are identified by `.so` format on Unix or `.dll` format on Windows.

Pre-compiled library like static and dynamic is called **binary library**. On the other hand, if the library is still in the form of source code, then it is **source library**.

#### Dependency

After using many libraries, managing them can be complex. It's worth noting than others library can depend on another, if we use library A, it may depend on library B and C, and each of them may depend on another. If one of the libraries need to be updated, we will need to download them again manually.

One of the scariest problem of managing library is, if one of them depend on the other. Library has specific version, some of them may use the [semantic versioning](#semantic-versioning). The problem arise when different libraries have conflicting version requirements for their dependencies. This situation, known as **dependency version conflicts**, can create a complex puzzle to solve.

For example, we are using library A and C. Library A requires the version 1.2.0 of library B, while library C requires the newer version of library B, which is version 2.0.0. So, which version should we use? The problem is, it is possible that library B in the version 2.0.0 changes the behavior of some function that exist in version 1.2.0, which is used by library A.

:::tip
The ability of a newer version of a library to be used with a previous version, specifically when there are breaking changes that affect the behavior or API of the library, is called **backward compatible**.
:::

Furthermore, in another scenario, what if library A depends on library B, but library B also depends on library A, creating a **circular dependency**. Circular dependencies can occur when integrating libraries that were not originally designed to depend on each other. We can call all this problem **dependency hell**, where software can't work because of its dependencies.

#### Package Manager

All the problem can be handled (not solved) by **package manager**, a specialized software that automates the process of installing, upgrading, configuring, or removing libraries.

The functions of package manager :

- **Managing dependencies** : Package manager typically works with a configuration file, containing what are the dependencies needed for the project. If we want to use others library, we would add the identifier for the library and specify its version we want to use.
- **Dependency Installation** : Libraries are typically put on centralized code repository, which package managers can retrieve from. Example of them are Maven for Java, PyPI for Python, and NuGet for .NET.

  To actually install library, we need to tell the package manager to retrieve the package. This is done by executing commands provided by the package manager in the command line. They will handle the necessary steps to download, extract, and install the package files, including any additional resources or configurations, similarly for deletion or removal. The package manager also keep tracks the version we are using, and we can use another command to update the package to the latest version.

- **Dependency Resolution** : Package manager analyze each dependency of different packages. They examine the version requirements and constraints specified by each package and attempt to find a compatible set of versions that satisfy all dependencies. It can construct a [directed graph](/data-structures-and-algorithms/graph) to represent the dependency structure. It then uses algorithm such as [cycle detection](/data-structures-and-algorithms/cycle-detection) and [topological sort](/data-structures-and-algorithms/topological-sort) to identify circular dependencies and determine the correct order to install dependencies.
- **Dependency Locking** : To ensure consistency between dependencies, package managers often generate lock files. These lock files capture the exact versions of the installed packages, including their dependencies. Lock files ensure that dependency version doesn't change suddenly.

  Over time, new versions of packages may be released. Without locking the version, it is possible that the package manager accidentally update the package, which may introduce compatibility issue with the existing dependencies.

:::info
An example of package manager is [npm](/frontend-web-development/npm), which is the default package manager for [Node.js](/frontend-web-development/node-js) projects.
:::

:::warning
Using package manager doesn't mean it will solve every dependency issues. Conflicting issue, such as one requiring newer version that is not compatible with older version may not be solvable by nature, and require human intervention. What package manager guarantee is, it helps us to automate and handle issue that are solvable.
:::

#### Semantic Versioning

**Semantic Versioning (SemVer)** is a versioning scheme used to assign meaningful version numbers to software packages. It is a set of rules and guidelines that helps developers and users understand the nature of changes in a release and determine compatibility with other versions.

The format of the version in SemVer is x.y.z, for example, 1.2.4. It consists of three parts:

- **MAJOR (e.g., 1.y.z)** : Indicates significant changes that may introduce breaking changes or incompatible API modifications compared to previous versions.
- **MINOR (e.g., x.2.z)** : Represents added functionality or features in a backward-compatible manner. It indicates that new features have been introduced, but existing APIs remain compatible with previous versions. Typically, a dependency is kept at highest minor version, unless it is possible to update to the major version.
- **PATCH (e.g., x.y.3)** : The patch version number is incremented for backward-compatible bug fixes, patches, or updates that do not introduce any new features.

In addition, we can provide additional information to the version :

- **Pre-release Version** : Denoted by appending a hyphen followed by a series of alphanumeric identifiers (e.g., 1.2.3-alpha.1). Pre-release versions are used for releases that are not yet considered stable or production-ready. They can include alpha, beta, RC (release candidate), or any custom identifiers.
- **Build Metadata** : Additional information about the version and is denoted by appending a plus sign to the pre-release or patch version followed by arbitrary identifiers (e.g., 1.0.0-alpha+001).

### Software Build

In order to run a program, it needs to be compiled, or converted into machine code, which can be executed by computers. The general process of converting source code into executable is called **build**. The build process is typically automated by build tools.

A build process includes :

- **[Compilation](/compilers#compiler-toolchain)** : Translating human-readable source code into machine-readable code, or intermediate language in the case of [interpreted languages](/computer-and-programming-fundamentals/interpreter).
- **Dependency Resolution**: Identifies and resolves the dependencies required by the software project. Ensures that the necessary external libraries, frameworks, or modules are available and compatible with the project. Some build tools such as Gradle includes a package manager for this.
- **Quality Assurance** : During build process, code quality is tested. This includes doing automated unit tests or analyzing code with integrated static analyzer tools.
- **Code Packaging** : Packages the necessary files and resources into a distributable format. This may involve creating an executable file, a library, an archive, or a deployable package, depending on the nature of the project.
- **Deployment** : In some cases, the build process includes deploying the software to a specific environment, such as a production server, a testing environment, or a cloud platform.

More specifically, a build process produces a **software artifact**, which is a general concept that refers to any output or result of the software development process. An artifact can be executable, which contains all the necessary instruction, packaged with dependencies for end-user to execute.

A build process can be **full** or **incremental**. A full build involves building the entire software project from scratch, while incremental build only builds the portions of the software project that have changed since the last build.
