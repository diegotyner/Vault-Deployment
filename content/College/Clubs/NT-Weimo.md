---
created:
  - " 01-28-2026 00:31"
tags:
---

[Github link](https://github.com/Neurotech-Davis/Weimo)

### ToDo
Test VLM with fake client


### Eyetracking

Eyetracker demo ready, needs few things:
- Camera calibration, need to obtain the basic translation vector of lens
- Smarter 'smoothing'
- Better exposing output for other workers

### Multiprocessing

Big ideas: 

- Remember that each process owns its own internal state, and only has communication available through the exposed global state objects (covered below as data sharing options)
	- If improperly managed, this can create race conditions 

(will use `import multiprocessing as mp` for short)
1) Use multiprocessing to bypass pythons GIL
2) Sharing data options:
	- Value / Array - [docs](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Value):
		- `shared_data = mp.Value('i', 0)`
		- `with shared_data.get_lock(): cur = shared_data.value`
		- `if cur != last_seen : // ... handle`
		- Good for demos, can be problematic to scale up with (managing locks, atomic operations protected, otherwise need the lock)
	- Queue - [docs](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Queue):
		- `data_queue = mp.Queue()`
		- `sample = data_queue.get(timeout=0.1)`
		- If we run `Queue.get()` on a queue with no data, it raises a `queue.Empty` exception. Best way is to wrap in a try/except block and handle the errors as no new data instead
	- Pipe - [docs](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Pipe):
		- `pipe = mp.Pipe()`
		- Good for 1-1 communication, but our needs likely call for events
3) Declaring workers:
	- Main needs `if __name__ == "__main__":` otherwise it will recursively spawn itself
	- Declaration:
		- `p1 = mp.Process(target={func}, args=({func_arg_list}))`
	- Starting them:
		- `p1.start()`
	- Joining them (waiting for them to finish)
		- `p1.join()`
4) Graceful exits:
	- Provide a flag processes check `shutdown_flag`
		- `shutdown_flag = mp.Event()`
		- `while not shutdown_flag.is_set():`
		- `shutdown_flag.set()`


Sources:
- https://docs.python.org/3/library/multiprocessing.html
- https://docs.python.org/3/library/multiprocessing.shared_memory.html

### EEG Processing

Resources:
- https://www.nmr.mgh.harvard.edu/mne/0.14/tutorials.html
- https://mne.tools/stable/auto_tutorials/intro/index.html

