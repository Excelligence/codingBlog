---
layout: post
lang: 'lang-js'
title: 'Browser reload in jekyll project using gulp and browsersync'
excerpt: 'Simple steps to use browsersync with gulp in a jekyll project'
---

##### Steps

1. Navigate to our project root directory.
2. Create package.json file  
	For following commands to work we must have node.js installed.
    We can install node.js from [this link](https://nodejs.org/en/download)  
    Create package.json file by running `npm init` in project root directory.
3. Install gulp as a dev dependancy.
    `npm install gulp --save-dev`  
4. Create a file named gulpfile.js in our project root. Add following contents to that file. 

```

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
      proxy: 'localhost:4000'
        });
    gulp.watch(['_site/*.*','_drafts/*.*','assets/*.*']).on('change',browserSync.reload)
});

```
Change the proxy to port in which you are running jekyll on your local machine.  
Now in your terminal/command prompt run jekyll server using `jekyll serve`.   
Run the gulp task using `gulp browser-sync`.  