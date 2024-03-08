---
date: 03-08-2024
title: How OffsetsDB Works
card: offsets-db-methods
quickLook: A brief intro to the methods behind our new carbon offsets database
slug: offsets-db-methods
back: /research/offsets-db
components:
  - name: TableCategories
    src: ./components/table-categories.js
  - name: Figure
    src: '@carbonplan/components'
---

# How OffsetsDB Works

The goal of OffsetsDB is to make access to offsets data easy and reliable so that more people are able to study how offsets are used. This is a critical part of improving market oversight. The database provides consistently formatted and regularly updated data about offset projects and offset credits sourced from five of the largest and most active offset registries: American Carbon Registry (ACR), ART TREES (ART), Climate Action Reserve (CAR), Gold Standard (GLD), and Verra (VCS). It is available for [download](https://offsets-db-data.readthedocs.io/en/latest/data-access.html) and through an interactive [database tool](https://carbonplan.org/research/offsets-db).

This document briefly describes the methods behind OffsetsDB. For more details, please refer to [the code used to produce OffsetsDB](https://github.com/carbonplan/offsets-db-data), as well as [the technical documentation describing that code](https://offsets-db-data.readthedocs.io/en/latest/).

Raw data are sourced directly from offset registries. After saving the raw, unaltered data, we then run it through a series of normalization functions that make project and credit data consistent across the registries. Normalizations take several forms. For example, we use the Python package [country_converter](https://github.com/IndEcol/country_converter) to correct small misspellings and otherwise harmonize the names of the countries where projects are located. Other normalizations ensure that date formats and credit issuances and retirements are consistent across registries.

OffsetsDB also annotates the raw registry data with additional information, with the most notable annotation being the categorization of all offset protocols that appear in the data. Protocols, drafted and administered by the offset registries, lay out the rules for generating offset credits. As part of the normalization process, we map all references to individual protocols to a unified taxonomy. We then assign each protocol a single category. The six largest categories are:

<Figure>
  <TableCategories />
</Figure>

These categorizations focus on the underlying mechanism behind credit generation, as opposed to the specific location or technological approach behind credit generation. As with any categorization, the borders between categories sometimes blur. Despite that overlap, we assign all protocols to a single category. Fuel switching and energy efficiency protocols often overlap, for example. Strictly speaking, renewable energy projects operate under the premise that renewable energy displaces some other, more polluting fuel. But our categorization of renewable energy projects represents a special case of fuel switching where the new fuel theoretically generates zero ongoing greenhouse gas emissions. We made renewable energy a top-level category because of this distinction and because of the prominence of these types of projects in the market.

We also annotate projects with various news stories, academic articles, and industry reports.
These annotations are not produced automatically and will be updated with less frequency. You can view a full record of those annotations through the [Updates](https://carbonplan.org/research/offsets-db/updates) view of OffsetsDB. Articles associated with specific offset projects also appear on a timeline included in the project-specific page within OffsetsDB.

We update OffsetsDB on a daily basis, pulling in all available registry data.

If you have any questions, suggestions, or see something that needs fixing, please send us an email at [hello@carbonplan.org](mailto:hello@carbonplan.org) or [open an issue on GitHub](https://github.com/carbonplan/offsets-db-data/issues).

## Terms

Associated [analysis package](https://github.com/carbonplan/offsets-db-data) and [web tool](https://github.com/carbonplan/offsets-db-web) made available under an [MIT license](https://github.com/carbonplan/offsets-db-web/blob/main/LICENSE). Data associated with OffsetsDB is subject to additional [terms of data access](https://offsets-db-data.readthedocs.io/en/latest/TERMS-OF-DATA-ACCESS.html).

## Citation

Please cite OffsetsDB as:

CarbonPlan (2024) “OffsetsDB” <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/offsets-db](https://carbonplan.org/research/offsets-db)</span>
