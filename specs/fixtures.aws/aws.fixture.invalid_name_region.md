---
testspace:
title: aws.fixture.invalid_name_region
description: Invalid Name region 
parent: Fixtures AWS
before:
  name: aws:testspace-test-man-AwsFixtureTest
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
