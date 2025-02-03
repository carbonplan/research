import React from 'react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'theme-ui'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '@carbonplan/theme'
import { ScrollProvider } from '../components/scroll'

const App = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider
      domain='carbonplan.org'
      trackOutboundLinks
      trackFileDownloads
    >
      <ThemeProvider theme={theme}>
        <ScrollProvider>
          <Component {...pageProps} />
        </ScrollProvider>
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default App
