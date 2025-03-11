> Question 9.1: Describe what happens to the network's internal representations and output (gaze, reach) responses over the delay and choice trials for the B trials, and how this relates to Piaget's A-not-B data in infants.
```
Initially in the B-toy-presentation phase, the hidden layer initially maintains the B location due to the input of seeing the toy at that location, and at this same time there is a toy layer active at this same time (as the infant sees the toy). Following this, there is a lid-pres period where the toy is covered by the lid, and going into the next period the only inputs are the location layer which maintains both inputs equally, and the cover input. During this delay period, the infant gazes towards B since it still has latent activation from the toy being presented. The infants representation of events during the delay is that both locations are equally active, but the A location has a higher input on the hidden layer than the B location. During this delay, the representation hidden layer is becoming increasingly activated for A, and the B location lowers its activation, and we see the infant have the strongest activation for the A Reach. 
This is fundamentally due to the infants conditioning to reach towards the A location, and the stronger weights that are created as a result. This is the same phenomenon that the Piaget A-not-B paradigm induces.
```

> Question 9.2: Describe how the network responds (i.e., in the gaze and reach outputs) this time, including a discussion of how the increased PFC (hidden) recurrent connection strength affected the network's behavior.
```
The B trial unfolds with similar activation, but this time the recurring activation in the hidden layer is enough to outweight the activation of the A hidden rep during the delay period. Due to this, its able to output the correct reach towards the B location. The increased recurrent activity allow the PFC to maintain the information through the delay and helps the networks to overcome its bias towards reaching for A.
```

> Question 9.3: What happens on the 'B' trials with this longer delay compared to what happened with Delay3 (and the same .7 recurrent weights)? Why does delay have this effect on the network's behavior?
```
This time, the delay is long enough that the .7 recurrence is not enough to maintain the B representation more strongly than the A representation in the hidden layer. Instead, the increased weight towards the A location during the hidden phase leads to this becoming the most active at the end of the delay period, causing the infant to reach towards A instead of B.
The reason that this had an effect on behavior is because the representation from the initial presentation was slowly degrading, with a recurrence of .7 instead of 1 which would maintain it fully. Due to this, the representation will eventually fall to a level where the network will rely on its 'instinct' of reaching towards A once it no longer has a distinguishing activation towards B.
```

> Question 9.4: Report the weights for the g and G hidden units from their respective input, PFC, and output units (you need only report the gr output weights, not rd).
```
The G hidden unit has stronger weights overall:
g Hidden:
	g Colors: 0.343
	gr Output: 0.959
	rd Output: 0.25
	cn PFC: 0.435
G Hidden: 
	G Words: 0.401
	gr Output: 0.9996
	rd Output: 0.25
	wr PFC: 0.685
```

> Question 9.5: Describe what happens in the network during the conflict color naming condition, paying particular attention to the activations of the hidden units, and how this leads to the observed slowing of response time (settling).
```
In the conflict color naming condition, the hidden layer has activation for both the congruent color, and the conflicting word. To overcome this, the activation from the PFC is needed to make the color representation overcome the activation of the word representation. This causes the output to be delayed, as it needs to weight for the hidden layers to reach the correct activation for the outputs to be settled.
```

> Question 9.6: Compare the results of this overall slowing manipulation to the PFC gain manipulation performed previously. Does slowing also produce the characteristic behavior seen in frontal and schizophrenic patients? (To assess whether the conflict color naming condition is specifically affected, you should adjust for overall slowing effects by dividing the conflict color response time by the control color response time--the resulting value is 1.4 in the intact model and 1.6 in the model with the weakened contributions from the prefrontal units.)
```
For the trial of DtVmTau=40, I found:
- Color_Ctrl=161
- Color_Conf=227
- Color_Cong=153
227/161 = 1.410

For the intact model:
- Color_Ctrl=120
- Color_Conf=168
- Color_Cong=114
168/120 = 1.4

Slowing the model decision doesn't seem to reproduce the same conflict as is present in frontal and schizophrenic patients, as the ratio between the control and conflicting trials shares the same ratio of 1.4, despite the difference in baseline reaction time. This could be analogous to an older control patient with a longer reaction time doing the task, instead of analogous to a patient with a PFC impairment.
```

> Question 9.7: Let's see how DA signals impact network learning. Change Burst DA gain in the control panel from 1 to 0. This allows DA signals in SNc to proceed as usual but eliminates their impact on the striatal Matrix units (analogous to inhibiting the DA termininals directty in striatum). Click back to Train, then Init and Step Run to train the network. You can again observe the learning over epochs in Train Epoch Plot. Report the values of PctErr amd RewPred at the end of compared to the default case (of DA burst = 1). Then do Test, Init and Stepthrough a sequence of test trials and look a theTest Trialtable. Report wheher the network makes errors in these test trials, and if so on which type of trials does it succeed and which does it fail?  Note that standard XCAL error-driven learning into the hidden and output layers remains intact in these cases. How and why do DA manipulations have an effect here where they were not needed for learning other tasks (e.g., in chapter 4)? You can also repeat the above process to test the effect of restoring DA bursts (setBurst DA gainback to 1) but switching Dip DA gain to 0 (this prevents the DA dips from having any effect, as would happen due to some medications, reminiscent of the Parkinson's simulations in the BG model). You should see similar results (particularly obvious if you run multiple Runs of networks), demonstrating the need for both DA bursts and dips.
```

```


> Question 9.8: Explain how these weights from S,I,R inputs to the Matrix stripes makes sense in terms of how the network actually solved the task, including how the Store information was maintained, and when it was output, and why the Ignore trials did not disturb the stored information.
```

```