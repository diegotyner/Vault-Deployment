---
created:
  - " 07-26-2026 14:25"
tags:
  - Entry
Entry-For: _DSA-Pattern-Library
topic: Finding K small/large elements
---

# Heap-Selection


## Trigger phrase
<!-- The problem phrasing that should make you think of this pattern -->
Find the *K-smallest/largest* elements.

## Approach
<!-- One sentence: why it works -->

Use/maintain a heap. However, there are multiple ways to do this:
- `heapify(iterable); heappop(iterable)` - This is O(n + klogn), heapify is O(n) and we pay the O(logn) heappop k times. Best for cases where K is unknown or known to be large (although if k is large enough, sorting can be considered, less overhead)
- `nsmallest(k, iterable)` - This is O(nlogk), as it maintains a heap of size k. Best for TINY k (like REALLY tiny, only in patterns where you know in advance you only need the 2-5 smallest/largest)

## Canonical solution
```python
import heapq

k_largest_arr = nlargest(k, nums)
k_smallest_arr = nsmallest(k, nums)

# heap is a minheap, have to flip signs
def manual_k_largest(k, nums):
	heapify([-num for num in nums])
	largest = []
	for i in range(k):
		largest.append(-heappop(largest))
	return largest

def manual_k_smallest(k, nums):
	heapify(nums)
	smallest = []
	for i in range(k):
		smallest.append(heappop(smallest))
	return smallest
```

## Variants / related problems
- [Maximum product of three numbers](https://leetcode.com/problems/maximum-product-of-three-numbers)
- [K closest points to origin](https://leetcode.com/problems/k-closest-points-to-origin/)

## Constraint sensitivity
<!-- e.g. n/2 vs n/3 changes verification requirements -->