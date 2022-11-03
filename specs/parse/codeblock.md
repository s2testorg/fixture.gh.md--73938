---
testspace:
title: Code Block
description: Used to test for code blocks and spacing.  
parent: Parse
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

## Basic with "backticks"

```
testspace:
  branch: b1
  specs:
    path: cycle1
```

## Basic with "pre"

```
testspace:
  branch: b1
  specs:
    path: cycle1
```

## Nested with "backticks"
And within nested block code using following content:

<pre>
* One
   ```
   ./run.sh
   ```
  * Two
    ```
    ./run.sh
    ```
  * Three
* Four
* Five
</pre>


* One
   ```
   ./run.sh
   ```
  * Two
    ```
    ./run.sh
    ```
  * Three
* Four
* Five

## Nested with "pre"
And within nested block code using following content:

```
* One
   <pre>
   ./run.sh
   </pre>
  * Two
    <pre>
    ./run.sh
    </pre>
  * Three
* Four
* Five
```

* One
   <pre>
   ./run.sh
   </pre>
  * Two
    <pre>
    ./run.sh
    </pre>
  * Three
* Four
* Five

## Image syntax
Image using an absolute path - using triple backticks
```
![My Image](/images/myimage.png "Image here")
```

Image using an absolute path - using "pre"

<pre>
![My Image](/images/myimage.png "Image here")
</pre>

Image using a relative path - using triple backticks
```
![My Image](../images/myimage.png "Image here")
```

Image using a relative path - using "pre"
<pre>
![My Image](../images/myimage.png "Image here")
</pre>

Links to image:

Using triple backticks
```
![My Image](https://upload.wikimedia.org/wikipedia/commons/3/3b/Check_icon.svg "Is this a check")
```

Using "pre":
<pre>
![My Image](https://upload.wikimedia.org/wikipedia/commons/3/3b/Check_icon.svg "Is this a check")
</pre>


## H1, no spaces
Code block following:

```
# New 1
This is a spec
## Case 1
Whatever
```

## H2, extra space
Code block following:

```
# New 1
This is a spec
 ## Case 1
Whatever
```