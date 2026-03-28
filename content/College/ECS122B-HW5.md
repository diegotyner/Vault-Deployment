---
created:
  - " 03-14-2026 13:51"
tags:
---


## Problem 1 (20 points)
> Run the randomized selection (QuickSelect) algorithm by hand to find the 4th smallest term in the String S. Show all the steps of the execution.
> S = {2,3,6,5,5,21,8,13,11,20,4,1}
> note: Use a random number generator to determine the pivot point P
> https://www.random.org

*First iteration*
S=[2,3,6,5,5,21,8,13,11,20,4,1], len(S)=12
Randomly generate P from 0-11: P=1
S[1]=3, we divide it into two paritioned arrays around the pivot:
- S=[1, 2, 3, 6, 5, 5, 21, 8, 13, 11, 20, 4]

*Second Iteration*
The fourth smallest number is found within the high partition, so we restart our selection from there
- We are looking for the smallest number in this partition now, as we eliminated the three smallest numbers in the previous iteration. The smallest number in this partition is the 4th smallest overall.

S=[6, 5, 5, 21, 8, 13, 11, 20, 4], len(S)=9
Randomly generate P from 0-8: P=5
S[5]=13
- S=[6, 5, 5, 8, 4, 11, 13, 21, 20]

*Third Iteration*
Fourth smallest number is found within the smallest partition (still looking for the smallest number)
S=[6, 5, 5, 8, 4, 11], len(S)=6
P from 0-5: P=3
S[3]=8
- S=[6, 5, 5, 4, 8, 11]

*Fourth Iteration*
Recurse on smallest partition (still looking for the smallest number)
S=[6, 5, 5, 4], len(S)=4
P from 0-3: P=1
S[1]=5. (choosing to put in larger partition if equal as tiebreaker)
- S[4, 5, 5, 6]

*Fifth Iteration*
We immediately return 4, as it was partitioned as the smallest element within the subarray making it the fourth smallest overall

## Problem 2 (10 points)
> Mathematically analyze the running time complexity of Randomized selection algorithm when the selected pivot creates a 80% - 20% split.

$T(n) = T(\frac{8}{10}n) + c\cdot n$
in my notation:
- $c$ is the number of times to recurse until a good pivot is found
- Need to use $E[X]$ to find $c$
- $p$ is the probability of picking a good pivot: =0.6
	- Array splits: `| 0.2 bad | 0.6 good | 0.2 bad |` 

$$
\displaylines{
E[X] = p \cdot 1 + (1-p) \cdot (1+E[X]) \\
E[X] = 0.6 \cdot 1 + 0.4 \cdot (1+E[X]) \\
0.6E[X] = 1 \to E[X] = \frac{5}{3} \\
T(n) = T(\frac{8}{10}n) + \frac{5}{3}\cdot n \\\\\
\text{Solving with Master's Theorem} \\
T(n)=aT(\frac{n}{b}) + f(n) \\
a=1;\;b=\frac{10}{8};\; f(n)=\frac{5}{3}n, d=1 \\
\text{This is case 3: }\log_ba<d \text{ as } \log_{10/8}1=0, d=1 \\
f(n) \text{ dominates, making }T(n)=\theta(n)
}
$$


## Problem 3 (10 points)
> Analyze the time complexity of Randomized selection using the reduction technique and include your detailed analysis.

$p$ is the probability of picking a good pivot: =0.6
- Array splits: `| 0.2 bad | 0.6 good | 0.2 bad |` 

We reduce the randomized selection problem at each phase to a consecutive coinflip problem, where a success/heads occurs with p=0.6 and a failure/tails occurs with 1-p = 0.4

$$
\displaylines{
E[X] = \frac{1}{p} = \frac{1}{0.6} = \frac{5}{3} \\
E[w] \leq c \cdot n \sum^\infty_{j=0} E[X_j]\cdot(\frac{8}{10})^j \\
E[w] \leq c \cdot n \sum ^\infty_{j=0} \frac{5}{3}\cdot(\frac{8}{10})^j \\
E[w] \leq \frac{5}{3}cn \cdot \frac{1}{1-\frac{8}{10}} = \frac{5}{3}cn\cdot5=\frac{25}{3}cn = O(n)\\
}
$$

## Problem 4 (20 points)
> In randomized selection, we are told that the expected value of randomly selecting a pivot in the middle 50% percentile is 2. Analyze given that your expected value of getting a number in the middle 60% is 10. Give the recurrence relation and the upperbound running time complexity.

We are given that $E[X_j] = 10$

Therefore: $T(n) = T(\frac{6}{10}n)+10n$ 

$$
\displaylines{
\text{Solving with Master's Theorem} \\
T(n)=aT(\frac{n}{b}) + f(n) \\
a=1;\;b=\frac{10}{6};\; f(n)=10n, d=1 \\
\text{This is case 3: }\log_ba<d \text{ as } \log_{10/6}1=0, d=1 \\
f(n) \text{ dominates, making }T(n)=\theta(n)
}
$$


## Problem 5 (20 points)
> How to prove a problem is NP-Complete? Provide an example problem and the proof that the problem is NP-Complete.

The two steps to showing a problem is NP-complete are as follows:
1) Prove that problem $L \in NP$. This is done by showing that a solution can be verified in polynomial time.
2) Prove that problem $L\in NP\text{-hard}$. This is commonly showing that a known $NP\text{-complete}$ problem $L'$ can be reduced to problem $L$ in polynomial time ($L' \leq_p L$)
	1) To prove that it is reduceable, it is necessary to:
		1) Show a mapping function f
		2) Prove that the function satisfies $x\in L'\ \iff f(x)\in L$.
		3) Prove that the algorithm computing f runs in polynomial time

