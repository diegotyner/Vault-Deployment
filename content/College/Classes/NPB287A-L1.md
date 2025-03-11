---
created:
  - " 01-09-2025 09:16"
tags:
  - Classes
aliases:
---

# 📗 ->  01/09/25: NPB287A-L1
---

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary
neurosci-theory@ucdavis.edu
[College of Biological Sciences - Mark Goldman](https://biology.ucdavis.edu/people/mark-goldman)

triangle of good presentations:
1) Good concepts - start with important info and centralize it
	- Give big picture of field
2) Equations - Mathematical stuff
3) Key demonstrations / examples

Textbook (online):
- Underactuated Robotics: Learning Planning and control for efficient and agile machines. Course notes for MIT 6.832 - Russ Tedrake
	- Focusing on control chapters
	- https://underactuated.csail.mit.edu/index.html
	- https://underactuated.csail.mit.edu/Spring2024/schedule.html
	
3 key points of math:
1) Cost function minimized
2) Algorithm of doing it
3) ?...





## ✒️ -> Scratch Notes
### Control Theory
- A field of applied math & engineering that deals with controlling the dynamics of a given system, usually by applying feedback to the system
	- A controller -> System -> Sensor -> controller...
	- Controller: Generates the inputs used to control the system
		- Can't actually control everything, far more degrees of freedom than we have control over
	- System: Any system whose output we'd like to control. The economy, the brain, cells, ....
	- Sensor: Measures system output
"Optimal control theory (engineering)" == "Reinforcement Learning (CS/ML)"

**Underactuated control** - When the controller cannot move the system arbitrarily
Why?
- Controller lower D than the system
- The controller has constraints (max force, physical impediments, limited coupling to system, ...)

In a prosthetic limb example:
1) System (the limb)
2) Controller (the BRAIN AND the BCI reader)
3) Sensor (either feedback, like some form of electrode stimulation or something else)
The brain is a key part of the controller, that does more heavy lifting than we give it credit


#### 2nd order control dynamical signal:
Control signal: $\textbf{u}(t)$
System output: $\textbf{q}(t)$
2nd order control system obeys the equation:
- 2nd order because of f=ma, OR a = f/m
- $\ddot{q} = f(q,\dot{q}, u, t)$
	- $\ddot{q}$ is a 2-D vector? 
	- $f(q,\dot{q}, u, t) = f_1(q, \dot{q}, t) + f_2(q,\dot{q},t)\textbf{u}$
		- Acceleration a linear function of control signal u
		- Factorization is not general, only applies to simple linear systems
		- the 2nd f-term: if this term can only vary along 1-D (math: f2 is a 'rank 1' matrix)
			- In this case... the problem is underactuated!
			- Also underactuated is constraints on power, or something else
- Double dot is a 2nd time-derivative (acceleration for mech systems)
	- Most derivs are with respect to time


| week | topic                                                                                                                                     | presenter |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 1    |                                                                                                                                           |           |
| 2    | Nonlinear dynamics. Teldrake, Chapter 2. Appendix b.1 (for simple pendulum)                                                               |           |
| 3    | Dynamic programming/Optimal control. Reinforcement learning 1. 7.1, 7.2                                                                   |           |
| 4    | Dynamic programming/Optimal control. Reinforcement learning 2. 7.3, 8.1                                                                   |           |
| 5    | Model system equation of motion. Controllability and stability teldrake chapter 3.1-3.4. Appendix b-1                                     |           |
| 6    | Dynamic programming/Optimal control. Reinforcement learning 3. Tedrake 7.4.1-7.4.3                                                        |           |
| 7    | Lyapanov analysis. Tedrake, Chapter 9.1, Chapter 3.6 (briefly)                                                                            |           |
| 8    | convex optimization - Theres a video, and appendix C2.1-C3.3                                                                              |           |
| 9    | computing lyaponov functions - Tedrake, 9.2.1-9.2.3, 9.3                                                                                  |           |
| 10   | Model Predictive control. Sebverg process dynamics & control, Chapter 20<br>- Dont use the original system, but use the MODEL as a sensor |           |


