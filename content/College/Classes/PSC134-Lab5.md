> Question 6.1: Which different properties of edges are encoded differently by different hidden units? In other words, over what types of properties or dimensions do the hidden unit receptive fields vary? There are four main ones, with one very obvious one being orientation -- different hidden units encode edges of different orientations (e.g., horizontal, vertical, diagonal). Describe three more such properties or dimensions.
```
They vary in magnitude of receptiveness to input (some are strongly receptive others only slighly), point of space encoded (some want a diagonal bar at the top corner, others at the bottom corner), size of responsive field (some only have small dots of responsiveness), and polarity of the receptive field.
```

> Question 6.2: Explain the sense in which these probe stimuli represent edges, making reference to the relationship between the LGNon and LGNoff patterns.
```
Probe stimuli represent edges because the LGNs are receptive to contrast in lightness. If we see adjacent lines of activation from LGNon and LGNoff neurons, we know that the stimuli is representing an edge of lightness on the LGNon side and darkness on the LGNoff side.
```

> Question 6.3: Explain the significance of the line-element combinations and spatial invariance observed in the V4 receptive fields, in terms of the overall computation performed by the network.
```
As V4 is interpreting combinations of the line patterns in V1, it gets less sensitive to the space represented in the inputs and more to the intersection of the patterns in V1. We can see in many of the V4:Image cells, that the V4 unit is receptive to a certain pattern of activation, but smeared around to provide a measure of spatial invariance.
```


> Question 6.4: Pick a different V4 unit from Figure 3, and explain how its strongest Output representation makes sense based on the features shown in its Image receptive field. (Hint: Pick a unit that is particularly selective for specific Image patterns and specific output units, because this makes things easier to see.)
```
One very clear one is V4 unit row 6 column 1. Through its pattern you can see how it looks like a set of parralel lines, and looking at its output you can see that that is its most correlated output, mostly representing pattern 6. 
```

> Question 6.5: Based on your examination of the IT units, do individual neurons appear to code for a single entire object, or rather parts of different objects (such that an individual neuron is active across multiple objects)? Explain.
```
The IT units do not appear to code for a single object. We can see this through the number of outputs they are correlated with strongly, and how it is very unusual for an IT unit to be associated with a single object/output. Instead, the IT units are involved in a distributed representation, where their combination codes for an object.
```

> Question 6.6: Report the RT:Mean values for each condition from the TrialStats table.
```
Diff_Obj_Loc: 58.75
Same_Obj_Diff_Loc: 52.833
Diff_Obj_Same_Loc: 220
```


> Question 6.7: How does the influence of the spatial cue affect subsequent processing of the target, in terms of the settling times (RT) on each condition? Report average data per condition/group from the TrialStats table. Please also describe the mechanistic reason why you observe changes to the Posner task not just the changes themselves.
```
Neutral: 55.6
Valid: 43
Invalid: 105.8
We observe trial to trial changes because of the cue activating the network, and affecting the resulting classification for the target. In a valid trial, the network is properly activated faciliating a correct classification. In a invalid one, the network has to self correct after the cue in order to get the correct classification, increasing reaction time. 
```

> Question 6.8: Report the resulting averages from the TrialStats table.
```
Neutral: 55.6
Valid: 43
Invalid: 138.85
```


> Question 6.9: Compute the invalid-valid difference, and compare it first with that same difference in the intact network, and then with the patient's data as discussed above.
```
Healthy: Valid=43 / Invalid=105.8
Lesioned: Valid=43 / Invalid=138.85
Patient: Valid=640 / Invalid=760

For lesioned model, the invalid-valid difference is 95.85. For the healthy model, the difference is 62.8. The patient's difference is 120ms. We can see that the lesioned model has a much bigger difference than the healthy model (95.85 > 62.8), but can't compare it to the patient's data without normalizing.

Lesioned Valid / Healthy Valid = 1.
Healthy Valid * 1 = 105.8. The scaled difference for the lesioned model is greater than the healthy models. 

Lesioned Valid / Patient Valid = 0.0672.
Patient Invalid * 0.0672 = 51.063. The scaled difference for the lesioned model is much greater than the patients.
```


> Question 6.10: Report the results of the TrialStats for the bilaterally lesioned network.
```
RT:
Neutral:55.98
Valid: 55
Invalid: 79.94
```


> Question 6.11: Report in detail what happens on the valid and invalid trials that produces the inhibition of return effect. It is useful to observe the activation (or lack thereof) of the various layers as the cue duration increases. While you should see changes in the ranges of durations specified, you may have to increase the cue duration even more to get the full inhibition of return effect.
```
The inhibition of return effect is caused by the neurons becoming fatigued, and no longer being able to sustain their spatial representation. In our model, this is induced by turning on the KNaAdapt.
When our cue is sustained for a long period of time, neurons will be fatigued by the time the target signal is shown and preventing them from sending forwards their signal. With short cues this does not become an issue, but when the cue duration is increased it can become relevant.
Additionally, this is not a factor on invalid cues because the neurons being fatigued are not the ones responsible for responding to the target signal. However, this does become a factor on valid trials with a long cue duration, where the neurons sending the target signal will become fatigued and cause the reaction time to increase.
```
