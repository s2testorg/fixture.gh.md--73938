---
testspace:
title: gh.fixture.normal
description: Normal workflow
parent: Fixtures GitHub
before:
  name: github::normal
  description: before - simple input
  payload: 
    a: this
    b: that
---


{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround


