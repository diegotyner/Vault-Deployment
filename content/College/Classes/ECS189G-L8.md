---
created:
  - " 05-06-2025 22:52"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  ECS189G-L8
---
[sec_4_stochastic_optimization.pdf - Google Drive](https://drive.google.com/file/d/1lDvoinchJlo1q5mMc_I2kg7_k1dSo4cQ/view)
[sec_5_deep_learning_basic](https://drive.google.com/file/d/1IYzipQL9grF4ofhyHuJmQJWGdWux6nft/view)

> Filling in prior to midterm, did not attend lecture

### Summary of Section 4:
Deep Learning model optimization
- Data perspective
	- Input: decide to use full batch, instances, mini-batch
	- Output (real value, probability, etc.): decide loss function
- Design your model
	- Initialize your variables to be learned
- Decide your optimizer
	- SGD vs Momentum vs Adagrad vs Adam vs …
	- Specify optimizer parameters
		- Learning rate
		- Other parameters
- Use error back-propagation algorithm (with your GD based optimizer) to learn model variables until convergence



## ✒️ -> Scratch Notes
### Gradient Descent Optimizers
*Momentum, Adagrad, Adam*

#### Pure GD:
$\theta_{i+1} = \theta_i - \alpha \cdot g_i$
- $\theta$ = Current params / location
- $\alpha$ = Learning Rate
- $g_i$ = Current Acceleration (not velocity?)

#### Momentum
Incorporate past gradients into next gradient
$$
\begin{align*}
&g_i = \frac{\partial L(\theta)}{\partial \theta} \; | \; \theta \\
&v_{i+1} = \gamma \cdot v_i + \alpha \cdot g_i \\
&\theta_{i+1} = \theta_i - v_{i+1}
\end{align*}
$$
- $\gamma$ - Momentum term weight (usually 0.9)

#### Adagrad
Learning rate adaptation
$$
\begin{align*}
&g_i(j) = \frac{\partial L(\theta)}{\partial \theta(j)}\; | \; \theta_i(j) \\
&\theta_{i+1}(j) = \theta_i(j) - \frac{\alpha}{\sqrt{\sum_i g_i(j)^2} + \epsilon} \cdot g_i(j)
\end{align*}
$$
- Notice the learning rate is divided by the sqrt sum and epsilon
	- Different learning rate for different model variables
	1) For variables with small gradient, they have larger learning rate
	2) For variables with large gradient, they have smaller learning rate instead
#### Adam (Adaptive Moment Estimation)
Incorporates Momentum + Adagrad
![[Adam-Optimizer-Equation.png|400]]

### Prediction Output and Loss Functions
#### Softmax
$$\text{softmax}(y_i(j) = \frac{\exp(y_i(j))}{\sum_k\exp[(y_i(k))}$$
Notes:
- Basically, scale each output by their proportion of the output, scaled exponential. 
	- This has the property of turning the full vector output into a probability distribution, summing to 1
- Why $\exp(x) = e^x$? [Related question](https://stats.stackexchange.com/questions/296471/why-e-in-softmax)
	- It is not particularly important to the ratio, HOWEVER it makes the math easier
	- $e^x$ has properties that make working with it in derivates/general math much neater. That is why it's chosen specifically
![[Softmax-Scaling-Example.png|400]]
- Notice the distribution scaled to 1
- Notice the exponential scaling

### Classification Loss
#### Mean Absolute Error (MAE) Loss
One hot encode the label, and compare its prediction to truth
$\ell_{MAE}(\hat y_i, y_i) = \frac{1}{d_y}\sum^{d_y}_{j=1}|y_i(j) - \hat y_i(j)|$
#### Mean Square Error (MSE) Loss
$\ell_{MSE}(\hat y_i, y_i) = \frac{1}{d_y}\sum^{d_y}_{j=1}(y_i(j) - \hat y_i(j))^2$
#### Cross Entropy Loss
$\ell_{CE}(\hat y_i, y_i) = -\sum^{d_y}_{j=1}y_i(j)\;\log\hat y_i(j)$
![[Cross-Entropy-Loss-Calculation-Example.png|400]]

> More we dont cover as well...

---
**Slides 2**

### Deep Learning Basics
Why do we need Deep Learning? (DL)
- Great for dealing with complex unstructured data
	- He gives the example of discriminating dogs and muffins, they blur the lines of features (number of eyes, nose color, fur color, etc.) needing more complex analysis
What is it?
- Broad family of ML algos based on Artificial Neural Networks (ANN)

#### History
![[Brief-History-of-Artificial-Neural-Networks.png|400]]
- Brief history of artificial neural networks

##### Why is it working all of a sudden?
- GPUs, HPCs, Cloud Compute
- Big data
- New deep model architecture
![[Deep-Learning-Architecture-and-Techniques.png]]

On top of that, they're increasing exponentially in number of parameters



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
