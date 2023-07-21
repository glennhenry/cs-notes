---
slug: /web-development/json
id: json
title: JSON
description: JSON
---

**Main Source : [Wikipedia JSON](https://en.wikipedia.org/wiki/JSON)**

**JSON** stands for **JavaScript Object Notation**. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application, as an alternative to XML. It is also used as a data storage and communication format in many programming languages and web services.

:::tip
JSON was derived from Javascript but it is not limited to Javascript only, in fact JSON is used as data exchange between different systems and programming languages.
:::

JSON is defined as text format that consists of key-value pairs, where keys are strings and values can be strings, numbers, objects, arrays, or Boolean values. The data is structured in a hierarchical manner, with nested objects and arrays.

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

Source : [Wikipedia JSON example](https://en.wikipedia.org/wiki/JSON#Syntax)