### Intro to Lin Alg
1. Matrix arithmetic
2. Matrix properties
3. Eigenvectors & eigenvalues
4. PCA ex
Bonus: More matrix properties

#### Operations
Matrix addition
Scalar time svector
Element-by-element product (Hadamard product)
- Dont in matlab with "$.*$"
More common multiplication: Dot product (inner product)
- 1xN * Nx1 = 1x1
- Rows of A = columns of B. 
- Outer dimensionsgive size of resulting matrx
- Geometrically: Gives the overlap, or projectection of 2 vectors
	- $x\cdot y = |x||y|cost(\theta)$

> [!tip] When reading matrices / vectors...
> Take a pen and paper and WRITE OUT the size of matrix. Saves a headache, and gives better geometric Understanding

*Ex)*
A linear feed-forward network.
The value of a single output neuron, is a combination of r: Firing rate and w: Weights. o: output firing rate
$r\cdot w = o$
- Geometrically, the receptive field will be most when the input is parallel to the weight vector
- Receptive fields can be thought of this way

Multiplication: Outer product
- Nx1 * 1xN = NxN
- Each column or each row is a multiple of the others

Matrix times a vector: $\vec{y} = \overleftrightarrow{W}\vec{x}$
- The column vector x is multiplied by each row of W iteratively 

Outer product interpretation:
- Product is a weighted sum of the columns of W, weighed by the entries of x
*Ex)*
2-layer dense linear network
- Now, more output units y, its a column vector now
- Weights are represented as a 2d vector
- $y_i = \sum^n_i W_{ij}x_j$
- The response is the dot product of the ith row of W with the vector x
Outer product point of view does it backwards, seeing how much each neuron is going to contribute to a final unit
- $\vec{y} = x_1W^{(1)} + \dots + x_NW^{(N)}$

Product of 2 matrices:
- NxP * PxM = NxM
	- Inner matrix dimensions must agree
- Cij is the innter product the ith row of A with the jth column of B
- $C_ij = \sum^P_{k=1} A_{ik} B_{kj}$ 

- Can also do by outer products
	- C is a sum of outer products of the columns of A with the rows of B
		- Each outer product is a rank 1 matrix
	- This is one of the workhorses of fancy dimensionality reduction

#### Part 2: Special Matrices
*1.* Diagonal matrices - Values only along the main diagonal, rest 0
- This can be applied like scalar multiplication
- $D\vec{x} = \sum^n d_ix_i$
*2.* Identity Matrix
*3.* Inverse Matrix
- Matrix such that $A*A^{-1} = 1$
- No inverse if theres "something zero like about the matrix"
> How does a matrix transform a square?
- Turns unit vectors into a parallelogram!
- Whats the area of the parallelogram?
	- $Area = |det(M)| = |ad-bc|$
		- If 2x2. 
With this, go back to inverse question. 
*If the determinant is zero, there is no inverse*
$A\vec{x} = \lambda \vec{x}$
$(A - \lambda 1)x = 0$
$det(A -\lambda 1) = 0$ or $x=0$

Some nonzero x are sent to 0 (the set of all x with Mx=0 are called the "nullspace" of M)
This is because det(M)=0, so M is not invertible. If the det != 0, the only value in nullspace is x=0.

What do vectors do?
If you multiply a vector by a mat...
1. Rotated (not pointing in same direction)
2. Scaling them

What if they dont get rotate, only scaled?
- These vectors are called eigenvectors, and have the property that:
	- $Mx = cx$, or commonly $Mx = \lambda x$ 
	- Eigenvectors are only indicated by a direction, scale is irrelevant. Both of the following are eigenvectors:
		- e
		- 2e





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
