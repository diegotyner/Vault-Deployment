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
##### Tab stack
[lec 4](https://canvas.ucdavis.edu/courses/1016188/files?preview=28721966)
[samp mt](https://canvas.ucdavis.edu/courses/1016188/files?preview=28848227)
[samp mt sol](https://canvas.ucdavis.edu/courses/1016188/files/folder/Discussion?preview=28937757)


#### Lecture 1: Intro
Nothing too crazy, just the topics above

#### Lecture 2: Linear Regression
Linear Regression: Model depends linearly on unknown parameters, estimated from the data
- Simple linear regression: one independent, one dependent
- Multiple linear regression: multiple independent, one dependent
- Multivariate LR: multiple independent, multiple dependent
	- (general linear regression)

##### OLS
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
- That gives us: $RSS=\sum^m(y^i - w^Tx^i)^2=(Y-Xw)^T(Y-Xw)$

Derivation now:
$$
\displaylines{
RSS=(Y-Xw)^T(Y-Xw) \\
\frac{\partial RSS}{\partial w} = 0 \text{ (critical point, minima) } \\
\nabla w [(Y-Xw)^T(Y-Xw)] = 0 \\
\nabla w[ Y^TY -  Y^TXw - x^TX^TY + w^TX^TXw] = 0 
\text{ (this next step is weird, look at footnotes)} \\
\nabla w[-2Y^Txw + w^TX^TXw] = 0 \\
-2X^TY + 2X^TXw = 0 \\
X^TXw=X^TY \\
w = (X^TX)^{-1}X^TY
}
$$
Footnotes: 
- $Y^TY$ is a constant, and gets zeroed out by derivative
- "Since $(Y^{T}Xw)$ is a scalar, its transpose is equal to itself. That is, $((Y^{T}Xw)^{T}=w^{T}X^{T}Y$. Therefore, the two middle terms are equal", which gives us $-2Y^TXw$

##### Gradient Descent (GD)
3 main types:
1) Stochastic GD (1) - One sample, update weights accordingly
2) Mini-batch GD (1<m<n) - A batch of samples smaller than entire training set (think a handful conceptually), update weights
3) Batch GD (n) - Whole training set

Central rule: 
- $w_j = w_j - \alpha \frac{\partial RSS}{\partial w_j}$
- $w_j = w_j - \alpha \frac{\partial (y^i - \sum^n w_kx_k^i)^2}{\partial w_j}$

LMS update rule - (also called Widrow-Hoff):
- Repeat until convergence:
	- SGD: $w_j = w_j + \alpha (y^i - w^Tx^i)x_j^i$
	- BGD: $w_j = w_j + \alpha \sum^m_{i=1}(y^i - w^Tx^i)x_j^i$

#### Lecture 3: Linear Regression Pt.2 
Understand model complexity and data tradeoffs, the polynomial fitting problem

##### Regularization:
Bounding the sum of weights, and putting it in the objective function

Ridge/L2 Regularization:
- $\min \sum^m (y^i -w^Tx^i)^2 + \lambda \sum^n w^2$

Lasso/L1 Regularization:
- $\min \sum^m (y^i -w^Tx^i)^2 + \lambda \sum^n w$

##### Conditional Probs:
Reframe problem in a probabilistic way:
- Error is gaussian: $\epsilon \sim N(0,\sigma^2)$
- Output is a normal function centered on estimations, with noise throw in:
	- $y(x) = w^Tx+\epsilon \implies N(y|w^Tx, \sigma^2)$
	- $\theta = (w, \sigma^2)$

##### Maximum Likelihood Estimation (MLE)
We want to maximize the chance our parameters $\theta$ produce the data:
- $\theta = argmax_\theta p(D|\theta)$

Equivalently: 
- $\theta = argmax_\theta \log p(D|\theta)$
- Since it's now logs, we can assume M training samples are i.i.d. and treat independently:
	- $l(\theta) = \log p(D|\theta) = \sum^M \log p(y^i|x^i, \theta)$
	- $l(\theta) = \sum^M \log[ (\frac{1}{2\pi \sigma^2})^\frac{1}{2}e^{-\frac{(y_i - w^Tx^i)^2}{2\sigma^2}}]$ 
	- $l(\theta) = -\frac{M}{2} \log(2\pi \sigma^2) - \frac{1}{2\sigma^2}\sum^M (y^i -w^Tx^i)^2$
		- Estimating prob of observing data given assumptions, smaller if more wrong
		- "The log-likelihood increases as the residual sum of squares decreases — i.e., the model assigns higher probability to data that lies closer to the predicted line"
	- Maximizing prob minimizes the RSS, which for linear regressions case gives OLS
- Instead of maximizing $l(\theta)$ we can minimize the negative log likelihood (NLL):
	- $NLL(\theta) = -\log p(D|\theta) = -\sum^M \log p (y^i | x^i, \theta)$

#### Lecture 4 - Logistic Regression and Classification
