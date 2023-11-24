---
slug: /data-structures-and-algorithms/greedy
id: greedy
title: Greedy
description: Greedy
---

**Main Source :**

- **[Greedy algorithm - Wikipedia](https://en.wikipedia.org/wiki/Greedy_algorithm)**

**Greedy algorithm** is a problem-solving approach that involve selecting the currently optimal solution at each step. It is a simple and intuitive algorithm that "greedily" selects the best available option without considering the complete solution or future consequences.

Greedy strategy is typically used in a problem where we must maximize or minimize certain objective with respect to some constraint. In some problem, getting the most optimal solution is impossible or takes a lot of time. It is true that greedy approach can't guarantee us the most optimal solution, however, by selecting the currently optimal solution without the need for complex computational or [backtracking](/data-structures-and-algorithms/backtracking), we may achieve a good enough solution with reasonable amount of time.

### Coin Change

One of a simple problem that can be solved using a greedy approach is the coin change problem. The problem wants us to find the minimum number of coins needed to make a specific amount of money.

> Given a set of coin and a target amount of change to make, the goal is to determine the minimum number of coins needed to make exactly that amount.

For example, if we have a set of coin of: 1 cent, 5 cents, 10 cents, 25 cents, and the target is 79, we may use 3 x 25 cents and 4 x 1 cents, resulting in 7 coins.

Here is the pseudocode for it :

```
function coinChange(coins, amount):
    sort coins in descending order

    currentAmount = 0
    numCoins = 0

    for each coin in coins
        while currentAmount + coin <= amount:
            currentAmount += coin
            numCoins += 1

    return numCoins
```

The greedy approach always select the largest worth of coin available (as long as it doesn't exceed the amount) and use that coin to make the change. While this approach seems to be working all the time, there are some case where this solution doesn't give us the most optimal solution.

In the case of having a coin set of [1, 6, 10] and a target amount of 12, the greedy solution would choose the largest coin, which is 10, and then add 2 coins of 1 cent, resulting in a total of 3 coins. However, it's worth noting that by using two 6-cent coins, we can achieve the target amount of 12 with only 2 coins.
