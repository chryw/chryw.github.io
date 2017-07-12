---
layout: post
title:  "344. Reverse String"
date:   2017-07-09 19:26:20 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #344](https://leetcode.com/problems/reverse-string/#/description)

Write a function that takes a string as input and returns the string reversed.

Example:

Given s = "hello", return "olleh".

#### Pseudo code
1. Convert string to array of letters
2. The goal is to swap each letter with it's opposite one.
3. Half of the length is the times we need to swap. If it's an odd length array, then round to the smaller side.
4. Use a while loop to swap letters
4. Join the reversed array back into a string and return

#### Playground

<p data-height="265" data-theme-id="light" data-slug-hash="QgzGdo" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="344. Reverse String" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/QgzGdo/">344. Reverse String</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
