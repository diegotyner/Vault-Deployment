---
created:
  - " 10-22-2024 15:12"
tags:
  - Classes
aliases:
---

# 📗 -> Week 4: Software Testing
---
[Week 4 Webpage](https://missing.cs.ucdavis.edu/modules/testing%20&%20debugging/software-testing/)

## 🎤 Vocab


## ❗ Unit and Larger Context
### Introduction to software testing
Programmers make errors/bugs
- Average is 1-25 bugs per 1000 lines of code in small projects
- Only goes up the larger the code base

#### Autograder
- Test submissions against a set of test cases, assigns it a score
Pro:
- Low effort and provides immediate feedback
- Fair, code correlates with grade received
Cons:
- (possibly) limited number of submissions
- (generally) no granular feedback
- No autograders in the real world

#### Manual Testing
- Run code and manually verify tht it works
- Test several scenarios, bug if output is incorrect
Pro:
- Easy and intuitive
- Catches blatant errors quickly
Cons:
- Time consuming for larger programs
	- Thorough testing requires many I/O scenarios
- Difficult to thoroughly test programs
- Generally provides no granular feedback


#### Automated Testing
- Provides input to the program being tested
- Analyzes the output of the tested program
- Determines if the output was correct for the input
> Pre define input and output pairs, if you had a general rule you wouldn't need to write the program in the first place

For testing a username verifier:
1) Pre define usernames and expected validity
	`{ username = "john", valid=true}`
	`{ username = "3john!*", valid=false}`
2) Pass usernames into IsValidUsername
3) Check that IsValidUsername returns the value we expect
Pros: 
- Fast
- Reliable
Cons:
- Still no granularity
- Writing I/O combos takes time, can only test a finite sample set

### Granularity
Automate testing through *unit tests*
- Test the individual components of a program
	- Make sure that no component is breaking, and if it does, identify the pieces responsible
- Independent of the end-to-end behavior

#### CUnit
Installation: `sudo apt-get install libcunit1 libcunit1-dev`
Assert with `CU_ASSERT(1 == 1);` to encode expectations

> Usage:
1) Initialize: `CU_initialize_registry();`
2) Create a suite, then add tests to it
	1) `CU_pSuite suite = CU_add_suite("MathUtilsTestSuite", 0, 0);`
	2) `CU_add_test(suite, "test of divide()", test_divide);`
3) Run tests: `CU_basic_run_tests();`
4) Clean & exit: `CU_cleanup_registry();`
	- Frees memory
5) Run the file and it will print out your codes performance and what unit tests passed/failed

#### Test Quality
The code you want to cover most thoroughly varies drastically
- Old vs new
- Most used vs Unused
- Most complex?
A good heuristic is *code coverage*, use a software to track how which lines of your code are tested 
- gcov & gcovr



## ✒️ -> Scratch Notes
- Log as you go through entry

## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Links
### Resources
- Put useful links here

### Connections
- Link all related words
