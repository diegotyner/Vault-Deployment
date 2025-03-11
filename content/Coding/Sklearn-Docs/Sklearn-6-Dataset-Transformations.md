---
created:
  - " 06-09-2024 23:51"
tags:
  - Entry
Entry-For: Sklearn
Entry-Number: "6"
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

### Connections:
- This entry has heavy ties to [[Data-Processing]]. 
- A method mentioned here is [[Dimensionality-Reduction|Dimensionality Reduction]]


# 6.5 Unsupervised Dimensionality Reduction
### ✒️ -> Usage:
It can be helpful when number of features is high. This can make the data more manageable. 

## 6.5.1 - PCA: Principal Component Analysis
`decomposition.PCA` - Looks for a linear combination of features that captures as much variance as possible

## 6.5.2 - Random Projections
No clue. 
More expanded on in 6.6

## 6.5.3 - Feature agglomeration
Applies Hierarchical clustering to group together features that behave similarly.

> [!tip] Feature scaling
> Note that if features have very different scaling or statistical properties, cluster.FeatureAgglomeration may not be able to capture the links between related features. Using a preprocessing.StandardScaler can be useful in these settings.













