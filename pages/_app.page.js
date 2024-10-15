import { ThemeProvider } from 'theme-ui'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '@carbonplan/theme'
import { ScrollProvider } from '../components/scroll'

console.log(theme)
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: {
          ...theme.colors,
          modes: { light: { ...theme.colors.modes.light, yellow: '#BAA851' } },
        },
      }}
    >
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
