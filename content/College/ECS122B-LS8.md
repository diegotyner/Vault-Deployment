---
created:
  - " 02-09-2026 21:10"
tags:
---


### Z-Algorithm 
Another algorithm for the string matching problem
> Find all the occurrences of pattern P in String T

Terminology:
- Z-array - Array of z-values, stores computation
- Z-value - Indicates length of prefixes that are matched during algo
- Z-box - A window that lets us do character by character comparison

A linear time pattern matching algorithm
Z-algo computes a Z-array in linear time. Then, it uses the Z-array to find all occurences of P in T in O(m+n)

Input string to Z-algo is `I = P + '$' + T` 
- $|I| = m+1+n$
- T = `abbax` ; P = `abb` ; I = `abb$abbax`



