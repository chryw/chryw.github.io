---
layout: post
title:  "189. Rotate Array"
date:   2017-07-01 14:04:20 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #189](https://leetcode.com/problems/rotate-array/#/description)

Rotate an array of n elements to the right by k steps.

For example, with `n = 7` and `k = 3`, the array `[1,2,3,4,5,6,7]` is rotated to `[5,6,7,1,2,3,4]`.

#### What the question really means
I have no idea what "rotate by k steps" means. But from LeetCode's test cases it looks like this:

`nums = [1, 2, 3, 4, 5]`, `k = 3`, expected: keep the last k items, and move the front items to the end.

Another challenge is I have to do in-place mutation to the original array. So I need to use mutating functions such as:
- `Array.prototype.splice`
- `Array.prototype.reverse`
- `Array.prototype.push`
- `Array.prototype.shift`
- `Array.prototype.pop`
- etc.

#### Pseudo code
1. Get the real "k" by `k % nums.length` because rotating n or n's multiple steps doesn't change the array.
2. Use `Array.prototyp.splice` to remove the front items, and save the removed items to a variable.
3. Loop the removed items array and add every items back to the end of the remaining array.

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="XgqMeV" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="89. Rotate Array" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/XgqMeV/">89. Rotate Array</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
