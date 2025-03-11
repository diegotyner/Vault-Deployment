

Review 1
---
*Blast*
- Table: 
	- Split into kmers as keys
	- Entries into hash table are storing where the kmers are in the original sequence

| ATT | (s1,1), (s3,1)            |
| --- | ------------------------- |
| TTA | (s1, 2), (s3, 3)          |
| TAT | (s1, 3), (s2, 1), (s3, 4) |
| ATG | (s2, 2)                   |
| TGT | (s2, 3)                   |
| ... |                           |
- 

*Bayes Method*
- $P(A|B)=\frac{P(B|A)P(A)}{P(B)}$

*K Means*
- Find smallest distance to each cluster
- Reassign each cluster to average of things closest to it
- Algo ends when clusters dont move

*Genome Assembly*
*Suffix Tree*
*UPGMA*

de Bruin graph to find the Hamiltonian path
- kmers of 3:
- ACTAG: (ACT) -> (CTA) -> (TAG)
- Create nodes of length 3 that point to a possible following sequence
	- $(XY_1Y_2) \to (Y_1Y_2X)$

