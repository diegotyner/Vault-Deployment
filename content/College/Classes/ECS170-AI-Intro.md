---
created:
  - " 05-27-2025 11:39"
tags:
---

[[ECS170-Final-Prep]]

## Agents
- Class intro
- Agents

### AI Intro
- [[ECS170-L1]]

AI - Machines simulating aspects of intelligence
4 approaches:
1) Thinking Humanly
2) Acting Humanly
3) Thinking Rationally
4) Acting Rationally

#### Quick summary of metrics:
*Thinking Approach* - Concerned with the thought process and reasoning that brings about decisions
*Acting Approach* - Concerned with the behavior of AI
*Humanly* - Measure success as approximating or emulating human performance
*Rationality* - Measure against an ideal performance measure, called rationality
##### Thinking Humanly
Cognitive modeling of AI. Develop a theory of cognition and implement it computationally
BUT
- Requires *real understanding* of human mind 
##### Acting Humanly
"Make machines do things that require intelligence in humans"
- The Turing test for example
BUT
- Not all behavior requires intelligence
##### Thinking Rationally
Aristotle's version of intelligence. Doing the right thing given it's information.
Define logical thought process (FOL ex.)
BUT
- Not easy to convert the world into formal logical form, especially with uncertainty
- Hard to generalize to complex problems in practice, e.g. with hundreds of facts
##### Acting Rationally
DOING the right or useful thing as to achieve the best outcome
Advantages:
- More general than thinking rationally, as correct inference is just one of several mechanisms for achieving rationality
- More amenable to scientific development than the approaches based on human behavior or thought
#### ChatGPT
How does it work?
 - Large-Scale Self-Supervised Pretraining 
	 1) Obtain large text data corpus
	 2) Train a giant transformer using unsupervised or self-supervised pretraining tasks
		 - GPT is pretrained with next token prediction
 - Fine-tuning 
	 - Supervised Instruction-based Finetuning 
	 - Reinforcement Learning from Human Feedback ([[RLHF]]) 
	 1) For GPT, it is finetuned to go from predicting text to following instructions:
	    - [Multitask prompted training enables zero-shot task generalization](https://arxiv.org/abs/2110.08207)
		- [Fintetuned LLMs are zero-shot learners](https://arxiv.org/abs/2109.01652)
 - Inference with Prompts 
	 - Template Prompt 
	 - In-Context Learning
		 - Few-shot: In addition to the task description, the model sees a few examples of the task. No gradient updates are performed
##### Issues
- Hallucinations
- Lacks complex and rigorous reasoning
- How should it behave and who decides?
- Are LLMs the best path to AI?
### Agents
- [[ECS170-L2]]

Topics:
- What is an agent?
- What is a rational agent?
- How to build a rational agent?
	- PEAS of Task Environments
	- Seven Properties of Task Environments
	- Five Agent Programs


*Agent* - Anything that can be viewed as perceiving its *environment* through *sensors* and acting upon that environment through *actuators*

##### Definitions for agents
*Percept* -  the agent’s perceptual inputs at a particular timestamp 
*Percept Sequence* -  a vector P, the complete history of everything the agent has ever perceived. 
*Action Set* - $A$ 
*Agent Function* - $f:P\to A$
*Agent Program* - a program that implements an agent function 
*Architecture* - the computing device with physical sensors and actuators that the program can run on 
Agent = architecture + agent program which implements the agent function
##### Rational Agents
*Rational Agent* - Doing the right or useful thing so as to achieve the best outcome
*Performance Measure* - An objective criterion for success of an agent's action given the percept sequence
Defining rationality, dependent on:
- Agent's prior knowledge
- Actions an agent can perform
- Agent's sequence to data
- Performance measure defining success
i.e. - "A rational agent maximizes its performance measure, given all of it's knowledge"

##### Specifying Agents
*Task environment* - Problem specification for which the agent is a solution
*PEAS* - How to specify (describe the task environment). Helps to define the problem for designers to assess if rational agents are appropriate.
- *P*erformance measurement
- *E*nvironment description
- *A*ctuators (to take actions)
- *S*ensors (to receive sensory input)

##### Seven Properties of Task Environments
1. *States*: fully, partially, or not osbervable
2. *Agency*: single or multiple agents
3. *Successor States*: deterministic, non-deterministic, or stochastic
4. *Agent decisions*: episodic or sequential. 
	   Episodic=decisions are one off, does not depend on other decisions
	   Sequential=current decision could influence future decisions
5. *Environment*: Static or dynamic (while agent decides)
6. *State of the environment and action of the agent over time*: discrete or continuous
7. *Knowledge of environment*: known or unknown to the agent
![[Seven-Properties-of-Task-Environments.png]]
##### Five Agent Programs
*Agent Program*: Maps from percepts to actions, $\text {action} = f(\text{percept sequence})$
Types:
1) Simple reflex agent - Select actions based on the current percept, ignoring the rest of the percept history
2) Model-based reflex agent - 
3) Goal-based reflex agent
4) Utility-based agent
5) Learning-based agent