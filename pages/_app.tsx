import App from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'

import { withApollo } from '../lib'

interface Props {
  apollo: any
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Head>
          <title>Serverless training 👻</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
