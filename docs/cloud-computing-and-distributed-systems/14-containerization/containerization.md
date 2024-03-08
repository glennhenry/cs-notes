---
slug: /cloud-computing-and-distributed-systems/containerization
id: containerization
title: Containerization
description: Containerization
---

**Main Source :**

- **[Containers - Explained in 4 Minutes - Accelerate Rediscover In 4 Minutes](https://youtu.be/pR-cGS6IGvI?si=LOqZkrsmbzDJE7l9)**
- **[What Is Containerization? - AWS](https://aws.amazon.com/what-is/containerization/)**

During application development, developers often use various libraries and modules, each with its own dependencies, this can create a complex [dependency management](/software-engineering/build-and-package-management#dependency) as the app gets larger. The server running the app will need all the required dependencies, including libraries, frameworks, runtime environments, packages, and operating system requirements in order to run the application.

**Containerization** is a technique used to bundle an application along with all its required packages into a single unit known as a **container**. A container is isolated and self-contained, which helps prevent dependency conflicts in the case of single computer with different version of library installed run different application. All the necessary dependencies are specified within a **container image** (not an actual image file).

These containers are already fully-functional and can be executed directly in isolated instances using a **container engine** (e.g., [Docker](/cloud-computing-and-distributed-systems/docker-and-kubernetes#docker)). The container engine is responsible for managing and running containers on a system. It achieves this by leveraging [virtualization](/cloud-computing-and-distributed-systems/virtualization) techniques, where the container engine sits on top of the operating system (OS) and provides [OS-level virtualization](/cloud-computing-and-distributed-systems/virtualization#level-implementation).

![Containerization 1](./container.png)  
Source : https://bito.ai/blog/containerization-a-beginners-guide-to-its-impact-on-software-development/

The computer runs virtualization, providing multiple virtual machines (VMs) with different OSes or configuration. These VMs are isolated, meaning each VM has its own file system, networking, and storage. The container engine will then interact with the OS to execute the libraries and application in the container.

Multiple VM is actually not necessary to run the container, as another advantage of container is, we are capable of running multiple of it in single VM.



Inside the VM, the required dependencies are installed based on the specifications in the container image. The container engine interacts with the OS to facilitate the execution of libraries and applications within the container.

![Containerization 2](./container-2.png)  
Source : https://medium.com/hackernoon/what-is-containerization-83ae53a709a6
