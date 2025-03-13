---
created:
  - " 02-05-2025 16:17"
tags:
  - Entry
Entry-For: College-Talks
topic: Integrating Orthopaedic Biomechanics, Predictive Simulations, and Quantitative Pain Testing to Understand Musculoskeletal Health
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# Integrating Orthopaedic Biomechanics, Predictive Simulations, and Quantitative Pain Testing to Understand Musculoskeletal Health
---
[Link](https://neuroengineering.ucdavis.edu/events/neuroengineering-medicine-seminar-integrating-orthopaedic-biomechanics-predictive)
## 🎤 Vocab



## ❗ Information
**Integrating Orthopaedic Biomechanics, Predictive Simulations, and Quantitative Pain Testing to Understand Musculoskeletal Health** 
Jennifer Nichols, PHD, University of Florida 
Associate Professor, J. Crayton Pruitt Family Department of Biomedical Engineering
Herbert Wertheim College of Engineering


### Abstract
Clinical care is full of compromises. A joint can be replaced, but range of motion will be impaired. Pain can be alleviated, but strength may not be restored. Clinical care requires compromise because the relationship between movement, pain, and pathology is not fully understood.  In this talk, I will present our ongoing work to understand the interrelated nature of movement and pain, and how we are using this understanding to enhance patient-specific prognostics. Specifically, I will discuss our work on thumb osteoarthritis and rotator cuff tears to illustrate how we integrate measurements from motion analysis, electromyography, movement-evoked pain testing, and quantitative sensory testing. I will also discuss how we use explainable artificial intelligence and other machine learning methods to enable both global (or disease-specific) and local (or patient-specific) analyses.

### Bio
Dr. Nichols is an Associate Professor and Pruitt Family Endowed Faculty Fellow in the J. Crayton Pruitt Family Department of Biomedical Engineering at the University of Florida. She has Affiliate Faculty Appointments in the Departments of Mechanical & Aerospace Engineering, Orthopaedic Surgery & Sports Medicine, and Physical Medicine & Rehabilitation. Before joining University of Florida, she completed undergraduate training in mechanical engineering at Tufts University, graduate training in biomedical engineering and bioethics at Northwestern University, and postdoctoral training in orthopaedic biomechanics at University of Utah. 

The guiding vision of Dr. Nichols’ Musculoskeletal Biomechanics Lab is to create predictive simulations that cross disciplinary boundaries and improve the functional ability and quality of life for individuals with musculoskeletal disorders. Dr. Nichols is a recognized leader in applying machine learning methods to orthopaedic biomechanics problems. This is illustrated by receipt of an Early Career Achievement Award from the American Society of Biomechanics (ASB), an Outstanding Researcher Award from the National Center for Simulation in Rehabilitation Research (NCSRR), and the Trailblazer Award from the National Institute of Biomedical Imaging and Bioengineering (NIBIB). Dr. Nichols is also an emerging leader in understanding the relationship between movement, pain, and osteoarthritis. For this work, she has received a National Institutes of Health KL2 Career Development Award and two R01 Research Project Grants. Her research integrates orthopaedic biomechanics, musculoskeletal computer simulations, quantitative pain testing, medical imaging, and machine learning to understand the patient- and surgeon-specific factors that influence musculoskeletal health



## ✒️ -> Scratch Notes
"Death Taxes and CMC OA"
- Carpometacarpal osteoarthritis
- 100% of women over 90 got it
- 90% men and women 81-90



Rotator Cuff Tears (RCT)
- No correlation between size o tear and shoulder pain and disability index (SPADI)
- Doesnt really make sense intuitively, not even area specific


Thumb osteoarthritis: Bridging movement and pain research
- Biomechanics: EMG
- Pain research: Quantitative sensory testing

Biomechanics; disconnect between pain and radiograpic evidence
> AUSCAN Pain: >1 pain affecting life, <1 pain not affecting life


##### Mechanics side
Thumbs has 3 joins: CMC, MP, IP
Paricipants with end stage OA had:
- higher abductions angles of the CMC join (p=.03)
Paricipants with end stage OA and pain had:
- higher IP flexion angles

##### Pain Side
Quantitative Sensory Testing (QST)
- Mechanical stimuli
	- Tactile
	- Pressure
	- Vibratory
- Thermal Stimuli
	- Warm/Cool
	- Heat/Cold
Aiming to put a qualitative measure on pain, which is generally qualitative/subject/different intra participants
- Ask when they first feel ANYTHING
Locations:
- Thenar (median nerve) (thumb?)
- Brachioradialis
- Hypothenar
- Quad as control

QST gives a lot of data, turn it into a z-score

Both the A. Brachio and C. (contralateral) Brachio show large effects between early and late stage OA. She gave disclaimer that they needed more data / bigger N

End-stage OA had lower cold and heat pain thresholds at many sites.


##### Bridging them
Movement-evoked pain and force analysis
- External force
- Internal force
- Movement evoked pain (MEP)

Experiment for thumb in OA and for rotator cuff tear


##### Can you have too much data?
- Medical Imaging
- Biomechanics
- Simulations

- Pain and Sensory Testing
- Function and Disease Severity

#### XAI
Use explainable AI (XAI) to help with explaining all these variables, impossible to control all the variables with small data samples

"Doctor Patent worked with Doctor Finly to come up with a model"

**Explainability**
- An explainable ML method is one in which the decisionmaking process and the result of that process are understandable to humans

Explainable AI Elucidates Musculoskeletal Biomechanics: A Case Study Using Wrist Surgeries
- https://link.springer.com/article/10.1007/s10439-023-03394-9


315 simulations
9 features
Random Forest classifier
3 Classes (nonimpaired / surgery 1 / surgery 2)

LIME = Local Interpretable Model Agnostic Explanation
- Lime score from -0.35 - 0.35

> Explainable AI to provide useful insights at the global and local levels

Different features were important the pathological classes, when evaluating all predictions (global explanations)
Predictions for each individual patient (local explanations) could rely on different features
- Make the same graphs and analyze them at a participant / subject level (local). Phenotype them and potentially use different features.

20 pariticpants x 9 tasks x 6 repetitions = 1080 observations
(10 angles + 11 activations) x 8 bins = 168 features to predict SPADI (shoulder pain and disability index) scores
- Time series data was binned
- Missing uscle activations filled-in using iterative imputer
- Scaled features to mean=0 and SD=1
Predictive Model
- Gradient Boosting (XGBoost)
	- Similar to random forest
- 5-fold cross validation

XGBOOST gives you a Gain score, kind of an order of importance
- Calculates global feature importance
Local Feature Importance:
- Ranked importance for each participant
- Generally matches the literature, but also gives insight into how they could be different on an individual level (one person might have one unusual feature be their biggest predictor)
- Or, could suggest patient phenotypes (an example of participants having similar 'profiles' with the same top 4 feature rankings)


https://faculty.eng.ufl.edu/nichols/




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

