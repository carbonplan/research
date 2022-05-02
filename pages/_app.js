import { ThemeProvider } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '@carbonplan/theme'
import { ScrollProvider } from '../components/scroll'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <ScrollProvider>
          <Component {...pageProps} />
        </ScrollProvider>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
