---
created:
  - " 01-16-2026 12:57"
tags:
---

## Problem 1 (10 points)
> Write a pseudocode to design a divide and conquer multiplication algorithm to multiply the two binary numbers 10001011 and 10111001 in less than quadratic time. Explain your strategy and show the general structure for the recursion tree to support your answer.

For this we use the Karatsuba algorithm to reduce the complexity of multiplication from the naive $O(n^2)$ to $O(n^ {\log _2 3})$, with a general runtime of $T(n) = 3T(\frac{n}{2}) +n$.

```
def int_length(int x):
	returns number_of_digis(x)
def splitter(int x):
	return [first_half_ceiling(x), second_half_floored(x)]
def make_equal_length(int x, int y):
	pad_len = max((int_length(x), int_length(y))
	return [padded(x, pad_len), padded(y, pad_len), pad_len]

def dac_mult(int a, int b): # divide and conquer
	pad_a, pad_b, pad_len = make_equal_length(a, b)
	
	if int_length(pad_a) <= 1: 
		return a * b
	
	a1, a0 = splitter(pad_a)
	b1, b0 = splitter(pad_b)
	
	P1 = dac_mult(a1, b1) << 2m
	P2 = dac_mult(a0, b0) 
	r = dac_mult(a1+a0, b1+b0)
	return P1 + P2 + r 
```


## Problem 2 (5 points)
> Imagine you are multiplying two 8-bit binary numbers using the Karatsuba algorithm. How many total 2-bit multiplication must be performed to complete the entire 8-bit calculation? Explain your answer with sufficient and convincing details.

1 problem (8 bit each) -> 3 problems (4 bit each) -> 9 problems (2 bits each). Now that the sub problems are 2 bit each, we solve each of them (the 9 of them).

Mathematically (depth/iterations is `k`, number of bits is `n`): 
- Subproblems: $3^{k}$ where $k = 2^{log_2 (n/2)}$
- $depth=2^{log_2 8/2} = 2$, subproblems: $3^2 = 9$

## Problem 3 (10 points)
> Calculate the product of the following two 4-bit binary identifiers using exactly three sub- problems. Show your recurrence tree and the detailed math work using the Karatsuba algorithm.
• X=(1010)2 (Decimal 10)
• Y=(1100)2 (Decimal 12)

The division of this into subproblems will be as follows:
- $x1, x0 = 10, 10$
- $y1, y0 = 11, 00$
- P1: $(x1 \cdot y1) << 2m$
- P2: $(r-(x1\cdot y1) - (x0\cdot y0)) << m ;$ where $r=(x1 + x0) \cdot (y1 + y0)$
- P3: $(x0 \cdot y0)$
- Then: $x\cdot y = P1 + P2 + P3$

In the Karatsuba algorithm, each of the subproblems would be called as a recurrent sub problem to be solved, but we will explicitly solve each of the subproblems. The solutions to subproblems 1 and 3 are used in solving suproblem 2.

The recurrence tree is as follows:
1) $1010 \cdot 1100 = P1 + P2 + P3$
	1) $(10 \cdot 11) << 4$
		1) ...
	2) $r - (10\cdot11)-(10\cdot00) << 2$
		1) ...
	3) $(10 \cdot 00)$
		1) ...

- P1: $(10 \cdot 11)\cdot 10^{2m} = (110) << 4 = 1100000$
- P3: $(10 \cdot 00) = 0$
- P2: $r=(10+10)\cdot(11 + 00) = 100 \cdot 011 = 1100$
	- $(1100 - (10\cdot11) - (10\cdot00) ) << 2 = ( 1100 - 110 - 0) << 2 = 110 << 2 = 11000$
- $x\cdot y = 1100000 + 0 + 11000 = 1111000$

Verifying: $1111000_2 = 120_{10}$
Our calculation of $10 \cdot 12$ in decimal is accurate. 


