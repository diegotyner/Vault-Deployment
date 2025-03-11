---
created:
  - " 10-16-2024 20:01"
tags:
  - Entry
Entry-For: Neurotech
topic: Intro to EEG
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> 10/16/24: Introduction to EEG
[Lecture Slides](https://docs.google.com/presentation/d/1v-GfrnDTFaNR3GZf9_hIzHB1egkHe2MniV_D3R2648A/edit)
## 🎤 Vocab
An **ERP** is a systemic and reliable variability in an ERP data set

## ❗ Information
Book uses Steven Luck's EEG Book, the [[ERP-Handbook]]
> A lot of today is pulled from the book, chapter 5

EEG signals are not action potential, but post synaptic potentials from pyramidal cells.

**Nyquist theorem**: “all of the information in an analog signal such as the EEG can be captured digitally as long as the sampling rate is more than twice as great as the highest frequency in the signal” (Luck, 2014, Chapter 5)
- At least 2.5 times?

Hardware has set sampling of 250HZ





## ✒️ -> Scratch Notes
### General EEG
EEG Pro Cons:
Pros:
- Temporal resolution
- Non-invasive
Cons:
- Noisy
- Bad spatial resolution

1) Signals Are Picked up
A single channel of EEG signal is made from these 3 electrodes:
- Active
- Reference
- Ground

- Active Electrode
	- The one recording from the area of interest
- Reference
	- Away from brain activity (in theory) subtracts from the active
	- Get rid of common noise
	- Usually the mastoid, bony part behind the ear
- Ground
	- Electrode connected to the amplifier's ground circuit, where the circuit picks up noise from the amplifier circuitry
	- Some put it on the forehead
	  

#### Unclean Signals
**Artifacts** - Unwanted signal
Very prominent in EEG, signal is weak anyway
- Eye movement
- Jaw clench
- Eye blinks 
- Eyes closed
- Alpha waves? (sleepy?)

**Low Voltage Drift** - Participants moving around. Impedance?

#### Data
Time Domain vs. Frequency Domain
- Fourier Transform used to translate between them

Power Line noise: A signal from electronics that contaminates data. 60hz, use filter to remove.

Data -> FFFT, see spike at 60hz -- (filter out) -> Clean Data

> [!NOTE] Learn the fundamental theorem of signal analysis 

### What can be found from EEG?
- Event-related potentials
- Steady state visually evoked potentials (SSVEP)
- Studying oscillations
	- Most commonly used in EEG signal analysis for different types of tasks
- Mental imagery

#### P3:
- Will not reliably see the P3 on any given trial
- It becomes most evident when trials are averaged together, then you see the systematic variance
	- 100s of trials

#### Oscillations
Ch.7 of book

Waves:
**Alpha** - Relaxed yet alert 
- 8 to 13 hz
- A major source of noise, participants migt be awake but calm and unfocused
	- Might shake up participant
**Beta** - Associated with active alert and focused
- 13 to 30
**Theta** - Light sleep, meditation, relaxtion
**Gamma** - Fastest brainwaves, 30 Hz
- Very deep inside brain, hard to record
	- If found from EEG, usually just noise
**Delta** - Deep sleep, very slow. Usually found in stages 3 and 4

Codeword is - Yoloberry



## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

