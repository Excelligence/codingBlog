---
layout: post
title: ‘How to change base font size for rem unit?
excerpt: Two ways to change base font size for rem unit.
lang: lang-html
---

#### Two ways to change base font size for rem unit.

+ First Method

Add this to your css

```
html{
    font-size:10px;
}
```
Change the font-size from 10px to whatever you require.

See an example on codepen below

Click on HTML,CSS tabs to see them.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="excelligence" data-slug-hash="vqXozP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rem unit base font size by html">
  <span>See the Pen <a href="https://codepen.io/excelligence/pen/vqXozP/">
  rem unit base font size by html</a> by Excel (<a href="https://codepen.io/excelligence">@excelligence</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

+ Second Method

Add this to your css

```
:root{
    font-size:10px;
}
```
Change the font-size from 10px to whatever you require.

See an example on codepen below

Click on HTML,CSS tabs to see them.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="excelligence" data-slug-hash="KjgOZM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rem unit base font size by root">
  <span>See the Pen <a href="https://codepen.io/excelligence/pen/KjgOZM/">
  rem unit base font size by root</a> by Excel (<a href="https://codepen.io/excelligence">@excelligence</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

