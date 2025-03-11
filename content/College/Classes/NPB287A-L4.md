---
created:
  - " 01-30-2025 09:41"
tags:
  - Classes
aliases:
---

# 📗 ->  01/30/25: NPB287A-L4
---
[Underactuated Page](https://underactuated.csail.mit.edu/dp.html)

## 🎤 Vocab



## ❗ Unit and Larger Context
> Dynamic programming/Optimal control. Reinforcement learning 2. 7.3, 8.1



## ✒️ -> Scratch Notes
![[Hamilton-Jacobi-Bellman-Equation.png]]
- HJB equation

Guess and check theorem:
- If you find an equation J that satisfies the HJB equation, that's sufficient. Theorem 7.1 HJB Sufficiency Theorem

What can we do with HJB?
1) Verify a cost function J is the minimum
2) Solve, and find $J^*$

Using HJB to verify:
1) Given a system
2) Given a $J(x)$
3) Plug J into the HJB
4) Evaluate the right side
	1) Take $dJ/dx$
	2) Find the minimizing u
	3) Plug in the minimizing u to get the min value
5) If it is 0, then the J we were given is optimal
6) ~~missed last one~~

#### Example 7.6
Our system is an air hockey puck, want it at origin
$f(x,u) = \dot{x} = [\dot{q}, \ddot{q}] = [\dot{q}, u]$
$l(x,u)= q^2 + \dot{q}^2 + u^2$
- Cost function punishing not being at origin, high speeds, and high forces
Solve, get:
$l(x,u) + \partial{J}/\partial{x}f(x,u)$
$= q^2 + \dot{q}^2 + u^2 + (2\sqrt{3}+\dot{q})\dot{q} + (2q+2\sqrt{3}\dot{q})u$
- $u^* = -q - \sqrt{3}\dot{q}$
Plug in $u^*$, and it does indeed qual 0
$J(x) = \sqrt{3}q^2 + 2q\dot{q} + \sqrt{3}\dot{q}^2$ is the optimal cost-to-go
- theres also a control policy $\pi(x) = -q - \sqrt{3}\dot{q}$


### How to extrapolate to continuous
Impose conditions on systems to make it tractable:
1) Control affine dynamics
2) Control positive quadratic cost

Affine is defined as: linear plus a constant
- $y=mx+b$
The systems dynamics function $f(x,u)$ is affine in u
- $\dot{x} = f(x,u) = f_1(x) + f_2(x)u$
$f(x,u) = \dot{x} = [\dot{q}, \ddot{q}] = [\dot{q}, u]$
- Equivalent to vector operations: $=[\dot{q}, 0] + [0,1]u$


Control positive quadratic cost
Our chosen instanteous cost function $l(x,u)$ is quadratic in u
- $l(x,u) = l_1(x) +u^TRu$
![[R-Matrix-Definition.png|100]]


Given these assumptions, we get a "bowl" (convex) equation
![[Constrained-HJB-Equation.png]]
- Makes it nice to minimize

![[J-Star-Annotation-Explanation.jpg]]


#### LQR (8.1)
Goal: Finding optimal control $u=-Kx$ (what is K?)

Solve, until you get the algebraic riccati equation
- Tools available online, to efficiently find S

If you have a fixed point for a nonlinear system, you can create a linear expression / local stabilization around it. This is useful as a lot of control is based around stabilizing in this fashion. If you can get close to the fixed point, you're golden and can use much simpler math. "Everything is linear locally"



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
