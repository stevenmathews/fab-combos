import Head from 'next/head'
import Image from 'next/image'

const arrow = (
  <span className="icon is-large" style={{width: '2em'}}>
    <i className="fas fa-3x fa-angle-right"></i>
  </span>
)

const noArrow = (
  <span className="icon is-large" style={{width: '2em'}}>
    <i className="fa-3x">or</i>
  </span>
)

function image (alt, version) {
  return (
    <Image
    src={`https://storage.googleapis.com/fabmaster/media/images/${version}.width-450.png`}
    alt={alt}
    width={446}
    height={624}
    />
  )
}

const headCombo = (
  <div className='section'>
  <div className='container'>
    <h3 className='title is-3 has-text-centered'>Head</h3>
    <div className='columns is-vcentered'>
      <div className='column'>
        { image('Head Jab', 'U-WTR98') }
      </div>
      <div className="column is-narrow">
        { arrow }
      </div>
      <div className='column'>
        { image('Open the Center', 'U-WTR95') }
      </div>
      <div className="column is-narrow">
        { arrow }
      </div>
      <div className='column'>
        { image('Fluster Fist', 'U-WTR86') }
      </div>
      <div className="column is-narrow">
        { noArrow }
      </div>
      <div className='column'>
        { image('Pounding Gale', 'U-WTR85') }
      </div>
    </div>
  </div>
</div>
)

const legCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Leg</h3>
      <div className='columns is-vcentered'>
        <div className='column'>
          { image('Leg Tap', 'U-WTR101') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Rising Knee Thrust', 'U-WTR104') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Blackout Kick', 'U-WTR89') }
        </div>
        <div className="column is-narrow">
          { noArrow }
        </div>
        <div className='column'>
          { image('Hurricane Technique', 'U-WTR84') }
        </div>
      </div>
    </div>
  </div>
)

const windCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Wind</h3>
      <div className='columns is-vcentered'>
        <div className='column'>
          { image('Surging Strike', 'U-WTR107') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Whelming Gustwave', 'U-WTR110') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Mugenshi: RELEASE', 'U-WTR83') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Lord of Wind', 'U-WTR81') }
        </div>
      </div>
    </div>
  </div>
)

const waterCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Water</h3>
      <div className='columns is-vcentered'>
        <div className='column'>
          { image('Torrent of Tempo', 'CRU69') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Rushing River', 'CRU60') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Flood of Force', 'CRU55') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Flood of Force', 'CRU55') }
        </div>
      </div>
    </div>
  </div>
)

const zenCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Zen</h3>
      <div className='columns is-vcentered'>
        <div className='column'>
          { image('Soulbead Strike', 'CRU66') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Crane Dance', 'CRU57') }
        </div>
        <div className="column is-narrow">
          { arrow }
        </div>
        <div className='column'>
          { image('Find Center', 'CRU54') }
        </div>
        <div className="column is-narrow">
          { noArrow }
        </div>
        <div className='column'>
          { image('Heron\'s Flight', 'CRU56') }
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
        <div className='columns is-vcentered is-mobile' style={{  
          backgroundImage: "url(" + "https://storage.googleapis.com/fabmaster/media/images/misteria_matte_OaexQzi.width-2000.jpg" + ")",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          height: '40vh',
          width: '100%',
          position: 'relative',
          opacity: '0.75',
        }}>
          <div className='column'>
            <h1 className='title is-1 has-text-white has-text-centered'>Ninja</h1>
          </div>
        </div>
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
      <footer className='section'>
        <div className='container'>
          <p className='has-text-centered'>
            <a href='https://fabtcg.com/'>Flesh and Blood™</a> and all associated images are copyright © <a href='https://legendstory.com/'>Legend Story Studios</a>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
