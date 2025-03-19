

A structure to store frequently used data. Faster access time than memory, but less storage

Takes advantage of the locality principles:
- Spatial Locality: Values needed often grouped together
- Temporal Locality: The same values often needed more than once

They'll have a replacement scheme: 
- LRU
- MRU
- FIFO
- Random
- Etc.

### Direct Mapped Cache
Direct Mapped Caches: Map a block of memory to one cache line
- They do this be designating a certain portion of the address bits to be index bits, determining which line of the cache they get put in.
![[Direct-Mapped-Cache-Example-Diagram.png|400]]
- Notice the bits determining what line it gets put it 
	- It jumps by 4 because the last 2 bits would be offset bits, but are not being used for the diagram

- Address bits will be split up as follows:
	- Tag Bits | Entry Bits | Offset Bits
	- Offset is the easiest to calculate: it log2(Line Size)
	- Entry bits are the number of lines in the cache. This can be calculate by finding: cache size / line size. Then log2(num lines) gives number of entry bits
		- log2(cache size / lines size)
	- The rest are tag bits

### Associative Cache
Associative Caches are named after associative arrays, where you search by value in parallel. Imagine searching a database by index, or using a hashmap.

They use the addresses tag as the index/key, and map to the data. 
- Address split up as follows
	- Tag Bits | Offset Bits
		- Offset calculated as usual, log2(line size)


### Set Associative Cache
This is a hybrid approach, using multiple 'small' associative caches, and using index bits to determine which cache to map into

![[Set-Associative-Cache-lllustration.png|400]]
- Notice how they are not mapping to the same exact line as the direct mapped cache, but to the same 'set'.
- In the name \#-way set associative cache, the # is describing how many lines are in a set, not have many sets there are. 

Address bits are broken up as follows:
- 
	- Tag Bits | Set Index Bits | Offset Bits
		- Offset calculated as usual, log2(line size)
		- Set index is a bit more complex, number of sets can be calculated from the equation:
			- set size = line size * how many lines in a set (the # associative)
			- \# sets = cache size / set size

