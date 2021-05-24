https://www.lambdatest.com/blog/comprehensive-guide-to-javascript-design-patterns/

# Categories of Design Pattern

Based on intent, the JavaScript design pattern can be categorized into 3 major groups:

## Creational Design Pattern

These patterns focus on handling object creation mechanisms. A basic object creation approach in a program can lead to an added complexity. Creational JS design patterns aim to solve this problem by controlling the creation process.
Few patterns that fall under this category are – Constructor, Factory, Prototype, Singleton, etc.

## Structural Design Patterns

These patterns are concerned with object composition. They explain simple ways to assemble objects and classes into larger structures. They help ensure that when one part of a system changes, the entire structure of the system doesn’t need to do the same, keeping them flexible and efficient.
Few patterns that fall under this category are – Module, Decorator, Facade, Adapter, Proxy, etc.

## Behavioral Design Patterns

These patterns focus on improving the communication and assignment of responsibilities between dissimilar objects in a system.
Few patterns that fall under this category are – Chain of Responsibility, Command, Observer, Iterator, Strategy, Template, etc.

# Creational Design Patterns

## Constructor Pattern

The constructor pattern is one of the most simple, popular, and modern JS design patterns. As suggested by the name, the purpose of this pattern is to aid constructor creation.

In Addy’s words-
“A constructor is a special method used to initialize a newly created object once the memory has been allocated for it. In JavaScript, as almost everything is an object, we’re most often interested in object constructors.”

## Factory Pattern

The Factory pattern is another creational pattern concerned with creating objects but using some sort of generic interface. According to GoF’s book, this pattern has the following responsibility.

“Define an interface for creating an object, but let subclasses decide which class to instantiate.”

This pattern is typically used when we need to handle object groups that share similar characters yet are different through appropriate custom calls. An example would bring more clarity.

Note: Though the definition particularly mentions that an interface needs to be defined, we don’t have interfaces in JavaScript. Therefore, we are going to implement it using an alternative way.

## Prototype Pattern

An object that supports cloning is called a prototype. Using the prototype pattern, we can instantiate new objects based on a template of an existing object through cloning.

As the prototype pattern is based on prototypal inheritance, we can utilize the native prototypical strengths of JavaScript. In the previous JS design patterns, we were trying to imitate features of other languages in JavaScript, which is not the case here.

## Singleton Pattern

The singleton pattern is a creational JavaScript design pattern that restricts the instantiation of a class to a single object. It creates a new instance of the class if one doesn’t exist and if existing already, it simply returns a reference to it. It is also known as the Strict Pattern.

A singleton pattern solves two problems at the same time, violating the Single Responsibility Principle.

Guarantees that there is only a single instance of a class.
Provide a global access point to this instance.

A practical example would be a single database object shared by different parts of the program. There is no need to create a new instance of a database when one is already existing.

One drawback of the pattern is the difficulty associated with testing. There are hidden dependencies objects, which are difficult to single out to test.

# Structural Design Patterns

## Adapter Pattern

The adapter is a structural JS design pattern that allows objects or classes with incompatible interfaces to collaborate. It matches interfaces of different classes or objects; therefore, they can work together despite incompatible interfaces. It is also referred to as the Wrapper pattern.

A real-world analogy would be trying to connect a projector to a laptop. The projector might have a VGA plug, and the laptop might have an HDMI plug. So we require an adapter that can make these two unrelated interfaces compatible.

This pattern will include a class that will be responsible for joining the incompatible interfaces/functionalities.

## Composite Pattern

Composite is a structural JavaScript design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects. According to GoF’s book, this pattern composes objects into tree structures to represent part-whole hierarchies. It is also known as a partitioning JS design pattern.

The perfect example of this pattern would be tree control. The nodes of the tree either contain an individual object (leaf node) or a group of objects (a subtree of nodes).

Modern JS frameworks like React and Vue use the composite pattern to build user interfaces. The entire view is divided into components. Each component can contain multiple components. This method is preferred because of the ease of development and scalability compared to fewer monolithic objects. The composite pattern reduces the complexity of a system by allowing you to work with small objects and build them up into larger ones.

## Module Pattern

