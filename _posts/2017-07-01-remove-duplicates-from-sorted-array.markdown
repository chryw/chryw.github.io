---
layout: post
title:  "26. Remove Duplicates from Sorted Array"
date:   2017-07-01 16:07:20 -0700
categories: code
tags: algorithm
---

#### Question

[LeetCode #26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/#/description)

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array `nums = [1,1,2]`,

Your function should return `length = 2`, with the first two elements of nums being `1` and `2` respectively. It doesn't matter what you leave beyond the new length.

#### Pseudo code
1. Use 2 pointers: current (`j`) and next (`i`)
2. Loop through the array. Compare each item with the next item.
  - If the next item is different from the current item, then it's not duplicate. Count it. Move the current pointer to the current "next" by assigning `nums[i]` to `nums[j]`, increase `j` by `1`.
  - Else don't move the current pointer, move the next pointer to compare if the next of next is duplicate or not.
3. After comparing, `j` should be `1` less than the count of non-duplicate items (because the first item itself wasn't included yet). Return `j+1` to get the real count.

|Index| 0 | 1 | 2 | 3 | 4 | 5 | 6 |Count (not include 1st item itself)|
|: ----------------------------------- :|
|Array| 1 | 1 | 2 | 2 | 3 | 4 | 5 |     |
| 1st | j | i |   |   |   |   |   |  1  |
| 2nd | j |   | i |   |   |   |   |  1  |
| 3rd |   |   | j | i |   |   |   |  2  |
| 4th |   |   | j |   | i |   |   |  2  |
| 5th |   |   |   |   | j | i |   |  3  |
| 6th |   |   |   |   |   | j | i |  4  |


#### Playground

<p data-height="600" data-theme-id="light" data-slug-hash="owdGjK" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="26. Remove Duplicates from Sorted Array" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/owdGjK/">26. Remove Duplicates from Sorted Array</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
