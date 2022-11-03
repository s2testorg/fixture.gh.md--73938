---
testspace:
title: aws.fixture.missing_lambda
description: Invalid Missing Lambda
parent: Fixtures AWS
before:
  name: aws:us-east-1:testspace-test-man-missing
  description: example input
  input: 
    a: one
    b: two
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround