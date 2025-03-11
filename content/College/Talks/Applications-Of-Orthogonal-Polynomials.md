---
created:
  - " 10-24-2024 15:24"
tags:
  - Entry
Entry-For: College-Talks
topic: Applications of Orthogonal Polynomials
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> Applications of orthogonal polynomials in the study of random matrices and randomized algorithms
[Link](https://statistics.sf.ucdavis.edu/events/seminar-102424-trogdon)
## 🎤 Vocab


## ❗ Information
### Talk Info
#### Title:  
Applications of orthogonal polynomials in the study of random matrices and randomized algorithms
#### Speaker: 
Thomas Trogdon, Professor, Department of Applied Mathematics, University of Washington

#### Abstract: 
This talk will discuss how the study of the orthogonal polynomials (OPs) for the eigenvector empirical spectral distribution, the so-called VESD, can be used in the analysis of how algorithms act on random matrices. More specifically, using perturbation theory and other analyses of the VESD OPs, one finds both theoretical tools to analyze the random matrix distributions and new algorithms for statistical estimation. This is joint work with Xiucai Ding (UC Davis), Tyler Chen (NYU) and Charbel Abi Younes (UW).

#### Bio:
Thomas Trogdon is a professor in the Department of Applied Mathematics, an adjunct professor in the Department of Mathematics and an affiliate of the Algorithmic Foundations of Data Science Institute, all at the University of Washington.  Trogdon works on a variety of computational, applied and theoretical problems from the fields of mathematical physics, random matrix theory and approximation theory.  He was an NSF Postdoctoral Fellow at the Courant Institute at NYU from 2013-2016, and he won the SIAM Richard C. DiPrima Prize in 2013. Then he joined the Department of Mathematics at UC Irvine and won the 2017 SIAM Gábor Szegő Prize and NSF Career Award before he joined the University of Washington in 2019.  He coauthored the book Riemann-Hilbert Problems, Their Numerical Solution and the Computation of Nonlinear Special Functions with Sheehan Olver.  Trogdon earned his doctorate in Applied Mathematics from the University of Washington in 2013.

Faculty Web-page (links to UW): https://faculty.washington.edu/trogdon/


### Content
 - Orthog polys, algos, random matrices
 - Iterative methods on large random matrices
 - An approach to specrtal density estimation
 - Stability of Lanczos


## ✒️ -> Scratch Notes
Trogdon interested in nonlinear dynamics initially

### Orthog Polys
Orthogonal polynomial basis of $\mu$?
Normalize for orthonormal basis
- There exists a three term recurrence of terms to get next term (almost like fibonacci)
- Here exists the jacobi operator associatedto $\mu$
	- There exists a bijection
- Something about `moments`?

#### Toda, Flaschka and Moser
Nonlinear ODEs solve themselves as they go to infinity
- Diagonal matrix of eigenvectors
- AS THEY GO TO INFINITY


###  A discrete time exactly solvable algo
conjugate gradient algorithm - CG Algo
- The CG algo is then equivalent to the poly minimization problem
- ... is the so called eigenvector spectral dist (VESD)


### Algorithms on Gaussian Matrices
Wigner matrices and semicircle law
As dimensions increase, we see algo become deterministic (22 runs). Resembles gaussian?

CG gives the support of MP (marchenzko - p... distribution?)

### Lannczos in finite precision on many random matrixis stable
reorhginaliation isnt always needed
- Can be stable, but spikes can disrupt it
- Careful implementation needed





## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

