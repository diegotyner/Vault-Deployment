---
created:
  - " 03-06-2026 03:51"
tags:
---


## LS7  -  Kubernetes
##### Modern Application Deployment (2 days)
Modern application deployment
Virtual Machines and Containers

### Slides
#### Summary
-  Kubernetes automates deployment, scaling, and management of containerized applications across clusters of machines 
-  Pods are the unit of deployment and scaling 
-  Control plane manages desired state, and the worker nodes execute them 
-  Has built-in fault tolerance and resilience

#### Modern App Dev
Apps deployed across many machines
Many (micro-)services replicated across many machines for improved throughput and redundancy

#### Clusters
##### Cluster management
Microservices deployed on hundreds of nodes
Manually configuring/monitoring hundres/thousands of nodes is not feasible, must be *automated*

We need to:
- Automatically schedule services on nodes (each service needs its own env)
- Minimize communication overhead (deploy 'chatty' microservices on same node)
- Ensure node well provisioned to handle its duties (different nodes different CPU/RAM/disk capabilities)
- Detect node failures to stop routing requests to the failed nodes


#### VMs and containers
##### Virtual Machine
Isolated env that emulates a physical machine
A hypervision runs on the hardware
Each VM has its own kernel
Isolation enforced by hardware

Special instructions to enter and exit VMs
- VMRUN to enter "guest mode" and run the VM
- VMCALL to exit "guest mode" and execute host code
Expensive instructions and also cause cache, TLB invalidations

##### Container
Isolated user-space environment
Each container shares the host kernel
Isolation enforced by software  (namespaces and cgroups IE)

##### Tradeoffs

| VMs                                  | Containers                                      |
| ------------------------------------ | ----------------------------------------------- |
| Full OS per VM                       | Share host kernel                               |
| Hardware based isolation             | Kernel based isolation                          |
| Heavy: GBs of mem                    | Lightweight: MBs of overhead                    |
| Strong isolation boundary            | Weaker isolation (shared kernel attack surface) |
| Commonly used in multi-tenant setups | Commonly used in single-tenant setups           |


#### Docker
Tool for running software in containers
- Declarative language for specifying what software should be packaged in a container
- Commands to run the software as a container
Docker provides wrappers around linux sys calls for creating namespaces and cgroups

Remote registry of docker container images
Docker host:
- Machine runs docker daemon
- Stores docker images locally
- Spawns containers

#### CI/CD
Continuous integration (CI)
- Developers merge changes frequently, every change trigger automated builds + test to catch breakages early
- Github Actions
Continuous Deployment (CD)
- Passing changes are auto-deployed to prod
Containers provide uniform build system for CI/CD


#### Kubernetes (K8s)
Goal: automate deployment, scaling, and management of containerized apps
Originated from Google's internal systems Borg and Omega

##### Overview
Developer provides an app description, K8 deploys
App descriptor in a YAML format
- `order-service`, `product-batch-service` are deployment objects
Submit it to K8 using:
- `kubectl apply -f app,yaml`
- `kubectl get pods`

##### K8 Components
Master node:
- etcd, API server, Scheduler, Controller Manager
	- etcd is a distributed KV-store used to persist and coordinate the cluster's config and state
	- Controller manager detects 'desired state' != 'actual state', and can enact change (e.g. spawning more pods)
	- Scheduler watches for unassigned pods on the API server
		- Picks suitable worker node for each pod, pushes assignment to API server
Worker node
- Kubelet, kube-proxy

##### Pods
A 'pod' is a group of tightly related containers
- Container in each pod guaranteed to be scheduled on same machine
- Dev can schedule 'chatty' microservices in same pod
Each pod is separated logically with its own IP
Pods are units of scaling

*Lifecycle*
API server accepts app descriptor YAML files
- "run 3 instances of `order-service`"

Key design points:
- state stored in etcd
- Lifecycle managed by Controller Manager and Scheduler
- Components communicate through the API server
- Each component pulls the updates

##### Label Based Scheduling
K8 suppors assigning labels to objects (pods, worker nodes)
Labels:
- KV pairs attached to object
- app=frontend, env=prod, gpu=true
Scheduler can assign a pod to a node that satisfies the selector constraints
- (like GPU workloads on gpu=true nodes)

##### Fault tolerance
When a master node dies and reboots, it restores state from etcd
When a container crashed (OOM, exception), Kubelet automatically restarts it
When a node goes down, Controller Manager creates replacement pods on healthy nodes
Can configure Liveness proves from Kubelet for unsresponsive containers (deadlock, infinite loops, etc.)
- HTTP GET (check endpoint), TCP socket (check open port), Exec (run command)

##### Additional features
Autoscaling (HPA - Horizontal Pod Autoscaler) - Monitors resources and increases replica count when threshold reached
Custom network fast-paths
- CNI controls pod networking + routing
- eBPF based CNIs can avoid iptables for lower overhead



