---
created:
  - " 02-20-2026 00:52"
tags:
---


## LS6  - Kafka
##### Kafka: a use case for high-throughput data systems (? days)
Logs and MQs
Kafka Architecture

### Slides

#### Summary
Events are immutable facts; Kafka is an append-only distributed log
Topics organic events into named feeds; partitions enable parallelism and throughput
Replication ensures failure tolerance

Kafka illustrates many strategies and patterns used in many other distributed systems.
- Append-only logs used in many distributed databases
- Partition used widely for throughput
- Replication used widely for failure tolerance
- Metadata management using Paxos/Raft common for many distributed system (e.g. Kubernetes)
#### Problem with request/response
Caller blocks until response arrives
- Error if callee is down
- Message queues help (RabbitMQ broker) (MQ=Message Queue)
	- But still the caller must know the callee (tight coupling)

Messages vs events:
- Kafka uses events instead of messages or commands
	- Message: `updateCustomer()` - commands a service
	- Event: `CustomerUpdated` - A fact that happened, no specific recipient, and anyone can subscribe

#### Apache Kafka
A distributed event streaming platform
- Originally built at LinkedIn for website activity data
- Used at Netflix, LinkedIn, Uber, and thousands more
- Forms the subtrate of many streaming frameworks
	- Apache Flink, Apache Spark 
- Trillions of events per day at scale 

##### Log Abstraction
Producers append the events to a log
Consumers read from the log

##### Kafka Topics
Events are organized into *topics*
A topic is a named logical abstraction
- customers, orders, products

Kafka uses a binary protocol over TCP

##### The Kafka record
All events have the same format:
- Key (opt.) | Value | Timestamp | Headers
- K/V are byte arrays

Events are immutable facts
- If something needs to be changed, update with a new event

#### Consumer Basics - pull vs. push
Message brokers (RabbitMQ): push model
- Broker *actively* sends messages to each consumer
- Has to know:
	- Consumer speed/capacity
	- If consumer lags, broker queues messages
		- Communicated by a consumer or by withholding message acknowledgements
##### At-most vs at-least once
At most once - Message is received 0 or 1 times. Fire and forget. 
At least once - 1 or more times. Keep message on broker side until consumer is confirmed to have received it. 

#### Kafka Architecture
Kafka is a:
- Distributed log
- Append-only, ordered, immutable log
- Events never modiied or deleted (within the retention period)
> Unlike SSTables and LSM trees, consumers can only read sequentially

*Problem*
A log on a single machine has limited throughput
- Disk and network I/O Become bottlenecks

*Solution* - Split the topic's log across machines
- Kafka is usually a cluster of brokers
- Each broker is a single node or machnie

##### Partitions
- The log is divided into physical partitions 
- A partition is a single log
- Each partition lives on a single broker
- A topic is divided into one or more partitions (IE a topic is spit up ideally)
##### Ordering partitions
Ordering guaranteed within a partition, not across them 
Trade off: 
- More partitions ->
	- More throughput
	- Weaker global ordering

- Broker actually holding an event decided by a hash of the key

##### Bootstrap broker
Clients connect to bootstrap broker to know the partitions for a topic

##### Key based partitioning
Same key means same partition for events. 
Guarantees orderings for events with same key
- IE key being customer ID< all events for a customer go to same partition

Incorrect partition leads to imbalanced clusters

##### Replication
Don't allow a broker to be a single point of failure, replicate data 
- configure a replication factor (e.g. 3), 3 copie sof each partition
	- cluster tolerates (replication_factor - 1) broker failures
One replica is the leader, rest are followers
- Followers dont handle requests, only sync with leaders
- Replicas in sync are in-sync replicas

Acknowledgement (ack) modes:
- acks=0. Producer doesnt wait for ack
- acks=1. Leader writes record and send ack, produces waits for ack
- acks=all. Leader writes record, waits for replicas, then send ack, producer waits.
Durability vs. latency


#### Metadata Coordination
Cluster metadata:
- Broker leads of which partition
- Which replias are in-sync
- Which brokers are aliv
All changes continuously

All nodes must agree on same view, Kafka handles this internally with KRaft
- Raft and Paxos family algos are consensus protocols used ot ensure consistency in a distributed system

