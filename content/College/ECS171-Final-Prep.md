---
created:
  - " 12-10-2025 23:12"
tags:
---


Mostly good on content, now I just want to refresh on potential "derivation" questions:

Samples to prepare for:
- Optimal OLS weights
- GD weight updates
- Deriving cback propagation step using chain rule
- Kmeans clustering updates
- Hierarchical clustering grouping
- PCA by hand,eigenvalues/vectors
- Statistical significance of a clustering result
- Multiple hypothesis testing correction
- Derive MLE for linear regression
- How would you code gradient descent, provide pseudocode

1. Regression and Optimization
	- OLS
	- SGD
	- Logistic Regression updates
	- Ridge/Lasso?
2. ANN
	- Calculate FFNN forward pass
	- Calculate error signal
	- Backprop
3. Naive Bayes
	- Posterior calculations
	- Discriminant func?
4. Unsupervised
	- PCA
	- K-means
	- Hiearchical
	- DBSCAN??
5. Autoencoders
	- Autoencoders, define components
	- VAE
6. Trees and significance
	- Calculate impurity (Gini index or entropy)
	- Statistical significance
7. GMM & Modeling
	- GMM model definitions, objective function, EM algorithm, and updates
	- analyze Biclustering results
8. Deep learning
	- vanishing gradient
	- weight explosion for images (MNIST) problem
		- fix by using convolution
9. Evaluation
	- Regression: Predicted vs actual, residuals, etc
	- ROC vs Precision recall
	- False discovery rate tests


Backprop Proof:
- $\alpha, w, g, z$
	- $\alpha$ - Activation of unit i
	- $w$ - Weight matrix from layer j to j+1
	- $g$ - Activation function(ReLU)
	- $z$ - Shorthand for the matrix mult of previous layer activations and weight matrix 