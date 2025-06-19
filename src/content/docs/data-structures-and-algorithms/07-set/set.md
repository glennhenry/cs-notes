---
title: Set
slug: data-structures-and-algorithms/set
description: Set
---

**Main Source:**

- **[Set (abstract data type) — Wikipedia](/cs-notes/<https://en.wikipedia.org/wiki/Set_(abstract_data_type)>)**

**Set** is a data structure that stores unique elements. Some characteristics of a set:

- **Uniqueness**: Sets only contain unique elements, duplicate elements are not allowed.
- **Unordered**: Sets do not maintain any particular order among their elements, the elements can be stored in any order and may be rearranged during operations.
- **Dynamic Size**: Sets can dynamically grow or shrink as elements are added or removed, also called **mutable** or **dynamic set**.

There are many operations we can do with set data structure:

- **Addition**: Adds an element to the set.
- **Removal**: Removes an element from the set.
- **Filter**: Filter the set with the given predicate.
- **Union**: Creates a new set that contains all the unique elements from two or more sets.
- **Intersection**: Creates a new set that contains only the elements common to two or more sets.
- **Difference**: Creates a new set that contains elements from one set but not from another set.

### Set Implementation

Set data structure can be implemented in many ways. The simplest way to implement set is just to use a simple [array](/cs-notes/data-structures-and-algorithms/array) or [list](/cs-notes/data-structures-and-algorithms/linked-list). When an element is added and its already present, we will ignore the operation. However, this implementation is inefficient, assuming the array is not sorted, we would need to perform search algorithm like [linear search](/cs-notes/data-structures-and-algorithms/search#linear-search), which has a time complexity of O(n), to determine if an element exists in the collection.

A simple yet efficient implementation of set is the **hash set**. Hash set is implementation of set data structure using [hash table](/cs-notes/data-structures-and-algorithms/hash-table). To determine if an element already present or not, we will use hash function that produces hash code. This allows for efficient checking, addition, and removal operations with a constant time complexity of O(1).
