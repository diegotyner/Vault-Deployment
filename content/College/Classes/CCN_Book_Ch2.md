---
created:
  - " 10-01-2024 23:07"
tags:
  - Entry
Entry-For: PSC134-Textbook
topic: The Neuron
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> Chapter 2: The Neuron
## 🎤 Vocab


## ❗ Information
Small summary

## ✒️ -> Scratch Notes
Neurons are complex, but they can be simplified to their function and understood through that lens. The function of a neuron services:
**Detection** - Setting off an alarm when they decide that their pattern has been activated
**Threshold** - The level of activation needed to cause a signal, in the form of an **action potential** or **spike**


> [!hint] Origin of the word dendrite
> Most synapses are on dendrites, which are the large branching trees (the word “dendrite” is derived from the Greek “dendros,” meaning tree)


### Forms of input signal:
- Excitatory - Normal input (about 85%), through a channel called AMPA opened by glutamate
- Inhibitory - Other 15%, make the neuron less likely to fire. Input comes via GABA channels, driven by GABA
- Leak Inputs - Not technically input, but matter to the overall function. Slowly dissipate excitatory input

> **Net synaptic efficacy or weight**, which represents the total impact that a sending neuron activity signal can have on the receiving neuron, via its synaptic connection. The synaptic weight is one of the most important concepts in the entire field of computational cognitive neuroscience!

Other important receptors aside from excitatory AMPA and inhibitory GABA:
- NMDA, which is involved in learning and allows Calcium (Ca++) ions to flow
- mGluR, which is also involved in learning and also possibly active maintenance of information in working memory — these receptors do not pass ions, and instead affect complex chemical processes in the postsynaptic cell.
EPSP vs IPSP

### Definitions:
$$
\displaylines{ g_i = \text{the inhibtory conductance} \\
E_i = \text{inhibitory driving potential} \\
\Theta = \text{Action Potential Threshold} \\
V_m = \text{Membrane Potential} \\
g_e = \text{excitatory conductance} \\
E_e = \text{excitatory driving potential} \\

}
$$

**Rate Code** - An approximation of discrete spiking, that instead makes the output of a neuron $\in (0,1)$. This is thought to represent a small population of around 100 neurons that all respond to similar information.
Also argued in [[Churchland-Centrality-of-Factors]] that the rate code is a well-formed abstraction.  

Excitatory Current: $I_e = g_e (E_e - V_m)$
Inhibitory Current: $I_i = g_i (E_i - V_m)$
Leak Current: $I_t = g_t (E_t - V_m)$
$I_{net} = I_e + I_i + I_t$
$V_m(t) = V_m(t-1) + dt_{vm}I_{net}$


**Ohm's Law**: $I = GV$
Current = Conductance * Potential
I = G(E - V) is a simple addition onto Ohm's Law, factoring in concentration imbalances using the E value of driving force

**Net Input**: The input to a neuron is the weighted average of all its inputs
x_i = activity of a particular indexed neuron
w_i = synaptic weight of a particular indexed neuron
$$g_e(t) = \frac{1}{n} \sum_i x_i w_i$$

### Appendix Overview
In-depth topics related to neuron electrophysiology and input integration.
- *Neuron Electrophysiology*: Detailed description of how ion concentration gradients contribute to the electrical properties of neurons.
- *Net Input Detail*: Explanation of how net inputs are calculated across various input projections.
- *Math Derivations*: Derivation of the equilibrium membrane potential (Vm) using the update equation and gΘe.
- *Frequency-Current Curve*: Explanation of the XX1 function's approximation of discrete spiking (courtesy of Sergio Verduzco-Flores).
- *Sodium-Gated Potassium Channels for Adaptation (kNa Adapt)*: Insights into how sodium influx during spiking affects membrane potential recovery.
- *Bayesian Optimal Detector*: Discussion on how equilibrium membrane potential serves as a Bayesian optimal method for integrating neuronal inputs.



> 1) Big Picture: I found the information a helpful refresher of neuron biology, and it will definitely be helpful as we move through the course to have the important functional aspects of the neuron fresh in my mind. The math was a bit heavy in the chapter, but I felt like I could follow along skimming that aspect of it. 
> 
> 2) Specifics: It was interesting to hear the opinion of the authors that the high level overview of the neuron is enough to be aware of for understanding its function. I know a big current movement in neuroscience research is about accounting for the role of glia and specific neuronal cells in brain function, so I was surprised to hear this opinion. It's a little reassuring to hear, in all honestly, the low level biology of the neuron is very daunting. 


## 🔗 -> Related Word
- [[Neurons]]
- [[Neurotransmitters]]


