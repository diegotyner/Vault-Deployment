---
created:
  - " 10-03-2024 19:40"
tags:
  - Classes
aliases:
---

# 📗 -> 10/3/24: Analyzing Time Complexity
---
## 🎤 Vocab


## ❗ Unit and Larger Context
$\sum^x_{i=0}2^i = 2^{x+1} -1$
$\sum^x_{i=0}r^i \leq \sum^\infty_{i=0}r^i \leq \frac{1}{1-r}$ when |r| < 1
$\sum^x_{i=0}a^i = \frac{a^{x+1} - 1}{a - 1}$
$\sum^x_{i=0}a = a(x+1)$
$\sum^{n}_{i=0} \frac{1}{2}^i = 2$
> ^ zenos paradox / achilles and hare. That expression approaches 2 till infinity


## ✒️ -> Scratch Notes

### Divide and Conquer Rehash
Def: Break up problem into smaller subproblems and conquer by solving those subproblems w/ same algo. Merge the solutions. 
1) Divide
2) Answer (base case?)
3) Merge Solutions

Last Time:
- Binary Search
- Merge sort
- Quicksort

```cpp
int smallestLinear (int arr[]) {
	smallest = A[1]
	for (i=2 to n) { // O(n) block
		if (smallest > A[i]) => smallest = A[i]
	}
	return smallest;
}
int r_smallest (int arr[]) {
	if (size == 1) return A[1];
	x = r_smallest(A[1... n/2]; // T(n/2)
	y = r_smallest(A[n/2... n]; // T(n/2)
	return min(x, y);
}
```
T(n) = runtime of input n
T(n) = O(1) + 2T(n/2)

```cpp
bool Binary_Search(int A[], int x) {
	if (size == 1) return A[1] == x 
	if (x > A[mid]) => go right //A[n/2 + 1 ... n]
	else => go left //A[1... n/2]
}

int BS[int A[], int x] {
	if (size == 1) return A[1] == x
	if (A[n/2] < x) BS(A[n/2 + 1 ... n])
	else BS(A[1 ... n/2])
}
```
T(n) = O(1) + T(n/2)
1) n
	1) n/2 + O(1)
		1) n/4 + O(1)
			1) ...
				1) 1

## $\frac{n}{2^i}$  of array called at i-th iteration of function call.
$\frac{n}{2^i} = 1, n=2^i, log_2(n) = i$
$\sum^{log_2(n)}_{i=0}O(1) = O(1)(log_2(n) + 1) = O(log_2(n))$

T(n) = 2T(n/2) + 2
Work at each level: 
- 1(2) **//** first call
	- 2(2) **//**  2 calls of the function
		- 4(2) **//** each of the 2 children calls twice
			- ...
Work at each level: $2^i (2)$
$\sum^{log_2(n)}_{i=0}2^i(2) = 2(2^{log_2(n) + 1}) - 1 = 2(n + 1) = O(n)$
Note: $\sum^x_{i=0}2^i = 2^{x+1} -1$



```cpp
int[] MS (int A[]) { // MS = Merge Sort
	if (size == 1) return A[1];
	int[] B = MS(A[1...n/2]);
	int[] C = MS(A[n/2 + 1...n]);
	return MERGE(B, C); // Cost of merge is O(n), because its merging n/2 and n/2 data 
	// comparison cost * total items. With ints its O(1), not necessarily in general (like for deep objects, strings)
} 
```

T(n) = O(1) + O(1) + 2T(n/2) + O(n) = O(n) + 2T(n/2)   *<- this is the famous recurrence for merge sort*
Work at each tree level:
- O(n) = n
	- 2(n/2) = n   **//** there are 2 calls of a n/2 operation (merging), this creates another O(n) cost
		- 4(n/4) = n **//** same as above.
Work at each level is n
How many levels?
You bottom out when $\frac{n}{2^i} = 1, i = log_2(n)$. Therefore, $log_2(n)$ levels.
$\sum^{log_2(n)}_{i=0}n = 2(n^{log_2(n) + 1}) - 1 = 2(n + 1) = O(n)$


T(n) = 2T(n/2) + n^2
n

Work at each level:
- n
	- 2(n/2)^2
		- 4(n/4)^2
Work = $2^i (\frac{n}{2^i})^2$ 
Depth i=0 to log2(n)
$\sum^{log_2(n)}_{i=0}2^i (\frac{n}{2^i})^2 = \sum^{log_2(n)}_{i=0}n^2 (\frac{2}{4})^i = n^2 \sum^{log_2(n)}_{i=0} (\frac{1}{2})^i = n^2 (2) = O(n^2)$


### Master Theorem Intro
$$ \displaylines{
T(n) = 9T(n/3) + O(n) \;\; \text{Tree Wins} \\
T(n) = 9T(n/3) + O(n^2) \;\; \text{Both Wins} \\
T(n) = 9T(n/3) + O(n^3) \;\; \text{First Work will win} \\
}
$$
**__ Wins:**
T(n) = 3T(n/3) + O(n)
```cpp
foo(int A[]) {
	for (i in n) print(hello) // O(n)
	foo(A[1st third]) // T(n/3)
	foo(A[2nd third]) // T(n/3)
	foo(A[3rd third]) // T(n/3)
	return // O(1)
}
```

Work at each level:
- n
	- 3(n/3) = n 
		- 9(n/9) = n
Work at each level: n
$\frac{n}{3^i} = 1, i = log_3(n)$
Levels i: $i = log_3(n)$
...



**Work Wins:**
T(n) = 2T(n/4) + n
Work at each level:
- n
	- 2(n/4)
		- 4(n/16)
			- 8(n/4^3)
Work at each level:  $2^i \frac{n}{4^i}$
Depth: $log_4(n)$
Total: 
$\sum^{log_4(n)}_{i=0}2^i \frac{n}{4^i} = n \sum^{log_4(n)}_{i=0} \frac{1}{2}^i = ... = 2n = O(n)$




## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

