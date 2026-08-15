---
created:
  - " 08-12-2026 20:10"
tags:
  - Project
aliases:
---

---
## Dataview:
```dataview
list from [[]] and !outgoing([[]])
```
---


## 🧲 Published
### Deployment:
- 
### GitHub:
- 

## 🎟 Features
### Existing

### Todo


## 🧾 Project Description

### Blurt

A multi part system design project all to create a notion-like/google docs experience of collaborative editing. Fundamentally, it only needs persistent pages, websockets, and dispute handling, but the goal of this project is to emulate a professional deployment as much as possible: multiple instances, handling multiple users, multiple edit conflicts, and full network handling.
1) Main server in rust:
	- A websocket relay for edits
	- Handles conflicts with CRDT logic
	- Bindings already exist:
		- https://github.com/y-crdt/y-crdt
		- https://github.com/y-crdt/y-crdt/tree/main/yrs
	- Websockets:
		- axum?
2) Persistence:
	- Stores pages as: url->array of blocks. Editing is done on block level
	- DynamoDB for cost-effectiveness/simplicity/data safety
	- Redis gives us pub/sub for communication between server instances (clients served by servers A and B want to still see refreshes when they're on the same page)
3) Front end:
	- Likely just react, displaying current text for a page. Also probably exposing links to other notes
		- Probably just deploy to vercel, check their websocket client support though
	- Tiptap text editor seems like a natural choice - https://tiptap.dev/
	- https://github.com/yjs/yjs and https://docs.yjs.dev/
4) CI/CD
	- The "guardrails" and "automations" for making updates to code
	- Github Actions for validating new updates
	- Docker images
5) Deployment
	- The "calories" of the deployment, gives it a real place to execute
	- Terraform to automate AWS deployment and setup. Spawning EC2 instances and easily spinning up and tearing down with same configurations each time. This manages network settings, security group, elastic IP, and DNS records
	- k3s is honestly super unnecessary, but what it would do is: scheduling which machines/nodes containers run on, scaling up/down according to load, self-healing (accounting for crashes,etc), service discovery (letting containers talk to each other, even when they spawn and die), and update (replacing old containers)
		- k3s is a little version of k8s implemented after k8s. Its a lighter single-binary implementation with the same API, suited for a small VM
	- Cloudflare DNS/TLS

### Official
[[Openpage-Overview]]


## 📂 Project Logs 


## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

