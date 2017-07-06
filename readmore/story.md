---
layout: page
title: Story
permalink: /story/
hidden: true
---

## Icon catalog for Visual Studio product family ver. 1

### Background

At our team we share a catalog of all icons used in Visual Studio yearly. The catalog will help 1st party and partner developers learn and find proper icon usage to build new features and extensions. I took over the task of making the catalog from a PM who left the team. The first catalog I made was a static pdf file generated with some data repeater technique.

The previous version had hundreds of icons. I heard that the catalog was built with MS Access and every year the PM would print a report pdf file from Access. Unfortunately I had no access to her project source (no one knows where the database was stored at). The next version of Visual Studio had a big visual and feature refresh, resulting 3000+ additional icon assets for new features and HDPI support. My task was to make a new catalog in pdf format that looks similar to the previous versions that was exported from Access, but include all the new icons. I only have all the icon files, fortunately named pretty well. I have one month to make the catalog.

### Prep work

I realized that whatever method and tool I choose to generate the actual catalog pdf, I would need a spreadsheet of icon names, thumbnail path, and some descriptive metadata that would help users understand usage, and search for icons (if the name search isn't enough). So I built a metadata schema. 

![Icon catalog metadata schema][schema]


[schema]: {{ "/images/morestories-iconcatalog-schema.png" | prepend: site.baseurl }} "Icon catalog metadata schema"
