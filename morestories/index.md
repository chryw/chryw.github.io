---
layout: page
title: More stories
permalink: /morestories/
hidden: true
---

## Intro

I've been working in a UX team. My role focuses on the production and management of UX related imagery such as icons, illustrations, diagrams, etc. I lead a small image production team to support almost any product areas that need image assets. We translate business needs and technical requirements into tangible visual designs. Besides leading the production work, I help implement image assets and troubleshoot image related technical issues such as render performance, HDPI support, theming, and accessibility. I build catalogs and guidelines to ensure reusability and consistency. I write tools to accelerate production and optimize assets.

I'm passionate about front end development. I won't claim myself a full-fledged Front End Engineer just yet but this is definitely a career I'm heading into. My good sense of design and my experience working with developer tools are my advantages. I'm still learning and improving while I keep my eyes open to full time front end developer opportunities, so that I can officially start this career.


## Problem solving

### Evaluate the circumstance

- Do I have enough time and bandwidth to find the best solution?
- Is this a new problem or an old one that someone already had a few attempts?
- Can the deliverable be simplified, or be delivered progressively?

### Search

- Has anyone out there encountered similar problem before?
- What are tools out there that can help me solve the problem?
- A lot of times I can just find some node packages that can do the job. If there are multiple options, then I do a quick evaluation:
  - Which one has better quality? (download count, open issues, last commit date)
  - Is the API well documented? (aka. can I learn how to use it quickly?)
- Even if I have to write my own tool, usually there are still some small parts that I can borrow from elsewhere.

### Make it work

Often times I have too little time to plan thoroughly and create the most optimized solution. Fortunately I work in an Agile environment where we can progressively deliver and improve the experience. I always try to find the balance between making a perfect first iteration and being able to fix low-hanging fruit quickly.

### Make it pretty

Here "pretty" doesn't only mean visual or UX improvement. It's sometimes more important to have clean code manner, scalable project structure, and good workflow before I can make the end user experience pretty (in long term, not just one time). Once things are working (or at least seems working), and I get a little more time, I start thinking how I can make the source code better. Even if it's just a small solo project that no one else would look like my code, I still want to DRY it so that when I look back, I know what I did and I can pick up and scale it up. (Of course, as a newbie dev this is just something I try to remind myself about and I admit I have a lot of ugly projects that I have yet to clean up).

### Make it fast


## Story

### Icon catalog for Visual Studio product family ver. 1

#### Background

At our team we share a catalog of all icons used in Visual Studio yearly. The catalog will help 1st party and partner developers learn and find proper icon usage to build new features and extensions. I took over the task of making the catalog from a PM who left the team. The first catalog I made was a static pdf file generated with some data repeater technique.

The previous version had hundreds of icons. I heard that the catalog was built with MS Access and every year the PM would print a report pdf file from Access. Unfortunately I had no access to her project source (no one knows where the database was stored at). The next version of Visual Studio had a big visual and feature refresh, resulting 3000+ additional icon assets for new features and HDPI support. My task was to make a new catalog in pdf format that looks similar to the previous versions that was exported from Access, but include all the new icons. I only have all the icon files, fortunately named pretty well. I have one month to make the catalog.

#### Prep work

I realized that whatever method and tool I choose to generate the actual catalog pdf, I would need a spreadsheet of icon names, thumbnail path, and some descriptive metadata that would help users understand usage, and search for icons (if the name search isn't enough). So I built a metadata schema.

![Icon catalog metadata schema][schema]


[schema]: {{ "/images/morestories-iconcatalog-schema.png" | prepend: site.baseurl }} "Icon catalog metadata schema"