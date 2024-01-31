---
slug: /database-system/database-optimization
id: database-optimization
title: Database Optimization
description: Database Optimization
---

**Main Source :**

- **[Query optimization - Wikipedia](https://en.wikipedia.org/wiki/Query_optimization)**

341-367

Query language, typically being a declarative language, allows it to make its own optimization. It is up to the database engine how will it perform the database operation. Query language doesn't rely on specific instruction from the programmer, this makes the compiler able to produce a highly optimized query in a controlled way.

### Index

aaa

### Query Optimization

#### Query Plan

It is possible for single query to have multiple valid execution plans, with different performance. For example, consider the following query :

```sql
SELECT *
FROM table1
JOIN table2 ON table1.id = table2.id
WHERE table1.column = 'value'
```

There are three ways to join both table :

- **Nested Loop Join** : The optimizer scans each row from `table1` and looks up matching rows in `table2`. This plan is suitable when one table is significantly smaller, or when the join condition is selective, meaning it filters out a relatively small portion.
- **Hash Join** : The optimizer builds [hash tables](/data-structures-and-algorithms/hash-table) for both `table1` and `table2`. The hash table serves as a quick lookup for matching rows between two tables. Hash join can be more efficient when both tables are large and the join condition is not selective.
- **Merge Join** : Merge join efficiently merge the sorted data to perform the join. It scans the sorted tables simultaneously, comparing the values of the join columns. Merge join can be efficient when the data is already sorted and the join condition is not selective.

#### Join Ordering

**Join Ordering** is the process of determining the order in which tables are joined in a database query. The goal of join ordering is to find the most efficient sequence of join operations that minimizes the overall cost of executing the query.

The query plan is represented as tree.

![Query plan tree](./query-plan-tree.png)  
Source : https://en.wikipedia.org/wiki/Query_optimization

Join order is determined using [dynamic programming](/data-structures-and-algorithms/dynamic-programming) algorithm pioneered by IBM's System R database. This algorithm works in two stages :

1. **Enumeration** : The optimizer generates all possible join order for the given tables.
2. **Cost-Based Selection** : The algorithm estimates the cost of each generated join order and choose the best way.

#### Cost Estimation

A cost of query plan is estimated by several factors such as disk I/O operations, CPU time, connectivity (in the case of distributed systems), and selectivity and cardinality.

- **Selectivity** : refers to the proportion of rows in a table that satisfy a particular condition or predicate. Selectivity information helps the optimizer to plan and optimize query execution by estimating the number of rows that will be returned by a given query or predicate.

    For example, if a predicate has a high selectivity, meaning it filters out a large portion of the rows, it might be advantageous to push the predicate closer to the data source to reduce the amount of data that needs to be processed.

- **Cardinality** : Cardinality is the number of distinct values or rows in a table or a column. Cardinality is important for estimating the number of rows that will be returned by a query or the number of distinct values that will be involved in a join.

The information and metrics collected about the data and structure of a database is stored in a database statistics. These can be table, column, index statistics, which stores data types, size, cardinality, or any other metadata. Statistical summaries such as frequency and distribution of values can also be stored in a histogram.

### Caching

### Partition
