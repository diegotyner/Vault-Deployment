---
created:
  - " 08-03-2026 22:10"
tags:
  - Entry
Entry-For: _Sys-Design-Library
topic: Handling requests before the application logic
---

# Reverse-Proxy
### What problem does this solve?
For a web server to be effective, there are a lot of "business logic" network logistics that need to be handled beforehand. This includes: load balancing, caching, protection from attacks, activity monitoring, request navigation, and more. 

### What options exist? 
This is actually such a large topic, I'm going to delegate to other pages that handle portions of the reverse proxy logic:
- [[Load-Balancing]]
- [[CDN]] - caching
- [[Reverse-Proxy-Security]] - Rate Limiting / WAF / DDOS

The main providers I talk about here handle the business logic of reverse proxy request handling, and often bundle other features as well. However in practice, the reverse proxy options is almost always determined by your choice of [[Compute|compute]]/hosting.  
- *Cloudflare* - CDN, DNS, WAF/DDoS, reverse proxy. All in one product.
- *AWS API Gateway* - Rate limiting, auth integration with AWS ecosystem (cognito)
- *AWS ALB (Application Load Balancing)* - Load balancing, health checks, routing, most suited for AWS containers
- *[[Nginx]]/Caddy/Apache* - Self-hosted and configure everything yourself
- *Traefik* - Self-hosted, modern, and configurable. Its selling point is "automatic service discovery", and high integrability to cloud-native and microservice environments (Docker/Kubernetes)


### Trade Off Table

|          | Option A | Option B | Option C |
| -------- | -------- | -------- | -------- |
|          |          |          |          |
|          |          |          |          |
| Use case |          |          |          |

### What is there to be careful of?
Don't assume that things like rate limiting or WAF are automatic. Although they are bundled, they need to be configured explicitly in order to protect your app. 

### Related
[[Load-Balancing]]
[[CDN]]
[[Reverse-Proxy-Security]]
[[Compute]]


### Resources
[Reverse Proxy Guide - intro and general tasks](https://www.fortinet.com/resources/cyberglossary/reverse-proxy)
[Nginx as a reverse proxy guide](https://sanyamserver.online/posts/nginx-reverse-proxy/)