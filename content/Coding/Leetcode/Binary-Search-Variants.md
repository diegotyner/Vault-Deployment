---
created:
  - " 07-27-2026 21:06"
tags:
  - Entry
Entry-For: _DSA-Pattern-Library
topic: Smallest in rotated array, search in rotated array, find the minimum value such that
---

# Binary-Search-Variants


## Trigger phrase
<!-- The problem phrasing that should make you think of this pattern -->
Phrases:
1) Search for largest/smallest value...
2) In a sorted array...

## Approach
<!-- One sentence: why it works -->

[[Basic-Binary-Search]] - more info here
Binary search can find a specific value within a monotonic sequence, but if you phrase something as monotonic cleverly, you can find a best value within logn time.

Most common problems like this:
1) Searching for values in rotated array
	- Here, our monotonic question is: at indexes i and j, is the array rotated? if yes, continue search right. If not, search left.
2) Searching for smallest/largest satisfactory value
	- Our monotonic question is: Is our condition satisfied? If yes, optimize further. If no, back off.
## Canonical solution
```python

def minInRotatedArr(nums: List[int]):
	lo, hi = 0, len(nums)-1
	while lo < hi:
		mid = lo + (hi-lo)//2
		# at indices mid and hi are we rotated?
		if nums[mid] <= nums[hi]: # No, we are not rotated here. We went too far
			hi = mid # mid is safe to assign to
		else: # Yes we are rotated here. 
			# That means that hi is smaller than mio, and is thus safe to assign mid+1 as a possible min
			lo = mid+1 # we also need to reduce search space for low, mid+1 is safe.
	return nums[lo] 

def smallestSatisfactory(nums: List[int]):
	def isSatisfying(current):
		return bool # monotonic function based on current
		
	lo, hi = minPossible, maxPossible
	while lo < hi:
        mid = lo + (hi-lo)//2
        # question: does 'mid' satisfy our condition?
        satisfying = isSatisfying(mid)
        if satisfying:   # mid works - could shrink further
            hi = mid
        else:            # mid too slow - exclude it,  search higher
            lo = mid+1
    return lo
```

## My gotchas on this pattern
<!-- Your specific bugs/instincts to watch for, not generic advice -->
- be very careful about missing a valid solution with the mid+-1 assignment
- be very careful about infinite loops, make sure to reduce search space for lo

## Variants / related problems
- [Koko eating bananas](https://leetcode.com/problems/koko-eating-bananas/description/)
- [Find minimum in sorted array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [Search in rotated array](https://leetcode.com/problems/search-in-rotated-sorted-array)
