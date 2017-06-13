---
layout: post
title:  "561. Array Partition"
date:   2017-05-12 11:23:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #561](https://leetcode.com/problems/array-partition-i/#/description)

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

#### Analysis

Rephrase the question:

- group given integers into pairs
- find the "best" pairs of numbers that:
  - the smaller number of each pair adds up to a sum
  - the sum should be as large as possible

The largest number will not be used, so pair it with the second largest number so that the second largest number can be used. Similarly, the smallest number will have to be used anyways, so pair it with the second smallest number so other bigger numbers don't get wasted. Use the same logic for all pairs, then the pattern is to sort numbers from small to large, then group each pair.

Try some examples:

- [1, 4, 2, 3] ==> [1, 2], [3, 4] ==> [1, 2], [3, 4] ==> 1 + 3 = 4
- [1, 4, 2, 3, 5, 9] ==> [1, 2], [3, 4], [5, 9] ==> 1 + 3 + 5 = 9
- [1, 4, 2, 3, 5, 9, 10, 12] ==> [1, 2], [3, 4], [5, 9] [10, 12] ==> 1 + 3 + 5 + 10 ==> 19
- [2, 6, 9, 8, 11, 4] ==> [2, 4], [6, 8], [9, 11] ==> 2 + 6 + 9 =17

#### Pseudo code

1. sort array
2. push odd indexed numbers into new array (smaller one of a pair)
3. add up the new array

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="eWWGLW" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="#561 Array Partition" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/eWWGLW/">#561 Array Partition</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
