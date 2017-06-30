---
layout: post
title:  "167. Two Sum II - Input array is sorted"
date:   2017-06-28 22:06:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description)

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

#### Move from both side to center

1. loop through the array
2. add left side number (small) with right side number (big)
3. if sum exceeds target, move the right side towards center
4. otherwise move left side towards center
5. continue doing this until find a pair

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="owpaJo" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="167. Two Sum II - Input array is sorted" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/owpaJo/">167. Two Sum II - Input array is sorted</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
