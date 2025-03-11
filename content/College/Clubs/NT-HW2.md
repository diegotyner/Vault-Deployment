
> What is the SOA of the following experiment? Stimulus would be defined as an X or an O (the "dot" is a center fixation point which is NOT a stimulus).
```
The Stimulus Onset Asynchrony is 1000
```


> You are recording EEG data and have just finished placing all electrodes, but you notice that all of your channels appear to be very noisy when you turn the amplifier on. Assuming you are scaled in relatively close (~200 microvolts in) and that there is nothing wrong with the recording environment (you can assume it is magnetically sound, no cables are missing, nothing wrong with the amplifier, etc.) what should be the first thing you suspect as the issue?
```
If all channels are showing high levels of noise and we know that the recording environment is sound, we should suspect our placement of the reference electrode. If the reference electrode picks up variable activity, it could introduce this activity as noise in our recordings.
```


> What are some examples of events you would make an event code for in an EEG experiment?
```
Examples of events you would make an event code for include the type of response (correct/incorrect/none), the type of stimuli presented (neutral/congruent/incongruent in the Stroop task for example), and other significant experimental events.
```


> P300 experiment ([excerpt from link](https://towardsdatascience.com/hacking-your-brain-with-openbci-and-psychopy-3c59b98e88ef))
> 
> Read the following. What is wrong with this design if we know we are trying to elicit a P300 response?
> 
> “The experimental design: two images of different spatial frequencies were used as stimuli. They were presented for 0.5s followed by an intertrial interval of 3s. A third condition (not shown) of just the background was used as a control condition. Each condition was presented for 50 times.
> 
> The design … involves showing different images at random order while recording brainwaves at the occipital and temporal areas. … Each image was repeated 50 times resulting in 150 image presentations (spatial frequencies of 3, 12 and no image). Each image was presented for half a second, followed by 3s inter-trial interval (ITI) in which a ‘+’ sign was presented.”
> 
> Hint: Refer back to your HW1 reading on the oddball paradigm
```
A P300 response is more associated with a stimulus being rare or unexpected than 'something that the subject cares about' as the author claims. Despite trying to elicit the P300, all the stimuli are presented 50 times each randomly, meaning they have roughly equal probability of being shown. Additionally, the design doesn't detail any reason for the participant to anticipate a particular stimulus, preventing this from factoring into the response as well. This would make it unlikely for the experiment to be able to create a P300 response in the participant.
```

> Read the example listed under "Literature Review" on the [Experimental Design Wiki](https://neurotechwiki.netlify.app/intro_to_exp_design/08-lit_review)
> 
> List two inclusions that you believe increase the specificity of their methods section (what did they do that was good). Also why are they, in particular, necessary for the design
```
1) The inclusion of the monitor size, viewing distance, and visual angle of objects are important inclusions, as they constitute an important element of the participants' perception of the visual objects. Making them strict parameters helps to ensure participants experience stimuli similarly and allows for data to be consistent and comparable, with the only variation between the participants being the object presented. 
2) The detailed inclusion of pre-trial and post-trial procedures are key in combating potential confounds. Particularly, the detailing of a practice trial that does not include the stimuli presented in the critical trials is important to avoid prematurely habituating the participant to the procedure. 
```


> Optional Extra Credit Question:

> Choose Your Own EEG Adventure!
> Find a reputable EEG paper (may be on any topic you find interesting!) Read through the abstract and methods section of the paper (read the whole paper if you are interested, though this question focuses on the aforementioned portions). Are there any potential sources of noise? Were there any aspects that left some ambiguity in the design? List up to three below. If there are none, focus on the positive of their experimental design, and list up to three aspects you think are important to reduce noise.
```
https://www.sciencedirect.com/science/article/pii/S1053811919309243 - "Predicting individual decision-making responses based on single-trial EEG".

There are a few possible sources of noise in the research paper:
1) The 2 group data acquisition set up. They have a Group A using a BrainAmp amplifier with electrodes FCz and AFz serving as the reference and ground, and a Group B using the ASA-Lab amplifier with electrodes CPz and AFz serving as reference and ground. The systematic differences between the two groups, with different ground electrodes and amplifiers could be a potential source of noise. 
2) They do not explicitly state their electrode placement or standard, making it difficult to reproduce their exact experimental setup. This could compound with the 2 group setup earlier, where there could have been systematic differences between the two groups.   

That being said, the paper is very interesting, and their classification performance is impressive (0.88 ± 0.09 for the first dataset, and 0.90 ± 0.10 for the second dataset). 
```