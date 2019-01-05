---
layout: post
lang: 'lang-shell'
---
The -O option selects the local file name to use by picking the file name part of the URL that you provide

you can use shell redirection like

curl http://example.com/ > example.html



You can fetch resources in a range by using a pattern like this

curl -O https://jsonplaceholder.typicode.com/photos/[1-100]

This will give us photo/1 to photos/100 one by one.

You can use alphabetical ranges also


curl -O http://example.com/section[a-z].html

You can give lists to fetch particular items
curl -O https://jsonplaceholder.typicode.com/photos/{5,10,15}
This will give photos/5,photos/10,photos/15

Its possible to combine different patterns for examples

curl -O https://jsonplaceholder.typicode.com/{photos,users}/[1-5]
This will output photos/1,photos/2 etc,users/1,users/2 etc.


Output Variables

Each pattern used in a URL gets a separate variable. They are referenced as '#[num]' - that means the single letter '#' followed by the pattern number which starts with 1 for the first pattern and ends with the last pattern.

curl "https://jsonplaceholder.typicode.com/{photos,users}/[1-5]" -o "details_#1_#2"

<img class="img-fluid" src="/assets/img/curl-output.png">



uploads

curl -T uploadthis http://example.co