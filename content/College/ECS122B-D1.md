---
created:
  - " 01-06-2026 17:12"
tags:
---



Insertion Sort:
- Best Case:
	- Sorted (12345)
	- O(n)
- Worst Case:
	- Reverse Order (54321)
	- O(n^2)

### Lab 1 Qs:
#### 1. Selection Sort
```
1 k=1,min = 0
2 for i=1 to A.length
3   min = A[ i ]
4   for j= i+1 to A.length
5    if min>A[ j ]
6      min = A[ j ]
7    k=j
8   if A[ i ] > min
9     swap (A[i], A[k])
```

Best: n^2
Worst: n^2

Insertion Sort Algorithm (ISA)
- Compare,then swap

Selection Sort Algorithm (SSA)
- 

#### 2. Prove contradiction
$\theta$ Notation:
- A 'tight' asymptotic bound
- If f(n) is theta of g(n): there exists positive constants c1, c2, and n0 such that $0 \leq c_1g(n) \leq f(n) \leq c_2g(n)$ for all $n \geq n_0$
- "if f(n) is theta of g(n), then the value f(n) is always between c1 * g(n) and c2 * g(n) for large values of n (n ≥ n0)."


My attempt:
$$
\displaylines{
6n^3 = \theta(n^2)\\
\text{then there exists c s.t. } 6n^3 \leq cn^2 \; \forall \; n>n_0 \\
\text{Therefore, the following limit should be true:} \\
lim_{n\to \infty} 6n^3 \leq cn^2 \\
\text{however, there is no c s.t. } lim_{n\to \infty} 6n \leq c \\
\text{Because: } \infty > c
}
$$


Actual:
$$
\displaylines{
6n^3 = \theta(n^2)\\
\text{Then: } c_1n^2 \leq 6n^3 \leq c_2n^2 \\
c_1 \leq6n\leq c_2\\ 
\text{but no }c_1,c_2 \text{ that fulfill the above for all } n\geq n_0

}
$$


