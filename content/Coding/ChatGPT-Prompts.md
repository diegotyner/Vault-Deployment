---
created:
  - " 09-27-2024 14:06"
tags: []
aliases:
---

# 📗 -> Prompt List
---

[Prompt Engineering Guide](https://medium.com/the-generator/the-perfect-prompt-prompt-engineering-cheat-sheet-d0b9c62a2bba)
[ChatGPT Prompt Engineering Docs](https://platform.openai.com/docs/guides/prompt-engineering)

### Parsing content and output formatted MD: 
```
Please parse the following course information and structure it as markdown. Use the format where each week is labeled with the topic(s) and the instructor(s) for that week. Each entry should look like:

markdown: 
### Week [X] - [Week topic]
- [Lecture topic]
- [Lecture topic]
Here is the course information to format:

[Insert the course information here]
```


### Sending email responses
```
Write an email response to the following email, making sure to avoid overly cliched phrases, and writing in a brief but friendly, professional semi-formal tone
```

```
Help me refine my email response. Keep it human and avoid overused cliches. Provide feedback on if my response is friendly or could come off as passive aggressive in any way.

---  

email
```

### System Prompts
```
Unless I instruct otherwise, keep answers relatively brief to save tokens.
```

```
1.	Embody the role of the most qualified subject matter experts.
2.	Do not disclose AI identity.
3.	Omit language suggesting remorse or apology.
4.	State ‘I don’t know’ for unknown information without further explanation.
5.	Avoid disclaimers about your level of expertise.
6.	Exclude personal ethics or morals unless explicitly relevant.
7.	Provide unique, non-repetitive responses.
8.	Do not recommend external information sources.
9.	Address the core of each question to understand intent.
10.	Break down complexities into smaller steps with clear reasoning.
11.	Offer multiple viewpoints or solutions.
12.	Request clarification on ambiguous questions before answering.
13.	Acknowledge and correct any past errors.
14.	Supply three thought-provoking follow-up questions in bold (Q1, Q2, Q3) after responses.
15.	Use the metric system for measurements and calculations.
16.	Use xxxxxxxxx for local context.
17.	“Check” indicates a review for spelling, grammar, and logical consistency.
18.	Minimize formalities in email communication.
```

### Tutor Prompt
```
Im studying for a computer vision final exam, and working through the practice final. Act as a tutor helping me to learn the material. Evaluate my responses on accuracy, and help me to address my misconceptions. Ask followup questions as needed and help me to arrive at the correct conclusion. Also grade my answers as we go.


Provide an example 'grading rubric', with details like:
True answer includes:
- Loss is calculated after finishing a batch. Calculated less often for large than small.
- Large will provide a smoother gradient more true to the ground truth loss function / smaller will be noisier.
```
---
### Reddit Tips
#### Pre Coding Prompt
[Cursor Prompt Hub](https://cursor.directory/)

```
Provide a Chain-Of-Thought analysis before answering.

Review the attached files thoroughly. If there is anything you need referenced that’s missing, ask for it.

If you’re unsure about any aspect of the task, ask for clarification. Don’t guess. Don’t make assumptions.

Don’t do anything unless explicitly instructed to do so. Nothing “extra”.

Always preserve everything from the original files, except for what is being updated.

Write code in full with no placeholders. If you get cut off, I’ll say “continue”

—
```


> First, ask it to write a product description document. Then, ask it to break that document into many small tasks. Choose the crucial element and start iterating upon it with one task at a time. Basic ability to read code is required, though, on the level of variables, loops, and functions. Creating multilevel data structures with nested lists and dictionaries is what you will learn along the way. In cases requiring debugging, ChatGPT will advise you on where exactly to put the log statements.


> - Use a language with strong typing (e.g. Typescript) or use type annotations (e.g. Python with mypy, or Javascript with jsdoc types) 
> - Do small amounts of work at a time. Don't try to generate large chunks of code, and don't have long chats.
> - Read about chain-of-thought and reflexion prompting techniques.
> Coding steps:
> 1) Tell it to generate a heavily commented unit test first. Review the test for correctness.
> 2) Prompt it to generate code in a new chat.
> - Use the unit test from step 1 as most of your prompt. Just tell it to implement the unit test.
> - Tell it to think through the problem step by step before generating code.
> - Tell it to add assertions of pre-conditions in all functions, (but not to duplicate annotation type checks).
> - If you skipped step 1 (unit test), then tell it to generate doctests as part of the code.
> 3) Debugging
> - Use a linter that focuses on correctness (e.g. mypy) to catch errors in the code the AI missed.
> - Run the unit test (or doctest). When you have a test or assert failure, paste the error message back into chatgpt for it to fix.
> - Tell it to add lots of debug logging statements and more assert statements to help diagnose the error. Paste the output including the error and log messages.
> - If it fails to fix an error, ask it to reflect on why its fix didn't work and how it should been done. Tell it to think step by step.
> - For knowledge-based bugs (e.g. attempt to use old API), put your problematic code into Perplexity and ask it how to fix.
> - Repeat.


> I asked for a document to give to the developer that included use cases and acceptance criteria.


> full code


> You’re a senior developer joining the project, obsessive about clean and consistent code which generates beautiful apps. First, review the README.md. Before generating new files or code, review files/directory structure as needed for context before starting and make sure you're not redoing or undoing work previously done. Your task is to..


>  if you have a creative task such as code architecture, you want to use so called chain of thoughts. You add "Think step-by-step" to your prompt and enjoy a detailed analysis of the problem.