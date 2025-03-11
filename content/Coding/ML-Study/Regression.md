
### Linear Regression:
## $\hat y = W_1 X_1 + W_2 X_2 + \dots + W_nX_n + b$
It can be described as a vector $X$ of input features, vector $W$ of weights, and bias b

Error at point $i$ is $e_i = abs(\hat y_i - y_i)$
Can also use Mean Absolute Error (MAE) or Mean Squared Error (MSE). MSE is more popular.

Find weights with **Gradient Descent**
> - Batch gradient descent: Uses all of the training instances to update the model parameters in each iteration.
> - Mini-batch Gradient Descent: Instead of using all examples, Mini-batch Gradient Descent divides the training set into smaller size called batch denoted by ‘b’. Thus a mini-batch ‘b’ is used to update the model parameters in each iteration.
> - Stochastic Gradient Descent (SGD): updates the parameters using only a single training instance in each iteration. The training instance is usually selected randomly. Stochastic gradient descent is often preferred to optimize cost functions when there are hundreds of thousands of training instances or more, as it will converge more quickly than batch gradient descent.

### Logistic Regression
For problems where the response variable is not normally distributed, like a coin toss

Using a sigmoid



## 🔗 -> Links
- [Intro to ML: Medium](https://towardsdatascience.com/machine-learning-basics-part-1-a36d38c7916)
- 