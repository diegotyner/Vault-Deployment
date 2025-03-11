---
created:
  - " 06-09-2024 16:49"
tags:
  - Resource
  - Method
Method-For: Data Processing
---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```

[Medium Article](https://medium.com/@WojtekFulmyk/handling-missing-values-in-dataset-preprocessing-8f7f5a210f47)

# 📗 -> Missing Values in Dataset Preprocessing


### Vocab To Know:
- **MCAR** (Missing Completely at Random) — Data is missing in a way that is unrelated to the observed or unobserved data.
- **MAR** (Missing at Random) — Data is missing in a way that is related to the observed data but not the unobserved data.
- **MNAR** (Missing Not at Random) — Data is missing in a way that is related to the unobserved data.
- **Imputation** — Replacing missing values with predicted values.

## ❗ Information
Every dataset is going to have some sort of missing values, so it's important to address this. 


## 📄 -> How to address for each missing pattern
### MCAR
- **Deletion:** Very easy to implement, but loses information and can introduce bias
- **Mean Imputation:** Replacing missing continuous values with the mean of that feature. Can introduce bias

### MAR
- **Regression Imputation:** Training a regression model on samples, and estimating missing values.
> Stochastic regression can be used to add randomness to predictions and avoid overfitting a single value. Multivariate regressions can model linear relationships between multiple features.

- **Hot Deck Imputation:** Replace missing values with observed values from similar records. Similar to KNN.

### MNAR
- **Multiple Imputation:** Generate possible values multiple times with randomness, and average out the results at the end.
> Multiple imputation is a technique that generates multiple imputed values for each missing entry. It involves training a model on complete data and using it to impute missing values, creating multiple imputed versions of the data set. Model training and prediction occur on each imputed set, and the results are averaged to obtain final predictions, accounting for imputation uncertainty. Multiple imputation provides a principled statistical approach but increases computational expense.

- **Expectation-Maximization (EM):** An iterative algorithm that aims to maximize the likelihood of the observed data, algorithm consists of:
	- Expectation Step: Compute the EV of the missing data given observed data and current prediction model
	- Maximization Step: Updates the estimates of the model given the EV of the missing data
> EM can handle various types of data and models but may require careful initialization and convergence monitoring.



## ✒️ -> Usage
Mean Imputation:
```python
df.fillna(df.mean(), inplace=True) 
```


Hot-deck Imputation:
```python
for col in df.columns:
    for i, val in enumerate(df[col]):
        if pd.isna(val):
            df.at[i, col] = df[col].dropna().sample().iloc[0]
```


## 🧪-> Example
- Define examples where it can be used

## 🔗 -> Related Word
- Link all related words

