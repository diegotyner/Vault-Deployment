
## Midterm 1
https://docs.google.com/document/d/1cr6dzeG01fo9-YK6VI1-59W-eYlJv45ajgLnUxEVlS4/edit?tab=t.0

### Bit Shifting
#### Left Shift - A << N:
- Move the bits in A to the left by N
- Overflowing bits on left are discarded, nonexistent bits on the right are 0
- A = 10110, A << 2 = 11000
- Can be interpreted as $A * 2^n$ 
	- Think about how the binary representation is artificially growing by a base of 2 to the right
	- Base 10: $003572 * 10^2 \xrightarrow{} 357200$ 
#### Logical Right Shift - A >> N:
- Move the bits in A to the right by N
- Bits that can’t fit into the result are discarded
- 0’s are brought in to fill the missing bits
	- A = 10110, A >> 2 = 00101
- Can be interpreted as $A \;// \;2^n$ 
#### Arithmetic Right Shift - A >> N:
- Move the bits in A to the right by N
- Bits that can’t fit into the result are discarded
- Most significant bit is brought in to fill the missing bits
- Can be interpreted as $A \;/ \;2^N$
#### Deciding between Arithmetic and Logical Right Shift:
- The compiler decides based on the typing of the variable
- Logical right shifts are performed on unsigned variables
	- Unsigned int, unsigned short, unsigned char, ...
- Arithmetic right shifts are performed on signed variables
	- Int, short, char


### Uses for bit operations:
#### Uses for AND:
Check to see if a bit is a 0 or 1
- Create a new variable called mask that has 1’s in the positions you want to check and 0’s in all other positions
- if(A & mask) then at least one of the bits in that was set to 1 in the mask is set to 1 in A
- If not then all of the positions in A you were trying to check were 0’s
Change the value of a bit to 0
- Create a new variable called mask that has 0’s in the positions that you want to change to 0 and 1’s everywhere else 
- A &= mask

#### Uses for OR:
Setting bits to 1
- Create a new variable called mask that has 1’s in the positions that you want to change and 0’s everywhere else
- A |= mask;
  
- OR with 1
	- $101010 \,\vert\, 001001 \xrightarrow{} 101011$
- Bits will become 1 if 0, and remain 1 if 1
  
#### Uses for XOR:
Flip particular bits and leave the rest unchanged
- Create a new variable called Mask that has 
	- 1’s at the position you want to flip
	- 0’s at the positions you want to leave unchanged 
- Variables ^= Mask
- $101010 \oplus 001001 \xrightarrow{} 100011$
  
- XOR with a string of bits, with 1 being the bit to be flipped
	- Only the bits with 1s are flipped, rest are kept the same


#### Uses for bit shift:
- There are times when you may have multiple fields packed into a single variable and will need to extract them
- To extract a field use the following procedure
	- Shift the variable containing the field to the right so that the least significant bit of the field ends up at index 0
	- Then and the field with a mask that has as many 1’s in it as there are bits in the field

### Representing numbers in different bases
#### Base 2:

| Place | 5   | 4   | 3   | 2   | 1   | 0   |
| ----- | --- | --- | --- | --- | --- | --- |
| Value | 32  | 16  | 8   | 4   | 2   | 1   |

**Base 2 -> Base 10:** Use these to determine values: ie, $1011 = 1\cdot 2^3 + 0\cdot 2^2 + 1\cdot 2^1 + 1\cdot 2^0 = 11$
**Base 10 -> Base 2:** Can find the binary of a number quickly: 
1) Write out powers of 2 until the value is greater than or equal to the number you're looking for
2) From the left, check if the value is less than or equal to the base 10 number
	1) If it is, write a 1 in that spot and subtract the value 
	2) If not, write a 0
3) Repeat 1 and 2 until all bits are filled out

**Binary to Hex:** 
1) Starting from the right, group bits into groups of 4. If a group is unfilled, fill with 0s
	- $1001101010110 \to 0001|0011|0101|0110$ 
2) Convert to hex:
	- $0001|0011|0101|0110 \to 1|3|5|6$
	- Final answer: 0x1356
**Hex to Binary:** Repeat the above process backwards
1) Convert each hex digit into its 4 bit sequence and concatenate them together
	- 0x2F1B
		- 2 = 0010
		- F = 1111
		- 1 = 0001
		- B = 1011
	- 0010 1111 0001 1011

### Negative Numbers:
#### Representation:

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
If you have $B$ bits you can represent:
- **Unsigned:** $0$ to $2^B - 1$
- **Sign Magnitude:** $-(2^{B-1} - 1)$  to  $2^{B-1} - 1$
- **2’s Complement:** $-2^{B-1}$  to  $2^{B-1} - 1$

#### Sign Magnitude:
Makes the most significant digit represent the sign. 0 -> Positive, 1 -> Negative.
For calculating value, ignore the most significant digit and find the value of the positive number. 
Ex)
- -3
	- Positive 3 is 111
	- -3 is +3, with a 1 added at the front: *1*111 

#### 2's Complement
Works like an odometer: If you wind 000 forward you get 001, if you wind back you get 999. In this case, winding backwards to 111 gives you -1. 
To get 2's Compliment representation of a negative number:
1) Flip all the bits
2) Add 1
**Negative to Positive:** 110 --(flip bits)-> 001 --(add 1)-> 010
- Sanity Check: Initially represents -2, now represents positive 2
**Positive to Negative:** Same process


### Endianness:
#### Word Size:
- The largest unit that the internal circuitry can process and store
- A 32 bit CPU has a 32 bit (4 byte) word size 
#### 2 Choices for Endianness:

> [!info] Pneumanic
> In Big Indian, the BIGGEST / Most Significant byte is stored first
> In LITTLE Indian, the SMALLEST / Least Significant byte is stored first

**Little Endian**
- **Least** significant byte of a word is stored at the lowest part of an address
- Used by Intel
- Stored 'backwards'
**Big Endian**
- **Most** significant stored at the lowest part
- This is done on the internet
- Stored 'forward'

Storing 0x01|02|03|04:

| Address | 100  | 101  | 102  | 103  |
| ------- | ---- | ---- | ---- | ---- |
| Big     | 0x01 | 0x02 | 0x03 | 0x04 |
| Little  | 0x04 | 0x03 | 0x02 | 0x01 |
## Midterm 2


