---
created:
  - " 10-11-2024 16:21"
tags:
  - Classes
aliases:
---

# 📗 -> Lecture Date: Name
---
[Lecture Slide Link]

## 🎤 Vocab


## ❗ Unit and Larger Context
### Finished floating point numbers
#### Intro to Representation
Floating point numbers are kind of like scientific notation
- $1.0101\cdot 2^4 = 10101 = 21_{10}$
- $1.01\cdot 2^{-1} = .101 = 0.625_{10}$
[Website that does conversion](https://www.h-schmidt.net/FloatConverter/IEEE754.html)

Floating point numbers are all written: $1.m \cdot 2^e$
- m = mantissa
	- More bits here the more precision our numbers have
- e = exponent
	- More bits here the wider the range of values we can represent
	- e is treated as unsigned so as not to waste values, and ranges from values between 0-255 (8-bit). Half of the values are assigned to positive exponents, the other half for negatives. 1 is `10000000` (1 + 127 = 128, 128 flips the most significant digit)
		- Value actually stored is $1.m \cdot 2^{e-127}$

| Field          | Sign | Exponent | Mantissa |
| -------------- | ---- | -------- | -------- |
| Number of bits | 1    | 8        | 23       |




#### Float Conversion
Decimal to float:
1) Find the binary representation of your number
   6.25 = 110.01
2) Multiply the number by 2^0
	110.01 * 2^0
3) Put the number in normal form 1.m increasing/decreasing the exponent to keep the value of the number the same
   1.1001 * 2^2
4) The value in the exponent field is e + 127
	   Exp field = 2 + 127 = 129 = 0b10000001
1) If there are fewer than 23 bits in the mantissa field ass 0s to the ned of m until there are 23 bits
   M = 1001 followed by 19 0’s
6) If the number is positive the sign bit is 0, if negative it is 1
   Number is positive so sign field is 0
7) Put sign,exponent, and mantissa values you've calculated in the prior steps together in the correct order to get your answer

|Sign|Exponent|Mantissa|
|---|---|---|
|0|10000001|1001 and 19 0’s|
0|10000001|10010000000000000000000


#### Special Values
1) If exponent field and mantissa are 0, number is 0
2) If exponent field is all 1s:
	1) If the mantissa field is 0 it means the number is infinity
	2) If the mantissa field is nonzero it means the number is NAN (not a number)


### Covered character mapping (ASCII, Unicode)

### Arrays
- 1D arrays are stored as a contiguous chunk of memory
- `ar[i]` is shorthand for `*(ar + i)`
### Multi Dimensional Arrays
We can store them multiple ways
- One big chunk of memory allocated:
	- This is done for static arrays, like `ar[3][4]`
- Array of arrays, we create an array of pointer that then point to each row
	- A 3x4 array of ints:
		- Create an array of 3 int*
		- Each of those pointers points to an array of 4 elements
	- This is done for dynamically created arrays
#### Row Major: 
- Lay the rows of matrix end to end
- C does this
#### Column Major:
- Lay the columns of the matrix end to end
- R does this


| Indices | 0   | 1   | 2   | 3   |
| ------- | --- | --- | --- | --- |
| 0       | 0   | 1   | 2   | 3   |
| 1       | 4   | 5   | 6   | 7   |
| 2       | 8   | 9   | 10  | 11  |

| Index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Value | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  |
Row Major ^

| Index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Value | 0   | 4   | 8   | 1   | 5   | 9   | 2   | 6   | 10  | 3   | 7   | 11  |
Column Major ^



## ✒️ -> Scratch Notes
- Log as you go through entry

## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

