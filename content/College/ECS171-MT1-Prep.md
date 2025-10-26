---
created:
  - " 10-23-2025 19:41"
tags:
---


### Summary of topics

Lecture 1 - *Introduction*
- Supervised
- Unsupervised 
- Reinforcement Learning
- Parametric vs. Non-parametric: 
	- Fixed num of parameters is called parametric
	- If the num of parameters increases with data size its called non-parametric
Lecture 2 - *Linear Regression*
- Linear regression
	- Ordinary Least Squares (OLS)
	- Assumes linear function of input
- Residual Sum of Squares
	- How to minimize error?
		- OLS or GD
	- Learn how to implement OLS or GD
- Least Mean Squares (LMS)
Lecture 3 - *Linear Regression Part 2*
- Overfitting, polynomial order, and sample size
- Test/Train curve
- Regularization - Ridge/Lasso
- Gaussian/Gamma distributions
- Maximum Likelihood Estimator (MLE)
	- How to do, and equivalent formulas (NLL)
- RSS/SSE/MSE/OLS
Lecture 4 - *Logistic Regression and Classification*
- Regression vs. Classification 
- Sigmoid/Logistic Function
- Solving for optimal parameters:
	- MLE and GD
- Could also use Newton's method
- Perceptron learning algo
Lecture 5 - *Intro to ANN*
- Perceptron learning algorithm
- FFNN, MLP
- Activation functions (ReLu, logistic, step)
- When and how to change architecture
- ANN classifier
Lecture 6 - *Backpropagation in ANN*
- The entire slide show?
- Maximize the log likelihood vs minimize the negative log likelihood (cost function)
- To train:
	- Use optimization method (GD, or gradient ascent in NLL)
	- Take derivatives with respect to w
- Forward propagation
- Calculate the errors for each layer
- For each sample:
	- set a(1) = xk
	- compute a(l) for all layers l (forward prop)
	- compute error in final layer all hidden layers
	- compute partial derivatives
	- use the derivative to update with a heuristic optimization method
- NN types:
	- FFNN if ANN graph is acyclic
	- Recurrent networks when it is cyclic
	- Radial Basis Function Networks, Hopfield Networks, long-short memory etc.
Lecture 7 - *Naive Bayes*
- Naive bayes method: generative method
- Concepts of 
	- Prior, posterior, and likelihood
- Assumptions of naive bayes (features independent of other features)
- When does it work well (features uncorrelated, and modest training data)
- Understand complexity explosion with the discriminant function approach
- Understand how assuming feature independence simplifies calc
- Measuring classification performance
	- Cross-validation, binary classification errors, statistical measures (f1, etc), ROC, AUC
Lecture 8 - *Decision Trees and Random Forest*
- How to decide which rules to split on?
- What is purity/homogenity of final sets (leaves?)
	- Entropy 
	- Gini index
- Balance between complex rules and simple rules
	- Optimal?
- How to prune back the tree
	- measure performance
	- cross-validation
	- minimum description length
Lecture 9 - *Autoencoders*
- General structure of autoencoder
- Desired characteristics:
	- Sparce representation
	- Lower dimensionality
	- Spatial and temporal info maintained
- Activation functions
- Loss functions
- Other uses:
	- Speed of compute
	- Anomaly detection
	- Denoising
- Convolutional autoencoder
- Generation:
	- Variational autoencoder
	- Reqs - continuity and completeness



### Deeper Dive
#### Lecture 1: Intro
Nothing too crazy, just the topics above

#### Lecture 2: Linear Regression
Linear Regression: Model depends linearly on unknown parameters, estimated from the data
- Simple linear regression: one independent, one dependent
- Multiple linear regression: multiple independent, one dependent
- Multivariate LR: multiple independent, multiple dependent
	- (general linear regression)

OLS - Method for estimating parameters in linear regression

Ideal Linear Regression: $y^i = f(x_i;w) = w^Tx_I = \sum ^n_{j=0} w_jx_j^i$
Un-ideal: The deviation from ideal leaves the residual, $\epsilon$
RSS: $\sum^m_{i=1}(\epsilon^i)^2 = \sum^m_{i=1}(y_i - w^Tx_i)^2$
- To measure error

Minimizing the RSS is equivalent to maximizing log-likelihoodof data given model:
- $w=argmin_w RSS = argmin_w (\sum^m_{i=1}(y^i - w^Tx^i)^2)$
Solve this with either OLS or GD

For any vector: $A^TA=\sum_i a_i^2$
- Also, $A^TA$ is symmetric

Derivation now:
$$\displaylines{
RSS=(Y-Xw)^T(Y-Xw) \\
\frac{\partial RSS}{\partial w} = 0 \text{ (critical point, minima) } \\
\nabla w [(Y-Xw)^T(Y-Xw)] = 0 \\
\nabla w[ Y^TY -  Y^TXw - x^TX^TY + w^TX^TXw] = 0 
\text{ (this next step is weird, look at footnotes)} \\
\nabla w[-2Y^Txw + w^TX^TXw] = 0 \\
-2X^TY + 2X^TXw = 0
X^TXw=X^TY \\
w = (X^TX)^{-1}X^TY
}
$$
Footnotes: 
- $Y^TY$ is a constant, and gets zeroed out by derivative
- "Since $(Y^{T}Xw)$ is a scalar, its transpose is equal to itself. That is, $((Y^{T}Xw)^{T}=w^{T}X^{T}Y$. Therefore, the two middle terms are equal", which gives us $-2Y^TXw$


