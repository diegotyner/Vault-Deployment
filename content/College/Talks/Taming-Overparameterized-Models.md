---
created:
  - " 10-10-2024 16:11"
tags:
  - Entry
Entry-For: College-Talks
topic: Taming Overparameterized Models
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> Taming Overparameterized Models: OLS Interpolators, Regularization, and Beyond
[Link](https://statistics.ucdavis.edu/events/seminar-101024-song)

## Abstract: 
Recent advances in deep learning research have uncovered the phenomenon of benign overfitting, where models that perfectly interpolate training data can still generalize well, and an implicit bias in gradient descent dynamics, favoring structured solutions linked to implicit regularization. This talk covers two ongoing lines of research addressing the behavior of overparameterized models for high-dimensional statistics. First, we examine the minimum l2-norm OLS interpolator, highlighting key results such as the Frisch-Waugh-Lovell theorem and the leave-one-out formula in overparameterized settings.  These results have implications for controlling omitted variable bias and enabling inference. Second, we explore regularized M-estimators and the structures induced by regularization. We revisit classical LASSO analysis, discuss challenges beyond quadratic loss and polyhedral regularizers, and outline ongoing research efforts to tackle these challenges.

## ✒️ -> Scratch Notes
Overparameterize models
Models with # models para > # training data points
- widely use in ml
- often outperform traditional models
**Benign Overfitting**
**Implicit Regularization**
Even when not explicityl regularizwd, overparametrized models often converge to simpler solutions

OLS Interpolator in Overparameterize (OP) linear models

REgularization (like lasso)

Best Linear Unbiased Estimator

### REgression Adjustment
Brief History
- 1921: Fisher's ANCOVA
- 2008: Freedmans critique
- 2013: Lin's Response
- 2021: Lei and Ding's Analysis
- Open Questions
	- High dmensional setting (p > n), non asymptotic inference guarantees, ...
Double Machine Learning (Chernozhukov 2018)




### Properties of the OLS Interpolator
Ordinary Least Squares (OLS) estimator for linear regression


### Geometries of the M-estimation
Learning a model parameter via optimization
arg min the model and parameters $\theta$, can throw in regularizers $\lambda$
LASSO estimator
- Sparsistency?




