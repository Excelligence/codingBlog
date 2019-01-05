---
layout: post
title: 'What is Sass'
excerpt: 'In this article we will explore the basics of what is sass'
---
Sass is abbrevation for Syntactically Awesome Style Sheets

Its a CSS preprocesser . It allows us to write code in .scss and it is compiled to css using a Sass compilers.

#### Why Use Sass

+ Writing stylesheets in Sass eases the process of coding and code maintenance.

+ We can use variables, nested rules, partials ,mixins and other feautures.
+ 

### Difference between .scss (Sassy CSS) and .sass

The full features sass provides are 

#### Using variables
#### Nesting
#### Partials
#### Mixins
#### Operators

#### Ways to Compile Sass

 [Ruby sass gem]('https://www.taniarascia.com/learn-sass-now/')

[node-sass]('https://medium.com/@brianhan/watch-compile-your-sass-with-npm-9ba2b878415b')

[Koala]('http://koala-app.com/')
Koala is a GUI application for Less, Sass, Compass and CoffeeScript compilation, to help web developers to use them more efficiently. Koala can run in windows, linux and mac.

[Gulp]('https://css-tricks.com/gulp-for-beginners/')
Gulp is a task runner 


`npm install node-sass`

Add following script to package.json file

{% highlight js %}
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "scss": "node-sass --watch scss -o css"
}
{% endhighlight %}