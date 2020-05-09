import { Box, Grid, Text, Select } from 'theme-ui'

const eMap = {
  'WIND': 'Wind',
  'SOLAR': 'Solar'
}


const EnergySelect = ({ params }) => {
  const [value, setValue] = params.state

  const defaultValue = value.toUpperCase()
  return (
    <Grid columns={[1, null, '100px 1fr']}>
      <Text>{params.name}</Text>
      <Box>
        <Select
          onChange={e => {
            setValue(eMap[e.target.value])
          }}
          sx={{
            variant: 'forms.select'
          }}
          defaultValue={defaultValue}>
          <option>WIND</option>
          <option>SOLAR</option>
          {/* <option>NGCC</option>
          <option>NUCLEAR</option> */}
        </Select>
      </Box>
    </Grid>
  )
}

export default EnergySelect

