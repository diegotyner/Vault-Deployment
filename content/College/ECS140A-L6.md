---
created:
  - " 10-14-2025 13:57"
tags:
  - Classes/Lecture
aliases:
---
	
# 📗 ->  10/14/25: ECS140A-L6
---
[Lecture Slide Link](https://canvas.ucdavis.edu/courses/1010932/files/28818172?wrap=1)

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
### Lisp
- Functional prog lang
- Originally intended for AI apps
- Stands for "*LIS*t *P*rocessesing"
- Many variants
	- MacLisp
	- Scheme
	- Franz Lisp
	- Common LISP
- We use Common LISP (CLISP)

### Outline
- Basic list operations (car, cdr, cons , list)
- User-defined functions (defun)
- Predicates (atom, null, equal, etc.)
- Basic Lisp constructs
	- if
	- cond
	- let and let*
	- quote, eval, funcall, apply
- Lambda functions
- High-order functions (mapcar, mapc, maplist)
- Closures

#### s-expressions
Everything is a symbolic expression
- Atoms - not viewed as having parts
	- Numbers, symbols
- Lists - constructed from atoms and lists
	- Empty list: `nil` or `()`
	- Constructed lists: `(* 2 3)`, `(1 (a 2) 3)`
Computation performed through evaluation

- Numbers evaluate to themselves
- Symbols evaluate to last bound value
- Lists: first function, rest args to that function, evaluates to resulting value of function
- Specific rules for special forms like `setq`, `quote`, etc.

##### Declaration - setq
One way to assign value to symbol:
- `(setq x 5)` - Assigns value of 5 to x
##### Quote
Special function that takes one argument, which is not evaluated
Can be used when we want to stop lisp from evaluating something
```
(quote (a b c)) -> // (A B C)
'(ab b c) -> (A B C) 
```
##### List Ops
car - Returns first element (head) of a list
cdr - returns the remaining elements (tail) of a list
> In order to use, list passed in needs to be quote. Otherwise, fails

cons - returns the list obtained by taking the second argument and sticking the first on in front of it

## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the content were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the content raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```




## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words
