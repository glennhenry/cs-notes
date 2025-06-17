---
title: Database Model
slug: database-system/database-model
description: Database Model
---

**Main Source:**

- **Chapter 4 - Database Systems - The Complete Book (2nd Edition)**
- **[Database model — Wikipedia](https://en.wikipedia.org/wiki/Database_model)**
- **[XML notes](/cs-notes/digital-media-processing/xml)**

**Database Model** is a conceptual representation of how data is organized and structured in a database system. It describes the logical structure, relationships between data elements, and the rules for manipulating and accessing the data. Database models serve as a blueprint for designing and implementing a database system.

There are many types of database models, each with its own approach to organizing and representing data.

### Representation

#### E/R Model

**Entity-Relationship (E/R) Model** is a representation of database structure in a diagram called **ER diagram**. ER consists of three elements:

- **Entity sets**: Entity is a distinct and identifiable object, concept, or thing in the real world or in the domain being modeled. An entity sets is a collection of similar entities. In a student dataset, a student is an entity, some set of students is an entity sets.
- **Attributes**: Attributes are the properties or characteristics that is associated within an entity set. Student entity set might include name, major, or date of birth.
- **Relationships**: Relationships describe the associations between two or more entity sets. They represent how entities from different sets are related to each other.

  Relationships can have **cardinality constraints** that indicate the number of instances of one entity set that are associated with instances of another entity set. Cardinality constraints include one-to-one (1:1), one-to-many (1:N), and many-to-many (N:M) relationships.

##### ER Diagram

![ER diagram of movie database](./er-diagram.png)  
Source: Book page 128

In the diagram:

- Entity sets are represented by rectangles.
- Attributes are represented by ovals.
- Relationships are represented by diamonds.

The relationship in E/R diagram can also be categorized into to, **stars-in** and **owns** relationship. Stars-in represent a many-to-many relationship, one entity sets can have multiple entities from the other sets and vice versa. While owns represent a one-to-one relationship, one entity sets can only have one entity from the other sets.

For example in a movie database, movie have stars-in relationship with stars. This is because multiple stars can play in multiple movie and multiple movie can have multiple stars. On the other hand, movie have owns relationship with studio, because a movie can only be owned by a single studio.

For more complex relationship, there can be **multiway relationship**, which consist of three or more entity sets are connected through a single relationship.

![Multiway relationship](./multiway-relationship.png)  
Source: Book page 131

In the movie database again, movies can have multiple stars and stars can have multiple movie. A contract specifies a star involvement in a particular movie and is associated with a specific studio.

###### Constraints

We can enforce constraints on a database, they are specific rules or conditions that must be satisfied by the data in the database.

![ER diagram keys](./er-diagram-key.png)  
Source: Book page 149

In the diagram, we indicate an attribute as the unique identifier of an entity set by underlining it. In this case, a studio is uniquely identified by its [primary key](/cs-notes/database-system/relational-data#primary--foreign-key), which is the name.

![ER diagram other constraints](./er-diagram-other-constraints.png)  
Source: Book page 150, 151

Other constraints include **referential integrity**, which is indicated by arrow head. It enforces that values in foreign key attributes match the values in the corresponding primary key attributes of the related entity.

The other constraint is called **degree constraint**, which limits the number of relationship between entity sets. Setting a constraint of stars to be less than 10 with a movie means that the movie can only have less than 10 relationship with stars.

###### Weak Entity Sets

A weak entity set is an entity set that does not have sufficient attributes to form a primary key uniquely on its own. Instead, it relies on a related strong entity set to provide part of its primary key.

![ER diagram weak entity sets](./er-diagram-weak-entity.png)  
Source: Book page 153

Such entity set is indicated by double rectangle box. A crew can't be identified by its number only, but it requires dependency on the name of studio it belongs to.

#### UML

**Unified Modeling Language (UML)** is a standardized visual modeling language used to model, design, and document software systems and other systems with a graphical notation, in an [object-oriented](/cs-notes/computer-and-programming-fundamentals/object-oriented-programming) style. While UML is typically used for software systems, it can also be used to model database.

UML diagram is represented in three parts of box. The top part is the name of the class, or the entity set in the case of similarity with E/R model. The middle part consists of the attributes and its data types. The bottom part is the methods of the class.

![UML diagram of movie](./uml-diagram.png)  
_PK stands for primary key_  
Source: Book page 172

##### Association

![UML association](./uml-association.png)  
Source: Book page 173

Classes can have relationship between them, it is indicated with a straight line and also provided with the relationship type and its constraints. The "0..1" means zero or one relationship, the "0..\*" means zero or more, "1..1" means exactly one.

##### Subclasses

A subclass is a class that inherits properties, attributes, and operations from another class, known as its superclass or parent class. Subclass is indicated by another rectangle with an arrow pointing to its parent class.

![UML subclasses](./uml-subclass.png)  
Source: Book page 177

#### ODL

**Object Definition Language (ODL)** is a language used for defining object-oriented database schemas.

```
class Movie {
    attribute string title;
    attribute integer year;
    attribute integer length;
    attribute enum Genres
        {drama, comedy, sciFi, teen} genre;
    relationship Set<Star> stars
                inverse Star::starredln;
    relationship Studio ownedBy
                inverse Studio::owns;
};

class Star {
    attribute string name;
    attribute Struct Addr
        {string street, string city} address;
    relationship Set<Movie> starredln
                inverse Movie:: stairs;
};

class Studio {
    attribute string name;
    attribute Star::Addr address;
    relationship Set<Movie> owns
                inverse Movie::ownedBy;
};
```

- An entity set is defined as a class.
- The class contains attribute name and its data types. It is possible for the attribute to be a more complex type such as list, array, or dictionary.
- An attribute can be an enum that can take values from some set (e.g., `Genres`) or a struct (e.g., `Addr`)
- Relationship is modeled in a set along with the specified types (e.g., `starredIn`, `owns`). The `inverse` keyword is used to specify the inverse relationship on the other end of the association.

```
class Cartoon extends Movie {
    relationship Set<Star> voices;
};
```

In the case of subclass, we would add the `extends` keyword along with the parent class. The subclass will inherit the parents attributes.

A key is declared as follows:

`class Movie (key (title, year))`

This mean title and year is the primary key of `Movie`.

:::info
The two code example above is taken from the book chapter 4.9.
:::

### Data Model

#### Hierarchical

Hierarchical data model organizes data in a tree-like structure. Data is represented as a collection of records that are linked together in a parent-child relationship, forming a hierarchy. A record is a unit of data that represents a single entity.

![Hierarchical model](./hierarchical-data-model.png)  
Source: https://en.wikipedia.org/wiki/Database_model#/media/File:Hierarchical_Model.svg

This model can represent one-to-many relationship, the parent record can have multiple child records, but each child record can have only one parent.

![Hierarchical model in relational table](./hierarchical-in-relational.png)  
Source: https://en.wikipedia.org/wiki/Hierarchical_database_model

The image above is an example of relational model, it is an `employee` and `computer` table. The `computer` table has a column `User EmpNo`, which is a foreign key to the primary key of `employee` table. If this relational model were organized in hierarchical model, then the `employee` would be the parent of `computer`.

##### XML

**eXtensible Markup Language (XML)** is a markup language used for structuring and representing data in a human-readable and machine-readable format. XML documents are structured as a hierarchy of elements. Each element is enclosed by opening and closing tags, and elements can be nested to form a tree-like structure.

An example of XML:

```xml
<person id="1">
   <name>John Doe</name>
   <age>25</age>
</person>
```

The example defines a record of `person` entity with an attributes `id` equal to one. The `name` and `age` is the actual data associated with the entity.

- **Tags**: XML uses tags to define elements, they are enclosed in angle brackets `< >`. Opening tags indicate the beginning of an element, while closing tags indicate the end of an element. For example, `<person>` and `</person>` are the opening and closing tags for the "person" element.
- **Attributes**: XML elements can have attributes which provide additional information about the element. Attribute is defined as name-value pairs, in the example above, the `person` element have attribute named `id` equal to value of 1.
- **Parent & Child**: XML is a hierarchical model, the `person` element is the root and also the parent element of its child, `name` and `age`. Child elements represent actual data while attribute is just additional details.

:::info
More about [XML](/cs-notes/digital-media-processing/xml).
:::

#### Network

Network model is the expansion of hierarchical model, it extends from a tree-like structure into a graph-like structure (because essentially a tree is a graph with constraints).

![Network model](./network-model.png)  
Source: https://en.wikipedia.org/wiki/Database_model#/media/File:Network_Model.svg

The graph structure of network model allows for many-to-many relationship, a single parent is not a requirement anymore. There can be more than one path from an ancestor node to a descendant.

Records and relationships are organized into sets. The sets are represented in a circular [linked list](/cs-notes/data-structures-and-algorithms/linked-list), where each circle represents a set and consists of records of a specific record type.

![Circular linked list](./circular-set.png)  
Source: https://byjus.com/gate/network-model-in-dbms-notes/

The circular set establishes a [directed graph](/cs-notes/data-structures-and-algorithms/graph#directed), where the direction is determined by the ownership relationship. We can access related records by following the links within the circular linked lists.

#### Relational

Relational model is what we have [discussed in the previous topics](/cs-notes/database-system/relational-data).

#### Object

The object model follows the [object-oriented programming (OOP)](/cs-notes/computer-and-programming-fundamentals/object-oriented-programming) paradigms. In object model, an entity is defined as a class.

Objects encapsulate both data (attributes or properties) and behavior (methods or operations) within a single entity. OOP concepts like inheritance are supported in object databases, this allows specific entity to inherit attributes and behavior from their parent classes.

Object model can be combined with relational model, becoming **object-relational database**. This model help to bridge between database and object-oriented modeling used in programming language to build a software system.

The connection between database and OOP languages uses a technique called **object-relational mapping (ORM)**. Developers define object-oriented classes that represent database tables or entities. The ORM framework will handle the mapping and synchronization of data between these classes and the corresponding database tables. It abstracts away the complexities of writing raw SQL queries, instead developer can call database operation in object-oriented manner.

![ORM](./orm.png)  
Source: https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping

#### Document

Document model stores and organizes data in a flexible, semi-structured format known as documents. In this database model, data is stored in self-contained documents, typically in formats such as [JSON (JavaScript Object Notation)](/cs-notes/digital-media-processing/json).

:::tip
[XML](#xml) is considered as a document model as well.
:::

Document model has a standard format in how they structure the data. For example, XML uses tags and element, JSON relies on key-value pairs, other document such as YAML relies on key-value pairs as well, but the structure is designed to be simple.

An example of YAML:

```yaml
employee:
  - name: John Smith
    age: 30
    position: Software Engineer
    skills:
      - Java
      - Python
      - SQL
  - name: Jane Doe
    age: 28
    position: UX Designer
    skills:
      - User Experience Design
      - Wireframing
      - Prototyping
```
