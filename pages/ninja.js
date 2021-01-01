import Header from '../components/Header'
import { cardImage, arrow, or } from '../utils'

const headCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Head</h3>
      <div className='columns is-vcentered'>
        <div className='column'>{cardImage('Head Jab', 'U-WTR98')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Open the Center', 'U-WTR95')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Fluster Fist', 'U-WTR86')}</div>
        <div className='column is-narrow'>{or}</div>
        <div className='column'>{cardImage('Pounding Gale', 'U-WTR85')}</div>
      </div>
    </div>
  </div>
)

const legCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Leg</h3>
      <div className='columns is-vcentered'>
        <div className='column'>{cardImage('Leg Tap', 'U-WTR101')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Rising Knee Thrust', 'U-WTR104')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Blackout Kick', 'U-WTR89')}</div>
        <div className='column is-narrow'>{or}</div>
        <div className='column'>{cardImage('Hurricane Technique', 'U-WTR84')}</div>
      </div>
    </div>
  </div>
)

const surgingCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Surging</h3>
      <div className='columns is-vcentered'>
        <div className='column'>{cardImage('Surging Strike', 'U-WTR107')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Whelming Gustwave', 'U-WTR110')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Mugenshi: RELEASE', 'U-WTR83')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Lord of Wind', 'U-WTR81')}</div>
      </div>
    </div>
  </div>
)

const torrentCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Torrent</h3>
      <div className='columns is-vcentered'>
        <div className='column'>{cardImage('Torrent of Tempo', 'CRU69')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Rushing River', 'CRU60')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Flood of Force', 'CRU55')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Flood of Force', 'CRU55')}</div>
      </div>
    </div>
  </div>
)

const soulbeadCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>Soulbead</h3>
      <div className='columns is-vcentered'>
        <div className='column'>{cardImage('Soulbead Strike', 'CRU66')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Crane Dance', 'CRU57')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column'>{cardImage('Find Center', 'CRU54')}</div>
        <div className='column is-narrow'>{or}</div>
        <div className='column'>{cardImage('Heron\'s Flight', 'CRU56')}</div>
      </div>
    </div>
  </div>
)

export default function Ninja () {
  return (
    <main>
      {Header('ninja', 'misteria_matte_OaexQzi.width-2000')}
      {headCombo}
      <hr />
      {legCombo}
      <hr />
      {surgingCombo}
      <hr />
      {torrentCombo}
      <hr />
      {soulbeadCombo}
    </main>
  )
}
