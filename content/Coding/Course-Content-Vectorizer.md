---
created:
  - " 02-15-2025 16:45"
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


> [!tip] This project is done as I envisioned it. 
> I have my current iteration hosted here: [diegotyner/CanvasResourceSemanticSearch](https://github.com/diegotyner/CanvasResourceSemanticSearch)
> However, I want to do better with processing, and make it more general so that I can throw in research papers and the like.
> To that end, I'll be continuing on here: [[Text-Extractor-Database]]


## 🧲 Published
### GitHub:
- [diegotyner/CanvasResourceSemanticSearch](https://github.com/diegotyner/CanvasResourceSemanticSearch)
On the github, I explain the technical implementation and technologies used more in depth through the readme. 
I use:
- Selenium
- Requests
- Postgres
- Transformers
Check the github for a more rigorous summary of how I went about it, or reach out to chat!

I might pick it up to do something fun, like a UMAP on course transcripts

## 🧾 Project Description

### Blurt
This project will center around RAG and word vectorization. I'm very interested about working it in to analyze large chunks of text, especially to get insight from them. This could be expanded to a number of domains, like potentially the symposium proceedings? We'll see!

On top of that, I routinely have to catch up on a large batch of content! (skipping class for 2 weeks). It would be great to have hints to know where to start my studying, and have hints for which lectures are most informative / content rich.

Brainstorming Deepseek Chat - [Link](https://chat.deepseek.com/a/chat/s/b9cfe872-3d54-4de4-add9-d10f60a6cebb)

Its officially on the way! 
- The scraping is live on the github, and the first attempt at semantic search is done now!


## 🎯 Objective



## 📂 Project Logs 
### Scraping
[CanvasScraper.ipynb - Colab](https://colab.research.google.com/drive/1Fl0s4iHAERl-8EFlKyZPbKmBapxZ0yte#scrollTo=449BHrBX8nIh)

|                                          |     |
| ---------------------------------------- | --- |
| 508262252 - 1_83t7iz4h - PID 1770401.txt |     |
| 506997062 - 1_mbz6ul4h - PID 1770401.txt |     |
| 506997062 - 1_mbz6ul4h - PID 1770401.txt |     |
| 506273622 - 1_tkz9ulng - PID 1770401.txt |     |
how to tell if a page needs Javascript to load? Fix the no endpoint bug
- do I have to learn selenium 😢

Automated pushing to Google drive. Lectures should be hosted there, not on vps


```
postgres=# CREATE TABLE lectures (
    lecture_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    class TEXT,  -- URL/filepath
    created_at TIMESTAMP DEFAULT NOW(),
    metadata JSONB  -- author, date, tags, etc.
);
postgres=# CREATE TABLE chunks (
    chunk_id SERIAL PRIMARY KEY,
    lecture_id INT NOT NULL REFERENCES lectures(lecture_id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    embedding VECTOR(384),  -- Dimension matches MiniLM-L6-v2
    position INT,  -- Original order in lecture
    metadata JSONB,  -- page numbers, timestamps, etc.
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎟 Features
### Existing


### Todo



## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

