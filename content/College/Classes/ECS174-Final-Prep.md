Forward Pass
- Computing the output of a NN
- Inputs -> NN -> Outputs and Loss

Backward Pass
- Backpropagation
- Loss -> Compute gradients -> Propagate gradients backwards through network

1. What is the effect of large or small batch in stochastic gradient descend?  
```
A large batch will run a large set of training samples at once, and then calculate the loss at once before attempting to minimize the loss. This is in contrast to a small batch, that will calculate the loss for relatively small sample sets. A small batch will lead to the loss being fitted strongly to every example, while a large batch size will fit the model to a more general sample set. THis has the effect of stopping the model from overfitting as readily. 
Additionally, large batches execute much faster than small batches as they can execute in parallel, and don't have to stop to compute the loss as often.
```
```
True answer includes:
1. Frequency of loss calculation:
- Loss is calculated after finishing a batch. Calculated less often for large than small.
- Small batches update more frequently, but large batches update less often but with more stable gradient.
2. Gradient:
- Large will provide a smoother gradient more true to the ground truth loss function while smaller will be noisier.
3. Generalization and Convergence:
- Small batches may generalize better due to stochastic noise encouraging escape from sharp minima.
- Large batches can converge faster per iteration but may risk sharp minima that generalize less well
4. Computational Considerations:
- Small batches are computationally cheaper per iteration and require less memory.
- Large batches benefit from hardware acceleration but demand more memory and careful learning rate tuning
```
2. Describe the components of a Generative Adversarial Network (GAN) and how we optimize them in training.  
```
A GAN is a framework for designing generative models. They consistive of a G Generator model and a D Discriminator model. The generator will be tasked with creating an image from noise (is this an important point, the professor highlighted it but im not sure if it matters) and this image will be classified as either a real (being similar to dataset images) or fake (produced by the generator) by the discriminator. After each iteration, the loss will be calculate by the error rate of the discriminator, and the generator will attempt to maximize this error while the discriminator will attempt to minimize this error (actually I don't think this is correct, there was something about a saddle point). The training will attempt to keep the two models competitive, so that they are able to learn through training without one dominating. 

True answer:
1. GAN is a framework for generative modeling in an adversarial setup
   - G: Noise -> data resembling the real dataset
   - D: Classify inputs as real or fake
   Highlight their competition, trained against each other
2. G maps from ranom noise (latent space) to the data space, approximating the real data distribution. Wants to be identical to data.
3. D binary classifier, wants to distinguish real vs fake.
4. Optimization function below:
   - This creates a saddle point, where D is maximized and G is minimized
   - Mention instability?
5. Training
   - Mention the competitive aspect, where they both need to be balanced and none of the get 
   - Ideal is a Nash equilibrium, where D outputs 0.5 for all inputs
6. Challenges
   - Instability, ...
```
$\min_G\max_D \;E_{x\sim p_{data}}[logD(x)] + E_{x\sim p_z}[log(1-D(G(z)))]$

3. What is the role of momentum in training a deep network?  
```
Momentum is a technique that gradient descent employs to prevent the loss from getting stuck in local minima. Momentum will preserve 'momentum' when descending a gradient, and use a fraction of it to attempt to escape the local minima. Like a ball rolling down a hill, it will carry this momentum and attempt to escape the gradient, and potentially find a lower loss at some other point in the loss plane. This strategy helps to find a balance between a high learning rate that is able to avoid getting trapped in minima but is unable to settle well and a low learning rate that approaches the minima precisely, but might not be able to escape.

True answer:
1. Momentum:
   - Technique in gradient descent to accelerate convergence and stablize updates
   - Moving average of past gradients and smooths the optimization trajectory
   - Aids progress in shallow gradients
2. Formula
   - Momentum introduces a velocity term, which 
```
$v_t = \gamma v_{t-1} - \eta \nabla L(\theta_t)$
$\theta_{t+1} = \theta_t + v_t$
- $\gamma$ - Momentum coefficient 
- $\eta$ - Learning rate
- $\nabla L(\theta_t)$ - Gradient


