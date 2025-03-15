---
created:
  - " 03-13-2025 15:52"
tags:
  - Entry
Entry-For: College-Talks
topic: Towards Novel Categorical Embedding for Enhanced Data Representation
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# Insert entry name
---

## 🎤 Vocab
**LDA** - Linear Discriminant Analysis 


## ❗ Information
[Link](https://statistics.sf.ucdavis.edu/events/seminar-031325-chen)
### Details
**Speaker: Ting-Li Chen,** Associate Research Fellow, Institute of Statistical Science, Academia Sinica (Taiwan) - visiting UC Davis 2024-2025

**Abstract:** In the era of big data, categorical variables play a critical role across various domains, yet their analysis poses unique challenges due to the lack of a natural numerical representation. Traditional dimension reduction techniques, such as Principal Component Analysis (PCA), are designed for continuous data and cannot be directly applied to categorical variables without significant modifications.    
In this talk, we introduce a novel approach to categorical data embedding that effectively maps categorical variables into a lower-dimensional Euclidean space. Our method extends the conceptual framework of PCA by optimizing the placement of categorical data to minimize predefined measurement errors. Through simulations and real-world applications, we demonstrate that our approach outperforms existing techniques such as Homogeneity Analysis (HOMALS) in preserving meaningful data structures for subsequent analysis. Finally, we discuss an extension of our framework to mixed-type data, enabling simultaneous dimension reduction for datasets containing both categorical and continuous variables.  
  
**Bio:** Ting-Li Chen is an Associate Research Fellow at the Institute of Statistical Science, Academia Sinica, Taiwan. He received his Ph.D. from the Division of Applied Mathematics at Brown University. His research interests include Markov chain Monte Carlo, statistical learning, and high-dimensional data analysis.

**Faculty web-page** (links to Statistica Sinica): [https://www.stat.sinica.edu.tw/eng/index.php?act=researcher_manager&code=view&member=7](https://www.stat.sinica.edu.tw/eng/index.php?act=researcher_manager&code=view&member=7)


## ✒️ -> Scratch Notes
### Towards Novel Categorical Embedding for Enhanced Data Representation
1) Intro
2) Dimensionality reduction for continuous data
3) Categorical data embedding
4) simulations and comparison
5) conclusions and discussion

Categorical representation restricts application of tradiational statistical data
*One approach:* Construct adistance metric. **Gower's messaure**
*Another:* Mapping categorical data into euclidean space
- One hot
- Homogeneity Analysis (HOMALS) 

PCA - find a set of orthonormal basis st the span (V={v1, v2, ...}) XV^t keeps the most variations
Another viewpoint:
- $x_{i,j}$ is the measurement of the subject i based on the j-th feature
- z is the location of subject i in R^k
Eachmeasurement is from a linear feature vj in R^k
- $x_{i,j}=z_iv_j^T+\epsilon$
Minimize i and j to reduce error

SVD:
- $X=U\times S \times V^T$
The best k rank approx is:
- $X\approx U_k \times S_k \times V_k^T$

#### Now for categorical data
- $x_{i,j}$ is the classification label of the subject i based on the j-th feature

Algorithm: (similar to alternating LSR?)
$\frac{1}{N} Z^TZ=I_k$
1) Random initial for each $z_i$
2) each feature $v_j$ is the LDA space to maximize the ratio of the category variation to the within category variation
3) Each category is updated to the average of the projccted locations of the data point belonging ot the category
4) Each data poit is updated the regression coefficient of 
	 - $\mu = Vz_i^T$
 5) Standardize Z
 6) Repear 2-6 until converged
Eventually the data will become heterogenuous, moving way from each other in space like oil and water

#### HOMALS
Idea:
- Eachdata point is represented by a laction in euclidean space R^p

$\frac{1}{N}X^TX=I_k$

Problem with homals:
- With noise, homals doesnt attempt to differentiate the noise. Will work it into its pattern
Proposed:
- Noise -> Somewhat mixes, but keeps it on the outside of cluster. Many can be rejected.

#### Extend to 3D
... 
?

#### Mushroom data set
8123 samples, 20 variables
- poisonous, ring type, habitat, etc.

with KNN:
- somewhat unsuccessfull?
- Mixing between different group.
KNN results:
- Proposed outperforms HOMALS significantly (k=1,3,5,7,9,11)

#### Conclusions 
Proposed a new reduction method
Equivalent to PCA for continuous data
For categorical data, can we restore the underlying data if we have infinite categorical variables?
A better way for optimization with categorical variables?
- Sometimes, its supposed to be a circle, but data can float around the boundaries (maximize variance?)
Extend to nonlinear version


Can also generalize to mixed type dimension reduction









## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```



## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words

