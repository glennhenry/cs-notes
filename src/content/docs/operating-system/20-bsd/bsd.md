---
title: BSD
slug: operating-system/bsd
description: BSD
---

**Main Source:**

- **[Berkeley Software Distribution — Wikipedia](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution)**

**Berkeley Software Distribution (BSD)** is a family of [Unix-like operating systems](/operating-system/unix) that originated from the Unix research and development work conducted at the University of California, Berkeley in the 1970s and 1980s.

In the late 1970s and early 1980s, the University of California, Berkeley made significant contributions to the development of Unix. They added new features, improved the code, and developed their own version known as **Berkeley Unix**.

Over time, the BSD codebase was further developed and evolved independently, leading to the creation of distinct operating systems known as BSD descendants. These descendants include FreeBSD, OpenBSD, NetBSD, and DragonFly BSD.

### FreeBSD

The FreeBSD is an open source, portable, complete operating system that can run on [x86](/computer-organization-and-architecture/isa#x86), [ARM](/computer-organization-and-architecture/isa#arm), AArch64, RISC-V, and PowerPC computers.

FreeBSD features:

- **Kernel**: FreeBSD has its own kernel, which is a monolithic one with modular design.

  The kernel initially uses the M:N [threading model](/operating-system/multithreading#relationship-model), where multiple user-level threads (M) were mapped onto a smaller number of kernel-level threads (N). In the version 7.0, FreeBSD switched to a 1:1 threading model.

  FreeBSD uses **kqueue (Kernel event queue)**, which is an event notification mechanism. kqueue follows an event-driven architecture, where applications register interest in specific types of events and the kernel notifies them when those events occur. This way, the applications don't have to constantly check for changes or wait indefinitely. Instead, they can be notified promptly when something they're interested in happens.

- **File Systems**: FreeBSD supports various file systems, including UFS (Unix File System), ZFS (Zettabyte File System), and [FAT (File Allocation Table)](/operating-system/file-system#fat).
- **Networking**: FreeBSD has a robust networking stack that includes support for [TCP/IP](/computer-networking/tcp-protocol), [IPv6](/computer-networking/ip-address#ipv6), [routing](/computer-networking/routing), [firewall](/computer-security/network-security#firewall), and [Wi-Fi](/computer-networking/wi-fi).
- **Jails**: FreeBSD introduced the concept of "jails," which are a form of [operating system-level](/cloud-computing-and-distributed-systems/virtualization#level-implementation) [virtualization](/cloud-computing-and-distributed-systems/virtualization). Jails allow the creation of isolated environments within a single FreeBSD installation, providing secure separation of processes, file systems, and network stacks.
- **Ports Collection**: FreeBSD has an extensive and well-maintained Ports Collection, which is a collection of software packages and their build scripts. The Ports Collection simplifies the installation and management of third-party software, allowing users to easily add and update applications from a vast selection of packages.
