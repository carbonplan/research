---
version: 1.0.0
date: 05-07-2026
title: Introducing Modeling Bytes
authors:
  - Tyler Kukla
  - Freya Chay
color: grey
summary: A series of posts examining in-the-weeds modeling decisions that matter when applying reactive transport models to enhanced weathering.
quickLook: A new series examining enhanced weathering modeling decisions.
background: articles/034/boxes
icon: articles/034/boxes-small
card: modeling-bytes-series
series:
  title: Modeling Bytes
  introLabel: Introduction
  entryLabel: Byte
  entries:
    - label: Reactive transport models
      href: /research/modeling-bytes-01-primer
    - label: Rock surface area
      href: /research/modeling-bytes-02-roughness
components:
  - name: SeriesToc
    src: ./components/series-toc.js
---

Modeling Bytes is a new series examining some of the in-the-weeds modeling decisions that matter when quantifying carbon removal from enhanced weathering (EW).

<SeriesToc />

Enhanced weathering involves a cascade of interconnected processes: dissolving minerals release alkalinity and take up carbon, which gets transported through soils and watersheds and eventually stored in the ocean. These processes are complicated enough that we need models to understand them — capturing the interplay between physics, biology, and chemistry, with the ultimate goal of estimating how much carbon removal happens as a result. Reactive transport models (RTMs) capture these processes, and lie at the heart of our attempts to understand EW.

Figuring out the right RTM setup for a given EW application is not straightforward. Modelers are faced with dozens of decisions for each RTM run, including how to structure the model, which physical and chemical processes to track, and how they should parameterize those processes. In more mature fields, such decisions are informed by field-wide norms established through years of careful work. In EW, we don’t have that yet.

This series analyzes choices modelers make when running RTMs for EW. These choices are rarely visible to non-modelers, but they can matter tremendously for the answers produced. Each Modeling Byte digs into one such decision, examining the current state of practice, identifying where uncertainty lies, and illustrating its effect on carbon removal estimates. Taken together, we hope the series provides an honest picture of where EW modeling stands today, and what it will take to build confidence in the carbon removal estimates RTMs produce.

Our first post is a simple primer on RTMs and their current use in EW. Our subsequent posts are more technical. As part of the initial release, we examine a mistake in how many EW models parameterize surface roughness that could inflate carbon removal estimates by up to two orders of magnitude.

If you’re actively running RTMs for EW, we’d love to hear from you. We're interested in suggestions for future topics and open to collaborating on Bytes — including unpacking modeling results that may not make sense for an academic publication, but could still be valuable to the field. If a Byte prompts you to dig into your own model and you find something worth sharing, we'd like to hear about that, too. Reach us at [hello@carbonplan.org](mailto:hello@carbonplan.org).

<Endnote label='Credits' divider>

Tyler and Freya wrote the post. Kata Martin and Shane Loeffler designed the series navigation. Grayson Badgley provided feedback on the text.

Header image (modified) by [
Rostislav Uzunov](https://unsplash.com/photos/a-black-and-white-photo-of-a-bunch-of-cubes-YygDC2m_0lY) on [Unsplash](https://unsplash.com/).

Please cite as T Kukla and F Chay (2026) “Introducing Modeling Bytes.” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/modeling-bytes-series](https://carbonplan.org/research/modeling-bytes-series)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan’s work on this article was supported by a grant from the Chan Zuckerberg Initiative DAF, an advised fund of Silicon Valley Community Foundation.

Article text is made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
