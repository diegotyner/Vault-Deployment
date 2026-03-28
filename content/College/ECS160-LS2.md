---
created:
  - " 02-08-2026 00:44"
tags:
aliases:
  - Design Patterns
---

## LS2 - OOP and Design Patterns
##### Java + OO overview (4 days)
OO + Creational design patterns	
Structural design patterns	
Java Basic	
Behavioral design patterns	
Design patterns contd.

#### Summary:
-  Design patterns abstract object instantiation, composition, and behavior 
-  Three types – creational, structural, behavioral 
-  Creational – deals with object creation 
	-  Singleton, Factory/Abstract Factory 
-  Structural – deals with how objects are composed 
	-  Adapter, Proxy Decorator, Bridge, Facade 
-  Behavioral – how objects distribute responsibilities 
	-  Observer, state, template method, visitor 
-  Design patterns can be combined to solve complex tasks


### OOP 
Encapsulation
Abstraction
Inheritance:
- Abstract classes: Prevent class from being initiated, must be extended and instantiated
- Interfaces: A contract for what a class must do, all classes abstract by default
	- `public interface Tasty {}`
	- `public class Takis implements Tasty {}`

Runtime polymorphism
Static class members - 'Shared' fields. A single copy of the field is created

### Design Patterns
Abstract object (which are already abstraction)
- Abstracting class design

