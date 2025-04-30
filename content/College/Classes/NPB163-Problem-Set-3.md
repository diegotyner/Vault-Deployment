


> Assume that you have a visual receptor with the following idealized center-surround receptive field (RF)

**1 -** What does the population response in the sensory brain area look like for each of the following signals when they are presented to the sensory epithelium one at a time? (Allow negative responses for now. Draw what each of the signals looks like. Also, at least initially, draw what the RF of a particular neuron looks like in the same spatial coordinates.)  
i. Homogeneous illumination with a brightness of 10 (arbitrary units)  
ii. An edge at location 0 with a brightness of 1 to the left of it and a brightness of 2 to the right of it
```
i - Response of zero. Excitation and inhibition cancel out
ii - 0 -1 -2 0 2 1 0
```

**2 -** 
i. What happens in regions of uniform brightness? In what way does this system contribute to the elimination of redundancy?  
ii. How can you tell the location of a stimulus from the population response? What kind of map exists in the sensory brain area?  
iii. Assume now that negative responses cannot be transmitted to the sensory brain area. (Any negative response would simply be transmitted as 0.) What do the population responses look like in this case? Can you spot any problems? What if you had another set of receptors (off-center cells) with receptive fields that have opposite polarity (inhibition in the center, excitation in the surround)
```
i. Uniform brightness has a response of zero. This eliminates redundant/uninformative areas with no changes
ii. These neurons are place coded and have their highest excitation at places with change. This is a 
iii. This would prevent the visual receptor from effectively transmitting information about large negative responses (dark spots, dark edges). Since they're place coded, these large signals would not be available to transmit properly. Spatiotopic map.
The off center cells would be able to transmit this information, and could fill this gap by providing excitatin for the large negative signals.
```

**3 -** Sensory systems exhibit considerable convergence and divergence of information as it is being passed on from one processing level to the next. Convergence of inputs allows multiple signals to reach a target neuron for comparison or integration, whereas divergent output allows the same signal to reach multiple targets. Explain how a sensory system could accomplish detection  
of weak signals and what information would be lost in the process! Can you think of two different ways how this could be accomplished?
```
One way could be spatial pooling, receive input from offset cells that all conerge onto a target cell, that sums them. This will make it sensitive to more weak signals, by integrating more widely.
Another way is temporal pooling. Sum signals across time, achieve a stronger signal.
Both strategies come at the cost of resolution, as they integrate along a larger range, they lose exact precision as to the originator of signals.
```

**4 -** Parallel processing
a. Can you provide an example of parallel pathways/channels in a sensory system?  
b. What are potential benefits of processing sensory information in a parallel fashion?
```
a. What/Where Ventral/Dorsal
Broadband/Color opponent cells
Each processes something different, with divergent parallel pathways. Can happen at high level (visual pathways) or low level sensory ones (ganglion cell receptive fields)

b. You can become sensitive to different information, specialize, minimize weaknesses/blindspots, integrate different modalities of information
```

**5 -** We have heard in the lecture that one can find cells in V1 that are disparity-tuned. Let us now consider how one could build disparity-tuned cells. Assume that we have two retinotopic maps,  
each of which receives only input from one particular eye
a. How would you construct a population of neurons that are tuned to zero disparity?
b. How would you construct a population of neurons that are tuned to a particular positive or negative disparity?  
c. What would be a possible way of constructing a “near”-tuned or “far”-tuned neuron?
```
a. Match up corresponding spatial locations, have them correspond too one neuron
b. Match them up with a given offset
c. Near tuned: have it be excited by neurons with small disparity
Far tuned: have it excited by neurons with a lage disparity
```



