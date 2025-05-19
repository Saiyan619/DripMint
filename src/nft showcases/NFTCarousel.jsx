import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './nftCarousel.scss'

const NFTCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true
  })
  
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  // Mock NFT data
  const nfts = [
    {
      id: 1,
      title: "Cosmic Explorer #1",
      creator: "Artist123",
      price: "2.5 NTK",
      image: "./original-a4f1141a356c8be7e3decc35d4b344ae.webp",
      rarity: "Rare"
    },
    {
      id: 2,
      title: "Digital Dreams #42",
      creator: "CryptoMaster",
      price: "1.8 NTK",
      image: "./original-217e9072b56cdda8160ad5f4a5b2ff6d.webp",
      rarity: "Epic"
    },
    {
      id: 3,
      title: "Neon Genesis #7",
      creator: "FutureArt",
      price: "3.2 NTK",
      image: "./original-2cd98136c561ef9e74c1810e95017475.webp",
      rarity: "Legendary"
    },
    {
      id: 4,
      title: "Abstract Vision #15",
      creator: "ModernPixel",
      price: "1.2 NTK",
      image: "./original-2cd98136c561ef9e74c1810e95017475.webp",
      rarity: "Common"
    },
    {
      id: 5,
      title: "Cyberpunk City #99",
      creator: "DigitalDreamer",
      price: "4.1 NTK",
      image: "./original-a4f1141a356c8be7e3decc35d4b344ae.webp",
      rarity: "Ultra Rare"
    }
  ]

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'Common': return '#95a5a6'
      case 'Rare': return '#3498db'
      case 'Epic': return '#9b59b6'
      case 'Legendary': return '#f39c12'
      case 'Ultra Rare': return '#e74c3c'
      default: return '#95a5a6'
    }
  }

  return (
    <div className="nft-carousel-section">
      
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {nfts.map((nft) => (
              <div key={nft.id} className="embla__slide">
                <div className="nft-card">
                  <div className="nft-image">
                    <img src={nft.image} alt={nft.title} />
                    <div 
                      className="rarity-badge"
                      style={{ backgroundColor: getRarityColor(nft.rarity) }}
                    >
                      {nft.rarity}
                    </div>
                  </div>
                  <div className="nft-info">
                    <h3 className="nft-title">{nft.title}</h3>
                    <p className="nft-creator">by {nft.creator}</p>
                    <div className="nft-price">
                      <span className="price-label">Current Price</span>
                      <span className="price-value">{nft.price}</span>
                    </div>
                    <button className="buy-button">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className={`embla__prev ${!canScrollPrev ? 'disabled' : ''}`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous NFTs"
        />
        <button 
          className={`embla__next ${!canScrollNext ? 'disabled' : ''}`}
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next NFTs"
        />
      </div>
    </div>
  )
}

export default NFTCarousel