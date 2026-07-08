---
created:
  - " 10-02-2025 13:13"
tags:
  - Hub
---
# Hey there!

I'm **Diego Tyner**, UC Davis grad with a double major in _Computer Science_ and _Cognitive Science_, with a minor in _Neuroscience_.

## Quick Summary of Projects

Most of what I build falls into one of two buckets: things that are personally useful to me, or things I built specifically to learn a new technology or framework.

### Featured Projects

#### Weimo

A multimodal BCI wheelchair prototype built with Neurotech@Davis. Fuses EEG motor imagery, LiDAR mapping, eye tracking, and motor actuation to enable hands-free navigation for users with neurodegenerative conditions.
- [Poster](https://github.com/Neurotech-Davis/Weimo/blob/main/assets/Weimo_Poster.pdf) · [Code](https://github.com/Neurotech-Davis/Weimo)

My focus areas:
- *Application architecture, UI, and concurrency* - built the PyQt6-based control application coordinating eight concurrent processes (head tracker, pathfinding camera, pathfinding worker, EEG streamer, EEG classifier, motor driver, LiDAR process, and YOLOv8 object detection) running in parallel with no deadlocks
- *Head/eye tracking* - implemented user head tracking in order to seamlessly decode user's desired environmental destination
- *EEG pipeline* - implemented the preprocessing workers and classifier integrations to handle real-time inference in the live demo 

#### Real Finder

Not my most complex, but my favorite project: a tool for searching, browsing, and building setlists across 1,948 song entries from five indexed editions of the Real Book.
- Search and fuzzy-find songs across five indexed editions (2nd–6th)
- Open song PDFs directly from search results
- Build and persist personal setlists
- *Frontend:* Vite, Vue.js, Tailwind, Fuse.js
- *Data wrangling:* PaddlePaddle OCR, PyMuPDF, rapidfuzz, pandas
- [Live site](https://sheets.tynerlab.com/) · [Code](https://github.com/diegotyner/Real-Finder)  

#### News Dash

A full-stack technical demo, leaning more on the backend AI side than the web frontend. Built with a Next.js frontend, a Dockerized FastAPI backend, and a Dockerized PostgreSQL database with pgvector. A group summer project.
- Features: news scraping and extraction, interactive dashboard, bias detection, snippet retrieval, RAG interaction, and NLP-based summarization.  
- [Demo](https://www.youtube.com/watch?v=KnU6oNDmrB8) · [Code](https://github.com/Lingotech-Davis/NewsDashboard)  

My focus areas:
- *Infrastructure & full-stack build* - built the Next.js frontend, the FastAPI backend, and the Docker/Postgres/pgvector setup, including linking the vector store into the retrieval flow
- *News ingestion* - built the scraper/ingestion pipeline pulling articles via NewsAPI

#### NeuroCrime Project

A project targeting the unreliability of witness testimony by using objective neural signals of recognition instead of self-report. Built a full pipeline: custom stimulus presentation, event alignment, filtering, ICA, segmentation, and evoked response analysis.

- Neurotech club project team I project-managed
- [Poster](https://drive.google.com/file/d/1IcV2IrhfATR6CEAfNx07lX8Q189STZsD/view?usp=sharing) · [Code](https://github.com/Neurotech-Davis/NeuroCrime)

#### Canvas Resource Semantic Search

A pipeline I built to scrape and organize all of my course files before graduation, with semantic search to explore extracted files.

- Stack: Selenium web scraper, concurrent downloading, text extraction, MiniLM-6 embeddings, and pgvector for semantic search.  
- Extendable, but I’ve since moved on to other projects.  
- [Code](https://github.com/diegotyner/CanvasResourceSemanticSearch)  
  
#### YouTube Playlist Website

A clean, production-style project: a YouTube playlist manager built with Next.js and Supabase, designed to fix the limitations of YouTube’s native interface.  

- Features: Browsing shared playlists, authentication for account playlist management, saving playlist metadata, and more.
- [Demo](https://yt-playlist-website.vercel.app/) · [Code](https://github.com/diegotyner/YT-Playlist-Website)  
  - Note: backend must be manually activated, so the demo may not always be live.  

#### Deep Learning Code Repo

Repo for a multi-stage deep learning group project.  

- Implemented MLP/SVM, CNN, RNN/GRU/LSTM, and GNN models.  
- Gained practical experience with regularization, batching, feature engineering, and general ML workflows.  
- [Code](https://github.com/bkhli/ecs189g-ML)  

---

### Rapid-Fire Projects

Other small but useful tools:  

1. [Obsidian Vault Deployment](https://github.com/diegotyner/Vault-Deployment) - forked Quartz for publishing Obsidian notes online (closest I have to a portfolio site). You're looking at it right now!
2. [OCR Text Extractor](https://github.com/diegotyner/handwriting-wrapper) - Web wrapper for the OCR.space API, handy for extracting text from screenshots.  
3. [Hudl Downloader](https://github.com/diegotyner/Hudl_Downloader) - Python script to download streamed Hudl data locally.  
4. [Libby Downloader](https://github.com/diegotyner/LibbyDownloader) - Chrome extension to download Libby audiobooks from streams.  
5. [NBA Playoffs Search Website](https://github.com/diegotyner/PublicBasketballWebsite) - Tool for searching 2022 NBA playoff highlights from YouTube.  
6. [AIFS Hackathon Fruit Recognition Project](https://drive.google.com/file/d/1gY740KByeVScvx8XyT-IQt0YzCSAK9sj/view) - Fine-tuned YOLOv5 on a CVAT-labeled fruit dataset, deployed on a Raspberry Pi Zero 2w + AI camera.
