import { Box, Divider, Grid, Input, Slider, Text } from 'theme-ui'
import ParamChart from '../components/charts/param-chart.js'


const Parameter = ( { param, data, state }) => {
  const [value, setValue] = state

  const updateParamValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <Box>
      <Text sx={{ fontSize: [3] }}> {param.displayName} </Text>
      <Text sx={{ fontSize: [1] }}> {param.description} </Text>
      <Grid columns={[1, null, '160px 1fr']}>
        <Box>
          <Input
            sx={{ textAlign: 'left', position: 'relative', top: '45%', color: 'purple', fontSize: [4] }}
            type='number'
            step={param.step}
            onChange={updateParamValue}
            value={value} />
          <Divider sx={{ borderColor: 'text', position: 'relative', top: '40%', }}/>
          <Text variant='metric.units' sx={{ position: 'relative', top: '40%', }}> {param.unit} </Text>
        </Box>
        <Box>
          <ParamChart param={param} data={data}></ParamChart>
          <Box sx={{ paddingLeft: '10px', paddingRight: '50px'}}>
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
    </Box>
  )
}

export default Parameter

