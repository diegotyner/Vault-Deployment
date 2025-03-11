---
created:
  - " 10-13-2024 14:41"
tags:
  - Method
---

---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```
---

# 📗 -> Insert word
## 🎤 Vocab

> [!info] Multicollinearity 
> Multicollinearity denotes when independent variables in a linear regression equation are correlated. Multicollinear variables can negatively affect model predictions on unseen data. Several regularization techniques can detect and fix multicollinearity.

**Independent Variables (IV)** - A variable that stands alone and isnt changed by the other variables you're trying to measure
**Dependent Variable (DV)** - A variable that varies off the input of the IV

**Overfitting** - Models with low training error and high generalization error


## ❗ Information
### Multicollinearity vs Collinearity:
- Collinearity is when two independent variables in a regression analysis are correlated
- Multicolleanrity is when more then two are correlated

- Their opposite is orthogonality, which is when IVs are uncorrelated

It's important to measure and address this, so that you don't overcomplicate models or have [[Overfitting|overfitting]]
- Multicollinear data fails to generalize as well, as they factor variance and noise into the model too much
> Estimated coefficients for multicollinear variables possess a large variability, also known as a large standard error





## 📄 -> Methodology 
### Regression Analysis - [[Regression]]
The standard regression equation is as follows:
$Y = X_0 + B_1 X_1 + B_2 X_2 + \dots + B_nX_n$
- Y is the predicted output (DV) 
- X is the predictor (IV or explantory varaible)
- B is the regression coefficient

To estimate coefficients $B$, we use standard OLS matrix coefficient estimator:
- $B=(X^TX)^{-1}X^Ty$

### Causes of Multicollinearity
Data Collection - If data isn't representative
> For instance, Montgomery et al. supply the example of a supply chain delivery dataset in which order distance and size are independent variables of a predictive model. In the data they provide, order inventory size appears to increase with delivery distance. The solution to this correlation is straightforward: collect and include data samples for short distance deliveries with large inventories, or vice-versa

Model Constraints - The model being fed into the data might already have collinearity, because of the nature of the data itself
> Imagine we are creating a predictive model to measure employee satisfaction in the workplace, with hours worked per week and reported stress being two of several predictors. There may very well be a correlation between these predictors due to the nature of the data—i.e. people who work more will likely report higher stress. 

Over defined Model - This can occur when there are more model predictors than data observation points.
> This issue can arise particularly in biostatistics or other biological studies. Resolving overdefined models requires eliminating select predictors from the model altogether. But how to determine which models to remove? One can conduct a several preliminary studies using subsets of regressors (i.e. predictors) or utilize principal component analysis (PCA) to combine multicollinear variables.

### Data Based Collinearity
Certain data is particularly susceptible, like time series data. Economics data likely fluctuates together for example. 

### Detecting Multicollinearity
Relatively Simple Options:
- Scatter Plot
- Correlation Matrix - Elements of the matrix are the correlation coefficients between each predictor in the model. Higher the absolute value is (ranges from -1 to 1), the more correlation

**Variance Inflation Factor (VIF)** - The most common method for finding multicollinearity. Complicated method, just use a package.
The higher the degree of VIF, the greater degree of multicollinearity. 
> A widely repeated rule of thumb is that a VIF value greater than or equal to ten indicates severe multicollinearity


### Fixing Multicollinearity
> Fixes for multicollinearity range from diversifying or enlarging the sample size of training data to removing parameters altogether

You can also employ [[Regularization|regularization]] techniques to address this
- Ridge regression - Penalizes high value coefficients
- Lasso regression - Similarly penalizes high-value coefficients
> The primary difference between these two is that ridge merely reduces coefficient values to near-zero while lasso can reduce coefficients to zero, effectively removing independent variables from the model altogether.

## ✒️ -> Usage
Both of the following feature high dimensional data which often correlates together
- Finance 
- Criminal Justice

## 🧪-> Example
It's important to measure and address this, so that you don't overcomplicate models or overfit
- You don't want to duplicate data


## 🔗 -> Links
### Resources
- https://www.ibm.com/topics/multicollinearity

### Connections
- [[Regression]]
- [[Overfitting]]
- 

