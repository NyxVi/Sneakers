import React from 'react'
import { Icon } from '../Icons'

function Carousel({ images }) {
  const length = images.length
  const [currentImage, setCurrentImage] = React.useState(0)
  const changeImg = addValue => {
    const numSection = addValue + currentImage
    if (numSection === length) setCurrentImage(0)
    else if (numSection === -1) setCurrentImage(length - 1)
    else setCurrentImage(numSection)
  }
  return (
    <div className="carousel">
      <div className="carousel-container">
        <img
          src={`./images/${images[currentImage]}`}
          className="carousel-img"
        />
        {/* {images.map(image => (
          <img src={`./images/${image}`} key={image} />
        ))} */}
      </div>
      <Icon
        name="previous"
        addClass="carousel-previous"
        onClick={() => changeImg(-1)}
      />
      <Icon name="next" addClass="carousel-next" onClick={() => changeImg(1)} />
    </div>
  )
}
export { Carousel }
