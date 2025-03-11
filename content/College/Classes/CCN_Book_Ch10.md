---
created:
  - " 12-02-2024 16:14"
tags:
  - Entry
Entry-For: PSC134-Textbook
topic: Language
---

---
### Dataview
```dataview
LIST
FROM #Collection
WHERE file.name = this.Entry-For
```
---

# 📗 -> Insert entry name
## 🎤 Vocab



## ❗ Information
Small summary



## ✒️ -> Scratch Notes
##### Difficulty of Language
Language is a higher order task, involving almost every part of the brain
- Perception and attnetion
- Motor control (speech, writing, etc.). Intact cerebellum needed for fluency
- Learning and memory
- Executive function

##### Features of Language
- Symbols
- Syntax
- Temporal extent and complexity - It can detail things that range over a long time frame, *War and Peace*
- Generativity - Language can be infinite
- Culture - Language perceived through cultural lens

Monkeys have *mirror neurons* that encode the actions performed by others, and can help in understanding what others are trying to communicate.

**Latent Semantic Analysis (LSA) Model** - Can encode word meaning in terms of the statistics of word co-occurrence

#### Biology of Language
![[Biology-of-Language.png|400]]
When damaged, their respective aphasia causes:
- Broca's Aphasia: Impaired syntax but intact semantics
- Wernicke's Aphasia: Impaired semantics but intact syntax
> Temporal cortex for semantics, frontal cortex for syntax.

Attempting to say "The dog needs to go out so I will take him for a walk"
**Wernicke's**: "You know that smoodle pinkered and that I want to get him round and take care of him like you want before”
- Receptive aphasia, deficit in comprehension and meaning
**Broca's**: "dog...walk". Requires a large amount of effort.
- Expressive aphasia, comprehension typically intact. Trouble understanding more syntactically complex sentences

#### Articulation
![[Biology-of-Vocal-Tract.png]]
##### Phonology Vocab
- **Vowels** occur with unobstructed airflow and differ in the location of the tongue and lips
- **Consonants** involve the blockage of airflow. Variety of locations and a variety of different manners
- **Fricatives** are a friction like obstructive of sound

![[IPA-Vowels.png|500]]
![[IPA-Consonants.png|500]]


#### Latent Semantics
> Semantics distributed through a wide swatch of the brain, and it is fundamentally embodied and grounded in the sensory-motor primitives that we first acquire in life
> 
> However, there is also increasing evidence that the anterior tip or “pole” of the temporal lobe plays a particularly important role in representing semantic information, perhaps most importantly for more abstract words that lack a strong sensory or motor correlate. One theory is that this area acts as a central “hub” for coordinating the otherwise distributed semantic information

How do we represent more abstract words? Theorized that it is in reference to similar words. Analyzed through an *LSA* model.
- [LSA Website](http://lsa.colorado.edu)
- Records the statistics of how often words co-occur but this isn't enough, as direct synonyms don't occur together often.
- Uses the [[Dimensionality-Reduction]] technique Singular Value Decomposition (SVD), which is similar to PCA, and Hebbian self-organization
	- Extracts the strongest groupings of words co-occurring together
	- Synonyms will co-occur with the same sets of words as their synonyms, and even thought they are not grouped directly together the statistical grouping will pull them together
	- The drawback is that no clearly interpretable components emerge, like the 'oriented edges' in V1

#### Sound Mappings
English is wildly variable in the phoneme corresponding to a written word. Need a lot of context to understand what sound a section "should" make.
- Short vs Long *i* in "mind" / "mint"
- "*ghoti*" = "fish" thought experiment
	- "gh" in ought
	- "o" in women
	- "ti" in nation

#### Ambiguity
Language is ambiguous, and our minds quickly settle on a sensical interpretation despite the ways that it could potentially be interpreted
1) "Time flies like an arrow" vs "Fruit flies like a banana"
2) "The slippers were found by the nosy dog" vs "The slippers were found by the sleeping dog"

##### Rohde Model and Sentence Gestalt (SG)
An role based interpretation of language
> These include the roles: agent, experiencer, goal, instrument, patient, source, theme, beneficiary, companion, location, author, possession, subtype, property, if, because, while, and although where we quickly parse sentences because of the rolest

These roles allow us to settle on more likely interpretations of sentences. 
> Active semantic: The schoolgirl stirred the kool-aid with a spoon. (kool-aid can only be the patient, not the agent of this sentence)
> 
> Word ambiguity: The busdriver threw the ball in the park., The teacher threw the ball in the living room. (ball is ambiguous, but semantically, busdriver throws balls in park, while teacher throws balls in living room)


## 🧪 -> Examples
> 1) Big picture: general reaction
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```
Big Picture)  
This chapter felt very understandable to me, I've been exposed to it a little bit through linguistics classes but still I enjoyed going more into the psychological aspects of it. The focus on modeling linguistic phenomenons was a lot more interesting me than just being superficially exposed to it, and after this I'm excited to dive into the math of how the LSA model works. Dimensionality reduction is one my favorite topics. 
```

> 2) Specifics: specific reaction to one aspect of the reading
> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?
```
Specifics)   
One of the things I like most about my psychology classes is shedding light on how complicated some of the processes I take for granted are. I was very happy to be mae aware of the challenges surrounding visual categorization, and super excited again hearing about the issues surrounding language. I hadn't considered how deep the rules of phonology go, how ambiguous syntax is, and how our brain can cut through the ambiguity to land on the most probable interpretation. Super cool stuff!  
```




## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- [[Language]]
- [[Frontal-Lobe]]
- [[Temporal-Lobe]]

