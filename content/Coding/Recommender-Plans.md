---
tags:
  - AI
  - ProjectPlanning
---

## EDA On Attribute variation with spotify sub genres


## Different Approaches:
- Content Based: Song are recommended based on content similarity to other songs 
- Collaborative: Models recommends based on preferences of similar users
![[Infographics-MRS--1-.webp | 400]]

### Data Preprocessing
Find relevant columns and how to weigh them
- Numeric 

| track_popularity | year | danceability | energy | key | loudness | mode | speechiness | acousticness | instrumentalness | liveness | valence | tempo | duration_ms |
| ---------------- | ---- | ------------ | ------ | --- | -------- | ---- | ----------- | ------------ | ---------------- | -------- | ------- | ----- | ----------- |
- String / Categorical

| track_artist | playlist_genre | playlist_subgenre |
| ------------ | -------------- | ----------------- |

Normalize / Standardize the numeric data 
Vectorize the categorical data

### Data Processing
Perform PCA
Save each song as its combination of PCA


### Finding Similarity
Perform cosine similarity operations and find most similar songs