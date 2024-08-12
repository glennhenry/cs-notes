---
slug: /deep-learning/reinforcement-learning/sarsa
id: sarsa
title: SARSA
description: SARSA
---

**Main Source:**

- **[State–action–reward–state–action — Wikipedia](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action)**

**SARSA**, stands for **State-Action-Reward-State-Action**. SARSA belongs to the family of [**temporal difference (TD)**](/deep-learning/reinforcement-learning/temporal-difference) learning algorithm, which mean value function is updated based on direct interaction with the environment. SARSA is also called an **on-policy method**, meaning it will improve its policy while interacting with the environment using current policy (after updating value function).

### Algorithm

TD is a general framework to estimate value based on the observed rewards and the estimated values of future states. **SARSA is the specific algorithm used to update Q-value**, therefore the algorithm is very similar to [TD](/deep-learning/reinforcement-learning/temporal-difference).

1.  **Initialization**: Initialize the Q-values for all state-action pairs arbitrarily or to some default values.

2.  **Choose an action**: Based on the current state, we have option to explore new things to potentially find better policy that could lead to higher reward, or we can prioritize the maximum cumulative reward by being "greedy" and doing action that yields the highest immediate rewards according to our current policy.

3.  **Take action**: Perform selected action, transition to new state, and agent receives a reward based on the action taken.

4.  **Q-value Update**: Update the Q-value for the current state-action pair using the SARSA update rule:

    > $Q^{new}(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \space [r_t + \gamma \space Q(s_{t+1}, a_{t+1}') - Q(s_t, a_t)]$

    Where $s'$ and $a'$ means the next state and the next action, respectively.

    The new Q-value is updated based on the current Q-value estimate, the observed reward, the estimated future Q-value, and the learning rate as the weight to control the update influence.

5.  **Repeat**: We start choosing and taking action again, transition to new state, and then update the Q-value again.
