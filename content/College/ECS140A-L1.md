---
created:
  - " 09-25-2025 13:46"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  09/25/25: ECS140A-L1
---
[Lecture Slide Link](https://canvas.ucdavis.edu/courses/1010932/pages/lecture-schedule)

## 🎤 Vocab
CFG


## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
### Context Free Grammers (CFG)
Set of recursive rules or productions used to generate patterns of strings

Components:
1) Set of *terminals* (words or tokens)
2) Set of *non-terminals* (NT)
3) Set of *production* (or grammar) rules
4) A *start non-terminal* (start symbol (like "main" in a program))

#### Derivations
Start with the start symbol, replace a NT (non terminal) with its RHS (right hand side) of one of its rules until only terminals remain

Leftmost derivation: Expanding the leftmost NT until only terminals remain.
- Not necessary in practice

If you can derive a sentence from a grammar, you would say that it is in the grammar

#### Parse Tree
Graphical representation of the ssyntax structure of a string
- Root: start sym
- Interior nodes: NT
- Leaves: Terminals

#### Backus-Naur Form (BNF)
Meta-language for describing the syntax of a programming language
- NT enclosed in <>
- Rules written as `<X> ::= RHS`

#### Ambiguity:
Motivation:
- Imagine a algebraic parser. How do you interpret  `1+2*3=X`? X=9? X=7?

A grammar is *ambiguous* if a string has two different parse trees
- Not derivations, parse trees
Ambiguous grammar -> two distinct leftmost derivations


### Qs:
1) Why not two different derivations?
	- Oh is it because derivations can be done differently? only leftmost are "rigorous" or something like that?
2) What is the intuition for why we're learning this? 


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
