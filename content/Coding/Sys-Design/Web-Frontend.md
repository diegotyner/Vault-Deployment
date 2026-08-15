---
created:
  - " 08-03-2026 22:10"
tags:
  - Entry
Entry-For: _Sys-Design-Library
topic: Web Frontends - CSR/SSR tradeoffs
---

# Frontend

### What problem does this solve?

It allows users an easy UI to access your page. They want it to be fast, intuitive, and expose all of the features they came to the site for (easily communicate with backend or resources)

### What options exist? 

 The main branches:
1) *CSR (Client-Side Rendered)* - Think of React/Vue SPA. Server sends a near-empty HTML shell, and browser downloads a large JS bundle to render everything. The bonus is it's easy on system backends, but harder for clients (bigger bundle, slower first paint, worse SEO). 
2) *SSR (Server-Side Rendered)* - Think of Next.js / Nuxt / PhP. The bonus is it ends up with a small bundle for users, and much better for SEO/crawlers (deliverable is in initial HTML).
3) *SSG (Static Site Generation)* - This is SSR to its limit, just prerendered HTML. This can be rendered in many ways (static pages compiled by Astro/Next.js/Hugo static export, or writing pure HTML). The bonus is its easy to deliver, and small.
4) *Islands / Partial Hydration* - Astro. Static by default, JS shipped only for explicitly marked reactive components.

### Trade Off Table

|             | CSR                              | SSR                          | SSG                                      | Islands                                     |
| ----------- | -------------------------------- | ---------------------------- | ---------------------------------------- | ------------------------------------------- |
| Sends       | HTML shell +JS Bundle            | Full HTML every request      | Full HTML (prebuilt)                     | HTML + occasional JS                        |
| Client Cost | High                             | Low                          | Low                                      | Low-Medium                                  |
| Server Cost | Low                              | Medium-High                  | Near none                                | Low                                         |
| SEO         | Bad                              | Good                         | Best                                     | Good                                        |
| Use Case    | Dashboards, highly reactive apps | Company websites, e-commerce | Blog posts, docs, portfolio (build once) | Content sites with pockets of interactivity |

### Related
#### Frontend Hosting:
[[CDN]]
[[Static-Hosting]]