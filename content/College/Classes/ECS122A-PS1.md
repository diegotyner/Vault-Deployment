
### Question 1: Induction
Find the closed form of: $\sum ^n _{i=1} 4^i$
Prove closed-form formula via induction
$$
\displaylines{\text{Note that: } \sum ^n _{i=1} a^i = \frac{a(a^n-1)}{a -1} \\
\sum ^n _{i=1} 4^i = \frac{4(4^n-1)}{3} \\\\
\text{Proving via induction:} \\
\text{Base Case: } n=1, \sum ^1 _{i=1} 4^i = 4, \frac{4^2-4}{4-1}=12/3 = 4. \;\; \text{P(1) is true.} \\
\text{Inductive Hypothesis: Let } k\geq c \text{ be an arbitrary integer. Assume } \sum ^k _{i=1} 4^i = \frac{4(4^k -1)}{3} \\
\text{Inductive Step: Want to prove: } \sum ^{k+1} _{i=1} 4^i = \frac{4(4^{k+1}-1)}{3} \\
\sum ^{k+1} _{i=1} 4^i = \frac{4(4^k -1)}{3} + 4^{k+1}  \\
= \frac{4(4^k -1)}{3} + \frac{3(4^{k+1})}{3} \\
= \frac{4^{k+1}-4  + 3(4^{k+1})}{3} \\
= \frac{4^{k+1}(1+3)-4}{3} \\
= \frac{4^{k+1}(4)-4}{3} \\
= \frac{4^{k+2}-4}{3} \\
= \frac{4(4^{k+1}-1)}{3} \\
\therefore \text{ by Induction, } \sum ^n _{i=1} 4^i = \frac{4(4^n-1)}{3}
}
$$

### Question 2: Analysis
```
i <-- n;
while (i > 1) { // O(log2(n))
	j = i;
	while (j < n) { // O(log2(n))
		k <-- 0;
		while (k < n) {  // O(n)
			k = k + 2;
		}
		j <-- j * 2;
	}
	i <-- i / 2;
}
```
$O(n\,log^2(n))$


### Question 3: Analysis
```
float useless(A) {
	n = A.length; 
	if (n==1) { 
		return A[0];
	}
	let A1, A2 be arrays of size n/2;
	for (i=0; i <=(n/2)-1; i++) {
		A1[i] = A[i]
		A2[i] = A[n/2+i]
	}
	for (i=0; i<=(n/2) -1; i++) { // O(n)
		for (j=i+1; j<=(n/2)-1; j++) { // O(n)
			if (A1[i] == A2[j])
				A2[j] = 0 ;
		}
	}
	b1 = useless(A1); // T(n/2) 
	b2 = useless(A2); // T(n/2)
	return max(b1,b2);
}
```
$T(n) = 2T(n/2) + O(n^2)$


### Question 4: MinHeap Review
#### a) 
This would be the resulting heap after you push(2), push(31), pop(), pop(),
and update the key of 7 to -2
![[ECS122A-PS1 2024-10-07 12.10.09.excalidraw]]

#### b)
It is linear time because of the fact that not all nodes have to undergo the full log(n) operation. The majority of the nodes will end up being inserted in a shallow way, and as the size of the heap approaches infinity, the asymptotic runtime will scale with n, instead of nlogn. 



### Question 5: Analysis
#### a)
O(n)
#### b)
O(n^2)
#### c)
O(n^3)
#### d)
O(n^2)
#### e)
O(n^5)
#### f)
O(n^3)


### Question 6:
$log_4n$ is not $O(log_{16}n)$, however $log_{16}n$ is $O(log_4n)$. This is because $log_4n$ grows more rapidly than $log_{16}n$ so there is no c and $n_0$ such that $log_{16}n$ can bound it. On the other hand, since $log_4n$ grows more rapidly it can serve as an upper bound for $log_{16}n$, making it $O(log_4n)$. We could easily find $c$ and $n_0$ to prove the O relation for the latter, like $c=1$ and $n_0=16$, although other values exist as well.


### Question 7:
#### a)
$\displaylines{nlog(n^{1000}) << 1024n^2 + 4n + 460 << 7n^3log(n) + 1000  \\<< 3n^4 + 6n << 3^n << 6^n}$

