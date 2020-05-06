import { Box, Divider, Grid, Slider, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import ParamChart from '../components/charts/param-chart.js'


const Parameter = ( { params }) => {
  const context = useThemeUI()
  const theme = context.theme

  const [value, setValue] = params.state

  const updateParamValue = (e) => {
    setValue(parseFloat(e.target.value))
  }

  return (
    <Grid columns={[1, null, '250px 1fr']}>
      <Box>
        <Text sx={{ textAlign: 'left', color: theme.colors.purple, fontSize: [4] }}> {value} </Text>
        <Divider sx={{ borderColor: 'text' }}/>
        <Text sx={{ fontSize: [3] }}> {params.name} </Text>
        <Text sx={{ fontSize: [1] }}> Determines the overall scale of the operations (make it big for a lot of DAC)</Text>
      </Box>
      <Box>
        <ParamChart></ParamChart>
        <Box sx={{ paddingLeft: '55px', paddingRight: '15px' }}>
          <Slider value={value} onChange={updateParamValue} min={0} max={50} ></Slider>
        </Box>
      </Box>
    </Grid>
  )
}

export default Parameter

