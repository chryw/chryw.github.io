---
layout: post
title:  "169. Majority Element"
date:   2017-06-29 22:49:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #169](https://leetcode.com/problems/majority-element/#/description)

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

#### Move from both side to center
[Boyer–Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm)

1. Initialize an element m and a counter i with i = 0
2. For each element x of the input sequence:
3. If i = 0, then assign m = x and i = 1
4. else if m = x, then assign i = i + 1
5. else assign i = i − 1
6. Return m

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="QgQaWG" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="169. Majority Element" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/QgQaWG/">169. Majority Element</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
