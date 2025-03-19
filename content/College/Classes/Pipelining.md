
> [!tip] See backlinks for relevant lectures


## Pipelining
Attempting to simultaneously do multiple instructions at once. The usual example is having many loads of laundry. Instead of Washing them Drying them Folding them, and repeating: we can speed up by immediately starting another load the moment we can begin another step:


| Cycles | 1   | 2   | 3   | 4   | 5   |
| ------ | --- | --- | --- | --- | --- |
|        | W   | D   | F   |     |     |
|        |     | W   | D   | F   |     |
|        |     |     | W   | D   | F   |
|        |     |     |     | ... | ... |

### Issues:
#### Hazards:
- Structural - Resource conflict
- Data - 3 types
- Control - change in control flow

These issues arise when pipelined code can't easily work one after another. Take the simple RAW example below:
##### Data Hazard
1) *RAW (Read After Write)* - Attempting to read from a register after writing to it. You need to wait for the write to finish.
	1) `ADD R1, R2, R3`
	2) `SUB R5, R1, R2`
	We are using R1 in the calculation for R5, so we cannot do them both simultaneously. The data won't be ready until after the WRITE stage of instruction 1.
2) *WAW (Write After Write)* - The concern of an earlier write executing after a later write, leaving the wrong value in your register
	1) `lw   R1, R2, R3`
	2) `AND  R1, R5, R6`
	If AND executes much faster than lw, we might have to lw value in R1 after everything
3) *WAR (Write After Read)* - Rarely comes up in hardware, but can arise in code scheduling when moving things around.  
