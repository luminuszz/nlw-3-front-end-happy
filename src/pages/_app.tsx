import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { ThemeProvider } from '../contexts/ThemeProvider'

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
