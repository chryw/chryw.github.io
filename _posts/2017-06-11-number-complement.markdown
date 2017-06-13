---
layout: post
title:  "476. Number Complement"
date:   2017-06-11 10:23:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #476](https://leetcode.com/problems/number-complement/#/description)

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

#### Pseudo code

1. parse integer to binary
2. store every digit into to an array
3. invert every item in array to the opposite
4. merge the inverted array
5. parse back to integer

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="gRaRPg" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="#476 Number Complement" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/gRaRPg/">#476 Number Complement</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
