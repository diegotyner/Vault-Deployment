---
created:
  - " 04-02-2025 18:12"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  04/02/25: Machine Learning Basics
---
[-- ML Basics](https://drive.google.com/file/d/1-UnT3uMgD5we_rrRlAqxTxtvf0fKbHDP/view?usp=sharing)

## 🎤 Vocab



## ❗ Unit and Larger Context

Intro to common ML techniques. Not deep learning yet


## ✒️ -> Scratch Notes
### Machine Learning
Computers learning from historical data, and using for future

### Main objective
Learn a **function mapping** from historical data to predict:
- *Discrete class labels* - classification, supervised
- *Continuous values* - Regression, supervised
- *Cluster inidicators* - Clustering, unsupervised

Also have semi-supervised and reinforcement learning

$f(\; \cdot \;, \theta,w)$
- $\cdot$ is a placeholder, could be x, etc.
- $\theta$ is learnable parameters
- $w$ is hyper parameters

Describe architecture by *depth* (how many layers it passes through) and *dimensions* (number of parameters in a layer)

### Supervised Learning
*Training:* learn a model with a training data set
*Testing:* test the model using unseen test data set
*Evaluation:* measure the model performance on testing set

> A computer system is said to learn from data D to perform task T if after fitting the computer system with data D, it performs better on task T evaluated by metric M.

*Assumptions:* It is assumed that the distribution of training data instances is identical to the distribution of testing data instances (including future data instances, ones the model will see in application ex)
- Not always true in reality. Violations of this assumptions will result in poor model performance
#### Training vs Test
Training is used to train and fit our model
Testing is used only to evaluate model

*How to partition data?*
- Pre-defined (sometimes you are given split data, Kaggle contests ex.)
- Random sampling (not stable)
- Cross Validation (K fold CV)
- Leave one out
Sometimes features of the data will define how you can split it. 
- Stock market data is time dependent, and you might use the oldest 75% for training, and the newest 25% for testing. 
	- In this case, random sampling wouldn't make sense
#### Classification: SVM
SVM: 
- A linear classifier finding a hyperplane to separate two classes of data (i.e. positive vs negative)
- A kernel function can allow the SVM to perform non linear substitution
- Given training examples: $\{ (x_1, y_1), \dots , (x_n, y_n) \}$ where $x_i = (x_1, \dots , x_n)$ and $y_i$ is the class label:
	- SVM finds a linear function parameterized by $w$ and $b$ such that:
		- $f(x) = <w,x> + b = w_1 \cdot x_1 + \dots + w_d \cdot x_d + b$
$$
\begin{align*}
y_i = 1\text{ if } [\;<w\cdot x_i> + b \geq 0\;] \\
-1 \text{ if } [\; <w\cdot x_i> + b < 0\;]
\end{align*}
$$
can be thought of as: $f(\vec{x}, \vec{w}, b)$



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
