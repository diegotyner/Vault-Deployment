

## Problem C
### Part 1
> Suppose the number of bugs per 1,000 lines of code has a Poisson distribution with mean 4.5. Let’s find the probability of having more than 90 bugs in 20 sections of code, each 1,000 lines long. We’ll assume the different sections act independently in terms of bugs. 
> Please show the z-table lookup required to solve this problem if you didn’t have R, now show the R function call.

$$
\displaylines{
B\sim Poisson(4.5) \\
\mu_B=4.5, \sigma_B^2=4.5, \text{For Poisson, variance and mean are equal.} \\
Tot = \text{20 samples of }B \\ 
\mu_T = 4.5\cdot 20 = 90, \sigma_T^2=30\cdot \sigma_B^2 = 135\\
P(T \ge 90) = P(z \ge \frac{90 - 90}{\sqrt{135}}) = P(z\ge 0) = 0.5
}
$$
For the z-table lookup, we find the probability associated with a z-value greater than 0. This is exactly half the curve, meaning our probability is 0.5 (half).

### Part 2
##### Part A
> Generate 8 random numbers from a geometric distribution with p=.65.

$[1, 1, 3, 1, 2, 1, 2, 1]$

##### Part B
> Find the 94% confidence interval for $E[x]$

94% confidence interval:
$$
\displaylines{
\bar{x} = \frac{1+1+3+1+2+1+2+1}{8}=1.5 \\
s^2= \frac{1}{8}\sum_{i=1}^8 (x_i - 1.5)^2= 0.571 \\
z_c = 1.88. \text{(By z-table lookup)}\\ 
CI = \bar{x} \pm z_{crit}\sqrt{s^2/n} \\
CI = 1.5 \pm 1.88\sqrt{0.571 /8} \\
CI \in [0.998, 2.002]
}
$$
In reality, for a geometric RV: $E[X]=1/p=1/0.65=1.5$. This value is inside of our confidence interval, as we were 94% likely to find. 


### Part 3
##### Part A
> Generate 8 random numbers from an exponential distribution with mean =32.

$[28.538, 12.774, 40.428,  35.069, 126.551, 69.217, 6.515, 6.713]$

##### Part B
> You are looking at the population of salmon in the Sacramento River and are interested in the weight of the salmon.
> You catch and release 8 salmon and weigh them. Pretend that the weight data you collect for the 8 samples is the data from Part A where each number is the weight in lb.
> Find the 94% confidence interval for the average weight salmon population

$$
\displaylines{
\bar{x} = 40.726 \\
s^2= 1638.119 \\
z_c = 1.88 \\ 
CI = \bar{x} \pm z_{crit}\sqrt{s^2/n} \\
CI = 40.726 \pm 1.88\sqrt{1638.119 /8} \\
CI \in [13.825, 67.627]
}
$$
The ground truth value we created our data from is an exponential distribution with mean 32. This value is within our confidence interval, as we had a 94% probability of finding. 

### Part 4
> Given two populations of salmon and tuna you have been told the length of the two fish has no difference however you sample the Sacramento river and see that the average length of tuna is 15in and salmon is 14in with st.dev of 1 and 2 respectively ( samples size of 15 and 20 respectively). Test the alternative hypothesis with .α =. 04


|                            | Tuna | Salmon |
| -------------------------- | ---- | ------ |
| Sample Average ($\bar{x}$) | 15   | 14     |
| Sample Variance $s^2$      | 1    | 2      |
| Sample Size ($n$)          | 15   | 20     |
$\alpha=.04$, significance level=$0.96$

1) *State hypothesis*
$H_o: \mu_t - \mu_s = 0, H_a: \mu_t - \mu_s \neq 0$
2) *Find 96% Confidence Interval Range*
$CI = (\bar{x_t} - \bar{x_s}) \pm z_{crit}\sqrt{\frac{s^2_t}{n_t} + \frac{s^2_s}{n_s}}$
$CI = 1\pm1.88\sqrt{1/15+2/20}$
$CI \in [0.232, 1.768]$
0 is not in this range, so we can reject our null hypothesis. 

We can also test our alternative hypothesis like this:
1) *Find test statistic*
$t = \frac{obs\_value - null\_value}{obs\_sd}$
$t = \frac{(\bar{x_t} - \bar{x_s}) - ({x_t} - {x_s})}{\sqrt{\frac{s^2_t}{n_t} + \frac{s^2_s}{n_s}}} = \frac{(15-14)-0}{\sqrt{1/15 + 2/20}} = 2.449$
2) *Analyze test statistic at our significance level*
Since our test statistic is greater than our critical z-value (1.88, associated with a two tailed test with α=.04), we can reject our null hypothesis


