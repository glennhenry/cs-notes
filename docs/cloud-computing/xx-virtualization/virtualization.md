---
slug: /cloud-computing/virtualization
id: virtualization
title: Virtualization
description: Virtualization
---

This is the same notes as :

- **[Operating System > Virtualization](/operating-system/virtualization)**

**Main Source :**

- **[Virtualization Explained - PowerCert](https://youtu.be/UBVVq-xz5i0?si=kHYnrYGPjpTsiqYv)**
- **[Virtual Machines vs Containers - PowerCert](https://youtu.be/eyNBf1sqdBQ?si=j4eCUEMDn42GwEpQ)**
- **[Levels of Virtualization Implementation in Cloud Computing - YourTechDiet](https://yourtechdiet.com/blogs/levels-of-virtualization-implementation-in-cloud-computing/)**
- **[Levels of Virtualization Implementation - BrainKart](https://www.brainkart.com/article/Levels-of-Virtualization-Implementation_11329/)**

### Virtualization

**Virtualization** is the process of creating a virtual (rather than physical) version of something, such as an operating system, a server, a storage device, a network resource, or a software system. Virtualization emulates the functionality of a physical computer system by creating virtual machines (VMs) or virtual environments. Virtual machine (VM) has its own memory, CPU, storage, file system, configuration just like a physical machine.

![Virtualization architecture](./virtualization-architecture.png)  
Source : https://www.techtarget.com/searchitoperations/definition/virtualization

#### Hypervisor

**Hypervisor** is the software that made virtualization possible that creates and manages virtual machine. In virtualization, it is possible that a single machine could run 3 different OSes and each of the OS run 3 different application which can't be run on other OS expect itself.

The primary use of hypervisor is to abstract and virtualize the physical hardware, presenting it to the virtual machines as if they were running on dedicated hardware. It provides a layer of software that sits between the physical hardware and the virtual machines, allowing the virtual machines to operate independently and securely.

There are two types of hypervisor :

- **Type 1 Hypervisor (Bare-Metal Hypervisor)** : This hypervisor runs directly on the host computer's hardware, without the need for an underlying operating system. Examples include VMware ESXi, Microsoft Hyper-V, and Citrix XenServer.
- **Type 2 Hypervisor (Hosted Hypervisor)** : This hypervisor runs on top of an existing operating system. Examples include VMware Workstation, Oracle VirtualBox, and Microsoft Virtual PC.

![Hypervisor type 1 and 2 comparison](./hypervisor.png)  
Source : https://superuser.com/questions/1553794/are-hardware-drivers-needed-to-be-installed-on-the-management-os-of-a-type-1-hyp

#### Benefits of Virtualization

- **Improved hardware utilization** : Rather than having 3 machines to run 3 distinct operating system, virtualization allows us to utilize a single machine to run it all. This will reduce required hardware and energy costs.

- **Flexibility** : Virtualization provides the ability to quickly provision and deploy virtual machines.

- **Testing in development** : Virtualization creates isolated test environments, allowing developers to test applications and configurations on different system without affecting the production environment.

#### Virtualization Implementation

Virtualization can be implemented in three ways :

- **Full Virtualization** : In full virtualization, the virtualization layer (hypervisor) provides complete hardware abstraction, it can run multiple virtual machines to run simultaneously on a single physical host. Each virtual machine operates as if it has its own dedicated hardware resources, including CPU, memory, storage, and network interfaces. Examples of full virtualization hypervisors are VMware ESXi and Microsoft Hyper-V.

- **Para-virtualization** : In full virtualization, the OS is not aware that it is running in a virtualized environment, **para-virtualization** instead modifies the guest operating system to be aware of the virtualization layer. The operating system and the hypervisor (or the virtualization layer) can communicate directly to perform tasks such as memory management and I/O operations.

- **Hardware-assisted Virtualization** : Hardware-assisted virtualization enables full virtualization with the help of hardware capabilities such as Intel VT-x or AMD-V. This allows for better performance as it is supported directly by the hardware.

- **Operating System-level Virtualization/Containerization** : Operating system-level virtualization, also known as containerization, is a lightweight form of virtualization where the virtualization layer runs on a single host operating system. Instead of virtualizing an operating system, it creates multiple virtual machines (VMs) isolated in the OS. Each of the component is called **container**, and they share the host operating system's kernel, libraries, and other resources. (explained more below)

#### Virtualization Level

Virtualization level is the level of how depth is virtualization implemented in an environment.

- **Instruction Set Architecture Level (ISA)** : This is the lowest level implementation that emulates the low-level operations that a processor can perform, such as arithmetic, logic, and memory operations.

- **Hardware Abstraction Level (HAL)** : This level implement the abstraction of hardware components to higher-level interface for software. It implements the device drivers and APIs that allow software to interact with hardware.

- **Operating System Level** : This level implement the operating system (OS). The OS manages system resources, provides services to applications, and facilitates communication between software and hardware. It includes components such as the kernel, file system, memory management, process management, and device drivers.

- **Library or API Level** : This level implements software libraries and frameworks that provide pre-built functions and modules to simplify application development.

- **Application Level** : Also known as **process-level virtualization**, this level focuses on virtualizing specific applications or software frameworks. It allows applications to run in isolated environments, separate from the underlying operating system and other applications.

  ![Virtualization level with their example](./virtualization-level.png)  
   Source : https://www.brainkart.com/article/Levels-of-Virtualization-Implementation_11329/
