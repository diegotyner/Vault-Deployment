
> Q1) Provide binary search algorithm that takes a sorted list of strings and finds a specific string x. What is the runtime of your algorithm?
```python
def BS(array, target) {
	low = 0
	high = len(array-1)
	while low <= high { O(logn)
		mid = low + (high - low)//2
		# Since this is pseudocode, I'll use pythons string comparisons. Slight inneficiency with 2 comparisons instead of 1, but its the same big-O. 
		if x == array[mid]: // O(k)
			return mid
		elif x < array[mid]: // O(k)
			low = mid + 1
		else: 
			high = mid - 1
	return -1
	}
}
```
The runtime of the above code is O(klogn), where k is the length of the longest string. 


> Q2) What is the runtime of an algorithm that sorts n strings?

The runtime would be O(knlogn) where k is the longest string. This is because it take O(k) worst case to compare two strings of length k equal until the last character, and it takes O(nlogn) time to sort an array aside from the string comparisons. 



> Q3) Given two integers x, y such that the x, and y are n digits long each, for example if 202 is 3 digits long. Provide a divide and conquer algorithm based on the idea...
> Xl, Xr = X[1...n/2], X[n/2+1...n], X * Y = (Xl * 10^{n/2} + Xr)(Yl * 10^{n/2} + Yr)
```python
def Mult(X,Y) {
	if X<10 or Y<10: # Base case
		return X*Y

	X = str(X)
	Y = str(Y)
	n = max(len(X), len(Y)) #O(1)

	# Make sure they are of equal length
	X = PadLeft(X, n, '0') # PadLeft(string, length, pad_char)
	Y = PadLeft(Y, n, '0')

	Xl, Xr = X[1...n/2], X[n/2+1...n] #O(n)
	Yl, Yr = Y[1...n/2], Y[n/2+1...n] #O(n) 	
		
	A = Mult(Xl, Yl) //T(n/2)    
	B = Mult(Xr, Yr) //T(n/2)
	C = Mult(int(Xl) + int(Xr), int(Yl) + int(Yr))

	D = C - A - B
	return A*(10**(n//2)) + C + B*(10**(n//2))
}
```


> Q4) Suppose that instead of always selecting the first activity to finish, we instead select the last activity to start that is compatible with all previously selected activities. Describe how this approach is a greedy algorithm, and prove that it yields an optima solution

A greedy algorithm will select a locally optimal option in the present building up to a global optimal solution by the end. This algorithm is a greedy algorithm, as it will iteratively select the best present option (the last to start), building towards a maximal set of events. 

Proof:
We will compare an Optimal Solution, and the solution that our algorithm leads to. An optimal solution (Opt) is defined as one where the magnitude of the set of nonconflicting set is maximized. Our algorithm will work towards a solution A, where it always selects the event with the latest start time. 
The optimal solution is valid, and follows the form $Opt = {O_1, \dots, O_n}, S_{O_1} \leq \dots \leq S_{O_n}$.
Our algorithm will construct a set B, by finding the maximal start time. As the start time is maximal, we now that B will select an event $O$ with a start time greater than or equal to the one in $Opt$, $a\in B, S_{a} \geq S_{O_n}$. Following this in the next round of selection, B will select the next candidate, which is guaranteed to have a start time greater than or equal to $O_{n-1}$. This will continue iteratively, until a set equal to the magnitude of the optimal solution is constructed.



> Q5) Not just any greedy approach to the activity-selection problem produces a maximum size set of mutually compatible activities. Give an example to show that the approach of selecting the activity of least duration from among those that are compatible with previously selecting does not work. Do the same for the approaches of always selecting the compatible activity that overlaps the fewest other remaining activities and always selecting the compatible remaining activity with the earliest start time. 

One counter example of any algorithm showing it leading to an suboptimal solution is enough to prove it doesn't always lead to a maximal solution

1) "The approach of selecting the activity of least duration from among those that are compatible with previously selecting the compatible activity that overlaps the fewest other remaining activities"
	- The set of activities could have 2 long activities and 1 short activities, and it could 'plug up' space
![[ECS122A-HW3 2024-10-30 19.59.41.excalidraw]]

2) Select the compatible activity that overlaps the fewest other remaining activities
	- It can overlook an event inside the optimal solution set because it overlaps with other events
![[ECS122A-HW3 2024-10-30 23.04.02.excalidraw]]

3) Always selecting the compatible remaining activity with the earliest start time
	- There could be an event that starts the earliest, but lasts the whole time
![[ECS122A-HW3 2024-10-30 20.05.43.excalidraw]]