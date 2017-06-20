---
layout: post
title:  "566. Reshape the Matrix"
date:   2017-06-20 15:06:19 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #566](https://leetcode.com/problems/reshape-the-matrix/#/description)

In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example:
```
Input:
nums =
[[1,2],
 [3,4]]
r = 1, c = 4
Output:
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
```
#### Pseudo code

1. handle easy cases (new dimension is impossible; new dimension is exactly the same as original dimension)
2. flatten original array into 1d by using `Array.prototype.concat` and `Array.prototype.apply`
3. create a new empty array
4. use a loop to fill the new array with sub arrays
5. inside each loop step, use `Array.prototype.splice` to grab every `c` numbers of items from the flat array
6. return the reshaped array

#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="vZXNdw" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="566. Reshape the Matrix" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/vZXNdw/">566. Reshape the Matrix</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
