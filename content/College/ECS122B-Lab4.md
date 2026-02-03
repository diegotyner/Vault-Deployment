---
created:
  - " 01-27-2026 17:26"
tags:
---





> Q1: Exercise 32.2-1 from Introduction to Algorithms, By Thomas H. Coremen: Working modulo q =11, how many spurious hits does the Enhanced Rabin-Karp matcher encounter in the text T = “3141592653589793” when looking for the pattern P=“26”? Suppose d=10. Show your detailed work.

text t = '314...793'
pattern p: 26
q: 11

Hash of (p%q): 26 % 11 = 4
Text Hashing:

| index | hash | mod 11 | matches |
| ----- | ---- | ------ | ------- |
| 0     | 31   | 9      | ❌       |
| 1     | 14   | 3      | ❌       |
| 2     | 41   | 8      | ❌       |
| 3     | 15   | 4      | ✅       |
| 4     | 59   | 4      | ✅       |
| 5     | 92   | 4      | ✅       |
| 6     | 26   | 4      | ✅       |
| 7     | 65   | 10     | ❌       |
| 8     | 53   | 9      | ❌       |
| 9     | 35   | 2      | ❌       |
| 11    | 58   | 3      | ❌       |
| 12    | 89   | 1      | ❌       |
| 13    | 97   | 9      | ❌       |
| 14    | 79   | 2      | ❌       |
| 15    | 93   | 5      | ❌       |
4 matches: i=3,4,5,6
3 spurious matches (s=3,4,5), 1 true match (s=6)

1 match found through algorithm

---


> Q2: Complete the following:
> https://docs.google.com/forms/u/0/d/1IKQTflI7WP05BqtVkgpxFONSld_wZdWaVdwKN9HDs4w/viewform?edit_requested=true

> Question 2: Describe how to extend the Rabin-Karp method to the problem of searching a text string for an occurrence of any one of a given set of k patterns. Start by assuming that all k patterns have the same length. Then generalize your solution to allow the patterns to have different lengths. Assume some modulo q is already selected and d indicates the size of the alphabet. In addition to providing your strategy, provide the pseudocode for both scenarios.
> To solve this exercise:
> 1. Begin with thinking of a working strategy of your own. 
> 2. Next, prompt a LLM of your choice with a sequence of Question-Answer questions that would lead you to the correct answer. Your questions should not ask for the final answer, rather, using the model to help you land on the correct answer. 

##### 1. 
My instinct is to hash each pattern (using the modulo as well) and put them into a single dictionary that connects the hash to the pattern it originated from. Then, iterate through the text and hash each slice, and check for existence within the combined hash table, returning any matches found. 

If implemented well, this should be a $O(km)$ pattern hashing step, and a $O(n)$ text hashing/searching step leading to a total $O(km + n)$ runtime.
 
```
def multi_matcher(string T, string P[], q, d):
	n, m = len(T), len(P[0]) # assuming all same len
	h = mod( pow(d, m-1) , q) 
	int p[]
	hashes = {}
	t = 0
	matches = []
	
	for k in P:
		for i in range(m):
			p[k] = mod( (d * p[k] + P[i]) , q )
		hashes[p[k]] = i	
	for i in range(m):
		t = mod ( (d * t + T[i]) , q ) 
		
	for i in range(0, n-m):
		if (t in hashes):
			for match in hashes[t]:
				if P[match] == T[s:s+m]:
					matches.append(match, i)
		
		if s < n-m:
			t = mod( (d (t - T[s+1] * h) + T[s+m+1] ) , q )
	return matches
```

##### 2.
Correcting first draft pseudocode, chatting found the correct algorithm but a buggy execution: 

```
def multi_matcher(string T, string P[], q, d):
	n, m = len(T), len(P[0]) # assuming all same len
	h = mod( pow(d, m-1) , q) 
	hashes = {}
	matches = []
	
	for k in P:
		p_val = 0 
		for i in range(m):
			p_val = mod( (d * p_val + P[i]) , q )
		if p_val not in hashes:
            hashes[p_val] = []
        hashes[p_val].append(idx)
	
	t = 0
	for i in range(m):
		t = mod ( (d * t + T[i]) , q ) 
		
	for i in range(0, n-m):
		if (t in hashes):
			for match in hashes[t]:
				if P[match] == T[s:s+m]:
					matches.append(match, i)
		
		if s < n-m:
			t = mod( (d (t - T[s+1] * h) + T[s+m+1] ) , q )
	return matches
```