
> [!tip] Might want to...
> change all code box type to desired language

### 🔗 Online Resources / Samples
- https://v2.tauri.app/assets/learn/community/HTML_CSS_JavaScript_and_Rust_for_Beginners_A_Guide_to_Application_Development_with_Tauri.pdf
	- Page 203 on

### Philosophy
Rust tries to stay extremely strict. By default variables are immutable. This helps prevent bugs, and enables better concurrency.

### Data Types
```rust
let x = 5; // immutable
let mut y = 10; // mutable

// Rust provides a shit ton of data types
let age: u8 = 25;
let count: i32 = -10;
let pi:f32 = 3.14;
let gravity: f64 = 9.8;
```
#### More types:
- *i8* : Signed 8-bit integer (-128 to 127) 
- *u16* : Unsigned 16-bit integer (0 to 65,535) 
- *i32* : Signed 32-bit integer (-2,147,483,648 to 2,147,483,647)
- *f32*:
- *f64*:

### IO Functions
```python
__ ex = input("enter val")
print("You inputted: ", ex)
```

### Control Structure
```python
if (true) {
	print(true)
} else {
	print(false)
}
x = y if true else z
```

### Iterators 
```python
for (int i = 0; i < 10; i++) {}
while (i < 10) {}
for val in iterable:
```

### Functions and Methods
```python
def func(param1, param2):
	return param1 + param2

# Lambda/anonymous functions
square = lambda x: x*x


# Method calling syntax
object.method()
```

### File Operations
```python
# Reading
with open("file.txt", "r") as file:
    content = file.read()

# Writing
with open("output.txt", "w") as file:
    file.write("Hello world")
```
### Hello World
```python
#optional
def main():
	print("hello")

#optional
if __name__ == '__main__':
	main()

```
---
```cpp
int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
}
```


### Data Structures and their methods
#### List / Vector 
An array data structure with an O(1) append
```python
list = []
list.append(1)
list.append(2)
list.pop(2)
len(list)
list.map
sort(list)
```

#### Stack
A data structure with an O(1) append and pop
- For many languages its just a vector
#### Queue
A FIFO data structure. O(1) append and O(1) pop front
#### Hash Table
A key-value data structure. O(1) lookup. Known as dict or map usually.
##### Is there a dedicated set type?
#### Heap
priority queue
#### Linked List
#### Binary Tree




### Classes & OOP:
```python
class MyClass:
    # Class variable
    class_var = "I'm shared"
    
    # Constructor
    def __init__(self, param):
        # Instance variable
        self.instance_var = param
    
    # Method
    def my_method(self):
        return self.instance_var
        
# Inheritance
class Child(Parent):
    pass
```
### Error Handling
```python
try:
    risky_operation() # code that might raise an exception
except ExceptionType as e:
    print(f"Error occurred: {e}") # handle specific exception
finally:
    cleanup() # code that runs regardless of exception
```

### Libraries
#### Importing
##### How to manage packages
How do I install new ones?
Are there tools to doing it neatly?

##### Importing in code
```python
# Libraries
import os
from os import *

# Modules
from ./utils/mod import database_methods
```

#### Critical Libraries:
JSON handling
Timing 
File management
Requesting APIs

### Concurrency

### Command Line Arguments
```python
import sys
args = sys.argv
```