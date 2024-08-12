---
slug: /software-engineering/structural-patterns
id: structural-patterns
title: Structural Patterns
description: Structural Patterns
---

**Main Source:**

- **[Structural Design Patterns — Refatoring Guru](https://refactoring.guru/design-patterns/structural-patterns)**

**Structural patterns** focus on structuring objects and classes to form larger structure. These patterns help to define and manage relationships between different components, ensuring that they work together effectively.

### Facade

Facade pattern advises simplifying a complex system by providing a unified and straightforward interface to the client. The system should feature an interface functioning as a "facade" or entry point to hide complexity underneath.

The point is to simplify complex interaction within the system. Complex interaction can occur in single or multiple class. For example, a computer consist of CPU, memory, and hard drive. A non-facade way of doing this would be:

```kotlin
class CPU {
    fun processData() {}
}

class Memory {
    fun load() {}
}

class HardDrive {
    fun read() {}
}

fun main() {
    val cpu = CPU()
    val memory = Memory()
    val hardDrive = HardDrive()

    cpu.processData()
    memory.load()
    hardDrive.read()
}
```

The problem of this code is, the user require understanding about the three classes. They need to know that they must construct the specific `CPU`, `Memory`, and `HardDrive` class. Furthermore, they must know which method from which class should be called first.

Following facade pattern, instead of constructing class and calling these methods individually, we could make another class (e.g., `Computer` class) dedicated to handle it.

```kotlin
class Computer {
    val cpu = CPU()
    val memory = Memory()
    val hardDrive = HardDrive()

    fun run() {
        cpu.processData()
        memory.load()
        hardDrive.read()
    }
}

fun main() {
    val computer = Computer()
    computer.run()
}
```

### Adapter

Adapter pattern allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, converting required code in order for them to collaborate.

```kotlin
interface Charger {
    fun charge()
}

class EuropeanCharger {
    fun plugIn() {
        println("Plugged in European charger")
    }
}

class AmericanCharger {
    fun plugIn() {
        println("Plugged in American charger")
    }
}

class Phone(val charger: EuropeanCharger) {
    fun chargePhone() {
        charger.plugIn()
    }
}

fun main() {
    val europeanCharger = EuropeanCharger()
    val phone = Phone(europeanCharger)
    phone.chargePhone()
}
```

This code illustrates phone that we can charge using one of the two chargers, `EuropeanCharger` and `AmericanCharger`. This code assumes that both charger are incompatible with each other, and they can't implement `Charger` interface directly.

To make phone compatible with any type of charger, we will introduce two adapter class for `AmericanCharger` and `EuropeanCharger`.

```kotlin
class EuropeanChargerAdapter(private val charger: EuropeanCharger): Charger {
    override fun charge() {
        // do complex convertion here...
        charger.plugIn()
        println("Charging using European charger (adapted)")
    }
}

class AmericanChargerAdapter(private val charger: AmericanCharger): Charger {
    override fun charge() {
        // do complex convertion here...
        charger.plugIn()
        println("Charging using American charger (adapted)")
    }
}

class Phone(var charger: Charger) {
    fun chargePhone() {
        charger.charge()
    }
}

fun main() {
    val europeanCharger = EuropeanCharger()
    val europeanChargerAdapter = EuropeanChargerAdapter(europeanCharger)
    val phone = Phone(europeanChargerAdapter)
    phone.chargePhone()

    val americanCharger = AmericanCharger()
    val americanChargerAdapter = AmericanChargerAdapter(americanCharger)
    phone.charger = americanChargerAdapter
    phone.chargePhone()
}
```

The phone now takes charger that implements `Charger` interface. The adapter class is dedicated for the conversion between specific type of charger to a general type of charger.

### Bridge

Bridge pattern decouples an abstraction from its implementation, allowing them to vary independently.

Consider a `Shape` interface that can be drawn on the screen. A shape can be `Square` or `Circle`, which are abstract classes.

```kotlin
interface class Shape() {
    fun draw()
}

abstract class Square: Shape() {
    abstract fun draw()
}

abstract class Circle: Shape() {
    abstract fun draw()
}
```

Now, assume there are two method to render the shape on the screen, vector and raster. If we were to render `Square` using vector method, we would need to create `SquareVector` that implements `Square` abstract class. The same for the remaining, `SquareRaster`, `CircleVector`, and `CircleRaster`.

```kotlin
class SquareRaster(): Square {
    override fun draw() {}
}

class SquareVector(): Square {
    override fun draw() {}
}

class CircleRaster(): Circle {
    override fun draw() {}
}

class CircleVector(): Circle {
    override fun draw() {}
}
```

As many shape and type of rendering available, the class hierarchy becomes exponentially large. If we have triangle shape, we would need two additional classes, `TriangleRaster` and `TriangleVector`.

Bridge pattern solve the problem by [switching inheritance to composition](/software-engineering/software-principles#composition-over-inheritance). Instead of making different renderer class for each type of shape, we associate a shape with a type of renderer. This effectively split the class hierarchy, which we can develop independently.

The `Renderer` hierarchy:

```kotlin
interface Renderer {
    fun render()
}

class VectorRenderer: Renderer {
    override fun render() {}
}

class RasterRenderer: Renderer {
    override fun render() {}
}
```

The `Shape` hierarchy:

```kotlin
abstract class Shape(val renderer: Renderer) {
    abstract fun draw()
}

class Circle(val renderer: Renderer): Shape(renderer) {
    override fun draw() {
        renderer.renderShape()
    }
}

class Square(private val renderer: Renderer): Shape(renderer) {
    override fun draw() {
        renderer.renderShape()
    }
}
```

Usage example:

```kotlin
fun main() {
    val vectorRenderer = VectorRenderer()
    val rasterRenderer = RasterRenderer()

    val circle = Circle(vectorRenderer)
    circle.draw()

    val square = Square(rasterRenderer)
    square.draw()
}
```

If we add `Triangle` class, then we would only be adding one additional class in the `Shape` hierarchy.

### Decorator

Decorator pattern allows us to add new behavior to an object dynamically. It is useful when you want to modify the functionality of an object without changing its underlying structure.

Consider a `Pizza` class that lets us order pizza with different type of toppings.

```kotlin
class Pizza {
    fun pepperoni() {
        println("Ordered pizza with pepperoni")
    }

    fun cheese() {
        println("Ordered pizza with cheese")
    }

    fun pepperoniWithCheese() {
        println("Ordered pizza with pepperoni, cheese")
    }
}
```

There are three possible topping, pepperoni, cheese, or pepperoni with cheese. As many toppings available, the combination of different toppings causes the method to grows up exponentially.

Decorator pattern solve this problem by making class that can extend the plain pizza class with new toppings.

The `Pizza` class become an interface, and the default implementation would be `PlainPizza`.

```kotlin
interface Pizza {
    fun getDescription(): String
}

class PlainPizza: Pizza {
    override fun getDescription(): String {
        return "Plain Pizza"
    }
}
```

The topping will become the decorator for `Pizza`:

```kotlin
class PepperoniDecorator(val pizza: Pizza): Pizza {
    override fun getDescription(): String {
        return pizza.getDescription() + ", Pepperoni"
    }
}

class CheeseDecorator(val pizza: Pizza): Pizza {
    override fun getDescription(): String {
        return pizza.getDescription() + ", Cheese"
    }
}
```

Each decorator wraps around a `Pizza` object and adds its specific topping to the description.

```kotlin
fun main() {
    val plainPizza: Pizza = SimplePizza()
    val pizzaWithPepperoni: Pizza = PepperoniDecorator(plainPizza)
    val pizzaWithPepperoniAndCheese: Pizza = CheeseDecorator(pizzaWithPepperoni)

    println(plainPizza.getDescription()) // printed Plain Pizza
    println(pizzaWithPepperoni.getDescription()) // printed Plain Pizza, Pepperoni
    println(pizzaWithPepperoniAndCheese.getDescription()) // printed Plain Pizza, Pepperoni, Cheese
}
```

### Composite

Composite pattern allows us to treat individual objects and groups of objects uniformly.

Let's say we are grouping objects together. However, these objects have their own way of doing things, they do not behave similarly. The composite pattern solves the problem by enforcing individual objects to implement a common interface or base class. This is useful particularly where we want to group objects together, such as a tree-like structure.

```kotlin
class Computer {
    var totalCosts = 0
}

class Processor(val core: Int) {
    fun getCost(): Int {
        return 1000 * core
    }
}

class Memory(val sizeMB: Int) {
    fun getCost(): Int {
        return 2 * sizeMB
    }
}

class HardDrive(val sizeGB: Int) {
    fun getCost(): Int {
        return 50 * sizeGB
    }
}

fun main() {
    val processor = Processor(4) // A processor with 4 core
    val memory = Memory(1024) // A 1024 MB RAM
    val hardDrive = HardDrive(20) // A 20 GB hard disk

    val computer = Computer()
    computer.totalCosts += processor.getCost()
    computer.totalCosts += memory.getCost()
    computer.totalCosts += hardDrive.getCost()
}
```

The processor, memory, and hard drive doesn't have clear abstraction. These objects are not supposed to be scattered, the computer is supposed to own them. To group these objects together, they could implement a unified interface like `Hardware`, and the computer will own a list of hardware.

```kotlin
interface Hardware {
    fun getCost(): Int
}

class Processor(val core: Int): Hardware {
    override fun getCost(): Int {
        return 1000 * core
    }
}

class Memory(val sizeMB: Int): Hardware {
    override fun getCost(): Int {
        return 2 * sizeMB
    }
}

class HardDrive(val sizeGB: Int): Hardware {
    override fun getCost(): Int {
        return 50 * sizeGB
    }
}

class Computer {
    val hardwares = mutableListOf<Hardware>()

    fun addHardware(hardware: Hardware) {
        hardwares.add(hardware)
    }

    fun getTotalCost(): Int {
        total = 0
        for (hardware in hardwares) {
            total += hardware.getCost()
        }
        return total
    }
}
```

Now that these pieces of hardware implement a common interface, we can treat them as a single unit. We can calculate the total cost by calling `getTotalCost()`, which will calculate each cost of individual hardware with `getCost()`.
