---
slug: /digital-media-processing/json
id: json
title: JSON
description: JSON
---

**Main Source:**

- **[JSON — Wikipedia](https://en.wikipedia.org/wiki/JSON)**

**JSON (JavaScript Object Notation)** is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to [parse](/compilers-and-programming-languages/parsing) and generate. JSON is often used to transmit data between a server and a web application, as an alternative to [XML](/digital-media-processing/xml). It is also used as a data storage and communication format in many programming languages and web services.

:::tip
JSON was derived from [JavaScript](/internet-and-web/javascript), but it is not limited to JavaScript only. In fact, JSON is used as data exchange between many different systems and programming languages.
:::

JSON is defined as text format that consists of key-value pairs, where keys are strings and values can be strings, numbers, objects, arrays, or Boolean values. The data is structured hastily, with nested objects and arrays.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": ["Catherine", "Thomas", "Trevor"],
  "spouse": null
}
```

Source: [Wikipedia JSON example](https://en.wikipedia.org/wiki/JSON#Syntax)

The way we use it on application depends on how the programming language or library process it. For example, it is common for programming languages to parse the JSON data and then generate equivalent code in [OOP classes](/computer-and-programming-fundamentals/object-oriented-programming). This JSON example could be turned into a `Person` class with properties like `firstName` (string type), `lastName` (string type), `isAlive` (with boolean type), and so on. Another class could be generated for nested data like `phoneNumbers` has. 
