---
created:
  - " 11-09-2025 14:50"
tags:
---

[Meeting notes](https://docs.google.com/document/d/1FotF4v2uz7d5tEswFhhaTspzNMvxAB6Lr5jgL_UT9LU/edit?tab=t.0)
[Similar github](https://github.com/neuro-ml/resnet_cnn_mri_adni/tree/master)
[CNN Im Preprocessing](https://github.com/Narra552244/CNN-Image-Preprocessing-and-Classification/blob/main/CNN%20Image%20preprocessing.ipynb)
[DL Driven Tumor MRI](https://www.nature.com/articles/s41598-025-13591-2?fromPaywallRec=false)
[ResNet50 Transfer Learning](https://www.kaggle.com/code/kutaykutlu/resnet50-transfer-learning-cifar-10-beginner)


MRI Alzheimers:
- [Optimizing ResNet50 performance using stochastic gradient descent on MRI images for Alzheimer’s disease classification](https://www.sciencedirect.com/science/article/pii/S2666521225000225?ref=pdf_download&fr=RR-2&rr=99d33535bb0832bf)
	- Mainly using ResNet50 and retraining to apply to MRI alzheimers, and testing influence of different learning rates
	- Uses MRi scans from the ADNI, with four labels
	- Very good performance, 97.66 test acc
	- Data prep: normalization, augmentation, feature extraction, data splitting
		- "images undergo preprocessing to ensure they are prepared, augmented, resized, standardized, and suitable for accurate analysis by the models."
- [A fine-tuned convolutional neural network model for accurate Alzheimer’s disease classification](https://www.nature.com/articles/s41598-025-86635-2)
	- "Use of transfer learning for MRI-based Alzheimer’s detection: we utilized three pre-trained deep CNNs—AlexNet, GoogLeNet, and MobileNetV2"
	- 2 datasets: 5000 img kaggle data set and 382 MRI img OASIS dataset
		- Classes imbalenced, so augmentations used (rotation)
		- Im not sure how serious it is, but they do CRAZY augmentation (23->460 in one class)
		- THEN it seems like they split on the augmented dataset, not the original data. Wouldn't this be a massive data leakage? (testing the same brain, but at different angles effectively)
- [Optimizing Pretrained ResNet Models for Alzheimer’s Disease Detection in MRI Images](https://ieeexplore.ieee.org/document/10636832)
	- Same thing, uses ADNI MRI to classify 4 class alzheimers
	- Retrains ResNets:50/101/152.
	- "The models were uniformly trained across 10 epochs with a cross-entropy loss function, a batch size of 16, and a transfer learning rate of 0.0001. During fine-tuning, we systematically froze ten different layers of the model from the top down to enhance performance, adjusting the learning rate to 0.00001 with callbacks for better monitoring"
		- First round of transfer learning, then a fine tuning round with freezing model weights
	- Results are suspiciously good thought, 99.4. Grain of salt?
- [Using a ResNet-18 Network to Detect Features of Alzheimer’s Disease on Functional Magnetic Resonance Imaging: A Failed Replication.](https://pmc.ncbi.nlm.nih.gov/articles/PMC9139912/pdf/diagnostics-12-01094.pdf)
	- Take down of another paper, showing how data leakage in brain hold out vs slice hold out train/test splitting can inflate test accuracy


