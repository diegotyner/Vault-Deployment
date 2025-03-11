---
created:
  - " 10-07-2024 16:15"
tags:
  - Classes
aliases:
---

# 📗 -> 10/7/24: 
---
[Debugging Slides](https://docs.google.com/presentation/d/1PKVtvy4hS0HQqj228VnezKkono0I9VDguD_EBr960Jk/edit#slide=id.p)
[Lecture Slides](https://docs.google.com/presentation/d/1IeF5L5ctAIwiGFlJrs5pTeIUUNcjc_Au7ilmGt-u9N4/edit#slide=id.g1e7652563e_1_64)

## 🎤 Vocab


## ❗ Unit and Larger Context
Small summary

## ✒️ -> Scratch Notes

### Debugging Principles:
1) Know what the correct behavior for an input is the entire way. Create cases, and know how they should be handled.
2) Know how to compute the correct answer
3) Investigate the problem and collect as much information. Print information, etc.
4) Trust nothing, verify everything

### Test Cases:
- Good test cases save a lot of time
- Good test cases exercise a small piece of code, and not the entire thing. If a test fails, you know where.
- Worth the time investment
- Use a testing framework
	- C++: Google Test
	- Python: unittest
	- Java: Junit


### Advantages of debugging
- Don't need to manage adding or removing print statements
- Debugger often pinpoints the exact line of code that fails
- Debuggers have a learning curve but are worth taking the time to learn 


### Running the Debugger
- Inside the IDE press the debug button
- gdb/ddd
	- Add the -g option
		-This causes the compiler to save debugging information so that you can run the debugger on the code
	- If running gdb I recommend using the --tui option as it can makes it easier to see what is going on in your program
		- gdb --tui hello.out


### Useful --tui args
```
// moving up and down the call stack
bt // backtrace, I think it undoes code? not sure
up
down
p [i] // p = print
info args
info locals
// moving through code
n // next line of code
f // finish running a function
c // continue, keeps going until theres a breakpoint, it ends, or it crashes
```

### Breakpoints
Inside the IDE click to the left of the line
- For some it is possible you may need to right click
gdb the command is
- B location
- Where location can be 
	- The name of a function
	- Line number
		- Sets a breakpoint at the specified line in the current file
	- Filename:line number
		- Sets a breakpoint at the specified line in the specified file
> example of breakpoints
```
b print_array
b 5
b input_validation.c:20
```


> [!info] Running Shell Commands Inside of gdb
> You can run shell commands by prefacing with shell, like `shell ls` or `shell gcc -g winter2024.c`
> If you set breakpoints, you don't even lose time hopping back and forth


```
shell gcc -g -Wall -Werror winter2024.c
```


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

