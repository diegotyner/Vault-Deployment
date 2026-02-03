---
created:
  - " 01-16-2026 12:11"
tags:
---


---
## Q1

> Think of two scenarios where you need to compute the lower bound and upper bound of the Selection Sort Algorithm given below. Compute the upper bound and the lower bound of the selection sort algorithm for the two scenarios where the input is 1) sorted, and 2) not sorted. Compare these scenarios with the case when the sorting algorithm is insertion sort. Explain the difference.

```
1  k=1,min = 0 # O(1)
2  for i=1 to A.length # O(n)
3    min = A[i] # O(1)
4    for j= i+ 1 to A.length # O(n)
5      if min›A[j] # O(1)
6        min = A[j] # O(1)
7        k=j # O(1) 
8    if A[i] > min # O(1)
9      swap (A[i], A[k]) # O(1)
```

The runtime of this selection sort algorithm will be O(n^2) in all cases, as it will iterate over the array once for each array position, and then a second time searching for the array minimum. All cases have the same expected runtime due to this, T(n) = n^2.   

This compares to insertion sort that is O(n^2) as well, but performs differently when it comes to different cases of inputs. 
- Sorted Input: (`A=[1, 2, 3, 4, 5]`). This is the best case of input. In this case, the algorithm will run in O(n) time, iterating over the array but not having to backtrack.
- Reverse Input: ( `A=[5, 4, 3, 2, 1]` ). This is the worst case of input. When this happens, the array is forced to backtrack for every number it encounters, and runs in O(n^2) time.
- Unsorted: This case is also O(n^2). The running time of the algorithm on an average input trends toward its worst case, with a half sorted array as an example:
	- $(a/4)n^2 + (b/2)n + c \to a'n^2 + b'n + c \to O(n^2)$


---

## Q2

> Verify by contradition that $6n^3 \neq \theta(n^2)$. Provide your complete proof

$$
\displaylines{
\
6n^3 = \theta(n^2)\\
\text{Then it follows: } c_1n^2 \leq 6n^3 \leq c_2n^2 \\
c_1 \leq6n\leq c_2\\ 
\text{but no }c_1,c_2 \text{ that fulfill the above for all } n\geq n_0 \\
\text{Therefore, it must be the case that } 6n^3 \neq \theta(n^2) 
}
$$










