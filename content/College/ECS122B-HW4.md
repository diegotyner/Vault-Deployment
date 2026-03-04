---
created:
  - " 02-24-2026 17:27"
tags:
---

## Problem 1 (5 points) 
> Provide an example for finding multiple occurrences of a pattern P in an input string S using the binary search method on suffix array of S. Show your work through execution of the algorithm and provide your assumptions. 

s=banana p=ana
1. get suffix array for S
s'=banana$
	anana$
	...
		$
order lexicographically
SA=[7,6,4,2,1,5,3]

binary search
l,r = 1, n (7)
m = (l+r)//2 (=4)

SA[4] = 2, SA[2:] = anana$ 
P=ana case1

l,r = 1, 3
m = (1+3)//2 = 2
SA[3]=4 ... case2
...

right-mid-1=1 < left


## Problem 2 (20 points) 
> (10 points) Given a text T = “never -- ever -- say -- never -- again", create BWT(T\$) and show your complete work. Explain the approach you used to create BWT(T). (10 points) Reverse BWT(T$) and show your complete work. Show all the steps and explain your approach. 

T=never--eve$
You can use naive approach or suffix array

Naive:
never-eve$
ever--eve$n
...
$...

$  < - < e < n < r < v


## Problem 3 (5 points) 
> What is the Brute force (i.e., naïve) running time for creating BWT string? Explain. 

length for Ti s N also have N shifts

1) Creating bunch of strings: O(n * n)
2) Sort strings: O(n * nlogn)
3) O(n * 1)
Total: $O(n^2) + O(n\cdot nlogn) + O(n)$
Which reduces to: $O(n^2logn)$


## Problem 4 (20 points) 
> Provide the pseudocode for reversing a BWT string. Analyze the time complexity of your algorithm. 

## Problem 5 (20 points) 
> Discuss and fully explain the overall time complexity of Ukkonen’s algorithm when: 
> a. (8 points) No tricks are used. 
> b. (6 points) Suffix links and skip/count trick are used. 
> c. (6 points)Suffix links, skip/count trick are used in conjunction with Edge label compression trick. 


## Problem 6 (10 points)
> Which suffix tree construction algorithm has online property? Explain with an example. 

## Problem 7 (20 points) 
> Describe how Ukkonen Algorithm constructs a suffix tree for an input string S[1:n]. Use the notions of prefix and suffix in your explanation. For every extension rule, provide a visual example.