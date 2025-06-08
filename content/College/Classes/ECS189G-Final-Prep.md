

### 1.
1) Parameter initialization for optimization results
	- Yes, this clearly matters
2) Adam with mini-batch always better than vanilla GD?
	- No, always will be pathologies.
3) Gradient vanishing/exploding does not exist with other deep models introduced in the course
	- Yes duh. Easy example is resnet fixing deep CNN gradient problem.
4) SGC operator, does it learn graph data representations like classic convolution in CNN?
5) Similar to GCN and GAT, graphbert feeds the whole graph to the graph transformer encoder and learns representations of all nodes simultaneuously
6) "suspernded animation/oversmoothing" in deep GCN model. Caused by gradient vanishing/exploding?
	- More too mixed representations right?

### 2. 
1) Given the objective function of GANs as a minimax game, rederive it with detailed steps and explain meanings of any notations used during derivation
2) 2 parter about G and D:
	1) Describe how to train GAn model based on the above min-max game optimization objective function
	2) If we can train a perfect generator with identical images, what will the performance of the discriminator be?
		- Should be 50%, or whatever the split of images being shown is (which should be 50%). 0.5
3) Using ReLU has been problematic. Leaky ReLU proposed, answer 3 following questions:
	1) What is the potential disadvantages of vanilla ReLU on learning? 
		- Gradient for very small X is always zero, difficult to learn from if stuck too low. The "dead neuron" problem.
	2) Draw plot of Leaky Relu on $x\in [-1,1]$
	3) Analyze advantage of Leaky-ReLu over vanilla ReLU in learning GAN models with sparse gradients
4) Training an RNN with minibatch, you realize that data in the train set is structured positive reviews then negative reviews. Do you need to shuffly?
	- absolutely yes
5) Training a transformer model for english -> french translation with a single head attention. Model performance not stable, and friend suggest multi-head to stabilize model performance. Follow advice?
6) Training a GAT model for making a friend recommender social media, you use a 4-layer GAt and performance seems okay but not great. A person recommends to build a GAT with 20-layers and it will learn better recommendations. Follow advice or not?

### 3.
Fill out the Convolution Table dimension and parameters tables

### 4.
The RNN loss function can be derived to be:
$$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial h_T} \cdot \frac{\partial h_T}{\partial h_t}\cdot \frac{\partial h_t}{\partial w}$$
1) Derive the detailed representation of $\frac{\partial h_T}{\partial h_t}$ with $w$ and the gradient of the sigmoid activation function for all neurons between $h_T \text{ and } h_t$
2) For neurons at different positions in the RNN, they will be affected by the gradient problem different. Analyze the impact for neuron $t'_{th}$ where $t'$ is very close to T, and for neuron $t''_{th}$ where $t''$ is close to 1 and far from T
3) Assuming the RNN only suffers from the gradient VANISHING problem, you could potentially tune the learning rate of individual neurons to mitigate the impact of vanishing problem. How could you design a learning rate tuning strategy for neurons at different positions to combat with the gradient vanishing problem?
4) LSTM cell state architecture proposed, compare the above formula with the one talked about earlier and analuze why the LSTM can handle the gradient problem better than conventional RNN models

### 5. 
Transformer math table
Complete blank entries of score, score rescale, softmax, final representation

### 6. Graph bert
We have a large dataset of users friendship connections and users offline check in records at restaurants.
Represent the dataset as a heterogenuous information network (HIN)

1) To recommend a restaurant, we need to learn embedding vectors for both the user and restaurant.
   Describe how graph-bert samples the corresponding subgraphs
   (Hint: assume the subgraph size to be k + 1, including the target node and other k nodes denoting its learning context, and we have calculate the page rank based closeness matrix $S \in R^{|V| \times |V|}$ already.)
2) Graph-bert also extracts a set of embedding vectors based on nodes positional information, one of which is the WL code based positional embedding. In the graph below, assign nodes according to the Weisefeiler-Lehman algorithm
3) Propose a score function to rate embedding quality of recommendations?
4) Analyze the given objective log function, what will the impacts be for two users: one very active with lots of records another one inactive with few
5) Do you have better ways to define graph bert loss function given the above problem? Write them down, and explain their improvement