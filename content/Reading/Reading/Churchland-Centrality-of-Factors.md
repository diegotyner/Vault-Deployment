---
created:
  - 09-10-2024 21:27
tags:
  - Churchland
  - Brain
  - BrainFunction
  - Entry
aliases:
  - Factors
Entry-For: _Research-Papers
topic: Using population level factors as a framework for neural inference
---


> [!important] Big Ideas
> Spiking neural networks can be described in terms of neuron-population level factors.
These factors provide insight into the networks behavior.


# 📗 -> The centrality of population-level factors to network computation is demonstrated by a versatile approach for training spiking networks
[Talk Link](https://neuroengineering.ucdavis.edu/events/neuroengineering-medicine-seminar-1)
- [Another talk link](https://kempnerinstitute.harvard.edu/events/mark-churchland-kss/)
[Paper Link](https://www.cell.com/neuron/pdf/S0896-6273(22)01080-7.pdf)


## 🎤 Vocab
Latent Factors - “Trends” observed in changes of firing rates in populations of neurons

Neuron’s Firing Rate - Not defined as one neuron, hard to determine. Instead, average spiking frequency of many self-similar neurons.

Rate-based units ←?→  Neurons 
## ❗ Information
Small summary

## ✒️ -> Scratch Notes
- Firing rates ← Latent Factors
- Assumption: networks employ rate-based units, and “firing rates, and latent factors derived from them, are a valid abstraction”
- Biological/Physiological mechanisms of factors are unknown. Only able to be derived. Statistically.
- Firing rate doesn’t make sense with low frequency firing (as is typical in cortex)
- Factors are reliable, and provide the best way to understand network function. Computation seemingly performed at level of factor interactions.
- Link between physiology and factors, two views:
    - Neurons primary, and factors summarize important aspects of spiking-neuron connectivity and activity
    - Factors primary, and neurons instantiate a function that creates factor-level dynamics.

## Analysis:
Goals:
- Design networks that embody common assumptions about factors, accord with basic properties of neural circuits, and display spiking patterns that are realistically variable
- Analyze and understand how such networks compute and ask when and whether common abstractions (firing rate/factors) are useful
Networks employ LIF neurons (spike at threshold activity)
Spikes impact post-synaptic membrane potentials after being filtered with two time constants, 5 and 100ms. Picked to give complexity, simply.

s(t) = time dependent vectors with filtered spike trains for all neurons and [both?] timescales. 2Nx1. (2N activities at 1 time)
J = synaptic weight matrix. Nx2N. (N neurons with 2N incoming connections) 
$J * s(t) = Js(t)$ - vector of post-synaptic inputs

Given two timescales??, and N neurons, s(t) contains 2N elements and J is of dimensions Nx2N (N neurons with 2N incoming connections). 

y(t) = Activity of factors over time. 
w is a matrix Px2N, where P is the number of factors.

Assuming that factors are formed out of linear sums of single-trial synaptically filtered spiking activity:

$y(t) = ws(t)$

Second assumption, if spiking reflects both factors (average spike-rate) and signals unrelated to factors (trial-to-trial variability), each neuron’s input must contain both the factors and a non-factor-related component.
These two inputs raise from two distinct connectivity components. 

$J_{fac}$ = component of connectivity necessary for generation of factors.
$J_{fac}s(t) = uy(t)$ - recurrent input each neuron receives via this connectivity component
u is an NxP matrix, specifying how N neurons are impacted by P factors. Entries of U selected randomly, each neuron reflects random combinations of factors.
![Factor Visualization](https://img.notionusercontent.com/s3/prod-files-secure%2Fde0c54ac-7eae-4be4-9d27-2893cec9f8fe%2F50a7cca3-05e4-433f-adc8-60d8ee7335e0%2FUntitled.png/size/w=380?exp=1726030083&sig=50ap85y7712OKfukoqGL8kgB9oz1xzHe9hjbEOK2Xk0)

$J = J_{fac} + J_0.$ $J_0$ is connections between neurons, irrelevant to factors but supports performance (or learning) of other computations. Pictured in black.
$J_{fac}s(t) = uy(t) = uws(t)$ , implying that $J_{fac}$ is low rank, rank = # factors. Adding $J_0$ means J is full rank, while containing a learned low-rank component.


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- [[Dynamical-Systems]]

