---
created:
  - " 04-01-2026 17:55"
tags:
  - Entry
Entry-For: College-Talks
topic: "Closed-Loop Brain-Computer Interfaces for Drug-Resistant Epilepsy: From Detection to Prediction and Control"
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# Closed-Loop Brain-Computer Interfaces for Drug-Resistant Epilepsy: From Detection to Prediction and Control
---

## 🎤 Vocab



## ❗ Information
Small summary



## ✒️ -> Scratch Notes

#### Responsive NeuroStimulation (RNS)

75% median seizure reduction
- what hapens to 25%? are there groups where symptoms worsen?

- only 1/5 patients seizure free
- months-years before reaching max efficacy
- > 1000 stim/day (3.5 years battery)

> Instead of injecting energy, can we reduce  enrgy?

#### Passive Neuromodulation (PNM)
- circuit theory i dont understand
	- pass a transformation function to LFP in order to cancel out I

##### PNM for Temporal Lobe Epilepsy
- Gate theory of denttate gyrus (DG)
	- Dentate region a target region for dealing with seizures
	- In mice:
		- Optogenetic inhibition stops forming seizures
		- Optegentic actiation starts seizures

Shows a model of DG activity
- Weird divergent population activity (some super upregulated, others drop way down)
	- RNS doesnt change the trend
	- PNM does change the trend
- Caveat:
	- PNM nead need to close to seizure onset zone (SOZ)
	- "proper SOZ targeting is important for single-site PNM"
- Caveat can be minimized by:
	- Single to multi-site PNM
	- Increasing the number of contact pairs can relax the need for accurate SOZ localization
		- Do we activate all or inteligently?

?? What are behavioral effects of PNM ? 
- any logn term?
?? how does this affect surgery? is it more dangerous?

##### Robustness to delays in PNM onset
- A lot more important for single site
- Spatial and temporal robustness with PNM

"Fully" closing the loop with seizure detection
- Timing and applied current

#### Epileptor
The *epileptor* - a widely used low dimensional neural mass model for simulating seizure-liek activity
- 6 differential equations used to model seizure activity
Inputs:
- Something like current (I_stim)
Output:
- Something like LFP: LFP=x_1 - x_2

#### Open Qs:
- Does this work experimentally?
	- electornics
	- full complexity and heterogeneity of epilepsies
	- soz targeting
	- electrode impedance, orientation, ...
	- metal-electrolye barrier
	- safety
	- ...
- short and long-term plasticity
- ...

---

part 2:

reactive detection to seizure forecasting

seizure prediction:
- NeuroVista Study (2013)
- AES kaggle contest (2014)
- nearly every ML classifier used since then

still about 80% accuracy today (even since contests)
- not moving with pac eof machine learning
- even these numbers highly inflated

their approach:
1) iEEG window data
2) extract features
3) train on feature vector

use a feature dynamical model


Ceiling of prediction accuracy: role of scales
- neural dynamics transorm massively across scales, so does their information conent
(micro: neurons, meso: in-between (population/area-level/region), macro: brainscale (eeg/stereo-eeg))
scale: micro -> meso -> macro
complexity: monotonically decreases
SNR: low -> high -> low

*somewhere* in between micro and macro.
- claim: brain operates at meso scales

also challenging:
- getting impedence low enough (sub 1 omhs?)



## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words


