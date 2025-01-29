---
version: 1.0.0
title: Do we need independent review of CDR protocols?
authors:
  - Freya Chay
  - Evan Sherwin
  - Sarah Baker
date: 1-24-2025
color: pink
summary: We conducted a stakeholder survey showing broad agreement that independent review of CDR protocols is needed. However, there appear to be diverse views on the desired scope and function of such a review.
quickLook: Stakeholder survey illustrates desire for independent protocol review.
card: protocol-review-survey
background: articles/030/form
icon: articles/030/form-small
components:
  - name: OrganizationsTable
    src: ./components/organizations-table.js
  - name: QuestionsTable
    src: ./components/questions-table.js
  - name: NovelEffortsTable
    src: ./components/novel-efforts-table.js
  - name: IndyReviewTable
    src: ./components/indy-review-table.js
  - name: RankingTable
    src: ./components/ranking-table.js
  - name: PerspectiveTable
    src: ./components/perspective-table.js
---

Over the past two years, there has been a marked increase in the number of carbon dioxide removal (CDR) protocols. Similarly, there are more entities involved in developing, providing input, and using those protocols. More protocols means more choice when deciding what rules should be used for crediting CDR. This raises the question: is new infrastructure needed to help stakeholders navigate this complexity?

To explore this question, CarbonPlan, Lawrence Livermore National Laboratory (LLNL), and Lawrence Berkeley National Laboratory (LBNL) recently conducted a survey of stakeholder opinions on the role of independent protocol review. This survey was partly motivated by an [open letter](https://files.carbonplan.org/CDR-MRV-Standards-Letter-02-10-2023.pdf) published in early 2023. In the letter, 35 organizations working on CDR called for the creation of a new standards initiative to review protocols and harmonize MRV approaches across and within CDR pathways. Although some protocol review processes are currently operating, none that we know of produce public outputs focused on long-duration CDR.

The survey found broad agreement about the value of independent CDR protocol review — but there seem to be some important differences in what stakeholders want from these reviews and how they think the process should function. Since a single protocol review process is unlikely to serve all these needs at once, anyone designing a protocol review must establish very clear goals upfront and set stakeholder expectations about what outcomes to expect.

## Survey approach

We designed this survey to capture views about both the importance of independent CDR protocol review and what outputs and focus areas respondents would want such a review to prioritize. The survey consisted of 12 structured and open-ended questions, a copy of which can be found [here](TK).

Throughout the survey, we defined “independent” as indicating a review conducted by parties substantially free of conflicts of interest, e.g. parties who are not involved in writing protocols, issuing credits, or receiving credits under a CDR protocol. We defined “protocol” as the document or set of documents specifying the detailed rules by which projects demonstrate what they have achieved and generate CDR credits that can be sold to buyers. We asked survey respondents to assume that the results of any independent protocol review would be made publicly available.

We invited 36 organizations to respond to the survey, including CDR providers, registries, brokers, buyers, investors, and non-profits. Survey participation was voluntary and participants were informed that all responses would be anonymized in the public reporting. In total, representatives from 26 organizations participated. No credit brokers investors provided a response.

<Figure>
  <OrganizationsTable
    data={[
      [
        'CDR Providers',
        'Charm, Climeworks, Ebb Carbon, Eion, Heirloom Carbon, Kodama Systems, Planetary Technologies, UNDO, Vaulted Deep',
      ],
      ['CDR Buyers', 'Amazon, Microsoft, Stripe, Shopify'],
      ['CDR Standard-setters', 'Isometric, Puro, Absolute Climate'],
      [
        'Ecosystem Actors',
        'Carbon Direct, Carbon Removal Alliance, Carbon to Sea Initiative, Carbon Standards Initiative, Carbon180, Cascade Climate, CO2RE, Linden Trust for Conservation, RMI, Spark Climate Solutions',
      ],
    ]}
  />
  <TableCaption number={1}>
    Representatives from 26 organizations participated in the survey. “Ecosystem
    Actors” includes both NGOs and academic initiatives
  </TableCaption>
</Figure>

## Survey results

Stakeholders widely agreed that novel independent protocol review efforts could support the development of a robust CDR ecosystem. A majority also expressed that such an effort should prioritize reviewing the accounting and quantification rules underpinning crediting calculations, rather than dimensions like protocol governance.

However, there was some substantive disagreement around the form a novel protocol review effort should take. Stakeholders had diverging opinions about whether protocol review would be most helpful if it focused on pathway-specific versus cross-cutting issues, and about what kind of outputs would be most useful.

### 01 — Stakeholders generally agreed that novel independent protocol review efforts could be helpful.

Stakeholders expressed broad consensus that protocol review has a near-term role to play (Table 2). As one standard setter put it, “When you really look into it, there are shockingly few checks and balances that exist to ensure that protocols are rigorous and remain rigorous over the long term.”

<Figure>
  <QuestionsTable
    data={[
      [
        'Do you think independent protocol review has a role to play in the near-term development of a robust CDR ecosystem?',
        '24',
        '1',
      ],
      [
        {
          main: "Do you think independent protocol review has a role to play in supporting your organization's CDR activities?",
          subtext:
            'E.g. selling CDR credits, buying CDR credits, investing in CDR companies, advocating for effective CDR policy, etc.',
        },
        '22',
        '3',
      ],
    ]}
  />
  <TableCaption number={2}>
    Structured data from multiple choice survey questions. One respondent
    abstained from each of these questions.
  </TableCaption>
</Figure>
Some protocol review efforts do already exist. Organizations like the Integrity Council
for the Voluntary Carbon Markets (ICVCM) conduct protocol reviews, but to-date, they
have not focused on long-duration CDR. Sophisticated CDR buyers run internal protocol
review processes, but the resources and effort that requires are unlikely to scale.
Credit rating agencies also review protocols, but the results are not made fully
public. Nevertheless, the majority of stakeholders expressed the opinion that there
is a place for novel, independent protocol review efforts. There was some divergence,
however, around the perceived urgency of filling those gaps (Table 3).
<Figure>
  <NovelEffortsTable
    question='Are novel efforts around independent protocol review needed in the near-term?'
    data={[
      [
        'Yes. There are opportunities for independent protocol review that merit near-term effort.',
        '15',
      ],
      [
        "Maybe. There are gaps that it might be useful to fill, but it's not clear that addressing them is a top priority.",
        '8',
      ],
      [
        'No. Existing efforts and resources are sufficient; further effort should not be directed toward novel independent protocol review at this time.',
        '1',
      ],
    ]}
  />
  <TableCaption number={3}>
    Structured data from multiple choice survey questions. Two respondents
    abstained from this question.
  </TableCaption>
</Figure>

Interestingly, stakeholders were also divided in their opinions about whether the importance of independent protocol review was likely to increase, decrease, or remain stable over time. This seemed to be partially explained by expectations about whether or not the content of protocols would converge or harmonize over time, perhaps by the entrance of definitive standards set by policy. For example, one Standard Setter who thought independent review would become less important over time said, “The freedom for a project to choose a protocol will be limited by emerging regulations by EU, UN and other institutions.” In contrast, one Buyer argued that protocol review is likely to “become more important as the landscape of registries becomes more competitive.”

<Figure>
  <IndyReviewTable
    question='Will independent protocol review become more or less important over the next five years?'
    data={[
      ['Likely to become more important.', '12'],
      ['Importance is likely to stay the same.', '9'],
      ['Likely to become less important.', '4'],
    ]}
  />
  <TableCaption number={4}>
    Structured data from multiple choice survey questions. One respondent
    abstained from this question
  </TableCaption>
</Figure>

### 02 — Most stakeholders wanted novel efforts to prioritize reviewing quantification and accounting rules.

Protocols include many elements, including eligibility rules, rules for quantifying how much net CDR a project has achieved, and procedural rules that determine how a project interacts with the protocol to receive credits. Stakeholders indicated that of the potential targets for review, they would want a novel protocol review process to focus on the rules for quantifying net CDR impacts — namely the accounting and quantification approach laid out by different protocols (Table 5).

<Figure>
  <RankingTable
    data={[
      [
        'Accounting approach',
        'Accounting boundaries, including life-cycle assessment approach (consequential vs. attributional), waste cut-off rules, co-product allocation rules, etc.',
        '11',
        '0',
      ],
      [
        'Quantification approach',
        'Sampling density, analytical tool calibration and deployment, model validation, data sources, uncertainty quantification, etc.',
        '11',
        '0',
      ],
      [
        'Non-carbon guardrails',
        'Sustainability criteria, community engagement requirements, etc.',
        '0',
        '7',
      ],
      [
        'Protocol governance',
        'Financial incentives around protocol development, revision cadence, licensing, transparency, etc.',
        '0',
        '4',
      ],
      [
        'Crediting procedure',
        'Timing of registration, verification, and credit issuance.',
        '0',
        '15',
      ],
      [
        'Credit characteristics',
        'Storage durability, type of durability guarantee (physical, regulatory, or contractual), additionality, etc.',
        '4',
        '0',
      ],
    ]}
  />
  <TableCaption number={5}>
    Respondents were asked to rank the six categories above in order of highest
    to lowest priority.
  </TableCaption>
</Figure>

The degree of consensus around prioritizing accounting and quantification approach
review was striking. Taking a different view on the data presented above, all but
four stakeholders ranked "Accounting approach" in the top two, and all but nine stakeholders
listed "Quantification approach" in the top two. As one buyer put it, “I tend to
find a lot of past efforts (e.g. ICVCM and the like) have tended to focus on governance
and procedure more than scientific accuracy, which I think is the more important
issue for an emerging field like durable CDR.” Or as one supplier noted, “The most
urgent issue is that different protocols and different technology pathways are subject
to different boundary conditions which can result in very different removals -subsequently
creating a convoluted climate impact.”

Despite this high-level consensus, we observed some underlying nuance around what kinds of questions should be prioritized within these categories. Some stakeholders indicated they wanted protocol review in these categories to focus on elements that are already broadly well-understood. For example, one Standard-setter said, “I bias towards the categories where consistency is needed, rather than innovation.” Other stakeholders emphasized the importance of reviewing dimensions of a protocol that involve open scientific questions or subjective decisions. As one Buyer put it, “The most critical components that need review are those that are prone to subjective design or sampling decisions…”

### 03 — Stakeholders expressed diverging views about the preferred outputs of a protocol and what those outputs could enable.

When asked what the primary utility of a protocol review would be, stakeholders referenced a number of potential functions. Many stakeholders expressed the desire for a watchdog function, establishing a “quality floor” to ensure that every protocol meets a minimum standard, preventing a race to the bottom. Several stakeholders who were interested in this role expressed an expectation that protocols will continue to proliferate. They raised the concern that there will be an increasing danger of protocol shopping, making it hard for suppliers who are doing the right thing to compete. For example, one CDR supplier said, “I fear CDR pathways (particularly open system ones) following the race to the bottom we have seen in REDD+ and soil carbon if we are not very careful.”

Another commonly mentioned role for protocol review was enhancing trust in the industry and enabling new demand. In this role, stakeholders emphasized the possibility to provide a general assurance of quality control and a shortcut to help decision-makers, such as buyers or policy-makers, make better decisions. However, multiple stakeholders expressed concerns that unless deliberately executed, a novel protocol review effort could cause more confusion than it resolves. As one ecosystem actor explained, “[T]here are a number of efforts to improve the credibility of the CDR market at the moment and buyers/policymakers are often responding to dozens of new "validators". I think any near-term protocol review would need to be done by a credible source that ensures it rises above the rest.”

Additional roles mentioned included helping CDR suppliers identify what protocols to use, facilitating learning and consensus building, facilitating protocol updates, standardizing language and concepts, and providing a model for similar efforts in other fields like methane removal.

While these roles are not all necessarily mutually exclusive, optimizing a protocol review process for any one of them is likely to involve trade-offs for the others. This was, perhaps, reflected in the divergence around the ideal scope of a protocol review and the preferred structure of its outputs.

Stakeholders were split when asked if they would prefer novel protocol review efforts to prioritize pathway-specific issues (e.g. modeling standards for enhanced rock weathering) versus cross-cutting issues that apply across multiple pathways (e.g. lifecycle assessment boundaries). Stakeholders also diverged on the preferred output of a protocol review – structured information vs. unambiguous pass/fail judgements – though the majority indicated a preference for structured information that enables individual actors to make their own judgement (Table 6).

<Figure>
  <PerspectiveTable
    data={{
      scopeQuestion:
        'Which of the following statements better describes your perspective about the ideal scope of independent protocol review?',
      outputQuestion:
        'Which of the following statements better describes your perspective about the ideal output of an independent protocol review?',
      scopeData: [
        [
          'Near-term protocol review will be more helpful if it focuses on in-depth review of issues that require consistent treatment within a particular CDR pathway',
          'E.g. modeling requirements across enhanced rock weathering protocols.',
          '15',
        ],
        [
          'Near-term protocol review will be more helpful if it focuses on cross-cutting review of issues that require consistent treatment across the diversity of CDR pathways',
          'E.g. lifecycle assessment boundaries.',
          '10',
        ],
      ],
      outputData: [
        [
          'Protocol review is more helpful when it provides structured, comparable information that enables individual actors to make their own judgments about protocols.',
          '18',
        ],
        [
          'Protocol review is more helpful when it results in an unambiguous pass/fail judgment against a well-defined benchmark.',
          '7',
        ],
      ],
    }}
  />
  <TableCaption number={6}>
    Structured data from multiple choice survey questions. One respondent
    abstained from each of these questions.
  </TableCaption>
</Figure>

We also observed tension between how various stakeholders imagined a review process interacting with established protocols. Many respondents emphasized the importance of reviewing existing protocols in an ongoing manner to incorporate new science and assess the real-world outcomes of the protocol. For example, one Ecosystem Actor said, “[W]e need regular cycles that also assess what worked and what didn't work in the implementation of the protocol so far.” But other stakeholders raised concerns that reviewing protocols that are already in use could call into question the viability of the protocol itself and credits that have been previously issued under it. As one Buyer said, “I'd prefer protocols get reviewed and improved before a supplier starts issuing credits against it to us, vs be[sic] getting credits and then changes being made that casts doubt on prior issued credits.”

## Takeaways

In sum, these survey results highlight that there remains significant potential for an independent protocol review process to support the development of the CDR ecosystem. However, it seems unlikely that a single review process will satisfy all stakeholders’ preferences.

Based on the perspectives shared in the survey, we could imagine many versions of near-term protocol review. For example, one version could be a small group of NGO actors reviewing cross-cutting accounting issues, like lifecycle assessment boundaries, on an ongoing basis when protocols are released or updated. Another version could involve convening pathway-specific review committees composed of academic, NGO, and government experts to periodically assess quantification rules around critical quantification topics. Yet another version could rely on a survey-based mechanism to trigger a process of synthesizing pathway-specific learnings and publishing protocol update recommendations proactively. Each of these versions of protocol review would be responsive to a different set of expressed stakeholder preferences. The question at hand is which function or functions should be prioritized and who is best positioned to lead them.

Moving forward, we think it will be very important for any entity developing a protocol review process to establish clear goals upfront and set stakeholder expectations accordingly.

<Endnote label='Credits' divider>

Freya designed the survey with input from Evan and Sarah. Freya wrote the first draft of the article. Thanks to Shane Loeffler and Maggie Koerth for production and editorial support.

Please cite this web article as:

Chay et al. (2025) “Do we need independent review of CDR protocols?" CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/protocol-review-survey](https://carbonplan.org/research/protocol-review-survey)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan’s work on this explainer was supported by grants from Adam and Abigail Winkel and the Grantham Foundation. Evan Sherwin and Sarah Baker were supported by the DOE Office of Technology Transitions in collaboration with the Office of Fossil Energy and Carbon Management (FECM) and the Office of Clean Energy Demonstrations (OCED). The authors are solely responsible for the content of this article.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
