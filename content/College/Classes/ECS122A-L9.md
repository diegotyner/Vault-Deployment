---
created:
  - " 11-05-2024 20:43"
tags:
  - Classes
aliases:
---

# 📗 -> 11/5: 
---

## 🎤 Vocab


## ❗ Unit and Larger Context
Missed a lot of lecture because of voting... so patriotic...




## ✒️ -> Scratch Notes

### Recursive Solution Code
$Opt(n) = max\{P[x] + Opt(n-x)\}, x\in [1..n]$
$Foo(n) = max\{P[x] + Foo(n-x)\}, x\in [1..n]$
```
int foo(int n) {
  best_rev = -inf
  
  if (n==1) return P[1];
  else {
    for (x=1 to n) {
      rev = P[x] + foo(n-x)
	  if (best_rev < rev) {
	    best_rev = rev  
	  }
    }
  }
  return best_rev
}
```



Step 1: Create a recursive solution
Step 2: Memoize
Step 3: Base Case

```
Opt(5) =>
```

## 🧪-> Example
- List examples of where entry contents can fit in a larger context


## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words
