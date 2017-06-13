---
layout: post
title:  "461. Hamming distance"
date:   2017-05-13 11:23:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #461](https://leetcode.com/problems/hamming-distance/#/description)

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

#### Pseudo code

1. convert integers to binary strings
2. get the biggest length of converted strings
3. create padding to fill missing digits
4. fill short string with padding to make two strings even in length, then convert to array
5. compare each member and count the distance

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="rmVLvZ" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="#461 Hamming distance" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/rmVLvZ/">#461 Hamming distance</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
