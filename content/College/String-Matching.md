---
created:
  - " 02-09-2026 21:13"
tags:
---


Used as notes for [[ECS-122B-Main]]

### String Matching
Efficient algorithms for finding pattern P (`ABC`) in text T (`EFGABCEFG`).

Uses:
- Finding matches in text documents (text editors, pdf viewers)
- Motifs within DNA sequences (DNA is a massive string)

Approaches: Length of text (n), Length of pattern (m)
- Naive String Matching - $O(m(n-m+1))$
	- The case of string matching with no repeated characters in P - $O(n)$
- Rabin Karp - $O(n-m+1)$
	- Naive vs Enhanced 
	- Naive: Using straight up representations of substrings for comparison 
	- Enhanced: Comparing the hashed value of subtrings (q) and checking if matches are true or spurious hits
- Z-Algorithm