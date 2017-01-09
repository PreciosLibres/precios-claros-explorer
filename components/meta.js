import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <div>
    <Head>
      <title>Precios Claros Explorer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet"
            href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
    </Head>
  </div>
)
