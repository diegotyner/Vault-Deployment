---
created:
  - " 02-03-2026 17:16"
tags:
---

So far covered:
- Integer mult
	- Karatsubas
- String matching
	- Naive matcher
	- Naive Rabin Karp
	- Enhanced Rabin Karp
- Z-Algorithm
	- Use a preprocessing func to pre-compute array in linear time
- Sequence Alignment algorithm
	- Optimization of three conditions(look back to [[ECS-124-Main|ECS124]], [[ECS124-L4|L4]] for example)

Solving sample 1b)
$$
\displaylines{
T(n) = 4T(n-1) + 2 \\
\text{Do by substitution, ie: }\\
T(n-1) = 4(Tn-2) + 2\\
\dots\\
T(2)=4T(1) + 2\\
\text{Substititing in:} \\
T(n)=4^kT(n-k)+2(2^{k-1} + 2^{k-2} + \dots) \\
\text{Base case: } n-k=1 \\
T(n) = 4^{n-1}\cdot T(1) + 2(2^{k-1} + 2^{k-2} + \dots) \\ 
\text{Sigma sum reduction and taking out constant T(1): } \\
T(n) = 4^{n-1} + \frac{2}{3} (4^{n-1}-1) 
}
$$
