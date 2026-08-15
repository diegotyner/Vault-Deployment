---
created:
  - " 07-13-2026 23:04"
tags:
  - Project
aliases:
---

---
## Dataview:
```dataview
list from [[]] and !outgoing([[]])
```
---


## 🎟 Features
### Existing

### Todo


## 🧾 Project Description

### Blurt
Problem statement is I don't want to have to take out my phone to skip songs. It can be distracting and takes me out of deep work / can be fatfingered. I think it would be cool to have physical buttons to accomplish this. I'm envisioning this as a two part project:
- Part 1: Larger profile - A stationary display for it when im working at home and don't want distractions. Displays stuff like song name and artist, potentially cover?
- Part 2: Small profile - A portable brick that lets me skip songs on the go. 

This isn't a "hard" project per say, but I want to do it right and that can be tricky.
- 3d printing a good enclosuer
- Learning to sauter components
- Ordering the right components for the job (getting a good screen, battery, etc)
- I think it would be cool to print a PCB too!

#### Components
##### Desktop

| Component          | Details               | Qty | Price |
| ------------------ | --------------------- | --- | ----- |
| ESP32              | Bluetooth Classic     | 1   | 8     |
| 3.5" SPI TFT LCD   |                       | 1   | 15    |
| Rotary encoder     | ?                     | 1   | 2     |
| Tactile buttons    | skipping/playing      | 3   | 1     |
| resistors          | pullups for buttons   | 5   |       |
| capacitors         | noise filtering power | 4   |       |
| Micro-USB breakout |                       | 1   | 2     |
| Perfboard          | final                 | 1   | 2     |
| Dupont wires       | prototyping           | 1   | 3     |

##### Portable

| Component       | Details                        | Qty | Price |
| --------------- | ------------------------------ | --- | ----- |
| XIAO ESP32-C6   | BLE HID, onboard charging      | 1   | 8     |
| LiPo battery    |                                | 1   | 6     |
| Tactile buttons | skipping/playing               | 3   | 1     |
| LED indicators  | connection status              | 1   | 1     |
| resistors       | pullups for buttons            | 5   |       |
| capacitors      | noise filtering power          | 4   |       |
| LiPo JST cable  | if battery connector isnt XIOA | 1   | 1     |

### Official


## 📂 Project Logs 


## 🔗 -> Links
### Resources
##### Desktop

##### Portable
Smaller ESP32 with built in rechargeable battery, USBC ($5.20 + $5.24 shipping) - [link](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)

Small round display? ($18 + ship) - [link](https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html)