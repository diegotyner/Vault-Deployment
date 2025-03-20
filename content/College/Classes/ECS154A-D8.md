

### Filling in prior to final, won't be comprehensive
[[Cache|Caching]]

You can exploit spatial locality by taking advantage of the idea of a line and line size


Additionally:
- Line Size - These are how much storage space is allocated for each row of the cache. This is essentially how wide the data in a row is.
	- With more nuance, its the amount of data in a row attributed to a tag. An address split TTEEOOO (for this example specifically XXXY Y010) means that it will bring in XXY Y000 through XXY Y111 because they are all associated with the same tag XX and entry YY.
	- 8 bytes of line size means 8 different bytes of memory are brought in.

> more info in main [[Cache]] page

Addresses are parsed left to right.


Cache: Size=32 bytes, LS=8
> - When we talk about size of cache, its always the size of the data elements stored
> 	- Does not include metadata, like tag, dirty bits, etc.
> 	- Actual storage size will ALWAYS be higher than the number given
- For 8 bit address:
	- TTTE EOOO
- Then, when we're given an address to find in cache:
	1) Go to entry number row
	2) See if tag matches
		1) If it does, go to the correct offset (IE 101 -> 5th data column) and retrieve data
	3) If step 2 does not lead to a match, then we have a miss.

5-way SA Cache with 80 bytes, and LS=2
- For 8 bit address:
	- TTTTTEEEO
		- Offset clearly 1
		- LS * # way = Size of set
			- 2 * 5 = 10 bytes in set
			- Cache size / size of set = # of sets
			- 80 / 10 = 8
		- log2(8) = 3
		- Rest is tag


> That was all covering reads, but now we are moving onto WRITES

When you write to memory, you assume that the memory location has been updated. However, with an intermediary cache you might 'write' to a cache value without actually updating memory.
To help manage this, we use a *dirty bit*, to indicate that only the cache value has been updated, and not the actually memory that was intended to be written to.

What happens on write in the cache?
- Write back, don't write directly to memory but manage writing in the cache. Needs a dirty bit to track. 
	- Faster, but more complicated.
- Write through, directly write to memory.
	- Slower, but simpler. No dirty bit.

*Cache Coherence* - The consistency and synchronization of data stored in different caches. Becomes an issue when attempting to manage things separately, like keeping mutable data in the cache and old data in memory with write-back schemes.

What happens on...
- Cache hit
- Cache miss
	- Allocate on write - Go get it
	- No-allocate on write - Don't go get it. 

Independent:
- If doing write back cache, probably do a write on cache
- If doing a write through, might say don't bother, do no allocate


Fundamental cache questions: (block=line)
- Block placement
	- Where in the cache? (what type of cache?)
	- Where to put it
- Block replacement
	- Which block gets replaced on a miss?
		- LRU, MRU, Random, etc.
- Write strategy
	- What happens on a write?
	- Hard: Why is write longer than read?
		- Writes change the state of the machine, and we can't do that unless we're SURE we're allowed to. Therefore, there's optimizations we can't make (parallelism)
- Cache type: Unified vs. Split
	- Unified - everything in there
		- Less costly, more efficient, however: less bandwidth
	- Split - one cache storing data elements, another storing instruction
		- Other ways to split too! Temporal, local, or other.
		- More bandwidth
- Miss ratio:
	- Not all informative, we want Average Memory Access Time: AMAT
	- AMAT = time for hit + miss rate * miss penalty 

Assume 22 bit address, 320 byte FA cache. Line size=2. 
- Last bit is offset, the other 21 bits are the tag.

Assume 12 bit address, 256 byte DM cache. LS=4.
- Offset = 2
- Entry = log2(256/4=64)=6
- 4 bit tag





