

# Midterm 1:
---
### Summation:
$$
\displaylines{
\sum^x _{i=0} a = a(x+1) \\_
\text{Note that: } \sum ^n _{i=0} ar^i = \frac{a(1-r^{n+1})}{1-r} \text{ and that } \sum ^n _{i=1} a^i = \frac{a(a^n-1)}{a -1} \\
\sum^{\infty}_{i=0} (\frac{1}{2})^i = 2 \\
\sum^n_{i=1}ar^i \leq \sum^\infty_{i=1}ar^i \leq \frac{a}{1-r} \;\;\text {when |r| < 1} \\


}
$$
![[Summation-Formulas.png]]
![[Summation-Equations.png|300]]


### Algorithm Approaches
#### Divide and Conquer:
**Divide** - The problem into subproblems that are smaller instances of the same problem
**Conquer** - Solve the smallest instances recursively (calling the same function) 
- If instance is small enough, solve directly (base case)
**Combine** - Combine the solution to smaller instances into a final answer


#### Recursion?

### 3 Methods of Solving Recurrence
**Recursive** - A function that calls itself 
You can tell which will be the biggest contributor via Master Theorem, or inspection
$$ 
\displaylines{
T(n) = 9T(n/3) + O(n) \;\; \text{Tree Wins} \\
T(n) = 9T(n/3) + O(n^2) \;\; \text{Both Wins} \\
T(n) = 9T(n/3) + O(n^3) \;\; \text{First Work will win} \\
}
$$


Methods:
1) **Recurrence Tree Method** ([[ECS122A-L3|Relevant Lecture]])
	1) Find the work done at each level
	2) Find the depth / number of levels
	3) Do a sigma sum, and calculate the work done
	4) You now have work done
T(n) = 2T(n/2) + O(1)
Work: $2^i$(2)
Depth: $log_2(n)$
Total Work: $\sum ^{log_2(n)}_{i=0} 2^i(2) = O(n)$
2) **Substitution**
	1) Make a guess about the runtime
	2) Prove that it holds true for your guess, if not make a new guess
T(n) = T(n/6) + T(2n/6) + O(n)
Guess that T(n) = O(n)
	This would mean that $T(n) \leq c\,n \;\; \forall n \leq k-1$
T(k) = T(k/6) + T(2k/6) + O(k)
	by IH we can say that this is less than or equal to:
	= c(k/6) + c(2k/6) + ak $\leq$ ck
		c/2 + a $\leq$ c
		a $\leq$ c/2
		2a $\leq$ c
Our guess holds true, as c can be set to 2a and be true. 
3) **Master Theorem**
https://www.youtube.com/watch?v=2y0HQGd1-nA
$T(n) = aT(\frac{n}{b})+O(n^d)$
3 Cases:
1) $a > b^d$: The tree/subproblems win
	- Solution is $T(n)=O(n^{log_ba})$
2) $a=b^d$: They are both even
	- Solution is $T(n)=O(n^dlog(n))$
3) $a<b^d$: The initial work wins
	- Solution is $T(n^d)$




### Big __
**Big-O**: An upper bound as n goes to infinity. Saying that $T(n) \leq c\cdot f(n)$ for some $c,n_0$

**Big-$\Omega$**: Big O but for lower bound. Saying that $T(n) \geq c\cdot f(n)$ for some $c,n_0$

**Big-$\Theta$**: A function is big theta iff T(n) is Big O and Big Omega of some f(n)
Formally: $T(n) = \Theta (f(n)) \iff T(n)=O(f(n)) \land T(n)=\Omega(f(n))$

### Proving Big __
For Big O and Big Omega:
$$
\displaylines{
\text{Prove: } 2n^5 + 3n^3 + 6 = O(n^5) \\ 
\text{Since: } 2n^5 + 3n^3 + 6 \leq 2n^5 + 3n^5 + 6n^5 = 11n^5 \\
\text{You can pick }c=11, n_0=1, \text{which proves its }O(n^5) \text{ by existence}
}
$$
Can do the same but proving less than or equal to to prove big Omega

For Big Theta:
Prove that a function is **BOTH** big O and big Omega of some function. The constants $c,n_0$ do not need to be the same, just show that the function T(n) is $O(f(n))$ and $\Omega (f(n))$


### Limit lemma:
If $lim_{n\to \infty} \frac{f(n)}{g(n)} = L$
#### 3 Cases:
L=0 => f(n) = O(g(n))
L=$\infty$ => f(n) = $\Omega$(g(n))
L= some C => f(n)=$\Theta$(g(n))


### Big-O of Operations:
**Merge sort:** $O(nlogn)$

