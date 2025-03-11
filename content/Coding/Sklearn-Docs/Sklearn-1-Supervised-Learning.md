---
aliases:
  - 1 - Supervised Learning
tags:
  - Sklearn
  - AI
  - Entry
created:
  - " 06-09-2024 23:49"
Entry-For: Sklearn
Entry-Number: "1"
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 1.1 Linear Models
The target value is expected to be a linear combination of the features. If $\hat{y}$ is the predicted value:
$$\hat{y}(w,x) = w_0 + w_1x_1 + \ldots + w_px_p $$
Vector $w=(w_1,\ldots,w_p)$ is the `coef_` and $w_0$ is the `intercept_`


### 1.1.1 Ordinary Least Squares
`sklearn.linear_model.LinearRegression`
[Linear Regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression) minimizes the sum of error between perdicted and observed. It solves
$$min_w ||Xw-y||^2_2$$
> LinearRegression will take in its fit method arrays X, y and will store the coefficients of the linear model in its coef_ member:

Attributes:
- coef_: array of shapes (n_features, ) or (n_targets, n_features)

