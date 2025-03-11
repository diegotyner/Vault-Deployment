---
created:
  - " 09-26-2024 16:10"
tags:
  - Resource
  - Method
  - Entry
Entry-For: College-Talks
topic: Neuroimaging
---

---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```
---

# 📗 -> Statistical Neuroimaging Analysis: An overview
## 🎤 Vocab
**Neuroimaging = NI**
**Neuroimaging analysis (NIA):** Used for recording the brain
- Neurological disorders
- Aging
- BCI

## ❗ Information
Lexin Li
Prof at UC Berkeley - https://lexinli.biostat.berkeley.edu/

## 📷 -> Pics

![[Stat-NI-1.jpg]]
![[Stat-NI-2.jpg]]
![[Stat-NI-3.jpg]]
![[Stat-NI-4.jpg]]
![[Stat-NI-5.jpg]]
![[Stat-NI-6.jpg]]

## 📄 -> Methodology 
- Simple or full description 

## ✒️ -> Talk scratch notes
- NIA: Very hard, introduces many problems
	- Tensor data, ODE, point process
	- Brain networks, graphical models
	- Causal inference, multimodal analysis
- Large NI studies, and public databases are becoming available

Imaging Modalities:
- MRI< fMRI, PET, EEG, electrocorticography (ECoG), diffusion tensor imaging (DTI), neuronal spike trains...

Topics:
- Imaging Tensor Analysis: Understanding individual brain regions
	- Look at MRI image of patient, tell if they have a disorder
- Brain Connectivity Network Analysis: How do networks interact? How are they associated with outcomes?
- Multimodal NIA: How different ttypes of images are associated with each other, and jointly affect the outcomes?
- NI Causal Inference: Can we get "causal conclusions?"
- New Imaging Modalities and Technologies: picture in phone... 

## 🧪-> Case Studies
### Case Study 1:
Amyloid-beta and Tau are closely associated in terms of spatial accumulations, and association patterns are believed to be affected with age
- Potentially associated with Alzheimers too?

*Looking to study association in concentration and location*
Association between modalities: $X \in R^{P_1}$ (protein 1), $Y \in R^{P_2}$, protein 2, $Z \in R^{P_3}$, demographic info (age)
Each modality can be high dimensional

Can rephrase to seeking linear combinations of X, Y and Z are the most contrastive (contrastive?)

Literature Review: CHECK PHONE FOR BETTER DESCRIPTION
- Canonical Correlation Analysis
- Sufficient Dimension Reduction
- Liquid Association

They suggest the generalized liquid association (GLA) as the solution

Tensor Tucker Decompization problem?

ADNI Problem Studies:
- n=81
- modality X: amyloid-beta deposition .... 
took a picture

### Case Study 2:Kernel ODE?
Brain Effective Connectivity Analysis: Uncover the directional influence that one neural system exerts over another
- Can be applied to: gene regulatory network analysis based on time-course gene expression data
	- Also diabetes study / artificial pancreas

ECoG study of brain during decision-making (DM)
Electrocorticography data: electrode x time data matrix
Patient performed gambling tasks with different levels of risk (high risk vs low rish)
Electrodes placed in the [[OFC]]: 61 electrodes over 3001 time points

> [!warning] Take results with caution
> Experiment is done with 1 participant, over multiple trials. Generalization of results should be done with caution, only really applicable to the 1 participant, who was chosen because of neurosurgery anyway


Regulatory Functionals
Special Cases with assumptions, not the best approach but good to know
- Linear ODE
- Additive ODE
- Neural ODE? 

The data analysis (took a photo), show that different parts of OFC take priority in spreading activation
- Posterior OFC tends to actively influence other nodes during low risk games, reward is simple and clear
- Anterior OFC tends to actively influence other nodes during high risk games, where they involve more calculation

### Case Study 3:
Skipped through, low on time
Took a picture of results


## 🔗 -> Related Word
- [[Data-Analytics]]

