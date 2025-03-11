---
created:
  - " 10-07-2024 17:35"
tags:
  - Entry
Entry-For: Neurotech
topic: BCI Pipeline
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> Week 3: The BCI Pipeline
[Lecture 3](https://docs.google.com/presentation/d/1Sp_kB50hdVeUyr_r3Cz53e-5GmLV-2tzOVtOBiff23M/edit#slide=id.p1)
## 🎤 Vocab


## ❗ Information
### OpenBCI:
- A BCI that records EEG data from the scalp
- EEG (analog signal) -> OpenBCI (digital signal) 

### The Pipeline
#### The Brain -
Produces the electrical signals internally, that is received from the scalp by the EEG

> Scalp Signals -> Signal Acquisition
#### Signal Processing Hardware -
Obtaining the signal is a crucial step, and OpenBCI is a popular candidate
- Open source
- High compatibility
Sampling frequency - Rate at which the EEG captures / polls the data

> OpenBCI (digital signal) -> Preprocessing (digital signal to be read by the computer)

#### Preprocessing -
Brainflow / MNE
- Both are highly advanced python libraries designed to take, read, and process brain activity data
Preprocessing mainly consists of filtering the data such that it is in a usable state to feed into the next step of the process:
- **Bandpass filter** - Removes all the high and low frequencies and keeps a band of them in the middle
- **High Pass** - Gets rid of high freqs
- **Low Pass** - Gets rid of low freqs
Preprocessing occurs in both hardware and software
- Hardware filters are significantly faster than digital filters
[Fourier Transform Vid](https://www.youtube.com/watch?v=nmgFG7PUHfo&t=16s&ab_channel=Veritasium)

> Preprocessing (digital EEG signal) -> Processing (internal python data structures)

#### Algorithm / Processing
Brainflow / MNE
- The algorithm/processing stage processes the data to find what we want
- This can involve creating a classifier
> Processing (internal python data structures) -> Decision


> [!info] What are classifiers?
> A classifier is a model that is able to discriminate between different types of inputs. In our case we want out BCI to be able differentiate between different types of signals and artifacts.

#### Decision
The stage of the pipeline where the BCI makes a judgement regarding its data
- BCI looking for changes in brain activity based on two different frequencies and rendered a binary decision based on that
After this, the pipeline will be restarted


## ✒️ -> Scratch Notes
[Neurotech Resource Sheet](https://docs.google.com/document/d/1e0HXvKGgTx0B0hoc1SlpFuB6jQkFwV8KhUIQhm2tKs0/edit)



## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- [[Data-Processing]]
- [[Data-Analytics]]
