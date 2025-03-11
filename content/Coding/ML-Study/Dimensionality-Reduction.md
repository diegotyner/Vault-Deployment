---
aliases:
  - Dimensionality Reduction
tags:
  - AI
  - Brain
  - Math
---




### Purpose
The purpose of dimensionality reduction is to reduce the number of dimensions or features needed to represent data. This is particularly useful when data is highly correlated, like similar neurons in the brain or loudness and acoustic-ness in music (anticorrelated).
High dimensional data is complicated, and computationally expensive.

A cool example is the [[CCN_Book_Ch10|LSA]] model, grouping related words together. Uses SVD.

### Different Techniques:
- Principal component analysis ([[PCA]])
- Non-negative matrix factorization (NMF)
- Linear discriminant analysis (LDA)
- Autoencoder
- T-distributed Stochastic Neighbor Embedding (t-SNE)
	- [t-SNE Paper](https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf)
	- [t-SNE Geeks4Geeks](https://www.geeksforgeeks.org/ml-t-distributed-stochastic-neighbor-embedding-t-sne-algorithm/)
- Singular Value Decomposition (SVD)




Differences between PCA and t-SNE

|S.NO.|PCA|t-SNE|
|---|---|---|
|1.|It is a linear Dimensionality reduction technique.|It is a non-linear Dimensionality reduction technique.|
|2.|It tries to preserve the global structure of the data.|It tries to preserve the local structure(cluster) of data.|
|3.|It does not work well as compared to t-SNE.|It is one of the best dimensionality reduction technique.|
|4.|It does not involve Hyperparameters.|It involves Hyperparameters such as perplexity, learning rate and number of steps.|
|5.|It gets highly affected by outliers.|It can handle outliers.|
|6.|PCA is a deterministic algorithm.|It is a non-deterministic or randomised algorithm.|
|7.|It works by rotating the vectors for preserving variance.|It works by minimising the distance between the point in a gaussian.|
|8.|We can find decide on how much variance to preserve using eigen values.|We cannot preserve variance instead we can preserve distance using hyperparameters.|
|9.|PCA is computationally less expensive than t-SNE, especially for large datasets.|t-SNE can be computationally expensive, especially for high-dimensional datasets with a large number of data points.|
|10.|It can be used for visualization of high-dimensional data in a low-dimensional space.|It is specifically designed for visualization and is known to perform better in this regard.|
|11.|It is suitable for linearly separable datasets.|It is more suitable for non-linearly separable datasets.|
|12.|It can be used for feature extraction|It is mainly used for visualization and exploratory data analysis.|
|13.|PCA can be sensitive to the ordering of the data points|t-SNE is less sensitive to the ordering of the data points.|