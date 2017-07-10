---
layout: post
title:  "217. Contains Duplicate"
date:   2017-07-05 17:49:20 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #605](https://leetcode.com/problems/contains-duplicate/#/description)

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

#### Solution 1: Sort the array

1. Sort the array
2. Loop and check if the current item is equal to previous

#### Solution 2: Use key: value

1. Use an object to store key and value.
2. Loop and add the current item to the object as key, set its value to 1 or,
3. If the object already has that key, mark it by adding 1 to its value.
4. Check if the current key's value is greater than 1, if so means we've seen that key before so it's a duplicate.

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="XgxaWw" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="217. Contains Duplicate" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/XgxaWw/">217. Contains Duplicate</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
