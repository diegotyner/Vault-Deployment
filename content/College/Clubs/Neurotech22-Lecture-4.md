---
created:
  - " 10-07-2024 22:45"
tags:
  - Entry
Entry-For: Neurotech
topic: ML and Neurotech
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> Week 3/Lecture 4: A brief overview of ML and it's application to neurotech
---
[Lecture Slides](https://docs.google.com/presentation/d/18TwQ2-0OkSHsL-0SgGDO4xlXNGKZF5oNtTwH4CidQYA/edit#slide=id.g18edac2b824_0_86)
## 🎤 Vocab
**ReLU** - Rectifier, or ReLU (rectified linear unit) activation function
**RNN** - Recurrent neural networks
## ❗ Information
Small summary

## ✒️ -> Scratch Notes
> Machine learning is a computer model that is able to learn by itself and is loosely defined by computer models using very large data sets in order to learn

ReLU: $f(x) = max(0,x)$
- Introduces non-linearity to the network
- Efficient representation (neurons tend to be inactive)
- Simple and fast

### Major ML Ideas:
- Dataset - Model needs to have data fed in to learn
- Features / Hyperparameters - Specific tunings of a model
- Model - The learner, different models are good at learning different things
	- Classifiers 
	- Regression
	- Reinforcement Models

Training, Testing, Validation
- Training data model learns from
- Testing data used to evaluate model
- Validations is the final stage of the process and is kept separate from the rest of the data
Usually split 80-10-10


### Gradient Descent:
Learning rate - refers to the rate at which the network "learns"
- Closely related to the error function because it refers to the rate at which is it minimized


### Overfitting and Underfitting
**Overfitting** - Giving a model too much data, so that it can't generalize to new examples
**Underfitting** - Not having enough data to make accurate predictions

### Applications: Recurrent Neural Networks
- RNNs are models that are very well suited to time series data
- EEG data is time series, so its a good fit

### Building an EEG Classifier
> You can build a classifier without machine learning, through linear discriminant analysis

A very common way to use and classify EEG data is through a neural network, which we feed data so that it can classify different brain waves
- Both supervised and unsupervised models are popular for this


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- [[_ML-Study]]
- [[Neural-Networks]]
