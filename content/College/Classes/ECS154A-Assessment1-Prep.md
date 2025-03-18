### Topics Covered
##### Chapters
- 1, 2, and parts of 5 in the Harris & Harris book
	- Ch.1 - Basics (binary, gates, etc.)
	- Ch.2 - Combinational Logic design
	- Ch.5.2 & 5.3 - Arithmetic circuits & Number systems 
- Some other reading material to give context for K-maps, gates, number systems, etc.

##### Topics
Technology  
        What is a CMOS gate?  How does it work?  
	        - MOS transistory are buit from silicon, and they allow electrones  to flow. Silicon has 4 electrons in its valence shells, and forms lattice bonds, in a 3D crystal structure.
	        - It becomes a better conductor when *dopant* atoms are added
	        - ![[Silicon-Lattice-Dopants.png]]
		        a) Silicon lattice
		        b) Arsenic (5 e-) lattice with free electron
			        - Electron creates a negative charge, so this configuration is a *n-type dopant*
		        c) Boron (3 e-) lattice with a free hole
			        - Electron creates a positive charge, so this configuration is a *p-type dopant*
		- The junction between a p-type and n-type silicon is called a *diode*.
			- P-type region is called the *anode*
			- N-type region is called the *cathode*
			- When the voltage on the anode is greater than the cathode, current flows from the cathode to the anode
			- Otherwise, no current flow.
		- "In summary, CMOS processes give us two types of electrically controlled switches, as shown in Figure 1.31. The voltage at the gate (g) regulates the flow of current between the source (s) and drain (d). nMOS transistors are OFF when the gate is 0 and ON when the gate is 1. pMOS transistors are just the opposite: ON when the gate is 0 and OFF when the gate is 1"
        How would I make a NAND or NOR gate using CMOS?  
			- [[CMOS-Diagrams]]
        What is the power density problem?
	        - As components get smaller but have the same amount of power flowing through them, the power density goes up. This makes things run hotter.
	          
Boolean Logic Basic gates and operations  
        AND, OR, XOR, NOT, NAND, NOR, etc.  
	        - Duh
        What is a functionally complete set of gates?
		-  Being able to express any boolean equation
		- Can be simply proved with AND, OR, and NOT

Boolean Algebra  
        Identities  
        Axioms  
        Theorem (DeMorgans)  
	        - $\lnot(A \lor B) = \lnot A \land \lnot B$
	        - $\lnot(A \land B) = \lnot A \lor \lnot B$
        Truth Tables  
	        - Duh
        Minterms, Maxterms  
	        - Minterm: Where the functions is one (1)
	        - Maxterm: Where the functions is zero (0)
        SOP, POS forms of equations  
	        - SOP: Sum Of Products form canonical form. 
		        -  the sum (OR) of products (ANDs forming minterms) for which the output is TRUE
		        - "If its any of these cases/rows, function evaluates to true"
		        - $F = A\bar{B} + \bar{A}B$
	        - POS: Product Of Sums form canonical form. 
			- Effectively the DeMorgans negation of SOP. Its just the false rows ANDed together, with each case linked by AND
			- $F=(A+B)(\bar{A}\bar{B})$
		- Both $F$s are equivalent
        Minimizing equations
	        - Use K-Map and circle the largest components.

Karnaugh maps  
        What they are  
        How they are related to Truth tables  
        How and why they are used

Standard Combinational Circuits  
        Decoder  
        Encoder  
        Multiplexer  
        Demultiplexer  
        Adder (with and without Carry-lookahead)  
        Timing of combinational circuits (gate delays)

Designing Combinational circuits  
        Using basic gates  
        Using ROMs  
        Using decoders  
        Using Multiplexors

Synthesis of Combination Circuits  
Adders  
        Half-adders  
        Full adders  
        Ripple-carry adders  
        Adders using carry-lookahead  
        ALU's (Arithmetic Logic Units that do more than just add) (P's & G's)

Codes  
        Hamming distance  
        BCD Code  
        One-hot code

Error Detection/Correction  
        Parity  
        M-detection N-correction concepts  
        SECDED