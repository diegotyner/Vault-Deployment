---
created:
  - " 10-30-2024 20:09"
tags:
  - Entry
Entry-For: Neurotech
topic: BCI Pipeline
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

[Continue from last lecture](https://docs.google.com/presentation/d/1PTaCepbUOcIZE35b3RlFX2x5WnokXllAMdpYRoEgCdM/edit#slide=id.g2776b774f61_0_94)
[BCI Pipeline](https://docs.google.com/presentation/d/12ikL4ewMeSSkOsXGNtcD04cCGobWYT13Qb7zdeWUKN0/edit#slide=id.g31020784f35_0_0)

# 📗 -> 10/30: Data Processing Continued and BCI pipeline
## 🎤 Vocab
Word is **Sour Patch**

## ❗ Information
Small summary

## ✒️ -> Scratch Notes
Continue from last lecture, covering the discussions
#### Cleaning data
Get data online -> weird parts of the data, null, or not in format

### Model Evaluation
Not just looking at accuracy, evaluate the 'fittingness' of errors. Might want to minimize false positives for some applications, like a medical alert

#### Splitting data
Tr - Training
Te - Test
V - Validation

Don't want to overfit the test data either, so we want to hide the validation dataset well. 
Like tuning performance on midterms, but needing to do well on a final as well. Can't just spam the midterm prep
![[Model-Evaluation.png|600]]


### Model Improvement
> Based on the evaluation results, adjust hyperparameters, try different algorithms, or enhance feature extraction to improve performance. Sometimes you need to start from scratch and go all the way back to cleaning your data.

Could be learning rate, etc.


### Onto BCI Pipeline
#### Agenda:
- Key Terms
- Steps in our BCI Pipeline
- Example: Robotic Arm
- Next Steps for Joining

**Brain Computer Interface (BCI)** - A project that incorporates brain signals in performing a task or predicting a result

Connectors - Map I/O
![[BCI-Pipeline-Steps.png|400]]


### Robotic Arm Project
1) Collect training data
2) Connecting inputs/outputs
3) Additional Hardware

#### Collection
Background:
- Mirror neurons fire when you visualize or observe a movement
Rerecord data to see if similar patterns are observed
> In reality, used Emotivs headset which is a black box. Don't know how they decoded the eeg data or what ML models / algos they used

### Arm
Arm was 3D printed, constructed from STL files, servo motors, and fishing lines to grip


### Data Reduction
Data reduction: Obtain a reduced representation of the data set that is much smaller in volume but yet produces the same (or almost the same) analytical results
- Ex: dimensionality reduction

#### Dimensions
Multiple channels gives EEG data several intrinsic dimensions
 - Spatial, frequency, phase, power, time-frequency 

#### Reduction
LDA - Find line of best fit with LSR, then fit data to that line. 
![[LDA - Visualization.png|400]]

### Pipeline Specific:
#### Data Reduction

#### Dimensionality Reduction
LDA, PCA

#### Feature Extraction
FFT, wavelet transform, time-frequency analysis

#### Classification 
SVM, CNN, k-NN



## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

