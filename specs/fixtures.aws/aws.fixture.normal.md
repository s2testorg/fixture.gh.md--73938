---
testspace:
title: aws.fixture.normal
description: Normal AWS Fixture
parent: Fixtures AWS
before:
  name: aws:us-east-1:testspace-test-man-AwsFixtureTest
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
