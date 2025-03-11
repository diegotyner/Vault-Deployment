---
created:
  - " 01-13-2025 14:11"
tags:
  - Classes
aliases:
---

# 📗 ->  01/13/25: ECS154A-L4
---

## 🎤 Vocab



## ❗ Unit and Larger Context





## ✒️ -> Scratch Notes
#### N-type an P-type Doping
*N-Type* - Extra electron
- - charge

*P-Type* - 
- Lots of holes?

*VLSI* - Very Large Scale Integration

**Karnaugh Map**
- Every box in a Karnaugh Box has a Hamming Distance (bit difference) of 1 from another adjacent box
	- Left, right, up, down. No diagonals. No upper dimensional funny business. Just go left-right across borders.
- Represents a combination of ABC activation in binary as in integer


|     |        |        | A      | A      |
| --- | ------ | ------ | ------ | ------ |
|     | 000: 0 | 010: 2 | 110: 6 | 100: 4 |
| C   | 001: 1 | 011: 3 | 111: 7 | 101: 5 |
|     |        | B      | B      |        |
- ABC

|     |         |         | A        | A        |     |
| --- | ------- | ------- | -------- | -------- | --- |
|     | 0000: 0 | 0100: 4 | 1100: 12 | 1000: 8  |     |
|     | 0001: 1 | 0101: 5 | 1101: 13 | 1001: 9  | D   |
| C   | 0011: 3 | 0111: 7 | 1111: 15 | 1011: 11 | D   |
| C   | 0010: 2 | 0110: 6 | 1110: 14 | 1010: 10 |     |
|     |         | B       | B        |          |     |
- ABCD


*Literal* - One of variables
*Implicant* - Where there is a 1
*Cover* - Collection of implicants that cover all 1s
*Prime Implicant* - Largest possible implicant
*Cost* - Number of gat inputs

1) Generate prime implicants
2) Find set of essential PI's
3) Pick non-essential min-cost PI's that cover function

|     |     |     | A   | A   |     |
| --- | --- | --- | --- | --- | --- |
|     | 1   | 1   |     |     |     |
|     |     | 1   |     |     | D   |
| C   |     | 1   | 1   | 1   | D   |
| C   |     |     | 1   | 1   |     |
|     |     | B   | B   |     |     |
- Smallest Possible expression:
	- $AC + \bar{A}\bar{C}\bar{D} + \bar{A}BD$
	- Bottom right + Top horizontal + Middle vertical
- To find the smallest possible expression, circle adjacent groups with Hamming distance of 1 between adjacent members. IE a rectangle with an area that is a power of 2. 
	- In the above, we circled the top horizontal 2, the middle vertical 2, and the bottom right 2x2 square, then expressed those areas logically

|     |     |     | A   | A   |     |
| --- | --- | --- | --- | --- | --- |
|     | 1   |     | 1   | 1   |     |
|     |     |     | 1   |     | D   |
| C   |     |     | 1   |     | D   |
| C   | 1   |     | 1   | 1   |     |
|     |     | B   | B   |     |     |
- $AB + \bar{B}\bar{D}$
- Horizontal strip + Corners 
	- not(BD) wraps all of the corners since they are each a hamming distance of 1 from each other.

> Suppose you have an E-lock that has three buttons (LMR)
> Lock opens when right-most 2 buttons pressed, trapdoor over alligators if anything else

|     |     |     | L   | L   |
| --- | --- | --- | --- | --- |
|     |     | 1   | 1   | 1   |
| R   | 1   |     | 1   | 1   |
|     |     | M   | M   |     |
- Equation for trapdoor: $L + M\bar{R} + \bar{M}R$
- Wont open if nothing done.
	- Solution to lock is more exclusive: $\bar{L}MR$


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
