---
tags:
  - Entry
Entry-For: _Research-Papers
topic: Alpha and theta wave oscillations in the brain, affecting cognitive and memory performance
created:
  - 11-15-2024 21:21
---
# EEG alpha and theta oscillations reflect cognitive and memory performance: a review and analysis

Link to Source: [link](https://www.sciencedirect.com/science/article/pii/S0165017398000563)
- Written in *1999*. YOWCH. Boomers.
---

### Quick Summary:
Methodology:  
- This article was a literature review of EEG research surrounding alpha and theta oscillations in the brain, especially in the context of cognitive and memory performance. There were a number of small experiments sprinkled throughout, but not functionally that useful.

Findings: What did they expose with their research? What was surprising?    
> EEG oscillations in the alpha and theta band reflect cognitive and memory performance in particular
    
Good Performance:
- Tonic increase in alpha (8-12 Hz) but decrease in theta (4-8 Hz) power
- Large phasic (event-related) decrease in alpha but increase in theta, depending on the type of memory demands
- There are large differences between individuals relating to their alpha frequency, so address it by anchoring frequency windows using their **individual alpha frequency** (**IAF**).
- More in detail further below in scratch notes, but I’m not sure if this is going to be the best thing to pursue for us. This was more about general activity leading to inference about they mental abilities or what process they were involved with at the moment.

### Takeaway:
- The alpha and theta bands are highly involved in memory.
- There are differences between individuals in where there personal alpha frequency spreads around. Using this in place of the textbook frequency definitions led the authors to find higher predictive power.

---

### Scratch Notes:
#### Abstract:
> EEG oscillations in the alpha and theta band reflect cognitive and memory performance in particular

Good Performance:
- Tonic increase in alpha (8-12 Hz) but decrease in theta (4-8 Hz) power
- Large phasic (event-related) decrease in alpha but increase in theta, depending on the type of memory demands
There are large differences between individuals relating to their alpha frequency, so address it by anchoring frequency windows using their individual alpha frequency.
> As an example, in a similar way as brain volume does, upper alpha power increases (but theta power decreases) from early childhood to adulthood, whereas the opposite holds true for the late part of the lifespan.


![[Alpha-Theta-Performance.png]]
##### Tonic vs. Phasic:
- Tonic - Sustained or baseline activity (think resting activity)
- Phasic - Short, transient changes in EEG (think event related activity)
> Tonic changes, on the other hand, occur over the life cycle and in response to circadian rhythms, fatigue, distress, neurological disorders, etc.


#### Section 1: Introduction
##### IAF - Individual Alpha Frequency and TF - Individual Transition Frequency
![[IAF-Graph.png]]
> Fig. 1. Individual alpha frequency (IAF) varies to a large extent even in a sample of age matched subjects as the three power spectra indicate. Depending on their memory performance and other factors, IAF lies in the range of about 9.5–11.5 Hz for young healthy adults. (A) If power spectra are calculated separately for a resting period in which subjects are in a state of alert wakefulness (dotted line) and during actual task performance (e.g., memorizing visually presented words), alpha power becomes suppressed, but theta power increases (bold line). That frequency where the two spectra intersect marks the transition frequency (TF) between the theta and alpha band. Experiments from our laboratory have shown that TF lies almost 4 Hz below IAF and that the lower alpha band (which can be further divided in two subbands) is somewhat wider than the upper alpha band. 

Alpha Frequency can also be calculated by the weighted sum of spectral estimates divided by alpha power
- $\sum (a(f)\cdot f)/(\sum a(f))$
	- a(f) - Power Spectral estimates at f
	- The index of summation is in the range of f1 to f2


**Usage**: When using IAF as an anchor point, it proved useful to distinguish three alpha bands (with a width of 2 Hz each), two lower alpha bands (below IAF) and one upper alpha band (above IAF). The theta band is defined as the frequency band of 2 Hz which falls below TF.
##### Synchronicity
> With increasing task demands theta synchronizes, whereas alpha desynchronizes (cf. the bold in relation to dotted line in Fig. 1A)

##### Oscillatory Components
Most Prominent Oscillatory Components:
1) Alpha Rhythm
2) Mu Rhythm - Motor rhythm that becomes suppressed during motor tasks
3) Third rhythm not detectable in the scalp ('tau' rhythm over the auditory cortex in the temporal lobe)

