---
created:
  - " 03-11-2026 16:28"
tags:
---


## Collaborators:
- Hannah Knab
- Federico Aprile
- Noah Michelson 


## Q1
> The link to the second notebook from the Week 4 lab/discussion section is here (and linked on Canvas): https://colab.research.google.com/drive/1DsirYiirCUjzVefDcKlomJ58vPWBGXqb?usp=sharing
> The notebook set up a two neuron network and asked you to draw a picture of the two neuron network showing the inputs, weights, and who is connected to whom. Draw that picture below.

![[Pasted image 20260311163840.png]]
## Q2
> The link to the third notebook from the Week 4 coding/discussion section is here (and linked on Canvas): https://colab.research.google.com/drive/1IBp9Hk_-Cx0h_2wdpNc8ZXswYqLV0mai?usp=sharing. The notebook set up a three neuron network.
> a) Draw a picture of the three neuron network set up by the code showing the inputs, weights, and who is connected to whom.

![[Pasted image 20260311163854.png]]

> b) How did you determine which weights would make the output go up if you changed them? Which weight had the biggest impact?

You can work backwards from the output and mark neurons by their influence on the output using a sort of "two negatives makes a positive" logic. For example, A is connected to neuron C with a positive weight, so by extension weights w1 and w2 both would have a downstream increasing effect if they were also positive. Using this same rule, we see that increasing weights w3 and w4 would both decrease the output of neuron C, as the connection between neurons B and C is negative. 

The weights having the biggest impacts on the outputs is determined by the combination of: 
- The strength of their own input (the weight doesnt matter if its never activated)
- Their own weights (if it is activated, their impact is affected by how strongly the message is communicated)
- The weights of downstream neurons (if the neuron they communicate to has an output weight of zero they won't end up affecting the output)

We found that weights w3 and w4 seemed to affect the networks output more, based on the magnitude of their inputs. 

## Q3
> 3) We’ve spent our time talking mostly about feedforward networks, where neurons are arranged in layers. Neurons in each layer talk to neurons in the next layer up but not to each other and not to neurons in previous layers. However, in the brain, there are many loops and reciprocal connections. If neuron A sends its output to neuron B, then neuron B often sends its output to neuron A. And if neuron A sends output to neuron B and neuron B sends output to neuron C, then neuron C often sends output to neuron A. Networks with loops are called recurrent networks. 
>    a) What sorts of tasks do you think a recurrent network could be good for?

A recurrent neural network is useful for tasks where the ordering of data sequentially is important. For example, they can be useful in tracking fluctuations in stocks, electrode data, simple text tasks, and many generative tasks. ​ If the input data to these tasks was processed all at once like a MLP would, lots of important relational data would be lost.

> b) To train a network, we want to change weights to improve some outcome. Recurrent networks are hard to train (and it is a mystery how the brain does it). Why do you think recurrent networks might be hard to train?

There are multiple reasons making basic RNNs difficult to train:
1) The​ vanishing / exploding gradient problem. Long term dependencies increase the chance of any given iteration making the gradient unusable for training distant neurons. 
2) Running time. Since they need to process data sequentially, it can be difficult to run them efficiently. They lose a lot of the parallelism benefits of other models (MLPs, transformers).

## Q4
> 4) Consider a Hopfield network with 3 neurons. The weights are w12 =−1, w13 = +1 and w23=-1. The biases are all 0. 
>    (a) Draw a picture of the network showing the 3 neurons and the connections with the weights.

![[Pasted image 20260311164130.png]]

> (b) Assume that the network starts in the state (0, 0, 1) meaning that the first two neurons have state 0 and the third neuron has state 1. You now choose to update the first neuron (by calculating the total input and using the threshold activation function). What is the new state of the network?

X1 update: (w12 • x2) + (w13 • x3) = (-1 • 0) + (1 • 1) = 1 
- y = 1 → output = 1 || x1’s new state is: 1 

New state of the network: (1, 0, 1)

> (c) Assume that the network starts in the state (1,0,1). Show that no neuron wants to change its state. You should consider what would happen if you tried to update each of the 3 neurons and show that each neuron’s state would remain the same.

Updating X1: (w12 • x2) + (w13 • x3) = (-1 • 0) + (1 • 1) = 1 
- y = 1 → output = 1 
	- X1 went from 1 → 1: Neuron’s Updated State: (1, O, 1) 

Updating X2: (w12 • x1) + (w23 • x3) = (-1 • 1) + (-1 • 1) = -2 
- y = -2 → output = 0 
	- X2 went from 0 → 0: Neuron’s Updated State: (1, 0, 1) 

Updating X3: (w13 • x1) + (w23 • x2) = (1 • 1) + (-1 • 0) = 1 
- y = 1 → output = 1 
	- X3 went from 1 → 1: Neuron’s Updated State: (1, 0, 1) 

As we can see, starting from (1,0,1), trying to update each of the neurons results in the same activation state as the original!
## Q5
> 5) The AI in radiology article you read in Week 5 is here (and linked on Canvas): https://www.worksinprogress.news/p/why-ai-isnt-replacing-radiologists
>    (a) Find something in the article that surprised you and briefly describe it.

The datasets used to train radiology models are lacking in data from cases involving women, children, and ethnic minorities, with most datasets not even using information regarding the gender or race of each case. This results in issues with representation and bias.

> (b) Find something that you disagreed with or that you thought was confusing and briefly describe that along with why you disagree or why you found it confusing.

Something confusing is why the models aren’t trained on hospital data that includes the ambiguous cases, images with odd angles, bad visibility, and other artifacts that the datasets currently being used for training are lacking. If the models are only being trained on perfect images, they won’t be able to accurately assess more organic hospital images, so they should be trained on more representative and realistic images.
## Q6
> 6) Think of a possible unexpected consequence of increasing use of AI in healthcare (either positive or negative) and briefly describe it.

One consequence of AI's growing presence in healthcare is patient distrust. For example, many primary care physicians have begun integrating AI, audio-based notetaking tools into their practice. Some patients may feel uneasy knowing that aspect of their care would be handled by or augmented by AI, possibly fearing that sensitive personal information may be misused/mishandled; or simply feeling that the human element of their care is being diminished in ways that compromise the quality of the patient-physician relationship.

## Q7
> 7) What’s your favorite metaphor for the brain? Why do you like it?

We thought a surprisingly comprehensive and pleasant metaphor is calling the brain a garden. A garden’s growth depends on the amount of care put into it, and just like a brain, there is maintenance involved like pruning old growth to make room for the new growth. Additionally just like how in a garden, bees pollinate flowers to allow for propagation and reproduction, which we compared to the brain in that neurotransmitters get released from the presynaptic vesicles to the synaptic junction to propagate information and strengthen connections.