---
created:
  - " 09-30-2024 16:20"
tags:
  - Classes
aliases:
---

# 📗 -> 9/30/24: 
---
### When lectures is over, add the content as aliases above
[Lecture Slides](https://docs.google.com/presentation/d/1IeF5L5ctAIwiGFlJrs5pTeIUUNcjc_Au7ilmGt-u9N4/edit)

## 🎤 Vocab


## ❗ Unit and Larger Context
Bitwise operations are useful:
- They're very fast
- Very useful for boolean representations
	- Read/Write/Execution Permissions: 
		-  755 (rwxr-xr-x): 111 / 101 / 101
		- 700 (rwx------): 111 / 000 / 000

## Bitwise operations to accomplish a task:
### Uses for AND:
Check to see if a bit is a 0 or 1
- Create a new variable called mask that has 1’s in the positions you want to check and 0’s in all other positions
- if(A & mask) then at least one of the bits in that was set to 1 in the mask is set to 1 in A
- If not then all of the positions in A you were trying to check were 0’s
Change the value of a bit to 0
- Create a new variable called mask that has 0’s in the positions that you want to change to 0 and 1’s everywhere else 
- A &= mask

### Uses for OR:
Setting bits to 1
- Create a new variable called mask that has 1’s in the positions that you want to change and 0’s everywhere else
- A |= mask;
  
- OR with 1
	- $101010 \,\vert\, 001001 \xrightarrow{} 101011$
- Bits will become 1 if 0, and remain 1 if 1
  
### Uses for XOR:
Flip particular bits and leave the rest unchanged
- Create a new variable called Mask that has 
	- 1’s at the position you want to flip
	- 0’s at the positions you want to leave unchanged 
- Variables ^= Mask
- $101010 \oplus 001001 \xrightarrow{} 100011$
  
- XOR with a string of bits, with 1 being the bit to be flipped
	- Only the bits with 1s are flipped, rest are kept the same


### Uses for bit shift:
- There are times when you may have multiple fields packed into a single variable and will need to extract them
- To extract a field use the following procedure
	- Shift the variable containing the field to the right so that the least significant bit of the field ends up at index 0
	- Then and the field with a mask that has as many 1’s in it as there are bits in the field
![[Extracting-Packed-Fields.png| 400]]


