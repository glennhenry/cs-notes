---
slug: /cloud-computing-and-distributed-systems/distributed-systems-communication
id: distributed-systems-communication
title: Distributed Systems Communication
description: Distributed Systems Communication
---

**Main Source :**

- **Mostly from previous notes**
- **[Task Assignment Approach in Distributed System - tutorialspoint](https://www.tutorialspoint.com/task-assignment-approach-in-distributed-system)**

Communication and coordination is an important topic in distributed systems. **Coordination** involve managing and synchronizing the activities and behavior of multiple nodes in the distributed system. While **communication** is concerned with the exchange of information, messages, or data between components or nodes in a distributed system.

### Coordination

There are many concerns of coordination in distributed system, this includes synchronization and handling concurrent operations, task scheduling as well as assigning them to nodes, message ordering to ensure messages are delivered in the correct order, etc.

#### Synchronization & Concurrency Control

This includes :

- To avoid [concurrency issues, such as race condition](/operating-system/multithreading#multithreading-problems), we can utilize [locking mechanism](/cloud-computing-and-distributed-systems/distributed-database#locking) to treat resource access as exclusive. With exclusive access, we restrict a resource to be accessed by only a single node.
- When a node generates a value, maybe from executing business logic or processing data, all other nodes need to be aware of it. In other words, all nodes should maintain a synchronized view of the shared data to achieve consistency. Such techniques can be employed with techniques like [consensus](/cloud-computing-and-distributed-systems/distributed-systems-model#consensus), with one implementation being the [Paxos protocol](/cloud-computing-and-distributed-systems/distributed-systems-model#paxos).

#### Task Assignment

To make sure that nodes have a balanced workload or meet some performance constraints, we require a component capable of assigning and scheduling tasks.

Based on "who" will assign the task :

- **Centralized** : A central controller or scheduler is responsible for receiving task requests and making assignment and scheduling decisions. The central controller maintains information about the state and availability of nodes and assigns tasks based on predefined policies or algorithms. It is possible to optimize task assignment because the centralized system have a system-wide knowledge, but it can also introduce a single point of failure and scalability challenges.

  The controller can be chosen with [leader election algorithm](/cloud-computing-and-distributed-systems/distributed-systems-model#leader-election), with one example being the [Bully algorithm](/cloud-computing-and-distributed-systems/distributed-systems-model#bully-algorithm).

- **Decentralized** : In decentralized approach, each node makes its own decisions regarding task assignment and scheduling. Nodes can communicate with each other to exchange information about their capabilities, workload, and availability. This approach provides more fault tolerance and scalability but may require communication overhead within nodes. One algorithm for decentralized approach is the [distributed hash table](#distributed-hash-tables).

- **[Load Balancer](/software-engineering/system-design#load-balancer)** : We can own a dedicated component that handles task distribution among nodes. Load balancing algorithm consider factors like the current workload, processing capabilities, and network conditions to make task assignment decisions. Task assignment strategies includes round-robin, which assign task in circular manner, or least-loaded, where task is assigned to node with the least workload.

#### Distributed Hash Tables

- task assignment
  - centralized
  - decentralized
  - message queue
  - dht

/cloud-computing-and-distributed-systems/distributed-systems-model

### Message Passing

- message passing
- rpc
- publish / subscribe
- SOA
