
### Problem 0: Warm Up
#### a)
How many bit strings of length seven either begin with two 0s or end with three 1s?
A = begin w 2 0s
B = end w 3 1s
P(A or B) = P(A) + P(B) - P(A and B)
P(A) = (7-2)! = 5!
P(B) = (7-3)! = 4!
P(A and B) = (7 - 3 - 2)! = 2!
P(A or B) = 5! + 4! - 2!

#### b)
How many bit strings of length 10 either begin with two 0s or end with three 1s?
A = begin w 3 0s
B = end w 0 1s
P(A or B) = P(A) + P(B) - P(A and B)
P(A) = (10-3)! = 7!
P(B) = (10-2)! = 8!
P(A and B) = (10 - 3 - 2)! = 5!
P(A or B) = 7! + 8! - 5!

#### c)
How many ways to line 6 people up in a row if:
##### i) 
The bride must be next to the groom:
Can imagine them as a unit that gets moved around
$|A| = 2(5!)$

##### ii) 
The bride is not next to the groom:
Can find by subtracting our answer in i) by the sample space
$$
\displaylines {|\bar A| = |S| - |A| \\
|\bar A| = 6! - 2(5!)
}
$$

#### d) 
A palindrome is a string whose reversal is identical to the string. How many bit strings of length N are palindromes?
Bit strings means 2 options per digit of N
For finding palindromes, we can array the first half of the digit, and match the second half to the first half.
A is the set of all bit string of length N that are palindromes
$$
\displaylines{
|A| = 2^{\lceil (n/2) \rceil}
}$$

### Problem 1
You are playing a version of the roulette game, where the pockets are
from 0 to 16 and even numbers are red and odd numbers are black (0 is
green). You spin 3 times and add up the values you see. What is the
probability that you get a total of 18 given on the first spin you
spin a 5? What about a 8?
Solve by simulation and analytically

Analytically, we want to find $P(x_0 + x_1 + x_2 = 18 | x_0 = 5)$ and $P(x_0 + x_1 + x_2 = 18| x_0 = 8)$
$x_0 + x_1 + x_2 = 18 \iff x_1 + x_2 = 18 - x_0$, and since $x_0$ is given, we can continue under that assumption
For $x_0=5$:
$$
\displaylines{
\text{A is the event where } \,
x_1 + x_2 = 13 \\
A = \{(0, 13), (1, 12), (2, 11), (3, 10), (4, 9), (5, 8), (6, 7), \\ (7, 6), (8, 5), (9, 4), (10, 3), (11, 2), (12, 1), (13, 0)\}\\
|A| = 14 \\
|S| = 17^2 \\
\text{Assuming that all events are equally likely: } \\
P(A) = \frac{|A|}{|S|} = \frac{14}{17^2} = 0.0484
}
$$
For $x_0=8$:
$$
\displaylines{
\text{B is the event where } \,
x_1 + x_2 = 10 \\
B = {(0, 10), (1, 9), (2, 8), (3, 7), (4, 6), (5, 5), (6, 4), (7, 3), (8, 2), (9, 1), (10, 0)} \\
|B| = 11 \\
|S| = 17^2 \\
\text{Assuming that all events are equally likely: } \\
P(B) = \frac{|B|}{|S|} = \frac{11}{17^2} = 0.0381
}
$$

### Problem 2:
Aloha Background:
- n network nodes
- Epochs, and active nodes in an epoch
- If two or more nodes try to send in an epoch they collide and message is not sent
- Node is active if a node has a message to send
- If a node is active at the end of an epoch, it tries to send with prob p=0.4
- IF node is inactive at the beginning of an epoch, then it will generate a message with prob q=0.8

Assume $X_0=0$
#### a)
Find $P(X_1=2)$
This would mean that both generate a message in the first epoch with probability q, and don't send it with probability p which means that $P(X_1=2)=q^2\cdot (1-p)^2$
#### b) 
Find $P(X_2=2 | X_1 = 2)$
Since both nodes are active, we just need to find the probability that they both remain active at the end. This can either be due to both not sending with probability (1-p), or both sending and colliding with probability p.
$P(X_2=2 | X_1 = 2) = (1-p)^2 + p^2$
#### c) 
Find $P(X_2=2 | X_1 = 0)$
This would occur if both generated a message and didn't fire, or if both generated a message and fired (colliding).
$P(X_2=2 | X_1 = 0) = q^2\cdot(1-p)^2 + q^2\cdot p^2$

#### d)
Given $X_0=2$ and $X_1 = X_2$, what is the probability that there were 0, 1, or 2 collisions?


This is equal to the collisions in $P(c | X_1 = X_2 = 0 \cap X_0=2) + P(c | X_1 = X_2 = 1 \cap X_0=2) + P(c | X_1 = X_2 = 2 \cap X_0=2)$
Table of transitions and collisions when $X=2$

