---
created:
  - " 10-03-2024 18:08"
tags:
  - Collection
  - Resource
aliases:
  - NT
---

---
### Dataview:
```dataview
TABLE
  topic as "Topic",
  created as "Created"
FROM #Entry
WHERE Entry-For = this.file.name
SORT file.name desc
```
---


# 📗 -> Davis Neurotech
---
## ❗ ->  Information
[FAQ](https://docs.google.com/document/d/1yaIANPAQY0z8ptY8znnXjpACvHgyElChqRw5_P-W3YE/edit?tab=t.0)


### Recording Checklist:
- [ ] Bluetooth is off
- [ ] Move batteries?
- [ ] Sleep mode off on computers
- [ ] How many repetitions?
- [ ] Record baseline before and after
- [ ] Face away from door

- [ ] Procedure Check:
	- [ ] Clips go fully
	- [ ] Repetitions
	- [ ] Full face showing
	- [ ] All blocks are on

### Notes for Changes
Complete missed Espana and Slovakia, maybe change videos?
Realign Slovakia faces

Maybe speed up the rhythm?


### Description
Neurotech is a dynamic and innovative neurotechnology club dedicated to advancing the field of brain-computer interfaces (BCIs) and fostering the next generation of neurotech enthusiasts. At Neurotech, we are passionate about exploring the intersection of neuroscience and technology to create cutting-edge solutions that push the boundaries of what is possible.


![[Neurotech 2025-02-05 19.26.34.excalidraw]]

TODO:
- Crop Bockler
- Pick new clip for Stephanie Mavunga Poland
- Go all the way through
- Edit pictures:
	- Crop pictures
	- Align center with face
	- Remove backgrounds


## ✒️ -> To Do:
### High Priority
- Work on [[NT-Project]]
- Read up on other [[BCI-Projects]]

### Future Reading
- Learn more about [Feature Extraction](https://github.com/Neurotech-Davis/Neurotech-Wiki/blob/main/src/machine_learning/ml_featureextraction.md)
- Learn about analyzing time series data [ChatGPT Log](https://chatgpt.com/c/670706be-d240-8007-9208-dd4dfafd848f)

### Questions
- Subject to subject variation


## Extra Credit
- [x] Ch. 2 pgs 52 (”Waveform Peaks versus Underlying ERP Components”)-59 - [[ERP-2]]
- [ ] Chapter 4
- [ ] Chapter 5 “Importance of Clean Data”
- [ ] Netlifi Wiki
	- [ ] Specifically sections 6-8 in wiki: [Link](https://neurotechwiki.netlify.app/eeg_data_processing/signal_processing) 
- [ ] ERPLAB wiki “Part 2- Basic EEG Processing”
- [x] ERP methodology blog, [Link](https://erpinfo.org/blog/2019/12/12/eeg-recording-protocol). Actual methodology: [[EEG-Recording-Protocol]]
- [ ] ERP Lab
	- [ ] [ERPLAB Studio Tutorial](https://github.com/ucdavis/erplab/wiki/ERPLAB-Studio-Tutorial)
	- [ ] [Decoding Tutorial](https://github.com/ucdavis/erplab/wiki/Decoding-Tutorial)


## 🔗 -> Links
### Connections:
  - [[ERP-Handbook]]
  - [[NT-Project]]

### Resources:
- [Modeling the brain with RNNs](https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/fncom.2017.00007/full)

- [Club Website](https://neurotechdavis.com/)
- [Club Github](https://github.com/Neurotech-Davis)
	- [Github Resource Page](https://github.com/Neurotech-Davis/Neurotech-Wiki/blob/main/src/learning_resources/resources.md)
- [Resource Sheet](https://docs.google.com/document/d/1e0HXvKGgTx0B0hoc1SlpFuB6jQkFwV8KhUIQhm2tKs0/edit)
    
  - https://eegedu.com/
  - [OpenBCI Free Resources EEG Datasets](https://openbci.com/community/free-resources-eeg-and-physiological-datasets-and-more/)
  - [OpenBCI Example Projects](https://docs.openbci.com/Examples/ExamplesLanding/)
  - [Cool papers to look at?](https://docs.google.com/presentation/d/1dcJKxqpwbOns8BycNZ1g4vcJN-WZNCMuKvc039w3xms/edit#slide=id.g27f5cb9c5c0_0_39)
  - [Mind Eye 2](https://medarc-ai.github.io/mindeye2/)
  




### Create pages below
---
[[Neurotech22-Lecture-1]]
[[Neurotech22-Lecture-2]]
[[Neurotech22-Lecture-3]]
[[Neurotech22-Lecture-4]]
[[Neurotech22-Lecture-5]]
[[Neurotech22-Lecture-6]]

[[NT-Interest-Form]]
Lecture 1 is [intro to projects](https://docs.google.com/presentation/d/1dcJKxqpwbOns8BycNZ1g4vcJN-WZNCMuKvc039w3xms/edit) - word was silly
[[Neurotech24-Lecture-1]]
- [[NT-HW1]]
[[Neurotech24-Lecture-2]]
[[Neurotech24-Lecture-3]]
- [[NT-HW2]]
[[Neurotech24-Lecture-4]]
[[Neurotech24-Lecture-5]]
- [[NT-HW3]]

[[Neurotech24-OpenBCI-Workshop]]