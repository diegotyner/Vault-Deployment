---
created:
  - " 09-27-2024 13:31"
tags:
  - Classes
aliases:
---

# 📗 -> Week 1: Course Intro and Linux
---
[Lecture Website](https://missing.cs.ucdavis.edu/modules/linux%20&%20the%20cli/using-linux/)

## 🎤 Vocab


## ❗ Unit and Larger Context
Expand Dev toolbox, and be comfortable with useful tools like:
- Unix environment
- Command line
- Debugger

Learn productive programming, and learn how to use tools correctly (when to use screwdriver vs power tool)
- Correctness vs Quickness
- Not just the fastest way, is it correct? 

## ✒️ -> Scratch Notes
### CLI Demo:
Compile code with `gcc -c readLines.c`
`apt:` A tool that helps to install tools onto computer
- `sudo apt install clang-format:` Automatically formats code
	- `clang-format --style=google readLines.c`
clang-format helps to prettify, now we want tool to help correctness:

`sudo apt install shellcheck:` Run script through it to see if common issues are found in your problem
- `shellcheck preview.sh`

### What is Unix?
- Unix is a family of OSs developed at Bell Labs in the 70s
- Unix environment has become a standardized platform for developers
	- Android, iPhone
	- GNU Linux, MacOS, WSL
- Dominant player in
	- Web servers
	- IoT devices
	- Smartphones
	- Cloud computer
	- Game consoles

### Package Manager:
One stop shop for getting software
- Software like browswers
- Packages like numpy
Install and Uninstall:
- `sudo apt remove ___`
	- `sudo apt autoremove` - Removes unused bloat from uninstalled packages (dangling libraries?)
- `sudo apt install ___`


## 🧪-> Example
- List examples of where entry contents can fit in a larger context

## 🔗 -> Related Word
- Link all related words

