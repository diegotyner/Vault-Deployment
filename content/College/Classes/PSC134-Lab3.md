
> Question 3.1: Given what you know about how a Cluster Plot works (see above link), describe how the three features (gender, emotion, and identity) relate to the clustering of images by similarity. Specifically, think about where there are the greatest number of overlapping pixels across the different images from each of the different categories (all the happy vs. sad, female vs. male, and within each individual).
```
Given that a cluster plot is a way of visualizing similarity in high dimensional structure, we can see that the features are clustered together largely because of the magnitude of the pixel inputs associated with each category. We can see that the first branch in the cluster plot is the difference between male and female inputs. This is likely because these two features have the greatest influence on the pixel values of the input (whether they have a lot of hair pixels or not). Then, we see them branch more to adapt to the characteristics specific to an individual, and then another last branch for their emotional state. It it likely they were grouped like this because of the pixels that each feature influences (gender > identity > emotion).
```

> Question 3.2: How does the Emotion categorization transform the overall face input similarity compared to what we saw in the first cluster plot -- ie., what items are now the most similar to each other?
```
When the netork is only categorizing emotions, we can see it becomes most sensitive to emotion. Now inputs are grouped together because they share the emotion feature, despite having different gender and identities. 
```

> Question 3.3: Across multiple different such partial faces, what is the order in which the correct category units get active (there may be transient activity in incorrect units)? For each case also list how this order corresponds to the timing of when the missing features in the input face start to get filled in.
```
The correctly categorized units will have a correct enough input to activate the correct features (bottom-up), and when these get activated they will strengthen the inputs associated with them (top-down) and fill in some of the missing pixels. It's almost like the network has an intuition about what it should be, and then fills in the inputs to confirm it. 
It seems like the order they fill in the features is: gender gets filled in correctly nearly instantly, identity will be a little more unsure then get filled in quickly as well, then gender emotion fills in shortly after. For some inputs, identity will have conflicting decisions, and will slowly fall into a classification after gender and emotion get filled in. 
The order would go: input neurons -> (activate) feature neurons -> (which flow back down to) input neurons until they land in an attraction well. 
```

> Question 3.4: Explain why the subset of cat individuals ended up getting activated, when just cat was provided as input -- how might this differential activation of individuals provide useful information about different cats in relation to the general cat category?
```
The cat individuals ended up activated because that was part of the attraction well the input corresponded to / landed on a maximized harmony. This provides some information about the most 'stereotypical' cats. The animals it lands on for cats and dogs both share a large amount of common traits for each species. For cats, small / grass / string are the majority traits. For dogs, black and white, medium, scraps, and bone are majority traits. The individuals it lands on all share these traits. 
```

> Question 3.5: Report what differences you observed in the settling behavior of the network for the different values of noise (0, .1, .01, .001), and explain what this tells you about how noise is affecting the process
```
0: It rests at an even activation for every input. 
0.1: It quickly lands at a single side, but it still has effects of noise stopping it from resting at harmony.
0.01: It quickly lands at a single side, but rests there largely without disturbance.
0.001: Same as above, but even less disturbance to its resting state.

The noise allows it to escape local maximums of harmony, and explore new options. If the noise level is too high, it might not rest well at a globabl maximum. It is too low, it might now be able to escape local maximum attraction wells. 
```

> Question 3.6: What effects does decreasing and increasing HiddenGbarI have on the average level of excitation of the hidden units and of the inhibitory units, and why does it have these effects (simple one-sentence answer)?
```
0.15: Very strong activation in everything
0.65: Very litle activation
Raising HiddenGbarI seems to increase inhibition and makes the average level of excitation and firing lower. 
```

> Question 3.7: How does eliminating feedforward inhibition affect the behavior of the excitatory and inhibitory average activity levels -- is there a clear qualitative difference in terms of when the two layers start to get active, and in their overall patterns of activity, compared to with the default parameters?
```
Setting FFInhibWtScale to 0 appears to prevent the inhibotory neurons from getting activated before the hidden neurons, and creating a large initial 'wave' of spiking. After the activation of the hidden units, the inhibitory neurons get strongly activated as well, and quench the hidden unit, before the cycle repeats with a slightly less powerful hidden unit action in the next wave.

With the default parameters, the input layer projects to the inhibition layer initially, and that controls the response of the hidden unit. Doing it like this allows the hidden unit to reach an attraction well faster.
```

> Question 3.8: How much does the hidden average activity level vary as a function of the different InputPct levels (10, 20, 30). What does this reveal about the set point nature of the FFFB inhibition mechanism (i.e., the extent to which it works like an air conditioner that works to maintain a fixed set-point temperature)?
```
10: The inhibition activation is initially low, then rises to a little bit under 20%
20: The inhibition rises and falls variable at the start, then balances out a litte above 20%
30: The inhibition rises the most at the start, then balances out a little above 25%. 

The hidden activity level seems to balance out around the same level, despite having different input percents. This tells us that the inhibition mechanisms works to attract the network activity to a desired level, being relatively robust against variations in input. This is like an air conditioner working at different temperatures (inputs) and keeping the house at a desired temperature despite that.  
```

