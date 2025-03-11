---
created:
  - " 06-09-2024 16:09"
tags:
  - Resource
  - Method
Method-For: Data Processing
aliases:
  - Ordinal Encoding
---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```


[Medium Article](https://medium.com/@WojtekFulmyk/ordinal-encoding-a-brief-explanation-a29cf374dbc1)

# 📗 -> Ordinal Encoding


## ❗ Information
A method for processing categorical data. 

Ordinal means having an ordering. Smallest->Medium-> Largest.


## 📄 -> Methodology 
- Encodes categorical data into numeric forms.
- Retains the ordinal information between categories (not true of one-hot encoding, categories have no relation to one another)

## ✒️ -> Usage
> The integers used should evenly space categories. If gaps are left, some models may incorrectly infer closeness between categories. 
> Ordinal encoding works well for categories with a small number of values, but can become cumbersome if many categories exist.

- `from sklearn.preprocessing import OrdinalEncoder`

## 🧪-> Example
- Define examples where it can be used

## 🔗 -> Related Word
- Link all related words

