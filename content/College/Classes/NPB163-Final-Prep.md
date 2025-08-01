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
> // Review Includes
> Oculomotor System
> Skeletal Motor System

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


#### Motor 3 & 4: Skeletal Motor System
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

#### Motor 3
##### Overall Pathway
Includes M1, Basal Ganglia, Cerebellum, and spinal cord
Motor neurons in the spinal cord are final common pathway for all motor action
*Motor Unit* - Muscle fiber & $\alpha -$motoneuron 
One to Many: One motoneuron innervates Many (35-2,000) muscle fibers
- One muscle fiber can only be innervated by one muscle fiber

##### Columnar Organization
a-Motoneurons innervating a particular muscle form a column in the spinal cord, can span several segments

*Proximal-distal rule*:
- Medial motor neurons project to more proximal muscles (close to body?)
- Lateral motor neurons project to more distal muscles (farther from body)
- Somatotopy at all levels 

##### Motor Units
Receive input from: 
- Descending pathways (- and +)
- Peripheral input (+) 
- Interneuron (-)
Outputs: 
- To muscle fibers at *neuromuscular junction (nmj)*
- Releases acetylcholine (ACh) into synaptic cleft

*Recruitment*
- Happens in a fixed order from weakest to strongest (use smallest force necessary)
- Deactiation follows reversed fibers
	- Stronger muscles fatigue more quickly
- Smaller motor neurons (MN) innervate weaker fibers, larger MN -> stronger fibers
- Same excitatory current from spinal interneuron causes a larger EPSP in the smaller motor neuron

##### Spinal Reflexes
Simplest sensorimotor circuits
Contained all within SC
- Provided by receptors in muscles, joints, and skin
Reflexes are also more complex than usually given credit:
- can adapt to the task
- not all or nothing, spatial extentnt and force are graded
Protective functional (withdrawal)
- In upper extremities: withdrawal affects only one limb
- In lower: affects both limbs due to their role in stabilization (balance)
- General principle: *reciprocal innvervation* (activation of agonist and deactivation of antagonist)

##### Muscle Spindles
Length sensors - Gives feedback corresponding to muscle stretch. Greater stretch/contraction -> Greater activation

*Gamma motor neurons* - Tune the sensitivity of muscle spindles. An example of predictive coding
> - Adjusting the operating range of the muscle spindles
- In many movements alpha and gamma motor neurons activate in parallel, and "expect" the stretch from voluntary movements
##### Stretch Reflex
Back to reciprocal innervation, afferent stimulation from the:
- extensor nerve is excitatory towards extensor motor neurons
- flexor nerve is inhibitory towards extensor motor neurons (there is an inhibitory interneuron, flipping signal)
However, its more complicated than this and reciprocal inhbition can be blocked if co-contraction is desired (stiffening joints)

##### Golgi tendon organ
Signal tension in a muscle
- Protective function, but the organ also provides precise information about the state of contraction of a muscle
Projects to 1b inhibitory interneurons, who receive their principal input from the Golgi tendon organs

##### Reflexes and Voluntary Movements
The reflex circuits are not silent during voluntary movement.
They are part of a larger control loop, and they both leverage motor machinery
![[Reflexes-and-Voluntary-Movement-Control.png|400]]
- Alpha and Gamma motor neurons both leveraged from cortical systems

##### Descending Pathways
Again the medial/lateral rule applies:
- Medial descending systems contribute to control of posture
- Lateral descending systems 
	- cat/monkeys: rubrospinal tract important for goal directed movements especially of arm and hand
	- apes/humans: corticospinal tract (cst) assumes control of these functions
Brian stem integrates spinal reflexes into a variety of automated movements that control posture and locomotion

Descending motor pathways (in humans):
- Mainly terminate on spinal interneurons 
- Only certain corticospinal fibers (esp for arm and hand movements) synapse directly onto motoneurons
- All descending pathways (EXCEPT the corticospinal tract) remain ipsilateral
	- 90% of corticospinal fibers cross
