---
created:
  - " 02-08-2026 00:50"
tags:
---

## LS4  - Microservices
##### Modern Software Architectures (4 days)
Microservices and state
Messaging systems
The immutable log abstraction
Broker architecture and storage
Replication and fault tolerance


### Outline
Monolithic applications
Microservices and decentralized data
Data model and storage engine
- Relational databases, log-structured merge trees (LSM), event logs (more in Kafka section), in-memory cache
Communication styles
- Text-based vs binary data exchange formats
- Synchronous (RPC), asynchronous (MQs), pub-sub models

#### Data
Who owns it?
- In monoliths, not as big a problem as all software componetns part of the application
	- Updates to data can be done instantly
	- Easy foreign key refs, easy joins
> Joins reduce data duplication and allow data normalization

- In microservices, data is not bundled as tightly

#### Scalability
Online traffic is often variable, how do we:
- Support high traffic events (launches, political events)
- Not waste resources during low traffic (pay for compute we don't use)
> Many workloads aim to operate at 60-70% utilization

Scaling:
- Vertical - Make single machines more powerful: +CPU, +DRAM, +network bandwidth
	- Reaches a limit eventually
- Horizontal - Add more machines
	- This requires a load balancer to operate efficientiently
	- Unbounded, and better resource utilization
	- *Needed* for autoscaling

Load balancing:
- Round robin: naive
- Least connections: choose server with fewest active connections
- Least response time: choose server with fastest response time and fewest connections
- Random policy: chosen at random. Useful as a default in uniform/stateless environments
- Weighted distribution: allocate while factoring in server capacity

> Problem with this: redeploying a component requires a full application redeploy
>  - Slow, error prone

We want to decrease coupling between components, to allow teams to work independently:
- Restarting services 
- Update their own Table schemas without overhead from other teams
- Evolve independently: choice of programming language, DB schema, DB chosen

#### Microservices
> Smart endpoints connected by dumb pipes

Benefits:
- Improve decoupling, with benefits listen above
Drawbacks:
- Data decoupling :(
	- No more easy joins
- Now, we must denormalize data and have each microservice "own" the data it needs

> Vocab break with SQL:
> - *Normalized data* : Data is stored in separate tables to minimize redundancy
> - *Denormalized Data* : Data is intentionally to multiple tables to reduce the need for joins and improve query performance
> * Note they are not opposites

##### Consistency Guarantees
-  Core idea: a microservice owns some data 
	-  Notifies dependent microservices of change 
	-  Soft guarantees on when the updates synchronize

##### Network Cost
Having to resort to network calls costs you:
- Monoliths: function call is on scale of nanoseconds
- Microservices: RPC call is on scal of microseconds

> network protocols?

##### Summary
Pros:
- Stronger decoupling and lower interdependence 
- Improved scalability 
- Easier deployment
Cons:
- Causes data denormalization 
- Network overhead 
- Higher complexity 
- Debugging complex interactions is harder

#### Springboot

#### Database Choices

#### Log / LSM Tree / B Tree

#### Communication Styles

