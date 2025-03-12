

### 4 Outcomes:
#### Read:
**Hit:**
This happens when:
- Write signal is 0
- Address Entry == Cache line
- Address TAG == Cache TAG
We need to: 
- Return old cache data to out

**Miss:**
This happens when:
- Write signal is 0
- Address Entry != Cache line *or* Address TAG != Cache TAG
We need to:
- Update the Cache line data
	- Update valid bit to 1
	- Set dirty bit to 0
	- Put tag in
	- Put data into cache at appropriate line
- Return new cached data out
#### Write
**Hit:**
This happens when: 
- Write signal is 1
- Address Entry == Cache line
- Address TAG == Cache TAG
We need to: 
- Store CPU data in that cache line
- Mark dirty bit as 1
- Return new cached data out

**Miss:**
This happens when:
- Write signal is 1
- Address Entry != Cache line *or* Address TAG != Cache TAG
We need to:
- Do nothing! 
	- In real cache we would do either a write-back or write-through
- Do we have to set dirty bit to zero?
- What about the data?

### Roles:
**Metadata registers:**
- Seemingly, we only update on *read miss* (update with new data), and *write hit* (flip dirty bit)

**Data registers:**
- Again, we're only updating on *read miss* and *write hit*

