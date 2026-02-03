---
created:
  - " 12-09-2025 16:46"
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

Audiobook download and stream app
- Artists I want:
	- All my current downloaded albums
	- Sections for:
		- Jazz
		- Jazz Vocalists
		- Jazz study (covers of songs I like)
		- Laufey
		- Sarah Kang
		- Cody Fry
		- Beatles
		- Jobim
- Support playlists, like:
	- Genres
	- Albums
	- Artists
- I want the feature of showing how long playlists are
- Track playtime stats


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

### Official


## 📂 Project Logs 


## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words



##### LLM Context

```
### Project Goal
To create a dedicated, offline, ad-free music player (using an old Android phone) that provides **smart curation, setlists, and on-device recommendations** based on a pre-processed local library. This approach is intended to be a **non-trivial programming exercise** by creating local functionality that bypasses typical cloud services.

---

### Hardware Allocation
* **PC (Linux/Windows/macOS):** Used for bulk processing, high-resource tasks, and serving as the primary library source.
* **Old Android Phone (Target Device):** Used exclusively for offline playback, user interaction, and real-time (though lightweight) recommendation inference.

---

### Core Functional Components

#### 1. PC: Library & Training Server (Offline Pre-Processing)
* **Task:** **Acquisition, Curation, and Feature Extraction.**
* **Implementation:** Custom-written script (e.g., Python using **Mutagen** and **Librosa**).
* **Output:**
    * **Clean Music Files:** Standardized metadata (Artist, Title, Album) written directly into the MP3/FLAC files.
    * **Feature File (Embeddings):** A static, pre-computed data file (e.g., CSV or JSON) containing the numerical features (e.g., **BPM, Energy, Valence**) and **Song Embeddings** for the entire library. This is the **Content-Based Filtering (CBF)** training output.

#### 2. Android Phone: Player & Inference Client (Offline Interaction)
* **Task:** **Playback, Synchronization, Inference, and History Logging.**
* **Implementation:** A **forkable, modern Android Audio Player** (e.g., **Audiofy** or **OuterTune**) using **Kotlin** and **Media3**.
* **Data Input:** The pre-computed **Feature File** and the clean music files synced from the PC.
* **Key Features to Implement:**
    * **On-Device CBF Recommendation Engine:** Uses the pre-computed features to perform fast, local vector calculations (e.g., **cosine similarity**) to generate recommendations (e.g., "Similar to this Song," "Similar to this Artist").
    * **Custom Setlist Feature:** A unique data model and UI (separate from standard playlists) for structured listening.
    * **Listening History/Metrics:** Local logging of play count, last played time, skips, etc., to feed back into the CBF and rule-based (e.g., "Discover Infrequently Listened") recommenders.

---

### Architectural Requirement
* The entire recommendation and playback process on the Android phone must be **fully offline** and **on-device**.
* The PC and Phone communicate only during **periodic synchronization** (for new music and updated feature files).
```