---
testspace:
title: gh.fixture.error_name_github
description: Error in name with github
parent: Fixtures GitHub
before:
  name: gitthub:normal
  description: before - simple input
  input: 
    a: this
    b: that
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround

