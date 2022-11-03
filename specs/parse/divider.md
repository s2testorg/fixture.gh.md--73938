---
testspace:
title: Divider
description: Used to test for dividers between markdown content. 
parent: Parse
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

## Middle of steps
The divider between `list`

 * One
 * Two
 * Three
---
 * Four
 * Five


## Between steps and code block
The divider between a `list` and `code block`: 

 * One
 * Two
 * Three
---
 
 ```
 $ do this
 ```

## Between code block and steps
The divider between `code block` and a `list`: 

 ```
 $ do this
 ```
---

 * One
 * Two
 * Three

## Between quoting text and steps 
The divider between `quoting text` and `list`:

> This is my text
---
* One
* Two
* Three

## Dummy case
Used to remove `Teardown`