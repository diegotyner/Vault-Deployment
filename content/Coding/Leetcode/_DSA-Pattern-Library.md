---
created:
  - " 07-24-2026 14:45"
tags:
aliases:
  - DSA
---

## DSA Pattern Library
This page is where I'll jot down DSA patterns to make sure I've retained them 


```dataview
TABLE
  topic as "Topic",
  created as "Created"
FROM #Entry
WHERE Entry-For = this.file.name and file.name != "DSA-Template"
SORT created desc
```

##### Pathologies to watch in my own coding:
- Redundant state / duplicate data structures "to be safe" - Adding a queued and visited set for example, multiple counters in the sliding windows. Pick one smart one.
- Not trusting loop structure / invariants, adding unnecessary guardrails - Edge cases like `if n<=1: return False`
- Solving the general/harder case before finding the narrow one underneath - 60 seconds spent revising approach beats 60 seconds greater bug prone branches.
- Sentinel values and implicit state transitions instead of explicit/structural handling - Be unambiguous in your code and derive behavior in the loop as much as possible, easier to debug and reason around the global values that can persevere things incorrectly and silently. Has the benefit of forcing you towards simpler cases and less branching.
- Branching on "which pointer moves this iteration" instead of using the natural two-loop shape - You can code in phases, god loops rarely needed. Focus on being simple and deliberate instead of overly clever.
- Using `while X` + an internal `if Y: break` condition instead of just combining into the loop header - Makes code far more verbose and less intuitive to read. If possible, fold into the header.


[[Cpp-Quick-Ref]]

#### Trivially Covered
##### Arrays
Hashing
##### Two Pointers
Basic
Window
##### Stack / Heap
##### Linked List Traversal

### Random
[[Boyer-Moore-Voting]]
[[Basic-Binary-Search]]
[[Binary-Search-Variants]]
[[Heap-Selection]]

### Pointers
[[Sliding-Window-Variable-Size]]

### Graph Traversal
Nice guide: [link](https://leetcode.com/discuss/post/8396904/5-graph-patterns-that-solve-90-of-leetco-cnkw/)
[[Graph-Traversal-BFS-DFS]]
[[Graph-Traversal-Topological-Sort]]

Also study up on indegree as a pattern. If you are just trying to identify if a group is isolated, you dont need to do a reverse lookup on a separate data structure, you can just track indegrees during construction and maintain them during traversal. Review them after traversal and you have membership for free. 

### Prefix/Suffix Precompute
Reverse pass builds a lookup table → forward pass greedily decides using that table
- Exs: Trapping Rain Water, Product of Array Except Self, Candy,Find the Lexicographically Smallest Valid Sequence

### DP
Study list: [link](https://leetcode.com/discuss/post/662866/dp-for-beginners-problems-patterns-sampl-atdb/)

Should be able to bang out no problem:
1) https://leetcode.com/problems/climbing-stairs/
2) https://leetcode.com/problems/house-robber/
3) https://leetcode.com/problems/decode-ways
4) https://leetcode.com/problems/longest-increasing-subsequence/
5) https://leetcode.com/problems/predict-the-winner/
6) https://leetcode.com/problems/longest-palindromic-substring/
7) https://leetcode.com/problems/edit-distance/
8) https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
9) https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
10) https://leetcode.com/problems/interleaving-string
11) https://leetcode.com/problems/maximum-subarray

[[DP-Intro]]

Build out:
- Linear/sequence DP (stairs, robber, LIS)
- Grid/path DP (unique paths)
- Two-string DP (edit distance, LCS)
- Knapsack, decision+budget (coin change, parition equal subsets)
- Interval/range DP (palindrome partitioning, burst balloons)
- State machine DP (stock with cooldown)
- Bitmask DP (Partition to K Equal Subsets)
- Tree/graph DP (house robber III)