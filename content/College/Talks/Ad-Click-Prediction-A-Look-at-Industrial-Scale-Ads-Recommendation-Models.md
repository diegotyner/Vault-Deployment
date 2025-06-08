---
created:
  - " 06-05-2025 16:03"
tags:
  - Entry
Entry-For: College-Talks
topic: Ad Click Prediction - A Look at Industrial-Scale Ads Recommendation Models
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# Ad Click Prediction - A Look at Industrial-Scale Ads Recommendation Models  
---

## 🎤 Vocab



## ❗ Information
[Link to description](https://statistics.sf.ucdavis.edu/events/seminar-060525-li)
#### Title:
Ad Click Prediction - A Look at Industrial-Scale Ads Recommendation Models  

#### Abstract: 
This talk offers a practical overview of lessons learned from training and deploying click-through rate (CTR) prediction models at industrial scale. We will explore the key trade-offs between model accuracy, cost, and system complexity. The presentation will outline proven techniques for optimizing performance throughout the machine learning lifecycle, including architectural choices, effective training strategies, and approaches for addressing challenges such as reproducibility and generalization across diverse UI treatments.

#### Bio: 
Xiaoyue Li (Software Engineer, Google)
Xiaoyue is a software engineer at Google, working on the development of search ads prediction models. She is an alumna of the Statistics Department at UC Davis (class of 2020). This talk explores the challenges of ad click prediction at industrial scale, highlighting the unique challenges of the problem and showcasing a selection of practical solutions being developed by her team.
- xiaoyuei[at]google.com
## ✒️ -> Scratch Notes
##### preface:
based on a paper, look up talk title
- everything presented is published work

### problem
- click prediction og goole
- based on search result clicks

- p(click | query)
	- also include ad, context, even user potentially
given a fully formed hypothetical serp scenario, what is he probability that the user would click on this add if the scenario showed?
expected revenue = click thru rate (CTR) * cost per click (CPC)
- important for charging correctly
- charged based on actual clicks (no click no charge)

simple seeming problem? no...

balance multiple sonsors for example, estimate values of clicked 'winners' and 'runner-ups'. Auction system?
- pctr?
	- PCTR inference?

everything is impacting the price

### Non stationarity
CTR changes over time
- weekends, holdays, special events, weather, ...
> much more of an optimization/bandit problem vs an AI challenge
> many traditional statistical/ML methods fall apprt
- (invalid) "assume we are drawing events from a fixed distribution..."

#### scalable online ML
perform sequential pass of dataset (progressive validation)
- makes test set very closely match training set
- eval metric are computed on examples before they are trained on
serving models continue to train as new data arrives
- allows for faster adpattion to shifting CTR distribution

### accuracy vs cost
gains must be weighed against cost (to long term research velocity)
- training cost: nadwidth, throughput, latency
- deployment cost: compute, latency

some techniques aren't worth the cost (e.g. ensemblingmany models). .often a technique can be "tuned" toward efficiency or accuracy

themes of effective techniques:
- finding right objectives
- amortizing cost (shampoo optiimizer, distillation)
- looking at overall system bottlenecks and adding costt where it hurts least

> serving time (latency) is not necesarily equal to training time 
> - lots of techniques to speed up training (massive batching, ...)
> - limitations at serving (queries per second, etc.)

reducing cost:
- efficient model structures
- data sampling (reduction?)
larger networks and advanicng ml techniques tend to increase BOTH cost and quality

### efficiency
#### efficiency: bottleneck layers tuned with AutoML
model consists of fully connected resnet layers
approximat full matmul with bottleneck from mn to mk+kn (k<<n and k<<m)

neural architecture search trains all candidate simultaneously in a single iteration, selecting a specific architecture by activating part of the super-network with masking
RL reward function incorporates model of computation cost allowing for trading offf accuracy and efficiency

weight sharing based NAS with cost constraints?


#### efficiency: down sampling training data
generally see diminishing returns as we increase our dataset. given that we do a signle seuentiial pass we can either:
1. limit time range
2. down sample examples within time range
   successful methods
   - reducing non-click examples
   - reducing examples with low logistic loss
   - reducing examples unlikely to have been seen by user

#### efficiency nd accuracy: Shampoo
second order optimization with shampo improved accuracy significantly
able to avoid prohibitive cost by amortizing the most expensive computation (computing large matrix inverses) every n-steps

other tricks:
- partitioning large layers and running shampoo on smaller blocks
- learning rate grafting was used to match per layer step sizes when replacing adagrad with shampoo
> paper: distributed shampoo

### acc
#### acc: loss engineering
generally optimizes for logistic loss, calibrated prediction
also important the the set of shown ads be correctly allocated (wrt clicks)
- empirically, PerQueryAUC is a metric well correlated with business metrics
	- unknown why? tried and true
- One effective approximatrion: ranknet loss (s_i and s_j: logit scores)
	- $\sum_{clicks} \sum_{nonclicks} log(sigmoid(s_i - s_j))$

#### acc: distrillation
student model uses the teacher prediction in an auxilliary loss function (in addition to click label)
two pass online distillation
- more expensive teacher model that records its predictions
- teaacher is also a one-pass sequential training model
teacher is larger, mor eexpensive, and trains on more data
teacher is trained once, cost amortized when repeatedly training students

#### acc: dcn
smart?

> image from dcn v2: imrpvoed eep and cross network and practical lessons for web scale learning to rank systems

### generalization - UI treatments
which ui to show?
where to place?
what about other adds?
\what is the runners up ads pCTR?
- important in pricing and eligigbility decisions in auction
- even if that runner up ad is very bad
- or that runner up scenario is to not show ads

#### gen - factorization model
#### gen - biasconstraint

### irreproducibility
repeating procedure leads to multiple outcomes/models. various sources of stochasticity

they block rollout if it is too irreproducible. development cycle hindered, especially things like teacher models

### reproducibility
ensembles

smoothed activation (smooth relu, smelu)

### summary
non stationairy -> scalable online ml frameworks
cost vs accuracy rtadeoff -> efficient matmul, autoML tuning, loss engineer, DCN, distillation,etc.
generalization to uncommon data -> factorization model, bias constraints
reproducibility -> smooth activation

##### references
pic taking

## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```



## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words

