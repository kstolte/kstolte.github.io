---
title: 'Core Tenent: Shift Left'
excerpt: 'Shift left, and keep moving'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2022-09-08T00:00:00.000Z'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

By shifting left this includes
  
- Writing tests that reflect real world usage patterns.
  - Prevents Regressions when coupled with CI workflows.
  - If a bug or feature is complicated to set up manually through the interface it can be much faster to iterate using a test. This allows for automated build up/ tear down of the scenarios and the ability to debug a known state.
    - If you encounter a bug that is difficult to replicate, think through the ways of how you could force the scenario to happen repeatidly. During this process you will have better clarity of what other downfalls might happen due to a change or what is currently uncaught in existing testing methods.
- Doing Design Mocks
  - Specifically UI mockups to prevent theoretical conversations about how the flow would work. No two people have the same concept of what something will look like based on a discussion.
  - This Design mocks will also inform or highlight other usage scenarios to make a stronger product. Lead the team to move towards collaborating during the mocking phase so that everyone stays on the same page. Then release the mock to stakeholders and get feedback. Consider this feedback and do not bok at it.
- Use A/B Testing
  - compare the performance of the UI and back end changes in a structured manner.
  - Look for the same things across both ends of the change.
  