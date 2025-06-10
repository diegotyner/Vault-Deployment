---
created:
  - " 06-07-2025 17:23"
tags:
---


### Week 1 - Intro & Techniques
> // Review Slides:
> Measuring Neural Activity
> - Invasive
> 	- Extracellular Recording
> 		- Single-unit 
> 		- LFPs
> 		- Multiple contacts electrode
> 		- Multiple electrode array
> 	- Intracellular recording
> 	- iEEG
> 	- Optical Imaging (intrinsic signal optical imaging, VSD, CaSD)
> - Non-invasive
> 	- EEG, MEG, fMRI
> Manipulating neuronal activity
> - Inactivation
> 	- Lesions
> 		- Patients with lesions
> 		- Experimental lesions
> 	- Reversible inactivation
> 		- Muscimol injection
> 		- Cooling
> 	- Optogenetic stimulation
> - Activation
> 	- Microstimulation
> 	- Optogenetic stimulation

##### Intro:
- Systems Neuroscience at different Levels
- Systems Approach
#### Techniques:
![[Comparisons-Between-Neuroimaging-Techniques-1.png|400]]
![[Comparisons-Between-Neuroimaging-Techniques-2.png|400]]

##### Invasive
*Extracellular Recordings* - Electrodes with a metal core recording from neural tissue. Only the sharp tip exposed, voltage between electrode and reference measured. 
*Single Unit Recording* - Electrode tip placed close enough to measure from a individual neuron. Strength of recording depends on:
- Distance from soma
- Size of neuron
- Subject to sampling bias (excitatory bigger for example, and recordings more biased to sample bigger spikes)
- Can be used to build Raster plots and PSTHs
*Local Field Potentials* - Aggregations of neural activity (on scale of several hundred microns). Difficult to interpret.
*Multi Contact Electrodes*
- Tetrodes / Multi contact rod - Multiple contacts help to seperate signals from multiple neurons
- Neuropixels probe (1,000 contacts)
*Multi Electrode Arrays*
- Utah array
*Intracellular* - Records INSIDE membrane. Can record subthreshold EPSPs and IPSPs.
- Very difficult to do
*iEEG / ECoG* - EEG directly on cortical surface
- Simulatenous recording of LFP-like signals
*Optical Imaging* - Use a camera to see how brain changes with certain dyes.
- Voltage sensitive (VSD) / Calcium sensitive (CaSD)

##### Non-invasive
*EEG* - duh
*MEG* - 
*fMRI* - 

#### Manipulation
##### Quick Summary
-  Inactivation 
	-  Lesions patients with lesions experimental lesions 
	-  Reversible inactivation Muscimol injection Cooling 
	-  Optogenetic stimulation 
-  Activation 
	-  Microstimulation 
	-  Optogenetic stimulation
##### Techniques 
*Lesions*
*Reversible Inactivation*

*Microstimulation* - Stimulate a small area with a extracellular electrode.
- around scale of a few hundred microns
- Acts fast (can cause stim within 5ms)
- to have a predictable effects needs to be applied in an area of similar neurons (so that effects are predictable)
*Optogenetic* - Introduce light dependent molecules into cell membrane to depolarize or hyperpolarize the neuron
- Specific cells can be targeted 

### Week 2 - Neural Codes
> // Review Slides:
> - Single neuron rate code
> - Population rate code (place code vs value code)
> 	- Noise correlation, signal correlation
> 	- Information theory (entropy, mutual information)
> - Single neuron timing code
> - Temporal population code
> - Generating population response (spike generator, Poisson process)
> - Reading out population response (population vector decoder, maximum likelihood decorder)
> - Entropy and mutual information


### Week 3-6 - Sensory Systems
> // Review Slides:
> Visual System
> - Visual sensory epithelium: Retina (Rod, Cone, center-surround RFs)
> - LGN (retinotopic maps)
> - V1 (simple, complex cells, depth perception-disparity, RF mapping)
> 	- Retinotopic map, oriental preference map, ocular dominance map
> - Visual processing beyond V1
> 	- Ventral pathway (V2: illusory contour, border ownership; V4: color consistency; IT: object recognition)
> 	- Dorsal pathway (motion processing, MT, MST)
> 
> Auditory System
> - Auditory sensory epithelium: organ of Corti
> - Cochlea (cochlear hair cells, frequency tuning)
> - Sound localization: superior olivary nuclei, ITD, ILD
> - A1
> 	- Tonotopic map
> 	- Spatial tuning (horizontal location)
> 	- Synchronized code: low frequency & rate code: high frequency
> - Cortical analysis of complex sound
> 
> Sensory Systems - Feedback, predictive coding, anticipating sensory consequences of own actions
> - Predictive coding
> - Anticipating sensory consequences of own actions
> 	- Re-afference vs "efference copy" / "corollary discharge"
> 	- Neural activity in sensory areas affected by predicted sensory consequences of actions (e.g. V1, MST)

### Week 6-8 - Motor Systems
> // Review Slides:
> Oculomotor System
> - Purpose of eye movements
> - Six types of eye movements
> 	- Saccade, pursuit, VOR, optokietic movements, vergence, fixation
> - Eye rotation and extraocular muscles
> - Brain stem nuclei (oculomotor integrator circuitry)
> - Superior colliculus
> - Saccade generation (SC, FEF)
> - Smooth pursuit
> - VOR
> 
> Skeletal Motor System
> - Skeletal motor system
> 	- Motor unit
> 	- Spinal reflexes
> 		- Properties
> 		- Types of reflex (e.g. withdrawal reflex; stretch reflex)
> 		- Reflex vs. voluntary movements
> 	- Descending pathways
> 	- Cortical movement control
> 		- Cortical movement control areas (cortical spinal connections)
> 		- M1 organization
> 		- Functions of M1:
> 			- Encode movement parameters
> 			- Optimal feedback control theory
> 			- Graziano experiment: map of behaviorally relevant postures
> 		- Functions of PM, SMA
> 		- Optimal motor control theory

