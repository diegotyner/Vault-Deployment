---
created:
  - " 10-13-2024 17:41"
tags:
  - Method
---

---
### Dataview:
```dataview
list from [[]] and !outgoing([[]])
```
---

# 📗 -> Insert word
## 🎤 Vocab
**Convolution** - 
> A convolution is a mathematical operation on two functions that produces a third function

## ❗ Information
### Definition
$(f * g)(t) \coloneqq \int^\infty _{-\infty} f(x)\cdot g(t-x)dx$


## 📄 -> Methodology 

> [!warning] Important Note
> The vector / matrix doing the convolving is flipped before it is applied. This is inherited from pure math, and dealt with as it comes up in computer science

### Convolution
$(1,2,3) * (4,5,6) = (4, 13, 28, 27, 18)$
4 is 1x4
13 is 2x8 + 1x4
etc ...
![[3B1B-Convolution.png|400]]

Convolution in the image case is similar. You are convolving the original image by an operator, which is a kernel matrix.

| ![[ECS174-L2#Getting Rid of Noise]] | ![[ECS174-L2#Edge Detection]] |
| ----------------------------------- | ----------------------------- |

A **Convolutional Neural Network** uses the data to figure out what the kernel should be in the first place, to facilitate network output

## ✒️ -> Usage
- Image Processing
- Probability
- Diffy Q
- Multiplying Polynomials


> [!NOTE] Convolve vs FFT Convolve
> There is a massive runtime difference between the two
> [[Fourier-Transform]]




## 🔗 -> Links
### Resources
- [3B1B Video](https://www.youtube.com/watch?v=KuXjwB4LzSA)

### Connections
- [[ECS-174-Main|Computer Vision]]

