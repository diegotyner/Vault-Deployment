---
created:
  - " 06-09-2024 19:04"
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

[Medium Article](https://medium.com/@WojtekFulmyk/outlier-detection-in-data-preprocessing-4fde42c8a19b)



## 🎤 Vocab
- **Skewing ML analysis** — Distorting machine learning model performance and accuracy.
- **Isolation forest** — Algorithm isolating anomalies by randomly partitioning data.
- **Autoencoder** — Neural network compressing and reconstructing data to find anomalies.


## ❗ Information
Outlier detection is key to prevent data from getting biased or skewed. 
> Outliers can be abnormal data points, fraudulent transactions, faulty sensor readings, etc. Detecting outliers is important for data cleaning so as to avoid skewing ML analysis.



## 📄 -> Methodology 
Different methods and detection criteria exist
### Statistical
- *Z-score*: Measures SD away from mean on standardized data
- *IQR / Quantile Range:*
$$ 
\displaylines{
Outlier > (1.5 * IQR)\; +\; Q_3  \\ 
Outlier < (1.5 * IQR)\; - \; Q_1 
}
$$
### ML:
- *Isolation Forests:* Isolate anomalies. They build decision trees that partition data recursively, thus isolating outliers quicker, and with fewer partitions
- *One-class SVMs:* Learn a boundary around normal data points. Samples outside are flagged as anomalies. 
- *Autoencoders:* Learn compressed representations of data. If they cannot be reconstructed well (high error), they have potential to be outliers. 

## ✒️ -> Usage
- An EllipticEnvelope estimator is effective on Gaussian data:
	- `from sklearn.covariance import EllipticEnvelope`

## 🧪-> Example
- Define examples where it can be used

## 🔗 -> Related Word
- Link all related words

