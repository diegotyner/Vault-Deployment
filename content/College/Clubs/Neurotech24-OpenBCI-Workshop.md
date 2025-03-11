

### Goal is to record clean signals


### BCI Components
- Signal acquisition
- Signal processing
- Control signal
- Feedback
- Signal acquisition

Focusing more on signal acquisition...

### Collecting Clean Neural Signals
#### Causes of bad recordings
- Muscle movements
- Other devices
	- 60 Hz
- Sweaty scalps
	- Oils and water
	- Vanderwal forces?

- Line noise
- ground loop noise
- Electromagnetic interference (EMI)
- Signal processing noise
	- Quantization noise
- Mechanical
	- temp
	- Movement
- Human
- etc...

#### Reducing noise
- Reduce as many sources of 60 Hz line noise
- Capacity coupling
	- Transfer of electric energy between two insulator-separated conductors
- Signal filters
	- Bandpass
	- 60 Hz Notch Filter
When you filter...... attenuate the signal?

#### Quality of a neural signal
Generally observed from the power spectrogram
- Fast Fourier Transform (FFT)
- If there are big spikes, means there are artifacts

### Cyton Boards
1) Dongle
2) Board
3) Wires

#### Dongle
Bluetooth connector
Make sure switch is on GPIO option
Dongle should light up if powered

#### Acquisition Device
Power on, make sure its on PC mode
Power source on backside

*Bais* (subject ground)
- 
*N1P - N8P* (electrode signal inputs)
*SRB* (subject reference)
- Used to cancel noise not originating from the brain
##### Setup
1) Plug in battery pack to the power source (blue light on)
2) Power on (PC mode)
3) Attach all electrode DuPont ends from...
   - SRB -> N1P - N8P -> Bias
   - two layers?
Put reference (SRB) on *earlobe*
- Just cartilledge, not a lot of activity
Put bias ground on *mastoid*
- Could be earlobe too, but mastoid is canonical
Other 8 can go anywhere else according to the 10-20

> Weaver Nuprep and Ten20 Application for EEG Electrodes
> Yt vid

Download OpenBCI Software
- OpenBCI GUI
- Documentation / Tutorial
- Many options for interfacing
	- OpenVibe
	- Matlab
	- Python

