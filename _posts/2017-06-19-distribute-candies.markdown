---
layout: post
title:  "575. Distribute Candies"
date:   2017-06-19 15:06:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #575](https://leetcode.com/problems/distribute-candies/#/description)

Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.


Example 1:
```
Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
The sister has three different kinds of candies.
```

Example 2:
```
Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
The sister has two different kinds of candies, the brother has only one kind of candies.
```

#### Pseudo code

1. get max limit per person: divide total count by 2
2. get count of unique types: use Set data type to only get unique values of the original array
3. the best allocation for the sister is either the max limit, or the count of unique types as long as it doesn't exceed the max limit.

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="GEmdNw" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="575. Distribute Candies" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/GEmdNw/">575. Distribute Candies</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
