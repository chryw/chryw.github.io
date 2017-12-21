---
layout: post
title:  "Font Color Picker"
date:   2017-12-21 10:28:19 -0700
categories: project
tags: html css javascript iconfont jquery scss
thumbnailurl: "2017-12-21-font-color-picker.png"
thumbnailswap: false
excerpt_separator: <!--more-->
---

I made a simple font color and highlight color picker tool in HTML/CSS/JavaScript mimicking Outlook.

<!--more-->

A coworker asked me for icons similar to the "font color" and "highlight color" buttons like this in Outlook:

![Highlight color picker in Outlook](/images/2017-12-21-font-color-picker-outlook.png)

We use an icon font for our web apps like VSTS. Unlike [these monocolor basic icons](https://developer.microsoft.com/en-us/fabric#/styles/icons), the font color and highlight color icons need to be "multicolor" and "dynamic". With icon font, multi-color icons are actually stacked font glyphs with different CSS styles. Then (a part of) the icon color changes to reflect user's selection. I made a simple demo to show him how to do it in a web UI.

<p data-height="500" data-theme-id="light" data-slug-hash="pJOxNp" data-default-tab="js,result" data-user="chryw" data-embed-version="2" data-pen-title="Font Color Picker" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/pJOxNp/">Font Color Picker</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### What I learned

#### JavaScript can't access pseudo elements because they're not technically in DOM  

To manipulate the text selection color, I have to toggle CSS classes, instead of directly changing the CSS attributes in JavaScript. This is because JavaScript can't access `::selection` pseudo class.

[CSS-Tricks Q&A](https://css-tricks.com/forums/topic/before-css-change-with-jquery/)

#### It's bad practice to use `event.stopPropagation()` to dismiss a popup

I wanted to dismiss the expanded swatch panel when clicking outside. Instead of `event.stopPropagation()`, I added a listener to `document` and let it explicitly detect clicks that are not supposed to open the swatch.
[CSS-Tricks article](https://css-tricks.com/dangers-stopping-event-propagation/)
