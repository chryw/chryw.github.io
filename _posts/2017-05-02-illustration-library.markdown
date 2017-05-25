---
layout: post
title:  "Illustration Library"
date:   2017-05-02 21:23:19 -0700
categories: project
tags: react sass es6 library metadata database catalog
thumbnailurl: "2017-05-02-illustration-library.png"
thumbnailswap: false
excerpt_separator: <!--more-->
---

I built an illustration library in React.

<!--more-->

#### Background

I recently built a searchable library for Visual Studio icons. Our team loves it and asked for a similar library for illustration assets that we have.

Our designers and PMs often need to find illustrations for prototyping, presentation and writing product update blogs. We have several talented artists who create beautiful illustrations upon requests as the product grows. Over the years we accumulated hundreds of illustrations, iterations, common design elements, varies color scheme and file formats. It is challenging for us to maintain, share and update them. Duplicates and inconsistent assets are often created because looking for and reusing existing assets take more time than just creating new assets from scratch.

With this library we can easily find and download existing assets. We can use the assets directly or "reassemble" common elements to create new illustrations with consistent color palette and style. We can also easily add new assets to the catalog by writing a simple JSON object that describes an illustration.

#### Status

This is still a work in progress project. I have bootstrapped the code structure, style and basic search functionality. Now I'm working with designers on writing style guides. I'm also refining the metadata schema and indexing more illustration assets.

#### Mockup

<p data-height="600" data-theme-id="light" data-slug-hash="dWZgWo" data-default-tab="result" data-user="chryw" data-embed-version="2" data-pen-title="Image gallery" class="codepen">See the Pen <a href="https://codepen.io/chryw/pen/dWZgWo/">Image gallery</a> by Cherry Wang (<a href="https://codepen.io/chryw">@chryw</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Highlights

- Build with React
- Single page with router
- Bite-sized JS, Sass, and even build scripts for scalability
- JSON format metadata, supports filter by name and keywords

#### Search demo

<img class="img-responsive" src="/images/2017-05-02-illustration-library.gif" alt="Visual Studio Image Library filter by name or keywords" />

#### Guidelines page (work in progress)

<img class="img-responsive" src="/images/2017-05-02-illustration-library-guideline.png" alt="Visual Studio Image Library filter by name or keywords" />
