---
created:
  - " 10-02-2025 13:58"
tags:
  - Classes/Lecture
aliases:
---

# 📗 ->  10/02/25: ECS140A-L3
---
[Lecture Slide Link](https://canvas.ucdavis.edu/courses/1010932/files/28631489?wrap=1)

## 🎤 Vocab



## ❗ Unit and Larger Context
Small summary




## ✒️ -> Scratch Notes
##### Scope Continued
*Syntax Blocks* = `{}`
*Lexcial Blocks*:
- Entire source code
- For each package
- For each ~~file~~, function
- Each loop, if, switch, select

Example of lexical blocks:
```
def main() {
	x := "hello!" // x defined locally as "hello!"
	for i := 0; i < len(x); i++ {
		x := x[i] // x redefined LOCALLY (previous def still exists) to char
		if x != "!" {
			x := x + "A" - "a" // previous x capitalized
			fmt.Printf("%c", x)
		}
	}
}
// OUTPUT: HELLO
```

#### Types
*Type* - set of values, together with a collection of operations on those values

In go - [docs](https://tour.golang.org/basics/11):
- bool
- string
- int, int8, int16, int32, int64
- uint, uint8, uint16, uint32, uint64, uintptr
- byte (alias for uint8)
- rune (alias for int32, represents a unicode)
- float32, float64
- complex64, complex128

As well as:
- Structs
- Pointers
- Arrays and slices
- Maps

##### Structs
```
type Vertex struct {
	x int
	y int
}
func main() {
	v := Vertex{} // or: = Vertex{x:1, y:2}
	v.x = -5
}
```

##### Pointers
```
// foo returns a pointer to a local variable
func foo() *int {
	var x int
	x = 2
	return &x
}

func main() {
	i, j := 42, 2701

	p := &i         // point to i
	fmt.Println(*p) // read i through the pointer
	*p = 21         // set i through the pointer
	fmt.Println(i)  // see the new value of i

	p = &j         // point to j
	*p = *p / 37   // divide j through the pointer
	fmt.Println(j) // see the new value of j

	p = foo()
	fmt.Println(*p)
}
/* OUTPUT:
42
21
73
2
*/ 
```

##### Arrays & Slices
```
func main() {
	var a [2]string
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a[0], a[1])
	fmt.Println(a)

	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)
}

---

func main() {
	primes := [6]int{2, 3, 5, 7, 11, 13}

	var s []int = primes[1:4] // Notice the difference in syntax
	fmt.Println(s)
}
```

##### Maps
```
// colors := make(map[string]int) // basic declaration
colors := map[string]int{"Red": 1, "Orange": 2} // initialized declaration
value, exists := colors["Blue"] // Safety check, exists is a bool
```

##### Interfaces
- An interface is an abstract type: it only defines a set of methods; nothing about the internal representation
- A type satisfies an interface if it possesses all the methods the interface requires
- The ability to replace one type for another that satisfies the same interface is called substitutability
[playground example](https://go.dev/play/p/J-0zOGsKzxT)

## 🧪 -> Refresh the Info
> Did you generally find the overall content understandable or compelling or relevant or not, and why, or which aspects of the reading were most novel or challenging for you and which aspects were most familiar or straightforward?)  
```

```

> Did a specific aspect of the reading raise questions for you or relate to other ideas and findings you’ve encountered, or are there other related issues you wish had been covered?)
```

```




## 🔗 -> Links
### Resources
- Put useful links here


### Connections
- Link all related words