- Vestibulospinal and modullary/pontine reticulospinal tracts: posture control
	- Vestibulo -> Balance, so posture
	- medullary / pontinue reculospinal -> ? 
- Tectroreticulospinal tract: orienting head movements (signals originate in the SC)
- Corticospinal tract (cst): control of precise movements of distal extremities (signals originate in pyramidal cells in motor cortex)
> Pneuomic: 
> Lateral Tracts:
> - Corticospinal tract (CST), specifically lateral portion
> - Rubrospinal tract
> Medial tracts:
> - Everything else...
> - Vestibulospinal and modullary/pontine reticulospinal tracts
> - Tectroreticulospinal tract:
> - Ventral corticospinal tract (CST)


#### Motor 4
##### Motor Areas (again)
Motor areas in FC, basal ganglia, cerebellum, brain stem, spinal cord
*Cortical Connection*
- Inputs to primary motor cortex: 
	- SMA, PMd, PMv, S1, BA5?
- Inputs to premotor areas:
	- PFC, BA5, BA7
*Corticospinal Connections*
- Betz cells (large pyramidal cells in layer 5 of M1) thought to be important for cortico spinal fibers
- Actually we think that most fibers originate from premotor cortx, SMA (supplementary motor area) and somatosensory cortex
	- Betz now thought to be less than 5% of corticospinal fibers
*M1 Organization*
- There is a rough *somatotopic* homunuclus organization, but...
- Less clear than somatotopic
- M1 thought to be a higher level organization, encoding movement direction, required force, speed, etc.
	- More abstract parameters of a movement
However, different theories of what's going on:
- Optimal feedback control theory: doesn't represent movement parameters explicitly, but acts as a part of an optimla feedback controller that:
	- current goals + current sensory states -> motor commands
	- Support:
		- Fast sensory feedback
- Behaviorally relevance: 
	- Different stimulation can induce behaviorally relevant posture
		- Somatotopic organization of behavioral movements (defensive, reach, etc.)
	- Support:
		- Recording data, matching spatial zones to stimulation sites
	- Against:
		- Have not observed neurons maximally active for movements to a particular spatial loation regardless of starting position

*Mapping from motor cortex to muscles*
- No one to one mapping
- Mnay-to-many mapping, and its modulated by feedback
![[Pasted image 20250611182414.png|400]]

*Premotor and SMA*
- Premotor stim can induce more complex movements than M1
- Premotor lesions, movements can be executed but obstacles can no longer be avoided
- Mental rehearsal activates premotor areas but not M1
M1 more involved in actual motor control
Premotor areas involved in motor planning

*PM vs SMA*
- Premotor more involved in sensory guided info
	- Complex new movements
- SMA involved in pre-learned movement
	- Muscle memory

*Pathways*
Dorsal/ventral split in motor cortex too
- Dorsal (where) -> In charge of reaching, culminates in PMd
- Ventral (what) -> In charge of grasping, culminates in PMv

*Mirror Neurons*
Activity in PMv that activates when monkey plansan action, but also when they see an action

*Optimal Motor Control*
Desired movement -> f_inv (f_inv(x) ) -> Muscle Activation -> Actual body ( f() ) -> Resulting movement
- Take a desired outcome x: $f^{-1}(f(x))$ -> x
	- $f^{-1}$ is learned / trained. 
	- Somatosensory function
Moving on from that:
- Harris & Wolpert proposes that optimal control theory relies on a few simple assumptions:
	- Standard deviation of noise increases linearly with the absolute value of the control signal
	- What matters is the variability at the end of the movement
	- Additionally:
		- Like we assumed, speed means more error
		- But longer time means error can accumulate over time
