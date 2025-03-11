
> Question 8.1: Describe the patterns of activation that emerge in the MatrixGo, MatrixNoGo, and PFCoutD layers over learning. Briefly explain why these patterns emerged given the probabilities of dopamine bursts and dips associated with each of the different stimuli / actions (a-f). (Note that in this simulation, the reward probabilities are highest for A, next highest for B and so forth -- unlike the labels in the empirical task where B was the least rewarded action).
```
We can see that the weights in the NoGo are highest for the lowest reward inputs (F for example), while the weights in the Go are highest for high reward inuts (A). We see the PFCoutD activated most commonly with the high reward inputs A-C, and stepping through I didn't observe it fire with D-F once. Since the GPIThal is rarely allowed to threshold for the lower inputs (because of the inhibition from GPeNoGo and lack of excitation from MatrixGo), the activation doesn't tend to flow to PCFoutD for low reward inputs. 
These patterns emege because of the probability of dopamine bursts/dips associated with each input. The higher inputs have the best probability of associating with dopamine bursts (A-C), while the lower ones are primarily asosciated with dopamine dips (D-F). 
```


> Question 8.2: How do the ActAvg results from this model with Burst da gain=.25 compare to that of the "intact" network from before, with Burst da gain=1, in the MatrixGo and NoGo pathways, and the PFCOutD output layer? How does this correspond with the results from PD patients OFF meds, as shown in Figure 1? Recall that the PFCOutD layer reflects the net impact of the learning on action valuation, so units that have high ActAvg correspond to those that the system would deem rewarding on average -- you should notice a difference in how rewarding an action needs to be before the system will reliably select it.
```
The ActAvg results appear to be lower for the MatrixGo/GPiThal pathway, which makes sense since the dopamine burst to reinforce it is lower. The MatrixNoGo seems similarly active, I can't see a big difference there if any. 
The most obvious effect of these changes is that PFCoutD fires more rarely. Instead of before where activation could be observed for inputs A-C, now it only is activated for input A. We can see that the network is far more selective about inputs because of its devaluation of reward.
This corresponds to a patient off meds primarily learning by inhibition, and avoiding penalizing things rather than selecting rewarding things. 
```


> Question 8.3: Now how do the ActAvg results compare with both previous runs? How does this correspond with the results from PD patients ON meds, as shown in Figure 1?
```
The ActAvg results appear to be the same for the Go pathway, but lower on average for the NoGo pathway. This has led to the increased firing of the GPiThal as it is no longer inhibited by the GPeNoGo pathway. No we can see the PFCoutD firing for inputs A-D, a wider range than our original control simulation. 
This corresponds to a patient on meds that now has the ability to pick rewarding options, and in the case of this simulation, overcorrecting and selecting options that are lower reward than the threshold for a control patient.
```


> Question 8.4: What happened at the point where the reward was supposed to occur? Explain why this happened using the TD mechanisms of reward expectations compared to actual reward values received.
```
No reward was presented at the time step (t=15) when the network expected it, which caused a negative reward prediction error (RPE) to occur. The TD mechanism generates this error signal and propagates it through the network, driving updates to predictions in future epochs.
```


> Question 8.5: Run the network and describe what occurs over the next several epochs of extinction training in terms of the TD error signals plotted in the graph view, and explain why TD does this. After the network is done learning again, does the stimulus still evoke an expectation of reward?
```
In the next several epochs, the network progressively updates its reward predictions, which can be seen through the TD error signals plotted in the graph.  
Initially, there is a sharp negative RPE and TD signal when the reward is absent at t=15. Then, the TD error will diminish as the negative prediction error is propagated backwards through time and is factored into the prediction sum of previous events, as they are then adjusted to predict lower reward as well. The error will progressively be minimized until there is no error, and the TD signal is zero.  
After this process is complete, the network has completely adjusted to not being presented a reward anymore, and does not expect one when presented with the stimuli. It has been retrained to the absence of a reward.
```