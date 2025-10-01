---
created:
  - " 09-30-2025 13:41"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  09/30/25: ECS140A-L2
---
[Lecture Slide Link](https://canvas.ucdavis.edu/courses/1010932/pages/lecture-schedule)
[Go slides](https://canvas.ucdavis.edu/courses/1010932/pages/lecture-schedule)
## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
#### Revised Grammar
Establishing a "precedence cascade" to reduce ambiguity in our $1+2*3=?$ example (is it 7 or 9?). 
- Now, it is always 7.
Can also introduce a new rule to enforce ordering for associativity (solve from left)

#### Extended BNF (EBNF)
Adding short hands to simplify productions
- repetition, optional, grouping
##### Repetition:
```
# Before
number ::= <digit> | <number> <digit>

# After
<number> ::= >digit> {<digit>}
```
##### Optional
```
# Before
<if-stmt> ::= if <cond> then <stmt>  
			| if <cond> then <stmt> else <stmt>  
# After
<if-stmt> ::= if <cond> then <stmt> [else <stmt>]
```
##### Grouping
```
# Before
<expr> ::= <expr> + <expr> | <expr> - <expr> | <num>
# After
<expr> ::= <expr> (+ | -) <expr> | <num>
```
##### Conversions BNF -> EBNF
Recursions
```
<A> ::= <A> a | <B> 
	=> <A> ::= <B> { a }
```
Common string to factor out
```
<A> ::= a <B> | a 
	=> <A> ::= a [<B>]  
	
<A> ::= a <B> | a <C> 
	=> <A> ::= a (<B> | <C>)
```
##### Conversions EBNF -> BNF
Options
```
<A> ::= a [<B>] <C> 
	=> <A> ::= a <C> | a <B> <C>
```

Repetition: { }  
```
<A> ::= a { <B1> <B2> <Bn> } <C>
	=> <A> ::= a <B> <C>
		<B> ::= <B> <B1> <B2> <Bn> | empty
```

Grouping
```
<A> ::= a (<B> | <C>) <D>
	=> <A> ::= a <B> <D> | a <C> <D>
```


---

### Go
##### Declarations and scope
Declaration - Associates a name with a program entity (e.x. funcs or vars)
Scope -  Part of the code where a use of the declared name refers to that declaration

#### Syntax
Every go program must belong to a package? boilerplate needed: `package main`

Importing:
`import { "fmt" }` - "format", used for logging `fmt.Println("hello")`

##### Declarations
Full Declaration: `var name {type | = expression}`
- Can be used for global or local
- either type or value, type can be inferred

Short declaration: `name := expression`
- Only used for local vars

Can include declarations in if statements. 
- They are only able to be referenced in their if/else blocks
```
if x := f(); x == 0 {
	fmt.Println(x)
}
```



## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```




## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words
