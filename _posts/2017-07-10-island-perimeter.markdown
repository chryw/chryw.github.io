---
layout: post
title:  "463. Island Perimeter"
date:   2017-07-10 22:14:20 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #463](https://leetcode.com/problems/island-perimeter/#/description)

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

```
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
```

#### How to count

- Each island are supposed to have 4 sides.
- An island that has neighbor on the right will lose 2 sides
- An island that has neighbor on the bottom will lose 2 sides

#### Pseudo code

1. Initialize an island counter and a side counter
2. Loop through each row
3. Loop through each item in that row
4. If it's 1, increase the island counter by 1
5. Check if it has right neighbor, if so increase the neighbor counter by 1
6. Check if it has bottom neighbor, if so increase the neighbor counter by 1
7. After all items are checked, return the total count using this formula `islands * 4 - neighbor * 2`


#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="ZyVJQR" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="463. Island Perimeter" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/ZyVJQR/">463. Island Perimeter</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
