---
slug: /deep-learning/collaborative-filtering
id: collaborative-filtering
title: Collaborative Filtering
description: Collaborative Filtering
---

**Main Source :**

- **[Deep learning lesson 7 - fastai](https://youtu.be/p4ZZq0736Po?si=rLLlK6OGFDbP4piw)**

**Collaborative Filtering** is a technique used for recommendation systems (e.g. youtube video feed) to provide personalized recommendation user based on their preferences. There are two types of collaborative filtering :

- **User-based** : In this approach, recommendations are based on similar user behaviors. For example, if user A watch several same movie as user B, and user A has watched a movie that user B hasn't watch before, the system might recommend that movie to user B.
- **Item-based** : Also known as content-based, this approach focuses to recommend based on similarity between items. For example, if user A played a game with some specific genre before, the system might recommend another game which have similar or the same genre.

![Type of collaborative filtering](./type-of-collaborative-filtering.png)  
Source : https://medium.com/fnplus/neighbourhood-based-collaborative-filtering-4b7caedd2d11

---
summary:

We summarize all user rating to the corresponding movie. Some of the data will obviously empty, indicating the user hasn't watched the movie yet. The recommendation system will need to recommend a movie, out of all movie, the system will need to decide which should be recommended. 

Suppose the system is going to recommend a movie that hasn't been watched yet, which is the empty data. But, how do we know if a user will like a movie that they haven't watch before? In contrast, to get an approximate measurement if the user will like the movie or not, we need to complete the data table.

each user and each movie will have some coefficients called **latent factor**, these coefficients are dummy variables 

The number will be random, and will be adjusted. This is where machine learning comes, the adjustment will use optimizer such as gradient descent.

embedding
movie and user bias term and activation function
weight decay / l2 regularization (adding sum of all the weights squared to loss function)
