---
sidebar_position: 1
---

# Must Haves

## DRY Principle
Also known as Don't Repeat Yourself. Basically means that you should not have duplicated codes. In the sense that two pieces of code should not do the same thing.

## [SOLID](https://en.wikipedia.org/wiki/SOLID) Principles
Taken from this [Reference](https://www.bmc.com/blogs/solid-design-principles/#:~:text=SOLID%20is%20an%20acronym%20that,principle%2C%20and%20dependency%20inversion%20principle.&text=Additionally%2C%20they're%20intended%20to,understand%2C%20maintain%2C%20and%20extend.)

Try to write clean and effective code for enhanced code maintainability.

### Single Responsibility Principles 
"A class should have one, and only one, reason to change.”

Each class should only solve one problem and we should only change it for one reason. 

### Open Closed Principles 
 “You should be able to extend a class’s behavior without modifying it.”

1. Open for extension, meaning that the class’s behavior can be extended; and
2. Closed for modification, meaning that the source code is set and cannot be changed.

Guideline is to use inheritance or interfaces that allow polymorphic substitutions.

### Livkov Substitution Principles 
Every child class should be replaceable for the parent class.

### Interface Segregation Principles 
“Make fine grained interfaces that are client-specific. Clients should not be forced to implement interfaces they do not use.”

The general idea of interface segregation principle is that it’s better to have a lot of smaller interfaces than a few bigger ones.

For software engineers, this means that you don’t want to just start with an existing interface and add new methods. Instead, start by building a new interface and then let your class implement multiple interfaces as needed. Smaller interfaces mean that developers should have a preference for composition over inheritance and for decoupling over coupling. According to this principle, engineers should work to have many client-specific interfaces, avoiding the temptation of having one big, general-purpose interface.

### Dependency Principles 
“Depend on abstractions, not on concretions.” 

One popular way to comply with this principle is through the use of a dependency inversion pattern.