import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { mainTheme as theme } from '../themes/main'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { AppContext, defaultAppContextData } from '../contexts/AppContext'

/**
 * MyApp component.
 *
 * @param props
 */
export default function MyApp(props: AppProps): React.ReactElement {
  const { Component, pageProps } = props

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppContext.Provider value={defaultAppContextData}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContext.Provider>
    </React.Fragment>
  )
}
