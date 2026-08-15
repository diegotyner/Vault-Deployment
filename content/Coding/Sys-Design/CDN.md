---
created:
  - " 08-03-2026 22:10"
tags:
  - Entry
Entry-For: _Sys-Design-Library
topic: Content Delivery Network
---

# CDN
### What problem does this solve?

If data is static, requests can be intercepted before reaching the server, often increasing response time and decreasing server load.
- Geographic caching - Making response times faster for users in different regions
- Load reduction - Less requests have to reach the main server

Data doesn't have to be files, it can be: website pages/routes, API responses, and SSR output as long as it is static (doesn't depend on user)

Also, fundamentally a CDN is a form of reverse proxy

### What options exist? 

CDN options depend on provider / ecosystem:
- Cloudflare -> Bundles well with DNS and security services
- Amazon CloudFront -> Great integration with other AWS services
	- Google Cloud CDN is in a similar position for GCP
- Fastly -> Highly customizable
- Akamai -> Another battle tested option

### Bundled Features
- Geo-routing - Serve traffic differently based on region
- Origin shield - Protecting main server from thundering herd on simultaneous cache misses
- Signed URLS/cookies - serving private content through CDN

### What is there to be careful of?

**Cache Invalidation** - What if the static files you were serving update? The cache doesn't know, and serves the old files anyways. Two main approaches:
1) TTL-based (files expire): Simple, but updates depend on TTL life-cycle
2) Active Invalidation: Files last until the server manually tells a CDN to update. More bookkeeping, and often costly (server requests and providers can charge)

### Related
[[Static-Hosting]]
[[Reverse-Proxy]]