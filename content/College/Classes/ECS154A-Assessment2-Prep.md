
Basics of Sequential Logic
- What it is
	- As opposed to combinational logic which is purely logic 
- Why it matters
- Present State, Next state
- Difference between Latch and Flip-Flop
- Synchronous vs. Asynchronous sequential circuits
- State Transition Tables
- Cross-coupled NANDs, NORs

Types of sequential circuits (Latches, FFs)
- Gated Latch
- RS Latch, FF
- JK FF
- Master-Slave FF
- Edge-triggered FF
- Toggle FF
- How to create one type using another (JK from RS)
- States
- Timing (Propagate time, setup time, hold time)
- Worst case path calculation, impact on clock rate

Design of Sequential circuit
- Model Specifications
- State Diagram
- Minimize States
- Create State Transition Table
- Select FF's to be used
- Design the logic

Creating Sequential Circuit using various types of FF's
- Transition Table
- Karnaugh Map representation


---
[exam2.w24.txt.pdf](https://canvas.ucdavis.edu/courses/966323/files/26153501?wrap=1)

What is the difference between a latch and a flip-flop?
```
A latch is level sensitive (triggered whenever the clock is in its desired state, be it high or low) and a flip flop is edge sensitive (triggered on a rising or falling edge of the clock). This makes a flip flop more robust and makes behavior more predictable.
```

Explain what the hold time is for a flip-flop
```
The hold time is the minimum amount of time an input must be stable after clock edge. If the onset of clock input is 10ns and we need 2ns of hold time, the output must be stable at least until 12ns.
```

Explain what the setup time is for a flip-flop
```
The setup time is the minimum amount of time an input must be stable before a clock edge. If the onset of clock input is 10ns and we need 2ns of setup time, the output must be stable at least until 8ns.
```

What is the difference between the Mealy and Moore models of sequential design? What is the advantage to the Moore approach?
```
The main difference is that the Moore model and the Mealy model is their method of calculating output. The Moore model calculates output based only on state, while the Mealy model calculates output based on state and input.

The main advantage to the Moore approach is that it is often more robust, and can make transition logic and combinational logic more straightforward.
```


Simple SR latch



| J'  |     |     | X   | X   |     |
| --- | --- | --- | --- | --- | --- |
|     | 0   | d   | d   | 0   |     |
|     | d   | d   | d   | d   | Y3  |
|     | d   | d   | d   | d   | Y3  |
| Y2  | 1   | d   | d   | 1   |     |
|     |     | Y1  | Y1  |     |     |



---
[assessment2.f24.pdf](https://canvas.ucdavis.edu/courses/966323/files/26540135?wrap=1)

hold time for FF?
setup time for FF? 
- See above

Explain what the propagation time is for a latch?
```
The propogation time for a latch is the time it takes from when the input changes, to when the output changes. The time it takes for change to 'propogate'.
```

What is the difference between the Mealy and Moore models of sequential design? Give one disadvantage for the Mealy approach.
```
The main difference is that the Moore model and the Mealy model is their method of calculating output. The Moore model calculates output based only on state, while the Mealy model calculates output based on state and input. 

One disadvantage of the Mealy approach is its dependence on input, as it can make the output more prone to mistakes or timing issues. This can result in less robustness than the Moore model offers.
```