#### 3 main design patterns:
**Creational Patterns**
Control how objects are created
Ex: *Factory*, *Singleton*
- [[#*Abstract Factory*]]
- [[#*Singleton*]]

**Structural Patterns**
Control how objects and classes are composed
Deal with object relationships
Ex: *Adapter*, *Proxy*,*Decorator*, *Bridge*, *Facade*
- [[#*Adapter*]]
- [[#*Proxy*]]
- [[#*Decorator*]]
- [[#*Bridge*]]
- [[#*Bridge*]]

**Behavioral Pattern**
Control how objects distribute responsibilities
Ex: *Template method*, *State*, *Observer*, *Visitor* 
- [[#*Observer*]]
- [[#*State Design Pattern*]]
- [[#*Template*]]
- [[#*Visitor*]]

#### Creational Patterns
Address problems with how objects are created

##### *Singleton*
**Logger Object**: We want a logger to be available in an application that is uniform, and acessible. Only one logger should exist and should be created by the first log method. 
Bad solutions:
- Create a logger object and pass it to users? 
	- Requires extensive modifications to existing method signatures
	- Doesn't enforce single logger
- Static field?
	- Accessible and fits well into codebase, BUT
	- Doesn't enforce single logger
Solution:
- Make the constructor and logger fields private and provide a static method `getLogger` that instantiates it
	- Creates logger if needed, reuses otherwise
> What did we learn?
- Singleton pattern controls creation of objects by managing access to instances
	- Private constructor and private static fields

##### *Abstract Factory*
**UI Toolkit:** Need to create a app that supports both windows and Mac elements.
Bad solutions:
- Adding if-else statements? Error prone and repetitive
Solution:
- A abstract UIFactory method that provides the specific OS classes extend
	- Also catches errors at compile time if a member does not fully implement the abstract methods of factory
![[Abstract-Factory-Pattern-For-UI-Toolkit.png|400]]
> What did we learn?
- Factories are a interface for object creation
- Concrete factory subclasses implement that abstract interface

#### Structural Patterns

##### *Adapter*
**Payment Processor Interface:** A website uses a unified payment interface to handle all requests, but needs to integrate different third party payment gateway (Stripe / Paypal)
> Just like a HDMI to USB-C adapater, allowing classes that would otherwise be incompatible to work together

Solution:
- Wrap each of the specific payment processors in a specific adapter to unify them for other methods
	- Internally, just calling the specific methods of the `stripeProcessor` methods
![[Payment-Interface-Adapter.png|400]]
- Implements `PaymentProcessor` that methods can interface with
> What did we learn?
- Adapters can bridge two incompatible classes by providing an interface that allows them to work together
- Useful for "plugging" pieces into existing ecosystems

##### *Proxy*
**Log Object Activity** - We have a Person object and want to log every time a method is called without changing function signatures.

Solution: 
- Wrap the original target in a proxy, that performs some additional logic before forwarding request in original object
- User accesses the proxy object instead of original object
> What did we learn?
- A proxy object can extend functionality of an object while still preserving original object interface

*Adapter vs Proxy*
Both:
- Implement/Extend interface of inner object
	- IE both will contain a inner `StripeProcessor` object that contains majority of logic
Different:
- Adapter *ADAPTS* API to target (makes `StripeProcessor` conform to `PaymentProcessor`, basically a redirector)
- Proxy *EXTENDS* API of target (making `StripeProcessor` have additional functionality, like logging details)

##### *Bridge*
**Vehicle Design** - We want to create class designs that extend the Vehicle class: ElectricCar, GasCar, EletricMotorcycle, GasMotorcycle. We want to avoid class explosion.

Solution:
- Instead, we abstract the Vehicle and Energy Source
![[Bridge-Design-Patterns-Vehicle-Class-Study.png|400]]
- We split the class into abstraction and implementation, which can be developed independently of each other
- Usual strategies would try to accomplish this through inheritance and fulfilling implementations, but inheritance binds an implementation to an abstraction permanently

> What did we learn?
- A bridge decouples an interface and the implementation
	- (outline of a Vehicle, but allow the EnergySource object to define the specifics)
- Allows for more flexibility than inheritance
	- A manual bike can be turned electric
- Improved extensibility

##### *Facade*
**Transpilation Library** - We want to allow users to access really complex software, maintaining control while abstracting complexity

Solution: Expose a "facade" class
- Provides unified interface
- Shields clients from subsystem components
- Weak coupling between the subsystem and client
	- Implementation details can change without impacting the client 
> What did we learn?
- Facades provide a way to make complex software accessible to clients
- They also ensure a uniform API so that software logic can change without impacting client

##### *Decorator*
**Fraud Detection** - We want to check for fraud before completing a transaction, without changing the payment processor object

Solution:
- Add functionality to an object by enclosing it in another object (decorator)
- The decorator adds the additional functionality, and is passed in wherever the decoratee is used with an overridden method

> What did we learn?
- Decorators allow us to attach functionality to existing objects
- Avoid feature-laden classes high up in the hierarchy, can distribute responsibilities
##### Proxy vs Decorator:
![[Proxy-Object-Wrapping-Target.png|400]]

![[Decorator-Wrapping-Fraud-Detection-1.png|400]]
![[Decorator-Wrapping-Fraud-Detection-2.png|400]]

Proxy:
- Controls access to an object
- Can be implemented like a decorator or might not be
Decorator:
- Adds responsibilities to an object

#### Behavioral Patterns
Control how objects distribute responsibilities
Concerned with algorithms and the assignment of responsibilities between objects 
Behavioral design patterns use inheritance and composition to distribute behavior between classes and objects

##### *Observer*
**Graphical views for application data** - Multiple charts must update when data in the model updates
- We want to define a one-to-many dependency so that when one object changes, dependents are made aware
	- Object being observed: Subject (Data)
	- Object doing observing: Observer (Graph representations)

Solution: Observer design
- The subject (Data) provides an API for registering and deregistering(`add()/remove()`) from updates
- When data is updated, the subject notifies observers
- Observers extend the `Observer` interface and implement the `update()` method defined for them

![[Observer-Model-Graphical-Application-Data.png|400]]

> What did we learn?
- The observer pattern defines a coupling between subject and observers
- Supports broadcast communication
- Possible disadvantage
	- Can cause updates if not managed well, model updates can trigger many observer updates

##### *State Design Pattern*
**Media Player** - A media player has to perform different functions depending on its current state (is it playing, stopped, or paused?)
Bad Solution:
- Attempting to create on class and using branches to account for different possible states
	- Buggy code is uncaught
Solution:
- Define an interface `MediaPlayerState` that defines play/pause/stop functions that inheriting classes must implement 
	- Buggy code results in compile time errors
> What did we learn?
- State design patterns make it easier to manage state manipulation in objects. Instead of branches, context is swapped to different implementations of the `State` interface
- Makes state transitions explicit and makes for easier bugfixing

##### *Template*
**Find paths from src to dest** - Given a graph represented as an adjacency list in a file, find all paths from a source node to a destination node, and print them
- Initialize graph -> Traverse graph (BFS/DFS) -> Print

Solution:
- Define the skeleton of an algorithm, defer steps to subclasses. 
- `traverseGraph` is left to children to implemented, can be extended by BFS or by DFS without changing the rest of the code

General info
- Allow subclasseses to redefine certain steps of an algorithm without changing the algorithm's structure
- Used to design variants of the same algorithm
- Leads to an inverted control structure, parent calls the operations of the child class
- Helpful for implementing algorithms that share most of steps, and only differ in small ways
> What did we learn?
- The template design paints the skeleton of the data flow, and implementation of the steps is delegated to children. 
- Can imagine this slotting into pytorch very easily, similar algorithms with different implementations slotting in similarly


##### *Visitor*
> Background to visitors
- Method Overloading - Multiple methods with same name, the one invoke decided at compile time based on function signature
- Single vs Double Dispatch - `objRef1.func(objRef2);`
	- Single Dispatch (Java, C++) - Method selection depends only on runtime type of receiver object, argument object decided at runtime 
		- Uses runtime type of `objRef1` and compile time `objRef2`
	- Double Dispatch - Method invoked depends on runtime types of both `objRef1` and `objRef2` 

**Transform Nested Shapes** - Transform nested shapes, support operations that have different implementations depending on shape (rotate, translate, scale, etc.)
- We want to keep the operation logic in a single class

Solution: Visitor design pattern
- Abstract visitor class provides concrete implementation for the `visit` method
- Concrete subclasses override method with specific logic
- In each shape class, extend the method `abstract void accept(Visitor visitor)`
	- This leads to a cycle of overloading, providing a sort of double dispatch
	1) Polymorphic call handed to shape by visitors (`shape.accept(this)`)
	2) The call is delegated at runtime to appropriate shape that then returns the call to the visitor (`v.visit(this)`) and the loop restarts 
- The actual visit logic is extended by a particular class (`TranslationVisitor`) that implements the visit logic

![[Visitor-Design-Pattern-Shapes.png|400]]

What does it do?
- Separates operation/behavior from the object structure/elements they act upon
	- Can handle nested compound object uniformly 
- Widely used in:
	- Compilers/interpreters
	- Serialization/deserialization (JSON parsing)
	- Static analysis/code auditing

##### More design patterns:
- Reflection and meta-programming
	- Lazy-loading design pattern
	- Dependency-injection design pattern
- Reading
	- Container design patterns
















