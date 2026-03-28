---
created:
  - " 03-19-2026 18:45"
tags:
---


### Topics (not comprehensive):
1) Suffix Tree Construction
	- Naive
2) LCP Array construction and usage
3) Ukkonen's Algorithm (using the tricks)
	- What are suffix links? how are they constructed? their role?
	- Edge label compressions, ski/count
	- time complexity
4) BWT string: construction, reversal, and indexing algorithms
5) Randomized algos (randomized quick sort and quick select)
6) Benefit of the discussed randomized algorithms
7) P, NP, NP-heard problems
8) NP complete problems, proof, reduction, how to perform reduction

#### Suffix Tree
*What it does:* A data structure for string matching, a form of trie.
*How it does it:* Represents all suffixes of a string S in a compressed form.
- every internal node has at least 2 children
Append the '$' so that no suffix is the prefix of another suffix
##### Naive
*Construction*:
1) Create n suffixes - O(n^2)
2) Insert suffix i into tree - O(n^2):
	1) Find longest prefix between i and the existing tree, and break the edge at the last matched character
	2) Label nodes with paths to maintain structure, and adjust pointers
	3) Repeat for all j characters of substring 

*Search* (for pattern P in text T): 
- Follow a path down from root of suffix tree of T based on characters in P
Time complexity: O(|P| + m) (m=number of occurrences of P in S)
- Assuming a finite alphabet

##### Ukkonen's Algorithm
A O(n) construction algorithm for suffix trees
- With no optimizations, the algorithm is O(n^3).
	- O(n) loop for each suffix
	- O(n) traversal worst case for each string
	- O(n) updates to update leaf ends 
x`x`- With optimizations:
	- Skip links - Link internal nodes of suffix tree to other nodes for compression
	- Skip/count trick - Skip to next node rather than next character when traversing the suffix tree
		- Suffix link + skip-counts makes algo O(n^2)
	- Edge-label compression - Use pointer to a global end to automatically update leaves (makes updating leaves O(1) rather than O(n))

#### Advanced Suffix Structures
##### Suffix Array 
*What it does:* Helps with finding occurrences of a pattern in a text
- Can do Binary Search on the suffix array
	- BS based pattern matching time: $O(mlogn + km)$
	- |P|=m, |S|=n, k is number of occurances of P
*How it does it:* A lexicographically sorted array of all n suffixes

*Construction*
- Can be done in $O(n^2logn)$ with naive algo (n strings to sort, O(n) comparison)
- Can be constructed from suffix tree in linear time (lexicographic order DFS algorithm)
##### Longest Common Prefix Array (LCP)
*What it does:* Holds the length of the common prefix between i and (i-1) suffixes in the suffix array

*Construction*
- $O(n^2)$

#### BWT 
##### Ranking
The rank array represents the lexicographical order of every character, as they occur in the BWT string.

##### BWT Algorithm
*What it does:* The algorithm creates a reversible string that can be used for data compression, that rearranges that order of characters of an input string
- This is the whole "rearranging so that compression becomes more efficient" idea
*How it does it:* It orders circular shifts of string T'

*Construction*
1) Construct string T'=T+'$' 
2) Create all circular shifts of string T', and sort them in lexicographic order for a BWT matrix
3) Extract the last column of the BWT matrix to obtain the BWT string
Naive time: O(n^2) + O(n^2logn) + O(n) = O(n^2logn)
Constructing BWT using SA is O(n)

*Reconstruction*
1) Start with '$' as character c
2) Find position of character c in the BWT string 
3) Find the rank associated with index i (rank[i])
4) Go to the index associated with the rank, and follow that 'linked list'. Append the characters as you go
5) Reverse your string

##### FM Index
*What it is*
- An index that combines BWT with a few small auxiliary data structures
- Has:
	- BWT string, SA array, rank array, more?
*What it does*
- Allows searching for P in BWM
	- ?

Constructing BWT using SA is O(n)
Reversing BWT String is O(n)
Searching for a pattern P is O(m)

#### Randomized Algorithms
Randomized vs. Deterministic 
- Minimimum cut problem (minimum number of cuts to create two disconnected graphs)
	- Deterministic: Edmond-Karp Algorithm
	- Randomized: Karger's Algorithm (Monte Carlo) Random edge selection
##### Monte Carlo and Las Vegas

|              | Monte Carlo            | Las Vegas                    |
| ------------ | ---------------------- | ---------------------------- |
| Running time | Fixed (Deterministic)  | Variable (Non-deterministic) |
| Correctness  | Random / Probabilistic | Guaranteed                   |
| Examples     | Random Forest / SGD    | Quicksort                    |

##### Solving for randomized algorithm running times
Time complexity of a randomized algorithm: 
- $E(x) = \sum_{i\in \Omega}P(X_i)\cdot X_i$

Understand derivations for:
- Randomized Quicksort
- Randomized Selection

 #### NP Completeness
*P*: Polynomial Time - Can be solved, but also checked in polynomial time.
- Sorting, searching, matching
*NP*: Nondeterministic Polynomial Time - Can be checked in polynomial time, unknown if can also be solved in polynomial time.
- SAT, Hamilton Cycle, Subset Sum
*NP-hard*: Problems that are as hard as the hardest problems in NP. Verification not guaranteed in polynomial time.
- Max-cut problem
*NP-complete*: A problem that is both NP (verifieable in polynomial time) and NP-hard (as hard as the hardest problem in NP).

Understand derivations for:
- SAT ∝ 0/1 Knapsack
- 3-CNF-SAT ≤p K-Clique
- K-Clique ≤p Independent Set (IS)

##### Polynomial Reduction

##### Formal Proof Steps
1) Prove that L $\in$ NP (show it can be verified in polynomial time)
2) Prove that L $\in$ NP-hard by selecting a known NP-complete problem L'
	1) Perform a reduction?