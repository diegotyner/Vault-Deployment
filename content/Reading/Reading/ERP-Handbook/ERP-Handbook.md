---
aliases: []
created:
  - " 09-09-2024 20:02"
tags:
  - Collection
  - Resource
---
---
### Dataview:
```dataview
TABLE
  topic as "Topic",
  created as "Created"
FROM #Entry
WHERE Entry-For = this.file.name
SORT file.name 
```
---


# 📗 -> An Introduction to the Potential Event-Related Technique - Steven J. Luck


## ❗ ->  Information
The ERP handbook is downloaded in "OneDrive\\Documents\\College Files\\Textbooks", but it's also available for download online.
Released in 2014, many of the keys finding are still relevant, but it's age could be a problem nonetheless. He has actually written another book recently, aimed at a more experienced audience (I think, I haven't read it) (Applied Event-Related Potential Data Analysis (2022, LibreTexts), Steven J. Luck). 

## 📌 -> Themes
- What ideas does the collection as a whole raise?

## ✒️ -> Usage
- The book exists as a working introduction to ERP studies, rigorously describing analysis of data. What I want out of it is to understand neural EEG data so that I am prepared to join the Neurotech club in the coming year. 
- It will also be helpful for developing a better base in [[Data-Processing]] and cleaning. 


## Important Notes:
### Naming:
- Example peaks are P1, N1, P2, N2, P3, N170
- P and N represent positive or negative peaks, and the number either represents the ordering (the 2nd major peak) or the time (occurring after 170ms). 
	- P3 -> Positive, third peak occurring
	- N170 -> Negative, occurring 170ms after stimulus.

## 🔗 -> Important Links
- Do his [Virtual ERP Bootcamp](https://courses.erpinfo.org/courses/Intro-to-ERPs)
	- Or on his [website](https://erpinfo.org/virtual-boot-camp)


### Create pages below
---
[[ERP-1]]
[[ERP-2]]
