---
created:
  - " 05-18-2025 16:56"
tags:
---

Stage 4: Text classification and generation with RNN model
(Dataset, Report Template)

This stage aims to help students get familiar with the recurrent neural network (RNN) model, and try to use the model to classify and generate text data.

4-1: Download the two text datasets provided by the instructor, and take a look at the text content.

4-2: Write your own RNN models in the provided code template on text classification.

4-3: Train a RNN model with the text classification dataset, and apply it to classify the testing set. Generate the learning curves and report the evaluation results.

4-4: Train a RNN model with the text generation dataset, and use the trained model to generate a story starting with three starting words. Compare the generation result with the training data to evaluate its correctness, and report the results.

4-5: Try to change the RNN with LSTM and GRU units, respectively. You can also change other architecture settings that you think will improve the learning results. Re-do steps 4-2 to 4-4, and report the results.

4-6: Write a report about your experimental process and results based on the provided report template (5 pages at the maximum).

4-7: (Optional): If you have GPUs supporting CUDA programming, you can also try to run the RNN models with your GPU instead.


### Summary of deliverables:
- Train a RNN model with classification, generate learning curve and evaluation results
- Train RNN model with text generation dataset, and use the model to generate a story starting with three words. Compare generation with training data, and report results
- Change RNN to LSTM and GRU

### Steps:
#### Classification
- Split data: 
	- Train/Test
	- Pos/Neg

#### Generation
- Dataset contains 1622 short jokes
- Train RNN model to complete jokes
	- Specifically we want it to go what did the... -> “what did the bartender say to the jumper cables? You better not try to start anything"


[[Project-4-Dump-Attempt-5]]
[[Project-4-Dump-Attempt-6]]