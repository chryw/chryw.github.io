---
layout: post
title:  "Static website workflow"
date:   2016-06-21 10:42:27 -0700
categories: project
tags: frontend workflow productivity html css javascript sass babel gulp iconfont optimization
thumbnailurl: "2016-06-21-static-website-workflow.png"
thumbnailswap: false
excerpt_separator: <!--more-->
---

This is my current workflow of building a static website

<!--more-->

## HTML
- Break page(s) into components
	- brand, nav, footer
	- body

- Choose a technology depending on content type
	- Use Jekyll for blog type content
			Most of my projects are pretty simple and suitable for this approach.
	- Use Angular and JSON for datalist type content
	- Use React for control, forms, UI type content

## CSS

#### main

- Write in Sass because it's DRYer and more readable
	- variables
		- colors
		- spacing
		- font
		- breakpoints
	- mixins
		- vendor prefix
		- animation and keyframes
		- transition and transforms
		- some components with style variations like buttons, hyperlinks, labels, etc.
	- components

#### vendor
- 3rd party frameworks such as Bootstrap
		I use Bootstrap when there is no need to design a whole new style
- my own framework
		basic grid system, some common UI controls like navs, buttons and some utilities for typography and responsive layout.

#### icons
- Create icons in svg format using Adobe Illustrator
		I'm pretty good at designing icons :-)
- Use gulp to minify svg files
- Use gulp to generate icon font files (ttf, svg, woff, eot)
- Create stylesheet for icons
	- Create a template in sass
		- Define shared attributes like sizing, padding, animation, stacking, etc.
	- Use gulp and lodash to generate icon font css
	- Use gulp to add cache busting because icons may get added/updated in the future

## Javascript

#### main
- Write modules
- Use RequireJS to import modules

#### vendor
- Use RequireJS to load 3rd party modules

## Build and deploy
- jekyll build or compile JSX
- Compile sass
- Concatenate css files
- Minify css and javascript files
- Add cache busting for static assets
- Config travis CI for ftp deployment
- or config Azure deployment