Module Pattern is another prevalent JavaScript design pattern for keeping our code clean, separated, and organized. A module is a piece of self-contained code that can be updated without affecting other components. As the concept of access modifier is not supported in JavaScript, the modules help in mimicking the behavior of private/public access hence providing encapsulation.

## Decorator Pattern

Decorators are a structural JS design pattern that aims to promote code reuse. This pattern allows behavior to be added to an individual object dynamically, without affecting the behavior of other objects from the same class. Decorators can also provide a flexible alternative to subclassing for extending functionality.

Since JavaScript allows us to add methods and properties to objects dynamically, implementing this JavaScript pattern is a very straight-forward process. Do check out Addy Osmani’s post to know more about [Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841).

## Facade Pattern

The facade pattern consists of a facade, which is an object that acts as a “front-face” for a much complex structural code. Developers normally use this pattern when a system is very complex or difficult to understand to provide a simpler interface to the client. This helps to create an abstraction layer between what is shown publicly and what is implemented behind the curtain.

## Proxy Pattern

As the name suggests, the Proxy Pattern provides a surrogate or placeholder for another object to control access, reduce cost, and reduce complexity. The proxy could interface to anything – a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate.

Here, we will create a proxy object that ‘stands in’ for the original object. The proxy interface will be the same as that of the original object so that the client may not even be aware they are dealing with a proxy rather than the real object. In the proxy, extra functionality can be provided, for example, caching, checking some preconditions, etc.

There are three common situations in which the Proxy pattern is applicable.

A virtual proxy is a placeholder for expensive to create or resource-intensive objects.
A remote proxy controls access to the remote object.
A protective proxy controls access rights to a sensitive master object. The caller’s access permissions are checked prior to forwarding the request.

# Behavioural Design Patterns

## Chain of Responsibility Pattern

This is a behavioral JavaScript design pattern that creates a chain of receiver objects for a request. This pattern promotes loose coupling. We can avoid coupling the sender of a request to a receiver, and more than one receiver can handle the request.

The receiving objects will be linked together, and they can choose to act on the request and/or pass it to the next receiver object. It is also easy to add new receiver objects to the chain.

Event Handling in DOM is one implementation of the Chain of Responsibility pattern.

Once an event is fired, it propagates through the DOM hierarchy, calling every event handler it runs into until it finds the appropriate “event listener” and then acts on it.

## Command Pattern

Command Pattern is a behavioral JS design pattern that aims to encapsulate actions or operations as objects. This pattern is useful in scenarios where we want to decouple or split the objects executing the commands from objects issuing the commands. Command objects allow you to centralize the processing of these actions/operations.

The four participants involved in the command pattern are command, receiver, invoker, and client.

Command – A command object knows about the receiver and invokes a method of the receiver. Values for parameters of the receiver method are stored in the command.
Client – The client’s responsibility is to create the command object and pass it to the invoker.
Invoker – The invoker receives the command object from the client, and it’s only responsibility is to call (or invoke) a command.
Receiver – Then, the receiver receives the command and looks for a method to call based on the received command.

## Observer Pattern

The Observer is a behavioral JS design pattern that lets you define a subscription mechanism to notify multiple objects (observers) about any events that happen to the object (subject) they’re observing. This pattern is also called Pub/Sub, short for Publication/Subscription. It defines a one-to-many dependency between objects, promotes loose coupling, and facilitates good object-oriented design.

The observer pattern is the foundation of event-driven programming. We write event handler functions that will be notified when a certain event fires.

## Iterator Pattern

The Iterator Pattern lets you access and traverses through elements of an aggregate object (collection) sequentially without exposing its underlying representation. This pattern allows JavaScript developers to design looping constructs that are far more flexible and sophisticated. In ES6, Iterator and Generators are introduced, which further aids in the Iteration pattern implementation.

## Template Pattern

The template pattern defines the skeleton of an algorithm in operation in terms of some high-level steps. These steps are themselves implemented by additional helper methods in the same class as the template method. The objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps.

## Strategy Pattern

Strategy Patterns allows one of a family of algorithms to be selected on-the-fly at runtime. The pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable at run-time without client interference.
