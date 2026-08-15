---
created:
  - " 07-26-2026 01:51"
tags:
  - Entry
Entry-For: _DSA-Pattern-Library
topic: "Topological Sort: Kahn's Algorithm"
---

# Graph-Traversal-Topological-Sort


## Trigger phrase
<!-- The problem phrasing that should make you think of this pattern -->
- Find an ordering given *prerequisites/dependencies*
- Can all tasks be completed given the restrictions?

## Core invariant
<!-- One sentence: why it works -->
### Kahns Algorithm
1) Initialize graph metadata: create connections from prereqs to dependents, and track remaining degrees (to quickly know when a node is available)
2) Use a queue, as for any BFS traversal
3) For every available node, update nodes that are dependent on current. If this was the last requirement (and their degree is now 0), add them to queue
4) Repeat until queue is empty. If all nodes were reached, we have a valid traversal. If not, a cycle exists and no topological sort is possible.

## Canonical solution
```python
from collections import deque
def Kahns_Algorithm(numNodes, edges):
    graph = [[] for _ in range(numNodes)]   # graph[A] = nodes that depend on A
    in_degree = [0] * numNodes

    for dependent, prereq in edges:
        graph[prereq].append(dependent)
        in_degree[dependent] += 1

    queue = deque([n for n in range(numNodes) if in_degree[n] == 0])
    order = []

    while queue:
        node = queue.popleft()  # order='DFS-ish' with pop(); use popleft() for strict BFS order
        order.append(node)
        for dependent in graph[node]:
            in_degree[dependent] -= 1
            if in_degree[dependent] == 0:
                queue.append(dependent)

    return order if len(order) == numNodes else None  # None = cycle detected, no valid order
	            
def DFS_Topological_Sort(n, graph):
	visited = set()
	order = []
	
	def dfs(node):
	    visited.add(node)
	
	    for nei in graph[node]:
	        if nei not in visited:
	            dfs(nei)
	
	    order.append(node)
	
	for node in range(n):
	    if node not in visited:
	        dfs(node)
	        
	return order[::-1]
```

## Variants / related problems
- [Course Schedule](https://leetcode.com/problems/course-schedule/)
- [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/description/)
