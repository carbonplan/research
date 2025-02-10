import React from 'react'
import Script from 'next/script'
import { ThemeProvider } from 'theme-ui'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '@carbonplan/theme'
import { ScrollProvider } from '../components/scroll'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
        <Script
          data-domain='carbonplan.org'
          data-api='https://carbonplan.org/proxy/api/event'
          src='https://carbonplan.org/js/script.file-downloads.outbound-links.js'
        />
      )}
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
