---
tags:
  - Brain
  - Churchland
  - Entry
Entry-For: The-Transmitter
created:
  - " 09-09-2024 20:02"
---

[Paper Review]([How to teach this paper: ‘Neural population dynamics during reaching,’ by Churchland & Cunningham et al. (2012) | The Transmitter: Neuroscience News and Perspectives](https://www.thetransmitter.org/how-to-teach-this-paper/how-to-teach-this-paper-neural-population-dynamics-during-reaching-by-churchland-cunningham-et-al-2012-3/))

> With almost 1,500 citations, “[Neural population dynamics during reaching](https://doi.org/10.1038/nature11129),” published in _Nature_ in 2012, is a foundational paper in systems and computational neuroscience. It presents the first evidence as well as a thorough theoretical footing for the idea that populations of neurons generate movement in a rather stunning way: with dynamics that rotate.


# Major Takeaways:
Some neural activities patterns can be observed to have rotations. Why? I'm not sure yet, some very easy ties can be made with rhythmic walking (or crawling for a grub), but it can be seen in movements that aren't obviously rhythmic, like reaching. He argues this isn't just an artifact of PCA, but a naturally effect of our brains recurrent nature. More explanation here, [discovery of rotational dynamics](https://www.simonsfoundation.org/2020/07/14/discoveries-of-rotational-dynamics-add-to-puzzle-of-neural-computation/).


This article presents an argument for dynamical systems models. Continuing on and desiring a deeper understanding of the math would involve wanting to read about [Dynamical Systems in Neuroscience]([mitpress.mit.edu](https://mitpress.mit.edu/9780262514200/dynamical-systems-in-neuroscience/)). 
The math covers:
- Linear Algebra
	- Linear Combinations
	- Matrices capturing dynamics of neural activity
	- [[Dimensionality-Reduction|Dimensionality Reduction]]
- Differential Equations
> The derivative of the population code is determined by some unknown function that takes into account the population activity, plus some external time-varying input.


### Dimensionality Reduction
The paper and methods similar rely on [[PCA]] to reduce the neural activity into a lower-dimensional space more conducive to analysis. This space is where rotation can be observed.
> Cunningham and [Byron Yu](https://users.ece.cmu.edu/~byronyu/), a neuroscientist at Carnegie Mellon University in Pittsburgh, Pennsylvania, also have a very accessible [review article](https://doi.org/10.1038/nn.3776) on the topic, and Neuromatch Academy has a [dimensionality reduction tutorial](https://compneuro.neuromatch.io/tutorials/W1D4_DimensionalityReduction/student/W1D4_Tutorial2.html) with videos and code, as well as a tutorial on [discrete dynamical systems](https://compneuro.neuromatch.io/tutorials/W0D3_LinearAlgebra/student/W0D3_Tutorial3.html).
> 
> One great way for students to engage with this paper is to work with similar data themselves. [This interactive notebook](https://github.com/BIPN162/Materials/blob/master/13-DimensionalityReduction.ipynb) provides students with an introductory implementation of PCA using Python, and Yu has developed a [problem set for MATLAB](https://github.com/marius10p/NeuralDataScienceCSHL2019/blob/master/ByronYuExercises/exercises.pdf). Finally, Churchland and others have since built on this work, asking questions about what happens when trajectories of networks get tangled, and he spoke about it in 2020 in a [lecture](https://vimeo.com/485492273) at the Bernstein Center for Computational Neuroscience in Munich, Germany.






### Philosophy of Science: 
One of the big arguments for this body of work is the strong predictions it makes. This ties back to 
[[Philosophy-of-Science]]. What is a valuable scientific method? What do scientists in the field value? What approach should be taken to maximize progress while minimizing error? 


