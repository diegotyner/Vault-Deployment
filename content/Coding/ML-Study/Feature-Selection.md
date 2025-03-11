---
created:
  - " 06-09-2024 19:32"
tags:
  - Resource
  - Method
Method-For: Data Processing
---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```


# 📗 -> Insert word
[Medium Article](https://medium.com/@WojtekFulmyk/feature-selection-in-data-preprocessing-421d5b527005)


## ❗ Information
> Feature selection is an important step in machine learning pipelines. It refers to selecting the most relevant features to use for model training. Reducing the number of features can simplify models, shorten training times, improve accuracy, and prevent overfitting.

## 📄 -> Methodology 
### Filter Methods
A strategy to remove features based on data
*Variance Threshold:* Remove low variance features (don't provide much info)
*ANOVA:* Identify features that show correlation
*Information Theory: Mutual Information:* Measure predictive power of each feature



*Pearson Correlation:* Measures linear relationship between feature x and target y. Higher r means stronger linear correlation.
$$r = \sum \frac{(x-\bar{x}) * (y-\bar{y})}{\sigma_y} $$
*ANOVA F-test:* Compares variance between group means to variance within groups. Higher F means group means are farther apart compared to variance within groups. 
$$F = \frac{\text{Variance between groups means}}{\text{Variance within groups}} $$
*Mutual Information:* between x and y quantifies dependence. Higher MI means x and y are more closely dependent.

$$MI = \sum P(x\cap y)*log(P(x\cap y))-\sum x*log(P(x)) - \sum y*log(P(y))  $$


### Wrapper Methods
Select features by testing different combinations.

*Exhaustive Search:* Brute force search of subset of features. Guarantees optimal combination, but very time consuming
*Backward elimination:* Starts with all features and removes them one by one
*Forward Selection:* Greedily adds features that improve model accuracy
> Example: Starting with no features, add A alone and test if it increases model accuracy. If so, keep A. Then add B to A and test if accuracy increases more. If so, keep A and B. Continue adding each remaining feature one by one, keeping those that improve the model, until no single addition improves accuracy. This provides the optimal subset efficiently, but does not re-evaluate previous selections.

*Genetic Algorithm:* Evolve populations of feature subsets toward an optimal solution. 

### Embedded Methods:
Learn the usefulness of features during model training. Tend to be efficient.  
**LASSO regression:** Adds up the absolute sizes of the coefficients as a penalty
$$min(Err+\alpha*\sum|\beta| \;\;\;\; \text{where }\beta \text{ is each coefficient } $$
> LASSO regression predicts house prices based on features like number of bedrooms, size, location etc. The alpha parameter controls the penalty strength. With higher alpha, more feature coefficients will be shrunk to zero and removed. For instance, with strong regularization, only number of bedrooms and size may remain, while other features get eliminated.

**Ridge Regression:** Adds up the squared coefficients as a penalty
$$min(Err+\lambda*\sum\beta^2 \;\;\;\; \text{where }\beta \text{ is each coefficient } $$
>Predicting exam scores based on study time, prep course, and student IQ, ridge regression is used. The lambda parameter controls the coefficient penalty strength. With higher lambda, coefficients for less useful features like prep course will be shrunk closer to zero, while important coefficients like study time remain larger. This removes prep course but retains study time and IQ.

## ✒️ -> Usage
*Pearson Correlation:* `from scipy.stats import pearsonr`
*Exhaustive Search:* 
```python
import itertools 
combos = itertools.chain(  
  itertools.combinations(feature_names, 4),  
  itertools.combinations(feature_names, 3),  
  itertools.combinations(feature_names, 2),  
  itertools.combinations(feature_names, 1))  
  
# evaluate feature subsets  
for features in combos:
```
*LASSO:*
```python
from sklearn.linear_model import Lasso

...

lasso = Lasso(alpha=0.04)  
lasso.fit(X_train, y_train)
coefs = lasso.coef_
```


## 🧪-> Example
- Define examples where it can be used

## 🔗 -> Related Word
- Link all related words

