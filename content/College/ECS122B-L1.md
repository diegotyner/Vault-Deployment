---
created:
  - " 01-06-2026 12:54"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  01/06/26: ECS122B-L1
---
[Lecture Slide Link](https://canvas.ucdavis.edu/courses/1061525)

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
### Why analyze?
- Predict an algorithms performance (computational and physical resources)

#### Differences in Performance:
##### 1 - Database indexing
For 1 billion users:
- O(n) - 1 billion operation
- O(logn) - 30 operations
Changes a search from hours to milliseconds
##### Social media filtering
##### GPS
##### Large Scale Data Analysis

#### Insertion Sort
Algo:
```
Insertion-Sort (A) 1-index
1 for j=2 to A.length
2   key = A[j]
3   //Insert A[j] into the sorted sequence A[1.. j-1]
4   i=j-1
5   while i > 0 and A[i] > key
6     A[i+1] = A[i]
7     i = i-1
8   A[i+1] = key
```


| Line | Cost | Times                  |
| ---- | ---- | ---------------------- |
| 1    | c1   | n-1 + 1 =n             |
| 2    | c2   | n-1                    |
| 3    | c3=0 | n-1                    |
| 4    | c4   | n-1                    |
| 5    | c5   | $\sum^n_{j=2} t_j$     |
| 6    | c6   | $\sum^n_{j=2} (t_j-1)$ |
| 7    | c7   | $\sum^n_{j=2} (t_j-1)$ |
| 8    | c8   | n-1                    |
Assumes:
- Loop header executes one more time than body
- Comments are not executed
- $\sum^n_{j=2} t_j$ is the number of times the while loop is executed for a given value




## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the content were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the content raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```




## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words
