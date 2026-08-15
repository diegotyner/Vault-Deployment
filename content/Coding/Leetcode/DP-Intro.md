---
created:
  - " 08-04-2026 20:27"
tags:
  - Entry
Entry-For: _DSA-Pattern-Library
topic: General DP
---

# DP-Intro

### Mindset Shifts:
Do not START with a DP solution, by definition a DP solution is just a memoized version of another solution

Start with a brute force solution, or a natural heuristic. From here, if your problem lends itself to *recursion*, then we can follow the next steps to enter into a DP form.

Briefly:
1) Recursion
2) Recursion + memo
3) Iteration + Tabulation
4) Iteration + Tabulation, Optimized

#### Step 1: Recursion
This is the hardest problem, from trying to understand how to even attack the problem.

With recursion, it can help to try and frame the problem as a brute force solution with steps. "understand the recursive relationship" required to solve this problem.

```python
# exponential
class Solution:
    def uniquePaths(self, m, n):
        def helper(m, n):
            if m == 1 or n == 1:
                return 1
            return helper(m-1, n) + helper(m, n-1)
        return helper(m, n)
```

Notice how we have to explicitly define our base case, as with all recursive solutions.

#### Step 2: Recursion + memo
Most of the inefficiency from recursion stems from excessive branching. When a DP solutions is *warranted*, the excessive branching is actually repeating work. this happens when there is:
1) overlapping subproblems, and
2) an optimal substructure

> This doesnt mean all recursive brute forcing can be optimized into DP. It needs to be building towards something and solving overlapping subproblems. You can't memo your results for subsets in traveling salesman, those consist of mostly independent work.

Luckily, there's a very simple step to prevent repeated work: caching results.

```python
# Time and space of O(m*n)
class Solution:
    def uniquePaths(self, m, n):
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
        def helper(m, n):
            if dp[m][n]:
                return dp[m][n]
            elif m == 1 or n == 1:
                dp[m][n] = 1
                return dp[m][n]     
            dp[m][n] = helper(m-1, n) + helper(m, n-1)
            return dp[m][n]    
        return helper(m, n)
```

#### Step 3: Iteration + Tabulation

If you managed to memoize a recursive solution, there is (according to [Aleks](https://medium.com/@al.eks)) "almost always" a iterative solution to try on top. 

We replace our memoization with tabulation (storing in a table, instead of the lookup set we used before). 

The benefit here isn't necessarily the big-O, but the call stack and compiler optimization.  

```python
# Still Time and space of O(m*n)
class Solution:
    def uniquePaths(self, m, n):
        dp = [[1 for _ in range(n)] for _ in range(m)]
        
        for r in range(len(dp) - 2, -1, -1):
            for c in range(len(dp[r]) - 2, -1, -1):
                dp[r][c] = dp[r+1][c] + dp[r][c+1]
        
        return dp[0][0]
```

However, the code is more succinct and runs faster. Notice that we are effectively building up our solution forwards, compared to how it was top-down before. 

#### Step 4: Iteration + Tabulation, Optimized

If you look closely at the previous code, we don't actually need the entire DP table as we continue. We can therefore reduce our space from O(n * m) to O(n)

```python
class Solution:
    def uniquePaths(self, m, n):
        dp = [[1 for _ in range(n)] for _ in range(2)]   
        for r in range(m - 2, -1, -1):
            for c in range(n - 2, -1, -1):
                dp[0][c] = dp[1][c] + dp[0][c+1]
            dp[1] = dp[0]
        return dp[0][0]
```

This is a bonus step, and can help to manage our memory footprint past what was possible with recursion.

### Resource
https://medium.com/@al.eks/the-ultimate-guide-to-dynamic-programming-65865ef7ec5b
