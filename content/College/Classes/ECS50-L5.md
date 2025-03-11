---
created:
  - " 10-04-2024 16:50"
tags:
  - Classes
aliases:
---

# 📗 -> 10/4/24: Quiz and Endianness
---
[Lecture Slides](https://docs.google.com/presentation/d/1IeF5L5ctAIwiGFlJrs5pTeIUUNcjc_Au7ilmGt-u9N4/edit#slide=id.g1e7652563e_1_64)

## 🎤 Vocab


## ❗ Unit and Larger Context
### Memory is byte addressable
- Every byte has its own address, and smallest unit of memory we can allocate is a byte
### CPU have word sizes
- A word size is the largest unit that the internal circuitry can store
- 32 bit CPU has a 32bit (4 byte) word size
This leads to endiannes:

2 Choices:
### Little Endian:
- **Least** significant byte of a word is stored at the lowest part of an address
- Used by Intel
- Stored 'backwards'
### Big Endian
- **Most** significant stored at the lowest part
- This is done on the internet
- Stored 'forward'

Storing 0x01020304:

| Address | 100  | 101  | 102  | 103  |
| ------- | ---- | ---- | ---- | ---- |
| Big     | 0x01 | 0x02 | 0x03 | 0x04 |
| Little  | 0x04 | 0x03 | 0x02 | 0x01 |




## ✒️ -> Scratch Notes
- Log as you go through entry

## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

