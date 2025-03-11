---
created:
  - " 01-08-2025 14:26"
tags:
  - Classes
aliases:
---

# 📗 ->  01/08/25: ECS154A-L2
---
[Lecture Slide Link]

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
#### Refresher:
\* = And
\+ = Or
$\bar{A}$ = Not A

### Basic Laws
#### Procedure of order:
NOT, AND, OR
#### Commutative
$A * B = B * A$
$A + B = B + A$
#### Distributive
$A * (B+C) = (A*B)  + (A*C)$
$A + (B*C) = (A+B)  * (A+C)$
#### Identity
$1  *A = A$
$1  +A = 1$
$0  *A = 0$
$0  +A = A$
#### Inverse
$A*\bar{A} = 0$
$A+\bar{A} = 1$
#### Idempotent
$A*A = A$
$A+A = A$
#### Associative
$A * (B*C) = (A*B) *C$
$A + (B+C) = (A+B)+C$
#### De Morgan's 
$\overline{(A*B)}= \bar{A} + \bar{B}$
$\overline{(A+B)}= \bar{A} * \bar{B}$

#### EX
$$
\displaylines{
A+\bar{A}*B = A+B \\
(A+\bar{A})*(A+B) =\\
1 * (A+B) =\\
A+B = A +B
}$$
### Truth Tables
Min Terms (minterm0, m1, m4, ...) where function output is 1
Max Terms (Maxterm2, m3, m6, ...) where function output is 0

Boolean expression is in **Sum of Products (SOP)** form if it consits of product terms combined with + operator
Canonical SOP if each term is minterm
- Canonical basically means it hasn't been simplified, all of the outputs are "OR"ed
EX:
- $f = m0+m1+m4+m5+m7$
- ... not sure exactly what he did here?
	- EDIT: He erase it all and said he did it wrong. Ignore below
- $f = M2 + M3 + M6$
- $\bar{f} = \overline{(M2 + M3 + M6)}$
- $\bar{f} = \overline{M2} * \overline{M3} * \overline{M6}$
- $\bar{f} = \overline{(\bar{A}B\bar{C})} * \overline{(\bar{A}BC)} * \overline{(AB\bar{C})}$
- $\bar{f} = (A+\bar{B}+C) * (\bar{A}BC) * (AB\bar{C})$

### Hamming Distance
Number of bits that change between two bit strings
From "0010"
- 1010 - HD is 1
- 0101 - HD is 3

From adjacent boxes in truth tables (Carnel map?), their Hamming Distance is a maximum of 1

Jiffy Lube 3D Truth Tables??
Carno Maps?


|     |        |        |        | A      |
| --- | ------ | ------ | ------ | ------ |
|     | 000: 0 | 010: 2 | 110: 6 | 100: 4 |
| C   | 001: 1 | 011: 3 | 111: 7 | 101: 5 |
|     |        |        | B      |        |




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
