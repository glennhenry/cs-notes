---
slug: /operating-system/inter-process-communication
id: inter-process-communication
title: Inter-process Communication
description: Inter-process Communication
---

**Main Source :**

- [] 

**Inter-process Communication (IPC)** is...

### IPC Mechanism

IPC is all about communication, there are two main technique to communicate, by utilizing shared memory, or passing messages.

#### Shared Memory

[shared memory](/operating-system/multithreading#shared-memory)

#### Message Passing

[message passing](/operating-system/multithreading#message-passing)

### RPC

**Remote Procedure Call (RPC)** listed in [RPC](/backend-development/rpc)

### IPC Synchronization

IPC still uses synchronization method listed in the [thread synchronization](/operating-system/multithreading#thread-synchronization), such as mutex, semaphore, condition variables, but IPC cover a larger scope, that is within processes.

Classic problem such as [readers-writers](/operating-system/process-synchronization#readers-writers), and [dining philosophers](/operating-system/process-synchronization#dining-philosophers).

Solution such as mutex
