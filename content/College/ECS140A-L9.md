---
created:
  - " 10-23-2025 13:56"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  10/23/25: ECS140A-L9
---
[Lecture Slide Link](https://canvas.ucdavis.edu/courses/1010932/files/28932080?wrap=1)

## 🎤 Vocab




## ✒️ -> Scratch Notes
#### Top-Down Parsing
Constructs parse tree for input string starting from the root
Finds the leftmost derivation for an input string

Recursive Descent Parsing - 
Predictive Parser
LL(1) Parser
- Predictive parser that only looks at the next input symbol
- Derives the leftmost derivation

FIRST Sets
- First(a) is the set of terminals that begin strings derived from the string of grammar symbol a
- If X is a terminal FIRST(X) = {X}
- Else:
	1) If X->Y1...Yk is a production
		Then everything in 𝐹𝐼𝑅𝑆𝑇 𝑌1 is in 𝐹𝐼𝑅𝑆𝑇 𝑋 .
		If 𝑌1 derives 𝜀, then add 𝐹𝐼𝑅𝑆𝑇 𝑌2 to 𝐹𝐼𝑅𝑆𝑇 𝑋 , and so on.
		If 𝜀 is in all 𝐹𝐼𝑅𝑆𝑇 𝑌𝑗 then add 𝜀 to 𝐹𝐼𝑅𝑆𝑇(𝑋)
	2) If X->𝜀 is a production, add 𝜀 to FIRST(X)






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
