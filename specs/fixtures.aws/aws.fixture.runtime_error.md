---
testspace:
title: aws.fixture.runtime_error
description: Fixture Runtime Error
parent: Fixtures AWS
before:
  name: aws:us-east-1:testspace-test-man-AwsFixtureTest
  description: example input
  input: 
    error: one
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround
