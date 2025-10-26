---
created:
  - " 10-16-2025 13:44"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  10/16/25: ECS140A-L7
---
[Lecture Slide Link](https://canvas.ucdavis.edu/courses/1010932/files/28818172?wrap=1)

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
##### User defined funcs
```
(defun funname (v1 v2 ... vn) ;; formals
	(body1) ;; just s-exprs
	...
	(bodym)
)
---
(defun sum (x y) (+ x y))
```

##### Bools
Can evaluate using:
`({eval} {x ...}`
- `not, and, or`
- ` =, /=, <, >, <=, >=`

##### if
`(if b1 e1 e2)`
- if b1 true, execute e1, else e2

##### cond
```
(cond (b1 e11 e12 ... e1m )  
	...  
	(bn en1 en2 ... enm))
```
First evaluate b1  
– If b1 is true, evaluate e11, e12,... return the value of e1m  
– If b1 is NIL, move on to b2  
– If all b1 through bn are NIL, return NIL

##### let
A control block section of code with local vars
`let` and `let*`
```
(let ((a 3))  
	(let* ((a 4) (b a))  
		(+ a b)))
// -> 8
---
(let* ((w (+ 3 4))  
	(x (* w 3)))  
		x)
// -> 21
```



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
