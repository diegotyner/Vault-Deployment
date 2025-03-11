### Need to know:
1) Induction
Proving Induction:
- Create a base case where hypothesis is correct
- Assume f(k) is true (your base case)
- Prove that its true when n=k+1
	- Sometimes solutions lend themselves easily, other times you have to employ your assumption in your inductive proof
2) Asymptotic Analysis: Big-O, Limit Lemma
Proving Big-O
$$
\displaylines{
\text{Prove: } 2n^5 + 3n^3 + 6 = O(n^5) \\ 
\text{Since: } 2n^5 + 3n^3 + 6 \leq 2n^5 + 3n^5 + 6n^5 = 11n^5 \\
\text{You can pick }c=11, n_0=1, \text{which proves its }O(n^5) \text{ by existence}
}
$$

3) Asymptotic Run-Time Code Analysis

4) Divide and Conquer
	1) Solving Recurrences
		1) Substitution
		2) Recurrence Tree
		3) Masters Thm
	2) Design & Understnading
		1) Runtime of merge iven three lists of size n/3 each
		2) Algorithm that finds all subsets