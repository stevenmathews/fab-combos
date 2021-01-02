import Header from '../components/Header'
import { cardImage, arrow, or } from '../utils'

const aetherFlareCombo = (
  <div className='section'>
    <div className='container'>
      <div className='columns is-vcentered is-centered is-mobile'>
        <div className='column is-3'>{cardImage('Aether Flare', 'U-ARC132')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column is-3'>{cardImage('Snapback', 'CRU174')}</div>
      </div>
    </div>
  </div>
)

const chainGazeCombo = (
  <div className='section'>
    <div className='container'>
      <div className='columns is-vcentered is-centered is-mobile'>
        <div className='column is-3'>{cardImage('Gaze the Ages', 'CRU163')}</div>
        <div className='column is-narrow'>{or}</div>
        <div className='column is-3'>{cardImage('Chain Lightning', 'CRU162')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column is-3'>{cardImage('Snapback', 'CRU174')}</div>
      </div>
    </div>
  </div>
)

const stirCombo = (
  <div className='section'>
    <div className='container'>
      <div className='columns is-vcentered is-centered is-mobile'>
        <div className='column is-3'>
          {cardImage('Stir the Aetherwinds', 'U-ARC129')}
        </div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column is-3'>
          {cardImage('Forked Lightning', 'U-ARC120')}
        </div>
      </div>
    </div>
  </div>
)

const lessonCombo = (
  <div className='section'>
    <div className='container'>
      <h3 className='title is-3 has-text-centered'>(Kano Specialization)</h3>
      <div className='columns is-vcentered is-centered is-mobile'>
        <div className='column is-3'>{cardImage('Lesson in Lava', 'U-ARC121')}</div>
        <div className='column is-narrow'>{arrow}</div>
        <div className='column is-3'>{cardImage('Blazing Aether', 'U-ARC118')}</div>
      </div>
    </div>
  </div>
)

export default function Home () {
  return (
    <main>
      {Header('wizard', 'iG1925ZY.min-1000x300')}
      {aetherFlareCombo}
      <hr />
      {chainGazeCombo}
      <hr />
      {stirCombo}
      <hr />
      {lessonCombo}
    </main>
  )
}
