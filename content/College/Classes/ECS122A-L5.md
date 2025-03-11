---
created:
  - " 10-10-2024 19:58"
tags:
  - Classes
aliases:
---

# 📗 -> 10/10: Algorithm Analysis Continued
---

## 🎤 Vocab


## ❗ Unit and Larger Context
### Master Theorem
T(n) = AT(n/B) + n^C


## ✒️ -> Scratch Notes
Worked Example:
$$
\displaylines{
T(n) = 4T(n/2) + n \\\\
\text{Master Theorem: } A=4, B=2, D=1 \\
log_2(4) \text{ vs. } 1 \\
O(n^2) \\\\
}
$$
Tree Method:
- n
	- 4(n/2) <- splits off 4 times, does n/2 work
		- 4^2(n/4)
Work: i is the level, $4^i(\frac{n}{2^i})$
Depth: 
$$
\displaylines{
\frac{n}{2^i} = 1 \\
n=2^i \\
log_2(n) = i \\

\sum\limits_{i=0} ^{log_2n}  3 
}
$$

Steps:
1) Assume T(n) = O(n^2) for all n <= k - 1
			<= cn^2
2) Solve for c when n=k
n=k, T(k) = 4T(k/2) + k <= ck^2
		4c(k/2)^2 + k
		 ck^2 + k <= ck^2
		 k <= 0
		 ^ FALSE, not true
Equation can never be solved. Our O(n) guess was too low
Again...
Steps:
1) Assume T(n) = O(n^2) for all n <= k - 1
			<= cn^2 + dn
2) Solve for c when n=k
n=k, T(k) = 4T(k/2) + k <= ck^2 + dn
		4(c(k/2)^2 + d(k/2))+ k <= ck^2 + dn
		 4ck^2 / 4 + 4dk/2 + k <= ck^2 + dn
		 2dk +k <= dk
		 1dk <= -k
		 d <= -1
		 ^ FALSE, not true
Equation can never be solved. Our O(n) guess was too low


### Master Theorem
T(n) = At(n/b) + f(n)
$n^{log_bA}$ vs f(n)
if x is bigger => Case A

### Case A: Prove
$f(n0 = O(n^{log_b(a-\epsilon)}), \epsilon>0$, then $T(n) = O(n^{log_b(A)})$
T(n) = $T(n/2) + n
n^log_2(4) + n
$n = O(n^{2-\epsilon})$
$lim \frac{n}{n^{2-\epsilon}} = lim \frac{1}{n^{1-\epsilon}} = 0$, that means there exists an epsilon, $\epsilon =.5$

### Case B: Prove
f(n) = $\Theta (n^{log_B (A)})$ => $T(n) = n^{log_B (A)} \cdot logn$
T(n = 2T(n/2) + n <- Mergesort
A=2, B=2, f(n)=n
$n^{log_2 2}=n, n=n$
n=$\Theta$(n) trivial => T(n) = O(nlogn)

T(n) = 9T(n/3) + 5n^2
$n^{log_39} = 5n^2$
Trivial, 

### Case 3: Prove
if $n^{log_BA} < f(n)$
Prove: 
1) $f(n) = \Omega (n^{log_ba + \epsilon}), \epsilon>0$   
2) $af(n/b) \leq f(n)$ for some c<1. Find c

T(n) = 4T(n/2) + n^3
$f(n) = \Omega(n^{2+\epsilon})$
$n^3 = \Omega(n^{2+\epsilon})$
$lim \frac{n^3}{n^{2+\epsilon}} = lim \frac{n}{n^\epsilon} = \infty, \epsilon=.5$


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

