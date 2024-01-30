---
slug: /database-system/transactions
id: transactions
title: Transactions
description: Transactions
---

**Main Source :**

- **[Database transaction - Wikipedia](https://en.wikipedia.org/wiki/Database_transaction)**
- **[ACID - Wikipedia](https://en.wikipedia.org/wiki/ACID)**
- **[Concurrency control - Wikipedia](https://en.wikipedia.org/wiki/Concurrency_control)**

**Transaction** is a technique to group together related database operation.

### Two purpose of Transactions

Database operation often times includes more than one related operation. For example, in a customer database, maybe we store the count of order a customer has and the total amount of money the customer has spent on the orders. The count of order and amount of money is related, if the customer order an item, the total money would also increase.

So, let's say the customer order something, we want to increase the count of order and amount of money spent. However, there is a possibility of system fails in one of the operation. In a real application that is integrated with a DBMS, it can be a very bad situation if somehow other component of the app causes the whole app to crash in the middle of database operation. We may have increased the count of order, but the app immediately crash before we get the chance to update the amount of money spent.

:::tip
In some cases, a partial change can be worse than no change at all.
:::

The purpose of transaction is to group these operations together. Grouping them allows the operation to be treated as a whole, if some operation failed, then we would reverse the chance and decide to not execute the subsequent operation.

:::tip
An analogy would be sending several mails together in a box rather than sending each mail on its own. If some mail get lost, you would lose some piece of information, resulting in incomplete message. On the other hand, with a box of mail, you would either send all the information or lose all the information.
:::

Another purpose of transactions is to control concurrency in the case of multiple database operation. Transaction allows us to isolate a group of operation. Whenever a group of operation is on the fly, other group of operation shouldn't do anything. This will prevent concurrency issues such as [data races](/computer-and-programming-fundamentals/concurrency-and-parallelism#race-condition), that is when two or more database operation access the same data, and at least one of them is writing. This makes the other operation that reads the data, accidentally read the data before update or after the update, causing unexpected behavior.

### Transactions State

![State of transactions](./transactions-state.png)  
Source : https://www.scaler.com/topics/dbms/transaction-in-dbms/

1. **Active** : The transaction is in progress and actively performing database operations.
2. **Partially Committed** : In partially committed state, all database operation has been completed, but only on memory (volatile memory such as RAM). Changes made by the database operations are not permanently saved to the database, they are instead performed on memory. This mean other unit of transactions cannot see the changes made by this transaction until it is fully committed. In the case of failure, it will go to the failed state.
3. **Committed** : If there is no failure, the database changes will be permanently stored on the real database (non-volatile memory such as hard disk). The changes made by the transaction are now visible to other transactions.
4. **Terminated** : The terminated state indicates the end of transaction.
5. **Failed** : In failed state, the transaction will be rolled back.
6. **Aborted** : The transaction has been aborted or rolled back. This means that all the changes made by the transaction are discarded.

The ability to roll back is possible because when transaction begins, the DBMS keep tracks an **undo log**, which is a record of the original values of any data that the transaction modifies. When the system needs to roll back, the data in the log will be applied to the database again.

### ACID

**ACID (atomicity, consistency, isolation, durability)** is a set of properties that guarantee reliable and predictable behavior of database transactions.

- **Atomicity** : Atomicity ensures that a transaction is treated as a single, indivisible unit of work. It means that either all the operations within the transaction are successfully completed, or none of them are.
- **Consistency** : Consistency ensures that a transaction brings the database from one consistent state to another. It means that the data must satisfy certain constraints defined by the database schema before and after the transaction.
- **Isolation** : Isolation ensures that concurrent transactions do not interfere with each other. Each transaction operates as if it is the only transaction running on the database, and the intermediate states of a transaction are not visible to other transactions until it is committed.
- **Durability** : Durability ensures that once a transaction is committed, its effects are permanent and will survive any subsequent failures, such as power outages or system crashes. The changes made by the committed transaction are stored in non-volatile memory (such as a hard disk) to make it persistent.

### Concurrency Control

Each transaction should operate as if it is the only transaction running on the database, without being affected by the presence of other concurrently executing transactions.

A common problem of concurrent system is [data races](/computer-and-programming-fundamentals/concurrency-and-parallelism#race-condition).

The two property of concurrency control :

- **Serializability** : The concurrent execution of multiple transactions will be scheduled. Serializability is a property of a schedule in concurrent transactions that guarantees the execution of concurrent transactions produces the same outcome as if they had executed in some sequential order, without any overlap.
- **Recoverability** : Recoverability in concurrency control does not mean the ability to recover, but rather the property to not read invalid or inconsistent data written by aborted transactions. Changes made by aborted or uncommitted transactions shouldn't be valid.

#### Methods

Concurrency control mechanism are categorized into three :

1. **Optimistic** : Optimistic concurrency control assumes that conflicts between transactions are rare. In this approach, transactions are allowed to execute concurrently without blocking each other. When a transaction is ready to commit, it checks if any conflicts have occurred with other concurrently executing transactions. If conflicts are detected, the transaction is rolled back and can be retried with a new copy of the data. This approach can be efficient if conflict happened less.
2. **Pessimistic** : Pessimistic concurrency control assumes that conflicts between transactions are likely to occur. In this approach, transactions must wait for each other until possibility of violation disappear (e.g., it's fine to let multiple transactions read the same data). This approach can lead to performance overhead during blocking.
3. **Semi-optimistic** : Semi-optimistic concurrency control combines both optimistic and pessimistic approaches. It allows transactions to execute concurrently, similar to optimistic mode. However, at certain points in the transaction, it may check for conflicts and switch to a pessimistic mode if conflicts are detected.

Some methods for concurrency control :

- **Locking** : When a database transaction is going on, that transaction will lock the data it is accessing. The other transaction will not be able to access the locked data, until the one that locks it releases it. This may be implemented using [mutex](/operating-system/multithreading#locks--mutex).
- **Serialization Graph Checking** : The schedule of transactions execution can be represented by a graph called the **precedence graph**.

  ![Precedence graph](./precedence-graph.png)  
  Source : https://www.geeksforgeeks.org/equivalent-serial-schedule-of-conflict-serializable-schedule-in-dbms/

  In the precedence graph, each transaction is represented by a node, and there is a directed edge from one transaction to another if the former transaction must precede the latter transaction in the schedule. The edges in the graph represent the dependencies between transactions based on their read and write operations.

  This method involve checking the graph if a conflict is present. A conflict occurs when there are multiple transaction, at least of them are writing, and both of them access the same data.

- **Timestamp Ordering (TO)** : This method assigns a unique timestamp to each transaction when it begins execution. The timestamps are used to order the transactions and determine their relative precedence. The system ensures that transactions are executed in timestamp order, which means that a transaction with a higher timestamp is executed after a transaction with a lower timestamp. By using timestamps, conflicts between transactions can be resolved by allowing the transaction with the earlier timestamp to proceed, while the transaction with the later timestamp may be rolled back and restarted.

#### Common Problem

- **[Deadlock](/operating-system/process-synchronization#deadlock)** : Deadlock is a situation where two or more transactions are waiting indefinitely for resources that are held by other transactions.
- **Dirty Reads** : Dirty read occurs when one transaction reads data that has been modified by another transaction that has not yet been committed. In other words, a transaction reads uncommitted data that may be rolled back later, leading to data inconsistency.
- **Non-repeatable Reads** : Non-repeatable reads occur when a transaction reads the same data multiple times during its execution, but the values of the data change between each read. This inconsistency can happen when another transaction modifies the data that the first transaction is reading.
- **Phantom Reads** : Phantom reads occur when a transaction reads a set of rows that satisfy a certain condition, but when it repeats the same read, additional rows are found that meet the condition. This can occur when another transaction inserts or deletes rows that match the condition.
