---
created:
  - " 01-16-2026 21:17"
tags:
---
## Problem 1 (5 points) 
> Give a real-world example that requires sorting. 

A social media platform frequently has to sort posts, by most recent or most liked. When viewing a creator on Youtube, their videos will automatically be sorted by most recent, but allow users to inspect by most popular as well.  

## Problem 2 (10 points) 
> Suppose we are comparing implementations of insertion sort and merge sort on the same machine. For inputs of size n, insertion sort runs in 4n2 steps, while merge sort runs in 32 nlog(n) steps. For which values of n does insertion sort beat merge sort? 

Plotting the slopes in desmos, we see critical points when n=1.57231 and n=6.5071. When speaking strictly of runtimes: Insertion sort runs faster on inputs $n\in[1.57231, 6.5071]$, while merge sort runs faster for inputs $n\in[0, 1.57231] \cap [6.5071, \infty]$. For large n, merge sort runs faster.
- Fractional inputs dont make sense for array sorting, so practically: insertion sort is faster on $n\in [2, 6]$ and merge sort is faster for all other inputs

This passes the sanity check, as insertion sort is $O(n^2)$ while merge sort is $O(nlogn)$.

## Problem 3 (25 points) 
> Write an INSERTION-SORT algorithm that sorts into decreasing order (example - [4,1,6,5,3,4] → [6,5,4,4,3,1]). Show the time complexity of the code on each step along the way, then write out the final time complexity of your algorithm. 

Pseudocode:
```
def insertion_sort(int[] A):
	for i, n in A[1:]: # O(n)
		j = i - 1 # O(1)
		
		while j >= 0 and n > A[j]: # O(i)->O(n)
			A[j+1] = A[j] # O(1)
			j-- # O(1)
		A[j+1] = n # O(1)
	return A
```

Since we have nested O(n) loops, in the worst case (a sorted array) the inner loop executes i times, for each n input. $\sum^n i = \frac{n(n-1)}{2} \to T(n) = O(n^2)$

For different inputs the algorithm has the following time complexity:
- Sorted Input: (`A=[1, 2, 3, 4, 5]`). This is the worst case of input. When this happens, the array is forced to backtrack for every number it encounters, and runs in O(n^2) time. 
- Reverse Input: ( `A=[5, 4, 3, 2, 1]` ). This is the best case of input. In this case, the algorithm will run in O(n) time, iterating over the array but not having to backtrack.
- Unsorted: This case is also O(n^2). The running time of the algorithm on an average input trends toward its worst case, with a half sorted array as an example:
	- $(a/4)n^2 + (b/2)n + c \to a'n^2 + b'n + c \to O(n^2)$

## Problem 4 (20 points) 
> Solve the following recurrence relations and give a Θ bound for each of them. 
> - (a) T(n) = 8T(n/2) + n 3 
> - (b) T(n) = 49T(n/25)+ n 3/2 log n 
> - (c) T(n) = T(n-1) + 2 
> - (d) T(n) = T(n-1) + c n , where c > 1 is some constant 

Solving (a)-(b) using master theorem:
a) a=8, b=2, c=3. 
- $log_28=3$, therefore: $T(n) = \theta(n^{\log_ba}logn) \to T(n) = \theta (n^{3}logn)$

b) a=49, b=25, c=3/2
- $log_{25} 49 < 3/2$ ($\approx 1.21 < 1.5$), therefore: $T(n) = \theta(f(n)) \to T(n) = \theta(n^\frac{3}{2}logn)$

c) 
$$
\displaylines{
T(n)=T(n-1)+2 \\
= (T(n-2) +2 )+ 2 
= \dots \text{ continues for k iterations} \dots=\sum ^k 2 \\
\text{The recurrence will repeat n times, as it will end on T(n-n)} \\
\sum^n2 = 2n \to \theta(n)
}
$$

d)
$$
\displaylines{
T(n)=T(n-1)+c^n \\
= (T(n-2) + c^{n-1} )+ c^n 
= \dots \text{ continues for k iterations} \dots= \sum ^k c^i \\
\text{The recurrence will repeat n times, as it will end on T(n-n)} \\
\sum^n c^i = \frac{c^{n+1}-1}{c-1} \to \theta(c^n)
}
$$


## Problem 5 (15 points) 
> Convert decimal to binary number and show recurrence relation and how time function (time complexity) for this divide and conquer problem is calculated. 1 

```
def recurse(int n, int A[]):
	if n==0:
		return
	recurse(n//2, A)
	A.append(n%2) # Remainder
	
def decToBinary(n):
	return "".join(recurse(n, []))	
```

The algorithm will repeat for $k=log_2n$ iterations:
- $T(n) = T(n/2) + c$

Solving using master theorem:
- a=1, b=2, c=0
	- $log_21=0$, therefore: $T(n) = \theta(n^{\log_ba}logn) \to T(n) = \theta (logn)$
	
## Problem 6 (15 points) 
> Suppose you are choosing between the following two algorithms: 
> 1. Algorithm A solves problems by dividing them into seven subproblems of quarter the size, recursively solving each subproblem, and then combining the solutions in linear time. 
> 2. Algorithm B solves problems of size n by dividing them into nine subproblems of size n/3, recursively solving each subproblem, and then combining the solutions in O(n 2 ) time. 
> What are the running times of each of these algorithms (in big-O notation), and which would you choose? 

Alg A: $T(n) = 7T(n/4) + n$
Alg B: $T(n) = 9T(n/3) + n^2$

Solving each runtime using master theorem:
- Algorithm A: a=7, b=4, c=1
	- $log_47 > 1$, therefore: $T(n) = \theta(n^{log_ba}) \to T(n) =\theta (n^{\log_47})= \theta(n^{\approx1.404})$
- Algorithm B: a=9, b=3, c=2
	- $log_39 = 2$, therefore: $T(n) = \theta(n^{\log_ba}logn) \to T(n) = \theta (n^{2}logn)$

Since the running time log Algorithm A has a smaller running time than Algorithm B, $O(n^{\log_47}) < O(n^2logn)$, I would select Algorithm A.


## Problem 7 (10 points) 
> Verify by contradiction for the following: 
> - (a) 7n2 + 3n 6= O(n) 
> - (b) 3logn 6= Ω(nlogn) 2

Part a:
$$
\displaylines{
\text{To prove by contradiction, we assume the negation} \\
7n^2 + 3n = O(n) \\
\text{From this it follows: } 
7n^2 + 3n < cn \;|\; n\geq n_0 \\
7n + 3 < c \;|\; n\geq n_0. \\
\text{Trivially we can see there is no satisfying c. Therefore, we prove that } 7n^2 + 3n \neq O(n)
}
$$

Part b:
$$
\displaylines{
\text{To prove by contradiction, we assume the negation} \\
3\log n = \Omega(n\log n) \\
\text{From this it follows: } 
3\log n > cn\log n \;|\; n\geq n_0 \\
3 > cn \;|\; n\geq n_0. \\
\text{Trivially we can see there is no satisfying c. Therefore, we prove that } 3\log n \neq \Omega(n\log n)
}
$$

