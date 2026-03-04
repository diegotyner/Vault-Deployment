---
created:
  - " 02-24-2026 00:43"
tags:
---


## Problem 1

> Given the array BWT[1:n], write the pseudocode to compute the array rank[1:n] in θ(n) time , assuming that the alphabet size is constant. 


T="rutabaga"
T'="rutabaga$"

|      | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BWT  | a   | g   | t   | b   | a   | a   | $   | u   | r   |
| rank | 2   | 6   | 8   | 5   | 3   | 4   | 1   | 9   | 7   |


```python
def BWT_to_array_rank(char[] BWT):
	seen = set()
	char_arr = []
	int rank[BWT.length]
	
	for ch in BWT: # O(n)
		if ch in seen:
			continue
		# else...
		seen.add(ch)
		char_arr.append(ch)
	
	# Since vocab is constant, O(1)
	lex_order = sorted(char_arr) 
	
	counter = 1
	for ch_order in lex_order: # O(1)
		for i, ch_bwt in enumerate(BWT): # O(n)
			if ch_bwt == ch_order:
				rank[i] = counter
				counter++
	return rank 
```

Code could use hash map to improve performance in finding characters in the second pass, but performance will still fundamentally be $O(n)$.  Since alphabet size is constant, we will only iterate a constant number of times over the BWT array: $O(d n) = O(n)$.

$T(n) = n + dn \to O(n)$

## Problem 2

> Given the arrays BWT[1:n] and rank[1:n], write pseudocode to compute T’ in θ(n) time.

```python
def BWT_and_rank_to_T(char[] BWT, int[] rank):
	char res[];
	
	target = BWT.index('$') # O(n)
	while len(res) < len(BWT): # O(n)
		res.append(BWT[target]) # O(1)
		target = rank[target] # O(1)
	
	T_backwards = ''.join(res) # O(n)
	T_prime = T_backwards[::-1] # O(n)
	return T_prime
```

Code is $O(n)$
- Initial $O(n)$ pass to find the index of the terminator
- This is followed by n iterations of $O(1)$ passes through the BWT and rank arrays traversing the string. $O(n)$ total.
- We finish by doing two $O(n)$ passes to prepare T' for output, constructing and reversing our output string. Could be optimized, but stays $O(n)$

$T(n) = n + n + 2n \to O(n)$

