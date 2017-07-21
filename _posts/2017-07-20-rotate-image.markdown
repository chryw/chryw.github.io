---
layout: post
title:  "48. Rotate Image"
date:   2017-07-20 16:37:20 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #48](https://leetcode.com/problems/rotate-image/#/description)

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?

Example:

```
Before:

[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

After:

[[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]

```

#### A common method for clockwise rotation

1. Reverse vertically
2. Mirror diagonally

Initial -

| 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 |
| 9 | 10| 11| 12|
| 13| 14| 15| 16|

First run -

| 13| 14| 15| 16|
| 9 | 10| 11| 12|
| 5 | 6 | 7 | 8 |
| 1 | 2 | 3 | 4 |

Second run -

| 13 | 9  | 5 | 1 |
| 14 | 10 | 6 | 2 |
| 15 | 11 | 7 | 3 |
| 16 | 12 | 8 | 4 |



#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="mwNGEq" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="48. Rotate Image" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/mwNGEq/">48. Rotate Image</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
