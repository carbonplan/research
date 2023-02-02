---
date: 05-12-2021
title: Systematic over-crediting of forest offsets FAQ
color: green
card: forest-offsets-explainer
authors:
  - Grayson Badgley
  - Jeremy Freeman
  - Joseph Hamman
  - Barbara Haya
  - Anna Trugman
  - William R L Anderegg
  - Danny Cullenward
quickLook: FAQ for our article Systematic over-crediting of forest offsets
back: /research/forest-offsets-explainer
components:
  - name: CommonPractice
    src: ./components/common-practice/index.js
---

# FAQ

<Box sx={{ color: 'secondary', '& p': { fontSize: [2, 2, 2, 3] }, '& a': { color: 'secondary', '&:hover': { color: 'primary' }}}}>
We are publishing responses to frequently asked technical questions about our
recent article [Systematic over-crediting of forest offsets](/research/forest-offsets-explainer). Most of these questions can be answered by reading our [preprint](https://www.biorxiv.org/content/10.1101/2021.04.28.441870v1.article-info), including the extended methods. To make this information more accessible,
we developed this FAQ.

Prepared by {authors.map((name, i) => i === authors.length - 1 ? `and ${name}` : name).join(', ')}.

Update: the [paper](https://doi.org/10.1111/gcb.15943) has since been published in _Global Change Biology_.

</Box>

## 01 — Does the paper’s “alternative common practice” estimates lead to lower precision relative to the approach taken by the Climate Action Reserve and the California Air Resources Board?

No, our alternative common practice estimates offer a more precise point of comparison because they look to carbon outcomes in similar, rather than dissimilar, species. Our alternative practice estimates are more precise because they are more representative of regional forests, which is crucial for accurate spatial statistical comparisons.
CARB takes the opposite approach, allowing developers to compare their forests against carbon outcomes in unrepresentative forest types and take credit for the difference. That is not precise or accurate. As one of the registries that implements California’s offset program, Verra, [recently put it](https://verra.org/npr-attack-journalism-on-carbon-credits-saving-forests-gets-it-wrong-in-5-ways/): “[I]f control sites are not representative of the project sites, comparisons become meaningless.”

To give an example in another application, think about the outbreak of COVID-19 in the spring of 2020. In the United States, New York City was experiencing crisis conditions as the coronavirus spread rapidly and overwhelmed the local hospital system. Had you looked then at case numbers then across the entire United States, or even the entirety of New York state, you would have seen a much lower incidence rate. Back then you would have drawn drastically different conclusions about the magnitude of the problem depending on how you aggregated data across space. The exact same concepts of spatial aggregation are at the heart of the problem with counting and comparing forest carbon based on regional averages.

We have received several questions that suggest our approach to calculating common practice is less accurate, but believe those questions are better understood as concerns around the statistical uncertainty of estimating average carbon stocks under different methodologies.

Every estimate of average carbon comes with statistical uncertainty that is based on the number of samples and the heterogeneity of those samples. Because our method compares forest carbon against similar species, that comparison is made against a smaller number of FIA plots — the result of a more narrowly tailored search for specific species within the same protocol “supersection” areas. In contrast, CARB looks at larger groups of forests and therefore relies on more FIA plots to calculate average carbon stocks. Having a larger sample size often leads to lower uncertainty (i.e., a lower standard deviation around the estimated mean), but in this case there is a tradeoff between certainty and accuracy (i.e., bigger likely error in the mean). We average fewer plots that more accurately represent carbon stocks on participating project lands, whereas CARB averages more plots with less accuracy in representing carbon stocks.

None of this is or was lost on our author team. We explicitly report uncertainty for our alternative common practice estimates and propagate that uncertainty through our estimates of crediting error. Every single result in our paper explicitly includes this uncertainty, which is why we project a range of program-wide over-crediting that ranges from 20.5 MMtCO₂e (5th percentile estimate) to 38.6 MMtCO₂e (95th percentile estimate), with a median of 30.0 MMtCO₂e (50th percentile estimate).

Our paper also includes a discussion section on the limitations of FIA sampling and the constraints this presents for any effort to calculate average carbon stocks. We note that FIA data are very limited in Alaska, with no FIA data in the Copper River Basin (where project ACR360 earned about 15 million credits). Similarly, we note that the Climate Action Reserve and CARB reported for years that all forests in Central New Mexico had no carbon (as reflected in a reported common practice of zero tons of CO₂ per acre). Although these are extreme examples, they illustrate how CARB’s approach has not been accurate or precise.

Ironically, neither CARB nor the Climate Action Reserve include uncertainty in their protocols or calculations. We believe our method is more accurate and have reported full statistical uncertainty ranges to allow researchers and other interested parties to follow the statistics.

## 02 — If the goal of the forest offsets program is to sequester carbon, isn’t it desirable for participating projects to focus on forests with high initial carbon stocks? Don’t we want to protect the most carbon-rich forests?

Yes, in general that is a perfectly reasonable goal or outcome. Our analysis doesn’t assume otherwise, nor does it dispute the benefits of protecting high-carbon forests.
Instead, our analysis shows how the calculation of common practice is ecologically erroneous and leads to systematic over-crediting. Because high-carbon forests are erroneously compared against low-carbon forests in CARB’s protocol, they earn too many credits — not because their initial carbons stocks are too high, but because their modeled baselines are too low.

The question is how much credit these forests should earn, and that depends on two factors. Under the California protocol, projects earn large “upfront” credit payments based on the difference between (1) their initial carbon stocks and (2) their modeled baselines, which are in turn constrained by the protocol’s common practice estimates. If common practice is set too low, however, then projects will receive too many credits — whether or not participating projects tend to have relatively high initial carbon stocks.

Although our analysis doesn’t focus on the tendency of projects to involve forests with high initial carbon stocks, these patterns can raise significant concerns about another key program consideration — additionality. In general it is good, from a climate policy perspective, to protect high-carbon forests from harvest. However, there are factors that could lead these kinds of projects to be non-additional. For example, if a conservation organization has protected a forest for many decades, then we would expect carbon stocks to be relatively high on that land. If the forest were harvested, carbon stocks would drop precipitously; however, one [might question](https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/) whether it is likely a conservation organization would harvest such a piece of land.
Nevertheless, any questions around additionality are separate from our study’s numerical results. Our quantitative analysis does not assess whether the project activities are additional, nor whether common practice is an appropriate baseline. It asks only whether they have been over-credited as a result of erroneous common practice numbers.

## 03 — Even if the program over-credits climate benefits, does that mean it isn’t helping support forest conservation goals?

Our paper shows that the California forest offsets program significantly over-credits climate benefits as a result of ecological and statistical failures in its design. This is a problem because every credit allows polluters to increase pollution, whatever other benefits the program provides. An offsets program that over-credits climate benefits leads to higher net emissions.

Forest offsets have been marketed as win-win solutions that support climate policy and increase forest conservation. Our analysis shows that California’s program does not support climate policy and in fact makes the climate problem worse. We don’t analyze conservation outcomes or other co-benefits in our paper, but our work shows that any such co-benefits are achieved at the expense of climate policy, not in addition to it.

## 04 — Does the research account for the “Logical Management Unit” protocol rules that aim to avoid “cherry-picking” behaviors as of the 2015 Protocol?

Yes. All of our project data come from official Offset Project Data Reports (OPDRs) and our analysis fully accounts for any applicable calculations that rely on CARB’s “Logical Management Unit” (LMU) equations to change projects’ reported minimum project baselines. That is, when we calculate crediting errors in our paper, we use data reported in the OPDRs after any applicable LMU adjustments are made to the minimum baseline.

For context, CARB re-defined the LMU concept in Section 5.2.1 of the 2015 U.S. Forest Projects protocol, which is the version in use as of this writing. The idea behind the LMU is to address the possibility that individual landowners might “cherry-pick” only the most favorable of their lands for inclusion in a forest offsets project. For example, a landowner that selects only those parts of her land that contain high-carbon forests — while leaving aside lower-carbon forests — would report a relatively high initial carbon stock and earn more “upfront” credits under the protocol rules than if she had simply included her entire landholdings. The LMU equations reduce the number of credits such a project would earn to address this concern.

It is important to note that the LMU concept is designed to address the situation in which an individual landowner might preferentially choose subsets of her lands to put into a carbon offsets project. The LMU concept does not address the possibility that a project developer would seek a project located in favorable areas of a supersection or that involve favorable species relative to the forest types used to calculate common practice in a supersection.

Thus, the LMU concept is irrelevant to the primary criticism we offer in our paper — and it is fully accounted for in every project that uses it.

## 05 — What version of the US Forest Service FIA data did the research use, and what effect might that have on the results?

Both CarbonPlan’s study and the CARB protocol calculate common practice using the U.S. Forest Service Forest Inventory and Analysis (FIA) database.

One of the important features of the FIA database is that it changes over time. For example, the Forest Service enters new data as new field surveys are completed. The Forest Service also sometimes retroactively updates older reported data. As a result, there is no single FIA database, but rather different versions that are made available at different points in time. While we would have liked to have used the exact same version of the database to conduct our analysis, none was made publicly available. As a result, we had to use a newer copy.

For our new study, we used a contemporary version of the FIA database. This does not mean that we used “newer” data reporting forest carbon levels during years that weren’t part of CARB’s calculations. Instead, we relied only on older FIA ‘inventories’ in the larger FIA database — i.e. the same sets of plot measurements. As described in our extended methods (page 6):

> Whenever possible, we reported the carbon estimates as the median of
> inventories ending between 2010 and 2013, so as to be consistent with the
> snapshot of FIA data used by CARB to produce its own estimates of common
> practice. In the rare cases where no inventory period ended between 2010 and
> 2013, we took the median of all inventories from 2013 onward.

We are well aware that the FIA database is mutable over time. CarbonPlan’s academic collaborators have published widely on the use of FIA data in forest ecology applications in journals such as [Science](https://dx.doi.org/10.1126/science.aab1833), [Nature Climate Change](https://dx.doi.org/10.1038/s41558-020-00919-1), [Proceedings of the National Academy of Sciences](https://dx.doi.org/10.1073%2Fpnas.1917521117), and [New Phytologist](https://dx.doi.org/10.1111/nph.13477). Several of these publications also included U.S. Forest Service researchers who work on the FIA program. In our new work, we also relied on the peer-reviewed [rFIA software package](https://www.fs.fed.us/nrs/pubs/jrnl/2020/nrs_2020_stanke_001.pdf), which was developed by forest ecologists and statisticians with co-authors from the U.S. Forest Service.

Drawing on this collective knowledge and experience, our team designed multiple methodological safeguards to ensure that our results are robust (described in extended methods, page 9):

> As outlined in the Brief methods and described in detail below, these small
> differences are highly unlikely to influence our analysis of over- or under-
> crediting because we calculate proportional changes in common practice, each
> derived from the same underlying data, thereby isolating the effect of how FIA
> data is aggregated to calculate common practice, as opposed to uninformative
> differences between our estimates of common practice and the [FIA] values used
> by [CARB in the] US Forest Project protocol.

Three independent reasons provide confidence that our methods and results are robust to any potential changes in the FIA database over the last six years. First, we can show that our reproduction of CARB’s common practice numbers — which were calculated by the U.S. Forest Service for the 2015 protocol — are highly accurate on both an assessment-area and project-level basis. Second, we introduced a methodological step to ensure that any error in reproducing CARB’s common practices is isolated and avoided in our alternative estimate of common practice. Third, we show that the statistical bias in our method is minor and suggests we might be under-estimating the extent of over-crediting, rather than reported exaggerated estimates. We address each issue in turn.

### We accurately reproduce CARB’s common practice numbers

As shown in Supplementary Figure 2 (Extended Methods, page 7), we are able to accurately reproduce CARB’s calculation of common practice.

<CommonPractice />

The left panel shows how we were able to accurately reproduce CARB’s calculation of common practice on an assessment-area basis. Each dot represents an assessment area, and is plotted to match the CARB-reported value (Y-axis) and our rececalculation of the same concept using the rFIA software package and a contemporary FIA database (X-axis).

Similarly, the right panel shows how we were able to accurately reproduce common practice on a project-level basis. Each dot represents a project, and is plotted to match the project-reported value (Y-axis) and our recalculation of the same concept using the rFIA software package and a contemporary FIA database (X-axis).

For readers without a background in statistics, we want to emphasize that the R² and RMSE performance metrics together indicate that we were able to recreate CARB’s numbers with a high degree of reliability. An R² value reports the share of variance in one variable that is explained or predicted by the other — an absolutely perfect reproduction would have an R² value of 1.00. We report an R² value of 0.97 and 0.94, respectively, for our ability to predict CARB’s default common practice values on an assessment-area basis and on a project-level basis. This means that our reproduction of common practice accounts for 97% and 94% of the variance found in the primary data — a substantial amount that is very close to the 100% maximum possible. The RMSE is a related measure of how accurately our method reproduces common practice numbers. It measures the overall difference (or error) between the prediction and the value to be predicted — an absolutely perfect reproduction would have an RMSE of 0.00 tCO₂/acre. We find a RMSE of 4.94 and 9.71 tCO₂/acre, respectively, for common practice calculated on an assessment-area and project-level basis. These low values indicate a high degree of accuracy. Together, the R² and RMSE metrics demonstrate our ability to reproduce CARB’s values.

Although our approach is both reliable and accurate, it is not perfect. To address the fact that we do not perfectly replicate common practice across all assessment areas and projects, we introduce a methodological step to isolate the statistical imperfections described above.

### We isolate and avoid potential bias in alternative common practice calculation

Had we simply calculated our alternative common practice concept and directly used that number to estimate crediting error, our method could incorporate statistical imperfections that reflect differences between our methods and/or data sources, rather than the ecological errors we identified in CARB’s approach. We did not take this approach.

Instead, we estimated a variable called CP<sub>NEW</sub> as follows and used it to estimate the number of offset credits a project should have received based on CARB’s protocol rules

> CP<sub>NEW</sub> = (CP<sub>1</sub> / CP<sub>0</sub>) \* CP<sub>ARB</sub>

Where:

> CP<sub>ARB</sub> = common practice number from CARB
>
> CP<sub>0</sub> = our re-estimate of CARB’s common practice number
>
> CP<sub>1</sub> = our alternative species-specific common practice

Thus, our approach scales CARB’s own estimate of common practice (CP<sub>ARB</sub>), which is taken directly from the 2015 forest protocol, by the ratio of our estimate of a species-specific common practice number (CP<sub>1</sub>) to our re-estimate of CARB’s original common practice number (CP<sub>0</sub>).

This approach allows us to isolate the effect of varying forest types from any differences between our estimate of CP<sub>0</sub> and projects’ reported CP<sub>ARB</sub>. In other words, it ensures that our estimates of change in common practice are internally consistent, as we expect any error in re-estimating CARB’s common practice (CP<sub>0</sub>) to also be present in our ability to accurately estimate our alternative common practice (CP<sub>1</sub>).

### Any remaining bias suggests more (not less) over-crediting

After showing that our estimates are accurate and developing a method to avoid bias, we analyzed our data to check for remaining bias that could prejudice our results. We wrote (in extended methods, page 14):

> Note also that any systematic bias in our estimates of CP<sub>0</sub> relative
> to CP<sub>ARB</sub> could potentially overestimate (or underestimate) our
> re-crediting calculations. Specifically, if we systematically overestimated
> CP<sub>0</sub>, then we underestimated over-crediting; similarly, if we
> systematically underestimated CP<sub>0</sub>, then we overestimated
> over-crediting. As reported above, our estimates of CP<sub>0</sub> are well matched
> to CP<sub>ARB</sub> (R² = 0.94, RMSE = 9.76), and on average were 3.2% higher
> than CP<sub>ARB</sub>. If anything, the fact that we overestimate <>CP<sub>ARB</sub></>
> likely makes our overall finding of net over-crediting conservative.
> In addition, we found no evidence for a systematic relationship between error in
> our estimate of CP<sub>0</sub> and our estimates of crediting error (r =
> 0.06).

In other words, our reproduction of CARB’s common practice (CP<sub>0</sub>) is a little too high on average; and because the formula for our alternative estimate of common practice (CP<sub>NEW</sub>) divides by our re-estimate of CARB’s common practice (CP<sub>0</sub>), our alternative common practice variable is too low; and because increases in our alternative common practice result in more over-crediting, our estimate of over-crediting is conservative.

We also find no correlation between errors in our re-estimate of CARB’s common practice numbers (CP<sub>0</sub>) and our crediting error results. If our use of a contemporary FIA database introduced bias into results, then we would expect to find a correlation. We do not.

## 06 — Does this research merely repeat claims that the California courts heard previously and decided in favor of the California Air Resources Board?

This argument is misleading and inaccurate. CARB [has falsely suggested](https://ww2.arb.ca.gov/sites/default/files/2021-04/nc-carb-response-to-propublica-forest-questions.pdf) that our study makes the same argument that a California Court of Appeal rejected in a 2015 decision called [Our Children’s Earth Foundation v. CARB](https://scholar.google.com/scholar_case?case=5314270974813047529), presumably to justify their lack of a substantive response to the ecological and statistical failures our work identifies in their offsets program. While we would prefer to focus on the substantive issues our paper raises, we want to correct CARB’s erroneous description of that court case.

The legal dispute in Our Children’s Earth Foundation turned on the difference between what is called a “standardized” approach to carbon offsets and a project-level definition of additionality. Under a standardized approach to carbon offsets, the regulator establishes fixed rules for how to calculate project eligibility, baseline scenarios, and other key protocol details. In contrast, a project-level additionality standard requires every project to be additional, but uses bespoke methods to calculate the number of credits earned.

Partly in response to well-documented problems with project-level additionality standards, CARB adopted a standardized approach for its offsets program. Although this approach comes with important advantages, one concern is that standardized eligibility rules might allow some non-additional projects to earn credits. In theory, however, these non-additional credits can be balanced by conservative methods that undercount “true” emission reductions elsewhere, such that the program achieves a net additionality standard as a whole.

In Our Children’s Earth Foundation, two nonprofit organizations brought a lawsuit against CARB, arguing that the Board’s standardized approach to carbon offsets does not meet the “additionality” requirement in [Section 38562(d)(2) of the California Health & Safety Code](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=38562). Specifically, they argued that the additionality requirement should apply to all projects, and therefore should preclude a standardized approach in which program rules might allow some non-additional projects to earn credits. In 2012 a state trial court rejected their argument, and in 2015 a state appellate court did the same.

Our study has no relationship to this case or the court’s decision for at least two reasons.

First, our paper retains CARB’s definition of additionality without modification. We do not raise any concerns about the theoretical basis on which standardized offset programs can achieve additionality. In fact, both of the two authors on our team with professional expertise in this area (Drs. Haya and Cullenward) are on record saying that standardized offset programs can achieve the additionality standard. Dr. Haya made this argument in her [2010 PhD thesis](https://escholarship.org/uc/item/7jk7v95t), in [2011 comments to the Western Climate Initiative](https://carbonplan-assets.s3.amazonaws.com/docs/UCS-WCI-Offset-Protocol-Comments.pdf) as CARB designed its offsets program, and in [a 2020 article](https://doi.org/10.1080/14693062.2020.1781035) co-authored with Dr. Cullenward in the peer-reviewed journal Climate Policy. Thus, our views are entirely consistent with the outcome in Our Children’s Earth Foundation and completely inconsistent with the plaintiffs’ argument in that case.

Second, our paper’s results do not focus on concerns about project additionality, which was the sole issue in Our Children’s Earth Foundation. Instead, we document large-scale over-crediting without assuming that any projects are non-additional. These results indicate that the program may be crediting emission reductions that are not “real, permanent, quantifiable, verifiable, and enforceable,” potentially in violation of the requirements of Section 38562(d)(1) of the California Health & Safety Code. Because the decision in Our Children’s Earth Foundation concerned only the additionality standard of Section 38562(d)(2), it does not control what a reviewing court might conclude about concerns under the standards of Section 38562(d)(1).

Finally, we would like to clarify that one member of our author team has formally participated in litigation involving CARB. While in law school, Dr. Cullenward worked with the Stanford Environmental Law Clinic to provide legal representation to a group of climate scientists as “friends of the court” in a separate lawsuit, Rocky Mountain Farmers Union v. Corey, 730 F.3d 1070 (9th Cir. 2013). The clinic’s clients successfully supported CARB’s arguments in response to an industry lawsuit challenging the state’s Low Carbon Fuel Standard.

Rather than address our scientific analysis on its merits, CARB has responded with an unconvincing legal argument and ad hominem attacks on our integrity as researchers.
