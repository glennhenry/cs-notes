---
slug: /cloud-computing-and-distributed-systems/distributed-database
id: distributed-database
title: Distributed Database
description: Distributed Database
---

**Main Source :**

- []

Distributed Database page

### Concurrency Mechanism

With a bunch of nodes communicating and potentially sharing data, concurrency will always be a concern. Mechanism to used to manage and coordinate concurrent access to shared resources in a distributed system are required.

A data operation can be classified as **read** or **write**. A read retrieves the value of a data item from a storage location or a shared resource, without modifying. A write operation modifies the value of a data item, updating or overwriting the existing value. A concurrency problem typically occurs when there are two nodes accessing the same resource, and one of them are writing operation.

Consider a scenario of node A and node B, where node A writes and node B reads, both accessing the resource C. Assume that node A and B execute their operation at the same time. Even if their operation is started at the same time, the end result depend on the actual execution. If the initial value of C is 100, B is supposed to read 100, but if node A executed first, then it will read whatever node A was writing. This scenario is often called [race condition](/operating-system/multithreading#multithreading-problems).

#### Locking

Access of resource by nodes are exclusive, meaning a resource can only be accessed by a single node. A lock can be acquired by a node, meaning that particular node gain exclusive access to the resource, or released, the node makes it available for other node to acquire.

The component that holds the resource should implement the locking mechanism, keeping track of which node is currently acquiring the lock. When a node wants to access a resource, it will need to request the lock to the lock tracker. If there's another node acquiring the lock, then the access request will simply be delayed. Otherwise, that particular node will now acquire the lock and gain access to the resource.

:::tip
See also [mutual exclusion](/operating-system/multithreading#locks--mutex).
:::

#### Atomic Commit

Atomic commit is a protocol or mechanism that ensures a set of operations or [transactions](/database-system/transactions) are either all committed or all aborted, maintaining consistency across multiple nodes or databases.

A transaction is a logical unit of work that consists of multiple operations that need to be executed as an indivisible unit. If any part of the transaction fails, all changes made by the transaction are rolled back, leaving the system in its original state. On the other hand, if all parts of the transaction succeed, all changes are committed, and the system reflects the updated state.

One implementation of atomic commit is the **two-phase commit (2PC)** protocol. This protocol consist of two phases, prepare and commit phase. A coordinator node responsible for managing the transaction communicates with all participating nodes and asks them to prepare for the commit. Each participating node performs its portion of the transaction and prepares to commit. If any node encounters an issue during this phase or cannot prepare for the commit, it indicates a failure. Based on the responses received during the prepare phase, the coordinator makes a final decision about whether to commit or abort the transaction. If all nodes are prepared to commit, the coordinator sends a commit message to all participating nodes, instructing them to permanently apply the changes. If any node is unable to commit or if there is a failure detected, the coordinator sends an abort message, instructing all nodes to roll back the changes.

:::tip
See also similar topic about [concurrency control in database system](/database-system/concurrency-control).
:::

- distributed database, data store
- distriubted query processing
- distributed transaction
- sharding
