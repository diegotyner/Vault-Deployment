---
created:
  - " 02-23-2025 22:24"
tags:
  - Entry
Entry-For: ECS154A-Textbook
topic: Microarchitecture
Entry-Number: 7a
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# Chapter 7: Microarchitecture
---

[Chapter Playlist Link](https://www.youtube.com/playlist?list=PLE2iE3NrQUKnJv67iQM0QS3rUy1DioqFw)
## 🎤 Vocab



## ❗ Information

### Microarchitecture
Between the grittiness of storing 0 and 1s, and below the abstraction of applications and software
#### Topics:
*Performance Analysis*
*Single-Cycle Processor*
*Multicycle Processor*
*Pipelined Processor*
*Advanced Microarchitecture*

**Microarchitecture** - How to implement an architecture in hardware
**Processor:**
- *Datapath* - Functional blocks
- *Control* - Control signals
There can be different implementations for a single architecture
- *Single-Cycle Processor* - Each instruction executes in a single cycle
- *Multicycle Processor* - Each instruction is broken up into series of shorter steps
- *Pipelined Processor* - Each instruction broken up into series of steps and multiple instructions execute at once


## ✒️ -> Scratch Notes
### Part 1: Microarchitecture Introduction
#### Processor Importance
$CPU_{time} = \frac{cycles}{insts}\cdot \frac{insts}{prog} \cdot \frac{time}{cycle}$
Definitions:
- CPI: Cycles per instruction
- Clock Period ($T_c$): Seconds per cycle
- IPC: Instructions per cycle = $1/(CPI)$
Satisfy Constraints on:
- Cost
- Power
- Performance

#### RISC-V Processor
Subset of its instructions:
- R-type instructions
	- add, sub, and, or, slt
- Memory instructions:
	- lw, sw
- Branch instructions:
	- beq

**Architectural State** - Determines everything about a processor
- 32 registers
- PC - Values in program counter
- Memory - Values in memory


### Part 2: 

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

