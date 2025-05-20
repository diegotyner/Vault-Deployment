---
created:
  - " 04-07-2025 18:08"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  04/07/25: ECS189G-L4
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
##### Refresher - Norm
Refresher: $||x||$ is the norm of X, or the magnitude of a vector. $||x|| = \sqrt{\sum^n_{i=1}x(i)^2}  = \sqrt{x_1^2 + \dots + x_d^2 }$
$||x||_\infty = \max(|x(1)|, \dots, |x(d)|)$
L-p norm: $||x||_p = \left( \;\sum^n_{i=1}|x(i)|^p\; \right )^\frac{1}{p}$
*Cases of p:*
- $p=1$, the taxicab norm, manhattan norm, or L1-norm
- $p=2$, euclidean norm, or L2-norm. This is the assumed norm of vector
-  $p=\infty$, maximum norm, as p approaches infinity the norm will be reduced to the maximum value



##### Back to regression

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
- Measures need to have the following properties:
	- Non-negative (can't have a negative distance)
	- Identity: $dist(x_i,x_j)=0 \iff x_i = x_j$
	- Symmetric: $dist(x_i, x_j) = dist(x_j, x_i)$
	- Triangular inequality: $dist(x_i, x_j) \leq dist(x_i, x_k) + dist(x_k, x_j)$
		- IE, cant have a shorter distance than the direct path
Frequently used measures:
- *Minkowsky Dist*
	- Finding the L-P norm distance between two vectors, and depending on P chosen can reduce to Minkowski Distance of P=1, Euclidean distance if P=2 
- *Manhattan Dist*
	- Case of Minkowsky distance, of L-p norm with p=1
- *Euclidean Dist*
	- Case of Minkowsky distance, of L-p norm with p=2
- *Chebyshev Dist*
	- $dist_{CD}(x_i,x_j)=\max(|x_{i,1}-x_{j,1}|, \dots, |x_{i,d}, x_{j,d}|)$
	- Case of Minkowsky distance, of L-p norm with p=$\infty$
##### [[K-means]]
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
From an optimizing perspective:
1) Step 1: If we fix $\mu$, we can optimize $C$ 
	- Assign data points to clusters
2) Step 2: If we fix $C$, we can optimize $\mu$
	- Change cluster centers to the average of assigned points 

### Evaluation Metrics
*Classification Confusion Matrix*
- TP: True Positive
- FN: False Negative
- FP: False Positive
- TN: True Negative


|                 | Predicted Positive | Predicted Negative |
| --------------- | ------------------ | ------------------ |
| Actual Positive | *TP*               | *FN*               |
| Actual Negative | *FP*               | *TN*               |

*Classification Evaluation Metrics*
- Accuracy: $\frac{TP+TN}{TP+FN+FP+TN}$
- Precision: $\frac{TP}{TP+FP}$. 
	- True positive rate, how often is a Positive correct?
	- To get 1, *only predict positive when you're absolutely sure*
- Recall: $\frac{TP}{TP+FN}$
	- Rate of identified positives, FN is one you let by.
	- Can get 1 by *predicting everything Positive*
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
