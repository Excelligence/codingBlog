---
title: Difference between innerHTML, textContent, innerText
layout: blogSinglePage
excerpt: What are the major difference between above properties.
---


<h3>innerHTML</h3>
<ul>
<li>innerHTML can be text content or HTML Source code</li>
<li>used to set or return HTML Content of an element</li>
<li>The innerHTML property returns the text, including all spacing and inner element tags. </li>


### innerHTML
<li>innerHTML can be text content or HTML Source code</li>
<li>used to set or return HTML Content of an element</li>
<li>The innerHTML property returns the text, including all spacing and inner element tags. </li>

</ul>
<h4>Setting HTML using innerHTML</h4>
<p>HTML</p>
{{site.html}}
&lt;p id=&quot;output&quot;&gt;Lorem ipsum dolor sit amet &lt;strong&gt;consectetur adipisicing elit. Ipsam &lt;/p&gt;
{{site.cbe}}
<p>Javascript</p>
{{site.js}}&lt;script&gt;
const output = document.getElementById(&#39;output&#39;);

 output.innerHTML=&#39;This is the &lt;strong&gt; text &lt;/strong&gt; content to be output&#39;

&lt;/script&gt;
{{site.cbe}}
<p>Output</p>
<p><img src='C:\Users\conta\AppData\Roaming\Typora\typora-user-images\1544884548562.png' alt='1544884548562' referrerPolicy='no-referrer' /></p>
<h4>What innerHTML returns</h4>
<p>HTML</p>
{{site.cbs}}&lt;p id=&quot;para&quot;&gt;Lorem ipsum dolor sit amet &lt;strong&gt;consectetur adipisicing elit. Ipsam laudantium &lt;/strong&gt;architecto nobis corporis consectetur. Ullam totam reprehenderit atque laboriosam beatae cumque, perferendis               earum, dolor exercitationem            inventore dicta, magni velit assumenda.&lt;/p&gt;

&lt;script&gt;

{{site.cbe}}
<p>Javascript</p>
{{site.cbs}}const p = document.getElementById(&#39;para&#39;)

const html=p.innerHTML

console.log(html)

{{site.cbe}}
<p>See that html tags and additonal spaces are preserved</p>
{{site.cbs}}
//Output

        //    Lorem ipsum dolor sit amet &lt;strong&gt;consectetur adipisicing elit. Ipsam laudantium &lt;/strong&gt;architecto nobis corporis consectetur. Ullam totam reprehenderit atque laboriosam beatae cumque, perferendis               earum, dolor exercitationem            inventore dicta, magni velit assumenda.
        //    Full HTML avaialable.
        


&lt;/script&gt;

{{site.cbe}}
<h3>textContent</h3>
<ul>
<li>To add text content only, no styles.</li>
<li>When setting text it will remove all child elements and replace it with the text.</li>
<li>Return text of all child elements.</li>
<li>The textContent property returns the text with spacing, but without inner element tags.</li>

</ul>
<h4>Setting text content</h4>
<p>HTML</p>
{{site.cbs}}&lt;p id=&quot;output&quot;&gt;&lt;/p&gt;
{{site.cbe}}
<p>Javascript</p>
{{site.cbs}}&lt;script&gt;
    const output = document.getElementById(&#39;output&#39;);
    output.textContent=&#39;This is the text content to be output&#39;
&lt;/script&gt;
{{site.cbe}}
<p>Output</p>
<p><img src='C:\Users\conta\AppData\Roaming\Typora\typora-user-images\1544885936443.png' alt='1544885936443' referrerPolicy='no-referrer' /></p>
<h4>What textContent returns</h4>
<p>HTML</p>
{{site.cbs}}
&lt;p id=&quot;para&quot;&gt;Lorem ipsum dolor sit amet &lt;strong&gt;consectetur adipisicing elit. Ipsam laudantium &lt;/strong&gt;architecto nobis corporis consectetur. Ullam totam reprehenderit atque laboriosam beatae cumque, perferendis               earum, dolor exercitationem            inventore dicta, magni velit assumenda.&lt;/p&gt;

{{site.cbe}}
<p>Javascript</p>
{{site.cbs}}
&lt;script&gt;



const p = document.getElementById(&#39;para&#39;)

const textContent=p.textContent

console.log(textContent)

{{site.cbe}}
<p>See that the html tags are taken away , but additional spaces are kept</p>
{{site.cbs}}// Output in console
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium architecto nobis corporis consectetur. Ullam totam reprehenderit atque laboriosam beatae cumque, perferendis               earum, dolor exercitationem            inventore dicta, magni velit assumenda.
{{site.cbe}}
<h3>innerText</h3>
<ul>
<li>the innerText sets or returns the text content of the specified node, and all of its child nodes</li>
<li>The innerText property returns just the text, without spacing and inner element tags. </li>
<li>Returns text of all elements except script tag and style tag</li>
<li>By setting this property, any child nodes are removed and replaced by a single Text node containing the specified string.</li>

</ul>
<h4>Setting innerText</h4>
<p>HTML</p>
{{site.cbs}}&lt;p id=&quot;output&quot;&gt;&lt;/p&gt;
{{site.cbe}}
<p>Javascript</p>
{{site.cbs}}&lt;script&gt;
    const output = document.getElementById(&#39;output&#39;);
    output.innerText=&#39;This is the inner text to be output&#39;
&lt;/script&gt;
{{site.cbe}}
<p>Output</p>
<p>&nbsp;</p>
<p><img src='C:\Users\conta\AppData\Roaming\Typora\typora-user-images\1544886106866.png' alt='1544886106866' referrerPolicy='no-referrer' /></p>
<h4>What does innerText return</h4>
<p>HTML</p>
{{site.cbs}}&lt;p id=&quot;para&quot;&gt;Lorem ipsum dolor sit amet &lt;strong&gt;consectetur adipisicing elit. Ipsam laudantium &lt;/strong&gt;architecto nobis corporis consectetur. Ullam totam reprehenderit atque laboriosam beatae cumque, perferendis               earum, dolor exercitationem            inventore dicta, magni velit assumenda.&lt;/p&gt;
{{site.cbe}}
<p>Javascript</p>
{{site.cbs}}&lt;script&gt;
const p = document.getElementById(&#39;para&#39;)

const innerText=p.innerText

console.log(innerText)
{{site.cbe}}
<p>Output in console</p>
<p>See that both html tags and additional spaces are removed.</p>
{{site.cbs}}
       //Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium architecto nobis corporis consectetur. Ullam totam reprehenderit atque laboriosam beatae cumque, perferendis earum, dolor exercitationem inventore dicta, magni velit assumenda.
{{site.cbe}}
</script>
<p>&nbsp;</p>
</body>
</html>