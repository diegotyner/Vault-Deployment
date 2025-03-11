---
created:
  - " 10-22-2024 20:11"
tags:
  - Entry
Entry-For: Neurotech
topic: Experimental Design
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> 10/22/24: Experimental Design
[Part 1](https://docs.google.com/presentation/d/1I1h6nl86YM922NBaBWZpAlL8mYMnLYgQFZRzGzrfoVo/edit#slide=id.g27a4c6cb581_0_195)
## 🎤 Vocab
Word if **Bomboclat**


## ❗ Information
### EEG Experiment Structure:
- Stimuli 
	- What is someone presented with / looking at
- \# of trials
	- How long are they looking
	- How much data recorded
- Participants 
	- Who is looking
- Response
	- What is someone doing during the exp

### Literature Review
Find specifics surrounding experiment
- Timings
- Responses
- ERP Components
- Methods are in line with current research

#### Finding a good article
- Peer reviewed
- Reputable
	- Google Scholar, PubMed, IEEE Xplore, Scopus, or JSTOR
- Papers impact factor
- Lean towards published recently

- Sometimes other colleges neurotech are good resources

### Clean Data
A good data collection *protocol* will save time. You won’t have to go back and repeatedly collect data to make your algorithms work.

**Raw Data** = signal + noise

> **Hansen’s axiom**: “There is no substitute for good data”
> 
> “Increasing the number of trials eventually has diminishing returns because the effect of averaging on noise is not linearly proportional to the number of trials” (Luck, 2014)
- The noise decreases as a function of the square root of the number of trials in the average

#### Factors Affecting Electrical Measurement
**Impedance**: combo of resistance, capacitance, and inductance
- Skin, electrode gel, electrode can influence
**Skin potential**: tonic voltage between in-and-out of skin
- Magnitude of this voltage changes with impedance
**Sweat**: Causes gradual shift

#### Remedies
- Abrase (remove outer layer) of skin before placing elctrodes using Nuprep
- Use fair amount of electrode gel
- Use medical tape to stick electrodes to head or ear
- Wash ur head

- Keep from overlapping
	- Minimize cable + electrode movement 
- Record from magnetically sound environments
	- Avoid electronics when possible
- Avoid reference interference
	- Consult previous literature  

##### Body Noise
Eyes are a strong dipole
- Corneas postively charged
- Retinas negatively charged
When someone blinks, the disruption of this field causes a large amount of noise
> Give an ITI period for blinks (minimize participant mental weight to this task, its noise)

Temporalis muscle 
- Limit neck movement, jaw clenches

### Spatial Resolution
ICA isn't entirely effective, because noise can be coming from deep, or surface level of brain. No idea where the source is.



## ✒️ -> Scratch Notes
- Log as you go through entry

## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

