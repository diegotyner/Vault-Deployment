---
created:
  - " 02-23-2025 02:24"
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
- https://handwriting-wrapper.vercel.app
### GitHub:
- https://github.com/diegotyner/handwriting-wrapper

## 🧾 Project Description
### Blurt
I wanted a little text extractor for when its too annoying to highlight PDF text. 

I might want to extend it to actually extract text/notes!
- Send images to a flagship LLM 
	- e
- Maybe use the extracted text to make some sort of knowledge management application?
	- Notion database?
	- Obsidian?
	- Class folders? 


```DeepSeek
1. User Uploads Handwritten Note
    - Mobile/web app captures image → uploads to Firebase Storage or directly to Notion.
2. OCR Processing
    - Use Google Cloud Vision (free tier) or Tesseract (free, less accurate) to extract text.
3. LLM Structuring
    - Send text to GPT-3.5 to:
        - Generate a title, summary, and tags.
        - Identify related notes (for backlinks).        
4. Save to Notion/Firebase
    - Create a Notion page or Firestore document with structured data.    
5. Update Vector DB
    - Generate embeddings for the note → store in Pinecone/Chroma.    
6. Semantic Search
    - Users query notes via text → search vector DB for matches
```

Maybe I could even tie it into [[Obsidian-LLM-Integration]]? 



##### Features
- Copy / paste or import image files
- Copy paste extracted text out




### Official



## 🎯 Objective



## 📂 Project Logs 



## 🎟 Features
### Existing


### Todo



## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

