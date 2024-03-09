---
slug: /cloud-computing-and-distributed-systems/containerization
id: containerization
title: Containerization
description: Containerization
---

**Main Source :**

- **[Containers - Explained in 4 Minutes - Accelerate Rediscover In 4 Minutes](https://youtu.be/pR-cGS6IGvI?si=LOqZkrsmbzDJE7l9)**
- **[What Is Containerization? - AWS](https://aws.amazon.com/what-is/containerization/)**
- **[OS-level virtualization - Wikipedia](https://en.wikipedia.org/wiki/OS-level_virtualization)**

During application development, developers often use various libraries and modules, each with its own dependencies, this can create a complex [dependency management](/software-engineering/build-and-package-management#dependency) as the app gets larger. The server running the app will need all the required dependencies, including libraries, frameworks, runtime environments, packages, and operating system requirements in order to run the application.

**Containerization** is a technique used to bundle an application along with all its required packages into a single unit known as a **container**. A container is isolated and self-contained, which helps prevent dependency conflicts in the case of single computer with different version of library installed run different application. All the necessary dependencies are specified within a **container image** (not an actual image file).

### Container Engine

Containers are already fully-functional and can be executed directly in isolated instances using a **container engine** (e.g., [Docker](/cloud-computing-and-distributed-systems/docker-and-kubernetes#docker)). The container engine is responsible for managing and running containers on a system. It achieves this by leveraging [virtualization](/cloud-computing-and-distributed-systems/virtualization) techniques, where the container engine sits on top of the operating system (OS) and provides [OS-level virtualization](/cloud-computing-and-distributed-systems/virtualization#level-implementation). The container engine will then interact with the OS to execute the libraries and application in the container.

![Containerization 1](./container.png)  
Source : https://bito.ai/blog/containerization-a-beginners-guide-to-its-impact-on-software-development/

Because containerization is OS-level virtualization, it can run directly on the operating system without the need for additional virtualization. Although virtualization is commonly associated with containerization, as containers are frequently used in hosting services such as cloud services.

### Benefits

Containerization offers more advantages than dependency management.

#### Isolation

Multiple containers can be run on a single computer. Containers have their own isolated runtime environment, including their own file system, process space, and network interfaces. It can be thought that we tricked each container to think they own a whole computer, whereas the actual physical resources, such as CPU, memory, storage, and network bandwidth, are shared among containers running on the same host.

Isolation also improves degree of security by making boundaries between applications. Malicious app can no longer impact other containers or the underlying host system.

#### Efficiency

The cloud provider owns many physical computers (potentially a powerful ones), each running multiple virtual machines (VMs) with different configuration. Within each VM, multiple containers or actual applications can be hosted. So, the usage of host operating system's resources is maximized.

#### Portability

As said before, containers are fully-functional and can be deployed anywhere. Containers encapsulate an application, its dependencies, and runtime environment into a single package. This package is highly portable and can be run consistently across different environments, such as different systems or platforms.
