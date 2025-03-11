---
created:
  - " 10-14-2024 16:35"
tags:
  - Classes
aliases:
---

# 📗 -> Lecture Date: Name
---
[Lecture Slide Link](https://docs.google.com/presentation/d/1IeF5L5ctAIwiGFlJrs5pTeIUUNcjc_Au7ilmGt-u9N4/edit#slide=id.g1e7652563e_1_114)

## 🎤 Vocab


## ❗ Unit and Larger Context
### One big chunk vs Array of Arrays:
![[Chunk-vs-ArrayofArrays.png | 600]]

One Big Chunk:
- Cons:
	- Need a lot of contiguous space

Array of Arrays:
- Cons:
	- A lot of space is allocated to not storing actual values. 
		- The space is reserved for array pointers. 
		- A 4x5x6 array uses 17% of space for pointers. (4 arrays pointing to 5 arrays of 6 ints)


### Structs:
Structs are like 1D arrays with properties being different sizes

| Field | Bytes Past Beginning of struct |
| ----- | ------------------------------ |
| x     | 0                              |
| y     | 4                              |
| s     | 5                              |
| name  | 7                              |
| d     | 17                             |
| f     | 25                             |
```
Typedef struct Struct_Type{
	Int x;
	Char y;
	Short s;
	Char name[10];
	Double d;
	Float f;
} Example Struct; 
```


### Ordering of Variables
##### Global Variables
- Stored in order of appearance, so the first global will have the lowest address
##### Arguments
- Stored in order of appearance, so the first argument will have the lowest address
##### Locals
- Stored in *reverse* order of appearance, so the least local will have the lowest address


## ✒️ -> Scratch Notes


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words
