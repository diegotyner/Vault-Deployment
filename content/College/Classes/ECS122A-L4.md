---
created:
  - " 10-08-2024 19:51"
tags:
  - Classes
aliases:
---

# 📗 -> 10/8/24: Master Theorem
---
## 🎤 Vocab


## ❗ Unit and Larger Context

> [!NOTE] Linear Selection
> A cool recurrence that uses the formula T(n) = T(n/7) + T(5k/7) + O(n)  


You'll end up with 2 kinds of equations:
$$
\displaylines{
\frac{r^{n+1}-1}{r-1} \\
\sum c \\
\sum r^i \\
\to|r| <1 \\
\to |r| \geq 1

}
$$


### Methods for Solving Recurrence:
So far we have studied:
1) Recurrence Tree Method
2) Substitution

We will cover next:
3) Master Theorem


## ✒️ -> Scratch Notes
$$
\displaylines{
T(n) = 16T(n/4) + n^3 \\
Work = 16^i (\frac{n}{4^i})^3 \\
Depth: \sum^{log_4n}_{i=0}(\frac{1}{4})^i n^3
}
$$


### Substitution:
1) Guess
2) Rectify via induction using def of Big-O
3) Solve for constants, c, $n_0$

T(n) = T(n/6) + T(2n/6) + O(n)
Guess T(n) = O(n)

n=k, assume it is Big O and find c and $n_0$
T(k) = T(k/6) + T(2k/6) + O(k)
	  $\leq$            $\leq$             $\leq$ 
	c(k/6)   + c(2k/6) + a(k)
	3/6 ck + ak $\leq$ 



T(n) = 2T(n/2) + O(n)
*Merge sort...*, so we know its actually nlogn

Guess T(n) = O(n)
T(n) <= cn for all n <= k-1
T(k) = 2T(k/2) + k <= ck
2c(k/2) + k <= ck
ck + k <= ck
> this is an example of where substitution fails


T(n) = 2T(n/2) + n, Guessing that T(n)=O(nlogn)
T(n) = O(nlogn)
	<= cnlogn    <- Definition of big O

T(k) <= 2T(k/2) + k <= cklogk
	2c(k/2)log(k/2) + k
	 ck\[logk - log2 2\] +k <= cklogk
	 cklogk -ck + k <= cklogk
	 -ck + k <= 0
	 1 <= c
$\exists$ $c=1, n_0=1$  


#### Step Guidelines:
1) Inductive Hypothesis, assume T(n) <= ck for all n <= k-1
2) Solv efor c, $n_0$ when n=k


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

