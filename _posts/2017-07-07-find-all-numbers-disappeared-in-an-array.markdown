---
layout: post
title:  "448. Find All Numbers Disappeared in an Array"
date:   2017-07-07 23:09:20 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #448](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/#/description)

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

#### Pseudo code
1. Loop through the array, check if the number matches the index. If not, swap the number to where it supposed to be.
2. After the first loop, all numbers should be in position except for the duplicated numbers will take place of the missing numbers.
3. Loop the sorted array and grab the places where number doesn't match index. Add 1 to get the missing numbers.

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="gRBRvw" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="448. Find All Numbers Disappeared in an Array" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/gRBRvw/">448. Find All Numbers Disappeared in an Array</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
