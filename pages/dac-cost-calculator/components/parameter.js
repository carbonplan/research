import { Box, Divider, Grid, Slider, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import ParamChart from '../components/charts/param-chart.js'


const Parameter = ( { param, state }) => {
  const context = useThemeUI()
  const theme = context.theme

  const [value, setValue] = state

  const updateParamValue = (e) => {
    setValue(parseFloat(e.target.value))
  }

  return (
    <Grid columns={[1, null, '250px 1fr']}>
      <Box>
        <Text sx={{ textAlign: 'left', color: theme.colors.purple, fontSize: [4] }}> {value} </Text>
        <Divider sx={{ borderColor: 'text' }}/>
        <Grid columns={[1, null, '150px 1fr']}>
          <Text sx={{ fontSize: [3] }}> {param.displayName} </Text>
          {/* TODO: move sx to theme, put units on same line as scale */}
          <Text sx={{ fontFamily: 'monospace', color: 'secondary', fontSize: [1], ml: [2], textTransform: 'normal' }}> {param.unit} </Text>
        </Grid>       
        <Text sx={{ fontSize: [1] }}> {param.description} </Text>
      </Box>
      <Box>
        <ParamChart param={param}></ParamChart>
        <Box sx={{ paddingLeft: '55px', paddingRight: '15px' }}>
          {/* TODO, use step and scale parameters */}
          <Slider value={value} onChange={updateParamValue} min={param.validRange[0]} max={param.validRange[1]} ></Slider>
        </Box>
      </Box>
    </Grid>
  )
}

export default Parameter

