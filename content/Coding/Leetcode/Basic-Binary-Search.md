---
created:
  - " 07-24-2026 14:48"
tags:
  - Entry
Entry-For: _DSA-Pattern-Library
topic: Binary Search
---

## Basic Binary search
```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            m = (l+r) // 2 # to prevent integer overflow could also do this: low + (high - low) // 2
            if nums[m] == target: # If found return
                return m
            elif nums[m] < target: # If our cur is smaller than target, move our slice upwards (to larger numbers)
                l = m + 1
            else: # If our cur is larger, move our slice downwards (to smaller nums)
                r = m - 1
        return -1
```

## Quick facts:
To avoid infinite loops:
1) mid is *biased towards lo* (floor division)
	- `hi=mid` is always safe, since mid is strictly less than hi
	- `lo=mid+1` is always safe
	- Always ensure that the search space for lo is reduced from iteration to iteration, and carefully consider the validity of mid for lo and hi

## Extensions
Binary search works on ANYTHING where you can validate a result within a range in a binary YES/NO answer. 
> It requires that at every position, you can answer a yes/no question that is monotonic (consistent as you scan left to right: false, false, false, ... true, true, true (or the reverse))

This is obviously most advantageous in searching for values in a sorted list (am i larger? yes/no), but can be extended to multiple [[Binary-Search-Variants|variants]], including:
1) Searching for values in rotated array
2) Searching for smallest/largest satisfactory value
3) Finding peak elements

