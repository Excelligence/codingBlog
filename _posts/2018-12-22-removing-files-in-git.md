---
title: Removing files in git
layout: blogSinglePage
lang: 'lang-shell'
---

### Removing Files

Like adding to git you have to stage removals also. The command used for it is `git rm`

Note that this will remove that file from your working tree/working directory/hard drive

To remove the file from index/staging area only without removing from file system use  
`git rm --cached/--staged`  

To remove a file from Git, you have to remove it from your tracked files (more accurately, remove it from your staging area) and then commit. The git rm command does that, and also removes the file from your working directory so you don’t see it as an untracked file the next time around.

If you simply remove the file from your working directory, it shows up under the “Changes not staged for commit” (that is, unstaged) area of your git status output:

`git rm <file>` stages files removal

Another useful thing you may want to do is to keep the file in your working tree but remove it from your staging area. In other words, you may want to keep the file on your hard drive but not have Git track it anymore. This is particularly useful if you forgot to add something to your .gitignore file and accidentally staged it, like a large log file or a bunch of .a compiled files. To do this, use the --cached option:

`$ git rm --cached README`

#### Moving and renaming Files
`git mv`
This is equivalent to mv,rm,add.
