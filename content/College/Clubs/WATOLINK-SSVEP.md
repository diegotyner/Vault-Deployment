---
created:
  - " 11-11-2024 18:30"
tags:
  - ProjectAnalysis
aliases:
---
# 📗 -> WATOLINK SSVEP BCI (NTX22 Competition)
---
left off the videa at 6:50

## 1. Overview  
*Author(s)*: {{author_name(s)}}  
*Original Publication/Source*: [Link to the project](https://www.youtube.com/watch?v=lS-gE3sTRTs)

## 2. Project Summary
Briefly describe the project, its objectives, and its main outcomes.

### Objective
- The project aims to use the **SSVEP** or *Steady State Visually Evoked Potential* (which are brain responses from staring at visual stimuli)
	- 12hz stimuli -> 12hz response
- Use these to create a system of communication
	- Information transfer rate is one of the biggest bottlenecks (150 bits/min $\approx$ 9 words/min compared to 135 words/min for verbal speech)
### Key Achievements: 
  - {{achievement_1}}
  - {{achievement_2}}
### Domain: 
{{link domains (e.g., BCI, ML, robotics)}}

## 3. Methodology
Describe the methods and techniques used in the project.

The project uses the *SSVEP* to get responses, and uses a LLM to generate options. No need for a speller, when you can just speak through an AI lmao. It is effective though.
- *Experimental Setup*:
  - *Data Collection*: 
	  - Rigid experimental procedure, highly researched
	  - Sent into a csv with trial markers, clean and validate
  - *Processing Pipeline*: 
	  - Perform PCA across each of the channels
	  - Look at the spectogram of that, and treat it as a new channel
	![[PCA-Spectogram.png]]
	- Perform FFT on each channels response, and average across channels
  - *Algorithms/Models Used*: 
	1) BCI
	2) EEG Streaming layer
		1) Receiving EEG from board and sending to the next layer
	(once 250 samples are collected it will send to the next layer)
	3) Data processing and AI Layer
		1) Receive EEG data and send frequency predictions. 
		2) Also receives the UI dictionary
	4) User interface layer
		1) Displays the widgets, and sends data back to the Data processing layer 
- *Evaluation Metrics*: {{metrics_used}}

## 4. Key Insights and Innovations
*Highlight what stands out about the project and why it is impactful.*

- *Unique Approaches*: 
  - Create their own electrode mold/cap

| ![[CAD-Electrode-Mold.png]] | ![[IRL-Electrode-Mold.png]] |
| --------------------------- | -------------------------- |

  - {{unique_approach_2}}
- *Innovative Solutions*: {{brief explanation}}
- *Strengths*:
  - {{strength_1}}
  - {{strength_2}}

## 5. Challenges and Limitations
*Discuss the main challenges faced in the project and any limitations.*

- *Challenges*: 
  - A number of factors go in, ranging from:
	  - Display distance, stimuli size, color, frequency, ISA
	  - Length of trials, stimuli exposure, breaks
  - {{challenge_2}}: {{description}}
- *Limitations*: {{limitations}}

## 6. Results and Conclusions
*Summarize the results obtained and the conclusions drawn from the project.*

- *Results*:
  - {{result_1}}: {{brief description}}
  - {{result_2}}: {{brief description}}
- *Conclusions*: {{summary of the project's findings}}

## 7. Potential Improvements
*Identify areas where the project could be enhanced.*

- *Suggested Enhancements*: 
  - More research minimizing experimental fatigue
  - Better cap that minimizes noise, hightens **STN** (signal to noise)  ratio, and is reproducible
  - {{improvement_2}}: {{details}}

## 8. Takeaways for Future Projects
*List the key takeaways that could inform your own work.*

- *Lessons Learned*:
  - {{lesson_1}}
  - {{lesson_2}}
- *Applicable Techniques*: {{techniques you plan to adopt}}
- *Inspiration Points*: {{specific elements to explore further}}

## 9. Related References
*Provide additional resources or related work that may be helpful for further understanding.*
- [Reference 1]({{link}})
- [Reference 2]({{link}})

