---
created:
  - " 01-16-2025 17:39"
tags:
  - Classes
aliases:
---

# 📗 ->  01/16/25: ECS154A-D2
---
[Lecture Slide Link]

## 🎤 Vocab



## ❗ Unit and Larger Context
Effectively another lecture, just in rock hall this time.


Talked about parallelism in adding, circumventing carrying ones. Instead of calculating terms and building up to the last one, calculate them all at once. Save time.

![[ECS154A-D2 2025-03-20 09.41.33.excalidraw]]

## ChatGPT sourced, viewer beware:
Check the [[ECS154A-L6|next lecture]] for more trustworthy notes. 
### Generate (G)
- A bit position i generates a carry if a carry is produced at that position regardless of whether there was an incoming carry.
- Mathematically: $G_i = A_i \cdot B_i$​
- If both bits $A_i$ and $B_i$ are **1**, a carry is generated.
### Propagate (P)
- A bit position i propagates a carry if it will pass an incoming carry to the next position.
- Mathematically: $P_i = A_i + B_i$​
- If either $A_i$ or $B_i$ is **1**, the carry will propagate through.

$C_{i+1} = G_i + (P_i \cdot C_i)$
$C_{in}(i) = C_{out}(i-1)$

$$
\begin{align*}
C_1 &= G_0 + P_0 C_0 \\
C_2 &= G_1 + P_1 C_1 = G_1 + P_1(G_0 + P_0 C_0) \\
C_3 &= G_2 + P_2 C_2 = G_2 + P_2(G_1 + P_1(G_0 + P_0 C_0)) \\
C_4 &= G_3 + P_3 C_3 = G_3 + P_3(G_2 + P_2(G_1 + P_1(G_0 + P_0 C_0)))
\end{align*}
$$

## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```




## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words
