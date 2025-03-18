





# Midterm 2
[Sequential Logic Circuits and the SR Flip-flop](https://www.electronics-tutorials.ws/sequential/seq_1.html)
Jump to a Latch / FF with ctrl f 

## SR Latch
![[DDCA-Ch3-YT#Part 3 - SR Latch]]

There are two SR latches, the NAND and the NOR varieties. The above is the NOR, but the NAND also exits and works pretty much backwards.


## D Latch 
![[DDCA-Ch3-YT#Part 4 - D Latch]]


## D Flip Flop
![[DDCA-Ch3-YT#Part 5 - D Flip Flop]]

Also look at this wiring:
![[D-Type-Flip-Flop-Circuit.png]]


## JK Flip Flop

| J   | K   | Q         | Description            |
| --- | --- | --------- | ---------------------- |
| 0   | 0   | Q         | Hold Memory            |
| 0   | 1   | 0         | Reset                  |
| 1   | 0   | 1         | Set                    |
| 1   | 1   | $\lnot Q$ | Toggle (Invert Output) |
- Similar to the SR FF, with J=Set and K=Reset, but when both are 1 it isn't invalid, it toggles Q


![[JK-Flip-Flop-Circuit.png]]


## Master Slave Configuration
Two flip flops are tied together:
> The input signals J and K are connected to the gated “master” SR flip flop which “locks” the input condition while the clock (Clk) input is “HIGH” at logic level “1”. As the clock input of the “slave” flip flop is the inverse (complement) of the “master” clock input, the “slave” SR flip flop does not toggle. 

![[Master-Slave-Configuration-Circuit.png]]