---
created:
  - " 11-11-2025 17:26"
tags:
---

```
## Definitive Architectural Summary: Real-Finder

### 1. Application Goal (Business Logic)

The primary purpose of the Real-Finder application is to serve as an indexed viewer for the Jazz Real Book (JRB) collection. It eliminates manual scrolling by providing:

- **Search:** Quick lookup of songs across multiple editions using client-side fuzzy search.
    
- **Index:** Full, sequential listing of songs per edition, sorted by page number.
    
- **Direct Access:** Seamlessly linking the user directly to the sliced PDF scan of the requested song.
    

### 2. Stack and Environment

|   |   |   |
|---|---|---|
|**Feature**|**Implementation**|**Details**|
|**Framework**|**Vue 3** (Composition API)|Uses `<script setup>` syntax for component logic.|
|**Language**|**TypeScript** (TS)|Strict typing is enforced. Key Configuration: `moduleResolution: "bundler"` in `tsconfig.json`.|
|**Bundler**|**Vite**|Configured with path alias: `@/` maps to the absolute path of the `src/` directory.|
|**Styling**|**Tailwind CSS**|Integrated for utility-first styling.|
|**Routing**|**Vue Router**|Defined in `src/router/index.ts`. Supports dynamic routes like `/index/:edition`.|

### 3. Data Flow and Structures

|   |   |   |
|---|---|---|
|**Layer**|**Structure/File**|**Purpose**|
|**Input Data**|`data_files/songs_metadata.json`|Master list of songs, containing all metadata and `found` locations (edition, page number). Sourced from an OCR/wrangling pipeline.|
|**Index Data**|`src/data/indexed_data.ts`|**The sole source of truth for component consumption.** Exports the `editionIndex` object, keyed by edition number (e.g., `{"5": [song1, ...], "6": [...]}`).|
|**Search Data**|`src/data/keyed_songs_metadata.json`|Contains the unified, cleaned data set used by **`fuse.js`** for client-side fuzzy searching in `Home.vue`.|
|**Link Utility**|`src/utils/createLinkTarget.ts`|Generates **absolute PDF paths** by prepending a `/` to the path string: `/jrb-{{edition}}-ed/{{page_num}}/{{CLEANED_TITLE}}.pdf`.|

### 4. Component Interaction and Logic

- **`Home.vue`:** Primary view. Manages state for search input and displays results via `SearchResults.vue`. Logic uses `fuse.js` to filter the static song data.
    
- **`SongIndex.vue` (Index View):** Renders the full index for the specific edition passed via the route parameter (`:edition`). Uses a `computed` property (`processedSongList`) to iterate over the `editionIndex` data, calculate the unique PDF link for each song, and display the list sorted by page number.
    

### 5. Asset Hosting Strategy

- **PDF Asset Location:** The sliced song PDFs are organized into folders (`jrb-3-ed`, `jrb-5-ed`, `jrb-6-ed`) directly within the **`public/`** directory.
    
- **URL Accessibility:** Due to the `public/` directory being served as the web root, the assets are accessed via an absolute URL path starting at the domain root, as confirmed by the example:
    
    - `https://real-finder.vercel.app/jrb-3-ed/243/PRETTY_GIRL_IS_LIKE_A_MELODY,_A.pdf`
```