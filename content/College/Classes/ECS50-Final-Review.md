


## Prep


### Information Representation


### Computer Structure


### Assembly


### I/O
[Link](https://docs.google.com/presentation/d/1PEYgys2NqcWXuusUizAn3fjxKO06W3JchQx3wvjenes/edit#slide=id.g7132dd20a3_1_19)
- I/O devices have IDs associated
	- Dependent on I/O port
Two main Types:
- I/O mapped I/O
- Memory mapped I/O

#### IO Mapped
- I/O devices and memory have separate address spaces
	- I/O: 0, 1, 2, ...
	- Mem: 0, 1, 2, ...
- Intel
	- Memory: mov
	- I/O: *in* for reading and *out* for writing
Cons:
- Need more buses because we need I/O bus and a memory bus

#### Memory Mapped I/O
- I/O devices and memory share the same adress space but we just reserve some of the address for I/O
	- Ex (index is address): `[IO, IO, IO, Mem, Mem, Mem, ...]`
- If intel used it:
	- Both use mov, just for different addresses
Advantages:
- Get to treat IO devices like memory. No more instructions. C/C++ can access IO
Disadvantages:
- Inacessible memory addresses

#### Instructions
##### Wait Loop IO AKA Polling:
- Repeatedly ask if it has input
- Once it has input, do something
Pros:
- Simple
- Low latency: Gets addressed (read) quickly
- Can all be done in software
Cons:
- Wasteful of CPU time
- Most of the time, no input
##### Interrupt Driven IO
- Get interrupted, then address the interruption
```
1. Running some program P
2. I/O device generates an interrupt
3. Save program’s state: EIP, EFLAGS, Seg
4. Ask the I/O device for its interrupt id INTA
	a. Acknowledge interrupt
5. I/O device gives back its interrupt Id
6. Service the interrupt
7. Resume program P
	a. IRET
```
Pros: 
- Don't waste CPU time
Cons:
- Each instruction take slightly longer
- Higher latency
- More complex system
- Additional hardware

##### Interrupt Descriptor Table
- OS maintains a table of Interrupt Vectors
- Each vector stores the address of the ISR as well as some other information
		- Protection levels
- Entries are indexed by the interrupt ID of the devices
- Inside of the intel CPU there is another register called IDT that stores the beginning of the address of the interrupt descriptor table in memory
- OS filled in both the table as well as the register at boot time

##### Where is interrupt handled
- Interrupts checked for at the end of every instruction
- CPU Cycle: Fetch, decode, execute, write, check for interrupt, handle interrupt if there is one

##### Prioritizing interrupts
- Always serve the highest interrupt if multiple at same time
- During an interrupt could be another
	- Always handle the new interrupt first
	- Ignore interrupts until the current interrupt is finished
	- Service the new interrupt but only if it has higher priority


### OS
[Link](https://docs.google.com/presentation/d/16v4YHhI4xRlL98TOj33ZBp6c7hVOeyHhqkA7djXsASM/edit#slide=id.g70dac8263a_0_0)
#### OS is a Program
- OS is a program
- OS is only special because it is the first program run
- For example, if there is a single CPU with a single core, you can't run your own program and the OS at the same time
- Switch between programs with a *system call*
- Hardware can interrupt the program that is running

#### OS Handles:
1) Managing the file system
2) Manages memory
3) Manages processes
4) Manage I/O

#### Application Loading
1) `Type ./a.out on the terminal`
2) Terminal will execute `execve("a.out")` to tell the OS to start running `a.out`
3) Locate `a.out` on the hard drive
4) Read `a.out`'s header. This has info about `a.out` such as its size, where the text section is at, where the data section is at, where is `_start`, etc.
5) Locate a free section of memory large enough to hold `a.out` and copy it there
	- OS does all of the memory management so it knows which locations are free and which are in use. It "knows" this because it keeps track of memory tables that show which sections are in use and which are free

1) Save the operating system's state (registers, permissions, etc)
2) Wipe the registers clean and set esp to the beginning of the program's stack
3) `jmp` to `a.out`'s start
4) `a.out` is now running

#### Booting the OS
1) Bootloader is stored in ROM (read only memory) and ROM is nonvolatile. Resolves the chicken and egg problem. 
2) Intel when it turns on, EIP is set `0XFFFFFFF0`, so this is where we place the bootloader
3) Bootloader reads the first sector of th disk and copies it into memory
	- The OS saved itself to this first sector
4) Jump to the location in memory we copied the first sector to and execute the instructions that are now there
5) The OS then loads the rest of itself from the hard drive into memory

#### Time Sharing
- Time sharing is multiple processes taking turns so quickly that it *appears* that they are running simultaneously
- In time sharing processes are given a time slice aka a quantum to run
- There is a timer that goes off every X seconds. This timer goes off more frequently than a time slice. We might want the time slice to be Y seconds. So when the timer goes off goes `timer_count++`, then when `timer_count==Y/X` then switch to the next proces
- Process is an instance of a program

*Implementation*
- Process X was currently running and its time is now over and we want to switch to Process Y
- Save X's state in X's entry in the OS's process table
	- Registers: all of them
	- EIP, EFLAGS, and CS are on the stack at the moment. They are there because we got to this context switch handler via an interrupt and the interrup hardware in the CPU saces those values to the stack
- Load Y's state from Y's entry in the OS process table
	- State == registers
	- Also have to make sure Y's EIP, EFLAGS, and CS are placed back on the stack
