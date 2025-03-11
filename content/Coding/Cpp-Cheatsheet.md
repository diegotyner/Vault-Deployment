
Try learning this?
https://www.learncpp.com/


### Variables:

```cpp
int x = 5;
double y = 3.14;
char c = 'A';
bool isTrue = true;
```

---

### I/O:

```cpp
#include <iostream>
int a;
std::cin >> a;
std::cout << "The value of a is: " << a << std::endl;`
```
---

### Control Structure:

```cpp
if (x > 0) { }
else if { }

for (int i = 0; i < 10; ++i) { }

int i = 0;
while (i < 10) { ++i }
```

---

### Functions:

```cpp
int add(int a, int b) {
return a + b;
}
```

```cpp
int main() {
int result = add(2, 3);
std::cout << "Result: " << result << std::endl;
return 0;
} 
```

---

### Arrays and Vectors:

Array: `int arr[5] = {1, 2, 3, 4, 5};`

Vector: `std::vector<int> vec = {1, 2, 3, 4, 5};`

String: `std::string str = "Hello, World!";`

***Vector Methods:*** 

Append (push back): `vec.push_back(10);`

Pop (removes last): `vec.pop_back();`

Length/Size: `vec.size();` 

Nullity: `if (vec.empty()) { std::cout << "Vec empty" << std::endl;`

Clear: `vec.clear();`

Resize (discards end if needed, or inserting default): `vec.resize(5);`

At (has bounds checking) / operator[]: `vec.at(1) || vec[1];`

Front / Back: `vec.front() || vec.back();`

---

### Pointers and References:

### DSA

Set: `std::set<int> uniqueNumbers;`

Stack: `std::stack<int> stack;`

---