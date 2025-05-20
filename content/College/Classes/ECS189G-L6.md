---
created:
  - " 05-06-2025 14:39"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  05/06/25: ECS189G-L6
---
[Project Slides](https://drive.google.com/file/d/1kabiuIWWLQHeI9t0eP67ZxgtzDApgY58/view)

## 🎤 Vocab



## ❗ Unit and Larger Context
This class has 5 stages:
1) DL Background 
2) DL Prelims
3) DL for Image
4) DL for Test
5) DL for graph




## ✒️ -> Scratch Notes
### Project Code Architecture
- Data Loading (from files or DB)
- Method Running (based on loaded data)
- Result Evaluation (based on output from methods)
- Result Saving (output from Method/Evaluation)
- Experiment Setting (data input route, method type, evaluation metric, output route, data flow, parameter setting, train/test partition, etc.)
![[ECS189G-Project-Architecture.png|400]]


#### Writing Code
##### Classes
- dataset (base class) -> DatasetLoader (concrete class for loading data)
- method (base class) -> MethodSVM (concrete class for running SVM model)
- result (base class) -> Result (concrete class for result saving)
- evaluate (base class) -> EvaluationAccuracy (concrete class for Accuracy metric)
- setting (base class) -> SettingCV (concrete class for k-fold Cross Validation)
#### Read the examples he provides
*He goes over how to inherit, properly link classes together, and pass data*

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
