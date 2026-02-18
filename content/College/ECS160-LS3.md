---
created:
  - " 02-08-2026 00:47"
tags:
---

## LS3 - Reflection
##### Java reflection, proxies, andannotations (4 days)
Annotations and runtime reflection
Java Dynamic proxies
Java Annotation processor
Case study: redis perssistence network

#### Annotations
Metadata added to Java code `@Annotation`
- Used to interface with:
	- Frameworks
	- Compilers
	- IDEs

Can be applied to:
- Classes / Fields / Methods 

Uses:
- Junit - Fields labeled with `@Test` are passed to Junit
- Hibernate - A Java object persistence framework. Annotations used to define behavior: `@Entity`, `@Table(name = "users)`, and `@Id`. An ORM?
	- `Session session = factory.openSession()`
	- `session.persist(user)`
- Microservice frameworks (Spring boot)
- MVC Frameworks (Spring MVC)
- Logging frameworks
- Other design patterns such as Inversion of Control (IoC)

### Reflection and Metaprogramming
- Ability of a program to inspect and manipulate its own structure and behavior at runtime within the same language environment
- Can dynamically instantiate classes and invoke methods/constructors on it
Supported by Java, Go, JS

#### Java Reflection
- Provides APIs to inspect and manipulate the classes, methods, fields, and so on
- Can directly access private class fields and methods from outisde the class using reflection

##### Keys
`java.lang.Class` - Metadata for a class or interface
`java.lang.reflect.Method` - Metadata for a class method
`java.lang.reflect.Field` - Metadata for a class field
`java.lang.reflect.Constructor` - Metadata for a constructor
Java runtime automatically defines the above as well as:
- A class object for every class you define (describes Methods, Fields, etc)

Reflection API:
`java.lang.reflect.Class` - Encapsulates metadata for a class
- Returned by `obj.getClass()`
`clazz.getMethods` - Array of methods for clazz
`java.lang.reflect.Method` - invoke using `m.invoke(obj, [args])`
`java.lang.reflect.Field`
- Get/Set with `f.getValue(obj)` and `f.setValue(obj, val)`
`c.GetConstructor().newInstance()` - Invokes constructor for a new Obj

##### Use Case: Redis
Redis: REmote DIctionary Server
- In memory data store
- Can be used as a: 
	- Temorary DB
	- Caching layer
	- Message broker

##### Jedis Library
(Java Redis?)
Used to communicate with Redis server from local machine
Can use reflection to persist objects without needing to write specific object code to interface

##### Defining Annotations
```
// Def
@interface MyAnnotation {
	String author();
	...
}

// Usage
@MyAnnotation(author = "John Doe")
```
- Definition must begin with @interface
- Can have multiple fields
- Each field has a constructor (can have default vals)
- Fields can have arrays

##### Java Compilation
![[Java-Compilation-Toolchain.png|400]]
- Some annotations "eaten" at compile time

To prevent this, you need annotations for your annotations
`@Retention(RetentionPolicy.RUNTIME)`

 The @Retention annotation indicates the retention policy for the annotation 
-  @Retention(RetentionPolicy.SOUR CE) – only present in the source file 
-  @Retention(RetentionPolicy.CLAS S) – only present in the class file 
-  @Retention(RetentionPolicy.RUNT IME) – present at runtime 
-  Reflection can only access annotations with RetentionPolicy.RUNTIME

##### Reflection Downsides
- Can't generate new methods/fields/...
- Causes loss of type safety, errors only caught at runtime
- Performance slower than directly access
	- Tends to be fine when performance loss not noticeable (databases, network IO)

### Proxies
Proxy review:
- A wrapper around the original target
- User accesses the proxy object 
- Proxy: performs some additional logic, forwards request to target

StaticProxy: 
- Pros: Fast, simple
- Cons: Must be statically designed for each 'proxyable' class. Duplicate logic for repeated logic.
DynamicProxy:
- Pros: can be used for any type, with any added functionality
- Cons:
	- Needs bytecode instrumentation
	- Adds a performance overhead

##### ByteBuddy / Javassist 
Allow proxy creation via dynamic subclassing
Hide bytecode manipulation complexities 
- (internally using ASM library, bytecode generation/manipulation

Using Javassist:
1) Create a ProxyFactory
```
ProxyFactory proxyFactory = new ProxyFactory(); proxyFactory.setSuperclass(clazz);
```
2) Implement the interface MethodHandler
3) Override the invoke method to add function
4) Invoke target method 
```
MethodHandler methodHandler = new MethodHandler() { 
	@Override 
	public Object invoke(Object self, Method thisMethod, Proxy’s Method proceed, additional Object[] args) throws Throwable { 
		log(“accessing method” + functionality thisMethod.getName()); 
		return proceed.invoke(self, args); 
	} 
};
```
	`self` - target obj
	`proceed` - invoked method in target obj
	`thisMethod` - invoked method in proxy obj
	`args` - args passed to method invocation

##### Uses of Proxies
Sample use cases:
- Lazy loading
- Mock testing
Hibernate, Mockito, EasyMock

##### Lazy Loading
For each post, need to load reply to post and the reply to each of those replies too.

However, performance can be improved by only loading initial replies, and keeping other replies unloaded. 
- Improves performance + UI responsiveness

