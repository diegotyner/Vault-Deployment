---
tags:
  - Entry
Entry-For: _Research-Papers
topic: A cuplrit/innocent EEG classifier
created:
  - 11-15-2024 21:21
---

# Analysis of Eyewitness Testimony Using Electroencephalogram Signals

Link to Source: [link](https://ieeexplore.ieee.org/abstract/document/9630054/)
- Presented at a conference, November 2021
---

### Quick Summary:
- Methodology: 
	- They showed participants a short crime scene video, then later showed them a line up and asked them to identify the culprit
	- The recorded EEG data from the participants response to the faces was used to train a SVM model
	- Feature selection:
		- Bands: theta, alpha, beta 
		- ERPs: P100, N170, P300, P200
		- Divided epochs into 0.25s segments with an overlap of 0.125s (to give context)
		- ANOVA used to select highest ranked features
- Findings: 
	- They were able to get a surprisingly good accuracy, 0.864
	- However, they only use correctly identified trials and it was effectively a binary classification problem (is this the neural signature of a person correctly recognizing an innocent suspect, or correctly recognizing a guilty criminal?)
		- This simplifies the problem significantly, and doesn't address issues of incorrect recognition
### Takeaway:
- The entire study is relevant really. It's what we're aiming to do. Take the time to really read through it! 
- There is a difference between ERPs for research, and ERPs for BCI classification (research can afford to be noisy and average it away, we can't). Important to find important discriminating features. 

---

### Scratch Notes:
### Abstract
Using EEG markers to attempt to identify faces.
Creates a study design to discriminate culprit and innocent faces from witness recordings.
Feature Extraction:
- Time Domain and Frequency domain characteristics of single trials
	- This means that they transform from time-voltage (raw recording) to time-frequency.  
Classification:
- SVM

### Section I: Introduction
#### EEG High Level Overview:
- Potential to be used to measure latent variables directly, like stress, mood, and mental workload
- Also useful in creating BCI
- Unfortunately, it has a low signal-to-noise ratio (SNR) 
	- Addressed in studies by performing *time locked averages* in hopes that noise will average out. Cool example of that below (Fig 1.4 from Prof. Luck's ERP Handbook)  
![[ERP-Subtracted-Signals.png]]
- BCI issues with low SNR
	- BCI rely on complicated signal processing methods instead. Hoping to extract task related components
		- ICA?
		- ANOVA?
	- There is also high inter-subject variability, BCI's often need to do off-line calibration 
- In this paper, they:
	- Follow the typical BCI Pipeline to select the most relevant features of EEG signals
		- Feature Extraction
		- Feature Ranking
			- Univariate test (ANOVA) used to select best features
		- Classification
			- SMVs, linear and non-linear attempted
	- This methodology repeated for each participant, and the most frequent features were studied

### Section II: Materials and Methods
Processing steps were performed at an intra-participant level [Referenced Paper](https://iopscience.iop.org/article/10.1088/1741-2552/aab2f2/pdf)
#### Dataset
Taken from P.Bem-Haja's experiment here: [Psychophysiology of Eyewitness Testimony](https://ria.ua.pt/bitstream/10773/22797/1/Tese.pdf) 
28 participants, 8 trials
- In a trial:
	- A theft videos of 20 secs displayed in which the culprit is presented to the witness 
	- EEG recorded while participants see grayscale videos of faces, 5 distractors and 1 culprit. 
	- The lineup presented 10 times in random order. Face displayed for 1.5 secs.
	- Each participant asked to classify each as culprit or distractor.
- Recording
	- 32 electrodes on a ANT cap according to 10-20 system
	- Sampled at 2048 Hz
#### Preprocessing
- EEG down sampled to 512 Hz
	- zero-phase filtering strategy?
- Epoched around face presentation, from -0.5-3 seconds
- Trials discarded if participant didn't answer or gave multiple answers
- Trials split among the 4 classes (hit, false alarm, rejection, miss)

#### Feature Extraction
"Two different types of signal characteristics can be extracted from brain signals"
- Frequency related features
	- Describe energy in frequency bands
- Time related features
	- Describe stimulus ERPs
Used MATLAB tools, specifically EEGLAB
##### Frequency Domain
Selected three bands:
- theta, alpha, beta

*Theta*: Associated with these mental operations:
- Attention
- Learning
- Memory 
*Beta*: Active, busy, anxious thinking
*Alpha*: There is assymetry of the alpha waves involving emotion and motivation ([Source Referenced](https://www.sciencedirect.com/science/article/pii/S016787601630784X))

Used spectogram methodology for each single trial signal.
- Divide into 0.25s segments with an overlap of 0.125s
- 27 subsegments obtained
> The frequency analysis of each sub-segment, multiplied by a Hamming window, is calculated for the range, (30)Hz with a resolution of 0.1Hz.
> - Cites the Physiology Paper as evidence

Processed signal and calculated energy in the 3 bands selected.
> The energy in theta, alpha and beta band were calculated adding the energy of the energy values belonging to the [4], (8)Hz, [8], (13)Hz and [13], (30)Hz respectively.

##### Time Domain
Analyzed in the domain to see data from time perspective
- Mapping peaks

> These peaks are enhanced and visible in epoch-averaged signals and are called Event Related Potentials (ERPs) 

The most important ERPs for this (face recognition) will likely be:
- P100: Invoked on any visual evoked potential
- N170: Associated with visual processing of stimuli
- P300: Occurrence of rare events
- Authors also cite the P200 in facial recognition: [paper](https://www.sciencedirect.com/science/article/pii/S0168010203001214)

To generalize, they use an *infinite impulse response (IIR) filter*. 
- Straight up gobeldygook:
> 	- The 4th order IIR filter was passband filter between 2 and 12 Hz designed using the Butterworth approach. 

All the EEG channels were considered with amplitude, and latency of the ERP components

#### Feature Vectors
The extraction methods produce 2 seperate feature vectors:
1) *Frequency*: 3x27x30 (3 freq bands x 27 time intervals x 30 channels)
	- 2430 features per trial
2) *Time*: 4x4x40 (4 amplitude x 4 latency values for each ERP x 30 channels)
	- 240 features per trial

#### Dataset balancing
> The present dataset is unbalanced with only 10% of the answers provided were wrong and the experiment itself consisted in 5 distractor face for each culprit and this problem usually affects the behavior of machine learning models. Because of that, this study proceeded with only the correctly identified trials and therefore it is a **binary classification problem**.

To balance the data, they reduced the number of trials with distractors to match the number of culprit trials.
- Priority given to earlier trials, as they had more attention

#### Classification pipeline
Used scikit-learn
1. Feature Ranking:
	- Ranked all features using ANOVA
	- Uses an f-test and makes a decision as to whether there is a difference among sample means of groups
2. Normalization
	- Z-score scaling, removes the mean and unit-scales features
	- "The normalization parameters (mean and standard deviation) were calculated in the training set and applied also in the test sets"
		- Does this make sense?
		- Definitely need to scale the data in the cross-validation set, but is this how to go about it?
3. SVM Classification
	- Either classify in:
		- Input space (linear kernel)
		- Mapped feature space (RBF kernel)
			- Radial basis function kernel
*Could experiment with some other kernel*
4. Cross-Validation
	- All models evaluated at a participant level by cross validation (k=5)

### Results
After ANOVA ranking, they chose 100 frequency features (out of 2430) and 50 time features (out of 240)

#### Feature Analysis
They used the following electrodes:
- *Frontal region*: Fp1, Fp2, Fpz, F1, F3, F2, F4, Fz, FC5, FC1, FC2 and FC6.
- *Parietal region*: Cz, C3, C4, CP1, CP2, CP5, CP6, Pz, P3, P4, P7 and P8.
- *Temporal region*: T7 and T8.
- *Occipital region*: POz, O1, O2 and Oz.
##### Frequency:
The beta band was the dominant band, then theta, then alpha. 
##### Time Domain:
Amplitude was more informational than latency, and the P100 was 


## Follow Up Reading:
[Sci-kit learn](https://www.jmlr.org/papers/volume12/pedregosa11a/pedregosa11a.pdf?ref=https:/)
[Review of classification algos for EEG](https://iopscience.iop.org/article/10.1088/1741-2552/aab2f2/pdf)
[10 Year Review of BCI]
[ANOVA?](https://journals.lww.com/aoca/_layouts/15/oaks.journals/downloadpdf.aspx?an=00660469-201922040-00011)
[Data mining?](https://link.springer.com/content/pdf/10.1007/s10115-007-0114-2.pdf)


## Questions About Reading

1. What exactly happening with intraparticipant processing?
	1. What diff person to person. ANOVA?
2. Frequency sampling?
	1. Should we be worried about our sampling rate compared to theirs? 
	2. HOW (concretely) will the data be different?
	3. Should we still implement filtering?
3. What is a Hamming window? 
> 	1. The frequency analysis of each sub-segment, multiplied by a Hamming window, is calculated for the range [4], (30)Hz with a resolution of 0.1Hz
4. What is an infinite impulse response (IIR) filter?
	1. And a butterworth approach?
5. Adding a CNN to find short range effects in our data?
6. Experiment with frequency bins (personal alpha calibaration IAF?)
7. Experiment with epoch/bin size/length
8. What does 10 times mean?
> 	1. The lineup of six images includes five distractors and a culpit, in random order, were presented 10 times for each participant.
9. 
