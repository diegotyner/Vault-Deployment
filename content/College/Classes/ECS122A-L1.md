---
created:
  - " 09-26-2024 20:00"
tags:
  - Classes
aliases:
---

# 📗 -> 9/26/24: Course Intro 
---
## 🎤 Vocab
**Algorithm:** 
1) A well defined computational problem
	- Well defined: You know exactly what the input is, and exactly what the output should be 
2) Well defined procedure that transforms the input into the output 

## ❗ Unit and Larger Context
### Knowledge base:
- Inductive Proof
- Basic Code Analysis
- Definition of Big-O, Limit Lemma
- Studied different algorithms, like sorting
- Data Structures
- Graph Algorithms
	- DFS, BFS, MST, Shortest Path Dijkstra's, ...

### Part 1: Analysis
- Growth Functions
- Growth functions for recursive equations / algorithms

### Part 2: Algorithms by Solution Choice 
- Divide and Conquer Algorithms
- Greedy Algorithms 
- Dynamic Programming
### Part 3: Graph Algorithms
- BFS, DFS, MST, Shortest Path: (Bellmans, Dijkstra's, All Pairs Shortest Path)

### Part 4:
Defining P/NP, NP-Hard, NP-Complete problems
NP stands for non-deterministically polynomial
- All poly problems can be solved with 1 thread in poly time
- NP is not non-polynomial
- $P \subseteq NP$ 


Topics
- Asymptotic Analysis (Non-recursive Functions; BIG-O, limit lemma)
- Asymptotic Analysis (Recurrences - substitution)
- Asymptotic Analysis (Recurrence Tree)
- Asymptotic Analysis (Master Theorem)
- Divide & Conquer Algorithm Design
- Greedy Algorithms
- Dynamic Programming
	- Dynamic Programming is using caching / memoizing of functions to speed up algo
- Suboptimality and Greedy Proof
- Graphs (BFS, DFS, Bellman)
- Dijkstra Algorithm
- Prims Algorithm
- Kruskals Algorithm
- All Pairs Shortest Path
- P/NP


## ✒️ -> Scratch Notes
### Basic code analysis now
Ex1)
```cpp
for (i=1; i<20; i++) {
	print("hi")
}
```
Code above is O(1), will not scale with N

T(n) = running in input size N
T(n) = O(1),   T(n) = 40 = O(1)


Ex2) 
```cpp
for (i=1; i < n; i++) {
	print("hi")
}
```
T(n) = 2n = O(n)


Ex3) 
```cpp
while(i <= n) {
	i = i + 2
	print("hi")
}
```
T(n) = n/2 = O(n)


Ex4) 
```cpp
while (i<=n) {
	i = i * 2
	print("hi")
}
```
$2^i = n$
$i = log_2(n)$
O(log(n))

> With nested while loops, you multiply computational cost
```cpp
for (i to n) {
	for (j to n) {
		print("hi")
	}
}
```
O(n^2)

---
### Review Done
ECS 122A Growth Function

Map ints of size n, to a permutation of the set S such that:
- $S = {a_1, a_2, \dots , a_n}$  and  $a_1 \leq a_2 \leq \dots \leq a_n$
- Sorting problem

### Assessing an algorithm:
1) Does it halt?
2) Is it correct? (will it always produce the correct output)
3) How much memory is used? (Space complexity)
4) Is it fast?
5) How does data communicate


Let T(n) be the runtime of the algorithm given the input of n
T(n) is O(f(n)) if $\exists c,n_0$ such that $c>0, n\geq 0$, AND $\forall_{n\geq n_0} \;\; T(n) \leq cf(n)$
> Prove that something is big O by finding that there exists $c$ and $n_0$ such that the above is satisfied. Upon showing there existence, you have shown it is at least that big(O) 

For:
$$
\displaylines{
T(n) = 5n + 7n, \; \text{Prove T(n) is O(n)} \\
\text{Since: } 5n + 7n \leq 12n, \text{We have shown that there exists a } c \text{ and } n_0 (c=12, n_0=1) \\
\text{It is proven that T(n) is O(n)}
}
$$




## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

