---
testspace:
title: aws.fixture.teardown
description: Normal with teardown fixture
parent: Fixtures AWS
before:
  name: aws:us-east-1:testspace-test-man-AwsFixtureTest
  description: BEFORE 
  _inactive_timeout: 2 # 2 minute timeout, ~ 1 minute "Continue" prompt
  payload: 
    a: this
    b: that
after:
  name: aws:us-east-1:testspace-test-man-AwsFixtureTest
  description: AFTER
  payload: 
    a: this
    b: that
---


{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{{ spec.description }}

{% include cases.md %}

## Workaround