#### Section 2: Focuses on band power associations with age
Skipped
#### Section 3: Interim Discussion
> (a) alpha frequency is positively related to cognitive performance, and
> (b) large power in the range of the upper alpha band but small power in the theta frequency range indicate good cognitive performance.

#### Section 4: Event-related (phasic) changes in the alpha and theta band
**Event-related desynchronization (ERD)** - The desynchronization of the alpha band, induced by an event
- ERD=((band power reference−band power test)/(band power reference))×100
- Desynchronization leads to postive ERD values, and event-related synchronization (ERS) leads to negative ERD values

##### Desynchronization in the lower band reflects attention
Upper alpha band most sensitive to semantic or task specific effects
##### 4.2. Desynchronization in the upper alpha band reflects semantic memory performance

##### 4.3. Synchronization in the theta band reflects episodic memory and the encoding of new information
Theta power is related to the encoding of new info, and episodic memory

##### 4.4 The relationship between desynchronization, synchronization and absolute power
> Although these findings reveal very specific effects, they are in good agreement with the well known fact that the amount of alpha desynchronization generally is related to the relevance and/or difficulty of a task. The more demanding or relevant a task, the stronger the amount of alpha suppression or ERD

#### Section 5: General conclusions and physiological considerations
Big takeaway is that power of theta and alpha bands have strong ties to cognition and memory.
- Theta particularly for encoding
	- "Pharmacological manipulations demonstrate that drugs which decrease theta activity also block learning, whereas drugs that promote the theta rhythm (and, thus, enhance the induction of LTP) also facilitate learning"

> (i) small theta power but large alpha power (particularly in the frequency range of the upper alpha band) indicates good performance, whereas the opposite holds true for event-related changes, where
> (ii) a large increase in theta power (synchronization) but a large decrease in alpha power (desynchronization) reflect good cognitive and memory performance in particular.


*Two Types of Theta Synching*:
1) Synching related to an increase in power within a narrow frequency band in the range of peak theta frequency
	- "reflects event-related theta synchronization that is closely linked to the encoding of new information (or recoding during REM)"
2) Synching referring to irregular slow activity (**ISA**) (also known as large irregular activity (**LIA**))
	- Author speculates that it "reflects a state in which the ability to encode new information is reduced or even blocked"

Speculation of desynching in alpha band:
> Desynchronization seems to imply that different oscillators within the alpha band are no longer coupled and start to oscillate with different frequencies. These different oscillators most likely reflect the synchronous activity of more local cortical or thalomocortical networks [97]and are, thus, termed local or functional alphas 7, 8, 114, 115. For each of the local alphas all neurons may still show a regular pattern of synchronous oscillation

> Large scale alpha synchronization blocks information processing because very large populations of neurons oscillate with the same phase and frequency. In contrast, alpha desynchronization reflects actual cognitive processes because different neuronal networks start to oscillate at different frequencies and with different phases.


### Lingering Questions:
How is synchronization measured, and what is the cause of it? 
- From the article, synchronization *seems* to represent some sort of baseline activity, and task cognitive load will cause desynching
	- Seems to be opposite in theta activity though?
No real intuition on how its measured or observed though
Asked ChatGPT got this answer:
> - Coherence: Use when interested in linear correlations between signals in a frequency band.
> - PLV: Use when you need to measure phase synchronization specifically.
> - Cross-Correlation: Useful for analyzing time-shifted relationships.
> - Granger Causality and Mutual Information: Apply when testing for directional influence and non-linear dependencies.
> - Wavelet Coherence: Best for time-varying synchronization patterns.


### Connections
- [[Memory]]