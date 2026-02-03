---
created:
  - " 01-25-2026 17:51"
tags:
---


## Q1
> Given an n-character input text T, suppose that all characters in the pattern P are different. Show how to accelerate the Naïve String Matcher algorithm to run faster in O(n). Assume that variable j indicates the index of the last checked character in T, before mismatch. Also consider two main scenarios where there is no match between the substrings of T and P, and when there are multiple matches between the substrings of T and pattern P. Provide your algorithm’s pseudocode. T is 1-index.

Our assumption that all characters in pattern P are unique allows us to speed up our algorithm considerably, because we will no longer have to backtrack.
In our previous naive matching algorithm, after a mismatch we would have to return to check character `i+1` after a failed match on `i`. However, knowing that the pattern has no shared characters, we know that any successful matches in the rest of the pattern would mean an unsuccessful match for any other character in the pattern. Therefore, after a mismatch on index `j`, we would continue our algorithm on `j` and not on `i+1`. 

Scenarios (assuming P has a length of 3):
1) If there are no matches, the string matcher will compare characters, until it finds a mismatch at index `j`. Following this, it will try to match from the beginning of the pattern at index `j` (`P[1] == T[1] -> P[2] == T[2] -> P[3] =/= T[3] -> P[1] == T[3] -> ... `). This is different from the Naive String Matching algorithm, which will continue on from index `i+1`. 
2) If there are multiple matches, the new string matcher will compare the matching substrings, before continuing on from index `j+1` after fully matching the substrings  (`P[1] == T[1] -> P[2] == T[2] -> P[3] == T[3] -> P[1] == T[4] -> ... `. This is different from the Naive String Matching algorithm, which will continue on from index `i+1`. 

```
def faster_string_matcher(string T, string P):
	int n = len(P)
	int i, match_len = 0
	int matches[]
	
	while i < len(T):
		if P[match_len] == T[i]:
			match_len++
			if match_len == n:
				matches.append(i-n+1)
				match_len = 0
			i++
		elif match_len > 0:
			match_len = 0
		else: 
			i++
	return matches
```


## Q2
>  Prove that the time complexity of the revised algorithm in Q1 is O(n). Your answer should consider two main scenario where there is no match between the substrings of T and pattern P, and when there is multiple matches between substrings of T and pattern P. 

In depth analysis of the two scenarios is provided above in Q1.

The revised algorithm is $\theta(n)$, since it improves on all of the scenarios for backtracking that the Naive String Matching algorithm provides. For any given step in the algorithm, it is guaranteed one of three outcomes:
Assume the following: `i` tracks complete progress through text and `match_len` tracks an in progress match

Outcomes:
1) A continued match, where `i` and `match_len` are both incremented
2) A failed in progress match,  `i` stays at index `i` and `match_len` is set to zero. This outcome cannot happen twice in a row, and the next step is guaranteed to advance the `i` pointer.
3) A failed initial match, where `i` advances to `i+1` and `match_len` stays at zero

At no point in the algorithm is there any backtracking that could increase the computational complexity, and at absolute worst there will be `2n` comparisons if the first character of a pattern continually matches, while the second continually mismatches (T="AAAAA", P="AB"). In this worst case, our algorithm is still $O(n)$

## Q3
>  What happens if the pattern P is 'AAAAA'? Does this algorithm still work? Explain why algorithmically

If the pattern P was 'AAAAA', the core assumption of the new algorithm that there are no repeated characters within P would be violated. The algorithm would then create incorrect outputs and would miss consecutive matches within the text. For example, if the text was `T="AAAAAAA"`, the algorithm would only return the match at i=0, and would miss the subsequent matches at i=1,2 as it jumps ahead, assuming no other matches are possible in the text. 





