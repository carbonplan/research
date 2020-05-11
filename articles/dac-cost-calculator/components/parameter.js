import { Box, Divider, Grid, Input, Slider, Text } from 'theme-ui'
import ParamChart from '../components/charts/param-chart.js'


const Parameter = ( { param, data, state }) => {
  const [value, setValue] = state

  const updateParamValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <Grid columns={[1, null, '250px 1fr']}>
      <Box>
        <Input
          sx={{ textAlign: 'left', color: 'purple', fontSize: [4] }}
          type='number'
          step={param.step}
          onChange={updateParamValue}
          value={value}/>
        <Divider sx={{ borderColor: 'text' }}/>
        <Grid columns={[1, null, '150px 1fr']}>
          <Text sx={{ fontSize: [3] }}> {param.displayName} </Text>
          {/* TODO: move sx to theme, put units on same line as scale */}
          <Text variant='metric.units' > {param.unit} </Text>
        </Grid>       
        <Text sx={{ fontSize: [1] }}> {param.description} </Text>
      </Box>
      <Box>
        <ParamChart param={param} data={data}></ParamChart>
        <Box sx={{ paddingLeft: '55px', paddingRight: '15px' }}>
          <Slider
            value={value}
            onChange={updateParamValue}
            min={param.validRange[0]}
            max={param.validRange[1]}
            step={param.step}
          />
        </Box>
      </Box>
    </Grid>
  )
}

export default Parameter

