---
title: Trigger & Constraints
slug: database-system/trigger-and-constraints
description: Trigger & Constraints
---

**Main Source:**

- **[Database trigger — Wikipedia](https://en.wikipedia.org/wiki/Database_trigger)**
- **[Relational database, Constraints — Wikipedia](https://en.wikipedia.org/wiki/Relational_database#Constraints)**
- **[SQL Constraints — w3schools](https://www.w3schools.com/sql/sql_constraints.asp)**

### Constraints

**Constraints** are rules or conditions that are enforced on the data in a database table. In [SQL](/cs-notes/database-system/query-language#sql), there are several types of constraints that can be applied to database tables:

- `PRIMARY KEY`: Used to uniquely identify each row in a table. It enforces specified column(s) have unique values and cannot contain null values. Typically, a primary key is created on columns that uniquely identify the rows, such as an ID column.
- `FOREIGN KEY`: A FOREIGN KEY constraint enforces a relationship between two tables. It ensures that the values in a column(s) of one table match the values in the primary key column(s) of another table. This constraint maintains referential integrity and enforces the relationship between the tables.
- `DEFAULT`: Specifies a default value for a column when no value is explicitly provided during an `INSERT` statement.
- `UNIQUE`: Ensures that the non-null values in a column(s) are unique across all rows in a table.
- `NOT NULL`: Ensures that a column cannot have null values. It requires that the column must have a value for every row and disallows the insertion of null values.
- `CHECK`: Specifies a condition that must be satisfied for the values in a column(s). For example, we can use the `CHECK` constraint to specify that a numeric column must be positive or that a character column must have a certain length.
- `CREATE INDEX`: Creates [index](/cs-notes/database-system/database-index) in table for performance optimization.

### Trigger

**Database Trigger** is a stored program or set of instructions that is automatically executed or fired in response to certain events or actions occurring in a database. Triggers are defined and associated with specific tables, and they are triggered by specific data manipulation language (DML) statements or data definition language (DDL) statements.

:::info
A `CHECK` constraints checks each row based on data modification, while database trigger perform actions based on events. DBMS will reject the data modification operation and raise an error in `CHECK` constraint, while trigger is more flexible and customizable, allowing us to integrate our own logic.
:::

Triggers can be classified into two levels:

- **Row-Level Triggers**: Row-level triggers are executed once for each row affected by the triggering event.
- **Statement-Level Triggers**: Statement-level triggers are executed once for each triggering statement, regardless of the number of rows affected by the statement (even if no rows are affected).

Based on the execution time, there are three:

- **Before (Statement-Level Trigger)**: Executed before the triggering event takes place and before any modifications are made.
- **After (Statement-Level Trigger)**: Executed after the triggering event and the modification of data have occurred.
- **Before (Row-Level Trigger)**: Executed before each affected row is modified by the triggering event.

Example of after statement-level trigger (syntax may vary depending on the DBMS):

```sql
CREATE TRIGGER insert_employee_audit
AFTER INSERT ON Employees
FOR EACH STATEMENT
BEGIN
  INSERT INTO EmployeeAudit (employee_id, employee_name, hire_date)
  SELECT employee_id, employee_name, hire_date
  FROM inserted;
END;
```

One of the use of trigger is to log some information. We have a table called `Employees` that contains information about employees in a company. Whenever a new employee is inserted into the table, we will log the employee's information into `EmployeeAudit` table.
