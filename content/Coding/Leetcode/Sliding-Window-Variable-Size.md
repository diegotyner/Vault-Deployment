---
created:
  - " 07-24-2026 14:48"
tags:
  - Entry
Entry-For: _DSA-Pattern-Library
topic: Sliding Window Search
---

# Sliding Window - Variable Size (Expand/Shrink)


## Trigger phrase
<!-- The problem phrasing that should make you think of this pattern -->
"Find the [longest/shortest/minimum] substring/subarray such that [some condition on contents]" — where the window size isn't known upfront (contrast with fixed-size window, e.g. "min swaps to group k elements").

## Core invariant
<!-- One sentence: why it works -->

The default approach consists of:
- An outer loop that expands by one (rp) each iteration, checking to see if a condition is met
- An inner loop that contracts to attempt to optimize the solution

An integer counter/satisfied that tracks if requirements are met to avoid recalculating every window

## Canonical solution
```python
def find_substring(s: str) -> int:
    from collections import defaultdict
    window = defaultdict(int)
    satisfied = 0
    lp, rp = 0, 0
    d = 0  # or float('inf') if finding minimum

    while rp < len(s):
        ch = s[rp]
        rp += 1
        window[ch] += 1
        # if <update counter/satisfied condition>: satisfied += 1

        while satisfied is True:  # <counter/satisfied condition>
            # MINIMUM: update d here, inside this loop
            ch_l = s[lp]
            lp += 1
            window[ch_l] -= 1
            # if <update counter/satisfied condition>: satisfied -= 1

        # MAXIMUM: update d here, after the inner loop
    return d
```


Extending the generalized example to *Longest substring without repeating characters*: [link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        maxLen=0
        lp, rp = 0,0
        charSeen = set()

        while rp < n:
            ch_r = s[rp]
            rp += 1
            
            while ch_r in charSeen:
                ch_l = s[lp]
                charSeen.remove(ch_l)
                lp += 1
            charSeen.add(ch_r)
            maxLen = max(maxLen, rp-lp)
        return maxLen
```
## My gotchas on this pattern
<!-- Your specific bugs/instincts to watch for, not generic advice -->
- 

## Variants / related problems
- [Longest substring without repeating](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
- [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/description/)

## Constraint sensitivity
<!-- e.g. n/2 vs n/3 changes verification requirements -->