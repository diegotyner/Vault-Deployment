> Question 7.1: Report the ABErr:Mean and Min in the RunStats for your batch run of 10 simulated subjects (hover over the points in the plot and report the final, y-axis value listed, or click on the Table to see a table of numerical values). Also do another Init and Step Run while looking at the Test Epoch Log and report the general relationship between AC learning and AB interference across runs -- does AC generally show any significant learning before AB performance has mostly evaporated?
```
ABErr:Mean - 0.878
ABErr:Min - 0.5

No, the trend shown in the graphs is that the two learnings are inversely correlated. When the AC learning begins and the error lowers, AB learning is quickly undone and the error shoots up. 
```

> Question 7.2: Click the RunStats Plot and report the resulting AB Err:Mean and Min statistics -- did this reduce the amount of AB interference?
```
ABErr:Mean - 0.84
ABErr:Min - 0.6

Yes, the overall interferance went down as we can see AB error decrease. 
```

> Question 7.3: Click the RunStats Plot and report the resulting AB Err:Mean and Min statistics -- did these parameters reduce the amount of AB interference? Informal testing has shown that this is close to the best performance that can be obtained in this network with these parameters -- is it now a good model of human performance?
```
I did this with Hidden inhib gi=2.2, Fm context=1.5, and X cal L Irn=0.0005
ABErr:Mean - 0.7
ABErr:Min - 0.4

It is now a better model of human performance, as we can see that it doesn't show as catastrophic a level of interference. Instead, it can learn the new AC stimulus without completely overwriting its AB learning. However, it has not completely reached the levels of human like learning shown in human trials, where AB error is around 0.5.
```

> Question 7.4: Using the explanation given earlier in the text about the pattern separation mechanism, and the relative levels of activity and inhibition in these different layers, explain the overlap results for each layer in terms of these activity levels, in qualitative terms.
```
ECin -> CA1 -> CA3 -> DG  
The overlap results make sense, as it follows from the roles each of these layers play in the hippocampus.  
The ECin makes sense that it would have the most overlap, as it tries to feed in the input of the 'memory' as faithfully as it can, not yet concerned with differentiation.   
The CA1 would have the next most overlap, as it creates a stable representation of the input that is invertible so as to recover the original input. To accomplish this, it is likely that maintaining a degree of similarity between similar inputs would be helpful.  
After this, the CA3 would have the next least overlap as it tries to maintain a sparse representation and encode a specific memory. It accomplishes both of these tasks through its recurrent inner connections and its high levels of inhibition.  
Finally, the DG would have the least overlap as it is tasked with extreme pattern separation, and maintains both a sparse representation and distinguishable activation. It features the highest level of inhibition.
```

> Question 7.5: Report the total proportion of Mem responses for the AB, AC, and Lure tests
```
AB - 1
AC - 0
Lure - 0
```

> Question 7.6: Report the TstABMem:Mean (average) values for the AB items. In general the AC and Lure items should all be at 1 and 0 respectively. How well does this result compare to the human results shown in Figure 1?
```
TstABMem:Mean - 0.5666
This is very close to the human results shown, where the humans get an AB error of around 0.5 compared to this new models 0.566. The network has learned how to maintain memory for AB pairs, despite interference from AC pairs. This subverts the catastrophic interference issue that was present with the simpler models.
```

> Question 7.7: Report the IsA results for each of the 3 data points, corresponding to TrainAll, TrainB, and TrainA (hover the mouse over the points to get the numbers, or click the Table button to see a table of the numbers).
```
TrainAll - 0.692
TrainB - 0.384
TrainA - 0.615
```

> Question 7.8: Report the number of times the network responded 'a' instead of 'b' for the 'b' test trials, relative to the baseline that you observed above with Decay set to 1
```
Decay=1 Baseline: 2 a
Decay=0 Trial: 2 a
```
