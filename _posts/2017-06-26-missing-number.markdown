---
layout: post
title:  "268. Missing Number"
date:   2017-06-20 15:06:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #268](https://leetcode.com/problems/missing-number/#/description)

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given `nums = [0, 1, 3]` return `2`.

#### Bitwise operator XOR (^)

XOR truth table:

| a      | b      | a ^ b  |
| :----- | :----- | :----- |
| 0      | 0      | 0      |
| 0      | 1      | 1      |
| 1      | 0      | 1      |
| 1      | 1      | 0      |

Using XOR operator with two numbers `a` and `b` like this `a^b^b = a` will always return to original number `a`. We apply this XOR operation to every number in the array and it's index. If the number matches the index, then it's continuous, otherwise it's missing a number. Apply XOR on the index to get the missing number.

#### Expected sum and actual sum

The missing number is expected sum minus the actual sum.
- Use `(n*(n+1))/2` to get the expected sum.
- Use `Array.prototype.reduce` to get the actual sum.

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="gRXYXq" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="268. Missing Number" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/gRXYXq/">268. Missing Number</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
