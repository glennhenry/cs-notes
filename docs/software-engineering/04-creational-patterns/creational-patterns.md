---
slug: /software-engineering/creational-patterns
id: creational-patterns
title: Creational Patterns
description: Creational Patterns
---

**Main Source :**

- **[Creational Design Patterns - Refactoring Guru](https://refactoring.guru/design-patterns/creational-patterns)**

**Design Patterns** are general and reusable solution to common software design problems. They provide guidelines and best practices for solving specific design issues and to improve software quality.

Design patterns are categorized into three main groups :

- [Creational](#creational-patterns)
- [Structural](/software-engineering/structural-patterns)
- [Behavioral](/software-engineering/behavioral-patterns)

### Creational Patterns

Creational patterns focus on object creation mechanisms, providing ways to create objects in a flexible and reusable manner.

#### Builder

Builder design pattern aims to simplify the creation of complex objects. If we are constructing a class with many properties, we typically provide it via the constructor. An example of constructing a `Pizza` class would be :

```kotlin
class Pizza(
    val size: String,
    val crustType: String,
    val sauceType: String,
    val cheeseType: String,
    val toppings: List<String>
) {}

fun main() {
    val pizza: Pizza = Pizza("Large", "Thin", "Tomato", "Mozzarella", listOf("Onions", "Pepperoni"))
}
```

As the class and the constructor get larger, constructing the class can be confusing. We may need to see the class definition to know where is the `size` parameters or which position correspond to `cheeseType`.

The idea of builder patterns is to construct a complex object step by step using methods. This will increase the flexibility to create different variations of the same object, while keeping the construction clean with descriptive name. To do this, we will make another class called `PizzaBuilder`.

```kotlin
class PizzaBuilder {
    private var size: String = ""
    private var crustType: String = ""
    private var sauceType: String = ""
    private var cheeseType: String = ""
    private var toppings: MutableList<String> = mutableListOf()

    fun setSize(size: String): PizzaBuilder {
        this.size = size
        return this
    }

    fun setCrustType(crustType: String): PizzaBuilder {
        this.crustType = crustType
        return this
    }

    fun setSauceType(sauceType: String): PizzaBuilder {
        this.sauceType = sauceType
        return this
    }

    fun setCheeseType(cheeseType: String): PizzaBuilder {
        this.cheeseType = cheeseType
        return this
    }

    fun addTopping(topping: String): PizzaBuilder {
        toppings.add(topping)
        return this
    }

    fun build(): Pizza {
        return Pizza(size, crustType, sauceType, cheeseType, toppings)
    }
}
```

These are the methods that will be used by the user to set the temporary stored in the class, which will be used to construct the final `Pizza` object using the `build()` method. An example constructing `Pizza` :

```kotlin
val pizza: Pizza = PizzaBuilder()
    .setSize("Large")
    .setCrustType("Thin Crust")
    .setSauceType("Tomato")
    .setCheeseType("Mozzarella")
    .addTopping("Pepperoni")
    .addTopping("Mushrooms")
    .addTopping("Onions")
    .build()
```

It is common to chain the method calls in each line to set the attributes of the `Pizza` object.

In some case, we may create an interface that represent a `Builder`. The specific class that use builder pattern will create `ConcreteBuilder` that implements the `Builder` interface. Each concrete builder represents a different variation or configuration of the object being built.

We can also introduce `Director` class, which provide a more high-level interface for object construction. For example, this class may take various type of builder, setting some default values, or constructing the builder in a specific order of steps.

:::info
Although the code sample is in Kotlin, it is not commonly used in practice. This is because Kotlin class has default constructor parameters, and when constructing them, we can use named parameters. For example, constructing `Pizza` class by `val pizza = Pizza(size = "Large", toppings = listOf("Pepperoni", "Mushrooms"))` may not be that bad.
:::

#### Singleton

In OOP, if we have a class, we can create as many instance as we want. **Singleton** design pattern ensures that a class has only one instance. If we insist creating multiple instance, we will be prevented and redirected to that single instance. It is commonly used when we want to restrict the instantiation of a class to a single object throughout our application, such as a single instance of database.

It is very simple to implement in Kotlin :

```kotlin
class Database private constructor() {
    companion object {
        private var instance: Database? = null

        fun getInstance(): Database {
            if (instance == null) {
                instance = Database()
            }

            return instance as Database
        }
    }
}
```

We will make the class constructor private, to prevent anyone for using it. We will instead divert any construct call to the static method `getInstance()`. In Kotlin, to make members of a class static, we put it inside the `companion object` block.

In the method call, we will first check if the instance of the class has been created before. If it is, the instance shouldn't be `null`, and we will simply return that instance. If the instance is `null`, assign it with newly created instance and return it.

:::tip
In Kotlin, the `?` symbol behind the type name indicates the type is nullable. In the end of `getInstance` method, we type cast it to `Database`, because we know that it's not null.
:::

:::warning
Its worth noting that the above implementation is not thread-safe, meaning it may not be safe to use it in multithreaded environment. This is because there could be multiple thread accessing the `getInstance` method at the same time, potentially creating multiple instances.
:::

#### Prototype

Prototype pattern allows us to create new objects by cloning or copying existing objects, rather than creating them from scratch.

The traditional way of copying an object is creating an object from scratch and copying and pasting the properties of the class we intend to copy from. There are three reason why this is not preferred :

- Copying and pasting properties from large class can be exhausting.
- Some properties of the class may be private, which means the user that wants to copy it can't access it.
- Increase coupling, the user needs to know the member of the class. This is also not possible when the class it copies from is an interface, instead of concrete class.

Prototype pattern simplifies the process of copying objects by delegating the responsibility of copying to the class itself. Rather than having the user control the copy of an object, the class that needs to be copied takes charge. Users can simply call a method like `clone()` or `copy() `to obtain a copied object easily.

```kotlin
data class Rectangle(var width: Int, var height: Int) {
    fun clone(): Rectangle {
        return Rectangle(this.width, this.height)
    }
}

fun main() {
    val rectangle = Rectangle(2, 4)
    val rectangleCopy = rectangle.clone()
}
```

The `clone()` method is defined from the `Rectangle` class itself, which has access to its members (although they are not private in this case).

:::tip
In the case of using `data class`, the clone design pattern is typically not used. This is because Kotlin `data class` already has a built-in way to copy an object (although it's a shallow copy). We don't need to implement the copy mechanism, and simply call it like `rectangle.copy()`.

We can also provide some new properties we intend to replace, such as `rectangle.copy(width = 5)`, this will effectively create rectangle with width of 5 and height of 4 copied from the other rectangle.
:::

#### Factory

The primary purpose of factory pattern is to abstract away the complexity of constructing different type of objects. This is useful when we have a common interface or base class, and we have to choose which subclass or implementation we have to create.

```kotlin
interface Logistics {
    fun transport()
}

class RoadLogistics: Logistics {
    override fun transport() {
        println("Transporting via road")
    }
}

class SeaLogistics: Logistics {
    override fun transport() {
        println("Transporting via sea")
    }
}
```

This example demonstrates the use of the factory pattern in the context of logistics. The logistics can be transported differently based on the specific type of transportation method chosen.

A traditional way to instantiate logistics would be :

```kotlin
fun main() {
    val delivery = Delivery("New York") // assume this class exist

    // and have the decideTransportation method
    if (delivery.decideTransportation() == "Road") {
        val transportation = RoadLogistics()
        delivery.transport()
    } else if (delivery.decideTransportation() = "Sea") {
        val transportation = SeaLogistics()
        delivery.transport()
    }
}
```

Factory pattern allows us to simplify this creation by making a class dedicated to handle this.

```kotlin
class LogisticsFactory {
    fun createLogistics(delivery: Delivery): Logistics {
        if (delivery.decideTransportation() == "Road") {
            return RoadLogistics()
        } else if (delivery.decideTransportation() = "Sea") {
            return SeaLogistics()
        }
    }
}

fun main() {
    val delivery = Delivery("New York")
    val factory = LogisticsFactory()
    val transportation = factory.createLogistics(delivery)
    transportation.delivery()
}
```

The `LogisticsFactory` class do the same thing as we did before. The `createLogistics` decide which class to be constructed based on `Delivery`, and returns it.

#### Abstract Factory

Abstract factory pattern allows us to construct object with a combination of other related families of object without specifying their concrete classes. Abstract factory is achievable using the previous factory pattern implemented in each class.

```kotlin
class Furniture(val chair: Chair, val table: Table) {}
```

Let's say we are creating a furniture that consist of `Chair` and `Table`. There are different type of chair and table :

```kotlin
interface Chair {}
class VictorianChair: Chair {}
class ModernChair: Chair {}

interface Table {}
class VictorianTable: Table {}
class ModernTable: Table {}
```

Suppose that we are going to create furniture with `VictorianChair` and `ModernTable`. The traditional way would look like this :

```kotlin
fun main() {
    val chair = VictorianChair()
    val table = ModernTable()
    val furniture = Furniture(chair, table)
}
```

The user or the one that construct `Furniture` require the knowledge of concrete class. In other words, it tightly couples the user code to specific implementation. It requires user to manually constructing chair and table. It would make more sense to create a class that is dedicated to create a specific implementation, which user code would depend on instead.

:::info
Hiding your implementation or code details from user can be useful when designing public API, to simplify the code user would use.
:::

```kotlin
interface FurnitureFactory {
    fun createChair(): Chair
    fun createTable(): Table
}

class VictorianFurnitureFactory: FurnitureFactory {
    override fun createChair(): Chair {
        return VictorianChair()
    }

    override fun createTable(): Table {
        return VictorianTable()
    }
}

class ModernFurnitureFactory: FurnitureFactory {
    override fun createChair(): Chair {
        return ModernChair()
    }

    override fun createTable(): Table {
        return ModernTable()
    }
}
```

We do this by creating a `FurnitureFactory` interface, which will be implemented by `VictorianFurnitureFactory` and `ModernFurnitureFactory` for victorian and modern furniture, respectively. To actually use it :

```kotlin
class Furniture(val chair: Chair, val table: Table) {}

fun main() {
    val victorianFactory = VictorianFurnitureFactory()
    val modernFactory = ModernFurnitureFactory()

    val furniture = Furniture(
        chair = victorianFactory.createChair(),
        table = modernFactory.createTable()
    )
}
```

Having factory class become even more useful if the construction of object is complex, just like the previous Factory example.
