---
testspace:
title: Tables1
description: Format 1. The Spec overview section. 
parent: Parse
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

Using the following content:

<pre>
c1  | c2 
----|----
one | two
one | two  
</pre>

c1  | c2 
----|----
one | two
one | two 

## Case
Using the following content:

<pre>
c1  | c2 
----|----
one | two
one | two 
</pre>

c1  | c2 
----|----
one | two
one | two 


## Steps
Using the following content:

<pre>

* Do this

   c1  | c2 
   ----|----
   one | two
   one | two 

* Do That
</pre>

* Do this

   c1  | c2 
   ----|----
   one | two
   one | two 

* Do That


## Steps with nested Steps
Using the following content:

<pre>
* Do this
    * and more

    c1  | c2 
    ----|----
    one | two
    one | two 

    * or this
* Do That
</pre>

* Do this
    * and more

    c1  | c2 
    ----|----
    one | two
    one | two 

    * or this
* Do That
