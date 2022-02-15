import React from 'react'

function Gallery({ images, thumbnail }) {
  let num = 1
  const GalleryPhotos = thumbnail.map(tbn => (
    <img src={'./images/' + tbn} key={num++} />
  ))
  return (
    <div className="gallery">
      <div className="gallery-view">
        <img src={'./images/' + images[0]} />
      </div>
      <div className="gallery-photos">{GalleryPhotos}</div>
    </div>
  )
}
export { Gallery }
