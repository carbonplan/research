import { getIrfCurve, getBaselineData, getScenarioData } from './utils'
import { EQUIVALENCE_VALUES } from './constants'

describe('ton-year accounting utils', () => {
  describe('getBaselineData', () => {
    it('matches values from Joos 2013', () => {
      // Test values taken from Joos 2013, Table 4, Best estimates for time-integrated IRF
      // https://doi.org/10.5194/acp-13-2793-2013

      const baseline = getIrfCurve('joos_2013')

      expect(getBaselineData(baseline, 20, 0).impact.toFixed(1)).toEqual('14.2')
      expect(getBaselineData(baseline, 50, 0).impact.toFixed(1)).toEqual('30.3')
      expect(getBaselineData(baseline, 100, 0).impact.toFixed(1)).toEqual(
        '52.4'
      )
      expect(getBaselineData(baseline, 500, 0).impact.toFixed(0)).toEqual('184')
      expect(getBaselineData(baseline, 1000, 0).impact.toFixed(0)).toEqual(
        '310'
      )
    })
  })

  describe('getScenarioData', () => {
    it('matches values from IPCC 2000', () => {
      // Test values taken from IPCC 2000
      // https://archive.ipcc.ch/ipccreports/sres/land_use/index.php?idp=74
      const baseline = getIrfCurve('ipcc_2000')

      const mc = getScenarioData('Moura Costa', baseline, 100, 46, 0)
      expect(mc.benefit.toFixed(0)).toEqual('46')

      const lashof = getScenarioData('Lashof', baseline, 100, 46, 0)
      expect(lashof.benefit.toFixed(0)).toEqual('17')
    })

    it('matches values from NCX 2020', () => {
      // Test taken from NCX methodology 2020, Forests and Carbon: A Guide for Buyers and Policymakers

      const baseline = getIrfCurve('ipcc_2007')

      const undiscounted = getBaselineData(baseline, 100, 0)
      const discounted = getBaselineData(baseline, 100, 0.033)

      expect(undiscounted.impact.toFixed(0)).toEqual('48')
      expect(discounted.impact.toFixed(0)).toEqual('17')

      const { benefit } = getScenarioData('Moura Costa', baseline, 100, 1, 0)
      expect((discounted.impact / benefit).toFixed(0)).toEqual('17')
    })

    it('approximates value from NCX 2021', () => {
      const baseline = getIrfCurve('joos_2013')

      const { impact } = getBaselineData(baseline, 100, 0.033)
      const { benefit } = getScenarioData('Lashof', baseline, 100, 1, 0.033)
      expect((impact / benefit).toFixed(2)).toEqual('30.49')
    })

    it('matches values from Table 2 example', () => {
      const baseline = getIrfCurve('joos_2013')

      const { impact } = getBaselineData(baseline, 100, 0)
      const { benefit } = getScenarioData('Lashof', baseline, 100, 1)
      expect(impact.toFixed(1)).toEqual('52.4')
      expect(benefit.toFixed(2)).toEqual('0.41')
      expect((impact / benefit).toFixed(0)).toEqual('128')
    })

    it('matches expected Moura Costa equivalencies', () => {
      const timeHorizon = 100
      const discount = 0
      const baseline = getIrfCurve('joos_2013')
      const { impact } = getBaselineData(baseline, timeHorizon, 0)

      EQUIVALENCE_VALUES.forEach(([delay, expectedResult]) => {
        const { benefit } = getScenarioData(
          'Moura Costa',
          baseline,
          timeHorizon,
          delay,
          discount
        )

        expect((benefit / impact).toFixed(2)).toEqual(expectedResult)
      })
    })
  })
})
