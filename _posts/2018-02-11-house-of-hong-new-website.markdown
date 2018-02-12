---
layout: post
title:  "House of Hong new website"
date:   2018-02-11 10:28:19 -0700
categories: project
tags: html css javascript svgsprite jekyll
thumbnailurl: "2018-02-11-house-of-hong-new-website-desktop.png"
thumbnailswap: false
excerpt_separator: <!--more-->
---

I rebuilt the House of Hong restaurant website with a new design and better code structure for CI/CD.

<!--more-->

A while ago I built a website for a local Chinese restaurant called House of Hong. See previous design here:
[Chinese Restaurant Website](/project/2016/09/02/chinese-restaurant-website.html)

### [View live preview](https://houseofhong.netlify.com/)


The new design is more bright and clean. It's also built with Jekyll like the previous site. Jekyll had some major updates since then. So this time I'm able to structure the project source code better.

### Landing page (Desktop)
![House of Hong new website desktop](/images/2018-02-11-house-of-hong-new-website-desktop.png)
### Landing page (Mobile)
![House of Hong new website mobile](/images/2018-02-11-house-of-hong-new-website-mobile.png)

### What's new

- I used svg sprite for swimlane icons. It's very easy to create, maintain and consume.
- I created the Jekyll project without a theme. The site is 100% customizable, no style override or conflicts.
- All menu data is stored in one json file. Menu items are pulled from the json file via queries to make different sub menus. I only need to maitian one data file.
