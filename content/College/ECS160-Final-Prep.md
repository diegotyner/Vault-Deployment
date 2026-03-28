---
created:
  - " 03-16-2026 01:27"
tags:
---


![[ECS160-MT1]]



Final also includes:
- [[ECS160-L11|ECS160-LS5]] (SQL)
- [[ECS160-LS6]] (Kafka)
- [[ECS160-LS7]] (Kubernetes)
- [[ECS160-LS8]] (Software Testing)




---

### Final Exam Topics
#### Design Patterns - [[ECS160-LS2]]
Creational
- Singleton, abstract 
Structural:
- Adapter, proxy, decorator
Behavioral: 
- Template, state, observer, visitor

Sample Questions:
1) When to use template method? 
2) Difference between proxy vs. decorator
3) Integreating different design patterns

Wont ask:
- Specific programming-level concepts
#### Reflection and Annotations
Reflection for introspection
Bytecode generation for instrumentation and dynamic proxies
Annotations for adding metadata to objects, methods

Sample Questions:
- When to use static proxy vs dynamic proxies
- Annotations for applying proxy logic or reflection logic selectiveyl to a field or method

#### Microservices
For all of the following, understand: What are they? Why use them? What are their pros and cons? Resulting challenges?
- Microservice
- Data denormalization
- Eventual consistency
- Caching (KV stores e.g. Redis/Memcached)
- DB storage engines
	- B+ trees vs. LSM trees
	- Tradeoffs (read vs write workloads, sequential vs random reads)

Communication styles:
- RPC
- Message-queues
- Kafka

Sample Questions:
- Design questions where you'd have to pick the best:
	- DB storage engine
	- Choose between RPC, MQs, Kafka
	- Decide if a caching layer will be helpful

Wont ask:
- Spring Boot
- gRPC
- JSON
- MongoDB API
- Network layers
- HTTP methods
- Protobuf encodings
- SQL commands
- etc.
#### Kafka
Push vs pull based system
Kafka logs vs LSM tree logs 
- Does not support random reads at all; stores events instead of records
Why is the partitioning key important? (ordering)
Kafka consumer committed state and crash recovery
- At most once vs at least once
Kafka replication
- acks=0/1/all

Sample Questions:
- Imagine we see a message being delivered twice after a Kafka consumer rebooted after a crash - how could this happen
- If we tolerate N nodes going down, what should the replication factor be?
- Use cases where acks=0/1/all is appropriate

Wont ask:
- Kafka commands
- Details of Raft
- Metadata coordination
#### K8s
Container vs. virtual machine
What benefits do the pod abstraction provide over containers?
Label based scheduling; pod affinity
Fault tolerance and liveness probes

Sample Questions:
- Use cases for deploying chatty microservices on same pod, label based scheduling
- Use cases for picking the right liveness probe type

Wont ask:
- Docker commands
- Dockerfile format
- App descriptor format
- Exact config option names
- etcd details
- K8s networking details
#### Testing
The gradient of 'smart' testing:
- Blackbox testing
- Greybox testing (coverage-guided)
- Whitebox testing (symbolic execution)

Input generators and mutators, and when to use them
- Random generation
- Byte level mutators
- Dictionaries
- Grammar aware mutators

Coverage types:
- Edge based
- Value profile
- Path based 

Benefits and challenges of each mutation/coverage type (throughput vs. valid input, etc.)

DGF (its usecase/need, distance metric)
Silent bugs and undefined behavior
Sanitizers concepts
- ASAN implementation tradeoffs
Symbolic execution benefits and challenges

Sample Questions:
- Which mutation strategy and coverage metric is best to find bugs in a particular app/program
- Do we need DGF for a particular use case
- Can symbolic execution find a particular bug in a piece of code - why or why not?

Wont ask:
- Details of buffer overflow / use-after-free / double-free 
- AFL / clang / gcc comands
- KLEE API