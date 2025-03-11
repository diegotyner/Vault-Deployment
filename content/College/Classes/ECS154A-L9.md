---
created:
  - " 01-27-2025 14:20"
tags:
  - Classes
aliases:
---

# 📗 ->  01/27/25: ECS154A-L7
---
[Lecture Slide Link]

## 🎤 Vocab



## ❗ Unit and Larger Context


10 mins late

---



## ✒️ -> Scratch Notes
### SR Latch
S and R inputs, are NOR'd with themselves and the output of the other NOR gate.
- SR Flip Flop
![[SR-Flip-Flop.png|300]]

| S   | R   | Z   | Z'  |
| --- | --- | --- | --- |
| 0   | 0   | 0   | 0   |
| 0   | 0   | 1   | 1   |
| 0   | 1   | 0   | 0   |
| 0   | 1   | 1   | 0   |
| 1   | 0   | 0   | 1   |
| 1   | 0   | 1   | 1   |
| 1   | 1   | 0   | d   |
| 1   | 1   | 1   | d   |

| Z'  |     |     | S   | S   |
| --- | --- | --- | --- | --- |
|     |     |     | d   | 1   |
| Z   | 1   |     | d   | 1   |
|     |     | K   | K   |     |




### Toggle Flip Flop
| T   | Z   | Z'  |     | S   | R   |
| --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | *-* | 0   | d   |
| 0   | 1   | 1   | *-* | d   | 0   |
| 1   | 0   | 1   | *-* | 1   | 0   |
| 1   | 1   | 0   | *-* | 0   | 1   |


| J   | K   | Z   | Z'  |     | S   | R   |
| --- | --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   |     | 0   | d   |
| 0   | 0   | 1   | 1   |     | d   | 0   |
| 0   | 1   | 0   | 0   |     | 0   | d   |
| 0   | 1   | 1   | 0   |     | 0   | 1   |
| 1   | 0   | 0   | 1   |     | 1   | 0   |
| 1   | 0   | 1   | 1   |     | d   | 0   |
| 1   | 1   | 0   | 1   |     | 1   | 0   |
| 1   | 1   | 1   | 0   |     | 0   | 1   |

### New Ex
| A   | B   | Z   | Z'  |     | S   | R   |
| --- | --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   |     | 0   | d   |
| 0   | 0   | 1   | 1   |     | d   | 0   |
| 0   | 1   | 0   | 0   |     | 0   | d   |
| 0   | 1   | 1   | 0   |     | 0   | 1   |
| 1   | 0   | 0   | 1   |     | 1   | 0   |
| 1   | 0   | 1   | 1   |     | d   | 0   |
| 1   | 1   | 0   | 0   |     | 0   | d   |
| 1   | 1   | 1   | 1   |     | d   | 0   |

| S   |     |     | A   | A   |
| --- | --- | --- | --- | --- |
|     |     |     |     | 1   |
| Z   | d   |     | d   | d   |
|     |     | B   | B   |     |
- $S=A\bar{B}$


| R   |     |     | A   | A   |
| --- | --- | --- | --- | --- |
|     | d   | d   | d   |     |
| Z   |     | 1   |     |     |
|     |     | B   | B   |     |
- $R=\bar{A}B$



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
