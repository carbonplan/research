---
id: toucan-crypto-offsets
date: 04-07-2022
title: Zombies on the blockchain
authors:
  - Grayson Badgley
  - Danny Cullenward
color: grey
summary: We analyzed the flow of carbon offset credits from conventional registries to the blockchain. Our work shows that nearly all of these credits have been excluded from conventional markets.
quickLook: The blockchain is giving new life to once-dead, low-quality offset credits
card: toucan-crypto-offsets
background: articles/016/zombie
icon: articles/016/zombie-small-wide
links:
  - label: Press coverage
    href: https://www.bloomberg.com/news/articles/2022-04-07/the-biggest-crypto-effort-to-end-useless-carbon-offsets-is-backfiring?srnd=cryptocurrencies-v2
  - label: Comment letter
    href: https://files.carbonplan.org/OSTP-Digital-Assets-Comment-Letter-05-09-2022.pdf
components:
  - name: Prices
    src: ./components/prices.js
  - name: Retirements
    src: ./components/retirements.js
---

As if carbon markets weren’t complicated enough, efforts to integrate carbon offsets and blockchain technologies are [growing](https://www.wsj.com/articles/cryptocurrency-traders-move-into-carbon-markets-11641826402) [in popularity](https://www.wired.co.uk/article/toucon-crypto-carbon-credits). Proponents of regenerative finance (ReFi) and carbon-based decentralized finance (DeFi) argue that blockchain-backed carbon offsets will facilitate increased transparency, deeper liquidity, and possibly higher voluntary carbon market prices that encourage greater emission reductions off the blockchain.

Optimists assert that credits transferred from existing registries to the blockchain represent real climate benefits. This belief is hard-wired into many ReFi / DeFi applications. For example, one of the largest ReFi efforts, KlimaDAO, [asserts](https://docs.klimadao.finance/blogs/about-carbon-offsets) that carbon offset registries Verra and Gold Standard “guarantee” each offset credit as additional, permanent, and verified.

As a result, the thinking goes, each and every registry-backed credit represents a perfect climate benefit, reliably equal to 1 ton of CO₂-equivalent. But as UC Berkeley researcher Claudia Herbert [reminds us](https://twitter.com/claudherb/status/1494803118009159680), “[i]f the basis of ReFi/carbon-themed DeFi apps is flawed, they won’t be able to deliver the desired climate change or environmental benefits.”

This article examines two problems we’ve noticed about the types of offset credits migrating to the blockchain. As explained below, these problems highlight structural weaknesses in blockchain-based theories of change and smart contract governance. They also raise fundamental questions about quality control at the largest conventional carbon offsets registry, [Verra](https://verra.org/).

## The Toucan Protocol Bridge

We focus on the transfer of conventional offset credits from the incumbent carbon offset registry system to Toucan, a blockchain-based approach to tracking carbon credits. As this “bridging” process may be unfamiliar to many readers, we’ll start with a quick overview of the basics.

In the world of conventional offset registries, projects follow special rules called carbon offset protocols to earn carbon offset credits. For example, a forest management or clean energy project that follows an applicable Verra offsets protocol earns credits called Verified Carbon Units (VCUs). Each VCU is meant to represent 1 ton of CO₂-equivalent, and can be traded freely or permanently retired to make a unique claim on its associated climate benefits.

Today’s blockchain-based carbon credits originate from conventional registry systems, using the same protocols developed and managed by the registries. Most of these credits migrate to the blockchain through the [Toucan Protocol](https://toucan.earth/), which issues Base Carbon Tokens (BCTs).<Sidenote>Other alternative systems are emerging to bridge registry credits, such as [MOSS](https://mco2token.moss.earth/) and [C3](https://medium.com/@C_3), though the market for Toucan BCTs is the largest as of this writing.</Sidenote>

To generate a BCT, a user must have an account with Verra and follow a set of steps to [bridge](https://docs.toucan.earth/protocol/bridge/carbon-bridge) registry-based credits to their new blockchain home. The core process involves retiring VCUs on Verra’s registry and marking the retirement “beneficiary” listing with a cryptographic key that identifies the blockchain wallet that seeks BCTs from Toucan. Once the required steps are completed on Toucan’s side, BCTs are issued on the blockchain to represent carbon claims that began as VCUs.<Sidenote>Toucan has also indicated an interest in working with other registries, notably [Gold Standard](https://www.goldstandard.org/), but so far it appears that transfers are only occurring through Verra.</Sidenote>

## A pot of crypto gold

As of this writing, over 21.6 million VCUs have migrated “on chain” since October 2021, with most becoming BCTs. Not only is the scale of migration relevant in its own right, but BCTs form the basis of other applications. For example, the prominent ReFi organization, [KlimaDAO](https://www.klimadao.finance/), issues KLIMA tokens that are themselves backed by blockchain-based carbon tokens. KlimaDAO currently says that its treasury account holds carbon tokens equal to [more than 17 million tons of CO₂-equivalent](https://twitter.com/KlimaDAO/status/1501765085970067462), including a large share of the BCTs issued by Toucan to date.

Although proponents of ReFi like to emphasize the environmental goals of their mission, there’s no denying the significant financial incentives to bring Verra offset credits on chain. Ecosystem Marketplace, an offsets industry intelligence provider, [reports that](https://www.ecosystemmarketplace.com/publications/state-of-the-voluntary-carbon-markets-2021/) as of mid-2021, renewable energy offset credits were trading in the $1-2 range and REDD tropical forest offset credits were trading closer to $4. When Toucan Protocol launched in late 2021, BCTs [traded](https://coinmarketcap.com/currencies/toucan-protocol-base-carbon-tonne/) in the $5-8 range. Although they have since fallen down to the $3-4 range, that still represents a tidy profit for large segments of the voluntary carbon market.

But the real money likely comes from converting BCTs to KLIMA tokens. In its initial months, KLIMA commanded [market prices](https://coinmarketcap.com/currencies/klimadao/) that were much higher — over $1000 and as high as the mid-$3000s for a brief moment. The market for KLIMA has since collapsed. By mid-January, prices had fallen to $100 and have continued to slide downward, with prices near $20 as of this writing. Anyone who bought KLIMA at $2000 might be upset that current prices are a factor of 100 lower, but a price of $20 is still a strong incentive to bring Verra credits — some worth just a few dollars in conventional markets — on chain.

<Figure>
  <Prices />
  <FigureCaption number={1}>
    Market prices for Toucan Protocol Base Carbon Tokens (BCT) and KlimaDAO
    tokens (KLIMA). Although BCT prices have been reasonably stable in the $3-8
    range, KLIMA prices have fallen substantially and consistently from their
    initial (and remarkable) highs. Nevertheless, even recent KLIMA prices in
    the neighborhood of $20 per token represent a significant arbitrage
    potential for conventional Verra offset credits that were once worth just a
    few dollars each.
  </FigureCaption>
</Figure>

Given the financial stakes and volumes involved in the registry-to-blockchain bridge, we were interested to dig deeper. Because Toucan-based retirements are openly recorded in Verra’s transaction database, we can see exactly which credits become BCTs and evaluate their quality. So which credits are moving on chain and do they represent credible climate claims?

Our analysis reveals two significant problems: (1) a suite of what we call “zombie” projects that were inactive until the economic incentive to generate BCTs came along, and (2) a striking finding that nearly all bridged credits come from projects that have been excluded from major segments of the conventional offset market due to quality concerns. Both call into question the climate claims being made by Toucan and associated blockchain-based efforts, like KlimaDAO.

## Zombie projects

<PullQuote>
  When the crypto market places higher value on BCTs and KLIMA tokens, these
  products can bring formerly defunct offset projects back to life
</PullQuote>

Even a quick glance at Toucan’s credits reveals a concerning pattern: Toucan appears to be generating entirely new demand for long-neglected credits that have experienced little or no demand in recent years. When the crypto market places higher value on BCTs and KLIMA tokens, these products can bring formerly defunct offset projects back to life.

We found that about 28 percent of Toucan-bridged credits (representing 6.0 million tons of CO₂-equivalent) come from what we call “zombie projects.” We define a zombie project as one that either (1) hasn’t recorded a single public retirement for two years prior to a Toucan-related retirement, or (2) has made over 95 percent of its publicly recorded retirements through Toucan.

So what do zombie projects look like?

One telling example comes from [VCS494](https://registry.verra.org/app/projectDetail/VCS/494), a natural gas project located just outside of Shanghai in China’s Jiangsu province. Prior to Toucan, the project’s last recorded retirement in Verra’s database occurred on April 30, 2013. Since November 2021, over half a million of the project’s credits have been bridged by Toucan. Having lain dormant for the better part of a decade, these neglected credits now find new life on the blockchain.

Then there are projects like [VCS191](https://registry.verra.org/app/projectDetail/VCS/191) that hadn’t seen a single retirement prior to Toucan. Although this hydropower project started operating in 2006 in Yunnan, China, its first retirement on Verra’s system occurred in late December 2021 as part of a bridge transaction to Toucan. Since then, Toucan-based transactions have retired over 2 million credits from the project — or about 10 percent of the BCTs issued to date. As of this writing, a staggering 98.9 percent of the project’s retirements have been via Toucan.

Credits from these projects are concerning because their histories suggest they failed to find any buyers in the voluntary carbon market, despite surging demand. If these credits aren’t finding buyers because they fail to meet buyers’ quality standards, then migrating those legacy credits to the blockchain doesn’t help increase climate ambition — it might even make things worse.

Zombie projects also raise fundamental questions about blockchain-based theories of change. One of the concepts espoused by proponents of Toucan and KlimaDAO is that these systems will “[sweep the floor](https://blog.toucan.earth/improving-bridge-approvals/)” of the voluntary carbon market, buying the cheapest credits on offer. By buying the bottom of the market — both in terms of price, and also, potentially, on quality — proponents hope that new demand will raise prices in voluntary carbon markets. Higher prices, in turn, might encourage greater emission reductions in the world at large and facilitate future higher-quality projects that are more likely to meet additionality and other critical offset standards.

Rather than eliminate supply from the voluntary market, however, zombie projects show that BCTs are bringing new supplies into existence — not in the form of new projects, but of old credits that weren’t previously able to find any buyers. In another world, this inventory might have been written off by offset project proponents as unsellable to discerning buyers. Thanks to demand from blockchain buyers, however, these low-quality credits found new life.

## Old credits, new markets

A second, related problem concerns the age and quality of credits moving through the Toucan Protocol Bridge.

Carbon market analysts have long pointed to the [backlog of old vintage credits](https://theconversation.com/outdated-carbon-credits-from-old-wind-and-solar-farms-are-threatening-climate-change-efforts-151456), raising questions about whether these old credits reflect real climate benefits. As debates over market standards have evolved in the world of conventional carbon markets, key market segments have adopted eligibility rules that prohibit the use of older credits to address the greatest risks of non-additional crediting outcomes.

<PullQuote>
  Nearly all (99.9 percent) of bridged credits are ineligible for CORSIA and
  standard market contracts
</PullQuote>

For example, the recently agreed-upon [rules for trading](https://www.technologyreview.com/2021/11/24/1040568/how-a-new-global-carbon-market-could-exaggerate-climate-progress/) Clean Development Mechanism credits under Article 6 of the Paris Agreement prohibit countries from using credits from [projects registered earlier than January 1, 2013](https://unfccc.int/documents/310511) (see paragraph 75). Similarly, the international aviation carbon offsetting standard, known as CORSIA, prohibits the use of [credits from projects initiated prior to 2016](https://www.icao.int/environmental-protection/CORSIA/Pages/CORSIA-Emissions-Units.aspx).

When Toucan first established its bridging protocol, it made Verra credits with [vintages 2008 and later](https://blog.toucan.earth/base-carbon-tonne-bct-a-new-web3-building-block/) eligible to earn BCTs. [Our analysis shows](https://github.com/carbonplan/toucan-crypto-explainer/blob/main/notebooks/core-analysis.ipynb) that if these Verra-based credits were subject to the Paris Agreement’s Article 6 cut-off rules, at least 18.3 million (84.8 percent) would be excluded because they came from projects that were registered before January 1, 2013.

We were surprised to find that nearly all (99.9 percent) of Verra credits transferred to BCTs have an initial crediting period prior to 2016, meaning that they would be ineligible for carbon offsetting use in the international aviation CORSIA program. This finding is particularly important, as standard market contracts for conventional offsets are being designed around CORSIA eligibility, such as CME Group’s [CBL Global Emissions Offset futures](https://www.cmegroup.com/trading/energy/cbl-global-emissions-offset-futures.html) index. Almost none of the credits moving on chain through Toucan would be eligible for conventional market trading through standardized contracts.

<Figure>
  <Retirements />
  <FigureCaption number={2}>
    The number of Verra offset credits bridged to Toucan BCTs, aggregated by the
    earliest reported vintage year associated with each offset project. A
    project’s earliest known vintage year serves as a conservative proxy for its
    initial crediting period, which is otherwise not tracked in Verra’s registry
    data. Projects receiving credits before 2016 are ineligible for the
    international aviation offsetting program CORSIA. Nearly all (99.9 percent)
    of credits bridged from Verra to Toucan BCTs are ineligible for the CORSIA
    program, indicating that Toucan is based almost entirely on credits that
    have been excluded from conventional offset markets on quality grounds.
  </FigureCaption>
</Figure>

These findings strongly suggest that many — if not the vast majority — of the credits migrated on chain via Toucan could not find buyers in key segments of the voluntary carbon market, which have formal rules to exclude questionable credits.

Although we are concerned that blockchain-based approaches are amplifying shortcomings in existing carbon markets and end-running standards put in place to address known problems, we aren’t the first to notice this problem. In fact, a [recent post on Toucan’s governance forum](https://governance.toucan.earth/t/increase-quality-of-the-base-carbon-tonne-bct/39) addresses the problems of zombie projects and old credit vintages:

> The Toucan team got behind the ‘sweep the floor’ narrative of Klima DAO for
> BCT, but given our mission we want to shift the narrative and focus on
> financing higher quality projects.
>
> <br />
> However this narrative and effect only works in the case where there is a finite
> supply of these lower credits that can be ‘swept up’, and with the constant issuing
> of cheap renewable credits which are continually brought on chain as soon as the
> price of on chain BCT develops a premium over the lowest cost of production.
> <br />
> The Toucan team would therefore like to increase the quality of the Base Carbon
> Tonne by moving the earliest vintage start date from 2008 to something like 2012
> or 2014, in order to increase the lowest cost of production, and the minimum quality
> TCO2s permitted into BCT.

We worry that this is too little, too late. Not only have tens of millions of credits already migrated on chain, but a vintage-year cut-off date of 2012 or 2014 does little to address quality concerns going forward. Restrictions by vintage year still allow older projects to bridge credits from newer vintage years, despite significant concerns about the climate additionality of many older projects’ fundamental claims. Other programs have explicitly prohibited these kinds of credits on quality grounds. For example, CORSIA’s rules exclude credits from any project that has ever generated credits prior to 2016 — no matter a credit’s vintage year.

## Blockchain governance shortcomings

We would be remiss if we didn’t observe the structural problem at the root of Toucan’s dilemma. The concept of smart contracts that offer broad eligibility for generating new carbon tokens from existing assets rests on the premise that somebody else has solved the credit quality problem. In this case, Toucan has assumed that Verra has already done the work. But as Toucan is now recognizing, Verra continues to host a number of questionable projects and protocols, via which new credits continue to be issued in response to novel demand from blockchain buyers.

<PullQuote>
  This regulatory arbitrage was made possible by the very same smart contract
  features that attract users to blockchain-based systems to turn a quick profit
</PullQuote>

Nor is this the first time that Toucan has enabled trading that circumvents regulatory standards found elsewhere in the carbon market. Early in Toucan’s experience, someone [began bridging](https://carbon-pulse.com/146462/) extremely low-quality HFC-23 offset credits — from an early type of offset project that is often considered the most noxious example of [non-additional crediting](https://doi.org/10.1038/445595a) in the history of carbon offsets. Europe famously [banned HFC-23 credits](https://ec.europa.eu/clima/news-your-voice/news/commission-adopts-ban-use-industrial-gas-credits-2011-06-08_en) from its carbon market many years ago, and since then they have found few buyers.

Toucan ultimately [cracked down](https://docs.toucan.earth/protocol/bridge/carbon-bridge/blocklist) on the eligibility of HFC-23 credits, but the game of regulatory whack-a-mole continues with zombie projects.

The repeated need for eligibility restrictions that [play catch-up to existing market standards](https://governance.toucan.earth/t/rfc-on-policies-related-to-the-vintage-issuance-date-delta/88) illustrates a profound weakness in blockchain governance. One of the core ideas behind blockchain applications is that simple rules in smart contracts facilitate distributed decision-making. This allows users to transact freely without the need for expensive, time-consuming negotiations. But automating transactions also introduces the risk of oversimplifying complex governance challenges, as evidenced by the phenomenon of zombie projects.

Because Toucan’s approach starts with broad eligibility criteria, it invites traders who understand the conventional offset markets to game whatever rules Toucan develops. In at least two instances in Toucan’s first six months, traders appear to have picked up on opportunities to dump inventory that had been deliberately excluded from other parts of the market on quality grounds. This regulatory arbitrage was made possible by the very same smart contract features that attract users to blockchain-based systems to turn a quick profit — rules that make the resulting system as brittle as it is open.

To their credit, Toucan’s leadership seems open to critical feedback and changing their rules to address problems as they emerge. Similarly, the open and transparent nature of blockchain-based transactions is a step forward from today’s voluntary market registries, on which it is [usually impossible](https://carbonplan.org/blog/offset-disclosure-needs) to track how credits are traded and used. Nevertheless, we aren’t convinced that “sweeping the floor” is doing anything but increasing churn in [a market that needs fundamental reform](https://www.bloomberg.com/news/articles/2022-03-16/carney-s-bid-to-boost-carbon-market-scaled-back-amid-controversy), not new software platforms.

In the end, a blockchain-based carbon offset strategy is only as good as the credits on which it is founded.<Sidenote>Setting aside concerns about the energy and carbon footprint of blockchain-based technologies, which are significant in their own right.</Sidenote> When organizations like Toucan or KlimaDAO outsource quality control to the carbon offset registries, they risk not only mirroring the problems in today’s voluntary markets — but as this article has illustrated, they also risk becoming the dumping ground for credits that have already been weeded out by more conscientious buyers. It’s no small irony that managing these risks requires a robust governance apparatus that anticipates, and not merely reacts to, interactions with the non-blockchain world.

You can build on our analysis and examine these projects yourself using the [code](https://github.com/carbonplan/toucan-crypto-explainer) underlying this post. We also recommend looking at [this helpful dashboard analysis](https://colab.research.google.com/drive/1rlInksw4PDilkOdJmxVqRDwDsbMqx3_Q?usp=sharing#scrollTo=5cH99IWPCB5X) from [@0xRez](https://twitter.com/0xRez), as well as following carbon offset experts [Claudia Herbert](https://twitter.com/claudherb) and [Lauren Gifford](https://twitter.com/LaurenGifford) for crypto-related commentary.

<Endnote label='Credits' divider>

Grayson and Danny performed the analysis and wrote the article.

Please cite this web article as:

G Badgley and D Cullenward (2022) “Zombies on the blockchain” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/crypto-toucan-explainer](https://carbonplan.org/research/crypto-toucan-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [no specific financial support](https://carbonplan.org/funding) for this work. The FTX Foundation, which was a nonprofit organization associated with the cryptocurrency exchange FTX, previously gave CarbonPlan an unsolicited and unrestricted donation in cash, but we subsequently [returned the funds](https://carbonplan.org/blog/ftx-donation-return) when they were requested by the FTX Debtors following the collapse of FTX, and we thus do not consider them a funder. Neither the authors nor CarbonPlan have any financial interest in cryptocurrencies.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Associated [analysis code](https://github.com/carbonplan/toucan-crypto-offsets) made available under an [MIT](https://github.com/carbonplan/toucan-crypto-offsets/blob/main/LICENSE) license.

</Endnote>
