---
created:
  - " 09-27-2024 16:14"
tags:
  - Classes
aliases:
---

# 📗 -> Lecture Date: Name
---
[Lecture Slides](https://docs.google.com/presentation/d/1IeF5L5ctAIwiGFlJrs5pTeIUUNcjc_Au7ilmGt-u9N4/edit)
## 🎤 Vocab
**Bit** - 1 binary unit
**Byte** - 8 bits
**Nibble** - 4 bits, a small 'byte'. Haha


## ❗ Unit and Larger Context


## ✒️ -> Scratch Notes
### Working with bits:
- and, or, not, xor, left shift, arithmetic right shift, and logical right shfit
- They are performed on a per-bit basis

| not | ~   | ~A     | 0011 |
| --- | --- | ------ | ---- |
| and | &   | A & B  | 1000 |
| or  | \|  | A \| B | 1110 |
| xor | ^   | A ^ B  | 0110 |
if A = 1100, B = 1010


### Left Shift - A << N:
- Move the bits in A to the left by N
- Overflowing bits on left are discarded, nonexistent bits on the right are 0
- A = 10110, A << 2 = 11000
- Can be interpreted as $A * 2^n$ 
	- Think about how the binary representation is artificially growing by a base of 2 to the right
	- Base 10: $003572 * 10^2 \xrightarrow{} 357200$ 
### Logical Right Shift - A >> N:
- Move the bits in A to the right by N
- Bits that can’t fit into the result are discarded
- 0’s are brought in to fill the missing bits
	- A = 10110, A >> 2 = 00101
- Can be interpreted as $A \;// \;2^n$ 

### Arithmetic Right Shift - A >> N:
- Move the bits in A to the right by N
- Bits that can’t fit into the result are discarded
- Most significant bit is brought in to fill the missing bits
- Can be interpreted as $A \;/ \;2^N$

> [!hint] How are logical and arithmetic right shift differentiated?
> Its similar to operator overloading: 
> - Logical right shifts are performed on unsigned variables
> 	- Unsigned int, unsigned short, unsigned char, ...
> - Arithmetic right shifts are performed on signed variables
> 	- Int, short, char
> - The compiler actually picks different machine instructions to use based on the type

| Type             | A          | N  | Result      |
|------------------|------------|----|-------------|
| Left             | 1101 0001  | 3  | 1000 1000   |
| Left             | 1101 0001  | 4  | 0001 0000   |
| Logical Right    | 1101 0001  | 4  | 0000 1101   |
| Logical Right    | 1101 0001  | 2  | 0011 0100   |
| Arithmetic Right | 1101 0001  | 4  | 1111 1101   |
| Arithmetic Right | 0101 0001  | 4  | 0000 0101   |
Can also shift by binary patterns:
`0b1101 << 0b10` $\leftrightarrow$ `13 << 2` = `52` = `110100`


### Its STILL all bits!
```c
void test {
	unsigned int x = -1; //0b11111111
	int x = -1; //0b11111111

	// 0b01111111 != 0b11111111
	assert( (x >> 1) != (y >> 1) ); 
	// Not equal because right shift happened differenly bcz of type 

	printf("%d", x); 
	// printing digit, outputs -1
	printf("%u", x);
	// printing unsigned int, outputs big int

	printf("%d", y); 
	// printing digit, outputs -1
	printf("%u", y);
	// printing unsigned int, outputs big int

	// Despite first assertion false, underlying bits are still the same!
}
```


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

