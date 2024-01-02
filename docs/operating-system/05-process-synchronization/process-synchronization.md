---
slug: /operating-system/process-synchronization
id: process-synchronization
title: Process Synchronization
description: Process Synchronization
---

**Main Source :**

- []

### Message Passing

pipes, sockets, message queues, or channels. 

### Deadlock Detection & Recovery

Processes need resource, this mean the process has a dependency on a resource to perform certain operations or computations. For example, a process may need access to a printer resource to print a document, or it may need access to a database resource to retrieve or update data. Deadlock occurs when a set of processes is unable to proceed because each process is waiting for a resource that is held by another process in the set.

Deadlock is very important to handle, to identify deadlock, they are typically characterized by :

- **Mutex** : It occurs when mutex is used, when at least one resource must be held in a non-sharable mode, meaning that only one process can use it at a time.
- **Hold and Wait** : When accessing resource, the processes will hold resources while waiting to acquire additional resources.
- **No Preemption** : Resources cannot be forcibly taken away from processes that hold them, only the process itself can release it.
- **Circular Wait** : There exists a circular chain of processes, each waiting for a resource held by the next process in the chain.

#### Resource Allocation Graph

We can detect a deadlock by representing the circular chain of processes in a graph called **resource allocation graph (RAG)**. It consists of nodes representing processes and resources, and directed edges representing resource requests and allocations. If the graph contains a cycle, it indicates the possibility of a deadlock.

![Resource allocation graph](./resource-allocation-graph.png)  
Source : https://www.geeksforgeeks.org/resource-allocation-graph-rag-in-operating-system/ (box R is resource, circle P is process)

A single resource type means only one instance of a resource can be accessed at a time. However, this method is not applicable when dealing with multi-instance resource types, which is the case when single instance of resource can be accessed by some number of processes.

A deadlock happens when processes are stuck waiting for resources that are held by other processes, forming a cycle in the RAG. However, in multi-instance resource systems, processes can sometimes release some instances of a resource and continue running. So, even if there is a cycle in the RAG, it does not always mean there is a deadlock.

#### Banker's Algorithm

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

#### Recovery

If a deadlock occurs after detection, some method for recovery are :

- **Process Termination** : One approach is to terminate one or more processes involved in the deadlock. By terminating a process, the resources held by that process are released and become available for other processes. The terminated process may need to restart or reattempt its task after the deadlock is resolved.

- **Resource Preemption** : In some cases, it may be possible to preempt or forcibly reclaim resources from one or more processes to break the deadlock. The preemption can be achieved by rolling back the process to a checkpoint or by freeing resources that are less critical to the process. Preempted resources can then be allocated to other processes to allow them to proceed.
