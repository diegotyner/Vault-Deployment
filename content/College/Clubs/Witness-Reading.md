---
created:
  - " 11-17-2024 16:16"
tags:
  - Classes
aliases:
---

# 📗 -> EEG Witness Testimony Assessment 
---
We now have a [Notion Page](https://www.notion.so/dhruvsangamwar/NeuroCrime-Resources-097d11a8a6804815861a39ce9771d8ea) for readings, put there as well.

##### Pages
[[EEG-Oscillations-Reflect-Cognitive-and-Memory-Performance]]
[[Review-Retention-Recall-Processes]]
[[Analysis-of-Eyewitness-Testimony-Using-Electroencephalogram-Signals]]


> [!NOTE]+ Future Reading
> [Human memory retention and recall processes. A review of EEG and fMRI studies](https://nsj.org.sa/content/nsj/18/4/330.full.pdf)
> 
> [IFMBE Proceedings 43 - Brain Behavior in Learning and Memory Recall Process: A High-Resolution EEG Analysis](http://scholars.utp.edu.my/id/eprint/10973/1/Brain%20Behavior%20in%20Learning%20and%20Memory%20Recall%20Process_%20A%20High-Resolution%20EEG.pdf)
> 
> [EEG biomarkers of free recall - ScienceDirect](https://www.sciencedirect.com/science/article/pii/S105381192101020X)
> 
> [Episodic and semantic memory: an analysis in the EEG theta and alpha band - ScienceDirect](https://www.sciencedirect.com/science/article/pii/0013469494901643)
> 
> [A Review on Machine Learning for EEG Signal Processing in Bioengineering | IEEE Journals & Magazine | IEEE Xplore](https://ieeexplore.ieee.org/document/8972542)
> 
> [Analysis of eyewitness testimony using electroencephalogram signals | IEEE Conference Publication | IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/9630054/authors#authors)
> 
> 
> [Electroencephalography (EEG) and Event-Related Potentials (ERP’s) with Human Participants - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2909037/)
> 
> [Encoding- and retrieval-related brain activity underlying false recognition - ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0168010213001193#:~:text=2.2.&text=A%20total%20of%20480%20pairs,presented%20during%20the%20test%20phase)
> 
> [Recall versus familiarity when recall fails for words and scenes: The differential roles of the hippocampus, perirhinal cortex, and category-specific cortical regions - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3633207/)

## 🎤 Vocab


## 💡-> Ideas
#### Questions:
> This paper has a much higher sampling rate (2048 Hz). Even after it is downsampled to 512 Hz, it is still higher than the sampling rate of the CytonBoard (only 250 Hz). This is something to keep in mind when applying filtering techniques (know that your data will look different and thus must be filtered/treated differently).
- How would this affect our experiment?


#### Current Pipeline
![[Witness-Reading 2024-12-06 01.54.13.excalidraw]]

#### Options
- Make it softer, something like DRM paradigm
	- Issues: subjects have to read, the ERP might be offset by how fast they read
	- Limited generalization to the end goal, which is witness testimony assesment
	- Maybe add a condition to simulate over rehearsal (ie a subject convincing themselves of something because they repeat it enough, over-rehearsal leading to false memories)
![[Witness-Reading 2024-11-17 18.48.38.excalidraw]]
- Test for false memory induction, by having short unrelated witness videos used in succession
	- https://www.youtube.com/watch?v=MpxZutXtw8A
	- https://www.youtube.com/watch?v=-Vh2b30FBcI
![[Witness-Face-Study-Design.png|400]]


![[Witness-Reading 2025-04-15 11.17.00.excalidraw]]

## ✒️ -> Reading Notes
### Analysis of eyewitness testimony using electroencephalogram signals
#### Design
Used P. Bem-Haja's dataset of 20 second crime videos, and asked participants question
#### Analysis
Selected theta, alpha, and beta bands.
- Theta waves - associated with mental operations: attention, learning, memory recalls
- Beta waves - active, busy, anxious thinking
- Alpha waves - 
> Finally, studies like [6](https://www.sciencedirect.com/science/article/pii/S016787601630784X) have been made concerning the asymmetry of the alpha waves in questions of emotion and motivation.




### Gamma Oscillations Distinguish True From False Memories
#### Encoding
Increased gamma power (28–100 Hz) in the hippocampus, prefrontal cortex, and left temporal lobe predicted whether an item would later be successfully recalled.
#### Retrieval
A similar increase in gamma power during the 500 ms preceding correct recall was observed in the same regions. False recalls exhibited a weaker or absent gamma-power response in these regions.

### Effect of EEG evidence on juror decision
Takeaway:
- Not directly useful for the project, but an interesting ethical consideration
    - The evidence of EEG lie detection swung a decision by 20%, 40% → 20%
- Is it ethical to use/present evidence with a degree of uncertainty in trial



## 🔗 -> Links
### Resources
- [Neural Markers of Decision Confidence](https://www.jneurosci.org/content/35/8/3478.full)
	- Not related to this particularly, an experiment with a task that asks participants to rate their performance. ERP data shows there is a difference in the averaged waveform.
- [Neural Correlates of Perceived Confidence in a partial report paradigm](https://direct.mit.edu/jocn/article/27/6/1090/28310/Neural-Correlates-of-Perceived-Confidence-in-a)
- [Gamma Oscillation Distinguish True from False Memories](https://journals.sagepub.com/doi/full/10.1111/j.1467-9280.2007.02003.x)
- [Neural Correlates of True and False Memory in Mild Cognitive Impairment](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0048357)
- [Analysis of eyewitness testimony using electroencephalogram signals](https://ieeexplore.ieee.org/abstract/document/9630054/authors#authors)
	- [Methods](https://ria.ua.pt/handle/10773/31348)
	- [PSYCHOPHYSIOLOGY OF EYEWITNESS TESTIMONY](https://ria.ua.pt/bitstream/10773/22797/1/Tese.pdf)
	- pedro.bem-haja@ua.pt
	  
- A little off topic, but an interesting ethical consideration
	- [Neurolaw: A brief introduction](https://pmc.ncbi.nlm.nih.gov/articles/PMC4395810/)
	- [Effect of EEG evidence on juror decision](https://academic.oup.com/jlb/article/4/2/330/3796509)
		- The evidence of EEG lie detection swung a decision by 20%


### Connections
- [[_Research-Papers|Papers]]
	- [[Reading]]
