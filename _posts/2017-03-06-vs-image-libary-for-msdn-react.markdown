---
layout: post
title:  "Visual Studio Image Library for MSDN (React)"
date:   2017-03-06 21:23:19 -0700
categories: project
tags: react sass es6 library metadata database catalog
thumbnailurl: "2017-03-06-vs-image-libary-react.png"
thumbnailswap: false
excerpt_separator: <!--more-->
---

I rebuilt the library with React.

<!--more-->

The image library includes all image assets that are shipped in Visual Studio IDE and an index to describe each asset. It is published on MSDN every year for Visual Studio developers to download. The previous version was created in Adobe InDesign and generated as static files. This year I built a web version where icons can be quickly filtered and downloaded on demand. View live site at [http://vsicons.azurewebsits.net](Visual Studio Image Library 2017).

#### Highlights

- Build with React
- Bite-sized JS, Sass, and even build scripts for scalability
- JSON format metadata, supports filter by name and keywords

#### Search demo

<img class="img-responsive" src="/images/2017-03-06-vs-image-libary-react.gif" alt="Visual Studio Image Library filter by name or keywords" />