4. Given a deep network $y = f (x)$, how can we construct an adversarial example?  
```
We compute the loss with respect to x, and use gradient ascent to find ways to maximize error for specific inputs.
With the example of an animal image classifier, a starting x could be an image of a panda, and we introduce noise into it and we evaluate the loss, and follow the gradient upward to modify it. If succesful, we might be left with an image of a panda with seemingly random noise, getting classified as a polar bear as an example. 

True Answer:
1. The idea is to try and modify x such that its misclassified, while the perturtbation is imperceptible
2. Uses the gradient of loss with respect to x, and this guides our perturbation
3. Formula below, error calculated and applied iteratively to maximize
4. Want x' to be incorrect, could potentially work towards a specific label however. Avoid over modifying.
```
$x' = x + \epsilon \cdot sign(\nabla _xL(f(x),y))$
- Gradient with respect to x
- steps epsilon to slightly perturb x

5. What is aliasing and Nyquist rate and how can we avoid aliasing?  
```
Aliasing is when you sample a frequency at an insufienct sampling rate and you find an 'alias' frequency. This is because the rate of sampling is not high enough to capture the detail of the underlying signal. 
The Nyquist rate is a method to avoid aliasing. The Nyquist rate is a sampling rate twice as large as the highest frequency of interest. Doing this will serve as anti-aliasing and get accurate readings.  

True Answer:
1. Aliasing defined as sampling a signal at an insufficient rate causing higher frequencies to be misinterpreted as lower frequencies (creating "aliases"). This occurs when sampling is less than Nyqusit rate.
2. Nyquist rate is defined as twice the highest frequency of interest in the signal.
3. To avoid aliasing, sample at or above nyquist rate. We can use an anti-aliasing filter, like a low-pass filter preventing frequencies higher than the Nyquist frequencies (half the sampling rate) from passing through.
"attenuating frequencies above the Nyquist frequency before sampling"?
```
$f_s \geq 2\cdot f_{\max}$

6. Given a deep network with three layers $y = f (g(h(x; wh); wg ); wf )$, write the pseudo code for training with stochastic gradient descend and backpropagation. Assume that we have access to the gradient of each function only but not the combinations of functions. x is input, y is output, and w are weights of the model. The pseudo code should say exactly how to update all three w’s. 
```
// h(x, wh)
// g(z, wg)
// f(u, wf)

for epoch in range(epochs):
	h_out = h(x, wh)
	g_out = g(h_out, wg)
	f_out = f(g_out, wf)

	loss = criterion(f_out, ground_truth) // f_out is prediction

	grad_f = loss_grad(f_out, ground_truth) // loss/f_out
	grad_wf = grad_f(g_out, wf, grad_f) // loss/f weights

	grad_g = grad_f_inputs(g_out, wf, f_out) // loss/g_out
	grad_wg = grad_g(h_out, wg, grad_g) // loss/wg

	grad_h = grad_g_inputs(h_out, wg, grad_g) // loss/h_out
	grad_wf = grad_h(x, wh, grad_h) // loss/wf

	wh = wh - lr * grad_wh # Update weights of h 
	wg = wg - lr * grad_wg # Update weights of g 
	wf = wf - lr * grad_wf # Update weights of f

True Answer:
1. Initiliazes weights before training, and other hyperparameters.
2. Stochastic gradient descent. Calculate loss for each batch.
3. Foward pass, get the predicton from f
4. Loss, L=loss(y_pred, y_true)
5. Backprop, calculate gradients at each weight.
   - Gradient of w_f: L/w_f, 
   - Gradient of w_g: L/g * g/w_g,
   - Gradient of w_h: L/h * h/w_h
6. Update According to formula below.
7. Stopping conditions, like epochs. 
```
$w \leftarrow w - \eta \frac{\partial L}{\partial w}$
- $\eta$ is learning rate



