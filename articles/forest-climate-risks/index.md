import Article from '../../components/article'
import Reference from './components/reference'
import Block from './components/block'

export const meta = {
  id: 'forest-climate-risks',
  number: 2,
  color: 'green',
  title: 'Climate-driven risks to forest carbon',
  authors: ['CarbonPlan Team'],
  date: '06-23-2020',
  background: 'article-002/tree.png',
  summary:
    'A new publication with our collaborators examines the physical risks associated with storing carbon in forests.',
}

# Climate-driven risks to forest carbon

Team members Jeremy Freeman and Danny Cullenward contributed to a new [review article on forest carbon risks](https://doi.org/10.1126/science.aaz7005) that was published in _Science_ magazine and led by our collaborators Bill Anderegg (University of Utah), Anna Trugman (UC Santa Barbara), and Grayson Badgley (Black Rock Forest Consortium / Columbia University).

<Reference />

Here’s how the editors at _Science_ summarized the article:

<Block>
  Much recent attention has focused on the potential of trees and forests to
  mitigate ongoing climate change by acting as sinks for carbon. Anderegg et al.
  review the growing evidence that forests' climate mitigation potential is
  increasingly at risk from a range of adversities that limit forest growth and
  health. These include physical factors such as drought and fire and biotic
  factors, including the depredations of insect herbivores and fungal pathogens.
  Full assessment and quantification of these risks, which themselves are
  influenced by climate, is key to achieving science-based policy outcomes for
  effective land and forest management.
</Block>

We’re excited to share this publication. We're also excited to start work on new open source tools that apply the paper’s insights to evaluate both the benefits of and risks to forest carbon strategies. Getting the details right — particularly as the risks evolve in a changing climate — is essential for making smart climate decisions today.

## Terms of engagement

CarbonPlan received no financial support for this work and has no financial conflicts of interest with any of the other organizations involved.

### Questions? Interested in collaborating on these problems? Email us at [hello@carbonplan.org](mailto:hello@carbonplan.org)

export default ({ children }) => <Article meta={meta}>{children}</Article>
