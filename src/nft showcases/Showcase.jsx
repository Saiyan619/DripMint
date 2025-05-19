import React from 'react'
import './showcase.scss'
import NFTCarousel from './NFTCarousel'
const Showcase = () => {
  return (
    <div className='showcase_main_container'>
          <div className="section-header">
        <h2> See The NFTs With Drip!</h2>
        <p>Discover unique digital art pieces from talented creators</p>
      </div>

          <div>
          <NFTCarousel />
          </div>
    </div>
  )
}

export default Showcase
