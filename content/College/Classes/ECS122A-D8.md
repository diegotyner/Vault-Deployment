

### Dynamic Programming
#### Algorithm for Longest Common Substring: (noncontinuous)
Strings $m_1m_2\dots m_m$ and $n_1n_2\dots n_n$ 
Create auxiliary array of length $(m+1)*(n+1)$
Algorithm:
```
lcs(s1,s2):
    int m = strlen(s1);
    int n = strlen(s2);

    // Create a table to store lengths of longest
    // common suffixes of substrings.
    int LCSuf[m + 1][n + 1];

    // Build LCSuf[m+1][n+1] in bottom-up fashion.    
    int res = 0;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                LCSuf[i][j] = LCSuf[i - 1][j - 1] + 1;
				
				// Unneeded for this problem, max is bottom right. 
				// Only really needed for the continuous subproblem
                if (LCSuf[i][j] > res) {
                    res = LCSuf[i][j];
                }
            } else {
				LCSuf[i][j] = max(LCSuf[i][j-1], LCSuf[i-1][j]);
				// if we wanted to modify for the continouous problem:
				// LCSuf[i][j] = 0;
            }
        }
    }
```
> If equal, add one to the val in (i-1)(j-1), which is diagonal up
> If not, take the max of either val to the left (i)(j-1) or up (i-1)(j)



### Graphs
BFS: Queue traversal
DFS: Stack traversal

Tree vs Graph:
- A tree has a root node, and no cycle
	- A tree is a DAG, a directed acyclic graph
- A tree is a form of graph

#### Graph Properties
- Directed?
- Cyclic?
- Weighted?
- Dense? 
	- Dense, every node connected to every other node


#### Representations:
> Matrix is time efficient, list is space efficient. 

*Adjacency matrix:*
Row X and Column Y represent a transition from X to Y. This is directed if direction is followed. A undirected graph will be equal to its transpose

*Linked List*
Imagine a linked list, where if a nodes transitions are represented by its presence in the linked list
```
A | -> B -> C -> D
B | -> A
C |
D | -> B
```

##### Example Representation of a graph:

|     | A   | B   | C   | D   | E   |
| --- | --- | --- | --- | --- | --- |
| A   |     | 1   | 1   |     |     |
| B   |     |     | 1   |     |     |
| C   |     |     |     | 1   | 1   |
| D   |     |     |     |     |     |
| E   |     |     |     |     |     |

