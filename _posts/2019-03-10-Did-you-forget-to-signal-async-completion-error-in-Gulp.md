---
layout: post
title: ‘Did You forget to signal async completion’ error in Gulp?
excerpt: This is a common error people get when they migrate from Gulp 3 to Gulp 4. In this article we discuss how get around this error quickly.
lang: lang-html
---

We have installed `gulp` and created `gulpfile.js` file. 
We have following code in `gulpfile.js` file.

```js
gulp.task('message',function(){
console.log('Gulp is running...');
})
```

This is a simple task for logging that `Gulp is running...`
But when I run the task using Gulp it is showing following error

```bash
$ gulp message
[21:34:54] Using gulpfile C:\Project\gulpfile.js
[21:34:54] Starting 'message'...
Gulp is running...
[21:34:54] The following tasks did not complete: message
[21:34:54] Did you forget to signal async completion?
```
From Gulp 4 onwards you have to explicitly mention when a task is completed.
You can solve this error using various methods. In cases like this a simple approach is by passing  a callback function to the task is the quickest. We will call that function when our task is done.

You can use one of the following code snippets.
```js
const gulp = require('gulp');  

gulp.task('message',function(done){
console.log('Gulp is running...');
done();
})
```
Below code code is following the improved syntax Gulp 4 provides.

```js
const gulp = require('gulp');  
function message(done){
  console.log('Gulp is running...')
  done();
}
gulp.task('message',message)
```

After defining your tasks using the callback `Did you forget to signal async completion?the error?`   will be gone.