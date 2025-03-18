
### Review Seshes
##### wed 3/12  - [Link](https://ucdavis.zoom.us/rec/share/_LrnpOkGCMQN5MRwIbRZkL5wUF1UXUHYodFPqzl0rWgNVVVtcRO3n0U-IwXMe0ub.4ymg1mTdsJu21Fqd)
Content Review:
- Suffix Trees
- Optimality Recurrence
- BLAST Hash Tables
- Additive Matrix
- UPGMA

##### thursday 3/13 - [Link](https://ucdavis.zoom.us/rec/share/DMi1-NKND5aXrllzOhvpBPMvkRxvIz8SZPD0EYOG_g5TwGIWb9B4E4bGUX7sZTNu.8ZpbKKErMdPOGz3b)
Content Review: 
- MT 2 
	- 5b part 3
	- part 2d
- Writing pseudo code?
- Light perl scripting?

##### friday 3/14 - [Link](https://ucdavis.zoom.us/rec/share/WHIGPg7I60SW4DeVMQ-RzMNCLvFLbRnvXil-sZmh8M57fgHKEhEuOTa3FhXrigi8.fya0SmBF4uxgR1fd)

##### saturday 3/15 - [Link](https://ucdavis.zoom.us/rec/share/BQSkkpgG0Zgogz-du7hYUtZ11Io4jmDzOYOPym_RRke-Cxj6fSqzCUKRhCGNpJ5U.-wJ6lbYME5O9bFSQ)

![[ECS124-Final-Prep 2025-03-17 16.03.31.excalidraw]]

### Content
##### Labs:
1) 1
2) 2
3) 3
4) 4


##### Midterm 1
Sequence alignment
- Global / Local / Semi-global
	- Biological uses for each one
- Longest common substring and subsequence
	- How do LCS and global alignment relate?
Blast
Recurrence relations
Runtime analysis (Big-O)
Writing code - Perl and Python
- Working with files, opening/writing/reading
- Regex, matching and replacing

##### Midterm 2
Clustering and Trees
Bayes Method
K-means
De Bruin Graph
- Genome assembly?
Suffix Trees
- Common sequences between paths


##### Post Midterm 2
Hierarchical Clustering
- UPGMA
	- Go through a matrix combining rows/columns as you combine nodes (species/taxa)
	- Combines the 'closest' neighbors iteratively
		- A and B make node AB combined
	- With an ultrametric matrix, it will create a tree that is ultrametric and additive 
- Ultrametric test
- Additive trees
	- Use the four point test to test for additivity
![[ECS124-L14 2025-03-04 18.33.05.excalidraw]]
$D_{i,j} + D_{k,l} \leq D_{i,k} + D_{j,l} = D_{i,l} + D_{j,k}$
	- However, can be difficult, because for a matrix with 5 points, you need to test 5 groupings (5 choose 4 = 5)
- Jukes Cantor

Nearest Neighbor?

Hidden Markov Models
- Viterbi?