- Start Y 
	- Setting EIP back to the instruction that Y was on
	- This is done via aniret

#### Run State vs Sleep State
- When a process is ready to be run it is run state
- When a process is not ready to be run it is in sleep state
	- Generally a process enters sleep state when it is asking hte OS to do something on its behalf
		- Get input, open a file, etc.



## PraerieLearn
### Interrupts:
1) OS - IDT filled out
2) OS - IDTR pointer to the beginning of the IDT
3) Hardware - IO device asserts the interrupt line
4) Hardware - CPU asserts the interrupt acknowledge line
5) Hardware - IO device sends its interrup id back to the CPU
6) Hardware - CPU saves flag register, PC, and the CS registers
7) Hardware - CPU jumps to the appropriate interrupt handler
8) OS - Interrupt actually serviced
CS Registers - Code Segments
- Base address of the segment where the executable code resides in memory
- Works with other registers like the IP

ISR - Interrup Service Routing
- Before using, save all registers (but ESP which you can use)

### OS:
Program Running - EIP pointing to memroy belonging to your program

Program order:
1) `./a.out` typed in shell
2) shell executes `execve`
3) OS locates `a.out` in the file system
4) OS reads `a.out`'s header
5) OS searches memory allocations and tables for a space big enough. Copies a.out there. Updates its memory allocation tables and process tables.
6) OS saves its state
7) OS jumps to `a.out`'s `_start`

> If the OS is the program that loads other programs, how does the OS get loaded? How do we avoid the chicken and egg problem?
> 
> Make sure you reply to both questions explicitly. Consider using bullet points in your answer so that we know which parts of your answer correspond to which question.
```
- The bootloader is loaded in from ROM (read access memory). This is non volatile memory. The bootloader reads the first sector of the disk and copies it into memory, this sector holds to the OS. We execute the instructions now in memory, and from here the OS executes.
- This avoids the chicken and egg problem by having a non volatile process (the bootloader in ROM) explicitly designed to load the OS, and allow it from there to spawn new programs.
```

Timesharing depends on the following hardware components - the *timer* and *interrupt*




## Chris Review
### Integer Representation
Know:
- Unsigned
- Sign Magnitude (Same as unsigned with sign bit)
- 2s complement (The complicated negative one)
	- Conversion:
		1) If positive, treat as unsigned. If negative, continue
		2) Flip all the bits and add one
		3) The number represented is the 2s complement negative representation

- Change of bases: 
	- Easiest way is to convert to ten as an intermediate step, then convert to the desired base
		- $\sum ^{n-1} _{i=0} (base)^i$
- Hexadecimal
	- Base 16, starts with `0x`
	- Each number represents four bits

### Floating Rep
- 1 bit for sign, 8 for exp, 23 for mantissa
- `1|10100100|10010010001011011010111`
- $V = \pm 1.M \cdot 10^{E-127}$
	- Implicit one in the mantissa
	- The exponent has a bias of 127
		- Essentially take away the leading bit, add one and that's your exponent if positive

### Array Representation
`accessing: arr[a][b][c] with size (i,j,k)`
Two Major Types, And in those types you have row/column major: 
1) One big chunk
	- Row: `size = sizeof(pointer) + a(j+k) + b(k) + k`
	- Column: `size = sizeof(pointer) + c(k+j) + b(j) + i`
	- `*(arr + a(j+k) + b(k) + k)`
1) Array of arrays
	- Pointers to nested arrays:
		- `*(*(*arr+a)+b)+c)`

### Debugging 


### Assembly
> In the x86 Assembly language, we have 6 general-purpose registers (EAX, EBX, ECX, EDX, ESI, EDI). We also have registers such as ESP (points to the top of the stack), EBP (bottom of a stack frame for a given function), and EIP (stores the instruction)

Assembly Boilerplate
```
.global _start 

.equ ws, 4 

# Locals
.data
	a: .long 0
	b: .long 0
	c: .long 0
	
.text
_start:


done:
	nop // newline after nop
	
```
Multidimensional Array Access:
```
movl arr, %edx

movl i, %ecx
movl (%edx, %ecx, 4), %edx # Accessing arr[i]

movl j, %ecx
movl (%edx, %ecx, 4), %edx # Accessing arr[i][j]

movl k, %ecx
movl (%edx, %ecx, 4), %edx # Accessing arr[i][j][k], final value stored in edx
```

### Debugging
Compiling:
```
as --gstabs --32 -o hello.o hello.s
ld -melf_i386 -o hello.out hello.o
```

Printing:
```
p $eax # Registers have dolla
p (int)num # Need to cast labels

p ((int*)$eax)[0] # Need to cast eax value to int pointer, [0] dereferences the first element
p ((int*)$eax)[0]@10 # Starts at 0, prints 10 elements
```

### C Callable Functions in Assembly

![[ECS50-L17#Function Calling]]


Using this, you can even call assembly functions by pushing args to stack, and using the return value in EAX


### Inline Assembly
Boilerplate
```
__asm__(
/* Code */ :
/* Outputs */ :
/* Inputs */ :
/* Clobber */
);
```

Syntax explained in cheat sheet, have different types of outputs and places to store it:
- Writeable, early write, bijective
- Specific register, memory, general register, compilers choice

### Misc
#### Big and Little Endian

#### Harvard vs. Von Neumann Architecture

#### Interrupts

#### CPU Speed/Efficiency

#### CPU Components

#### Pipelining/Parallelism

