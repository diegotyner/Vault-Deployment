---
created:
  - " 09-29-2024 14:01"
tags:
  - Resource
---

---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```
---

# 📗 -> Code Snippets for the Song Recommender
## 🎤 Vocab
**Cosine Similarity** - Measures the angle between two vectors:
$$
CosSim(A,B) = \frac{A \cdot B}{||A||\;||B||}
$$
**Euclidean Distance** - Straight line distance between two points:
$$
EucDist(A,B) = \sqrt{\sum^n_{i=1} (A_i-B_i)^2} 
$$


## ✒️ -> Usage
- How and where is it used

### Imports
```python 
import pandas as pd
import numpy as np
# from sklearn.metrics.pairwise import cosine_similarity # alternative distance
from sklearn.metrics.pairwise import euclidean_distances
from sklearn.preprocessing import StandardScaler
```


### Opening and Cleaning
```python
df = pd.read_csv('spotify_songs.csv')
df['track_album_release_date'] = df['track_album_release_date'].str[:4].astype(float) #  Keeping only year
numerical_features = ['track_popularity', 'track_album_release_date', 'danceability', 'energy',
                      'loudness', 'speechiness', 'acousticness',
                      'instrumentalness', 'liveness', 'valence',
                      'tempo', 'duration_ms']

# Standardizing the numerical features
df = df.dropna(subset=numerical_features)
scaler = StandardScaler()
df[numerical_features] = scaler.fit_transform(df[numerical_features])
df = df.drop_duplicates(subset=['track_name', 'track_artist'], keep='first').reset_index(drop=True) # Dropping songs where name and artist are equal
```

### Helper Functions
```python
def find_song(df, title, artist): # artist column is track_artist 
	song_row = df[(df['track_name'] == title) & (df['track_artist'] == artist)]
	if song_row.empty:
		raise ValueError(f"Song '{title}' not found in the dataset.")
	return song_row.iloc[0]

def find_most_similar_song_cosine(df, target_song, features):
	target_vector = target_song[features].values.reshape(1, -1)
	similarities = cosine_similarity(target_vector, df[features].values)
	most_similar_index = np.argmax(similarities[0])
	if similarities[0][most_similar_index] == 1.0: # Making sure its not the same song
		similarities[0][most_similar_index] = 0.0
		most_similar_index = np.argmax(similarities[0])
	return df.iloc[most_similar_index]

def find_most_similar_song_euclidean(df, target_song, features):
    target_vector = target_song[features].values.reshape(1, -1)
    distances = euclidean_distances(target_vector, df[features].values)
    most_similar_index = np.argmin(distances[0])
    if distances[0][most_similar_index] == 0.0:
        distances[0][most_similar_index] = np.inf  # Set to infinity to exclude the same song
        most_similar_index = np.argmin(distances[0])
    return df.iloc[most_similar_index]
```

### Running / Testing
```python
# Define the features to use for similarity comparison
features = ['danceability', 'energy', 'loudness', 'speechiness', 'acousticness',
            'instrumentalness', 'liveness', 'valence', 'tempo', 'duration_ms']

target_title = "Next Levels"  # Replace with the title of the song you're looking for
target_song = find_song(df, target_title)
most_similar_song = find_most_similar_song_euclidean(df, target_song, features)
print(f"The song most similar to '{target_title}' is '{most_similar_song['track_name']}'")

target_df = pd.DataFrame(target_song).reset_index(drop=True)
most_similar_df = pd.DataFrame(most_similar_song).reset_index(drop=True)
comparison_df = pd.concat([target_df, most_similar_df], axis=1)
comparison_df = comparison_df.loc[:, ~comparison_df.columns.duplicated()]
print(comparison_df)
```