---
created:
  - " 02-11-2026 20:14"
tags:
---



### New idea brainstorming

[[DINO-MetaAI]]
#### Presentation
- Decoding neural signals in research. Spike timing dependency
- Effect of regularization (dropout/ridge etc) on learning and allegories to brain and pruning
- alphafold?


#### Final Project
- Effect of regularization (dropout/ridge etc) on learning and allegories to brain and pruning

[Docs - Project Stuff](https://docs.google.com/document/d/1ZqyNmWMubx1amCpmPfStBKb6yltUjR7ndSxaWijWujc/edit?tab=t.pot6gntxr427)
[Docs - Data Structure](https://docs.google.com/document/d/1oqQPzRWuI5RyutNfvqjCJjFidIhFm7chSWlRXKYD8Qs/edit?tab=t.0)
[Colab - Testing Alz](https://colab.research.google.com/drive/1nUanGUQzxGYb6swGDQmLBifVt-lVugMQ?usp=sharing#scrollTo=3H6VleZrH_RF)
[Colab - StainDownloading](https://colab.research.google.com/drive/1mk0V0ikcbWfjIZ-3b_r8jjiLMPM3lGLp#scrollTo=KFn6twVgsU2H)



---

### Idea:
Predict dementia using uninvasive alternatives to traditional methods (PET)


#### First Iteration:
A Polish Electroencephalography, Alzheimer’s Risk-genes, Lifestyle and Neuroimaging (PEARL-Neuro) Database 
- https://handbook.datalad.org/en/latest/usecases/openneuro.html
- https://www.nature.com/articles/s41597-024-03106-5
- https://openneuro.org/datasets/ds004796/versions/1.1.0/download
- https://github.com/OpenNeuroDatasets/ds004796

##### Technical
Data installation:
- use datalab, kind of like git but optimized for only downloading snippets of the dataset at a time

`datalab install https://github.com/OpenNeuroDatasets/ds004796`

Dataset info:
- Total size: 258G
- 1 participant for example: Sub-01, 3.75G
- 79 participants

Structure of a participant:
- eeg
	- `sub-01_task-{task}_eeg.{extension}`
		- Extensions include eeg/vhdr/vmrk/tsv
- func
	- `sub-01_task-{task}_dir-AP_bold.{extension}`
		- Extensions include 
##### Lit rev
Dataset: 
- https://www.nature.com/articles/s41597-024-03106-5
> Here we describe a database that includes genetic data on apolipoprotein E (APOE) and phosphatidylinositol binding clathrin assembly protein (PICALM) genes, both of which are known to increase the risk of late-onset Alzheimer's disease


Lit review of general 
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11293066/

EEG bandpower and dementia:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4936613/

Conclusion
> High EEG upper/low α power ratio was associated with cortical thinning and lower perfusion in temporoparietal areas. Moreover, both atrophy and lower perfusion rate significantly correlated with memory impairment in MCI subjects. Therefore, the increase in the EEG upper/low α frequency power ratio could be useful in identifying individuals at risk for progression to AD dementia in a clinical context.

BG
> the most studied and validated biomarkers are Aβ1–42 and tau protein in the cerebrospinal fluid (CSF), glucose hypometabolism as determined by using fluorodeoxyglucose positron emission tomography (18F-FDG PET), atrophy of hippocampal volume (HV) on magnetic resonance imaging (MRI), and brain amyloid deposition on amyloid imaging with PET

Features to extract?
- Specific frequency bands
- EEG spectral coherence (covariance of activity of two electrodes)
- Cortical thickness (estimation automated with freesurfer.net)
- 
