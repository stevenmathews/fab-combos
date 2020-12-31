import Head from 'next/head'
import Image from 'next/image'

const arrow = (
  <span class="icon is-large" style={{width: '2em'}}>
    <i class="fas fa-3x fa-angle-right"></i>
  </span>
)

const headCombo = (
  <div className='section'>
  <div className='container'>
    <div className='columns is-vcentered'>
      <div className='column'>
        <Image
        src="https://storage.googleapis.com/fabmaster/media/images/U-WTR98.width-450.png"
        alt="Head Jab"
        width={446}
        height={624}
        />
      </div>
      <div className="column is-narrow">
        { arrow }
      </div>
      <div className='column'>
        <Image
        src="https://storage.googleapis.com/fabmaster/media/images/U-WTR95.width-450.png"
        alt="Open the Center"
        width={446}
        height={624}
        />
      </div>
      <div className="column is-narrow">
        { arrow }
      </div>
      <div className='column'>
        <Image
        src="https://storage.googleapis.com/fabmaster/media/images/U-WTR86.width-450.png"
        alt="Fluster Fist"
        width={446}
        height={624}
        />
      </div>
      <div className='column'>
        <Image
        src="https://storage.googleapis.com/fabmaster/media/images/U-WTR85.width-450.png"
        alt="Pounding Gale"
        width={446}
        height={624}
        />
      </div>
    </div>
  </div>
</div>
)

const legCombo = (
  <div className='section'>
    <div className='container'>
      <div className='columns is-vcentered'>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/U-WTR101.width-450.png"
          alt="Leg Tap"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/U-WTR104.width-450.png"
          alt="Rising Knee Thrust"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/U-WTR89.width-450.png"
          alt="Blackout Kick"
          width={446}
          height={624}
          />
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/U-WTR84.width-450.png"
          alt="Hurricane Technique"
          width={446}
          height={624}
          />
        </div>
      </div>
    </div>
  </div>
)

const windCombo = (
  <div className='section'>
    <div className='container'>
      <div className='columns is-vcentered'>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/U-WTR107.width-450.png"
          alt="Surging Strike"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/U-WTR110.width-450.png"
          alt="Whelming Gustwave"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/U-WTR83.width-450.png"
          alt="Mugenshi: RELEASE"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/U-WTR81.width-450.png"
          alt="Lord of Wind"
          width={446}
          height={624}
          />
        </div>
      </div>
    </div>
  </div>
)

const waterCombo = (
  <div className='section'>
    <div className='container'>
      <div className='columns is-vcentered'>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/CRU69.width-450.png"
          alt="Torrent of Tempo"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/CRU60.width-450.png"
          alt="Rushing River"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/CRU55.width-450.png"
          alt="Flood of Force"
          width={446}
          height={624}
          />
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/CRU55.width-450.png"
          alt="Flood of Force"
          width={446}
          height={624}
          />
        </div>
      </div>
    </div>
  </div>
)

const zenCombo = (
  <div className='section'>
    <div className='container'>
      <div className='columns is-vcentered'>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/CRU66.width-450.png"
          alt="Soulbead Strike"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/CRU57.width-450.png"
          alt="Crane Dance"
          width={446}
          height={624}
          />
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/CRU54.width-450.png"
          alt="Find Center"
          width={446}
          height={624}
          />
        </div>
        <div className='column'>
          <Image
          src="https://storage.googleapis.com/fabmaster/media/images/CRU56.width-450.png"
          alt="Heron's Flight"
          width={446}
          height={624}
          />
        </div>
      </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <div >
      <Head>
        <title>FAB combos</title>
        <meta name='viewport' content='width=device-width, minimum-scale=0.5, initial-scale=1'></meta>
        <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.7.2/css/all.css'
        integrity='sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
        crossOrigin= 'anonymous'
        />
      </Head>

      <main>
        { headCombo }
        <hr></hr>
        { legCombo }
        <hr></hr>
        { windCombo }
        <hr></hr>
        { waterCombo }
        <hr></hr>
        { zenCombo }
      </main>
    </div>
  )
}
