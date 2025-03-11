---
created:
  - " 10-03-2024 16:10"
tags:
  - Entry
Entry-For: College-Talks
topic: Risk Assessment in ML
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> 10/3/24: Risk Assessment For ML Models
## 📷 -> Pics


![[Risk-Assessment-ML-1.jpg]]
![[Risk-Assessment-ML-2.jpg]]
![[Risk-Assessment-ML-3.jpg]]


## ❗ Information
### Details
[Talk Page](https://statistics.sf.ucdavis.edu/events/seminar-100324-berger)
Michael Berger - Head of Insure AI at Munich RE

### Abstract 
Machine learning (ML) and Artificial Intelligence (AI) are increasingly used across many industries. However, their uptake in safety-critical areas such as healthcare and finance has been slower due to concerns about model failures and the associated risks. To address these challenges and foster trust in AI, Munich Re, a global leader in reinsurance and insurance, has developed specialized insurance solutions to help companies manage the risks of AI adoption. Central to these solutions is the ability to quantify uncertainty in ML model performance. Leveraging recent advances in statistical methods, including conformal prediction, Munich Re’s researchers have designed flexible and accurate risk assessment tools for black-box ML models. This presentation will explore these methods, their theoretical foundations, and their performance in real-world applications, particularly under both exchangeable and covariate-shift data conditions.



## ✒️ -> Scratch Notes
### Munich RE Insuring AI
Need to quantify risk with ai, work with ai providers to accomplish this
1) Battery Health Prediction
2) PV Plant Predictive Maintenance
3) E-Commerce Fraud
Goal is not to minimize, but to find an EV of payouts thats acceptable. Make smart promises to customers.


### Defining under performance for regression:
Real Value = Prediction +- Promised Error
EV Claims Cost = Claim Frequency x Claim Severity
CF = # of model underperformance
= number of times model used x prob of under performance

> [!hint] Goals
> - Don't under estimate failure probability
> - Estimate accurately

Lots of similarities to a confidence interval


Conformal Prediction?


## 🔗 -> Related Word
- Link all related words

