---
created:
  - " 04-18-2025 18:13"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  04/18/25: ECS189G-L9
---
[sec_5_deep_learning_basic](https://drive.google.com/file/d/1IYzipQL9grF4ofhyHuJmQJWGdWux6nft/view)

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes

### Artificial Neurons
Artificial Neuron: McCulloch-Pitts (MP) Neuron
- Input: $[x_1 \dots x_n]$ from n other neurons
- Connection Weight $[w_1 \dots w_n]$ 
- Inherent Activating Threshold of the current neuron: $\theta$
- Formally: $z=\sum^n_{I=1} w_ix_i - \theta$
- Output of the neuron will be $y=f(z)$

#### Activation Functions:
- Binary step function - `f(z) = 1 if z > 0 else 0`
- Sigmoid Function - $f(z) = \frac{1}{1+e^-z}$
	- Range from 0 to 1. f(0)=0.5
- Tanh - $f(z) = tahn(z)$
	- Between -1 and 1. Smooth, f(0)=0
- ReLU (Rectified Linear Unit) - $f(z) = max(0,z)$
	- Zero or Z
- Softplus = $f(z) = log(1+exp^z)$
	- Can be activated if less than zero
Each of these has an easy derivative calculation (except for binary step, and ReLU, that have no derivative at 0)

#### Perceptron and its weakness
They can only solve problems where the data is linearly seperable.
Due to this, it can't handle complex data sets like the XOR data set. 
- Takeaway: *XOR* is the weakness of single layer perceptron models.

However, adding a *hidden layer* allows the network to learn complex non linear relationships, overcoming the XOR problem.


```
# XOR Network

from torch import nn
layer = nn.Linear(2,2, bias=True)
act_func = 
h = layer(x)
```

#### How to Train an MLP

Baacckkpprooop




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
