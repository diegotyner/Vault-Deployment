
> [!tip] Might want to...
> change all code box type to desired language


##### Related
- [[sed-Cheatsheet]] - Good for stream manipulation, quick regex editing
- [[awk-Cheatsheet]] - Good for tabled data

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


