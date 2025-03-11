---
created:
  - " 10-02-2024 17:19"
tags:
  - Classes
aliases:
---

# 📗 -> 10/2/24: Dealing with Bases and Bit Representations
---
[Lecture Slides](https://docs.google.com/presentation/d/1IeF5L5ctAIwiGFlJrs5pTeIUUNcjc_Au7ilmGt-u9N4/edit#slide=id.g23a2289786_0_55)

## 🎤 Vocab


## ❗ Unit and Larger Context

Converting between bases:

Numbers are represented as powers of the base added together, and multiplied:
- **Base 10**: $235=2\times 10^2+3\times 10^1+5\times 10^0$ = 235
- **Base 16**: 235 = $14\times 16^2 + 11\times 16^0$ = 14 11 = E B
- **Base 2**: 235 = 

### Dealing with signed ints:
Sign Magnitude vs 2's Complement

| Bit Pattern | Unsigned Number | Sign Magnitude | 2’s Complement |
| ----------- | --------------- | -------------- | -------------- |
| 000         | 0               | +0             | 0              |
| 001         | 1               | 1              | 1              |
| 010         | 2               | 2              | 2              |
| 011         | 3               | 3              | 3              |
| 100         | 4               | -0             | -4             |
| 101         | 5               | -1             | -3             |
| 110         | 6               | -2             | -2             |
| 111         | 7               | -3             | -1             |
> You are assigning a bit to the sign, so you can only represent a power of 2 less values than the unsigned equivalent

### Ranges of Values
If you have $B$ bits you can represent:
- **Unsigned:** $0$ to $2^B - 1$
- **Sign Magnitude:** $-(2^{B-1} - 1)$  to  $2^{B-1} - 1$
- **2’s Complement:** $-2^{B-1}$  to  $2^{B-1} - 1$










## ✒️ -> Scratch Notes
- Log as you go through entry

## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

