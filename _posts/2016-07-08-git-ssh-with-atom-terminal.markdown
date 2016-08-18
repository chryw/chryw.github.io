---
layout: post
title:  "Git SSH with Platformio IDE Terminal for Atom"
date:   2016-07-08 13:48:27 -0700
categories: project
tags: workflow productivity git version control
thumbnailurl: "/images/2016-07-08-git-ssh-with-atom-terminal.png"
thumbnailswap: true
excerpt_separator: <!--more-->
---

This is my recipe for using git via ssh in the terminal panel of Atom for Windows.

<!--more-->
For my own git projects on GitHub and work projects on VSTS, I prefer to use ssh with command line over a GUI. Both places have two-factor authentication enabled. Therefore I have to do these things before I can access my repos via ssh:

1. generate ssh keys
2. add them to my accounts
3. start ssh-agent
4. ssh-add my ssh keys

GitHub has provided some good help doc for doing those.
[https://help.github.com/categories/ssh/](https://help.github.com/categories/ssh/)

The problem is ssh-agent doesn't save keys. I'll have to do 3 and 4 every time when I start a new terminal session. It'd be nice to have my terminal automatically do those two steps whenever I start a new session.

I use Atom on Windows. For terminal I usually use a package called [Platformio IDE terminal](https://atom.io/packages/platformio-ide-terminal). This way I don't have to launch another app (like Git Bash or PowerShell). With this package I can set start-up scripts, which is perfect for getting ssh ready in my scenario. Here's my recipe:


1. Of course, install [Atom](https://atom.io/) and [Platformio IDE terminal](https://atom.io/packages/platformio-ide-terminal).

2. Go to the settings page of this package, set the Shell Override:
![Shell Override](/images/2016-07-08-git-ssh-with-atom-terminal-1.png) By default on Windows, it uses PowerShell. I found it hard to use SSH in PS, so I switched it to Windows cmd.
I also tried Git Bash, but it will not stay inside a panel in Atom. It works, just not pretty.

3. In the Settings page, write down these ssh commands in the "Auto Run Command" box.
```
start-ssh-agent.cmd && ssh-add ~/.ssh/id_rsa
```
You may need to specify the location of where your ssh keys are stored, if not in the default ~/.ssh/ folder. Also specify the key file names if you have more than one key like I do.
```
start-ssh-agent.cmd && ssh-add ~/.ssh/mykey_rsa && ssh-add ~/.ssh/myotherkey_rsa
```
![Shell Override](/images/2016-07-08-git-ssh-with-atom-terminal.png)

4. See that "start-ssh-agent.cmd" above? It comes with Git for Windows. I use this provided script instead of the Linux way work-around ```eval $(ssh-agent -s)``` because sometimes the eval thing can get confusing if I'm not using Git Bash.

5. Now restart Atom and open a terminal panel to test if it works.
One way is to use this ssh command:
```
ssh -T git@github.com
```
The other way is to do a git fetch to your repo.
