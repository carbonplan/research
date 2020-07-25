import React from 'react'
import App from 'next/app'
import { Style } from '@carbonplan/components'
import { ThemeProvider } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import theme from '../theme'

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <Component {...pageProps} />
        <Style />
      </MDXProvider>
    </ThemeProvider>
  )
}
