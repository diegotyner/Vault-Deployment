---
created:
  - " 01-30-2026 13:05"
tags:
  - Entry
Entry-For: College-Talks
topic: Agentic AI with MCP e
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# Insert entry name
---

## 🎤 Vocab



## ❗ Information
**MCP** - Model Context Protocol



## ✒️ -> Scratch Notes
https://modelcontextprotocol.io/docs/getting-started/intro
https://github.com/modelcontextprotocol
https://github.com/getsentry/sentry-mcp

> how to integrate LLMs into workflows? 

Allow MCP to handle business logic, contacting third party APIs

MCP Host: Contains MCP Clients
- MCP Clients that have a dedicated connection to MCP server (filesystem, database, rmeote)

Connection from MCP client (LLM) to MCP server (weather app) is always over HTTP/STDIO 

> MCP is very slow, lots of transactions have to take place

The advantage is:
- The protocol allows client and server to have layers (daya layer and transport layer)
- The data layer allows for it to have state/context

Data layer:
- JSON RPC 2.0 exchange protocol that includes:
	- Lifecycle management, server features, ...
- MCP defines three core primitives:
	- Tools, resources, prompts











## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```



## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words

