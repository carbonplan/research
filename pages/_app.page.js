import { ThemeProvider } from 'theme-ui'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '@carbonplan/theme'
import { ScrollProvider } from '../components/scroll'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
