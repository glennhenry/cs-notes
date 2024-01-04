---
slug: /operating-system/process-synchronization
id: process-synchronization
title: Process Synchronization
description: Process Synchronization
---

**Main Source :**

- **[Chapter 5 Process Synchronization - Abraham Silberschatz-Operating System Concepts (9th,2012_12)]**
- **[Chapter 7 Deadlocks - Abraham Silberschatz-Operating System Concepts (9th,2012_12)]**

Process synchronization is concerned with the coordination and control of concurrent processes or threads in a system. The goal is to ensure that processes can safely access shared resources, communicate with each other, and avoid other [concurrency-related issues](/operating-system/multithreading#multithreading-problems).

### Synchronization Techniques

Some concept of synchronization for process is similar to [thread synchronization](/operating-system/multithreading#thread-synchronization), that is using synchronization tools such as mutexes, condition variables, semaphores, etc.

#### Peterson’s Solution

In a concurrent program, the specific section of code where shared resources are accessed or modified is called **critical section**. We could implement mutex to ensure only one process accesses the resource at a time.

**Peterson's solution** is an algorithm for mutex (mutual exclusion), it is a software-based solution which ensure that only one process or thread can enter its critical section at a time.

Peterson's solution requires the shared variables :

- `turn` : A variable that indicates whose turn it is to enter the critical section.
- `flag` : An array of boolean flags, with each element representing the intention of a process to enter the critical section.

The algorithm works as follows :

1. Each process sets its `flag` to indicate its intention to enter the critical section.
2. The process sets `turn` to indicate that it is the other process's `turn`.
3. The process enters a loop and checks if the other process's `flag` is set and if it is the other process's `turn`. If both conditions are true, the process waits until the other process completes its critical section.
4. If the conditions are false, the process enters its critical section and executes the desired code.
5. After the process completes its critical section, it resets its flag to indicate that it is no longer interested in entering the critical section. Also, exist a remainder section where we can perform any necessary cleanup or non-critical tasks.

![Peterson's solution code](./peterson-solution.png)  
Source : https://www.geeksforgeeks.org/introduction-of-process-synchronization/

### Synchronization Problems

#### Readers-Writers

Readers-Writers problem is a scenario where there exist multiple processes, one is reader (process that access data), and another is writer (process that writes data), which are trying to access a shared resource simultaneously.

Having multiple process that reads at the same time is not a problem, because every reader will always read the same data. However, in a case where a reader and a writer access the data at a time, this will obviously be a problem, it may result in [race condition](/operating-system/multithreading#multithreading-problems).

There are two variants of readers-writers problem :

- The first problem assumes that readers have priority over writers.
  - Multiple reader is allowed to read simultaneously, reader shouldn't wait if the resource is currently opened for reading.
  - Writers must wait until all active readers have finished accessing the shared resource. Only a single writer is granted exclusive access to the resource at a time.
  - This problem may starve writers.
- The second problem assumes that writers have priority over readers.
  - When a writer is ready to write, it needs to write as soon as possible.
  - Reader shouldn't write when the writer is going to write.
  - This problem may starve readers.

The criteria for solution :

- Readers can access the shared resource simultaneously if no writers are currently accessing it.
- Writers should access the shared resource exclusively, meaning that no other readers or writers can access it while a writer is writing.
- The solution should avoid starvation and ensure fairness, neither readers nor writers should be indefinitely blocked from accessing the resource.

The general solution :

```
Shared variables:
readers_count = 0
read_lock = Semaphore(1)
write_lock = Semaphore(1)

Reader process:
while true:
    wait(read_lock)
    readers_count = readers_count + 1
    if readers_count == 1:
        wait(write_lock)
    signal(write_lock)

    // Perform reading...

    wait(read_lock)
    readers_count = readers_count - 1
    if (read count == 0):
        signal(write_lock)
    signal(read_lock)

Writer process:
while true:
    wait(write_lock)

    // Perform writing...

    signal(write_lock)
```

- The `read_lock` and `write_lock` variable indicates the mutex for reader and writer, respectively.
- The `wait()` and `signal()` function is the implementation of semaphores, it will enable/disable the access. [Semaphore](/operating-system/multithreading#semaphores) keeps a count, it will only allow access if the count is greater than 0. Passing a lock to the `wait()` function will decrement the lock's count, which effectively block any other reader/writer for accessing. On the other hand, `signal()` is the opposite of `wait()`, which will increment the count, effectively notifies other reader/writer.
- The process of incrementing and decrementing reader count is synchronized with lock, when reading, we will not use the lock, we will allow multiple reader to read simultaneously.
- When `readers_count` reaches 0, we will allow the writer to write by signaling the lock.
- When writing, we will also use `wait()` and `signal()` before and after the writing is done, to ensure only one writer writes.

#### Deadlock

Processes need resource, this mean the process has a dependency on a resource to perform certain operations or computations. For example, a process may need access to a printer resource to print a document, or it may need access to a database resource to retrieve or update data. Deadlock occurs when a set of processes is unable to proceed because each process is waiting for a resource that is held by another process in the set.

Deadlock are typically characterized by :

- **Mutex** : It occurs when mutex is used, when at least one resource must be held in a non-sharable mode, meaning that only one process can use it at a time.
- **Hold and Wait** : When accessing resource, the processes will hold resources while waiting to acquire additional resources.
- **No Preemption** : Resources cannot be forcibly taken away from processes that hold them, only the process itself can release it.
- **Circular Wait** : There exists a circular chain of processes, each waiting for a resource held by the next process in the chain.

##### Resource Allocation Graph

We can detect a deadlock by representing the circular chain of processes in a graph called **resource allocation graph (RAG)**. It consists of nodes representing processes and resources, and directed edges representing resource requests and allocations. If the graph contains a cycle, it indicates the possibility of a deadlock.

![Resource allocation graph](./resource-allocation-graph.png)  
Source : https://www.geeksforgeeks.org/resource-allocation-graph-rag-in-operating-system/ (box R is resource, circle P is process)

A single resource type means only one instance of a resource can be accessed at a time. However, this method is not applicable when dealing with multi-instance resource types, which is the case when single instance of resource can be accessed by some number of processes.

A deadlock happens when processes are stuck waiting for resources that are held by other processes, forming a cycle in the RAG. However, in multi-instance resource systems, processes can sometimes release some instances of a resource and continue running. So, even if there is a cycle in the RAG, it does not always mean there is a deadlock.

##### Banker's Algorithm

The Banker's algorithm can be used to detect deadlock in multi-instance resource systems.

The algorithm operates based on the concept of a **safe state**, which is a state in which a system can allocate resources to processes in a way that avoids deadlock. In multi-instance resource systems, the resource can be accessed by some number of process, safe state occurs when there are enough resources available to satisfy the resource requirements of all processes in the system.

The opposite concept, **unsafe state** occurs when there is not enough available resources to satisfy the resource requirements of all processes, which can potentially lead to a deadlock.

The algorithm works by considering the maximum resource needs of each process, the currently allocated resources, and the available resources in the system.

- **Initialization** : The algorithm starts by gathering information about the maximum resource needs of each process, the currently allocated resources, and the available resources in the system.

![Resource allocation table](./resource-allocation-table.png)  
Source : https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/

The resource allocation can be represented in a table (called **available matrix**), for example, the resource A has a total of 10, where 2, 3, 2 of it is allocated by process 1, 2, 3, respectively. Resource A can only be accessed by max of 7, resulting in availability of 3.

- **Request Handling** : When a process requests additional resources, the algorithm checks if granting the request would result in an unsafe state or potential deadlock. It evaluates whether there are enough available resources to satisfy the request without violating the safety conditions.

- **Resource Allocation** : If the requested resources can be allocated without causing an unsafe state, the algorithm grants the resources to the requesting process. It updates the allocation and available resource matrices accordingly.

- **Safety Check** : After each resource allocation or request, the algorithm performs a safety check to determine if the system is in a safe state. It simulates the allocation of resources to all processes and checks if it can reach an end state where all processes can complete their execution without deadlock.

- **Deadlock Avoidance** : If the safety check determines that the system is in a safe state, the requested resources are allocated to the process, and the system continues its execution. Otherwise, the requested resources are not immediately granted, and the process must wait until sufficient resources become available.

##### Recovery

If a deadlock occurs after detection, there are some method to recover from it :

- **Process Termination** : One approach is to terminate one or more processes involved in the deadlock. By terminating a process, the resources held by that process are released and become available for other processes. The terminated process may need to restart or reattempt its task after the deadlock is resolved.

- **Resource Preemption** : In some cases, it may be possible to preempt or forcibly reclaim resources from one or more processes to break the deadlock. The preemption can be achieved by rolling back the process to a checkpoint or by freeing resources that are less critical to the process. Preempted resources can then be allocated to other processes to allow them to proceed.
