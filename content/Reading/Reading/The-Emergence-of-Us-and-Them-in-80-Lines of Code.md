---
tags:
  - Review
  - Entry
aliases: 
created:
  - " 04-14-2025 23:55"
Entry-For: _Research-Papers
topic: "The Emergence of “Us and Them” in 80 \rLines of Code: Modeling Group Genesis in \rHomogeneous Populations"
---

# The Emergence of “Us and Them” in 80 Lines of Code: Modeling Group Genesis in Homogeneous Populations

Link to Source: [Article PDF](https://scispace.com/pdf/the-emergence-of-us-and-them-in-80-lines-of-code-modeling-3qlxevzied.pdf) | [Sagepub Link](https://journals.sagepub.com/doi/10.1177/0956797614521816)
- March 3, 2014
---

1. **The Problem**
In the article we are reviewing, “The Emergence of “Us and Them” in 80
Lines of Code: Modeling Group Genesis in Homogeneous Populations”, we follow the authors in their agent based modeling scenario where they follow the interactions of simple agents that are placed in a prisoner’s dilemma with other agents, and allowed to modify their closeness to each other afterwards. Through this, the author’s analyze the emergent behaviors of the agents, showing that simple behaviors, namely reciprocity (I do to you what you do to me) and transitivity (I will hold the views of my friends) give rise to group formation, even in homogeneous populations.

The central question of the article is whether groups can form from homogenous groups, rather than the typical explanation that groups arise from heterogenous populations as a result from differences in characteristics. The author’s identify this explanation as being circular, as between group differences often arise from the division of the groups themselves. This circular explanation motivated the authors of the article to question whether groups could form out of a homogeneous population, contrary to the typical explanation for group formation. To explore this idea, the authors designed an agent based model to see if they could induce the emergent behavior of group formation in a homogeneous population, with a specific focus on reciprocity and transitivity. Agent based models were selected to explore their central question due to the models ability to support large scale simulations, and encourage emergent properties due to the scale at which they operate. Additionally, they allow easy exploration of the effects of modifying parameters which allows further exploration in the article. Examples of the further exploration facilitated includes: effects of group size, effects of reciprocity and transitivity levels, effects of biases in initial levels of trust, and more.

2. **Agent-Based Simulation**
The basic outline of the simulation the authors developed is as follows: agents are placed in a series of prisoner’s dilemma scenarios with each other, they are allowed to adjust their relationship to their opponent according to the results of their game, and then allowed to adjust their relationship to all other agents depending on their opponents perceptions of the other agents. The parameters the authors were able to manipulate here include: reciprocity (allow agents to learn from interactions from a given opponent, learning to trust or distrust them), transitivity (how much they should integrate the trust/distrust relations of their opponents), baseline trust (the trust that each agent has with each other agent to begin the simulation), and population size. 

Going into the implementation, the model is a four step scenario repeated as long as desired. In step 1, interacting agents are selected based on a relationship matrix, with a higher relationship value between two agents making them more likely to be chosen to interact. In step 2, the agents simulate a prisoner’s dilemma scenario and receive the payout associated with their actions in the simulation. In step 3, the agents simulate reciprocity, and adjust their relationship to each other according to the outcome of the simulation (maximize relationship if they cooperate, and minimize if the defect from one another). In step 4, they are given the chance to simulate transitivity if they cooperated. In this case, they adjust their relationship with other agents according to the relationships of the other person (similar to gossiping). 

3. **Main Results**
The three I am going to focus on are: robustness, changing transitivity and reciprocity, and trust on group formation.

- Robustness: When transitivity and reciprocity were both above one, and trust was not initialized to be extremely low, groups reliably emerged. This supports the author's central question of whether group formation was feasible in homogeneous populations.
- Transitivity and Reciprocity: When reciprocity was not present, agents were not able to adapt their relationships and no group formation was observed (average payoff of 0). Reciprocity alone led to agents creating pairs of relationships and cooperating between themselves, but group formation was not observed (average payoff of 0.24). When both reciprocity and transitivity were present, agents were able to form groups and average payoff increased to 0.47. This suggests the authors hypothesis that both transitivity and reciprocity were key to group formation.
- Trust: The authors modified this with a baseline level of trust on initialization, tied to parameter A. High levels of trust led to large commune-like groups, and low levels of trust led to low cooperation between players, and the inability to form stable groups.

Overall, the article provides strong evidence for the dynamics which could give rise to group formation in homogeneous populations and explores the parameters which could modify the success of emergent behaviors. 


4. **Discussion**
The most important points they make in the discussion are to reaffirm their modeling results, commenting on the robustness of group formation and the reproduction of their results in real-world homogenous populations, including hunter gatherers, graduate business students, and monk novitiates. Additionally, the authors propose future directions for research, highlighting the potential to investigate more nuanced scenarios, including multigroup scenarios, hierarchical group formation, expanding on reciprocity relationships, and integrating multi-agent interactions. Personally, I would be very interested to see how multigroup scenarios would affect the formation of groups, and between groups interactions. Intuitively, I would believe that this would further increase cooperation in the simulation, but it could be interesting to see how it would affect average payoff. 
