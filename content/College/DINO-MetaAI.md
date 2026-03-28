---
created:
  - " 03-02-2026 19:19"
tags:
---



## DINOv2 Specifically

Meta A released the self-supervised DINOv2, a 'foundational model for computer vision'
### Broad specs:
- Family: Pretrained Visual transformers
- Training: Self-supervised, Distillation
- Size: 1 Billion Params
	- Smaller models exist: 21M, 86M, 300M, 1100M
- Input: Image
- Output: Embeddings / Visual Features
	- A tensor:
		- Patch size of 14x14
			- This means a 224x224 image gets divided into a 16x6 grid of 14x14 patches. Each patch gets its own embedding, helps to encode localization
		- Embedding dimensions ranging from 384-1536 depending on size of model
		- For a 224x224 image on small model: `[16][16][384]`
	- Also a CLS token as well
		- CLS token useful for whole image classification, one flat vector embedding 

### Using outputs:
##### Embeddings
- Embeddings can be used as inputs to smaller models:
	- Semantic segmentation
	- Depth estimation
- Embeddings can be frozen
	- Dramatically simplifies training, DINO embeddings generated once, speeds up smaller model training loop
	- Allows smaller computers to train, because they don't have to continuously run the DINO model

##### Attention Heads
![[White-Box-Transformers-Emergent-Segmentation.png|400]]
- Unrelated cool visual of ViT attention heads

Attention heads encode some higher level information of similarity

Embeddings also encode some degree of 'whats in this region, in the context of the whole image'

Can be used as well: If one attention head successfuly seperates a target from the background, these attention maps can be used as inputs to a smaller model as well


### Model Architecture
##### Visual Transformer


### Training
##### Model Distillation
Transfering knowledge from a large trained model into a smaller model
- Better results than training smaller models directly
A smaller model attempts to match generations (embeddings in this case) of larger model
- Minimize difference
Teacher frozen, student continuously running

##### Self Supervised Learning
> Self-supervised learning (SSL) is a subset of unsupervised learning that trains models on unlabeled data by automatically generating "pseudo-labels" from the data's own structure

Why use unsupervised learning? *Can use uncurated data*
- There is *far more unlabeled data* than labeled data, smart training methods allow models to take advantage of this scale difference
- Supervised learning can be brittle, if we train model on labeled animals, they might not learn any information but things about animals. For a foundational model, its imperative that it has general knowledge
- Better pixel level understanding

DINO approach:
1) The teacher and the student are fundamentally the same model, just the teacher is: "an older, momentum-averaged version of the student"
2) Labels come from cropping: 
	- Teacher gets the global view and produces the 'target embeddings'
	- Student gets the multiple cropped views (a corner of an image, the center etc) and is trained to produce the same embeddings as the teacher
		- Make sure the ear of a cat and the tail of cat produce the same output as the teacher, who is labeling a full cat

### Data Source




### Resources
[yt vid 1 - DINOv2 from Meta AI - Finally a Foundational Model in Computer Vision?](https://www.youtube.com/watch?v=csEgtSh7jV4)
[yt vid 2 - DINOv2 Explained: Visual Model Insights & Comprehensive Code Guide](https://www.youtube.com/watch?v=Pa2yTy48JA8)

[blog - DINOv2 - Steps by steps explanations - Picsellia](https://www.picsellia.com/post/dinov2-steps-by-steps-explanations-picsellia#data-source)
[blog - DINOv2: Self-supervised Learning Model Explained](https://encord.com/blog/dinov2-self-supervised-learning-explained/)
[blog - DINOv2: A Complete Guide to Self-Supervised Learning and Vision Transformers](https://medium.com/data-science-in-your-pocket/dinov2-a-complete-guide-to-self-supervised-learning-and-vision-transformers-d5c1fb75d93f)

[yt/blog writeup - Mashaan blog: Inside the DINOv2 Architecture](https://mashaan14.github.io/YouTube-channel/self_supervised_learning/2025_05_12_DINOv2)


