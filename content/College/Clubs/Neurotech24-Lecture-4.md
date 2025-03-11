---
created:
  - " 10-29-2024 20:08"
tags:
  - Entry
Entry-For: Neurotech
topic: Signal Processing
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

[Link](https://docs.google.com/presentation/d/1PTaCepbUOcIZE35b3RlFX2x5WnokXllAMdpYRoEgCdM/edit)
# 📗 -> 10/29/24: Signal Processing
## 🎤 Vocab
**Dumbass pumpkin**

## ❗ Information
### Pipeline
Steps:
1) Preprocessing
2) Feature Extraction
3) Classification
	- Recognizing patterns in the data (can be ML)


### Importance of Processing
- Noise Reduction and Artifact Removal
- Enhancing Signal-to-Noise Ratio
	- Signal is weak compared to the noise surrounding it (muscles, etc.)
- Feature Extraction
- Frequency and Time-Frequency Analysis
- Classification and Pattern Recognition

Preprocessing: removes noise and enhances the signal of interest from the raw EEG data

#### Libs
MNE (Python)
- MNE (Magnetoencephalography and Electroencephalography)
Brainflow (Python)

### Critical Processing 
- Filtering: High-pass, low-pass, and notch filters to remove noise.
	- On signal itself, not yet decomposing with Fourier
- Artifact Removal: 
	- Independent Component Analysis (ICA): Creates components of data 
	- Principal Component Analysis (PCA): Creates lower dimensional set of data. Hopes to remove irrelevant information
- Epoching: Time based epoching & Stimulation based epoching.
	- Creating windows on the data
- Baseline Correction: Removing global drift.

### Frequency Analysis
Time Domain -> Frequency Domain
FFT / Short-Time Fourier Transform (STFT) / Wavelet Transform / Power Spectral Density (PSD) estimation

### Feature Extraction
> Feature extraction is a process in which meaningful and informative attributes or features are derived from raw data. 
> 
> These extracted features serve as inputs for further analysis, classification, and interpretation.

Benefits:
- Dimensionality Reduction
- Information Compression
- Machine learning
- Statistical Significance
- Discriminating Characteristics

Different Types of Features:
- Time-Domain Features
	- Mean, Variance
	- Hjorth Parameters
		- Three measures of a signal:
			- Activity (variance of signal)
			- Mobility (ratio of SD of signals first derivative to the OG signal)
			- Complexity (comparison of signals first and second derivatives, reflecting signal irregularity)
	- Peak-to-Peak Amplitude
		- Difference between highest (peak) and lowest (trough) amplitude values in a time window
	- Zero-Crossing Rate
- Frequency-Domain Features
	- Band Power
	- Peak Frequency
	- Spectral Entropy
		- A measure of the randomness or complexity of the signal's frequency spectrum.

Types of Feature Extraction
- *Manual* feature extraction involves selecting and calculating features from data based on human expertise and domain knowledge. These features are often interpretable and tailored to specific research questions.
- *Automatic* feature extraction employs algorithms to derive features from data without human intervention. These algorithms learn from the data and capture complex patterns that might not be immediately apparent to humans.

### Classification
1) Preparing Data
2) Choosing a Classifier
3) Model Training
4) Model Evaluation
5) Fine-Tuning

#### Types of Classifiers
- Linear classifiers - LDA, SVM
- Neural network classifiers - CNN
- Decision Trees - Random Forest
- Nearest neighbor classifiers - KNN
**SVMs** - Are popular in BCI applications, especially for binary and multiclass classification tasks, like differentiating between mental states or motor imagery (imagined movement).
- A discriminating 'line'

**k-Nearest Neighbors** - Finds the 'nearest' data points. However, very sensitive to dimensionality and slow when deployed on large data sets

#### Training
- Learning from the data, refining its mapping from inputs to outputs


## ✒️ -> Scratch Notes
- Log as you go through entry

## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

