---
testspace:
title: gh.fixture.error_runtime
description: Error in runtime handler
parent: Fixtures GitHub
before:
  name: github::runtime_error
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




