## Midterm 1:
#### Property A:
For RV X and total outcome set A
$E(X) = \sum_{c\in A}c \cdot P(x=c)$
#### Property B:
For RVs U and V...
$E(U + V) = E(U) + E(V)$
#### Property C:
You can bring a constant out of EV
$E(aX) = aE(X)$
$E(aX + b) = aE(X) + b$
#### Property D:
If U and V are *independent* RVs
$E(UV) = E(U) + E(V)$
#### Property E:
$E(g(x)) = \sum_{c\in A}g(x)P(x=c)$
##### Definition of Variance
$Var[X] = E[(X-E(X))^2]$
#### Property F:
$Var(X) = E(X^2) - (E(X))^2$
##### Proof:
$$
\displaylines{
\text{Want to prove: }Var(X) = E(X^2) - (E(X))^2 \\
Var[X] = E[(X-E(X))^2] \\
E[X - 2EX \cdot X + (EU)^2] \\
E(X^2) + E(-2EX \cdot X) + E[(EX)^2] \\
E(X^2) - 2EX \cdot EX + (EX)^2 \\
E(X^2) - (EU)^2
}
$$

#### Property G:
$Var(cX) = c^2Var(X)$
#### Property H:
$Var(X + d) = Var(X)$

#### Other general properties:
coef. of variance = $\frac{\sqrt{Var(X)}}{EX}$

Covariance: The degree to which U and V vary together
- $Cov(U,V) = E[(U-EU)(V-EV)]$
- $Cov(U,V) = E(UV)-EU\cdot EV$
- Essentially correlation

$Var(U+V) = Var(U)+Var(V)+2Cov(U,V)$
$Var(aU+bV) = a^2Var(U)+b^2Var(V)+2abCov(U,V)$


### Different Probability Distribution
#### Geometric Series 
How long until success p?
$Var[X] = \frac{1-p}{p^2}$
$E[X] = \frac{1}{p}$
$P_X(k) = (1-p)^{k-1}p$


#### Indicator
A yes or no response
x={0,1}
$E[X]=p$
$Var[X]=p(1-p)$
$P_X(k)= \{ k=1\to p, k=0\to 1-p, else: 0 \}$

#### Binomial
Play n games and win k times
General PMF:
- $P_X(k)={n \choose k}p^k(1-p)^{n-k}$
$E[X] = np$
$Var[X] = np(1-p)$


#### Uniform:
Every int is equally likely from $[a,b]$
$E[X]=\frac{1+b}{2}$
$Var[X]=\frac{(b-a)(b-a+2)}{12}$


