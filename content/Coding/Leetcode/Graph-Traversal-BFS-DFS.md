---
created:
  - " 07-24-2026 14:48"
tags:
  - Entry
Entry-For: _DSA-Pattern-Library
topic: "Graph Exploration: BFS and DFS"
---

# Graph-Traversal


## Trigger phrase
<!-- The problem phrasing that should make you think of this pattern -->

##### Look for phrases like:
- Can you reach node A from node B?
- Visit every connected node.
- Explore all possible paths.
- Count connected regions.
- Traverse the entire graph.

## Canonical solution

First, organize the problem into a graph framing:
- Identify *nodes/vertices* (literal nodes? People? 1s in a grid?)
- Identify *edges* (people's connections? Adjacent tiles?)
- Identify exploration *order*. 
	- Do we want to find the minimum distance? -> BFS
	- Do we want a low memory traversal?
		- Highly connected -> DFS
		- Highly sparse / almost a linked list -> BFS
- How are we going to *preserve data* between nodes?
	- BFS -> A queue, some sort of trace?
	- DFS -> A stack, the trace is just the last X nodes without backtracking. Can wind/unwind easily.
- How do we prevent infinite cycles?
	- Sets


| **DFS**                                                                                                                                                                           | **BFS**                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Go as deep as possible                                                                                                                                                            | Explore level by l                                                                                                       |
| Use *stack/recursion*                                                                                                                                                             | Uses *                                                                                                                   |
| Great for traversal & backtracking                                                                                                                                                | Great for shortest path (unw                                                                                             |
| Time: O(V+E)                                                                                                                                                                      | Ti                                                                                                                       |
| Space: O(V)<br> - O(V) due to visited set<br> - Stack trace to deepest node can literally crash a program (stack overflow), but only happens on deep "chained/linked-li Space: O(V)<br> - O(V) due to visited set<br> - The queue is largest on the layer with most connections/bushy graphs.  aphs.  aphs.  |

```python
visited = {}
def dfs(node):
    visited.add(node)

    for nei in graph[node]:
        if nei not in visited:
            dfs(nei)
            


from collections import deque
def bfs(root):
	q = deque([root])
	visited = {root}
	
	while q:
	    node = q.popleft()
	
	    for nei in graph[node]:
	        if nei not in visited:
	            visited.add(nei)
	            q.append(nei)
```


## Variants / related problems
- [Number of Islands](https://leetcode.com/problems/number-of-islands/description/)
- [Clone Graph](https://leetcode.com/problems/clone-graph/description/)

## Constraint sensitivity
<!-- e.g. n/2 vs n/3 changes verification requirements -->