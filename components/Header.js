import Link from 'next/link'
import { capitalize } from '../utils'

export default function Header (name, imageName) {
  return (
    <Link href='/'>
      <a
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
          width: '100%',
          position: 'relative'
        }}
      >
        <div className='column'>
          <h1 className='title is-1 has-text-white has-text-centered'>{capitalize(name)}</h1>
        </div>
      </a>
    </Link>
  )
}
