---
created:
  - " 04-14-2025 18:13"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  04/14/25: Deep Learning Optimization
---
[sec_4_stochastic_optimization.pdf - Google Drive](https://drive.google.com/file/d/1lDvoinchJlo1q5mMc_I2kg7_k1dSo4cQ/view)

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
### DL Model Optimization Key Factors
- Data and Task
	- Inputs: Full batch vs instance vs mini-batch
	- Outputs: Loss functions
- Model architecture, variables to be learned
	- Model variable initialization methods
	- Hyper-parameter searching
- Optimizer and optimizer's hyper-parameters
	- SGD vs Momentum vs Adagrad vs Adam vs ...
	- Optimizer setting hyper-parameters
- Specific algorithm for deep model optimization
	- Error backprop algo

#### Optimizing a Single Variable
Given: $y=x^2 -x -2$

##### One method: Lagrange
Minimum can be obtained with: *Lagrange Multiplier Method*
$\frac{\partial{y}}{\partial{x}} = \frac{\partial{x^2-x-2}}{\partial{x}} =2x-1$
$\frac{\partial{y}}{\partial{x}} = 0 \to x=\frac{1}{2} \to y_{min} = -\frac{9}{4}$

Advantages vs Disadvantages
- Straightforwards and can obtain the precise minimum in theory
- Works for simple functions (convex) with one variable but cannot handle more complex cases (non-convex cases) with multiple variables
	- e.g. loss functions for deep learning models
##### Another Method: Gradient Descent
Start at a random $x_0$ and take steps. Repeat until convergence
1. Calculate current gradient: $g_i = \frac{\partial{y}}{\partial{x}}(x_i)$
2. Update x value (alpha = learning rate): $x_{i+1} = x_i - \alpha \cdot g_i$
3. Keep updating until convergence gets $x_n$
$y_{min} = x^2_n - x_n - 2$

### Gradient Descent (GD)
GD also works for more complex cases!

*Vector of Model Parameters* - $\theta$
*Loss Function* - $L(\theta)$
*Initialization* - $\theta_0$

1. Calculate the current gradient: $g_i = \frac{\partial{L{\theta}}}{\partial{\theta}}(\theta_i)$
2. Update with learning rate: $\theta_{i+1} = \theta_i - \alpha \cdot g_i$
3. Continue until convergence to $\theta_n \to L_{min}$  
Return $\theta_n$ as the **locally** optimal learned model variables
#### Problems
GD will converge to a local optimum, can't guarantee global optimum
- Initialization matters: $\theta_0$
	- Controlled by random seed

#### Learning Rate: $\alpha$
Large LR can lead to large/drastic updates, leading to divergent behaviors
Small LR requires many updates before reaching the minimum

#### Batch Size
Full Batch GD: $L(\theta) = \sum_{(x_i, y_i) \in D} \ell(f(x_i;\theta), y_i)$
- IE for every instance in dataset, calculate loss, sum them together, and assign that as the Loss
Stochastic GD: $L(\theta) = \ell(f(x_i;\theta), y_i)$
Mini-batch SGD: $L(\theta) = \sum_{(x_i, y_i) \in B} \ell(f(x_i;\theta), y_i), \text{where } (B\in D) \land (|B|=k)$
Instance-wise SGD: Update the loss function after one data point. 

```
for epoch in range(epochs):
	for iteration in batch:
```
> Sum and average them within batch?

##### Batch Performance analysis:
**Full Batch GD**:
- *Advantage*: robust, fast to converge
- *Disadvantage:* requires large memory, slow in computation
**SGD**:
- *Advantage*: Fast computation, low memory
- *Disadvantage:* Not robust, gradient can be slightly mis-leading, can slow down convergence
**Mini-batch SGD**:
- Compromise between Full Batch and SGD

![[Batch-Size-Loss-Update-Visualization.png|200]]


> [!tip] Data ordering can poison gradient updates
> Say the data is ordered: 100 dogs, 100 cats, 100 cows, ...
> If you use batches of 100, you will get VERY biased loss updates
> *Shuffle Data!*


### Optimizers
When updating, you can get more fancy (more hyperparameters) than just the learning rate
- *Momentum*
- *Change learning rate*



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
