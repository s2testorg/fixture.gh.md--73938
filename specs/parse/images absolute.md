---
testspace:
title: Images Absolute
description: Used for testing absolute referenced images 
parent: Parse
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

<pre>
![Image](/specs/parse/images.png "Spec")
</pre>

![Image](/specs/parse/images.png "Spec")


## Case Overview
Using the following content:

<pre>
Stuff here
![Image](/specs/parse/images.png "Scenario")

text here

* This
* That
</pre>

![Image](/specs/parse/images.png "Scenario")

text here

* This
* That

## Step Unordered List
Using the following content:
 <pre>
Text here

* This 
* That

  ![Image](/specs/parse/images.png "Steps")

* This
* That
</pre>

Text here

* This 
* That

  ![Image](/specs/parse/images.png "Steps")

* This
* That

 
## Steps Ordered List
Using the following content:

<pre>
Text here

1. This 
3. That

  ![Image](/specs/parse/images.png "Steps")

4. This
5. That
</pre>

Text here

1. This 
3. That

  ![Image](/specs/parse/images.png "Steps")

4. This
5. That


## Nested Steps Unordered List
Using the following content:

<pre>
Text here

* This 
* That

  ![Image](/specs/parse/images.png "Steps")

* This
  * What 

   ![Image](/specs/parse/images.png "Steps")

  * Wow
* That
</pre>

Text here

* This 
* That

  ![Image](/specs/parse/images.png "Steps")

* This
  * What 

   ![Image](/specs/parse/images.png "Steps")

  * Wow
* That
 
## Nested Steps Ordered List
Using the following content:
<pre>
Text here

1. This 
2. That

  ![Image](/specs/parse/images.png "Steps")

3. This
   * What 

   ![Image](/specs/parse/images.png "Steps")

   * Wow
4. That
</pre>

Text here

1. This 
2. That

  ![Image](/specs/parse/images.png "Steps")

3. This
   * What 

   ![Image](/specs/parse/images.png "Steps")
   
   * Wow
4. That

 
