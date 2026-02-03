---
created:
  - " 01-16-2026 23:37"
tags:
---

## Q1
> How does selecting a pivot make a difference in the time complexity of Quick Sort algorithm? What kind of pivot should be avoided? Explain why.

The pivot chosen in quick sort determines the size of the subsequent divided arrays. Since we want our algorithm to run efficiently, we would optimally want the sub-arrays to be equal in size. To make this happen, we would want to choose a pivot number that is the median of the array, and not a number that is the largest or smallest of the array. 

Because of this, if the pivot is chosen is the first or last element, a pathological case occurs where the algorithm becomes O(n^2) on sorted input. The easiest way to fix this is to choose a random element for the pivot on each iteration, making it impossible to create a pathological data set for the algorithm.  

## Q2
> Use the Master theorem to compute the theta bound for Quick Sort algorithm when the pivot gives balanced partitions.

If pivots are chosen pathologically: $T(n) = T(0) + T(n-1) + n$ which is $\theta(n^2)$

Quicksort algorithm complexity (assuming pivots split input into rougly equal subproblems): $T(n) = 2T(n/2) + n$.
Solving using master theorem:
- a=2, b=2, c=1
- $log_22=1$, therefore our algorithm is $T(n) =\theta(n^{\log _ba}\log n)\to T(n)=\theta(n\log n)$

## Q3
> Explain the steps taken in the slide 26 to compute the Time Complexity (i.e., T(n) ) of recursively reversing a sequence. 

```
1  int[] reverse(int[] data, int low. int high) {
2  	if(low>high) return data; # O(1)
3  	swap(data[low],data[high]); # O(1)
4  	return reverse(data, ++low,--high); # T(n-2)
5  }
```

The algorithm runtime is defined as follows: $T(n)=T(n-2) + c$, which is $\theta(n)$

Going through the steps of the algorithm line by line:
1) Function definition, accepts an array and 2 array indices. This tracks our 'progress' through the array between recursive calls.
2) The base case, if our indices cross we return the data, having swapped the entire array
3) The swap, we switch the data contained at the target indices
4) The recursive call, we continue our reversing on a subarray, with a low index one higher and a high index one lower.

## Q4
> In the multiplication problem, assume that the operands x and y are represented in base-2 . We want to obtain x.y = ? (Example : x = 1100 , y = 1101 ) . Using the following equation, answer the questions below.
> x1 : corresponds to the lower-significant n/2 bits of x
> x0: corresponds to the higher-significant n/2 bits of x n: we assume that n is even in this case.

## Part 1) 
> Based on the number of subproblems above, compute T(n) and the theta bound for it. You can use the replacement strategy or Master Theorem. Explain your approach and provide your work.

The runtime for the algorithm would be $T(n) = 4T(n/2) + n$
Analyzing theta bound using master theorem:
- a=4,b=2,c=1
- $log_24>1$, therefore $T(n)=\theta(n^{log_24})\to T(n) =\theta(n^2)$

## Part 2) 
> Is there a way to reduce the time complexity similar to the optimization strategy discussed in lecture 4? Provide a comprehensive and detailed mathematical work. 

Yes, we can reduce the time complexity by reducing the number of multiplications (sub-problems) performed on each recursive step. This is done by combining the two middle terms into one term, r.

Derivation, 
- $x_1, y_1$: the upper n/2 bits of x/y
- $x_0,y_0$: the lower n/2 bits of x/y

$$
\displaylines{
r=(x_1 + x_0)(y_1 + y_0)= (x_1y_1) + (x_1y_0 + x_0y_1) + (x_0y_0) \\ 
\to (x_1y_0 + x_0y_1) = (x_1+x_0)(y_1+y_0) - x_1y_1 - x_0y_0 \\
\text{After that derivation, we use it to substitute into our subproblems:}\\\\

xy = (x_1\cdot 2^{n/2} +x_0)(y\cdot 2^{n/2}+y_0)= x_1y_1 \cdot 2^n + (x_1y_0 + x_0y_1)\cdot 2^{n/2}+x_0y_0 \\
= x_1y_1 \cdot 2^n + ((x_1+x_0)(y_1+y_0) - x_1y_1 - x_0y_0)\cdot 2^{n/2}+x_0y_0
}
$$

Using this formula, there's only three unique multiplications to compute: 
1) $x_1y_1$
2) $x_0y_0$
3) $(x_1+x_0)(y_1+y_0)$

Our new formula for the multiplication recurrence is: $T(n)=3T(n/2)+n$
Analyzing using the master theorem, we find that our new recurrence has a theta bound of $\theta(n^{\log _23})\approx \theta(n^{1.585})$ compared to our previous $\theta(n^2)$.
