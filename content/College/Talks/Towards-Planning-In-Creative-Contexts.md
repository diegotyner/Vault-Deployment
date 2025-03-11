---
created:
  - " 03-03-2025 15:35"
tags:
  - Entry
Entry-For: College-Talks
topic: LLM Talk
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# Insert entry name
---
[Linguistics/Statistics Seminar: Alexander Spangher | UC Davis Department of Statistics](https://statistics.sf.ucdavis.edu/events/linguistics-statistics-seminar-030325-spangher)


## 🎤 Vocab



## ❗ Information
**Title:** Towards Planning in Creative Contexts

**Speaker: Alexander Spangher** (PhD Candidate, University of Southern California)

**Abstract:** Recent modeling innovations that teach large language models (LLMs) how to plan — or break down and solve complex problems into multiple steps — have allowed LLMs to achieve impressive results in domains like mathematical problem-solving and coding. However, tasks in such domains are often characterized by large training datasets and well-defined rewards. Many human-centered tasks, especially creative tasks, occur in contexts where goals and rewards are not as clearly defined and datasets are limited: thus, we lack the means necessary to train models to plan in such settings. In this talk, I will outline a research agenda that can enable us to make progress. I will show three pillars: (1) observing plans: how long-range text modeling can help us make inferences about past human actions based on state-observations (a process known to cognitive psychologists as "emulation, based on end-state observation"); (2) improving plans: how these inferences can help us benchmark LLMs in creative tasks and how hierarchical modeling can help us learn novel planning strategies; and (3) executing plans: how classifier-free guidance, an inference-time technique, can be utilized to help LLMs adhere to complex plans. I will demonstrate these processes in the domain of journalism, with specific focus on the task of helping journalists find sources to support their writing processes.



## ✒️ -> Scratch Notes

We 'dig deep' into information every day
- Wechoose our own information seeking pathways, take multiple steps to digest information
	- Reading a paper, jumping around, asking questions, etc.

### Journalism
Half of the US is a news desert, no local newspapers

*Sourcing* - Journalists information seeking process
- 30% of a journalists time spent
- Biggest discriminator between good and bad journalists

EX of a journalist investigating a story of an elementary school teaching climate change
- How are teacher teaching?
- How do people feel?
- How are they learning?
- Who is opposing?
Parallel and sequential decisions, complex planning


**Emulation Learning**
- Looking at a final state, making a strong inference about the unobserved actions that led to it
- Hopper, 2008
Overlap with *means-end analysis, backtracking, and regression analysis*

Can we train emulation of news articles?

Talk structure
1. Is it possible to learn from final states?
2. Can we use inferred actions to improve model planning?
3. How can we incorporate plans in larger processes?

Creative Planning: The intersection of NLP, statistics, and linguistics

#### Part 1 - Inferring Actions
RQ1: Is it possible?
RQ2: Is there a pattern?

Insights:
1) *Critical coverage* uses more sources
2) *Critical coverage* uses more labor intensive sources
Critical coverage is a keyword that will be defined later

Are they used predictably?
- Associative Predictability?
- Source Selection Model?
Do previous sources predict future sources?

##### Test 1
Ablation Probe - Remove sentences, see how that affects things.
- Ask, is this article missing a source?
	- Train classifier on data either missing source, or missing non-source 
##### Test 2
NewsEdits Probe - A news revision dataset and novel document-level reasoning challenge


**Bayesian Wake-Sleep?** - Part of his ongoing work


#### Part 2 - Improve the Plan
RQ1: Can AI plan?
RQ2: Can we improve planning?

Result:
LLMs are less creative than humans

RQ2:
- Measuring the PCA reduction of LLM source queries vs humans
	- VERY different explorations of space

Answers to questions:
1) Apparently no
2) 


#### Part 3 - Execute the plan
RQ: How can we enforce greater plan following?
- go from ideal sources, intergrate them in downstream processes


Unstructing an LLM to follow a large plan
1) A large prompt, multiple part
However, the more parts, the more likely the LLM to get lost


Classifier Free Guidance in Language Modeling
- The probability of generating a certain next token given the prompt, MINUS the probability of generating it with no prompt
- Twice as costly, but removing noise and forcing to focus on prompt

Negatively Conditioned Distribution
- Have a downweight prompt, don't want that prompt to be used

Can use the NCD to force model to focus on only one part at a time

#### Future:
Go further than emulation/imitation to emulation/apprenticeship and emulation/actualization

"Actionably resouce in linear clasification"
"Search engine traffic to IRA web..."



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

