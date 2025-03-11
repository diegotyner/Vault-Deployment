
### Problem 1
> Show by means of a counterexample, that the following "greedy" strategy does not always determine an optimal way to cut rods. Define the $density$ of a rod of length $i$ to be $p_i/i$ that is its value per inch. The greedy strategy for a rod of length $n$ cuts off a first piece of length $i$, where $1 \leq i \leq n$, having maximum density. It then continues by applying the greedy strategy to the remaining piece of length $n-i$

Consider a rod of 10 inches, with a price per inch as follows:
$[0, 0.1, 0.1, 0.1, 0.1, 7, 0.1, 11, 0.1, 0.1, 0.1]$
Notably:
- $p[7] = 11$ and $p[5]=5$, $p[1\leq i \leq 10 \land i \neq 5\lor 7] = 0.1$.
- Density of 7: $11/7 \approx 1.57$
- Density of 5: $7/5 = 4$
- Density of everything else 0.1 or less.

The algorithm will first select a rod of length 7, then make select rods of length 1 after this. 
- Greedy result: $p[7] + 3(p[1]) = 11 + 3(0.1) = 11.3$

The optimal strategy would be to select two rods of length 5:
- Optimal result: $2(p[5]) = 2(7) = 14$

Since the greedy strategy leads to a suboptimal result ($11.3 < 14$), we not that it does not always lead to the optimal way to cut rods.

---

### Problem 2
> Consider the problem of neatly printing a paragraph with a monospaced font (all characters having the same width) on a printer. The input text is a sequence of $n$
> 
> words of lengths $l_1, l_2, \dots, l_n$, measured in characters. We want to print this paragraph neatly on a number of lines that hold a maximum of $M$ characters each. Our criterion of "neatness" is as follows. If a given line contains words $i$ through $j$, where $i \leq j$, and we leave exactly one space between words, the number of extra space characters at the end of the line is $M - j + i \sum^j _{k=i} l_k$, which must be non negative so that the words fit on the line. We wish to minimize the sum, over all lines except the last, of the cubes of the numbers of extra space characters at the end of lines. Give a dynamic-programming algorithm to print a paragraph of n words neatly on a printer. Analyze the running time and space requirements of your algorithm.

Our strategy for this problem is going to be as follows:
1) Create memoized costs associated with having a certain combination of words in a line
	- Cost infinite if it doesn't fit
	- Cost zero if its the last word (j=n)
	- Otherwise, $C[i,j] = (M - j + i \sum^j _{k=i} l_k)^3$
2) Build up towards a solution, using the memos to make calculations faster 
3) Create a traceback array as we go, and work backwards from our n
4) Use our traceback array to print our result at the end


```python
def prettyPrint(l[], M) {
	OPT[] = [MAX] * (n+1)
	OPT[0] = 0
	
	traceback = [0] * (n+1)
	
	n = l.size()

	# build up OPT and traceback
	for (j in 1...n+1) {
		spaces = M
		for i in (j-(M//2 + 1)...0, -1) { # iterate backwards 
			spaces -= i < j ? l[i-1] + 1 : l[i-1] 
			if (spaces < 0) {
				break
			}
			cost = j==n ? 0 : spaces**3
			
			if OPT[i-1] + cost < OPT[j] {
				OPT[j] = OPT[i-1] + cost
				traceback[j]
			} 
		}
	}
	lines = []
	i = n
	while i > 0:
		i = p[j]
		curLine = []
		for (k in i...j) {
			curLine.append(l[k])
		} 
		lines.append(curLine)
		j = i - 1
	lines.reverse()
	print(f"Cost is {OPT[n]}")
	print("Optimal Printing Stratey is:")
	for line in lines:
		print(line)
	return
}
```


---

### Problem 3
> LCS for input Sequences "AGGTAB" and "GXTXAYB", provide the solution matrix and the traceback.

s1 = AGGTAB, len=6
s2 = GXTXAYB, len=7

|     |     | G     | X     | T     | X     | A     | Y     | B     |
| --- | --- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
|     | 0   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| A   | 0   | 0     | 0     | 0     | 0     | 1     | 1     | 1     |
| G   | 0   | **1** | **1** | 1     | 1     | 1     | 1     | 1     |
| G   | 0   | 1     | 1     | **1** | 1     | 1     | 1     | 1     |
| T   | 0   | 1     | 1     | **2** | **2** | 2     | 2     | 2     |
| A   | 0   | 1     | 1     | 2     | 2     | **3** | **3** | 3     |
| B   | 0   | 1     | 1     | 2     | 2     | 3     | 3     | **4** |
- **Bolded** entries are the traceback for the LCS algorithm after the matrix is completed.
- Leads to the optimal LCS of 4, 'GTAB'
