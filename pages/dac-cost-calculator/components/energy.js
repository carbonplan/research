import { Box, Grid, Text, Select } from 'theme-ui'


const EnergySelect = ({ params }) => {
  const [value, setValue] = params.state
  return (
    <Grid columns={[1, null, '100px 1fr']}>
      <Text>{params.name}</Text>
      <Box>
        <Select
          onChange={e => {
            setValue(e.target.value)
          }}
          sx={{
            variant: 'forms.select'
          }}
          defaultValue={value}>
          <option>WIND</option>
          <option>SOLAR</option>
          <option>NGCC</option>
          <option>NUCLEAR</option>
        </Select>
        {/* Note: was having trouble getting the form select variant to work so I've turn off the custom arrow */}
        {/* <span sx={{
          ml: ['-15px'],
          fontSize: [4],
          display: 'inline-block',
          transform: 'rotate(90deg)',
          pointerEvents: 'none',
          position: 'relative',
          top: '3px',
          color: 'secondary'
        }}>-></span> */}
      </Box>
    </Grid>
  )
}

export default EnergySelect

