---
title: Database System
slug: database-system-intro
description: Database System Notes
---

**Main Source:**

- **[Database — Wikipedia](https://en.wikipedia.org/wiki/Database)**
- Some sources are from the book **Database Systems - The Complete Book (2nd Edition)**

### Introduction to Database

Database is an organized collection of structured data that is stored and managed electronically. It is designed to store, retrieve, update, and manage large amounts of information.

Database is managed by the **database management system (DBMS)**. The DBMS is a software system responsible for creating, modifying, and retrieving the database. The underlying component that power DBMS is called a **database engine** or **database server**.

Database on its own is just a collection of data, there are many choices for storing the data. Small databases can be stored on a file system, such as disk storage on our device. Larger databases are stored in a cloud storage, which is a specialized storage on remote network.

In addition, the place where we store the data also affect the performance of retrieving the data. For instance, choosing to store data in the [main memory (RAM)](/cs-notes/computer-and-programming-fundamentals/memory) allows for quicker retrieval, but it comes at the expense of storage capacity since RAM is typically smaller than a disk storage.

Database is typically classified to **relational** and **non-relational**. [Relational database](/cs-notes/database-system/relational-data) is when the data is organized into tables consisting columns and rows, and a unique identifier (called key) within each row.

A format in which database is structured and organized is called **[database model](/cs-notes/database-system/database-model)**. The relational database is an example of a database model.

The purpose of having specific model is to suit with the application's requirement. For example, in a social network, we may use database that is modeled in a [graph](/cs-notes/data-structures-and-algorithms/graph) structure. This way, we can easily represent complex relationship between users, such as their common preferences or friendship connection, which we can use to make recommendation system.

![Database model](./database-model.png)  
Source: https://medium.com/@saad.jameel1992/graph-vs-relational-databases-62ecc5902eb2

### All pages

- [Relational Data](/cs-notes/database-system/relational-data)
- [Query Language](/cs-notes/database-system/query-language)
- Database Management
  - Database Design
    - [Database Model](/cs-notes/database-system/database-model)
    - [Normalization](/cs-notes/database-system/normalization)
    - [Transactions](/cs-notes/database-system/transactions)
    - [Concurrency Control](/cs-notes/database-system/concurrency-control)
    - [Trigger & Constraints](/cs-notes/database-system/trigger-and-constraints)
  - [Logging & Recovery](/cs-notes/database-system/logging-and-recovery)
  - [Database Index](/cs-notes/database-system/database-index)
  - [Database Optimization](/cs-notes/database-system/database-optimization)
- [NoSQL](/cs-notes/database-system/nosql)
- Database Implementation
  - [Storage Management](/cs-notes/database-system/storage-management)
  - [Index Implementation](/cs-notes/database-system/index-implementation)
  - [Query Processing](/cs-notes/database-system/query-processing)
  - [Query Compiler](/cs-notes/database-system/query-compiler)
