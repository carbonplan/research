---
version: 1.0.0
title: “What is CDR?” is the wrong question
authors:
  - Freya Chay
  - Zeke Hausfather
  - Kata Martin
color: secondary
date: 02-25-2025
summary: We summarize the ongoing debate around what “counts” as CDR, highlighting the trade-offs of each proposed definition. We suggest an alternative set of questions that can provide a more meaningful guide to making effective CDR investments.
components:
  - name: Activities
    src: ./components/activities.js
  - name: Scenarios
    src: ./components/scenarios.js
---

Carbon dioxide removal (CDR) is formally defined by the IPCC as “activities that remove CO₂ from the atmosphere and store it durably in geological, terrestrial, or ocean reservoirs, or in products.”<Cite id='ar6.2022' /> Although that definition seems clear on paper, there has been [ongoing](https://carbonplan.org/research/ethanol-cdr-claims) [debate](https://heatmap.news/climate/what-is-carbon-removal) [over](https://carbonbasedcommentary.substack.com/p/carbon-removal-co-products-and-system) [the](<https://www.cell.com/one-earth/fulltext/S2590-3322(24)00422-6>) [past](https://heatmap.news/climate/absolute-carbon-standard) [year](https://www.linkedin.com/pulse/why-ethanol-carbon-capture-removal-you-still-dont-have-gammans-2eeye/) about what real-world projects should “count” as CDR in the context of voluntary and government purchasing programs.

A touchstone example in the dialog has been projects that retrofit corn ethanol plants to capture and store biogenic CO₂. Such a retrofit project can store more biogenic CO₂ than it emits. But it’s clearly not _itself_ responsible for removing carbon from the atmosphere; that happens upstream when the corn grows. And even with a carbon capture retrofit, corn ethanol production as a whole currently adds CO₂ to the atmosphere rather than taking it out.

These characteristics are not unique to corn ethanol retrofit projects. Many nominal approaches to CDR focus on storing biogenic CO₂ rather than directly removing CO₂ from the atmosphere. And many others are embedded within or dependent upon emissions-intensive industries, like agriculture or mining. So, under what conditions should such projects be understood to provide carbon removal rather than avoiding emissions? And perhaps more fundamentally, regardless of the label we apply, when do they represent worthwhile investments toward building the CDR capacity needed for a net-zero or net-negative future?

Getting this right matters because global investment in CDR is limited. It should prioritize developing processes or technologies that are likely to play the unique future roles envisioned for CDR: compensating for residual emissions and drawing down atmospheric CO₂. But if that’s the guiding goal, we think that “what is CDR” is the wrong question to focus on. Conservative definitions are likely to exclude activities that could play an important role in the future. Liberal definitions require extra work in order to distinguish effective activities from those that are simply expensive versions of mitigation.

Rather than continuing to debate where the precise definitional line is drawn, we propose four alternative questions to more meaningfully guide CDR purchases and investments today:

- Is the activity part of a system that will exist at scale in a net-zero world?
- Can the system as a whole become net-negative?
- Can the full effects of an activity be accurately quantified, and are elements of the system that lie beyond the activity’s boundary effectively governed?
- Does this activity drive innovation and learning?

These questions are more tractable, more interesting, and more important for ensuring that investments today build toward effective CDR in the future.

## What’s at stake

Today, many buyers in the voluntary carbon market, including Frontier (where one of this article’s co-authors works), exclusively buy or are willing to pay a premium for highly durable carbon removal credits. This focus on CDR also shows up in policy mechanisms like the Department of Energy’s [procurement program](https://www.energy.gov/fecm/funding-notice-carbon-dioxide-removal-purchase-pilot-prize) and the proposed [technology-neutral CDR tax credit](https://www.bennet.senate.gov/wp-content/uploads/2024/11/cache-files-b-4-b4e2a75c-18a5-427b-8f84-873f5ab5e8a9-9f5f16a422ce8ff0cae28d90d06a01466d8d1bb3f13f3c88b4179addb0447670-gai24488.pdf). Deciding which activities fall into the CDR bucket, as opposed to the avoided emissions bucket, determines whether or not they have access to these types of targeted funding mechanisms.

What’s interesting about this two-bucket system is that from the standpoint of the atmosphere, there is no physical distinction between CDR and avoided emissions before the point of net zero. Both reduce the amount of CO₂ accumulating in the atmosphere, though in most cases, CDR is a much more expensive option. What distinguishes CDR — and justifies the significant investment it requires — is the unique role it could play in the future after emissions have been reduced as much as possible. In a typical IPCC scenario, CDR plays two critical roles: (1) compensating for residual emissions from sectors that are prohibitively difficult or expensive to fully decarbonize,<Sidenote>It's worth noting that there is not a widely accepted definition of residual emissions. See, for example, [Buck et al. (2023)](https://doi.org/10.1038/s41558-022-01592-2) which documented widespread ambiguity in national strategies about which sectors residual emissions would originate from. While there are likely to be some processes (e.g. agricultural N₂O emissions) where fully eliminating emissions is not possible, modeled residual emissions are defined in large part by comparing projected costs of CDR versus alternative mitigation strategies.</Sidenote> and (2) drawing down legacy CO₂ emissions from the atmosphere.

In our view, these long-term capacities are the primary reason to invest in CDR in the near-term. They should therefore be front and center in the discussion around CDR definitions and effective CDR investments.

## Definitional trade-offs

In the ongoing debate about which real-world projects “count” as CDR, we see two primary points of confusion and disagreement. First, many CDR approaches aren’t directly responsible for removing carbon from the atmosphere, but rather move carbon from “fast” to “slow” carbon cycle reservoirs which, under the right conditions, can increase the overall quantity of carbon stored out of the atmosphere. Second, many CDR approaches depend on broader systems that emit more carbon than they remove today. Both of these challenges are well illustrated by the example of ethanol.

Below, we walk through each challenge, the definitions proposed to resolve them, and the trade-offs of using each definition to direct CDR funding.

### 01 — Many CDR approaches aren’t directly responsible for removing carbon from the atmosphere

From a narrow perspective, a carbon capture and storage (CCS) retrofit on an existing ethanol plant does not remove carbon from the atmosphere; it prevents the emission of biogenic CO₂ from an existing facility by diverting it into a storage reservoir. This pattern applies to any biomass-based CDR approach that doesn’t grow the biomass it stores, including many forms of bioenergy with carbon capture and storage (BECCS), biomaterial injection, biomass burial, biomass sinking, and biochar.

Under the right conditions, however, these approaches can produce outcomes that are functionally equivalent to projects that directly remove carbon from the atmosphere. For example, sequestering biomass that would otherwise rapidly decompose can increase the total quantity of CO₂ that is stored out of the atmosphere if the forest it comes from has a stable or growing carbon stock (Figure 1). This dynamic also applies to some alkalinity-based CDR approaches, like ocean or river alkalinity enhancement, which change the carbon cycle by increasing water’s ability to hold carbon without acidifying. Depending on the chemistry of the aquatic system, adding alkalinity can remove extra carbon from the atmosphere, prevent outgassing, or achieve a mix of the two outcomes. No matter which mechanism occurs, the end result is the same: an increase to the total quantity of CO₂ that is durably stored in water rather than the atmosphere.

<Figure>
  <Activities id='reduced_outgassing' />
  <FigureCaption number={1}>
    A simple model of the atmosphere, a forest, and a geologic storage reservoir
    under three intervention scenarios. If the forest stock is stable or
    increasing, a project that prevents decomposition and reduces outgassing can
    increase the total amount of CO₂ stored out of the atmosphere. In theory,
    this is equivalent to a project that directly removes CO₂ from the
    atmosphere, like direct air capture. In practice, however, it can be
    challenging to characterize forest dynamics and establish the baseline.
  </FigureCaption>
</Figure>

There are multiple ways CDR definitions could account for this complexity.

A very literal definition would limit the CDR label to projects that are directly responsible for both removing carbon from the atmosphere and storing it.<Sidenote>This is currently the definition applied to determine which forest interventions count as short-duration removals.</Sidenote> Under this definition, only direct air capture, enhanced mineralization, purpose-grown biomass approaches, and some alkalinity-based approaches would qualify. Applying this definition strictly would also require novel quantification methods for many alkalinity-based projects to distinguish between avoided outgassing and literal carbon removal. Ethanol CCS retrofits and most biomass approaches being pursued today that target wastes and residues would be excluded, potentially introducing [counterproductive](https://files.wri.org/d8/s3fs-public/2023-07/the-global-land-squeeze-report.pdf?VersionId=edANDGIvq_NhCGbDVfte6diBdJswo7e9) incentives to prioritize purpose-grown biomass approaches.

An alternative approach would be to define CDR as any project that successfully transfers carbon from the fast carbon cycle to the slow carbon cycle.<Sidenote>Another version of this definition was articulated by [Matt Gammons](https://www.linkedin.com/pulse/why-ethanol-carbon-capture-removal-you-still-dont-have-gammans-2eeye/): “If a carbon atom was in the atmospheric pool more recently than it was in geologic storage, then capturing the atom should be considered a removal. If the carbon atom was in geologic storage, such as an oil well, more recently than it was in the atmosphere, it should be considered an avoided emission.” This definition faces similar challenges as the fast-to-slow definition, so we do not differentiate them in this article.</Sidenote> Under this definition, all biomass-based and alkalinity-based approaches would qualify as CDR, including ethanol CCS retrofits. While this framing provides valuable intuition about CDR’s function in the global carbon cycle, it does not ensure that a project increases the total amount of carbon stored outside of the atmosphere. For example, storing biomass that was not otherwise going to decay could qualify as a fast-to-slow transfer of carbon, but does not change atmospheric outcomes.

<Figure>
  <Activities id='fast_to_slow' />
  <FigureCaption number={2}>
    A simple model of the atmosphere, a forest, and a geologic storage reservoir
    under three intervention scenarios. A project that simply moves carbon from
    the forest (“fast”) to geologic storage (“slow”) may not immediately
    increase the total amount of CO₂ stored out of the atmosphere. As a result,
    it is not always equivalent to a project that directly removes CO₂ from the
    atmosphere, like direct air capture.
  </FigureCaption>
</Figure>

A proposed compromise between these positions is to define CDR projects as _either_ including a removal mechanism _or_ preventing outgassing under conditions that ensure functional equivalence to a novel removal. Including the latter option expands the CDR bucket to include all of the interventions which could, in theory, play the roles needed in a future net-zero world. However, relying on this definition is fundamentally more complex and risky, particularly for biomass projects. At a high level, preventing biogenic CO₂ outgassing is equivalent to a novel removal mechanism if: (1) the CO₂ would have otherwise been rapidly released to the atmosphere, (2) the upstream carbon sink is stable or growing, (3) no one else is claiming credit for that sink, and (4) the new activity does not encourage or incentivize more biogenic CO₂ emissions. None of these conditions are trivial to evaluate in practice.

### 02 — Many CDR approaches are embedded in net-emitting systems

Even under a CDR definition that allows for projects that prevent CO₂ outgassing, ethanol CCS retrofits face another thorny issue. When assessed narrowly, a CCS retrofit stores more CO₂ than it emits. But that retrofit can’t store carbon unless the ethanol facility continues to run. And when you look at the whole system, emissions from building and running the ethanol facility and growing corn far outweigh the amount of carbon stored by the CCS retrofit.<Sidenote>This holds true across the range of estimated corn ethanol carbon intensities in the U.S., excluding any avoided emissions benefits associated with displacing fossil fuels.</Sidenote>

This contradiction highlights a core ambiguity of defining CDR in practice: CDR activities are expected to be net-negative, but net-negative based on what boundary conditions? As illustrated by the ethanol example, there are multiple ways to approach this question. One is a project-level, consequential perspective that quantifies an intervention’s impact relative to a no-project baseline.<Cite id='brander.2022' /> The other takes a broader systems view, asking what happens to atmospheric carbon if we “turn the crank” on the intervention _and_ all the sources and sinks on which it depends.<Cite id='nordahl.2024' />

Applying the systems perspective consistently reveals that ethanol CCS retrofits are not the only potential CDR approach embedded in a net-emitting system.<Sidenote>Identifying the 'system' here is not straightforward—it’s unclear exactly how far out to draw system boundaries or how to differentiate between types of dependence. For example, is an ethanol CCS retrofit more embedded in ongoing corn and ethanol production than a bio-oil injection project, which currently uses corn stover but could switch feedstocks in the future? Arguably, CDR approaches that are linked to net-emitting systems today but adaptable in the future may face fewer system decarbonization contingencies. However, we do not attempt to make that distinction here.</Sidenote> For example, enhanced rock weathering in agricultural fields is unlikely to remove more carbon than is emitted from the agricultural practices that enable or influence weathering outcomes, such as tillage or fertilizer application. This is true of all CDR approaches tied to agricultural systems, including soil carbon sequestration, bio-oil injection, or biochar. Similarly, forms of alkalinity enhancement that are integrated into wastewater treatment plants are unlikely to remove more carbon than the wastewater treatment process emits. The same reasoning applies to any CDR approach that is linked to an existing industrial process, whether through shared infrastructure or reliance on outputs like waste heat, crop residues, municipal waste, or forestry thinnings.

Recognizing that a CDR approach is embedded in a net-emitting system today raises important questions about whether or not it will be able to play the unique future roles of CDR. Consider three scenarios. First, imagine a system that is net-emitting today but has a clear path to achieving net negativity. A CDR approach embedded in such a system could support both residual emissions compensation and future drawdown, provided the system successfully decarbonizes (Figure 3, flexible removal). Second, take a system with no path to net negativity. In this case, a CDR approach might compensate for residual emissions but lacks a pathway to contribute to drawdown (Figure 3, committed removal). Finally, consider a system likely to disappear in a net-zero world. Here, a CDR approach offers neither residual compensation nor drawdown potential (Figure 3, constrained removal). What’s challenging is that these forward-looking system evaluations are necessarily subjective; they require judgements and assumptions about how decarbonization will unfold and what future net-zero world should look like.

<Figure>
  <Scenarios />
  <FigureCaption number={3}>
    A schematic illustrating three possible trajectories for a CDR approach that
    is currently embedded within a net-emitting system. Here, "system" includes
    the CDR approach and the sources and sinks on which it depends. The CDR
    system is evolving in the context of a global transition to net-zero CO₂
    emissions.
  </FigureCaption>
</Figure>

If one were to apply a CDR definition that requires credited activities to be part of net-negative systems today, it would likely exclude the majority CDR approaches currently operating. Such a definition could disincentivize potentially productive integrations between CDR and industries we expect to keep operating in a net-zero world. Moreover, adopting the system-level perspective obscures the specific changes an intervention is responsible for and poses challenges for tasks like technological comparison or rewarding interventions based on their efficiency.<Sidenote>For example, the system view could create some slightly nonsensical outcomes where enhanced rock weathering would be CDR in unmanaged forests but not in agricultural fields, or alkalinity addition would be CDR if done directly in rivers but not in wastewater treatment plants that drain into the same rivers.</Sidenote>

But on the flip side, defining the “CDR bucket” using a purely project-level, consequential framework means including some approaches that are unlikely to play either of the unique future roles envisioned for CDR. In other words, consequential analysis is necessary but not sufficient to identify worthwhile CDR investments.

## A path forward

Given the trade-offs that have been clarified over the past year of discussion and summarized above, we do not think it’s possible to establish a simple definition of CDR that reliably sorts projects worthy of investment from those that are not.

If you’re committed to the two-bucket system (CDR versus avoided emissions), you therefore have two options. You can define the CDR bucket conservatively — e.g. by requiring that all CDR projects achieve direct atmospheric carbon removal within the narrow project boundary. However, this will exclude many useful CDR approaches and potentially encourage approaches that are inefficient or counterproductive. Alternatively, you can define the CDR bucket liberally — e.g. by allowing some projects that prevent outgassing — in which case it will take extra work from teams with aligned incentives and a high degree of expertise to identify the subset of activities that are likely to enable progress toward residual compensation and drawdown. Maintaining effective outcomes could be difficult in this case given the strong market incentive to capture CDR-related premiums.

In neither case does the definition of CDR itself do all of the work necessary to identify the complete set of useful CDR investments. Rather than a continued debate about how to answer the question of “what counts as CDR” once and for all, we suggest the following four questions are more interesting and more important:

<Figure>
  <Table
    columns={[6]}
    start={[1, 1]}
    width={[6, 6]}
    sx={{ '& tr td:not(:first-of-type)': { color: 'secondary', mt: 2 } }}
    data={[
      [
        'Is the activity part of a system that will exist at scale in a net-zero world?',
        'CDR’s unique value lies in its future roles, not its current emissions impact. A "future test" helps assess whether the system supporting a given CDR approach will remain relevant at net zero.',
      ],
      [
        'Can the system as a whole become net-negative?',
        'For a CDR approach to enable drawdown, the broader system it operates within must have a path to net negativity. If it does not, the approach merits an extra level of scrutiny to be sure that using CDR to compensate for residual emissions is among the most promising long-term mitigation options for the sector.',
      ],
      [
        'Can the full effects of an activity be accurately quantified, and are elements of the system that lie beyond the activity’s boundary effectively governed?',
        'Ideally, a consequential analysis would capture all direct and indirect impacts of a project — including system effects like leakage or prolonging the lifetime of a net-emitting facility. In practice, these analyses can be hard to carry out.  It’s therefore important to scrutinize how well full system impacts can realistically be modeled, and whether or not system governance is likely to prevent unintended consequences.',
      ],
      [
        'Does the activity drive innovation and learning?',
        'Today, CDR is a particularly expensive form of mitigation. It merits near-term investment to the extent that it advances technological development, produces the data needed to answer major scientific questions, and drives learning around the practical challenges of implementing CDR approaches in the real world.',
      ],
    ]}
    borderTop={true}
    borderBottom={true}
  />
</Figure>

Answering these questions is inherently more complicated than asking if an activity is CDR or not — they require deliberation and don’t have single correct answers. But we don’t think you can get around them if you want CDR investments to ladder up to a world where we have the future CDR capacity we need. They also highlight opportunities for system-level analyses that have not yet been performed and could be important for guiding effective CDR investments in the near-term.

<Endnote label='Credits' divider>

Freya wrote the first draft of the article with input from Zeke. Kata and Freya designed and implemented the figures. Thanks to colleagues at CarbonPlan and Stripe Climate for their review and input on the draft commentary.

Please cite this web article as:

Chay et al. (2025) ““What is CDR?” is the wrong question” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/defining-good-cdr](https://carbonplan.org/research/defining-good-cdr)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan and Stripe collaborated on this article using their own individual funding resources. CarbonPlan’s work was supported by grants from Adam and Abigail Winkel and the Grantham Foundation. CarbonPlan has previously provided modest paid consulting services to Stripe associated with their [first two CDR purchase rounds](https://carbonplan.org/funding) in 2020 and 2021. We have no ongoing funding relationship.

The authors are solely responsible for the content of the analysis and this write-up, which do not represent the views of any other organizations or individuals.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
