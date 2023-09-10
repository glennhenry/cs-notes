---
slug: /deep-learning/deep-learning-foundation
id: deep-learning-foundation
title: Deep Learning Foundation
description: Deep Learning Foundation
---

**Main Source :**

- **[Mengenal Cross Entropy Loss - Anak AI](https://youtu.be/rBKWVHhFqGU?si=K8imDow_FIeEfvXq)**
- **[Deep learning lesson 3 - fastai](https://youtu.be/hBBOjCiFcuo?si=DZdZmAXYcw_M49zC)**

### Loss Function

**Loss function** is a function that measure how well does a machine learning model performs. Loss function is typically calculated from mathematical function that takes actual or true output and the predicted output from the model. For example, a simple loss function in machine learning is the Mean Squared Error (MSE) function, commonly used in [linear regression](/machine-learning/linear-regression).

![MSE formula](./mse.png)  
Source : https://suboptimal.wiki/explanation/mse/

Basically it sums all the error or the difference between actual and predicted value and then square it and get the average. In the case of MSE, the larger means the worse performance and the lower means the better.

The point of machine learning is we keep measuring the performance of our model and adjust our model to make it performs better. The less result we get from the loss function (or more depending on the loss function itself) reflect of how our model performs. We need to optimize the loss function, there are many way to optimize it, such as the [gradient descent algorithm](/machine-learning/linear-regression#gradient-descent)

![Machine learning flow](./machine-learning-flow.png)

### Stochastic Gradient Descent

**Stochastic Gradient Descent (SGD)** is

### ReLU

### Entropy

In machine learning, entropy is a measure of uncertainty or randomness in a set of data. It is often used as a criterion to quantify the impurity or disorder within a group of samples.

The formula for entropy is (base of the log can vary) :

$E = - \Sigma (p_{i} \log_{2} (p_{i}))$

Entropy is calculated from a set of data or event, each of it has a probability of occuring which is the $p_i$ or the probability of event $i$.

A higher entropy means the data is uncertain, it's the opposite when entropy is low.

For example, an equally likely probabilities of coin flip has high entropy. If probabilities of getting head and tail is same, it's hard to predict what happen next. If the head has an odds of 0.9 and the tail has an odds of 0.1, then entropy will be lower.

Entropy can be thought as calculating the disorder of probability distribution of the event. Probability distribution describes the probability of all different outcomes in an event.

![Entropy distribution of an event](./entropy-distribution.png)  
Source : https://twitter.com/page_eco/status/1631267143890407426

#### Cross Entropy

Cross entropy has a similar concept with entropy, the difference is cross entropy calculate the disorder of 2 probability distribution of an event instead.

The formula for cross entropy is :

$H(P, Q) = - \Sigma (P(x) \log (Q(x)))$

Machine learning is typically used for prediction, the prediction output can be probabilities. Cross entropy is used in the context of machine learning, the probability distribution included is the actual probability $P(x)$ and the predicted probabilities by the machine learning model $Q(x)$.

#### Cross Entropy Loss

Loss function in machine learning, measure how well a model performs in a training. Knowing how well it performs make us able to train the model to improve it.

The cross entropy function explained before can be used to calculate a loss function, typically for classification tasks that outputs probabilities. It still use the same formula, however, the notation for actual probability is typically denoted as $y$ and the prediction is denoted as $\hat{y}$.

#### Binary Cross Entropy Loss

Binary cross entropy loss is another form of cross entropy loss which is used for binary classifcation, or a classification that only has 2 output. The formula is below :

$L(y, \hat{y}) = - (y \log(\hat{y}) + (1 - y) \log(1 - \hat{y}))$
