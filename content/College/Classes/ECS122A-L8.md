---
created:
  - " 10-24-2024 19:48"
tags:
  - Classes
aliases:
---

# 📗 -> 10/24: 
---

## 🎤 Vocab


## ❗ Unit and Larger Context
Last time finishing divide and conquer
- Max subarray
- Int mult
- Sum, mult, max, min
- BS Mergesort
Greedy Approach

## ✒️ -> Scratch Notes
### Int Mult
$$
\displaylines{
x \cdot y \\
(X_L\cdot 10^{n/2} + X_R) + (Y_L\cdot 10^{n/2} + Y_R) \\
= X_LY_L + X_LY_R + X_RY_L + X_RY_R \\
= A + B + C + D
\\\\
B+C = F - A - B 
}
$$
```
int mult(X,Y) {
	1) create Xl Xr Yl Yr // O(n)
	2) a = Xl + Xr, b = XR + Yr // O(n)
	3) A = mult(Xl, Yl) // T(n/2)
	4) D = mult(Xr, Yr) // T(n/2)
	5) --/(B+C) =--/ F = mult(a, b) // T(n/2)
	6) E = F-A-D
	7) shift (A, n) // O(n)
	8) E = shift (E, n/2) // O(n/2)
	9) RETURN A + E + D // O(2n) -> O(n)
// returning is 2n, 99*99, 10^4 in worst case
}
```


### Greedy
**Greedy Approach** - Local Optimal Decision
- Won't always lead to global optimal decision
	- Some problems will always lead to global however
#### Activity Selection
In: Activities that have start and finish time in S
- S_i = start time of actvity i
- F_i = finish time of activity i
Out: Find A $\subseteq$ S, |A| is max and all activities are compatible / nonoverlapping

i and j are compatible $[S_i, F_i], [S_j, F_j]$ do not overlap


#### Prove Greedy
1) Name the optimal
	1) Optimal is where activities are all compatible and the sets don't overlap
2) Name greedy choice
	1) Let a1 be the first activity chosen by my greedy algo
		1) pick the earlier event
	2) Let B = OPT - {a} + {a} claim bin is an opt solution
		1) Max B = |OPT|  - 1 + 1 = |OPT| is max -> B is max
	3) 

## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words
