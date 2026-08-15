---
created:
  - " 08-08-2026 17:04"
tags:
  - Entry
Entry-For: Linux
topic: Intro to bash workflows
---


### Related
- [[sed-Cheatsheet]] - Good for stream manipulation, quick regex editing
- [[awk-Cheatsheet]] - Good for tabled data



### Overview

Bash (Bourne Again SHell) is a scripting language for the command line. It's extremely common on Unix systems, and fantastic for stitching together program output, as it speaks the language of text streams, which most programs are already compatible with.

> Why bash instead of a heavier programming language?

Simplicity, and compatibility. Bash scripts are quick and easy, and very extensible. We could have a script that checks the health of our systems, destructures the healthcheck text to conditionally run follow up scripts, and have all of this run as a cron job with nearly no dependencies and high compatibility. Neat!

It's also an essential skill for any competent software engineer, as with the proper query, data can be destructured and understood without having to boot up a GUI. This is most apparent on tasks like grepping logs and repeated queries throughout a directory. 

At the bottom of my notes I have reference code for syntax, and here I will provide a small overview of the essential bash commands and workflows to be familiar with.

#### Essentials
##### Core Bash Syntax
Bash has support for basic things like variable assignment (`i=5, arr=(1 2 3)`), I/O (`arg1="$1"` and `echo "output")`, control flow (`if [[ true ]]; then echo "true"; else echo "false"; fi;`), loops (`for ((i=0; i<10; i++)); do echo "$i"; done;`) and functions (`my_func() {};`). 

Usefully, it also has a number of baked in features for automations: globbing (`cat log*`), filechecking flags (`-e, -f, -w`), access to environmental variables (`if [[ "$user"=="admin" ]];` or `SOURCE_PATH="${BASH_SOURCE[0]}"`), I/O redirection (`>>` and `|`)and crucially regex. 

##### Regex
The standard 'flavor' of bash used by systems is POSIX Extended Regular Expression (ERE). 
This means we DON'T have access to:
- Perl shortcuts (`\d | \w | \s`)
Instead, we have POSIX bracket expressions:
- Ranges: `[0-9]`
- Groups: `[[:digit:]] | [[:alnum:]] | [[:space:]]`
	- aside: to fully emulate `\w` you need the following: `[a-zA-Z0-9_]` or `[[:alnum:]_]`
- Meta characters are operators first, and don't need to be escaped to be used as such (type `y|n` instead of `y\|n`)
- We do have capture groups: `regex='(capture)' -> echo ${BASH_REMATCH[1]}`

Applying regex is a bit different than usual:
- Build a regex string, then applying: `regex='(hello)'; if [[ $mystring =~ $regex ]]; then echo ${BASH_REMATCH[1]}; fi`
- Directly apply, needs a caret: `if [[ $mystring =~ ^hello ]]; 

##### Core utilities
At its core, bash is very simple and often things get done best when extending it with existing utilities:
[[sed-Cheatsheet|sed]] - A simple stream editor. Performs simple string mutation on an input stream line by line, useful for quick regex editing (compatibility, readibility, find explicit matches)

```bash
sed 's/old/new/g' file # Nvim style substitutions
sed -n '5,10p' file # Print only lines 5-10
sed '/pattern/d' file # delete lines matching pattern
```


[[awk-Cheatsheet|awk]] - A stream editor for files, good for working with tables. It makes applying changes per line simpler, as it has built in support for cols/fields. Great for parsing long files for key information, and presenting readably (only printing certain lines, or certain characters from an output)
	- Uses perl style pattern matching, splitting by delimeter (word by default)
	- If pattern is wrapped in an "action block `{}`", execute the command (printing/accumulating, etc)
	- If its a bare condition, then evaluate as a filter

```bash
awk '{print $2}' file # second field of every line
awk -F',' '{print $2}' file # changing delimeter to ",". Second field in a csv
awk '/pattern/ {print $0}' file # match only lines matching pattern. print line.
awk '{sum += $3} END {print sum}' file # accumulate a field, print total at the end
awk '$3 > 100 {print $1}' file # conditional on field value
awk '$(NF-1) == 404' file # print only if condition is truthy
```

grep - A searching tool for ripping through text for matches. (ripgrep or rg is a modern replacement, in rust).
- Core workflow: `grep "pattern" file`
- Flags: 
	- -i : case-*i*nsensitive
	- -v : in*v*ert, NON-matches
	- -c : *c*ount matches
	- -o : print *o*nly matched part, not line
	- -E : search with regex. don't escape operators.
	- -n : show line *n*umbers
	- -A2 -B1 : show 2 lines *a*fter, 1 line *b*efore each match

tr - A simple transforming characters tool. It is only meant to be used with piped input (only `tr < file` or `cat file | tr`). 
```bash
tr 'a-z' 'A-Z'      # lowercase -> uppercase, position-by-position
tr -d '0-9'          # delete all digits
tr -s ' '            # Squeeze repeats
tr -s ' ' '\n'       # squeeze runs of spaces, AND translate space->newline
tr -cd '0-9'         # delete all non digits
```

- sort 
- uniq
- cut
- wc - 
- find
- cat
- cut
- head / tail -n
	- Also useful to skip header row: `tail -n +2 file`. The pattern tells it to start from row N-1.


### 🔗 Resources / Samples
- [devhints bash](https://devhints.io/bash)
```bash
man bash         # Manual for bash
help             # Bash built-in commands help
type <command>   # Show how a command is interpreted (builtin, alias, file, etc.)
compgen -c       # List all commands available
```

### Data Types
```bash
#!/usr/bin/bash # Shebang line instructs interpreter to use bash

i=5               # Integer-like
f=0.5             # Float-like (used as string unless parsed)
b=true            # Boolean (convention only)
c='c'             # Single character (just a string)
s='str'           # String
arr=(1 2 3)       # Array (space-separated elements)
```

### IO Functions
```bash
arg1="$1" # Arg 0 is function name. Arg 1 is first passed arg
arg2="$2" # Quotes prevent it from being interpreted badly if there is weird input (script.sh my file.txt)
arg10="${10}" # Args > 9 need to be in curly brace

echo "Text out"   # Standard output
read -p "Input: " var  # Standard input with prompt
```

### Control Structure
- `[[ ]]` - Used for logical string checking, files, and regex
- `(( ))` - Used for arithmetic checking and C-like loops

```bash
# ---------- Basic use ----------
if [[-z "$1"]]; then # -z checks emptiness, -u checks not emptiness
	echo "arg 1 is empty"
else
    echo "arg 1 is: $1"
fi
#-z : True if the length of string is non-zero.
#-n : True if the length of string is non-zero.


# ---------- Regex match (only in [[ ]]) ----------
if [[ "$email" =~ ^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$ ]]; then
	echo "Valid email"
fi

# ---------- Numeric comparisons ----------
x=5
y=10
if (( x < y )); then
    echo "x is less than y"
fi

# ---------- File tests ----------
file="example.txt"

if [[ -e "$file" ]]; then
    echo "File exists"
fi

if [[ -f "$file" ]]; then
    echo "File is a regular file"
fi

if [[ -d "$file" ]]; then
    echo "File is a directory"
fi

if [[ -r "$file" && -w "$file" ]]; then
    echo "File is readable and writable"
fi

# ---------- Logical operators ----------
if [[ "$user" == "admin" || "$user" == "root" ]]; then
    echo "Privileged user"
fi

if [[ -n "$1" && "$1" == "run" ]]; then
    echo "Command: run"
fi


# Ternary-like expression (not native in bash, emulated)
[[ "$x" == "true" ]] && result="$y" || result="$z"
```

#### Regex
> Regex still BUILT in string. However, to evaluate:
> If it's in quotes, it's evaluated as a string. If it's not, it's used as regex.

| Purpose           | Pattern                                 | Example Match   |     |
| ----------------- | --------------------------------------- | --------------- | --- |
| Email             | `^[^@]+@[^@]+\.[a-z]{2,}$`              | `user@site.com` |     |
| Digits only       | `^[0-9]+$`                              | `123456`        |     |
| Alphanumeric      | `^[a-zA-Z0-9]+$`                        | `abc123`        |     |
| File extension    | `\.txt$`                                | `notes.txt`     |     |
| Starts with "foo" | `^foo`                                  | `foobar`        |     |
| Ends with ".log"  | `\.log$`                                | `sys.log`       |     |
| Match YES/NO<br>  | `^(yes\|no)$`<br>Pipe escaped for table | `yes`, `no`     |     |
```bash
if [[ "$input" =~ ^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$ ]]; then
... # evaluates directly, no need to build into var
regex='^[0-9]+$'
# BAD:  [[ "$input" =~ "$regex" ]]
# GOOD: [[ "$input" =~ $regex ]]  

# You can also regex a string directly
# Single vs. 
str="ABCDEF"
echo "${str/[A-Z]/_}"    # → _BCDEF
echo "${str//[A-Z]/_}"   # → ______
```


### Iterators 
```python
for ((i=0; i<10; i++)); do
	echo "$i"
done

while [[ $i -lt 10 ]]; do
	echo "$i"
	((i++))
done

for val in "${arr[@]}"; do
	echo "$val"
done

for i in {5..50..5}; do # Creating a "range" iterator.5-50 inclusive in steps of 5
    echo "Welcome $i"
done
```

### Functions and Methods
```python
# Function declaration
my_func() {
	echo "Hello $1"
}

# Call function
my_func "World"

# Anonymous functions don't exist in Bash; simulate with subshells
( echo "subshell" )

# Method-like behavior: string manipulation
name="John"
echo "${name,,}"  # lowercase
echo "${name^^}"  # uppercase
```

### File Operations
```python
# Reading a file line by line
while IFS= read -r line; do
    echo "$line"
done < "file.txt"

# Writing
echo "Hello world" > output.txt
echo "Append line" >> output.txt
```
### Hello World
```python
#!/usr/bin/env bash

main() {
	echo "Hello, World!"
}

main
```