#### Motor 1: Motor Systems Intro
#### Motor 2: Oculomotor System
##### 6 Types of Eye Movements:
Conjugate vs. Disconjugate:
- Conjugate: Relies on eyes agreeing, working together to compile info
- Disconjugate: Seperate, relying on disparities in retinal position etc.

1) Saccade (conjugate): fast motion to get objects of interest into fovea
	- No visual feedback during motion
	- reflexive, automatic response to visuals
2) Smooth Pursuit (conjugate) - Stabilize a moving object in fovea
	- Driven by moving stimulus 
3) VOR (vestibulo-ocular reflex; conjugate) - Stabilize still image while head is moving quickly
	- Driven by vestibular input
4) Optokinetic movements (conjugate) - Stabilize still image while head is moving slowly
	- Driven by vestibular input
5) Vergence (disconjugate) - Align images of near/far objects in both images
	- 3 systems?? accomodation, vergence, pupillary constriction
		- Not explained in slides, but:
		- Motor systems to control how light hits your eyes retinas
	- driven by retinal disparity
6) Fixation - Keep eyes on an object
	- Active suppression of unwanted eye movements

##### Brain Stem Nuclei
![[Brain-Stem-Nuclei-Involved-in-Eye-Movement-Control.png|400]]

##### Saccade Generation
![[Major-Pathways-Saccade-Generation.png|400]]
*Major Players*
1) Targets Selected: PPC (LIP), SEF, FEF 
2) Cortical -> Motor: SC, SNPR, CN
3) Motor -> Muscle: MG/PPRF
SC and FEF are the only areas that can send signals to the muscles. With them BOTH lesioned, saccades will disappear.

##### Horizontal Saccades
![[Brain-Stem-Circuit-Horizontal-Saccades.png|300]]
##### Summary of Players:
- Eye: Final target, makes the saccades
- OM (oculomotor nucleus)
	- Excites inner eye muscle (medial rectus)
	- medial rectus moro neuron
- NOR (nucleus of the dorsal raphe):
	- Omnipause neuron
	- Holds eye position stead 
- PPRF (paramedian pontine reticular formation):
	- long-lead + excitatory burst neurons
	- Inhibitory signal 
	- Inhibitory signal to contralateral AN motor neurons
	- Excitatory to ipsilateral AN
- AN (abducens nucleus)
	- motor neurons activate ipsi eye's lateral rectus
	- interneuron which excites medial rectus motor neuron
- MVN (medial vestibular nucleus)
- NPH (nucleus prepositus hypoglossi)
	- Tonic neuron: keeps eye in same position



- The eye receives input from: 
	- Abducens Nucleus (AN) (excites outside)
	- Oculomotor (OM) nucleus (excites inside)
- OM only receives input from AN
- AN receives input from:
	- Paramedian Pontine Reticular Formation (PPRF)
	- Medial Vestibular nucleus (MVN)
	- 
- NPH are inhibitory 

![[NPB163-Final-Prep 2025-06-07 18.32.20.excalidraw]]



##### Integrator Problem
Need to maintain current level of activity in order to maintain activity
- + recurrent excitation helps to MAINTAIN activity (keep at 50%)
- - mutual inhibition helps to COORDINATE activity (keep both sides in stride)

##### Smooth Pursuit
![[Pathways-for-Smooth-Pursuit.png|500]]
- Process Motion: FEF, MT/MST, GP
- Comp Vel: Cerebellum (flocculus and vernis)
- Signal -> Motor: DPN, Vestibular nuc
##### VOR - Vestibulo Ocular Reflex
![[Vestibulo-Oculo-Reflex-VOR-Pathway.png|400]]
![[NPB163-Final-Prep 2025-06-07 19.14.45.excalidraw]]
*Major Players*

VOR:
- Built for very small delay: endolymph -> VN -> motor pathway
- fast rational acceleration only

> small tracking handled by the optokinetic pathway
> - "responds to very slow motion, but builds up slowly"

VOR & optokinetic both stabilize an image while the head is moving
- VOR: fast motion -> small/little delay
- Optokinetic: slow motion -> large time to build up


#### Motor 3: Skeletal Motor System 1


#### Motor 4: Skeletal Motor System 2



### Week 8 - Cerebellum
> // Review slides
> Cerebellum
> - Anatomy and functional division
> - Anatomical structure of cerebellar cortex
> - Cerebellar plasticity
> - Overall roles of cerebellum
> 	- Motor control: feedforward vs feedback controller
> 	- Sensorimotor learning
> 	- Timing
> 	- Examples: eyeblink conditioning, saccade adaptation

### Week 9 - Basal Ganglia
> // Review slides
> Basal Ganglia
> - Anatomy: 4 nuclei
> - Mechanisms of actions (direct and indirect pathways)
> - Huntington disease
> - Parkinson disease and treatments
> - Unifying theory: an action (or thought) selection network that is modified by reward-driven learning
> - Cost-benefit dependent action selection model

### Week 10 - Sensorimotor Integrations

