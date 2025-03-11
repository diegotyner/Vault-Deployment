
Reviewing Assessment #1:

PSAs:
- Class did pretty good overall
- Same thing happened last year, 2nd assessment did NOT go as well. 


1) 
Min terms are 1
Max terms are 0

2) Solving the Karnaugh map, self explanatory


3) Compare two functions, prove their identical / different using a truth table or Karnaugh map.
He makes the note that u can use the tables on the back, just make a note of it.


4) CMOS, the gate is NAND
I don't understand it really, i just memorized :(
- Only path  is that both of them have to be activated, then it deactivates
- He says that only path is that both of them have to be activated to make a path to ground. 


5) 5 words long question
"As you shrink everything and keep power the same, then the power density goes up"


6) Parity pattern
Odd parity means sum of 1 has to be odd, and parity bit makes it odd
Even parity is the opposite


7) Minimum Hamming Distance
To *detect* double errors, you need to change *4* bits between code words
To *correct* double errors, you need to change *5* bits

|                      | A   |     |     |     | B   | B   |
| -------------------- | --- | --- | --- | --- | --- | --- |
| Detect double errors | x   | x   | *x* | x   | x   |     |
| Correct double erros | x   | x   | *x* | *x* | x   | x   |
- If you do any less, you confuse errors from A with errors from B


8) Minimum SOP expression
$\bar{C} + \bar{A}B$


9) Using the MUX
11 - $\bar{B}$ or 0
10 - 1
01 - B
00 - B or 1


10) Adder with subtraction
Add A with not B with the subtraction is on.
- Either not B with a 2-MUX, or XOR it


11) Label the components, draw connections


12) Label the times to execute


13) Worst case time for the adder


14) Draw the connections and inputs to the carry lookahead


15) Write the equation for the carry out of Cell2 in the ALU in terms of Ps and Gs. The equation must not have any parenthesis
$C_{out2}=G_2 + P_2G_1 + P_2P_1G_0 + P_2P_1P_0C_{in_0}$

16) Worst case time to create Out0? Out2?
Generating:
- Carry Lookahead (CL) takes 12
- Gs takes 7
- Ps takes 5
$Out_0: t=33$
$Out_2: t=33+12+7=45$

