---
created:
  - " 10-23-2024 20:00"
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

# 📗 -> 10/23/24: Experimental Design
[Part 2](https://docs.google.com/presentation/d/1ML2pr_si7sPdHUW9A1yNjn6W3AzldUeFcEqxuybI8lU/edit#slide=id.g2ff5bbca94c_0_0)
## 🎤 Vocab
Word was **bluefish**

## ❗ Information
### Invest time in proper experimental data
- Bad design can mislead and lead to results impossible to interpret
- Quote: 
>  Perhaps the decisive factor is fanatical care beyond the obvious stuff: the obsessive attention to details that are often overlooked


## ✒️ -> Scratch Notes
### Electrode Placement
- International 10/20 System for electrode placement
- When an electrode cap is not available, we can measure distance from nasion and inion to find exact placements
- Focus electrodes on areas on interest if limited
- Naming is based on the lobe it is placed on
	- *F*rontal, *P*arietal, *O*ccipital, ...

### Experimental Design
Use PsychoPy
- Guide on the wiki
Explicitly define stimulus, make repeatable

### Stimuli
**Hillyard Principles** - REsponses should be compared to the same physical stimuli while holding overall arousal level and task demands constant
- Only one manipulation
**Stimuli Habituation** - Repeated application of stimulus leads to decreased response
- Allow for breaks
- Decreased frequency of presentation

### Event Codes
- "Sophisticated ERP experiments often involve complex sequences of events (simuli, responses, EMG bursts, eye movements)" - ERPLAB wiki
- For each of these events, we create an event code that describes the time of occurence for some event during recording

### SOA and ITI
**SOA** (Stimuus Onset ASynchrony): Tie between the onset of one stimulus to the onset of the next stimulus
**ITI** (inter-trial interval): Time between two trials


### Timing
- Determines SOA and ITI length
	- Trade off between short / long SOA
		- Long experiments-> Fatigue / Noise
		- Short trials-> Overlap / Offset Response
- Implement breaks
- Include a baseline recording period

### Epoching
Used for ERP experiments
1) Converiting continuous EEG to *time-locked* segments that correspond to your events
2) Epochs are then average into bins, so we can identify patterns in our neural data in reponse to events
#### Types:
- Stimulation based epoching
- Time based epoching


### Project Proposal:
Enough detail that someone with no familiaritty is able to recreate it
- Description of stimuli
- Number of trials (timing of trials)
- How to implement with EEG (electrode placement)




## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

