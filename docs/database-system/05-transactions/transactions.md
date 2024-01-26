---
slug: /database-system/transactions
id: transactions
title: Transactions
description: Transactions
---

**Main Source :**

- []

Transaction is a technique to group together related database operation. Database operation often times includes more than one related operation. For example, in a customer database, maybe we store the count of order a customer has and the total amount of money the customer has spent on the orders. The count of order and amount of money is related, if the customer order an item, the total money would also increase.

So, let's say the customer order something, we want to increase the count of order and amount of money spent. However, there is a possibility of system fails in one of the operation. In a real application that is integrated with a DBMS, it can be a very bad situation if somehow other component of the app causes the whole app to crash in the middle of database operation. We may have increased the count of order, but the app immediately crash before we get the chance to update the amount of money spent.

The purpose of transaction is to group these operations together. Grouping them allows the operation to be treated as a whole, if some operation failed, then we would reverse the chance and decide to not execute the subsequent operation.

An analogy would be sending several mails together in a box rather than sending each mail on its own. If some mail get lost, you would lose some piece of information, resulting in incomplete message. On the other hand, with a box of mail, you would either send all the information or lose all the information.

The purpose of transaction explained above is to ensure **data integrity**. Transaction is also used for controlling concurrency in the case of multiple database operation. Transaction allows us to isolate a group of operation. Whenever a group of operation is on the fly, other group of operation shouldn't do anything. This will prevent concurrency issues such as [data races](/computer-and-programming-fundamentals/concurrency-and-parallelism#race-condition), that is when two or more database operation access the same data, and at least one of them is writing. This makes the other operation that reads the data, accidentally read the data before update or after the update, causing unexpected behavior.

- Transactions
  - conncurrency control
  - ACID
