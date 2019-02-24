---
layout: post
excerpt: Browsersync is a package for browser autoreloading. When we make changes to our code and save browsersync will autoreload the browser so that we don't have to manually reload it everytime.
lang: lang-html
excerpt: Browsersync is a package for browser autoreloading. When we make changes to our code and save browsersync will autoreload the browser so that we don't have to manually reload it everytime.
---

This is part 2 of a multipart tutorial. You can read part one in this link https://www.encaptcha.com/2019/02/24/getting-started-with-gulp. If you didn't read it please go and do it . This is a continuation of that tutorial. 
You can take this tutorial standalone also. 
The things you need are 
+ nodejs installed on your system which gives us access npm
+ You need to have gulp installed. 
+ A `gulpfile.js` file in your project root

Browsersync is a package for browser autoreloading. When we make changes to our code and save browsersync will autoreload the browser so that we don't have to manually reload it everytime.

Set up

+ First we have to install the npm package via commandline `npm install browser-sync`  
+ Now add following code to `gulpfile.js`
+ Don't be overwhelmed we will explain the code line by line.

```js
const gulp = require('gulp');  
const browserSync = require('browser-sync').create();
function message(done){
  console.log('Gulp is running...')
  done();
}
gulp.task('message',message)

//Copy all html files from src to dist
function copyHtml(done){
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
  done();
}
gulp.task('copyHtml',copyHtml)

//Browser sync init
function browser_sync(){
  browserSync.init({
    server:{
      baseDir:'./dist/'
    }
  })
}

//Browser sync reload function
function reload(done) {
  browserSync.reload();
  done();
}

function watch_files(){
  gulp.watch('./src/*.html',gulp.series(copyHtml,reload));
}

gulp.task('watch',gulp.parallel(browser_sync,watch_files));

gulp.task('default',gulp.parallel(copyHtml,watch_files,browser_sync));
```
Now we will break the code line by line to analyze it.

First part of the code we covered in the previous tutorial. We created a function to copy html files from `src` folder to `dist` folder.

Now we will explain new additions to previous code.

```js
const browserSync = require('browser-sync').create();
```
We are importing browser-sync package.

```js
//Browser sync init
function browser_sync(){
  browserSync.init({
    server:{
      baseDir:'./dist/'
    }
  })
}
```
He are we are setting our base directory to be served as the `dist`folder. Contents of this folder will be shown in the browser. Browsersync acts much like a server it will serve the folder we specify in the browser.

```js
//Browser sync reload function
function reload(done) {
  browserSync.reload();
  done();
}
```
We are defining a function called `reload` which invokes a `browser-sync` method called `reload()` which will reload the browser if any change occurs.

```js
function watch_files(){
  gulp.watch('./src/*.html',gulp.series(copyHtml,reload));
}
```
+ Here we are defining a function to watch files in the `src` folder.
+ `gulp.watch` is a gulp method which runs functions we defined when files we supply as arguments are changed. In the above code if any file with `.html` extension in `src` changes it will run the functions `copyHtml` and `reload`.
+ `gulp.series` is a method which let functions run one after other ie in series.
+ There is a similar method `gulp.parallel` which let functions run parallely.
+ `src` is the folder where we write our code. Once we save changes gulp will run `copyHtml` function and copy our files to `dist` folder. Then `reload` function will reload the browser. Browser will load the `dist` folder with the latest changes.

```js
gulp.task('watch',gulp.parallel(browser_sync,watch_files));
```
Here we are defining a task called `watch` which will run our `browser_sync` function and `watch_files` function.


```js
gulp.task('default',gulp.parallel(copyHtml,watch_files,browser_sync));
```
Here we are running all our functions parallelly as the default task ie to be run when we type `gulp` in the command line.

Now run task by typing `gulp` in commandline. It will run the task, open `dist` directory in our browser and if there are any file changes browser will reload automatically once we save changes.


