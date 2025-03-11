---
tags:
  - Entry
Entry-For: _Research-Papers
topic: Review on Recall and Retention through EEG and fMRI
created:
  - 11-15-2024 21:21
---
# A Review on understanding Brain, and Memory Retention and Recall Processes using EEG and fMRI techniques: 

Link to Source: [link](https://arxiv.org/pdf/1905.02136)
- April 2019
---

### Quick Summary:
Methodology:  
- This article was a literature review of memory retention and recall processes. It seemed to focus more on encoding and retention than recall, although there might have been a useful nugget here and there. 
- The article did seem to have dubious quality though, a bunch of typos and some small eyebrow raising worthy errors. I would be suspicious of it. It seems to have not been strongly peer reviewed.
### Takeaway:
- Again found that for recall purposes, alpha and theta band dynamics are going to be big. Appears that on recall theta power is increased.
- We are most interested in the EEG components/effects related to recall. Recording a witness at encoding is a funny idea though.
- If motivated, take a look at the literature review section below and see if you can spin a use for any of the articles I highlighted as interesting to look into

---

### Scratch Notes:
#### Abstract
Memories are thought to be encoded at the synaptic levels between neurons in the cortex.
It is generally classified into Long-Term Memory (LTM) and Short-Term Memory (STM). In this paper, STM and WM are used interchangeably which is not standard practice. 

There are three major processes involved in memory research:
1) Encoding, memories being formed in the brain. (trying to memorize a one-time passcode (OTP))
2) Retention, what do you do after you encode a memory to remember it (were you focused after encoding the OTP, or did you get distracted? Did you hear other numbers that confounded you? The retention interval is also highly variable.)
3) Recall, retrieving memories from the brain (could you remember the OTP correctly?)
	- LTM and STM

![[Brain-Regions-Associated-Memory.png]]
- I would be suspicious of this table, but it's a good primer. Fact check before seriously using though.

#### II: Literature Review
The authors blabber about a bunch of articles (it almost seems like they had a citation quota (I promise I'm not being mean, they basically just go "I read this article and it did this" without even discussing the results for half of them. It's actually crazy.)). 
I highlighted a few of the more relevant papers to our use case.
- Babiloni et al [5](https://www.sciencedirect.com/science/article/pii/S105381190300764X?casa_token=sRasVrmSD3kAAAAA:bMmnIwD-bzWGr87AG2_maNm_hGrc_LBlIgckTGLIOH1iMcrg1qaxYa0aQHlOlqx44rDPRvfWnQ) had a task where subjects shown a 2D visual-spatial sample and had to memorize. Observations were recorded related with the changes in fronto-parietal theta and alpha rhythms. 
	- Potentially interesting to read?
- Jongsma et al [6](https://www.sciencedirect.com/science/article/pii/S0167876011003047?casa_token=yk3PORRUpqoAAAAA:sVV_f8nh1wcKmfLMQ3cHNntpLQgexNsi0Dzi2bTCJsBeqVQ9AMkQzLuNVxcCRPYFWGg9wBP1DQ) had a sound related digit recall task. Found a strong relationship between the P300 amplitude and memory work. Also explored the effects of repeated testing (*this could explore the effects of over rehearsal on witnesses*)
- He mentioned the “EEG alpha and theta oscillations reflect cognitive and memory performance: a review and analysis" [article](https://www.notion.so/dhruvsangamwar/EEG-alpha-and-theta-oscillations-reflect-cognitive-and-memory-performance-a-review-and-analysis-ae1bcd738d3249ecbaa5141482d287d2), a surprising amount of good information there
- w
- Eunho Noh et al. [26](https://www.sciencedirect.com/science/article/pii/S1053811913009646?casa_token=Dffg53h0txIAAAAA:hhUzmBsblJtkQVrX5yidxcfGZIqpRLGNH-zvsPCAupEfc4KzOz7M5cVBCcZ5ZAgdQcMjF2uWTw). A classifier attempting to predict whether participants studied an item (car or bird) before and predict their response. Really cool and definitely something that we should look over before EEG processing. Lot of good tips for EEG hygeine

#### III: Discussion
Some interesting tables that you can look at if interesting detailing their summaries of findings from the reviewed papers, but very little of interest for our recall EEG purposes.

They highlighted these concerns of EEG though:
- As it records scalp activity, 'shallow' PSPs have a larger influence on EEG signals. Deep dendrites might have very little influence
- Since EEGs are summed potentials, there must be both: a *synchronous* and *large* quantity of firing neurons to have a significant effect on recordings

#### IV: Summary and Recommendations
This section is all 1 sentence assertions. No point in summarizing since their so brief already, so I'll just be copying down relevant ones here.
Authors said this and didn't really expand, worth looking into:
> ERP component (P300) is closely related to memory performance like recalling of information from the memory. 

>  Memory recall is successfully differentiated at left temporal lobe through EEG gamma band and parietal and frontal brain regions through EEG theta band. 
>  
> EEG low frequency band at parietal and frontal regions and high frequency at temporal region show successful memory recall.
> 
> The correct memory information retrieval, working and episodic memory are significantly influenced by the cerebral cortex in the temporal, frontal and parietal lobes.
> 
> 