## Problem 4 (10 points)
> Compute the time function T(n) for the improved Divide and Conquer integer multiplication algorithm discussed in lecture 4 and explain your strategy. Next, compute the average time complexity (i.e., θ) without using the Master Theorem. Provide your complete mathematical work.

If talking about the first attempt at D&C algorithm with 4 multiplications:
- $T(n) = 4T(\frac{n}{2}) +n$
If talking about the best one we covered (Karatsuba's) with 3 multiplications:
- $T(n) = 3T(\frac{n}{2}) +n$

$$
\displaylines{
\text{Naive D\&C: } \\
T(n)= \\
= n + 4T(n/2) \\
= n + 4(n/2 + 4T(n/4)) = n +2n + 4^2T(\frac{n}{2^2}) \\
= n + 4(n/2 + 4(n/4 + 4T(n/8))) = n + 2n + 2^2n + 4^3 T(\frac{n}{2^3})\\
= \dots \\
= n\sum^{k-1} _{i=0} 2^i + 4^kT(n/2^k) \\
n/2^k=1 \to k = log_2n \text{ (shorthand as logn)}\\
= n\sum^{\log(n)-1} _{i=0} 2^i + 4^{\log n}T(1) \\
= n\frac{2^{\log(n) }-1}{2-1} + n^2T(1) \\
= n(n-1) + n^2T(1) \\ 
\to O(n^2)
}
$$

$$
\displaylines{
\text{Karatsuba's: } \\
T(n)= \\
= n + 3T(n/2) \\
= n + 3(n/2 + 3T(n/4)) = n + \frac{3}{2} n + 3^2T(\frac{n}{2^2}) \\
= n + 3(n/2 + 3(n/4 + 3T(n/8))) = n + \frac{3}{2}n + (\frac{3}{2})^2n + 3^3 T(\frac{n}{2^3})\\
= \dots \\
= n\sum^{k-1} _{i=0} \frac{3}{2}^i + 3^kT(n/2^k) \\
n/2^k=1 \to k = log_2n \text{ (shorthand as logn)}\\
= n\sum^{\log(n)-1} _{i=0} \frac{3}{2}^i + 3^{\log n}T(1) \\
= n\frac{\frac{3}{2}^{\log(n) }-1}{\frac{3}{2}-1} + n^{\log _23}T(1) \\
= n\frac{\frac{n^{log_23}}{n}-1}{\frac{1}{2}} + n^{\log _23}T(1) \\
= 2n(\frac{n^{log_23}}{n}-1) + n^{\log _23}T(1) \\
= 2n^{log_23}-2n + n^{\log _23}T(1) \\ 
\to O(n^{log_23})
}
$$

## Problem 5 (20 points)
> From the book “Algorithm Design - John Kleinberg - Éva Tardos” provided on canvas, solve exercise 6 from chapter 5, on page 248. Provide your complete work with sufficient explanation. 
> 
> Consider an n-node complete binary tree T, where n = 2d - 1 for some d. Each node v of T is labeled with a real number xv. You may assume that the real numbers labeling the nodes are all distinct. A node v of T is a local minimum ff the label xv is less than the label xw for all nodes w that are joined to v by an edge. You are given such a complete binary tree T, but the labeling is only specified in the following implicit way: for each node v, you can determine the value xu by probing the node v. Show how to find a local minimum of T using only O(log n) probes to the nodes of T.

Our general algorithm will be as follows:
- Start at the root, and probe each child node. 
	- If each child node is larger than the root, we terminate and have found a local minimum
- Otherwise, we continue to a smaller node and repeat our algorithm 
- Eventually, we will reach either:
	- a node for which each child is larger and the parent is larger (because we only explore smaller nodes), meaning we found a local minimum
	- a leaf that has no children but has a parent that is larger. This satisfies our conditions for local minima.

This algorithm will run in log(n) time, as leaf nodes are at depth log(n) and at each step we perform a constant number of probes (2). $2\cdot log(n) \to O(logn)$

## Problem 6 (15 points)
> Using the lecture slides, provide the detailed computation for computing the average tight bound (i.e., θ) for the Naïve String Matching Algorithm and verify that time complexity by determining the values for c and n0.

Psuedocode for the naive matcher is as follows:
```
def naive_matcher(char T[], char P[]):
	matches = []
	n, m = len(T), len(P)
	for i in range(n-m): // O(n-m+1)
		if P[:m] == T[i:m+i]: // comparison is O(m)
			matches.append(i)
	return matches
```

The outer loop repeats $O(n-m+1)$ times, and the inner comparison is $O(m)$
This makes the naive algorithm $O(m(n-m+1))$ on the worst case.

Being more specific for the tight bound, we know each consecutive comparison operation has a $\frac{1}{|\sum|}$ probability of occurring. This is because if an early comparison terminates, then the whole string does not need to be checked. Based on this, we know each comparison has a expected runtime of $1+\frac{1}{|\sum|}+\frac{1}{|\sum|^2}+\dots$ operations. The geometric series ($\sum ar^2$) of $|r|<1$ converges to the constant $\frac{a}{1-r}$ Given that it is a constant, it can be factored out of our expected runtime expression.

On average, our algorithm will iterate (n-m+1) times and the comparison will be a constant, meaning our tight bound is:
- $\theta(n-m+1) \approx \theta(n)$


## Problem 7 (20 points)
> In the Naïve String Matching Algorithm, suppose that all the characters in the pattern P are different. Make changes to the original algorithm pseudocode to make improvements to the algorithm’s time complexity when the algorithm is running on an n-character input text T and re-write the pseudocode. Then, explain your strategy. What is the Big-O complexity of your proposed algorithm? Provide a detailed explanation to support your computation.

Our assumption that all characters in pattern P are unique allows us to speed up our algorithm considerably, because we will no longer have to backtrack. 

```
def faster_string_matcher(string T, string P):
	int n = len(P)
	int i, match_len = 0
	int matches[]
	
	while i < len(T): O(n)
		if P[match_len] == T[i]:
			match_len++
			if match_len == n:
				matches.append(i-n+1)
				match_len = 0
			i++
		elif match_len > 0: 
			match_len = 0
		else: 
			i++
	return matches
```

Outcomes:
1) A continued match, where `i` and `match_len` are both incremented
2) A failed in progress match,  `i` stays at index `i` and `match_len` is set to zero. This outcome cannot happen twice in a row, and the next step is guaranteed to advance the `i` pointer.
3) A failed initial match, where `i` advances to `i+1` and `match_len` stays at zero

