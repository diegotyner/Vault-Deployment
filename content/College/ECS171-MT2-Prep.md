---
created:
  - " 11-15-2025 15:55"
tags:
---



Lectures 9-12
- Autoencoders
- Kmeans/DBSCAN
- GMM Biclustering
- Dimensionality Reduction


#### Autoencoders
Pretty simple, compress data set into a latent feature representation. More features = better representation
Topics:
- Loss functions?
- Benefits?
- Outlier detection?
- Variations beyond FFA?
- Varietional AE?
- Properties?

#### Clustering
Kmeans, hierarchical clustering, and DBSCAN, straightforward clustering algos
Topics:
- Kmeans algo
- Properties of kmeans, convergence, failure cases?
- Finding number of clusters?
	- MDL, BIC, AIC, Hierarchical?
- Types of hier clust
	- Agglomerative, divisive (bottom up vs top down)
- Distance metrics
- Density based clustering (DBSCAN)
- How and why?
- Kmeans Algo :(
	- Parameters? varying epsilon?
- Hierarchical DBSCAN
	- What does it change
- Comparison of algos 
- Similarity measures
- Norms
- Pearson corr (r)

#### GMMs (Gaussian Mixing Models)
Showing more clustering algos, GMMs, biclustering algos
Topics:
- Approach of GMMs
	- Multiple components, soft clustering, expectation maximization (EM)
- Component conditional density, mixture density, point membership, log likelihood
- Algo to find the parameters:
	- Expectation step, maximization step
	- Limitations?
- Biclusering, why?
- Bisclustering, how?
- Algos to find biclusters: MSR, Plaid Models, Spectral co-clustering, ITCC
- Measuring accuracy of clustering result

#### Dimensionality Reduction
Showing PCA and tSNE
Topics:
- PCA:
	- Why?
	- Pitfalls
- PCA Algo
- tSNE