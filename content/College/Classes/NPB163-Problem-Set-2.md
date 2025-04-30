### Entropy EQs
Entropy: $E = -\sum^n_{i=1}P(X=x_i)\cdot log_2[P(X=x_i)]$
Joint Entropy: $H(X,Y) = -\sum_{x,y}P(x,y)\cdot log_2[P(x,y)]$
- Or: $H(X,Y)=H(X)+H(Y|X)=H(Y)+H(X|Y)$
Conditional Entropy: $H(X|Y) = -\sum_{x,y}P(x,y)\cdot log_2[P(x|y)]$
Mutual Information: $I(X;Y)=H(X)+H(Y)-H(X,Y) = H(X)-H(X|Y)=H(Y)-H(Y|X)$
- Reduction in uncertainty due to knowing the message


### Problem Set
**1 -** Imagine an experiment where, on any given trial, a rat is presented with one of 8 possible odors. The odor is picked randomly according to some probability distribution.  
a) What is the minimum possible entropy? What is the maximum possible entropy?  
b) Provide an example of a probability distribution that would lead to minimum possible entropy!  
Are there other alternatives? If so, what do all of them have in common?  
c) Provide an example of a probability distribution that would lead to maximum possible entropy!  
Are there other alternatives?  
d) Just for this question, assume that only two of the 8 possible odors are ever presented and with  
equal probability. What is the entropy?
```
a) Minium is zero, always one of the eight 100% of the time. Maximum is log2(8) = 3, would happen if all 8 happened with equal probability.
b) One of the eight 100% of the time.
c) All 8 equal probability, no alternative.
d) log2(2)=1. E = - ( 0.5*-1 + 0.5*-1 + 0 ...) = 1 
Entropy is measure of the 'chaos' of the system. More uncertainty means higher entropy.
```

Assume now that all 8 possible odors have been presented with equal probability. Using extracellular recording, action potentials have been recorded from several sensory neurons simultaneously in response to odor exposure.
e) It turns out that based on these recordings it is possible to tell with almost complete certainty which of the 8 odors has been presented to the rat on any given trial. What can you say about the mutual information between the neural response and odor identity? What about the conditional entropy of odor identity given the neural response?
```
The mutual information is very high since its enough to tell with almost complete uncertainty the odor from the recordings. This means the mutual information is approaching the entropy of the system. H(O|R)=0.
```

You are now interested in the response properties of two particular neurons and you therefore only analyze the responses of these two neurons and ignore the others.  
f) When calculating the mutual information between the responses of these two neurons and odor identity you obtain a value of approx. 1 bit. What does this tell you?
```
It tells us that the entropy of the original system was greater than one, and that assuming the original uncertainty was 3, there is still 2 bits of joint entropy.
```

g) Is there signal correlation between the two neurons and, if so, is it positive or negative?  
h) Is there noise correlation between the two neurons and, if so, is it positive or negative?  
i) If there were negative noise correlation between these two neurons (same amount of noise), would the response distributions for individual odors overlap more or less? Would it be easier or  
harder to discriminate between the odors based on the response of these two neurons? What would be the effect on mutual information between the response of these two neurons and  
odor identity?
```
g) Yes, positive signal correlation.
h) Yes, positive noise correlation.
i) The overlap would respond less. It would be easier to discriminate between the odors. The mutual information of the neurons would increase.
```
