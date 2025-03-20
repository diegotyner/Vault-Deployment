---
created:
  - "{{date: MM-DD-YYYY}} {{time}}"
tags:
  - Collection
---


> [!tip] The following Dataview query won't render with Quartz, [[#Pages|Jump to Pages]] instead


## Choose topic/number to include
- `Entry-Number as "\#",`
- `topic as "Topic",`


---
### Dataview:
```dataview
TABLE
  topic as "Topic",
  created as "Created"
FROM #Entry
WHERE Entry-For = this.file.name
```
---


# 📗 -> Insert collection name
## ❗ ->  Information
[Collection Name]()
Small summary



## 📌 -> Themes
- What ideas does the collection as a whole raise?



## ✒️ -> Usage
- How can you use the knowledge you are obtaining?



## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words



### Pages
---
