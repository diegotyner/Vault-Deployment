---
created:
  - " 06-04-2025 16:17"
tags:
  - Entry
Entry-For: College-Talks
topic: Probing Human Memory and Decision Making at the Single-Neuron Level
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# Insert entry name
---

## 🎤 Vocab



## ❗ Information
[Link](https://neuroengineering.ucdavis.edu/events/neuroengineering-medicine-seminar-2)

1. Role of persistent activity in memory
2. Shared code for perception and imagination
3. Rapid learning of abstract variables

## ✒️ -> Scratch Notes

### Geometric Approach to Quantify Neural Population Codes
Disentanglement?
- Reformatting representation?

#### Disentangled orthogonal representation allows generalization
Generalization to novel tasks (out of distribution) gives rise to domain-general processes and is core to human intelligence.
We are seeking to understand how disentangled variables are learned rapidly.

### Part 1. Role of persistent...
#### Visually and memory selective cells during recognition memory
(visually selective) VS cells - Selective to semantic properties
	- Half of HPC VS cells have persistent activity (during a hold portion for example)
(memory selective) MS cells - Selective to old vs. old


#### Experiment and behavior: Modified Sternberg task
5 visual categories

#### Phase Amplitude coupling (PAC) is prominent and load dependent in the hippocampus
- did not find it in dacc 

##### PAC cells: A single cell correlate of phase-amplitud ecoupling
Model created
##### Hippocampal PAC cell activity reflects control success
they care about theta in frontal cortex
- field coherence

> counterpoint...
##### PAC cells do not carry information about memory content?
other cells show preference for preferred category, PAC cells do not show the same clear encoding

#### Geometry of population code and effect of correlations
![[Pasted image 20250604162833.png]]
Noise correlations need to be of a single kind:
- Angle needs to be larger than 45 degree. Now, that ENHANCES information
In most studies, they have been found to be information limiting

![[Pasted image 20250604163026.png]]


![[Pasted image 20250604163119.png]]
Control and storage are seperate, different groups of cells
- PAC cells -> Control
- Persistent cells -> memory content
Needs at least TWO neurons, cannot understand from one neuron
- A linearized decoder

### Part 2: Perception and Imagination
#### Mental imagery as a generative process
Role of VTC (central temporal cortex) in perception
- VTC has the FFC
- Also has other selective areas (houses > chairs, faces > houses, houses > faces etc...)

> VTC is active during both vision and imagination

However, just because they share activation areas, doesnt mean shared code
- Do single-neuron recordings from VTC to tease this out

2 tasks:
1) Show many objects to character neural code (at rapid pace, 2HZ)

![[Pasted image 20250604163457.png]]
- How to encode objects? Create an arbitrary encoding
- Used PCA and used first 50 dimensions. 50 numbers for every picture to subjects

![[Pasted image 20250604163552.png]]
- Codes like this has been well documented in monkeys. how about humans?
	- Turns out there is

![[Pasted image 20250604163717.png]]
- Variance: Category model only explains 18%, axis model explains 51%

##### Majority of human VTC neurons are axis tuned
![[Pasted image 20250604171645.png]]
- of 456 visually responsive neurons, ~~80%?~~ of neurons tuned

![[Pasted image 20250604163918.png]]
- (the right side is showing erroneous reconstructions)
- Reconstructions are visual, not semantic
	- We might think pot and cup are different, but similar visually 

##### Imagination
Slow, takes around 5 seconds.

##### Neurons reactivate selectively during imagery
66/231 -> Active
165/231 -> Silent during imagery
(1/4 active about)

##### Reconstruction
Again, see the 'visually' correct reconstruction, but semantically incorrect

##### Decoder generalize between perception and imagination
![[Pasted image 20250604164606.png]]
- Alex net is a feed forward network, can't invert it.
- Now, trying to invert the representation using nearest network search
![[Pasted image 20250604164804.png]]
- Can also use GAN, but reconstructions not as successful
	- "Produce image predicted to produce a specific neural response, followed by showing synthetic images to subjects to test prediction"
	- "weird" images generate, but induce very high firing rates


### Part 3: Rapid learning of abstract
![[Pasted image 20250604164945.png]]

![[Pasted image 20250604165003.png]]
- Traditional approaches are compression/clustering
- Modern approaches:
- Theorized that learning implemented via disentanglement

![[Pasted image 20250604165152.png]]
- Learn 1 set of contexts, and then learn a second context
- Eventually, learn to switch between contexts with just 1 error

![[Pasted image 20250604165258.png]]
CGCP - Cross Conditional Generalization
- Apply to unseen variables?
PS - Parallelism score
- Representations stay parallel?

![[Pasted image 20250604165417.png]]

![[Pasted image 20250604165451.png]]

Very differently from the macque experiment, this only found in hippocampus:
not in:
- fmPFC
- AMY
- ...

![[Pasted image 20250604165610.png]]
- Can find a decoder that differentiates angles
- After learning inference, 1 line seperates stim pair and contex
	- A massive reformatting process

##### Does this matter?
> Abstract representation of context is behaviorally relevant

![[Pasted image 20250604165713.png]]
- Yes, PS predicts errors
![[Pasted image 20250604170813.png]]

![[Pasted image 20250604165830.png]]

### Conclusions
##### Part 3
After learning, more organized and more parallel
On top of this, they just lowered their firing rate (variability down, crystallized represenation)

---
### Q&A

##### 2nd part very interesting, only using neurons VTC, you get semantically wrong but visually correct. If you factor in other info, does it become correct?
Working on that part. Problem is that visual axis model doesn't work in hippocampus. 2hz too fast, retrospect should've moved slower. However, even in that case it just doesn't fit that well likely a semantic model needed.
He agrees, in some way this will likely help, but its a WIP. Not cracked yet.
- A lot of cells that activate only for imagination IE, don't know their coding

##### Relationship between HPC between inference absent vs present. Typically expect it in PFC. What's going on in PFC? Representational format dif? More dif across people if allowing pseudo populations?
A lot of questions to unpack.
The results were surprising, it doesn't sound like a HPC result especially for verbal instruction
- marnie et al? Did it in monkeys, and only found results after 6 months (and found them everywhere) 
Here, captured the first spark of that representation.
Really surprising, HPC not generally that selective, usually ...
One possibility is that the HPC has strong semantic representations of the pictures
VS cells 
##### Related: Do you see something in single trial if theres a flip in coding, or if its a gradual process?
We don't know. This experiment not designed for finding exact code. 
> Does the coding change abruptly? 
- We would like to understand, but not yet known. New experiments being run. Hope to find new dynamics. 
- Interesting question, but they are designing better controlled EXPs to figure that out.













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

