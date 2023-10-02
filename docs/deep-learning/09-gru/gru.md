---
slug: /deep-learning/gru
id: gru
title: GRU
description: GRU
---

- **[Illustrated Guide to LSTM's and GRU's: A step by step explanation - The A.I. Hacker - Michael Phi](https://youtu.be/8HyCNIVRbSU?si=0rTiM6plo9mgv1gl)**
- **[Mengenal si GRU - Anak AI](https://youtu.be/mQ5CbaCK_Tg?si=zR552hFKhs_TWgy9)**

**Gated Recurrent Unit (GRU)** is a type of [recurrent neural network (RNN)](/deep-learning/rnn) and also the alternative of [long short-term memory](/deep-learning/lstm). GRU was developed to address LSTM limitation. LSTM has a complex architecture with different cell state and hidden state, making it computationally expensive.

### LSTM vs GRU

GRU was designed to simplify LSTM architecture to reduce the number of parameters and computations involved. GRU doesn't have cell state, instead the information from previous time step is passed in the hidden state. It also use 2 gate instead of 3 :

- **Reset Gate** : The reset gate is like the forget gate in LSTM, it determines how much information from previous time step, passed from the hidden state is forgotten.
- **Update Gate** : Update gate can be thought as the forget gate and input gate combined. It determine how much information from previous time step is passed to next time step which is in the form of hidden state.

![LSTM vs GRU architecture](./lstm-vs-gru.png)  
Source : https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21

### GRU Process

1. **Reset Gate** : The current time step input ($x_t$) with the previous hidden state ($h_{t - 1}$) are concatenated, it will be multipled by the **reset gate weight** ($W_r$), added with **reset gate bias term** ($b_r$), and transformed into the **sigmoid activation function**.

   ![Reset gate](./reset-gate.png)  
   Source : https://youtu.be/mQ5CbaCK_Tg?si=wl4wDGuYneso475E&t=61

2. **Candidate Activation** : The result of reset gate will be multiplied with the previous hidden state ($h_{t - 1}$), the output will be concatenated with the current time step input ($x_t$). Similarly, it will be multiplied by the **candidate activation weight** ($W_c$), added with **candidate activation bias term** ($b_c$), but transformed into the **tanh activation function**.

   ![Candidate activation](./candidate-activation.png)  
   Source : https://youtu.be/mQ5CbaCK_Tg?si=Lt5xHS8Y8w6Tjt1H&t=70

3. **Update Gate** : Again, the previous hidden state ($h_{t - 1}$) and the current input time step ($x_t$), it will be multiplied with the **update gate weight** ($W_z$), added with **update gate bias term** ($b_z$), transformed into the **sigmoid activation function**.

   ![Update gate](./update-gate.png)  
   Source : https://youtu.be/mQ5CbaCK_Tg?si=eNrIPhBA171dZl1k&t=85

4. **Hidden State Output** : The current time step hidden state is calculated by the following formula.

   - $(1 - z_t) * h_{t - 1}$ : This term uses the complement of update gate to calculate how much information from the previous hidden state $h_{t - 1}$ should be forgotten.
   - $z_t * \tilde{h_t}$ : This term represent how much information should be used for the next time step. The candidate activation is similar to input candidate in LSTM.

   Both of them will be added and the result is the current time step hidden state.

   ![Hidden state output](./hidden-state-output.png)  
   Source : https://youtu.be/mQ5CbaCK_Tg?si=3e1OgCWKpCDeyVgW&t=125 (with modification)

Below are the gif animation of GRU process  
Source : [Stacked_HG_CoordConvGRU - ayushgaud](https://ayushgaud.github.io/Stacked_HG_CoordConvGRU/)
![GRU process animation](./gru-animation.gif)
