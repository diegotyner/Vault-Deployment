---
created:
  - " 05-06-2025 12:13"
tags: 
aliases:
  - Gram Matrix
---
## $X^TX$ - The Gram Matrix 
> X and it's transpose, [Wikipedia Gram Matrix](https://en.wikipedia.org/wiki/Gram_matrix)

*The matrix outputted will be symmetric*
Most intuitively, it is calculating the unscaled covariance matrix between features
- To get the actual covariance matrix:
  1) Center the date - Subtract the mean of each feature from each sample
  2) Compute $C^T C$, where $C$ is the centered data matrix
  3) Divide by $n-1$ 

$\text{Var} (x) = \mathbb E[XX^T]-\mu\mu^T$
- $\mu = \mathbb E[X]$

| Expression | Matrix Size  | Interpretation assuming proper scaling |
| ---------- | ------------ | -------------------------------------- |
| $X^TX$     | $p \times p$ | Covariance between features            |
| $X X^T$    | $n \times n$ | Similarity between samples             |
- Given $X \in \mathbb R ^{n \times p}$

### Use Cases
- Linear Regression - $w^* = (X^TX)^{-1}X^Ty$
	- $\hat y = X w^*$
	- Equivalent to OLS (ordinary least squares regression), in the condition that $X^TX$ is invertible
- PCA - Computes eigenvectors of $X^TX$
- SVMs - Kernels use it?
- LDA - 
- 

### What is it doing?



### Resources
So many answers I can't really understand right now, but here's a list of some:
- [math exchange - Properties of A transpose A](https://math.stackexchange.com/questions/1896628/properties-of-the-a-transpose-a-matrix/1896633#1896633)
- [reddit - product of matrix with transpose](https://www.reddit.com/r/learnmath/comments/cx8eeq/what_does_the_product_of_a_matrix_with_its/)
- [reddit - Interpretation of this mult](https://www.reddit.com/r/askmath/comments/3lf5re/interpretation_of_matrix_mutliplication_xxt_and/)