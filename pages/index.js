import Link from 'next/link'

import { capitalize } from '../utils'

function classLink (name, imageName) {
  return (
    <Link href={`/${name}`}>
      <a className='column is-4'>
        <div
          className='columns is-vcentered is-mobile'
          style={{
            backgroundImage:
              'url(' +
              'https://storage.googleapis.com/fabmaster/media/images/' +
              imageName +
              '.jpg' +
              ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
            height: '40vh',
            position: 'relative',
            opacity: '0.75'
          }}
        >
          <div className='column'>
            <h1 className='title is-1 has-text-white has-text-centered'>
              {capitalize(name)}
            </h1>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default function Home () {
  return (
    <main>
      <section class='hero is-fullheight is-black'>
        <div class='hero-body'>
          <div class='container'>
            <div className='columns is-centered is-desktop'>
              {classLink('ninja', 'misteria_matte_OaexQzi.width-2000')}
              {classLink('wizard', 'iG1925ZY.min-1000x300')}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
