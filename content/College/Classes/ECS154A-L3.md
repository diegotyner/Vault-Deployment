---
created:
  - " 03-18-2025 16:38"
tags:
  - Classes/Lecture
aliases:
---


## ❗ Unit and Larger Context
### Doing review of all lectures, filling this one in. 
Not taken live, will not be rigorous




## ✒️ -> Scratch Notes

### SOP and POS

| A   | B   | F   |     |
| --- | --- | --- | --- |
| 0   | 0   | 1   | m0  |
| 0   | 1   | 0   | M1  |
| 1   | 0   | 0   | M2  |
| 1   | 1   | 1   | m3  |
- Minterms: m0, m3
- Maxterms: M1, M2
Canonical SOP: $f=m0+m3=\bar{A}\bar{B} + AB$
Canonical POS: 
$\displaylines{ \bar{f} = M1+M2 \to \bar{\bar{f}}= \overline{(M1+M2)} = \bar{m1}\cdot\bar{m2} = \\ \overline{(A\bar{B})}\;\overline{(\bar{A}B)} = (\bar{A}+B)\cdot(A+\bar{B}) }$
- De Morgan's of SOP $\bar{f}$


### CMOS
[[CMOS-Diagrams]]

Power Consumed is a function of the frequency, capiticance, and voltage squared
- $P\approx fcv^2$

By default, CMOS gates gives easy NAND (and NOR) gates.
- We can use these very easily to make functional pairs. Will use $\bar{\land}$ as NAND
	- *NOT* - NAND of a single var is just NOT. $A \bar{\land} A  = \lnot A$
	- *AND* - NOT of a NAND is AND. $\lnot(A\bar{\land} B) = A\land B$ 
	- *OR* - NAND of two vars is just NOR of A and B. If we invert A and B, we get an easy OR. $(\lnot A \bar{\land} \lnot B) = A\lor B$
		- Because NAND is just $\overline{(A\cdot B)} = \bar{A} + \bar{B}$

### Simple Circuits
Can't have more than one thing drive the bus. 
That's why we have tri-state devices, disconnecting signals from the bus.


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
