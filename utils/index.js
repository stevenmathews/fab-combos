import Image from 'next/image'

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function cardImage (alt, version) {
  return (
    <Image
      src={`https://storage.googleapis.com/fabmaster/media/images/${version}.width-450.png`}
      alt={alt}
      width={446}
      height={624}
    />
  )
}

export const arrow = (
  <span className='icon is-large' style={{ width: '2em' }}>
    <i className='fas fa-3x fa-caret-right' />
  </span>
)

export const or = (
  <span className='icon is-large' style={{ width: '2em' }}>
    <i className='fa-3x'>or</i>
  </span>
)
