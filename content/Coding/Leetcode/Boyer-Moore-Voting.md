---
created:
  - " 07-24-2026 14:48"
tags:
  - Entry
Entry-For: _DSA-Pattern-Library
topic: Majority Element, space O(1)
---

# Boyer-Moore-Voting


## Trigger phrase
<!-- The problem phrasing that should make you think of this pattern -->
The trigger phrase is finding the majority elements with constrained space.

## Core invariant
<!-- One sentence: why it works -->
It works because the majority element will "swing" the voting by itself, as long as it is in fact larger than its constraints. It MUST have a frequency larger than n//2 (freq(el) > n//2)

It can also be extended to find the elements with counts greater than n/3 and n/4, as shown below

## Canonical solution
```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count, candidate = 0, None
        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1
        return candidate
        
    def majorityElement(nums):  # returns list of elements appearing > n/3 times
	    count1, count2 = 0, 0
	    cand1, cand2 = None, None
	    
	    for num in nums:
	        if cand1 == num:
	            count1 += 1
	        elif cand2 == num:
	            count2 += 1
	        elif count1 == 0:
	            cand1, count1 = num, 1
	        elif count2 == 0:
	            cand2, count2 = num, 1
	        else:
	            count1 -= 1
	            count2 -= 1
	    
	    # verification pass required! candidates might not actually exceed n/3
	    return [c for c in (cand1, cand2) if c is not None and nums.count(c) > len(nums)//3]

```

## My gotchas on this pattern
<!-- Your specific bugs/instincts to watch for, not generic advice -->
- For k candidates, the invariant guarantees any element exceeding n/k survives as a candidate, the n//2 case additionally happens to skip verification because the problem guarantees a majority exists
## Variants / related problems
- [LC: Majority Element](https://leetcode.com/problems/majority-element/description/)
- [LC: Majority Element 2](https://leetcode.com/problems/majority-element-ii/description/)

## Constraint sensitivity
<!-- e.g. n/2 vs n/3 changes verification requirements -->
- The algorithm does not GUARANTEE that the element it returns is actually the majority element, just that if candidates exist, it will find them. 
	- A verification step is used to guarantee it, as seen in the n/3 case. However, we skip it in the leetcode case as we are guaranteed that it exists.