---
created:
  - " 11-26-2024 13:19"
tags:
  - Project
aliases:
---


---
## Dataview:
```dataview
list from [[]] and !outgoing([[]])
```
---





## 🧾 Project Description
### Blurt
Fairly simple, scrapped it together in 2-3 hours using heavy chat gpt help. I mostly just wanted to have something done so that I could catch up on lectures 💀

### Official


## 🧲 Published
### Deployment:
- https://colab.research.google.com/drive/1bUi4DJf2GXM-QmD2gpVog4ZgEG8vj1Js#scrollTo=bGbuCxA5Ff4M
### GitHub:
- 

## 🎯 Objective



## 📂 Project Logs 
### Prompt Scratch:
#### Used:
```
def create_prompt(transcript):
    system_prompt = """You are a concise note-taking assistant helping a student quickly understand the core content of a missed lecture. Your goal is to create clear, actionable notes that capture the essential information, making it easy for a student to catch up quickly. Focus on:

    1. Capturing the main lecture narrative
    2. Highlighting the most important concepts and their practical significance
    3. Extracting key technical details
    4. Identifying critical points that would be important for exams or assignments
    5. Creating notes that are easy to scan and understand at a glance"""

    user_prompt = f"""Analyze the lecture transcript and create student-friendly, quick-review notes:
---
{transcript}
---

Create the following markdown summary:

# Lecture Summary: [Precise Lecture Title]

## 🚀 Quick Takeaway
- One-sentence core message of the lecture
- Why this lecture matters for the course

## 📌 Key Concepts
### Main Ideas
- Fundamental concepts covered
- Critical technical points
- Most important theoretical frameworks

### Important Connections
- How new concepts relate to previous lectures
- Practical implications of the discussed topics

## 🧠 Must-Know Details
- Crucial definitions
- Key formulas or technical specifics
- Critical nuances that are easy to miss

## ⚡ Exam Prep Highlights
- Likely exam-relevant information
- Potential quiz or test topics
- Challenging concepts to pay extra attention to

## 🔍 Practical Insights
- Real-world applications
- How to apply the lecture's concepts
- Potential project or assignment connections

## 📝 Quick Study Checklist
### Things to Review
- Top 3-5 most important takeaways
- Concepts that need further personal study
- Recommended additional resources

### Action Items
- Specific follow-up tasks
- Suggested practice or review activities
- Key skills to develop

#lecture/notes #quick/review"""

    return system_prompt, user_prompt
```

#### Graveyard:
```
def create_prompt2(transcript):
  system_prompt = """You are an efficient academic summary generator focused on rapid, high-impact lecture comprehension. Your goal is to distill each lecture into its most essential, actionable knowledge in a format designed for quick review and catch-up.

  Core Summary Strategy:
  - Extract maximum signal, minimize noise
  - Prioritize learning velocity over exhaustive detail
  - Focus on immediately useful, exam-relevant information"""

  user_prompt = f"""Lecture Transcript:
---
{transcript}
---

Rapidly generate a laser-focused lecture summary:

1. **Fast Overview**: 1-2 sentence core lecture essence
2. **Key Takeaways**: 3-5 critical points that would appear on an exam
3. **Quick Definitions**: Highlight 2-3 essential terms/concepts
4. **Rapid Actionables**: List any immediate study tasks or recommended resources

Format:
# Quick Lecture Insights: [Concise Title]

Optimize for speed of understanding and retention.
"""

  return system_prompt, user_prompt
```
```
def create_prompt3(transcript):
  system_prompt = """You are an efficient academic summary generator creating Obsidian-ready markdown notes. Your goal is to distill each lecture into its most essential, actionable knowledge in a markdown format optimized for personal knowledge management and quick review."""

  user_prompt = f"""Lecture Transcript:
---
{transcript}
---

# Lecture Summary: [Lecture Title]

## �요 Overview
- Concise 2-3 sentence high-level lecture summary capturing the core essence

## 🔑 Key Topics
### Major Topics
- Primary topic 1
  - Subtopic 1.1
  - Subtopic 1.2
- Primary topic 2
  - Subtopic 2.1
  - Subtopic 2.2

## 📘 Key Definitions
- **Term 1**: Precise definition
- **Term 2**: Contextual explanation

## 💡 Insights and Examples
- Key insight 1
- Key insight 2
- Notable example or case study

## 📋 Action Items
### Learning Objectives
- Objective 1
- Objective 2

### Assigned Tasks
- Reading assignment
- Exercise or project
- Additional resources to explore

#lecture/summary #academic/notes"""
  return (system_prompt, user_prompt)
```
```
def create_prompt(transcript):
    system_prompt = """You are an efficient academic summary generator creating Obsidian-ready markdown notes. Your goal is to distill each lecture into its most essential, actionable knowledge in a markdown format optimized for personal knowledge management and quick review. Follow these guidelines:
    
    1. **Overview**: Start with a high-level summary of the lecture in 2-3 sentences.
    2. **Key Topics**: List major topics covered as bullet points, as well as subtopics mentioned.
    3. **Definitions**: Include key definitions and concepts discussed.
    4. **Insights and Examples**: Highlight any key insights or cases mentioned.
    5. **Action Items**: Create learning objectives from the lecture, and note any tasks, readings, learning, or exercises assigned."""

    user_prompt = f"""Here's the transcript:
---
{transcript}
---
Create the Markdown output as follows:
# Lecture Summary: [Lecture Title]

## Overview
- Concise 2-3 sentence high-level lecture summary capturing the core essence

## Key Topics
### Major Topics
- Primary topic 1
  - Subtopic 1.1
  - Subtopic 1.2
- Primary topic 2
  - Subtopic 2.1
  - Subtopic 2.2

## Key Definitions
- **Term 1**: Precise definition
- **Term 2**: Contextual explanation

## Insights and Examples
- Key insight 1
- Key insight 2
- Notable example or case study

## Action Items
### Learning Objectives
- Objective 1
- Objective 2

### Assigned Tasks
- Reading assignment
- Exercise or project
- Additional resources to explore

#lecture/summary #academic/notes
"""


    return system_prompt, user_prompt
```



## 🎟 Features
### Existing


### Todo



## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words

