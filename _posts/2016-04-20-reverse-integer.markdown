---
layout: post
title:  "7. Reverse Integer"
date:   2016-04-20 15:06:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #7](https://leetcode.com/problems/reverse-integer/#/description)

Reverse digits of an integer.

Example:
```
Example1: x = 123, return 321
Example2: x = -123, return -321
```
**Note**
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

#### Pseudo code

1. get absolute value
2. split digits to an array
3. reverse array
4. join reversed array back to string
5. parse to number
6. test original sign
7. return reversed value with sign accordingly

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="zzzwGp" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="7. Reverse Integer" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/zzzwGp/">7. Reverse Integer</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
