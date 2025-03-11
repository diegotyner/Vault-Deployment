---
created:
  - " 12-09-2024 16:12"
tags:
  - Entry
Entry-For: College-Talks
topic: Statistical Advanes in Time Frequency Analysis for Digital-Health
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> Statistical Advances in Time Frequency Analysis for Digital-Health: Tackling Signal Quality Challenges
## 🎤 Vocab



## ❗ Information
### Talk
1) Math model
2) Decompose non-sinusoidal oscillatory components (SAMD algorithm)
3) Inference & Uncertainty quantification


## ✒️ -> Scratch Notes
### High frequency in healthcare
- Operation rooms
- ICU
- fMRI
- > Moving to consumer signals and electronic, fit-bit, etc


**Photoplethysmogram (PPG)** - The reflection of light emitting diodes by dermis back into photo detectors
- It will look like a wave, as heartbeats will refresh blood, and blood expires? Dynamics
	- *Hemodynamic features*, PPG(a.u.)

### Signal processing vague pipeline
1) Visualize dynamics & summarize overall behavior
2) Estimate # sources / components & decompose the signal into "proper" components
3) Extract dynamics of each component
4) Learning & predict future
5) Uncertainty quantification

**Adaptive Harmonic Model (AHM)** - 
- General time series observation: oscillation with time varying frequency, time varying amplitude, and trend + noise
> Harmonic function?

However, it has drawbacks. Sharp peaks hard to model with cosine. 

Modeling a wave:
- Why not just Fourier
- Two things informational about it (say for determining if an ECG is regular or not)
	1) Change in period - Physiological variability has been proved to be informative
	2) Change in shape - Physicians read the "shape", how it looks

**Adaptive Non-Harmonic Model (ANHM)** - Replace cosine by an 1-periodic function called the wave-shape function (WSF): non-sinusoidal
- $s_i$ replacement of cosine is learned?

Further modify by allowing the functions to vary over time with the $l$ parameter (time-varying shape: IF, AM)
- Also called an IMT function


### Naive but powerful: Simlifyign the model
- Ignore detailed harmonics AM info
- Approximate the phases of harmonics
- Assume finite harmonics: Reasonable approximation in many applications

#### Getting parameters
Signal processing with SST
- Short time Fourier transform (STFT): divide and conquer
- Reassignment rule
- Synchrosqueezing transform (SST)
	- Robust to heteroscedastic noise

**Shape-adaptive mode decomposition (SAMD)** - 


RAW PPG:
- Comp1: IMU magnitude. (internal motion rhythm?) (person running)
- Comp2: ECG
- Residue

### Inference & Uncertainty 

Signal? 
Is there info?
- Redundant detectors
- Signal consistency
- Statistical analysis 
- simulations and modeling
- blind injections
Is the info correct?
---
Only after being assured of the above, we can move onto:
- How to quantify info? (including denoise, feature extraction, inference, prediction, forecasting, etc)

Fisher-SST statistics - for oscillation detection

For EEG used a 'scattering transform'? hard to understand. He mentioned it was a lot more complicated. 


## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```
I didn't find it particularly understandable, but there were a lot of interesting and novel ideas for me. As I learn more about the brain, the more and more interested I become in signal analysis. This talk used language and covered ideas that will help me in the future. As far as I understood it (lol) it covered:
- Signal modeling
- Signal recovery
- Component extraction
- Spectograms
- Interpreting signals
```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```
He covered the idea of filtering out artifact components, like the rhythmic motion of somebody running. Very interesting to see how things that should 'ruin the signal' can be filtered out in practice and mostly recover the original signal.
I also really liked the images of the spectrogram, I never understood the 'specter' idea until seeing the uncertainty of recovering the frequencies, and how they came together in a fuzzy graph. 
```



## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words

