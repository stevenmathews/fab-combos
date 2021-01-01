import Head from 'next/head'
import withGA from 'next-ga'
import Router from 'next/router'

import '../styles.scss'

const GOOGLE_ANALYTICS_CODE = 'G-LDC6T7Y4ED'

function MyApp ({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>FAB combos</title>
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=0.5, initial-scale=1'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.7.2/css/all.css'
          integrity='sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
          crossOrigin='anonymous'
        />
      </Head>
      <Component {...pageProps} />
      <footer className='section'>
        <div className='container'>
          <p className='has-text-centered'>
            Made by{' '}
            <a href='mailto:stevenmathews.nz@gmail.com'>Steve Mathews</a>
          </p>
          <p className='has-text-centered'>
            <a href='https://fabtcg.com/'>Flesh and Blood™</a> and all
            associated images are copyright ©{' '}
            <a href='https://legendstory.com/'>Legend Story Studios</a>. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default withGA(GOOGLE_ANALYTICS_CODE, Router)(MyApp)
