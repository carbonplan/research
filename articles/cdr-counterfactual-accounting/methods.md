---
date: 11-13-2024
title: Crediting challenges when carbon removal comes with avoided emissions
card: cdr-counterfactual-accounting
quickLook: Some carbon removal projects also result in avoided emissions. This is good for the climate, but can pose challenges for individual projects that are trying to earn carbon removal credits.
back: /research/cdr-counterfactual-accounting
components:
  - name: NetCDR
    src: ./components/net-cdr.js
  - name: Figure
    src: '@carbonplan/components'
  - name: FigureCaption
    src: '@carbonplan/components'
---

# Supplemental Methods

## Interactive calculator

The calculator below lets you explore how different accounting rules converge or diverge when crediting CDR optimization projects. You can compare the crediting outcomes for preset scenarios provided in the drop-down menu, or use the sliders to construct your own ERW project and prior liming scenarios. The default preset scenario (“More rock, more efficiently”) is the example used in the [main article text](/cdr-counterfactual-accounting).

<Figure>
    <NetCDR
    presets={{
      'More rock, more efficiently': {
        alkalinityCounterfactual: 15,
        alkalinityProject: 20,
        emissionsFactorCounterfactual: 1,
        emissionsFactorProject: 0.5,
      },
      'More rock, less efficiently': {
        alkalinityCounterfactual: 10,
        alkalinityProject: 30,
        emissionsFactorCounterfactual: 0.4,
        emissionsFactorProject: 0.6,
      },
      'Same rock, more efficiently': {
        alkalinityCounterfactual: 15,
        alkalinityProject: 15,
        emissionsFactorCounterfactual: 1.5,
        emissionsFactorProject: 0.5,
      },
      'More rock, same overall emissions': {
        alkalinityCounterfactual: 15,
        alkalinityProject: 25,
        emissionsFactorCounterfactual: 1,
        emissionsFactorProject: 0.6,
      },
    }}
  />

<FigureCaption number={1}>
  Interactive calculator for the four accounting approaches presented in the
  main text. The green bars show the net carbon removal that each accounting
  approach gives the project credit for. The hatched portion of the green bars
  represents credited removals owed to avoiding counterfactual emissions. Select
  a preset scenario from the dropdown menu, or use the sliders to vary the
  amount of rock applied and the carbon emissions per ton of rock. For
  simplicity, calculations assume that one ton of rock corresponds with one ton
  of removal.
</FigureCaption>

</Figure>

In some cases, different counterfactual accounting rules don’t have a big effect on crediting outcomes. See, for example, the “More rock, less efficiently” preset scenario. In this case, Approaches 1, 2, and 3 converge to the same result. This is because the part of the project that replaces the counterfactual has the same or more emissions than the counterfactual. These three accounting approaches differ in how they treat avoided emissions, but this scenario doesn’t result in any avoided emissions.

On the other end of the spectrum, we can consider a case where a project only avoids emissions. See, for example, the “Same rock, more efficiently” preset scenario. Here, the CDR project only uses enough rock to replace the counterfactual and, as a result, the removal flux does not change. Yet, the project rock is less emissions-intensive than the counterfactual rock. By swapping for the climate-friendly alternative, the optimization project has turned a net-emitting process into a net-removing one. Even so, it only receives CDR credits under Approach 1. No other accounting rules give the project credit for CDR since the project’s benefit relies entirely on avoiding counterfactual emissions.

The final preset scenario, “More rock, same overall emissions,” illustrates a case where the project removes more carbon per unit of emissions, but total emissions don’t change from the counterfactual to the project. Here, Approaches 1 and 2 yield the same result because what distinguishes them is how they handle an overall reduction in emissions from the counterfactual to the project, which is not relevant.

In all scenarios, Approaches 3 and 4 are the only ones that reliably separate avoided emissions from removal credits, resulting in zero contribution of avoided emissions to CDR.

## Accounting equations

The simplest formulation for net carbon dioxide removal (CDR_net) can be written as:

> CDR<sub>net</sub> = S – E.

Here, _S_ is the carbon that gets removed from the atmosphere and durably stored and _E_ is the carbon that the project emits in order to operate. We assume that any reversal or leakage of removed carbon is accounted for in the _S_ term. In our simplified enhanced rock weathering example, _S_ captures all the processes that lead to carbon removal after the rock is applied to the field. _E_ captures all the emissions associated with sourcing, grinding, and applying the rock.

### Approach 1: Simple subtraction

This approach simply treats _S_ and _E_ as the difference between the project (_proj_) and counterfactual (_counterfac_), such that:

> S = removals<sub>proj</sub> – removals<sub>counterfac</sub>

and

> S = emissions<sub>proj</sub> – emissions<sub>counterfac</sub>.

The full equation for calculating net CDR by Approach 1 can then be written as:

> CDR<sub>net</sub> = (removals<sub>proj</sub> – removals<sub>counterfac</sub>) – (emissions<sub>proj</sub> – emissions<sub>counterfac</sub>).

There is broad agreement that if downstream processes are net emitting, projects should not get credit for avoiding those emissions. This means that, for remaining accounting approaches 2-4, _S_ becomes:

> S = removals<sub>proj</sub> – MAX(0, removals<sub>counterfac</sub>).

### Approach 2: Ignore obvious avoided emissions

The second approach ensures that the _E_ term, here capturing the upstream processes, is never negative:

> E = MAX(0, emissions<sub>proj</sub> – emissions<sub>counterfac</sub>).

This makes the full net CDR equation:

> CDR<sub>net</sub> = (removals<sub>proj</sub> – removals<sub>counterfac</sub>) – MAX(0, emissions<sub>proj</sub> – emissions<sub>counterfac</sub>).

### Approach 3: Separate the replacement portion of the project

The third approach separates the project emissions into those that are used to replace the counterfactual activity (_proj, replacement_) and those that are used to support anything extra added on top of the counterfactual (_proj, additional_), such that

> emissions<sub>proj</sub> = emissions<sub>proj, replacement</sub> + emissions<sub>proj, extra</sub>.

We can then calculate _E_ by ensuring that only the replacement gets compared to the counterfactual and the avoided counterfactual emissions don’t count towards CDR:

> E = emissions<sub>proj, extra</sub> + MAX(0, emissions<sub>proj, replacement</sub> – emissions<sub>counterfac</sub>).

And the full net CDR equation becomes

> CDR<sub>net</sub> = (removals<sub>proj</sub> – removals<sub>counterfac</sub>) – (emissions<sub>proj, extra</sub> + MAX(0, emissions<sub>proj, replacement</sub> – emissions<sub>counterfac</sub>)).

### Approach 4: Conservative

The conservative approach, unlike the others, does not allow any possible reduction to the project emissions, regardless of how emissions-intensive the counterfactual might be. This gives us, simply

> E = emissions<sub>proj</sub>.

And the full net CDR equation is:

> CDR<sub>net</sub> = (removals<sub>proj</sub> – removals<sub>counterfac</sub>) – emissions<sub>proj</sub>.
