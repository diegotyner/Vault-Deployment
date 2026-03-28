---
tags:
  - Review
  - Entry
aliases:
created:
  - " 03-01-2026 00:57"
Entry-For: _Research-Papers
topic: Auto labeling flourescent microscopy images with DINO
---

# Cell-DINO-Self-Supervised-Image-Based-Embeddings-For-Fluorescent-Microscopy

Link to Source: [link](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1013828)

---

### Quick Summary:
- Methodology: Authors use a retrained DINO to label images at scale
- Findings: The approach was highly successful
### Takeaway:
- What is the relevance to our use case?
- What do they do that we should emulate?

---

### Vocab:

### Scratch Notes:
#### Abstract
The authors aimed to quantify cellular morphology computationally. Many algorithms exist already, the authors introduce a retrained DINOv2 (Cell-DINO) as a champion.
- Benefits especially apparent in "low annotation regimes"
- Also has the benefit of supporting the study of unknown biological variation, making it useful for biological discovery

Cell-DINO is an adapted DINOv2. Uses:
- Human Protein Atlas (HPA) dataset
- (they dont mension it here but also the Cell Painting Gallery? (CPG) )
Better than other self-sup strategies like MAE and SimCLR
#### Intro
Uses of cellular phenotype microscopy (various):
- Subcellular protein localization
- Mitochondrial phenotypes
- Cell cycle stages
- Chemical and genetic perturbations


#### Results

##### Cell-DINO encodes diverse biological properties of cells

##### Cell-DINO vs supervised ViT
##### Cell-DINO vs highly tuned models

##### Cell-Dino vs alternative self-supervised strategies

##### Cell-DINO vs other pre-trained models

##### Cell-DINO reduces the dependency on manual annotations

##### Cell-DINO enables predictions in image-based perturbation experiments

##### Cell-DINO excels at image-based profiling of cellular morphology

##### Cell-DINO finds meaningful local features

##### Cell-DINO embeddings encode technical variation

#### Discussion

#### Methods
##### datasets 

##### Cell-DINO algorithm
Centrally the same as DINOv2
- Adapt it to work with:
	- Different numbers of channels?
	- Preprocess pixel data according to best practices

DINOv2:
- Teacher/Student w same arch
1) Receive image and output a feature vector
2) Passed to a projection network that classifies feature vectors to a logit vector of 65,536 values
3) Student weights updated with cross entropy loss of output teacher
4) Teacher updated with EMA of student network

Adaptations for Cell-DINO:
- Adaptations to channel number and image content?
- Number of channels of the ViT networks adjusted independently for each dataset to 4 and 5 channels in the HPA and CPG respectively
- Used cross-validation with a subset of 5000 FoV images from HPA to test different hyperparameters / augmentations
- Linear classifier trained on resulting features

Augmentations:
- Not useful: blurring, solarization, greyscale
- Useful: rescaling intensity of protein channel (HPA), dropping content of a random channel by zeroing out all pixels, replacing color jitter with random brightness and contrast changes to each channel
	- Inspired by previously study


##### ViT
- Evaluation protocol
- Computational resources












## ❓-> Questions during reading


## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```
