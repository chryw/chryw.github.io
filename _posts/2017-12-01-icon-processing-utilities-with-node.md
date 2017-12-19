---
layout: post
title:  "Icon processing utilities with Node"
date:   2017-12-18 19:18:19 -0700
categories: project
tags: javascript node gulp es6 icon svg image
thumbnailurl: "2017-12-01-icon-processing-utilities-with-node.png"
thumbnailswap: false
excerpt_separator: <!--more-->
---

A collection of gulp tasks for processing Visual Studio product family icon assets.

<!--more-->

### Background

I work on a UX team as an Image Asset Manager. A part of my duty is to streamline the image production workflow. Some challenges we have been facing are:

- Some tools we use are only available on Windows, but some of our artists prefer Mac.
- There are many steps and different tools involved throughout the production. To produce one or very few icons, the artists often have to navigate around several software windows, folders and memorize lots of configurations. Adobe scripts are helpful but still quite limited. This often causes human errors that are hard to notice later.
- For some simple tasks like resize, convert svg ot png, etc., we have to boot up heavy tools like Adobe Illustrator and Photoshop. This is very inefficient when we need batch process many files.
- Sometimes non-artists also want to do some simple image processing, but they don't have all the tools we have (like Adobe).

I've always been looking for ways to solve those problems. Over the time I've written/used scripts to get some one-time jobs done. (e.g.: I helped [VS Code](https://github.com/Microsoft/vscode) make dark theme icons from existing light theme icons). This month I finally got some longer time slots to work on these as a utility kit.

### Goals

- Speed up production
- Reduce human errors
- Get many tasks done in one place
- Free, portable, not platform dependent

### Utilities

#### Sort loose icon files into folders with naming convention

This is very helpful for me to build asset catalog (another big portion of my day job).

<img class="img-responsive" src="/images/2017-12-01-icon-processing-utilities-with-node-01.png" alt="Sort loose icon files into folders with naming convention" />

#### Minify svg code

Adobe Illustrator now supports exporting minified svg. However we have a lot of old files that were created before this feature came out. Also sometimes we forget to configure the export settings. This task uses svgmin package to do the job.

<img class="img-responsive" src="/images/2017-12-01-icon-processing-utilities-with-node-02.png" alt="Minify svg code" />

#### Compress png size

This task is alternative to a paid, Windows only software PNGOUTWin. Although there are similar png compressing software on Mac, the result isn't exactly what we need. With this task we have a little more flexibility on what data to keep/remove.

<img class="img-responsive" src="/images/2017-12-01-icon-processing-utilities-with-node-03.png" alt="Compress png size" />


#### Convert svg to png  

This task is very useful for converting lots of svg files to pngs with the same settings. We no longer need to boot up Adobe Illustrator and Photoshop.

<img class="img-responsive" src="/images/2017-12-01-icon-processing-utilities-with-node-04.png" alt="Convert svg to png" />

#### Make dark theme svg

Usually the artists only make light theme icons because in Visual Studio IDE there is a service that inverts icon colors programmatically. But some legacy UIs or apps can't access this service. The artists have to manually create dark theme icons by mimicking the inversion result.

This task replaces the color hex values from light theme value to dark theme value. It is not as dynamic as the real inversion mechanism in Visual Studio because it only inverts known colors in our palette.

<img class="img-responsive" src="/images/2017-12-01-icon-processing-utilities-with-node-05.png" alt="Make dark theme svg" />

#### Invert colors

This task uses a formula to invert color's luminosity.

<img class="img-responsive" src="/images/2017-12-01-icon-processing-utilities-with-node-06.png" alt="Invert colors" />

#### Make monochromatic svg

This task is helpful when we want to mimic the "disabled" state in Visual Studio.

<img class="img-responsive" src="/images/2017-12-01-icon-processing-utilities-with-node-07.png" alt="Make monochromatic svg" />

#### Make ico from pngs

This task is alternative to a paid, Windows only software Axialis IconWorkshop. It only covers the configurations we need.

### Source code
[https://github.com/chryw/iconutil](https://github.com/chryw/iconutil)
