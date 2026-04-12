---
created:
  - " 04-11-2026 19:15"
tags:
---

[Docs Website](https://support.wearablesensing.com/help/tutorials/index.html)

##### Setup
There's a video on the website, but the support call is probably more comprehensive - [link](https://docs.google.com/document/d/1gENzW0g84DXVtCJhRps7wHXWnYlkPNhn9owHwuCLhLo/edit?usp=drive_web&ouid=110160442732273764456)
##### Software
Can select headset or file. *this could be helpful for testing*

On top right, there is a diagnostic checkbox. Can check it to monitor: Impedence | Noise | Baseline : levels on each sensor
- Sensor will be green if impedance is less than 1 (0.1-1 M$\Omega$)
- Noise: Should be: <20 $\mu$V, not >100
- Baseline: < +/- 5000 $\mu$V, not more (>)
- Click reset button to see where signals settle after changes

More features too:
- Scaling / Filtering / ...

##### Signal
The procedure he gives for ensuring good signal:
1) Start with doing signal diagnostics and checking that the values are within the ones above. Click reset after you think things are fixed, and ensure signal settles within bounds.
2) Eyes open test - Just check if signal is clean when subject isnt moving 
3) Blink test - Subject blinks rapidly. Check that signal can recover from artifacts
4) Clench test - Subject clenches jaw. Check that EMG clenches are picked up
5) Eyes closed - Subject closes eyes and relaxes. Check for alpha activity on posterior channels (Pz for instance). Can be low, but recommended to check
6) Common mode - Testing artifact filtering?
	1) Open montage tab, unclick headset default montage, add additional plot and scroll until the bonus plot is shown (X1). Click it and change first reference to CM (can also change color). Its a visual representation of the electrical signal common on the body. When someone walks or taps foot, it should be picked up. Have subject tap foot, see that its picked up on CM but doesnt effect general EEG. 
		1) There's also something about turning off LP filter, and seeing high freq artifacts.Should be noisy until impedance driver is turned off (Impedance ON button in diagnostics tab)
	2) Undo by turning on headset default montage or just removing the extra plot

Example artifacts: 
1) EOG - Can help by asking participants to focus eyes on one point. Can remove w third party libraries.
2) EMG - Can help remove by asking participant to yawn and release tension in face. Also have artifacts from neck tension (will be present in O channels), ask to sit straight. Can also have EMG artifacts from forehead band being too tight, readjust to combat.
3) Motion - Make sure the headset/elastic is tightened. Motion artifacts are mitigated. 
4) Sweat - Begin with small "pop spikes", and gradually get worse. 
5) Cardioballistic - Noise from blood vessels? Shift electrode off blood vessel. 

[Signal FAQ Page](https://support.wearablesensing.com/faq/software/questions/signal-quality-dsi-streamer.html)
##### Timing and Design
[page](https://support.wearablesensing.com/help/tutorials/learning/triggers.html)
Read about:
- Software Triggers
- Real-Time Use: BCI and Game Development
Resources:
- [Triggers and Timing FAQ](https://support.wearablesensing.com/faq/triggers/index.html) — Supported trigger types and device specs
- [Software Triggers (PsychoPy)](https://support.wearablesensing.com/examples/psychopy/software.html) — Send LSL markers from a stimulus application
- [MNE-LSL Epoching](https://support.wearablesensing.com/examples/mne/lsl/processing/epochs.html) — Epoch continuous data around event markers
- [Best Practices & Tooling](https://support.wearablesensing.com/examples/game-vr/best-practices.html) — Real-time pipeline architecture