For an example proof, look at the proof for K-Clique being NP-Complete in problem 6. It implements the proof framework mentioned above.
## Problem 6 (20 points)
> Prove that K-Clique Decision problem is NP-Complete. Show your entire work. 

To prove K-Clique $\in$ NP-complete, we show that
1) K-Clique $\in$ NP
2) K-Clique $\in$ NP-hard

*Part 1* - Prove K-Clique $\in$ NP

Given a set S of the nodes of graph G(V, E), we can verify if they comprise a clique in polynomial time:
- The algorithm will run once per node in set S, which is at most of the degree O(k)
	- $|S| \leq |G| \to O(|S|) = O(|G|)=O(k)$
- For every node in S, the algorithm will run at most O(k) times. A node with more than this amount of connections would be invalid, and immediately disqualify the clique.
- Combining this, our verification algorithm would run in $O(k^2)$. 

This is verifiable in polynomial time, meaning K-Clique $\in$ NP

*Part 2* - Prove K-Clique $\in$ NP-hard

To do this, we use known NP-complete problem, the 3-CNF-SAT problem.

We reduce from 3-CNF-SAT to the K-Clique problem using the following mapping function:

Mapping function f: Given a 3-CNF formula $\phi$, construct graph G(V, E) as follows:
- Nodes are created for every literal ($x_1, \lnot x_2, \dots$) in $\phi$. They are assigned to clusters based on their membership of specific clauses ($c_1=x_1\lor \lnot x_2$).  
- Edges are created between nodes of different clauses, depending on if they can be simultaneously true. This means that nodes will have edges with all nodes in other clauses except for their negation.

This mapping function is both:
1) Runs in polynomial time:
	1) There are at maximum k clusters
	2) $O(|V|)$ nodes/literals
	3) $O(|V^2|)$ edges between nodes
	4) All steps of the mapping run in polynomial time, meaning f runs in polynomial time
2) Function is correct:
	1) All satisfiable assignment in $\phi$ correspond to a clique in G, as all variable assignments are connected with all nodes in other clusters with the sole exception of their negation, which is impossible with a satisfiable assignment
	2) All cliques in G correspond to a satisfiable assignment in $\phi$. A clique is formed by nodes that are connected to all other nodes in the set. In the context of the mapping, this means that all nodes within it contain no missing links/no contradictions. This would only be possible within a satisfiable assignment.

Knowing that the mapping function runs in polynomial time and is correct, we prove that K-Clique $\in$ NP-hard, as 3-CNF-SAT $\leq_P$ K-Clique

Since: K-Clique $\in$ NP $\cap$ NP-hard, it follows that K-Clique $\in$ NP-complete. 

