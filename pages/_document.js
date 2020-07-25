import React from 'react'
import Document, {
  Html,
  Main,
  NextScript,
  Head as NextHead,
} from 'next/document'
import { Head } from '@carbonplan/components'
import { InitializeColorMode } from 'theme-ui'

class MyDocument extends Document {
  render() {
    return (
      <Html className='no-focus-outline'>
        <NextHead>
          <Head />
        </NextHead>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
