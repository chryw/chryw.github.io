---
layout: post
title:  "605. Can Place Flowers"
date:   2017-07-06 14:22:20 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #605](https://leetcode.com/problems/can-place-flowers/#/description)

Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

Example 1:

```
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True
```

Example 2:

```
Input: flowerbed = [1,0,0,0,1], n = 2
Output: False
```

Note:

- The input array won't violate no-adjacent-flowers rule.
- The input array size is in the range of [1, 20000].
- n is a non-negative integer which won't exceed the input array size.

#### Pseudo code
1. Loop through the array and check if current, previous and next (and edges) places are 0.
2. Set the current place to 1 (plant a flower) and add 1 to the counter
3. Check if the counter >= the target count

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="vZVZPK" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="605. Can Place Flowers" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/vZVZPK/">605. Can Place Flowers</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
