import { ThemeProvider } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '@carbonplan/theme'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    // Ensure that automatic scroll restoration is used on browser navigation
    router.beforePopState(() => {
      history.scrollRestoration = 'auto'
      return true
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
