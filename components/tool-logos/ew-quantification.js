import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const { theme } = useThemeUI()
  const { purple, grey, yellow, green, teal } = theme.colors

  return (
    <svg viewBox='0 0 150 100' width='100%' height='100%'>
      <path
        fill={purple}
        d='M13.3,82.6h16c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C11.8,83.3,12.5,82.6,13.3,82.6z'
      />
      <path
        fill={purple}
        d='M13.3,72.4h16c0.8,0,1.5,0.7,1.5,1.5v2.1c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-2.1
	C11.8,73,12.5,72.4,13.3,72.4z'
      />
      <path
        fill={purple}
        d='M13.3,22.3h16c0.8,0,1.5,0.7,1.5,1.5v2.1c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-2.1
	C11.8,22.9,12.5,22.3,13.3,22.3z'
      />
      <path
        fill={grey}
        d='M40.9,22.3h15.7c0.8,0,1.5,0.7,1.5,1.5v2.1c0,0.8-0.7,1.5-1.5,1.5H40.9c-0.8,0-1.5-0.7-1.5-1.5v-2.1
	C39.4,22.9,40,22.3,40.9,22.3z'
      />
      <path
        fill={grey}
        d='M40.9,72.2h15.7c0.8,0,1.5,0.7,1.5,1.5v2.1c0,0.8-0.7,1.5-1.5,1.5H40.9c-0.8,0-1.5-0.7-1.5-1.5v-2.1
	C39.4,72.9,40,72.2,40.9,72.2z'
      />
      <path
        fill={grey}
        d='M40.9,40.6h15.7c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5H40.9c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C39.4,41.2,40,40.6,40.9,40.6z'
      />
      <path
        fill={grey}
        d='M40.9,12.6h15.7c0.8,0,1.5,0.7,1.5,1.5v2.1c0,0.8-0.7,1.5-1.5,1.5H40.9c-0.8,0-1.5-0.7-1.5-1.5V14
	C39.4,13.2,40,12.6,40.9,12.6z'
      />
      <path
        fill={yellow}
        d='M68.4,22.3h16c0.8,0,1.5,0.7,1.5,1.5v2.1c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-2.1
	C66.9,22.9,67.6,22.3,68.4,22.3z'
      />
      <path
        fill={yellow}
        d='M68.4,31.2h16c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C66.9,31.9,67.6,31.2,68.4,31.2z'
      />
      <path
        fill={yellow}
        d='M68.4,63h16c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C66.9,63.7,67.6,63,68.4,63z'
      />
      <path
        fill={yellow}
        d='M68.4,40.6h16c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C66.9,41.2,67.6,40.6,68.4,40.6z'
      />
      <path
        fill={yellow}
        d='M68.4,82.6h16c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C66.9,83.3,67.6,82.6,68.4,82.6z'
      />
      <path
        fill={green}
        d='M96,62.9h15.7c0.8,0,1.5,0.7,1.5,1.5v2.1c0,0.8-0.7,1.5-1.5,1.5H96c-0.8,0-1.5-0.7-1.5-1.5v-2.1
	C94.5,63.6,95.1,62.9,96,62.9z'
      />
      <path
        fill={green}
        d='M96,12.6h15.7c0.8,0,1.5,0.7,1.5,1.5v2.1c0,0.8-0.7,1.5-1.5,1.5H96c-0.8,0-1.5-0.7-1.5-1.5V14
	C94.5,13.2,95.1,12.6,96,12.6z'
      />
      <path
        fill={green}
        d='M96,72.4h15.7c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5H96c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C94.5,73,95.1,72.4,96,72.4z'
      />
      <path
        fill={teal}
        d='M123.8,31.2h16c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C122.3,31.9,123,31.2,123.8,31.2z'
      />
      <path
        fill={teal}
        d='M123.8,40.6h16c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C122.3,41.2,123,40.6,123.8,40.6z'
      />
      <path
        fill={teal}
        d='M123.8,63h16c0.8,0,1.5,0.7,1.5,1.5v1.8c0,0.8-0.7,1.5-1.5,1.5h-16c-0.8,0-1.5-0.7-1.5-1.5v-1.8
	C122.3,63.7,123,63,123.8,63z'
      />
    </svg>
  )
}

export default Logo
