
> What python libraries does Projects use for EEG signal preprocessing? (hint: more than one)
```
PsychoPy
X - MNE
X - OpenBCI
Brainflow
```

> Which is not a step in signal processing? 
```
Feature Extraction
Classification
X -Data Acquisition
Preprocessing Raw Data
```

> If you wanted to observe if a person was relaxed or had their eyes closed, what frequency would you look at?
```
Delta (δ) Waves (0.5 - 4 Hz)
X - Theta (θ) Waves (4 - 8 Hz)
Alpha (α) Waves (8 - 13 Hz)
Beta (β) Waves (13 - 30 Hz)
```

> Which data splitting ratio is not commonly used for classification? 
```
80-10-10
70-15-15
X - 90-5-5
60-20-20
```

> Which classifier (ML Model) makes a prediction by identifying the closest data points to an input?
```
Support Vector Machine - SVM
Convolutional Neural Network - CNN
Decision Tree - Random Forest
X - Nearest Neighbors - KNN
```


> What is the purpose of feature extraction in EEG data analysis?
```
Feature extraction helps to extract useful components of the data so that our classifier is better equipped to make an accurate identification. By reducing data complexity and isolating discriminating characteristics, feature extraction helps our model to focus on relevant information. For example, to classify a person's relaxation level, we could create a band power feature that reflects the presence of alpha waves in the EEG signal, which are associated with relaxed states.
```


> In your own words, explain what it means for a classifier (ML Model) to "learn" from data. How does it know what is right and what is wrong?
```
It knows what is right and wrong from the training data, and uses that to adjust its weight to make its classifications as accurate as possible. This process on the ML model, with classifiers like KNN learning by having more data points to reference, SVM learning by adjusting its classifying vectors, and deep learning models using backpropagation to adjust neuron weights. 
```


> If your classifier's accuracy level is below what you want, what adjustments can you make to increase performance? Don't just name an adjustment, explain how it works!
```
There are a number of adjustments you could make to possibly improve performance:
You could make sure that your feature extraction methods are appropriate. Inappropriate feature extraction methods can hinder model performance, like making a categorical variable numeric and having that introduce bias into the data.
Alternatively, you could tune the hyperparameters of the model and see if that improves performance. This can be done by making adjustments to parameters like learning rate, or penalizations like regularizers and seeing how this affects performance on test and validation data.
If all else fails, you could choose a different classifier model, or even go back and collect better data if that was the root of the issue. 
```


> Extra Credit:
> Draw a BCI Pipeline
> Pick any type of BCI and draw its BCI pipeline include labeled arrows and mini drawings with captions to explain each step. Any fun BCI ideas are welcome! :)
> Note: Can be rough sketches/color not needed 
> Hint: some BCI projects are using EEG signals how can you make a light turn on, make a car move in a certain direction, or perform an action in a virtual game
```

```


> Extra Credit:
> Choose one feature extraction technique we talked about and describe how it works
```
An important feature extraction technique is PCA, which is a dimensionality reduction technique that constructs a basis set of principal components that captures a maximum amount of variance in a data set. The effect of this on data is that a dataset is compressed into its most features, which can be beneficial for reducing the quantity of data, as well as removing uninformative noise.
```