I will prove that each function is dominated by the function that follows. Since I will be using the limit lemma, I will drop everything but the most dominant term, since other terms will not matter as it approaches infinity:
$$
\displaylines{
nlog(n^{1000}) \\
\lim_{x\to\infty} \frac{nlog(n^{1000})}{1024n^2}=\frac{1000nlog(n)}{1024n^2}\\
\lim_{x\to\infty} \frac{nlog(n^{1000})}{1024n^2}= \frac{1000}{1024} \cdot \lim_{x\to\infty} \frac{log(n)}{n} \\
\text{A well known limit is that: }\lim_{x\to\infty} \frac{log(n)}{n} \to 0, \;\text{so}\; \lim_{x\to\infty} \frac{nlog(n^{1000})}{1024n^2}\to0 \\
\text{By limit lemma, } nlog(n^{1000})=O(1024n^2+4n+460)
\\\\\\
1024n^2 + 4n + 460 \\
\lim_{x\to\infty} \frac{1024n^2}{7n^3log(n)}=\frac{1024}{7} \cdot \lim_{x\to\infty} \frac{log(n)}{n} \to0 \\
\text{By limit lemma, } 1024n^2 + 4n + 460=O(7n^3log(n) + 1000)
\\\\\\
7n^3log(n) + 1000 \\
\lim_{x\to\infty} \frac{7n^3log(n)}{3n^4}=\frac{7}{3} \cdot \lim_{x\to\infty} \frac{log(n)}{n} \to0 \\
\text{By limit lemma, } 7n^3log(n) + 1000=O(3n^4 + 6n)
\\\\\\
3n^4 + 6n \\
\lim_{x\to\infty} \frac{3n^4}{3^n}= 3 \cdot \lim_{x\to\infty} \frac{n^4}{3^n} \to \frac{\infty}{\infty} \\
\text{Using L'Hopitals, we will take the derivative of the above multiple times:}  \\
1) \lim_{x\to\infty} \frac{4n^3}{ln(3)\cdot(3^n)} \\
2) \lim_{x\to\infty} \frac{12n^2}{ln(3)\cdot(3^n)^2} \\
3) \lim_{x\to\infty} \frac{24n}{ln(3)\cdot(3^n)^3} \\
4) \lim_{x\to\infty} \frac{24}{ln(3)\cdot(3^n)^4} \\
\text{The last expression goes to zero: }\lim_{x\to\infty} \frac{24}{ln(3)\cdot(3^n)^4} \to 0
\\
\text{This proves that by limit lemma, } 3n^4 + 6n + 1000=O(3n^4 + 6n)
\\\\\\
3^n \\
\lim_{x\to\infty} \frac{3^n}{6^n}= \lim_{x\to\infty} \frac{3^n}{2^n \cdot 3^n} =  \lim_{x\to\infty} \frac{1}{2^n}\to0 \\
\text{By limit lemma, } 3^n=O(6^n)
}$$

#### b)
Prove that $k(n) = n^2 + 3n$ is $\Omega(n^2)$
T(n) is $\Omega (f(n))$ if there exists $c$ and $n_0$ such that:
$T(n) \geq cf(n)$

Solving:
$$
\displaylines{
n^2 + 3n \geq n^2 \\
3n \geq 0
}
$$
$c=1, n_0=1$ are satisfying, therefore $k(n)$ is $\Omega(n^2)$

### Question 8:
#### a)
##### i) 
All the following are the following $2^3$subsets of $S=\{z,b,g\}$:   $\emptyset, \{z\}, \{b\}, \{g\}, \{z, b\}, \{z,g\}, \{b,g\}, \{z,b,g\}$  

##### ii)
All the following are the following $2^4$ subsets of $S=\{z,b,g,r\}$:   $\emptyset, \{z\}, \{b\}, \{g\}, \{r\},\{z, b\}, \{z,g\}, \{z,r\}, \{b,g\}, \{b, r\}, \{g, r\}, \{z,b,g\}, \{z,b,r\}, \{z,g,r\}, \{b,g,r\}, \{z,b,g\}, \{z,b,g,r\},$

#### b)
A substring is defined as a continuous string of characters within a string. The substrings of cdef are:
c, d, e, f, cd, de, ef, cde, def, cdef

#### c) 
If S=100, then $2^{100}$ subsets can be created

#### d)
```
decode(int x, set S) {
	// consistent way to output a sets element differs by language
	arr = [] 
    for (element in S) {
        arr.push(element)
    }
    
	output_subset = {} 
	binaryString = int_to_binary(x)
	binaryString = padLeft(binaryString, len(arr))
	n = len(binaryString)
	for i in range(n) {
		if(binaryString[i] == '1') {
			output_subset.add(arr[i])	
		}
	}
	return output_subset
}
```

#### e) 
```
listAllSubsets(set S) {
	decode(int x, set S) {
		// consistent way to output a sets element differs by language
		arr = [] 
	    for (element in S) {
	        arr.push(element)
	    }
	    
		output_subset = {} 
		binaryString = int_to_binary(x)
		binaryString = padLeft(binaryString, len(arr))
		n = len(binaryString)
		for i in range(n) {
			if(binaryString[i] == '1') {
				output_subset.add(arr[i])	
			}
		}
		return output_subset
	}

	n = len(S)
	allSubsets = []
	for i in range(2**n) {
		subset = decode(i, S)
		allSubsets.push(subset)
	}
	return allSubsets
}
```


#### f) 
```
allSubstrings(string s){
	out = []
	n = len(s)
	for i in range(n) {
		for j in range(i+1, n+1) { //python slicing is exclusive, go to n+1
			substring = s[i:j]
			out.push(substring)
		}
	}
	return out
}
```



### Question 9:
#### a)
There are ${3 \choose 2}=3$ ways. These groups are: $\{y, b\}, \{y, g\}, \{b, g\}$

#### b) 
```
allSets(set S) {
	arr = [] 
	for (element in S) {
		arr.push(element)
	} // difficult to access specific elements in set so copying to arr

	allSubsets = []
	n = len(arr)
	for i in range(n-1) { //last element has subsets for everything
		for j in range(i+1, n) {
			subset = {arr[i], arr[j]}
			allSubsets.push(curSet)
		}
	}
	return allSubsets
}
```


### Question 10:
The code has a runtime of $O(n)$, the i counter is increased for each run of the inner loop, so the entire code snippet is actually $O(n)$


### Question 11:
```
int smallest(int[] A) {
	if A.size() == 0 {
		throw error
	}
	smallest = A[0]
	for (num in A) {
		if num < smallest:
			smallest = num
	}
	return smallest
}
```
Runtime is O(n)


### Question 12:
```
int arraySum(int[] A){
	outSum = 0
	for (num in A) {
		outSum += num
	} 
	return outSum
}
```
Runtime is O(n)