import Article from '../../components/article'

export const meta = {
  id: 'stripe-review-learnings'
}

# Learnings from our first project evaluation

## What we did

We reviewed the 23 individual project proposals Stripe received in parallel to the subject matter experts they retained to help them evaluate the field. What we did was similar to these expert reviewers in many respects, but with two key differences.
First, we decided to tackle the full set of proposals, not just those clustering in a particular technology area. Most governments and companies that invest in new areas look to specific domain experts for feedback. Few experts, however, are able or interested to evaluate detailed climate strategies that span a wide range of approaches. As a result, many organizations end up hiring a group of experts who each weigh in on a subset of proposed activities. 

In taking a big-picture perspective, we aimed to complement these efforts and identify issues that would emerge from the totality of the field. The goal was to better understand the challenges facing organizations that cast a broad net for climate solutions, as well as to identify opportunities for improvement.

Second, we decided to put our analysis, methods, and perspectives online. This is a significant change from typical procurement processes, in which outside experts provide exclusively confidential feedback. While we value the benefits of confidential advising and believe it’s a necessary element of serious program implementation, our reports are intended to be different. Rather than provide confidential feedback to improve a single procurement process, our reports are designed to help all interested organizations—including researchers, project proponents, and procuring organizations—improve outcomes in future iterations.

Making our work public is also an opportunity to reflect on what can and can’t be said with confidence in a climate procurement process. Just as important, the gaps we’ve identified will help us develop open-source methods for performing detailed analyses of project and technology attributes in future procurement processes, whether those processes are broad in scope or narrowly tailored.

## How we evaluated projects

After multiple rounds of internal review, the CarbonPlan team decided to collect and aggregate data from project proposals across seven different criteria:

- *Mechanism*. Does the project directly remove CO2 from the atmosphere, does it avoid CO2 emissions that would otherwise end up in the atmosphere, or a little of both?

- *Volume* How many tons of CO2 does the project claim to reduce or avoid?

- *Negativity* How emissions-intensive is the carbon removal process? 

- *Permanence* How long does the project claim carbon will be safely removed from the atmosphere? Is it a question of physical material stability or socioeconomic choices?

- *Cost* How much does the project want to charge its buyer?

- *Additionality* In our judgment, would an investment cause new climate benefits or simply take credit for benefits that may already be happening?

- *Transparency* In our judgment, does the project provide sufficient information for us to independently validate the rest of our criteria?


export default ({ children }) => <Article meta={meta}>{children}</Article>