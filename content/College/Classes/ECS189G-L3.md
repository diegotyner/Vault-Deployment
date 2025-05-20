---
created:
  - " 05-05-2025 23:05"
tags:
  - Classes/Lecture
aliases:
---

[-- ML Basics](https://drive.google.com/file/d/1-UnT3uMgD5we_rrRlAqxTxtvf0fKbHDP/view?usp=sharing)


> Did not attend this lecture
> Filling in notes way after the fact


## ✒️ -> Scratch Notes

$f(x) = <w,x> + b = w_1 \cdot x_1 + \dots + w_d \cdot x_d + b$
$$
\begin{align*}
y_i = 1\text{ if } [\;<w\cdot x_i> + b \geq 0\;] \\
-1 \text{ if } [\; <w\cdot x_i> + b < 0\;]
\end{align*}
$$

### SVM Hyperplane
The hyperplane $<w, x> + b =0$ is the hyperplane that seperates SVM classifications
- Also called decision boundary
Many possible hyperplanes to choose, which is best?
#### Maximal Marge Hyperplane
SVM will look for the hyperplane with the largest margin to the training data
- Margin being the separation between the margin and the data point (calculated by dot product)
Distance from hyperplane. "Distance from point $x_i$ to the hyperplane $<w,x>+b=0$":
$$\frac{|<w\cdot x_i> +b|}{||w||}$$
- Numerator is a dot product, offset by a bias
- Scaled by the denominator, to normalize

#### SVM Objective Function
$$loss = \sum^r_{i=1}(y_i-f(x_i;w))$$
then combine the loss with the margin terms:
$$\min loss + \alpha \cdot \frac{1}{2}||w||$$
- The $\alpha \cdot \frac{1}{2}||w||$ is a regularization term

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
