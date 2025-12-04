---
version: 1.0.1
title: Verra should address its hydropower offsets problem
authors:
  - Grayson Badgley
  - Freya Chay
date: 12-02-2025
summary: If Verra cares about quality, they need to clean up their growing supply of excess hydropower credits.
color: blue
components:
  - name: Issuances
    src: ./components/issuances.js
  - name: Summary
    src: ./components/summary.js
---

Verra, the world’s largest offset registry, recently acknowledged that it had issued millions of “[excess credits](https://verra.org/verra-acts-on-kariba-project-cancels-excess-credits-advances-independent-review/)” to Kariba, a large offset project that has [repeatedly](https://www.ftm.eu/articles/south-pole-kariba-carbon-emission) [made headlines](https://www.newyorker.com/magazine/2023/10/23/the-great-cash-for-carbon-hustle) in recent years. While we were [mostly unimpressed](https://carbonplan.org/research/kariba-excess-credits) with Verra’s proposed solution, we were encouraged to see Verra actually acknowledging that a problem exists. To our knowledge, this is only the second time that Verra has explicitly identified bad credits circulating in its program. If Verra wants to live up to its [promise](https://verra.org/programs/verified-carbon-standard/vcs-quality-assurance-principles/) that all Verra-backed credits represent credible climate benefits, it needs to keep going.

A natural place to focus next would be hydropower credits, which are widely regarded as among the least credible credits in the global offset market. In 2019, Verra made a very public shift away from registering new grid-connected renewable energy projects — including hydropower projects — citing concerns about additionality.<Cite id='verra.ban'/> But since then, they’ve issued tens of millions of credits to hydropower projects that were grandfathered in before the ban. In fact, nearly 70 percent of the hydropower credits listed on Verra’s registry have been issued since the effective ban on new projects (Figure 1).

<Figure>
  <Issuances />
  <FigureCaption number={1}>
    The number of Verra offset credits issued to hydropower projects by year.
    Nearly 70 percent of these credits have been issued since a 2019 rule change
    which banned new hydropower projects from the registry on the basis of
    additionality concerns. Issuances for 2025 are hashed, as more issuances
    might occur before the end of the calendar year. Data from [OffsetsDB](https://carbonplan.org/research/offsets-db).
  </FigureCaption>
</Figure>

This post argues that many, if not all, of Verra’s recently issued hydropower credits represent “excess credits.” If Kariba raised enough concerns to prompt Verra to action, these credits should, too. As such, Verra should take immediate steps to address this large and growing source of excess crediting.

## Problems from the start

Hydropower offset projects have been a staple of the global carbon market since the beginning. And they’ve been subject of critique and skepticism for nearly as long. Some of the first offset projects in the world involved hydroelectric power plants. As the United Nations stood up its carbon market in the early 2000s, many countries rushed to secure carbon financing for building dams that generate relatively clean electricity. In theory, financing hydropower through offsets would discourage the construction of dirtier power sources, like coal.

That theory quickly collided with reality, sparking some of the first critical literature on the global carbon market. As early as 2002, researchers pointed out that hydropower projects tended to have long lead times and were almost always supported by significant state resources that pre-dated access to carbon finance — both factors that called their additionality into question.<Cite id='haya.2002'/> By the early 2010s, hydropower projects were widely viewed as non-additional and an overall blemish on the carbon market’s record.<Cite ids={['haya.2011', 'erlewein-nusser']}/>

## Verra’s evolving stance

The rocky history of hydropower offsets might help explain why Verra decided to eliminate nearly all forms of _new_ hydropower offset projects within its program. From 2009 through 2019, Verra had issued credits to 197 hydropower projects. In 2019, however, Verra revised its rules and declared that grid-connected hydroelectric energy projects were no longer eligible to enroll — except for small projects in least developed countries (LDCs).<Sidenote>To date, Verra has issued only 1.8 million hydropower credits to 18 hydropower projects located in least developed countries. We conservatively assumed all these projects comply with Verra’s post-2019 rules and excluded them from our analysis.</Sidenote> By effectively banning new project enrollment, Verra argued that it had taken action to bolster the quality of its program. As Verra’s former CEO, David Antonioli, explained to [Bloomberg](https://www.bloomberg.com/news/articles/2022-11-17/how-the-2022-world-cup-rebuilt-a-market-for-renewable-energy-carbon-offsets):

> “We came to the conclusion that only those [projects] in least-developed countries were still additional,” said David Antonioli, chief executive at Verra. The verification body introduced the ban to “make sure carbon finance was driven to where it is needed most,” he said.

But Verra’s decision included a sizable loophole: Verra did not prohibit _existing_ hydropower projects from continuing to receive credits. Projects that completed their registration before the end of 2019 were allowed to continue generating credits, and could even renew their eligibility for two additional 10-year crediting periods.

## Verra’s active hydroelectric projects

Verra’s decision to continue crediting existing hydropower projects has created a gap between narrative and reality. The common narrative is that hydropower credits are a shrinking segment of the market, a relic from an earlier era where mistakes were made, lessons were learned, and remedies were put in place. The reality is that hydropower credits remain an active and expanding component of Verra’s registry.

Since the ban on new projects in 2019, Verra has issued tens of millions of hydropower-backed offset credits.<Sidenote>You can view the data and code underlying this analysis on [GitHub](https://github.com/carbonplan/excess-hydropower-credits)</Sidenote> As stated above, nearly 70 percent of all Verra’s hydropower credits have been issued after their 2019 rule change — totalling 155.8 million hydropower credits since 2020. That’s over nine percent of all the credits Verra has issued from 2020 onward to projects of any kind. Even the _number_ of credited hydropower projects has grown. To date, a total of 268 hydropower projects have been issued credits, a 36 percent increase from the 197 projects credited prior to 2020.<Sidenote>At least some of those new hydropower projects represent the “zombie” projects we linked to the [2021 crypto craze](https://carbonplan.org/research/toucan-crypto-offsets).</Sidenote> Concerningly, there are 79 _additional_ hydropower projects which enrolled in the program before the ban but have not yet been credited, meaning the problem could grow bigger still if Verra fails to take action.

## Examples of non-additional outcomes

Even a cursory look at some of the hydropower projects receiving credits from Verra today raises serious additionality concerns.

Take the Karcham Wangtoo project ([VCS1742](https://carbonplan.org/research/offsets-db/projects/VCS1742)), for example. In 1993, the Jaypee Karcharm Hydro company [entered into an agreement](https://timesofindia.indiatimes.com/city/shimla/cag-pulls-up-hp-on-benefits-to-power-co/articleshow/51818142.cms) with the state government of Himachal Pradesh to build the hydroelectric power plant along the Sultej river in northeastern India. After completion, the project enrolled under the UN’s offsets program, the Clean Development Mechanism, and, sometime in 2015, received its [first credits](https://cdm.unfccc.int/Projects/DB/RWTUV1310469729.49). But those were the last credits the project earned under the UN program. Based on publicly available documents, it appears that the Karcham Wangtoo project transferred into Verra’s program in 2018 — that’s 25 years after the dam received preliminary approval — and has gone on to earn over 30 million credits. In sum, the project was planned and approved long before carbon finance existed, suggesting its construction and operation were not contingent on credit revenue.<Cite id='erlewein-nusser' hide /> Moreover, the lengthy gap between the dam’s completion and the credits Verra has issued further indicates that the climate benefits would have been realized even without carbon financing.

Not all projects have a 25-year gap between planning and crediting from Verra, but many other hydropower projects exhibit the pattern of significant crediting gaps (Figure 2).
Such long droughts in carbon market revenue fundamentally call into question the claim that such projects required carbon funds to move forward in the first place. Long crediting gaps also undermine any argument that Verra couldn’t stop hydropower crediting without risking the financial solvency of these hydroelectric projects. If projects and investors really needed ongoing carbon finance to operate, crediting gaps shouldn’t exist.

<Figure>
  <Summary />
  <FigureCaption number={2}>
    A time series of Verra’s credit issuance to four illustrative hydropower
    projects with 8- to 10-year crediting gaps. These long gaps indicate that
    the projects continued operating without carbon finance, and suggest that
    later credits are non-additional. The second issuance wave for all projects
    occurs entirely after Verra’s 2019 rule change banning new hydropower
    projects due to additionality concerns.
  </FigureCaption>
</Figure>

## Is this excess crediting?

In looking into Verra’s hydropower projects, we found ourselves wondering what, if anything, distinguishes the ongoing issuance of hydropower credits from Kariba? Laying the two scenarios out side by side shows stark similarities (Table 1). There is no sign that either Kariba or these hydropower projects broke Verra’s crediting rules. Yet, despite that, subsequent information has emerged which indicates that the actual benefit of the project is less than the estimated benefit. For Kariba, the issue surrounds the project’s baseline. For hydropower, there are questions of additionality. In both cases, Verra has at least partially acknowledged those quality concerns. For Kariba, that has resulted in Verra proposing corrective actions in an attempt to address the problem. In contrast, Verra has not taken any action to address the growing supply of hydropower credits.

<Figure>
  <Table
    columns={4}
    start={[[1], [3, 3, 3, 3], [4, 4, 4, 4]]}
    width={[
      [2, 2, 2, 2],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ]}
    data={[
      ['', 'Kariba', 'Hydropower'],
      ['Did the project follow crediting rules?', 'Yes', 'Yes'],
      [
        'Quality concern that could lead to excess crediting',
        'Baseline',
        'Additionality',
      ],
      [
        'Has Verra acknowledged quality concern?',
        'Yes',
        <Box>
          Partially
          <Box sx={{ color: 'secondary', fontSize: 0, mt: 1 }}>
            (new project ban in 2019)
          </Box>
        </Box>,
      ],
      ['Has Verra acknowledged excess crediting?', 'Yes', 'No'],
    ]}
    borderTop={false}
    index={false}
    sx={{
      '& tr:first-of-type td': {
        color: 'blue',
        textTransform: 'uppercase',
        letterSpacing: 'smallcaps',
        fontFamily: 'heading',
        fontSize: [2, 2, 2, 3],
      },
    }}
  />
  <TableCaption number={1}>
    Summary of rule compliance, quality concerns, and Verra’s responses for the
    Kariba REDD+ project and hydropower projects.
  </TableCaption>
</Figure>

[In response to Kariba](https://carbonplan.org/research/kariba-excess-credits), we argued that Verra’s credibility rested on coming up with a solution to address 15 million excess credits. With hydropower, the scale of the problem is potentially an order of magnitude larger. If Verra does not consider these credits to be excess — and therefore in need of a Kariba-like remedy — it needs a compelling explanation for why.
