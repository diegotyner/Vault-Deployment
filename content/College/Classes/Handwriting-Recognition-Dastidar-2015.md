---
created:
  - " 11-11-2024 19:27"
tags:
  - ProjectAnalysis
aliases:
---
# 📗 -> Handwriting Recognition
---
Lowkey this paper is useless.
Seems like people implemented the easiest way to format letters and gave no thought to whether it would work or not, and edge cases

## 1. Overview  
*Author(s)*: Jayati Ghosh Dastidar, Surabhi Sarkar, Rick Punyadyuti Sinha, Kasturi Basu  
*Date of Publication*: 19 Jul 2015
*Original Publication/Source*: [Link to the project](https://paperswithcode.com/paper/handwriting-recognition)

## 2. Project Summary
>This paper describes the method to recognize offline handwritten characters. A robust algorithm for handwriting segmentation is described here with the help of which individual characters can be segmented from a selected word from a paragraph of handwritten text image which is given as input.

### Domain: 
[[ECS-174-Main|Computer Vision]]

## 3. Methodology
Describe the methods and techniques used in the project.

- *Experimental Setup*:
  - *Data Collection*: 
  - *Processing Pipeline*: 
![[Handwiring-Processing-Pipeline.png]]
#### Data Preprocessing and Image Extraction
Input images are cursive handwriting
Images are filtered to obtain the best representation for each word
- What the hell does this mean? Do they go over by hand and pick a word that 'looks good'??
RBG -> Grayscale
Grayscale -> Binary
Objects too small (<15 pixels) are removed
#### Line recognition
When the sum of an entire rows black pixels is zero (ie no writing on a row), consider it a line break
#### Letter Extraction
When the vertical sum of the row is zero, consider it a break
#### Letter identification
Compare it to a database of numbers and letters, and identify it as the one where the correlation coefficient is the highest


- *Evaluation Metrics*: 

## 4. Key Insights and Innovations
*Highlight what stands out about the project and why it is impactful.*

### - *Unique Approaches*: 
  {{unique_approach}}
### - *Innovative Solutions*: 
{{brief explanation}}
### - *Strengths*:
  - {{strength_1}}
  - {{strength_2}}

## 5. Challenges and Limitations
*Discuss the main challenges faced in the project and any limitations.*

### *Challenges*: 
  - {{challenge_1}}: {{description}}
  - {{challenge_2}}: {{description}}
### *Limitations*: 
{{limitations}}

## 6. Results and Conclusions
*Summarize the results obtained and the conclusions drawn from the project.*

### *Results*:
  - {{result_1}}: {{brief description}}
  - {{result_2}}: {{brief description}}
### *Conclusions*: 
- {{summary of the project's findings}}

## 7. Potential Improvements
*Identify areas where the project could be enhanced.*

- *Suggested Enhancements*: 
  - {{improvement_1}}: {{details}}
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

