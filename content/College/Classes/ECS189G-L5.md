---
created:
  - " 04-09-2025 18:11"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  04/09/25: ECS189G-L5
---
[ML Basics Slides](https://drive.google.com/file/d/1-UnT3uMgD5we_rrRlAqxTxtvf0fKbHDP/view)


## 🎤 Vocab



## ❗ Unit and Larger Context
![[ECS189G-L4#Evaluation Metrics]]



### What did we cover in lecture slide 1?
**Supervised: Classification**
- Splitting data
- SVM
**Supervised: Regression**
- Linear regression, Ridge, Lasso
**Unsupervised: Clustering**
- K-Means
**Evaluation Metrics**

What do we do next:
- Read textbook chapters
- Read ML overview article
	- 2.6 is about DL basics



## ✒️ -> Scratch Notes
Start off with a refresher of Evaluation Metrics

### Classification Evaluation Metrics
See above

motivating example...

Intuition for F1 score:
- Imagine a rare disease, 5 cases out of 1000 patients.
	- Predicting everything negative. Obviously a useless model, but pure accuracy is not a great measure.
		- Accuracy = 99.5%
			- Does not handle class imbalance well.
		- Precision = 0/0 ~= 0
		- Recall = 0/(0+5) = 0
		- f1 = 0
			- A harmonic mean of precision and recall

### Regression Evaluation Metrics
Explained Variance Regression Score
- $EV(y, \hat{y}) = 1 - \frac{Var(y-\hat{y})}{Var(Y)}$
Mean Absolute Error
- $MAE(y, \hat{y}) = \frac{1}{n}\sum^n_{i=1}|y_i - \hat{y_i}|$
Mean Square Error
- $MSE(y, \hat{y}) = \frac{1}{n}\sum^n_{i=1}(y_i - \hat{y_i})^2$
Median Absolute Error
- $MedAE(y, \hat{y})=median(|y_1-\hat{y_1}|, \dots , |y_n-\hat{y_n}|)$
R2-Score
- $R^2(y,\hat{y}) = 1 - \frac{\sum^n_{i=1}(y_i-\hat{y})^2}{\sum^n_{i=1}(y_i-\bar{y})^2}$
	- Here: $\bar{y}=\frac{1}{n} \sum^n_{i=1}y_i$

Each of them provides a different perspective on model performance.
Typically, a chart will be provided with model performance measured by each metric.

### Clustering Evaluation Metrics
![[Clustering-Evaluation-Metrics.png|400]]
For these measures:
- Within clusters, we want to minimize the distances 
- Between clusters, we want to maximize the distances

- Average distance
- Diameter
- Inter-Cluster Distance
- Inter-Cluster Center Distance


- DB Index
	- Tries to find maximum values within clusters, and compares against another cluster
	- Find pairs that maximize terms
- Dunn Index
	- Smaller DI is, the worse the result is 
> Also more clustering evaluations we wont cover

### Project
#### Outline
1) Env Setup: Python, Pytorch
2) Warmup to Deep Coding: MLP code
3) Images: CNN for image recognition
4) Text: RNN models for classification and generation
5) Graphs: GNN model for network embedding and node classification

```
from torch import Linear

layer1 = Linear(m,n) # m and n are dims
h = large(x) # h = Xw + b 
#### No clue what he wrote here, could be linear layer large....
```

> Coding a Deep Learning project is easy, but debugging is hard


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
