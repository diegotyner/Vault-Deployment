---
created:
  - " 08-03-2026 22:10"
tags:
  - Entry
Entry-For: _Sys-Design-Library
topic: How do you serve files?
---

# Static-Hosting
### What problem does this solve?

Static hosting is how you host static files. IE if I have an HTML page I want to expose, or MP3 files I want to share, where do I put them in a deployment app?

### What options exist? 

Managed CDN wrappers are often the go-to choice, both handling file hosting and distribution, with [[CDN|CDNs]]. 
- Vercel / Netlify / AWS Amplify Hosting / Github Pages

For pure static hosting, we have a few options:
- In the cloud: Object storage, like S3 buckets ([[AWS-Cloud]]), Cloudflare R2, CGS
- Self-hosting: [[Nginx]], Caddy, Apache

### Trade Off Table

|              | Managed CDNs                                                                     | Object Storage                                                                                                                | nginx                                                                               |
| ------------ | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Availability | Extremely High                                                                   | Extremely High                                                                                                                | Single point failure                                                                |
| Durability   | Depends on underlying object storage                                             | Extremely high                                                                                                                | Local server reliability (no guarantee for backups, that's a whole different topic) |
| Scalibility  | Depends on underlying object storage                                             | Arbitrarily high                                                                                                              | Local server, capped to its horizontal capabilities                                 |
| Cost         | Similar to object storage + small convenience premium; often free at small scale | Depends on provider: S3 is $0.023 per GB per month, although different tiers exist depending on data needs (access frequency) | Minimal/none, just the cost of compute                                              |
| Speed        | Fastest baseline, uses CDN                                                       | Location based, should be paired with CDN                                                                                     | Location based, should be CDN                                                       |
| File updates | Depends on CDN cache invalidation (TTL, or active invalidation)                  | Fast                                                                                                                          | Fast                                                                                |
| Use case     | Fastest path to production, low configuration                                    | Highest configurability (e.g. geoblocking your application). Also great for serving user uploads.                             | Sharing local resources, small batches of files to share, personal plex server      |

### Related
[[CDN]] - Static files should be paired with a CDN nearly **every time**.