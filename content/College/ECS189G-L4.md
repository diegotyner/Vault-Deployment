---
created:
  - " 04-07-2025 18:08"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  04/07/25: ECS189G-L3
---
[ML Basics Slides](https://drive.google.com/file/d/1-UnT3uMgD5we_rrRlAqxTxtvf0fKbHDP/view)

## 🎤 Vocab



## ❗ Unit and Larger Context
Continuing with Linear Regression Models





## ✒️ -> Scratch Notes
### Regressions Models
> Regression differs from classification tasks in the domain of labels. Instead of inferring the pre-defined classes that the data instances belong to, Regression tasks aim at predicting some real-value attributes of the data instances,
#### Formally:
Input: Given training data $\{(x_1, y_1)\dots (x_n, y_n)\}$ where $x_i = [x_{1d} \dots x_{id}]$ and $y_i$ is a real value
We take the regression models of the linear feature combination form as an example:
- $\hat{y}(x_i, w) = w_0 + w_1x_{i1} + \dots + w_dx_{id}$
$w$ are the weight parameters
![[Linear-Regression-Learning-Slide.png|400]]

#### Other Regression Models
Refresher: $||x||$ is the norm of X, or the magnitude of a vector. $||X|| = \sqrt{x^2 + \dots d^2 }$
L-p norm: $||x||_p = \left( \;\sum^n_{i=1}|x(i)^p\; \right )^\frac{1}{p}$

*Ridge Regression Model*
- Addresses some of the problems of OLS by imposing a penalty on the size of coefficients $w$
- Objective function: $\text{arg}_w\text{min}||Xw-y||^2_2 + \alpha||w||^2_2$
- Optimal Solution: $w^* = (X^TX + \alpha I)^{-1}X^Ty$
*Lasso Regression Model*
- Lasso is a linear model that estimates sparse coefficients. Useful for its tendency to prefer solution with fewer parameter values
	- Previously, 
- Objective function: $\text{arg}_w\text{min}\frac{1}{2n}||Xw-y||^2_2 + \alpha||w||_1$
- L1 norm is not differentiable, closed-form solution, but can be addresses by sub-gradient methods, least-angle regression and proximal gradient methods


### Unsupervised Learning
- No supervision information is available and data instances may have no labels actually
- Task of learning some inner rules and patterns from such unlabeled data instances are called the unsupervised learning tasks, which provide some basic info for further data analysis
- USP LRN involves very diverse learning tasks, among which clustering tasks are the research focus and have broad applications

#### Clustering Tasks
Aim to partition the data into different groups, where instances in each cluster are more similar to each other than those from other clusters
- Input: $D=\{x_1 \dots x_n\}, x_i = [x_{1d} \dots x_{id}]$
- Output: K disjoint groups C, with: C containing data, no groups having overlap, and jointly comprising the dataset
- Desired Properties: Data instances in the same cluster are similar to each other; Data instances in different clusters are dissimilar to each.

##### Distance Measures:
Find ways to quantify (dist: V x V -> R)
- *Minkowsky Dist*
	- Finding the L-P norm distance between two vectors, and depending on P chosen can reduce to Minkowski Distance of P=1, Euclidean distance if P=2 
- *Manhattan Dist*
- *Euclidean Dist*
- *Chebyshev Dist*

##### K-Means
> An iterative clustering algorithm
- Initialize: Pick K random points as cluster centers
- Alternate:
	1. Assign data points to closest cluster center
	2. Change the cluster center to the average of its assigned points
- Stop when no points' assignments change

Guaranteed to converge in a finite number of iterations:
- Running time per iteration is:
	- O(KN) for assignment of points to clusters
	- O(N) for changing cluster center to average of its assigned points
- If we fix $\mu$, we can optimize $C$
- If we fix $C$, we can optimize $\mu$

### Evaluation Metrics
*Classification Confusion Matrix*
- TP: True Positive
- FN: False Negative
- FP: False Positive
- TN: True Negative

*Classification Evaluation Metrics*
- Accuracy: $\frac{TP+TN}{TP+FN+FP+TN}$
- Precision: $\frac{TP}{TP+FP}$. 
	- True positive rate, how often is a Positive correct?
	- To get 1, you could predict everything Negative
- Recall: $\frac{TP}{TP+FN}$
	- Rate of identified positives, FN is one you let by.
	- Can get 1 by predicting everything Positive
- F$\beta$: $F\beta = (1+\beta^2) \cdot \frac{\text{Precision} \cdot \text{Recall}}{\beta^2 \cdot \text{Precision} + \text{Recall}}$
	- F1 score frequently used
	- "It's _an "average" between precision and recall_ that penalizes very large skew between the two and rewards a good balance between them."
- Other metric too, ROC Curve, AUC
## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```




## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words
