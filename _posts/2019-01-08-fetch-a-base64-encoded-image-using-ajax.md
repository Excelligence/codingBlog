---
layout: post
excerpt: Fetch image using AJAX
title: Fetch a base64 encoded image using AJAX.
lang: 'lang-html'
---

Steps
- Navigate to project directory.
- Encode the files using following commands

```console
$ base64 image.jpg > image.b64
```
Instead of `image.jpg` enter your source image, enter the name for your destination file after `>`.  

- This is our website markup.

```html
//HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Image Fetch</title>
</head>
<body>
    <button id="button">Show image</button>  
    <div id="output"></div>
</body>
</html>

```
A button to get to initiate the fetch process and an output `div` to display the output image.

- Use following AJAX snippet to fetch that image.  
  
```Javascript
//Javascript
document.getElementById('button').addEventListener('click', getImage);
function getImage(){

const xhr= new XMLHttpRequest();

xhr.open('GET', 'image.b64'  , true);

xhr.onload= function(){

    if(this.status ===200){
        document.getElementById('output').innerHTML = `<img src="data:image/jpeg;base64,${this.response}">`
    }
    };
    xhr.send();
}

```

The javascript step by step

```js
document.getElementById('button').addEventListener('click', getImage);
```
We run function `getImage` on click of the button.  

```js
const xhr= new XMLHttpRequest();

xhr.open('GET', 'image.b64'  , true);

```
Instantiate an xhr object.  
Make a ajax request to fetch data from image.b64.

```js
 document.getElementById('output').innerHTML = `<img src="data:image/jpeg;base64,${this.response}">`

 ```
```js
 `<img src="data:image/jpeg;base64,${this.response}">`
 ```
 If status is 200 we will display the response in ouput div element.

 Here the `${this.response}` contains the base64 encoded image contents. 