Optimizing for speed and accuracy, but higher speed means higher variance
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
#### Rough facts
- 10% of volume, more than half of neurons
- 40 times more axons project TO it than FROM it
- Each purkinje cell (output neurons) receives input from approx 1 million granule
- Arranged in highly regular manner as repeating units (basic circuit modules)
- Can be divided into different regions, which perform similar computations based on different 
- Involved in the adjustment of movements while in progress and during repitition
- Project to:
	- Premotor and motor systems of cortex and brain stem
- Cerebellar systems are *ipsilateral* to the ontrolled muscles (opposite to cortex)
- Damage
	- Disrupts spatial accuracy and temporal coordination of movements
	- Imparis motor learning and certain cognitive function

- Can be divided into the cerebellar cortex and 3 deep nuclei:
	- Fastigial, interposed, and dentate nucleus
		- Interposed split betweeen: globuse and emboliform nucleus
- Output mainly originates from deep nuclei EXCEPT for flocculonodular lobe (projects directly to vestibular nuclei)

#### Anatomy
*Functional division*
- Flocculonodular lobe:
	- vestibular functions
- vermis
	- Receives multi-sensory inputs (sensory input from spinal cord)
	- Involved in:
		- Posture, locomotion, gaze control (via fastigial nucleus)
- Intermediate part of hemisphere:
	- Somatosensory input from spinal cord
	- Projects to spinal motor systems via the interposed nucleus
- Lateral part of the hemisphere
	- Only cortical input
	- Projects to motor, premotor, and PFC via the dentate nucleus
*Anatomical structure of cerebellar cortex*
- 3 layers
- 5 types of neurons (first four (all aside from granule) are inhibitory)
	- Stellate (-)
	- Basket (-)
	- Purkinje (-)
	- Golgi (-)
	- Granule (+)
- Outer layer:
	- Badies of stellate & basket cells
	- Axons of granule cells ("parallel fibers")
	- Dendrites of Purkinje cells (perpendicular to parallel fibers)
- Purkinje cell layer
	- Bodies of Purkinje cells
		- Project to cerebellar/vestibular nuclei, output of cerebellar cortex
- Inner layer: granular layer
	- Bodies of granule & golgi cells
	- Mossy fibers (major input to cerebellum) terminate in this layer

##### Fibers:
- Mossy Fibers (input)
	- Sensory?
	- Major input to cerebellum, terminate on granular layer with granule and golgi cells
	- Originate in: precerebellar nucleus cell (spinocerebellar pathways, brainstem reticular nuclei, pontine nuclei, etc.)
- Climbing Fibers (input)
	- Error?
	- Originate from inferior olive
- Parallel Fibers
	- The axons of granule cells
	- On the molecular layer, projecting between basket cells, stellate cells, and dendrites of Purkinje cells 

Mossy Fibers -> Granule Cells -> Purkinje cells (PC)
- Purkinje receives input from only one climbing fiber
	- Climbing fiber usually contacts up to 10 PC
	- Synaptic effects of climbing fibers on PC are unusually powerful, producing complex spikes
	- Activity in climbing fibers induces selective LTD in the synaptic strength of parallel fibers


### Week 9 - Basal Ganglia
> // Review slides
> Basal Ganglia
> - Anatomy: 4 nuclei
> - Mechanisms of actions (direct and indirect pathways)
> - Huntington disease
> - Parkinson disease and treatments
> - Unifying theory: an action (or thought) selection network that is modified by reward-driven learning
> - Cost-benefit dependent action selection model

![[Circuit-Mechanisms-Parkinson's-Disease-Basal-Ganglia.png]]


### Week 10 - Sensorimotor Integrations
> No Summary but:
> Know important cortical association areas
> - Frontal Association Cortex
> - Dorsal / Ventral (where/what) streams
> - Dorsal:
> 	- Parietal Association Cortex
> 	- Somatosensory cortex
> - Ventral
> 	- Auditory Cortex
> 		- Temporal Association cortex
> - Neglect
> - WM
> - Decision Integrators
> 	- Motion (MT)
> 	- Relative stimulation frequence (somatosensory)
> - Sequential probability test
