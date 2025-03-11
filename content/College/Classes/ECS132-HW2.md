
### Problem 0
> You are playing a game at a carnival, the game involves rolling a 3 sided dice where: Rolling a 
> - 1 has probability of 2 / 10  
> - 2 has probability of 5 / 10
> - 4 has probability of 3 / 10
> If you land on the dice face 2, you get to flip a fair coin otherwise  you will flip an unfair coin such that P(Tails)=.30 Let X be a random variable that represents the number of dots you see on a face of the dice, and Y be an indicator variable on whether the coin shows a head when flipped.  
> Find var(X+4Y) analytically and confirm via simulation

$$ 
\displaylines{
P(X=1) = 0.2, P(X=2)=0.5, P(X=4)=0.3 \\
P(Y=0)=0.5*P(Fair) + 0.3*P(Unfair) \\
P(Y=1)=0.5*P(Fair) + 0.7*P(Unfair) \\
P(Fair) = .5, P(Unfair) =.5 \\
\text{$X$ and $Y$ are not independent, so we can't just find their variances seperatey. Instead: }\\
E(X) = 1(.2) + 2(.5) + 4(.3) = 2.4 \\
E(X^2) = 1^2(.2) + 2^2(.5) + 4^2(.3) = 7 \\
E(Y) = E(Y^2) = 1*P(Y=1) = 0.6 \\
E(XY) = 1(0.2)(0.7) + 2(0.5)(0.5) + 4(0.3)(0.7) = 1.48 \\
Var(X+4Y)= E((X+4Y)^2 + (E(X+4Y))^2\\
= E(X^2) + E(8XY) + E(16Y^2) - (E(X)+E(4Y))^2 \\
= 7 + 8(1.48) + 16(0.6) - (2.4+4(0.6))^2 \\
= 5.4
}
$$
The simulation found similar variance

### Problem 1:
> Consider the bus ridership example. Intuitively, L1 and L2 are not independent, show that var(L1-L2)does not equal Var(L1)+ var(L2). Determine the difference. (Find the three variances analytically, and confirm via simulation.)

$$ 
\displaylines{
Var(L1) = E(L1^2) - (E(L1))^2 \\
Var(L2) = E(L2^2) - (E(L2))^2 \\
Var(L1-L2) = Var(L1) + Var(-L2) - 2Cov(L1, -L2) \\
Cov(L1, -L2) = E(L1\cdot -L2) - E(L1)\cdot E(-L2) \\
\\
E(L1) = 1(0.4) + 2(0.1) = 0.6 \\
E(L1^2) = 1(0.4) + 4(0.1) = 0.8 \\
Var(L1) = 0.8 - 0.6^2 = 0.44 \\
\\
E(L2) = 1P(L2=1) + 2P(L2=2) + 3P(L2=3) + 4P(L2=4)  \\
= 1(.4096) + 2(.2312) + 3(.0608) + 4(.0064) \\
= 1.08 \\
E(L2^2) = 1.984 \\
Var(L2) = 1.984 - 1.08^2 = 0.8176 \\
\\
E(L1\cdot -L2)= \sum^2_{i=1} \sum^4 _{j=1} (i\cdot -j) P(L1=i \land L2=j) = -0.9488 \\
\\
Cov(L1, -L2) = -0.9488 - 0.6(-1.08) = -0.3008 \\
Var(L1-L2) = 0.44 + .8176 -2(-0.3008) = 1.8592
}
$$
The final variance should be about 0.55, but I could not work out a few problems in my arithmetic.

### Problem 2:
> The game is to toss a coin until we get r consecutive heads or reach a total of s tosses, whichever comes first. Let X denote the number of tosses we make. We win $X. Find the minimum fee that should be charged for this game if r = 4 and s = 7. Confirm via simulation.

$$ 
\displaylines{
\text{We can find the expected value of the game by finding the probability of it ending early on every length:} \\
P(X=4)= HHHHXXX = .5^4 \\
P(X=5)= THHHHXX = .5^5 \\
P(X=6)= XTHHHHX = .5^5 \\
P(X=7)= 1-P(X=4)-P(X=5)-P(X=6)=0.875 \\
E(X)=4(.5^4) + 5(.5^5) + .6(.5^5) + 7(.875)=6.71875
}
$$
This means the minimum fee we should charge to play the game is slightly under this, or $6.71.

### Problem 3:
> Let X and Y be indicator random variables such that P(X = 1), P(Y =1) and P(X = Y = 1) are p, q and r, respectively. Find Var(3X-2Y), as a function of p, q and r. NO SIMULATION

$$
\displaylines{
E(3X)=3p \\
Var(X) = 9p(1-p) \\
E(-2Y)=-2q \\
Var(-2Y)=-2q(1-q) \\
Cov(3X,-2Y)=E(3X\cdot -2Y)-E(3X)E(-2Y) = -6r+6pq \\
Var(3x-2y)=Var(3x)+Var(-2Y)-2Cov(3x,-2y) \\
= 9p(1-p)-2q(1-q)-2(-6r+6pq) \\\\
\text{In the case that they are independent: }\\
Var(3x-2y)= 9p(1-p)-2q(1-q)
}
$$


### Problem 4:
> Let X be a random variable that denotes the sum of the values on a roll of 2 dice(8 sided dice with equal prob of getting any face (1-8)).
> 1. What values does the random variable take?
> 2. Find the pmf.
> 3. What is the expected value of X? Confirm via simulation.
> 4. What is the variance ?

$$
\displaylines{
\text{1. The RV is discrete and can take values on in the range [2,16]} \\
2.\; 
P(X=x) = \begin{cases} 
\frac{x-1}{64} & 2\leq x \leq 9, \\ 
\frac{17-k}{64} & 10 \leq x \leq 16  
\end{cases} \\
3. \text{ Due to the symmetry, the expectation is the 'middle' value, or 9.}\\
E(X) = 9 \\
4.\; Var (X) = E(X^2) - (E(X))^2 = 91.5 - 81 = 10.5
}
$$
The simulation found a similar variance