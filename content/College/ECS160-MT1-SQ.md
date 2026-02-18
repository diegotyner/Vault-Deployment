---
created:
  - " 02-08-2026 21:45"
tags:
---


### Sample Questions
#### Design Patterns
##### 1
Which design pattern should be applicable here? I want to implement a WebServer class. There should be exactly 3 webservers in a system at the most (let’s call them larry, moe, and curly); there should never be more than 3, and it shouldn’t be possible for programmers to accidentally create more than 3. These servers will be created only when needed. i.e., if no requests arrive, no webservers will be created; all 3 servers will exist only after the first 3 requests have arrived. Explain how you would design this system.

##### 2
You are developing software to support the automated feeding and watering of expensive flowering/fruiting Chocolate Truffle Persimmon plants at a computer-controlled greenhouse. These plants (depending on the season, and time of day) are in different biological conditions: dormant, growing, flowering, fruiting, and seeded. Depending on the condition, (don’t worry about how you know this, just assume you know) they will need to be watered differently, and fed different things. Do the wrong thing at the wrong time, they’re dead. A separate timing mechanism (not your responsibility) periodically (say twice a day) issues requests to feed, and water, the plants. Your system should do the right thing, depending on the biological conditions of the plants. Which pattern would you use ?

##### 3
You are designing a web server. The web server has a Connection Manager. All connections to this web server are handled by this ConnectionManager class. The ConnectionManager class creates and manages objects of type Connection and must
support the following API -
1) Connection connect); // returns a Connection object
2) String read(Connection c); // Tries to read the Connection object and return a String
3) void write(Connection c, String msg); // Tries to write msg to the Connection c
4) void close(Connection c); // Closes the Connection c

Similarly, the Connection class provides the following API -
1) void connect);
2) String read();
3) void write (String msg);
4) void close();

The connection can be in one of the following states -
1) INITED
2) CONNECTED
3) CLOSED

Not all operations are valid for all states. The valid operations and state transitions are
provided in the following state transition graph. All other operations should print an error
message on the terminal.
INTED -> CONNECTED -> CLOSED 
- Connected to self: read() / write()

The ConnectionManager must also ensure that no more than 1000 active (non-closed)
connections exist at any time. Design the ConnectionManager and Connection classes, keeping in mind that you might have to modify the Connection class to support more states later. Note that you might have to tweak one or more design patterns to achieve what you want. First, clearly specify which design pattern/s you are using in 1-2 sentences. Then, provide the pseudo-code for the system.



