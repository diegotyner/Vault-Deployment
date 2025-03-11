---
created:
  - " 03-05-2025 21:13"
tags:
  - Classes
aliases:
---


Skipping the part where he reviews assessment

---

Going over [Multicycle 8-bit 1-bus machine - genericcpu.txt2.pdf](https://canvas.ucdavis.edu/courses/966323)
- A worksheet for design of a 1-bus CPU

operations will execute in A=A+B format, where one register is destination and source
A-type:
- Opcode: 7-4
- ds (destination & source): 3
- s: 2
- extra: 1-0
B-type:
- Opcode: 7-4
- ds: 3
- Immediate: 2-0
C-type:
- Opcode: 7-4
- Offset: 3-0

ALU functions:

| Op    | ALU1 | ALU0 |
| ----- | ---- | ---- |
| Add   | 1    | 1    |
| Or    | 1    | 0    |
| And   | 0    | 1    |
| Not A | 0    | 0    |

We never put bits 7-4 on the bus from the IR, because the OP code has no reason to be fed t


| Step | PCin  | PCout | IRin  | IRout | R0in | R0out | R1in | R1out | MDRin | MDRout | Zin   | Zout  | MARin | Xin   | # 1 out | ALU0  | ALU1  | Mread | Mwrite | Bus   | Offset |
| ---- | ----- | ----- | ----- | ----- | ---- | ----- | ---- | ----- | ----- | ------ | ----- | ----- | ----- | ----- | ------- | ----- | ----- | ----- | ------ | ----- | ------ |
| *0*  |       | **1** |       |       |      |       |      |       |       |        |       |       | **1** | **1** |         |       |       | **1** |        |       |        |
| *1*  |       |       |       |       |      |       |      |       |       |        | **1** |       |       |       | **1**   | **1** | **1** | **1** |        | **1** |        |
| *2*  | **1** |       |       |       |      |       |      |       |       |        |       | **1** |       |       |         |       |       | **1** |        |       |        |
| *3*  |       |       | **1** |       |      |       |      |       |       | **1**  |       |       |       |       |         |       |       |       |        |       |        |

### Instructions to fetch from memory
#### Step 1
![[ECS154A-D7 2025-03-05 21.42.15.excalidraw]]
- PC drives bus
- MAR reads from bus
- X reads from bus
- Memory does a read
#### Step 2
![[ECS154A-D7 2025-03-05 21.45.56.excalidraw]]
- The ALU adds
- Z grabs the result
- Keep doing memory read (haven't grabbed value yet
- \#1 drives bus



