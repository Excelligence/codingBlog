---
layout: post
lang: lang-html
excerpt: In this tutorial we are going to create a workflow using gulp 4 containing sass compilation, image minification, javascript minification etc.
---
#### HTML, CSS Workflow with Gulp, Browsersync.
This is part one of a multi part tutorial where we are going to create a workflow using gulp 4 containing sass compilation, image minification, javascript minification etc.

In this part we will install `gulp`, create necessary folders and define a task to copy html files.

Steps

#### Install gulp and test it.

+ Install nodejs from [nodejs site]('https://nodejs.org') 
+ Create our project directory, this directory holds all our project files.  
+ Now cd into our project directory using commandline in windows or terminal on mac.
+ Run `$ npm init -y` in the project directory to create our `package.json` file. The -y flag is to answer yes for all the questions asked. 
+ Now install these packages using npm. 
```bash
$ npm install gulp browser-sync
```

+ Create a file named `gulpfile.js` in root of our project directory. 
+ Add following code in the `gulpfile.js` for testing  


```js
const gulp = require('gulp');  
function message(done){
  console.log('Gulp is running...')
  done();
}
gulp.task('message',message)
```
Now run the task using commandline

```shell
$ gulp message
```
We will see a output like this
```shell
$ gulp message
[16:02:47] Using gulpfile C:\fontendworkflow\gulpfile.js
[16:02:47] Starting 'message'...
Gulp is running...
[16:02:47] Finished 'message' after 2.19 ms
```
Now we will break the code step by step and analyze what it is doing.
```js
const gulp = require('gulp');  
```
Gulp is imported.
```js
function message(done){
  console.log('Gulp is running...')
  done();
}
```
We define a function called `message` which simply logs to console that `gulp is running...`  
In that function we pass a callback function call `done()` and invoke it after our task was finished. Otherwise gulp will show an error like this

```shell
[21:34:54] The following tasks did not complete: message
[21:34:54] Did you forget to signal async completion?
```
Now we have completed the first step installing and testing gulp. We will move to the next step.

#### Create a src folder

Created a folder named `src` in your project root. This folder will contain all our source files. We add our html,css,js and other assets in this folder. We will run tasks on this folder and write output files to a folder called `dist` in the root folder.
Now we will add a some files in this folder

Add an index.html and add following content

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>This is my front end workflow</h1>
</body>

</html>
```
Now we move to next step.

#### Create a task to copy html files

Add following task in our `gulpfile.js` to copy html files to the dist folder.

```js
//Copy all html files from src to dist
function copyHtml(done){
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
  done();
}
gulp.task('copyHtml',copyHtml)
```
Here we are defining a task to copy all html files from src folder and moving it to a folder named dist. Now run that task using `gulp copyHtml` in commandline. A new folder named `dist` will be created and `index.html` will copied into it.

We will continue the balance parts in coming  posts.