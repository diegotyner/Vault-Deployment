---
created:
  - " 06-09-2024 15:00"
tags:
  - Resource
  - Method
Method-For: Data Processing
aliases:
  - Normalization
  - Standardization
---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```



[Medium Standardization](https://medium.com/@WojtekFulmyk/standardizing-data-for-machine-learning-2cf687e621f9)
[Medium Normalization](https://medium.com/@WojtekFulmyk/normalizing-data-for-machine-learning-27aa69988772)

# 📗 -> Normalization and Standardization

![[Normalization_vs_Standardization.avif]]
## ❗ Information
Both are key elements of [[Data-Processing]].

| Normalization                                                  | Standardization                                                                    |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| This method scales the model using minimum and maximum values. | This method scales the model using the mean and standard deviation.                |
| When features are on various scales, it is functional.         | When a variable's mean and standard deviation are both set to 0, it is beneficial. |
| Values on the scale fall between [0, 1] and [-1, 1].           | Values on a scale are not constrained to a particular range.                       |
| Additionally known as scaling normalization.                   | This process is called Z-score normalization.                                      |
| When the feature distribution is unclear, it is helpful.       | When the feature distribution is consistent, it is helpful.                        |

## 📄 -> Methodology 
### Normalization
Data Normalization fits data between 0 and 1, transforming the dataset into a common scale. Its goal is to eliminate the potential biases and distortions caused by different scales of features. 
Rescales each feature to a common range, making them directly comparable.
*Methods*:
- Min-max scaling
	- Will scale data proportionally on a 0-1 interval
- Z-score standardization (this is the one Scikit uses)
- Log transformation
- Quantile Normalization
$$x_{norm} = \frac{x-x_{min}}{x_{max} - x_{min}} \;\;\;\;\;\;\;\; \xleftarrow{}  \text{ Min-max Scaling}$$
- `from sklearn.preprocessing import minmax_scale`

### Standardization
Rescaling data to have zero mean and unit variance (like a z-score)
Two main benefits:
- Mitigates outliers skewing the distribution
- Allowing direct comparison of model coefficients. Creates a standardized scale..
$$z_{score} = \frac{x-\mu}{sd}$$
- `from sklearn.preprocessing import StandardScaler`

## ✒️ -> Usage
Its use is critical in the processing of data. This can help a ML model to make better inference, or to make data easier to create inference from (data science).
### Standardization Comments:
> Standardization is more commonly used for machine learning algorithms like linear regression that assume a normal distribution. If you are using neural networks, you should consider normalization since standardization maintains differences in the original distribution, and normalization distorts them.

> Some advanced ML models are become more powerful, and they are getting better at learning directly from raw unmodified data. These models can automatically identify patterns in the raw data distribution, reducing the need for explicit pre-processing steps like standardization.

### Normalization Comments:
Normalization also aids convergence during gradient descent. 
> Normalization helps rescale the gradients to be more uniform, improving convergence. 

> Consider normalizing only on the training data to avoid test data going out of bounds — Fitting the min-max bounds only on training data prevents test set outliers from getting clipped during normalization.

Works well for sigmoid activation functions (already expecting 0-1 inputs)

> May not help models that are scale-invariant like linear regression — Linear models don’t require normalization since adding a constant input bias term absorbs any offsets in scale.




## 🧪-> Example
- Define examples where it can be used

## 🔗 -> Related Word
- Link all related words