| N1  | N2  | P       | $c_1$ | $x_1$  |
| --- | --- | ------- | ----- | ------ |
| S   | S   | p^2     | 1     | 2      |
| S   | NS  | p(1-p)  | 0     | 1 (N2) |
| NS  | S   | p(1-p)  | 0     | 1 (N1) |
| NS  | NS  | (1-p)^2 | 0     | 2      |

Analyzing the different cases:
$P(c | X_1 = X_2 = 0 \cap X_0=2)$: This is impossible, as they cannot both send and deactivate. 
$P(c | X_1 = X_2 = 1 \cap X_0=2)$: This scenario happens with probability $2p(1-p)$ when one sends and the other does not. The table below corresponds to the transition and collisions of the ALOHA network when $X=1$.

| N1  | N2  | p           | $c_2$ | $x_2$  |
| --- | --- | ----------- | ----- | ------ |
| IA  | S   | (1-q)p      | 0     | 0      |
| IA  | NS  | (1-q)(1-p)  | 0     | 1 (N2) |
| AS  | S   | qp * p      | 1     | 2      |
| AS  | NS  | qp(1-p)     | 0     | 1 (N2) |
| ANS | S   | q(1-p)p     | 0     | 1 (N1) |
| ANS | NS  | q(1-p)(1-p) | 0     | 2      |
We see that there are no scenarios where only 1 stays active and there are no collisions.
$P(c | X_1 = X_2 = 2 \cap X_0=2)$: This scenario happens when either both send or dont send, and it has to occur twice for our givens to be satisfied (see table above). Since we are only concerned with collisions, we get:
- One collision with probability $2(1-p)^2 \cdot p^2$. Either they collide in the first epoch and don't send in the second, or vice versa. We weigh the probabilities of both possibilities.
- Two collisions with probability $(p^2)^2 = p^4$. Both nodes have to send twice. 

Putting it all together assuming our givens:
$$
\displaylines{
p=0.4 \\
P(c=2) = p^4 =0.0256 \\
P(c=1) = 2(1-p)^2\cdot p^2 = 0.1152 \\
P(c=0) = 1- p^4 - 2(1-p)^2\cdot p^2 = 0.8592
}$$

### Problem 3:
I think that it is more likely to get exactly two 10's than four spades.

Solving Analytically...
#### P(exactly 2 10's):
Find the probability of the event, and divide it by sample space since the naive definition of probability applies:
$$ 
\displaylines{
P(\text{exactly 2 10's}) = \frac{|\,\text{exactly 2 10's}\,|}{|S|} \\
= \frac{{4 \choose 2}{48 \choose 3}}{52 \choose 5} = 0.0399
}
$$
#### P(exactly 4 spades):
Find the probability of the event, and divide it by sample space since the naive definition of probability applies:
$$ 
\displaylines{
P(\text{exactly 4 spades}) = \frac{|\,\text{exactly 4 spades}\,|}{|S|} \\
= \frac{{13 \choose 4}{39 \choose 1}}{52 \choose 5} = 0.0107
}
$$

#### Final Answer:
Similar answers were obtained from the simulation, so we can confirm that it is more likely to obtain exactly two 10's

### Problem 4:
#### a)
Ways to arrange groups: ${50 \choose 10}{40 \choose 7} \approx 1.915 \times 10^{17}$. This is our sample space.
#### b)
Probability that they are not in the same group can be found by subtracting the ways that they are in the same group from the size of the sample space. Again using the naive definition of probability.
$$
\displaylines{
|A| = \text{together} = {48 \choose 8}{40 \choose 7} + {48 \choose 10}{38 \choose 5} \\
P(\bar A) = |S| - |A| \approx .946
}
$$

### Problem 5:
You are a doctor. You have a medical test that given a person has  
cancer the test sees a high (X=true) level of protein X in 92% of  
patients.  
Given the person is Healthy the test sees the protein X as  
high(X=true) in 7.5% of patients.  
Additionally it is known that 5% of the population is found to have  
cancer at the time of being screened.  
A new patient with high levels of protein X wants to know how  
probable is it that he is cancer free.  

HP = High Protein
C = Cancer
$$
\displaylines{
P(HP|C) = 0.92 \\
P(HP|\neg C) = 0.075 \\
P(C) = 0.05 \\\\
P(HP\cap C) = P(HP|C)P(C)\\
=0.046 \\\\ 
P(HP\cap \neg C) = P(HP|\neg C)P(\neg C)\\
=0.07125 \\\\
P(HP) = P(HP\cap C) + P(HP \cap \neg C) \\
= 0.1175 \\\\
P(\neg C|HP) = \frac{P(\neg C \cap HP)}{P(HP)}
= \frac{0.07125}{0.1175} = 0.608
}
$$

There is a 60.8% chance that he is cancer free, given he has high protein X


