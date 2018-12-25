---
layout: blogSinglePage
lang: 'lang-css'
---



## Customise Bootstrap sass
Dont' modify the source code of bootstrap instead of just overriding parts of it.  

Please consider instead of modifying the bootstrap source code (SCSS inside the bootstrap folder), to create a separate SCSS file for the Bootstrap modifications and another separate one for stylizing the website (index.html).

Here's what I did:

created three SCSS files inside my "scss" folder, namely:

### custom_bootstrap.scss  (overrides default colors and settings of bootstrap and imports bootstrap)

     // override default colors
        
     $blue: #3292a6;


​    
     // import bootstrap
       
     @import "../bootstrap-4.1.3/scss/bootstrap"


### style.scss  (defines the styles of the website)

     // custom styles go here
        
    // NOTE: Changing Default Bootstrap settings requires editing -> custom_bootstrap.scss!
        
    // Here we only stylize the site that is under construction!
        
    $primary: #3292a6;
        
     $primary-overlay: rgba(50,146,166,0.8);

These vairables are for style.scss which is the custom styles for the site, for eg the replacement of style.css in normal web design

### main.scss  (imports both custom_bootstrap.scss and style.scss)

    // Imports customized bootstrap and imports new styles for the website
        
     @import "custom_bootstrap";
        
    @import "style";

+ loaded up Koala

+ Told Koala to compile  main.scss  only and output the results into the  css/style.css  file.

+ Linked  css/style.css  inside my index.html file:

{{site.html}}
    Custom Bootstrap and SCSS Style
 link rel="stylesheet" href="css/style.css"
{{site.cbe}}


Now, I could simply modify Bootstrap without touching its source file and this allows me to update bootstrap without loosing my settings if I decide to  update my bootstrap folder without second guessing my self.