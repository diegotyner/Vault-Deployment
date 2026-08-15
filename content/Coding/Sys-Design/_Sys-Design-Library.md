---
created:
  - " 08-03-2026 21:30"
tags:
aliases:
  - Systems Design
---


## System Design Library
This page is where I'll jot down Sys Design concepts to make sure I retain them

```dataview
TABLE
  topic as "Topic",
  created as "Created"
FROM #Entry
WHERE Entry-For = this.file.name and file.name != "Sys-Template"
SORT created desc
```


### Frontend
##### Web Frontend
[[Web-Frontend]]
##### Mobile Frontend

### Network
##### CDN / Static Hosting
[[Static-Hosting]]
[[CDN]] - this is also a form of reverse proxy
##### DNS / Entry Point
#### Reverse Proxy
[[Reverse-Proxy]]
##### API Gateways vs ALB
##### Load Balancing

##### Rate Limiting / WAF / DDOS
[[Reverse-Proxy-Security]]
### Backend
##### Compute
[[AWS-Cloud]]
##### Container Orchestration
##### Auth
##### Caching
##### Messaging
#### Database
##### SQL vs NoSQL
#### Scalability
##### Sharding / Partitioning
#### Backend Security
##### Application Secrets
#### Backend Design Patterns
##### Async
##### Concurrency

### Infrastructure

#### Observability
##### Logging - Metrics/Analytics
##### Logging - Errors/Alarms

#### CI/CD
##### Concurrent Deployments
#### IaC










