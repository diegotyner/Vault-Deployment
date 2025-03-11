---
created:
  - " 01-15-2025 14:15"
tags:
  - Classes
aliases:
---

# 📗 ->  01/15/25: ECS154A-L5
---
[Lecture Slide Link]

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
|     |     |     | A   | A   |     |
| --- | --- | --- | --- | --- | --- |
|     |     | 1   |     |     |     |
|     |     | 1   | 1   | 1   | D   |
| C   | 1   | 1   | 1   |     | D   |
| C   |     |     | 1   |     |     |
|     |     | B   | B   |     |     |
- $\bar{A}B\bar{C} + \bar{A}CD+ABC+A\bar{C}D$
	- With these, you already cover everything. No need for $BD$

#### BCD incrementer
- Binary Coded Decimal
In base 2, you can't get a tenth. This is a problem for banking applications, as money is base 10. 
So, they allocated 4 bits to representing the 10s place, and another four for representing the 100s place.
- 0000 1001 = .09
- 0001 0000 = .10

| A   | B   | C   | D   | W   | X   | Y   | Z   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   |     |     |     | 1   |
| 0   | 0   | 0   | 1   |     |     | 1   |     |
| 0   | 0   | 1   | 0   |     |     | 1   | 1   |
| 0   | 0   | 1   | 1   |     | 1   |     |     |
| 0   | 1   | 0   | 0   |     | 1   |     | 1   |
| 0   | 1   | 0   | 1   |     | 1   | 1   |     |
| 0   | 1   | 1   | 0   |     | 1   | 1   | 1   |
| 0   | 1   | 1   | 1   | 1   |     |     |     |
| 1   | 0   | 0   | 0   | 1   |     |     | 1   |
| *1* | *0* | *0* | *1* | *0* | *0* | *0* | *0* |
| 1   | 0   | 1   | 0   | d   | d   | d   | d   |
| 1   | 0   | 1   | 1   | d   | d   | d   | d   |
| 1   |     |     |     |     | and | so  | on  |
| 1   |     |     |     |     |     |     |     |
| 1   |     |     |     |     |     |     |     |
| 1   |     |     |     |     |     |     |     |
- Transform BCD pattern into BCD pattern + 1
- Getting 10 as in input is invalid, so we don't care (d) about its output
	- Anything past the italics is invalid


| W   |     |     | A   | A   |     |
| --- | --- | --- | --- | --- | --- |
|     |     |     | d   | 1   |     |
|     |     |     | d   |     | D   |
| C   |     | 1   | d   | d   | D   |
| C   |     |     | d   | d   |     |
|     |     | B   | B   |     |     |
- Don't care about the outcomes for the d squares, they are invalid (won't have bit pattern > 10)
- So with that, the minimal expression is $W = A\bar{D} + BCD$
- Using same table methodology:
	- $X = B\bar{C}+B\bar{D} + \bar{B}CD$
	- $Y = C\bar{D} + \bar{A}\bar{C}D$
	- $Z=\bar{D}$ (the one place switches)


#### MUX
>  A multiplexer (MUX) is a combinational circuit that selects one of several input signals and forwards the selected input to a single output line

The bottom are all examples of multiplexers, describing the relationship of input to outputs
2-1 mux
- Combining 2 signals for 1 output
- Multiplexing signals A and B 

4-1 mux
8-1 mux


#### 1-hot code
Only one can be high / hot / on at a time

#### Multiplexer (MUX)
Picks one output?
Built off of the 1-hot code
- Anything AND'ed with 1 is itself, so when its paired with a 1-hot code it will let one signal through at a time

![[ECS154A-L5-Board.jpg|400]]





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
