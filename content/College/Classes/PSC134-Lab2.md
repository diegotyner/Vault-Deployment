


> Question 2.1: Describe the effects on the rate of neural spiking of increasing GbarE to .4, and of decreasing it to .2, compared to the initial value of .3 (this is should have a simple answer).
```
As GbarE increases, the frequency of the neurons spikes increases. The frequency of spiking for the values tested is from highest spiking to lowest: .4 > .3 > .2
```

> Question 2.2: Is there a qualitative difference in the neural spiking when GbarE is decreased to .1, compared to the higher values -- what important aspect of the neuron's behavior does this reveal?
```
Yes there is, lowering GbarE to .1 seems to prevent the neuron from reaching threshold and spiking. This shows that in general, neuron needs sufficient excitatory stimulus to fire.
```

> Question 2.3: To 2 decimal places (e.g., 0.15), what value of GbarE puts the neuron just over threshold, such that it spikes at this value, but not at the next value below it?
```
GbarE = 0.13 is the lowest GbarE that produces spikes in the model.
```

> Question 2.4 (advanced): Using one of the equations for the equilibrium membrane potential from the Neuron chapter, compute the exact value of excitatory input conductance required to keep Vm in equilibrium at the spiking threshold. Show your math. This means rearranging the equation to have excitatory conductance on one side, then substituting in known values. (note that: Gl is a constant = .3; Ge is 1 when the input is on; inhibition is not present here and can be ignored) -- this should agree with your empirically determined value.
```

```
$$
\displaylines{I = g(E - V_m) \\
\text{At equilibrium: } I_{net}=0. \;\; V_m=0.5 \\
I_{net} = I_e + I_l \\
V_m = \sum_i^{e, i, l} \frac{g_j}{g_e + g_i + g_l}E_j \\
V_m = \frac{g_e}{g_e + g_l + g_i}E_e + \frac{g_l}{g_e + g_l + g_i}E_l = \frac{1}{1.3 + g_i}E_e + \frac{g_l}{g_e + g_l + g_i}E_l
}$$


> Question 2.5: What value of GbarL just prevents the neuron from being able to spike (in .1 increments) -- explain this result in terms of the tug-of-war model relative to the GbarE excitatory conductance.
```
At GbarL = 0.75 the simulated neuron no longer spikes. This result tells us that the current of voltage would balance out with the current of excitatory input entering the neuron at a voltage below threshold.
```

> Question 2.7: Compare the spike rates with rate coded activations by reporting the Act values just before cycle 160 (e.g., cycle 155) for GbarE = .2, .3, .4 with Spike = false, and the corresponding values in the Spike = true case for the same GbarE values. Hover the mouse over the Act line to get the exact value.
```
No Spike Act at 155:
- GbarE of .4 = 0.837 
- GbarE of .3 = 0.705
- GbarE of .2 = 0.301

Spike Act at 155: 
- GbarE of .4 = 0.794 
- GbarE of .3 = 0.632
- GbarE of .2 = 0.438
```

> Question 2.8: For each digit pattern, report the number of active units in the pattern where there is also a weight of 1 according to the 8 digit pattern shown in the r.Wt view in the Network. In other words, report the overlap between the digit input activity and the weight pattern.
```
There is an overlap of 17 units, the input pattern that the receiving neuron is receptive to overlaps completely with the pattern of 17 active units that corresponds to the 8 digit pattern.

0: 6 
1: 1 + 0 + 1 + 1 + 0 + 0 + 3 = 6 
2: 3 + 2 + 1 + 2 + 0 + 1 + 3 = 12
3: 3 + 2 + 0 + 2 + 1 + 2 + 3 = 13
4: 1 + 0 + 0 + 1 + 2 + 0 + 1 = 5
5: 2 + 1 + 1 + 3 + 1 + 2 + 3 = 13 
6: 2 + 0 + 1 + 2 + 2 + 2 + 3 = 12
7: 3 + 1 + 0 + 1 + 0 + 0 + 1 = 6
8: 3 + 2 + 2 + 3 + 2 + 2 + 3 = 17
9: 3 + 2 + 2 + 2 + 1 + 0 + 2 = 12
```

> Question 2.9: What happens to the pattern of receiving neuron activity over the different digits when you change GbarL to 1.8, 1.5, and 2.3 -- which input digits does it respond to for each case? In terms of the tug-of-war model between excitatory and inhibition & leak (i.e., GbarL = leak), why does changing leak have this effect (a simple one-sentence answer is sufficient)?
```
At 2 it is only receptive to 8
At 1.5: 2,3,5,6,8,9
At 1.8: Red 3?,5,8
At 2.3: Red 8

Changing leak has this effect because when you raise leak, it will be less receptive to everything, including its desired stimulus. When you lower leak, it will be overly receptive to everything, resulting in false positives as well. 
```

> Question 2.10: Why might it be beneficial for the neuron to have a lower level of leak (e.g., GbarL = 1.8 or 1.5) compared to the original default value, in terms of the overall information that this neuron can convey about the input patterns it is "seeing"?
```
It might be beneficial because it is 'wasting' less energy. If the neuron has too much leak, it might be wasteful and dispel some of the concetration gradient that it invested energy into maintaining. Additionally, it can also spread more information about things that seem similar to its signal, which receiving neurons factor into their decision. 
```