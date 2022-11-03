---
testspace:
title: Basics
description: This Spec used for testing [syntax basics](https://help.github.com/en/articles/basic-writing-and-formatting-syntax). 
parent: Parse
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

## Lists
Using the following content:
<pre>
 * One
 * Two
   1. "a"
   3. "b"
 * Three
 </pre>


 * One
 * Two
   1. "a"
   3. "b"
 * Three


## Styling 
Using the following content:

<pre>
* **Bold**
* *Italic*
* ~~strikethrough~~
* **Bold and _italic_**
</pre>


* **Bold**
* *Italic*
* ~~strikethrough~~
* **Bold and _italic_**

## Code Block
Using both "```" and the "pre" element: 

```
$ testspace results
```

<pre>
$ testspace results
</pre>


## Blockquotes
Using the following content:

<pre>
> Beware of this and that
</pre>


> Beware of this and that

## Emoji
Based on [GitHub Markdown flavor](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#using-emoji). Here is the [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) reference. 

Add by typing `:EMOJICODE:`. 

Using the following content: 

<pre>
relaxed
eyes
+1
</pre>

:relaxed:

:eyes:

:+1:

