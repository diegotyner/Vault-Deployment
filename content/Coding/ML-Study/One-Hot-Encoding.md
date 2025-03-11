---
created:
  - " 06-09-2024 15:48"
tags:
  - Resource
  - Method
Method-For: Data Processing
aliases:
  - One-Hot Encoding
---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```



[Medium Article](https://medium.com/@WojtekFulmyk/one-hot-encoding-a-brief-explanation-8c5daec395e3)
# 📗 -> One-Hot Encoding


## ❗ Information
A [[Data-Processing]] method.

> One-hot encoding is a common preprocessing technique used when working with categorical data in machine learning.

It serves to:
- Convert categorical values into processable numeric vectors
- Captures uniqueness of categories


## 📄 -> Methodology 
When processing the three primary colors:
- “red” becomes \[1, 0, 0], “green” is \[0, 1, 0], and “blue” is \[0, 0, 1].> 
It will create a new column for each distinct category. 
## ✒️ -> Usage
- Might not be great if there are a large number of distinct categories. 
	- It creates a new column for each distinct one. Number of features can grow quite large.
- It categorical has a logical ordering (disagree, neutral, agree) [[Ordinal-Encoding]] is an alternative that maps to integers rather than binaries.

- `from sklearn.preprocessing import OneHotEncoder`

## 🧪-> Example
- Define examples where it can be used

## 🔗 -> Related Word
- Link all related words

