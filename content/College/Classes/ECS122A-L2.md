---
created:
  - " 10-01-2024 19:47"
tags:
  - Classes
aliases:
---

# 📗 -> 10/1/24
---
### When lectures is over, add the content as aliases above
[Lecture Slide Link]

## 🎤 Vocab


## ❗ Unit and Larger Context
Small summary

## ✒️ -> Scratch Notes
$$\sum^n_{i=1}\sum^i_{j=1}1 = \sum^n_{i=1}i = \frac{n(n+1)}{2} = O(n^2)$$

T(n) = O(f(n))
> The function T(n) with n input is less than cg(n) for some $c$ AND $a_o$ as long as $n > n_0$

T(n) = O(f(n)) if $\exists \,c, n_0$ s.t. $\forall n \geq n_0 \;\; T(n) \leq c  f(n)$ 

**Big Omega $\Omega$** - T(n) is $\Omega$ (f(n)) if there exsts c, $n_0$ `[c > 0, n_0 >= 0` such that 
$$\forall n \geq n_0, \;\; T(n) \geq cf(n)$$
Omega - T(n) is lower bounded by f(n) (but actually cf(n)) 
Big O - T(n) has an upper bound of f(n) (but actually cf(n))

$$
\displaylines{
5n^3 + 70n + 100 = \Omega(n^3) \\
5n^3 + 0 + 0 \geq cn^3 \\
\exists \, c=5, n_0 = 0
}
$$

In the bottom, we put the restraint that n is greater than 100
$$
\displaylines{
5n^3 + 70n - 100 = \Omega(n^3) \\
5n^3 + 69n + n - 100 \geq cn^3 \\
5n^3 + 0 + n - 100 \geq cn^3 \\
5n^3 + 0 + 0 \geq cn^3 \\
5n^3 \geq cn^3 \\
\exists \, c=5, n_0 = 100
}
$$


Big-$\Theta$: T(n) = $\Theta$ iff 
- T(n) = O(f(n))
- T(n) = $\Omega$(f(n))

Prove there exists c and $n_0$ such that T(n) is both Omega and Big O of n. 
This proves that f(n) is Big-$\Theta$ of n.


**Limit Lemma**
$lim_{n\rightarrow \infty} \frac{f(n)}{g(n)} = L$
if L =0 => f(n) = O(g(n))
L =$\infty$ => f(n) = $\Omega$ g(n)
L = constant not zero => f(n) = $\Theta$(g(n))



### Ex)
$$
\displaylines{T(n) = 5n^3 - 100n^3, f(n)=n^3 \\
\text{Prove } T(n) = \Omega(n^3) \\
lim_{n\rightarrow \infty} \frac{5n^3 - 100n^3}{n^3} = lim_{n\rightarrow \infty} \frac{15n^3 - 200n^3}{3n^2} = lim_{n\rightarrow \infty} \frac{30n - 200}{6n} = \frac{30}{6} \\
T(n) = \Theta(n^3) \rightarrow T(n) = \Omega(n^3)
}$$


### Divide and Conquer:
**Divide** - The problem into subproblems that are smaller instances of the same problem
**Conquer** - Solve the smallest instances recursively (calling the same function) 
- If instance is small enough, solve directly (base case)
**Combine** - Combine the solution to smaller instances into a final answer

```cpp
// not dividing and conquering
int callProfit Revenue(array cast, array revenue) {
	int x = ADDUP COST(COST[])
	int y = ADDUP REVENUE(REVENUES[])
	return y-x
}
```


Assume you have an array s, such that |s| = n. Find the smallest number in S. 
Can do a linear search
Or, can do a divide and conquer approach
```cpp
int smallest (A[]) {
	if (n==1) return A[1] 
	int x = smallest(A[1...n/2])
	int y = smallest(A[n/2 + 1...n])
	if (x < y) {
		return x
	} else {
		return y
	}	
}
```
T(n) = Runtime of case on input size r
$T(n) = 3 + 2T(\frac{n}{2})$

### 3 Methods of Solving Recurrence
**Recursive** - A function that calls itself 
Methods:
1) Recurrence Tree Method
2) Substitution
3) Master Theorem

$T(n) = 2T(\frac{n}{2} + O(n))$
^ mergesort, which is O(nlogn)

1) Create trees to describe all the work being done
2) 


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