At no point in the algorithm is there any backtracking that could increase the computational complexity, and at absolute worst there will be `2n` comparisons if the first character of a pattern continually matches, while the second continually mismatches (T="AAAAA", P="AB"). In this worst case, our algorithm is still $O(n)$


## Problem 8 (10 points)
> In the Rabin Karp Algorithm, explain when computing the hash value for the pattern P leads to a performance bottleneck? Provide your computation of the time complexity to support your answer.

I'm assuming this question is purely on the Naive Rabin Karp Algorithm, which doesn't introduce the modular enhancement which allows the algorithm to run efficiently for patterns which would normally trigger the performance bottleneck:

The performance bottleneck emerges when the hash of P does not fit into the word size of the processor. This results in the computer needing to use "BigInt" arithmetic for computations, which makes operations like adding or multiplying take $O(m)$ time instead of the usual $O(1)$.

These issues are introduced when the length of pattern P (`m`) is too large, or when the vocabulary (`d`) becomes too large, and updates to the Rolling Hash are no longer $O(1)$ operations, instead becoming $O(m)$.

Algorithmic complexity:
- Preprocessing: $O(m^2)$. It is usually $O(m)$ from each iteration of Horner's Rule, but with BigInt arithmetic, each iteration is becomes an $O(m)$ operation. 
- Iterations: $O(n-m+1)$
	- Each iteration: usually $O(1)$, but now $O(m)$
	
Combining these together, we find that the final complexity is $O(m^2 + m(n-m+1))$. When $n$ is large, the $O(nm)$ term dominates.