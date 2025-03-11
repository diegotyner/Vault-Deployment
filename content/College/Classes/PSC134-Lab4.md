> Question 4.1: How many times across the 8 runs was there a less-than-10 result for the UniqPats number of uniquely represented lines, with the default parameters?
```
I observed zero sub-10 Uniqpats. 
```


> Question 4.2: a) Now how many sub-10 UniqPats stats did you get? Is this an improvement over the earlier no-noise case with AvgLGain at 1? b) Describe what difference you observe in the weights of the no-noise and noise simulations. Why do you see this difference?
```
a) I observed 4 sub 10 patterns. I observed 4 Uniqpats=10, and 4 Uniqpats=8. 

b) The no-noise simulations were more consistent than the noise simulations, and always ended with 10 unique patterns. When we introduce noise, we see the performance dip and it starts scoring under 10. This could be because the noise is messing with the input signals, and interfering with the networks ability to form and maintain clean interpretations of signals. 
```

> Question 4.3: Describe the pattern of weights in qualitative terms for each of the two output units (e.g., left output has strong weights from the ?? input units, and weaker weights from the ?? input units).
```
The left output has strong input from the left two units and weak activation from the other two, and the right output has strong input from the right two units and weak activation from the other two. 
```

> Question 4.4: Why would a Hebbian-style learning mechanism, which increases weights for units that are active together at the same time, produce the pattern of weights you just observed? This should be simple qualitative answer, referring to the specific patterns of activity in the input and output of the Easy patterns.
```
In this case, Hebbian learning can produce the pattern of weights we observed fairly easily, as it just has to be extremely receptive to the correct neurons and ignore the incorrect neurons. Since we are associating an output to inputs by clamping them to their desired outputs, the network learns the associations fairly quickly by having them fire together, and wire together. 
```

> Question 4.5: Does the network ever solve the task? Run the network several times. Report the final SSE at the end of training for each run (hover on the last point in the Train Epoch Plot to see the value).
```
No, my networks never landed on a solution to the task. Instead, it tended to plateau around a SSE of 0.53.
```


> Question 4.6: Does the network ever learn to solve this "Impossible" problem? Report the final SSE values for your runs.
```
No it doesn't solve it. The SSE appears to be highly variable, showing jagged rising and falling, however it never lands on a solution to the problem. My network ended with an SSE of 0.589. 
```

> Question 4.7a: Provide a general characterization of how many epochs it took for your network to learn this impossible problem (e.g., slowest, fastest, rough average).
```
Some trials it would learn very quickly, with the last zero being after 16 epochs. Other trials it would learn much more slowly, with the last zero occurring as late as 330 epochs. The average in my trials appears to be around 160 epochs.
```

> Question 4.7b: Can you figure out how the hidden units have made the problem solvable, whereas it was impossible for a network without a hidden layer? Step through a few trials in a network after learning and report which hidden units are active for the four events, and also report the weights from these units to the output units. (note this will differ across network runs - just give one example).
```
The hidden units can act as 'intermediate processors' that enable the network to categorize input patterns in ways that support the correct output associations. On top of looking for the pattern of associations that maximizes performance on the task, now it can have neurons receptive to combinations of neurons and discriminate between those responses to arrive at the correct response.

My network arrrived at the following responses:
Input => Hidden => Output
1&3 => 2&4 => 1
2&4 => 2&4 => 1
1&2 => 3 => 2
3&4 => 3 => 2

```

> Skip family trees

> Question 4.10: Do the hidden units learn to represent the individual lines like they did in self_org? Why or why not? Explain in terms of how the learning rule is designed to adjust weights when minimizing error.
```
The hidden units do not specifically represent individual lines likey did in self_org. Instead,the network forms distributed representations across multiple neurons. Unlike the self_org example where neurons specialize in particular patterns, error-driven learning adjusts weights to reduce output error, encouraging each neuron to contribute to the correct result. This approach involves more neurons in representing each outcome, leading to less specialized representations.
```

> Question 4.11: Report what you see in the output in the test trials and over epochs of learning and runs. On average, does the network generalize its learning by reporting the correct combinations of lines for these novel patterns? Consider why this might be in terms of the internal hidden representations that were learned by the hidden layer in the earlier question.
```
No, the network does not generalize its learning well. This might be because the hidden layer's representations were created to do well only on the test data it was attempting to minimize error on, and not capture underlying patterns or 'useful' representations. We could say that our model has been overfitted, and does not have the ability to generalize past its training data.  
```


> Question 4.12: On average, does Hebbian learning in the hidden layer help the network perform better at generalizing to new items? Why or why not? Consider more generally how the combination of learning rules might be useful for the brain.
```
Yes, on average, Hebbian learning does help the network at generalizing better to new items. This is because Hebbian learning encourages the model to learn more generalizable representations of its inputs by encouraging the network to find shared features across different patterns. Error-driven learning can take this refined information and  adjust the weights based on the errors observed in training, refining the network's performance on the task. 
Combining these forms of learning could be very helpful in the brain, as the brain has to learn associations and organize information it encounters in the world, as well as optimize and discriminate between inputs as is done in error-driven learning. Together, they allow the brain to perform a range of tasks, and adapt to what is demanded by its environment. 
```

