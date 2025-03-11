---
created:
  - " 11-10-2024 23:54"
tags:
  - Method
---

---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```
---

# 📗 -> An Organizer for Learning About React
## 🎤 Vocab
**Prop Drilling** - Passing a component or data down through nested components 


## ❗ Information
Small summary


## ✒️ -> Usage

### Prop Drilling In React
#### The Problem
The process of passing data from a parent component down to nested child components through props
Effects:
- Increased complexity
- Boilerplate
- Clutter
- Component coupling, and difficulty in refactoring
- Performance overhead, each component needs to unnecessarily re-render
#### Overcoming Prop Drilling
- *Context API* - This API allows you to share data across the component tree without passing through each level of the hierarchy
- *State Management Libraries* - Help centralize and manage state, reducing need for prop drilling
	- Redux 
	- MobX
- *Higher-Order Components (HOCs)* - HOCs are functions that accept a component as input, and return a new component with additional props or functionality. 
- *Render Props* - A technique for sharing code between React components, using a prop whose value is a function


## 🧪-> Example
- Define examples where it can be used



## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words

