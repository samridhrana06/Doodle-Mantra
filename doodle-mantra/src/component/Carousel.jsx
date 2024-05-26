import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="carousel__images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`carousel__image ${index === currentIndex ? 'carousel__image--visible' : ''}`}
          />
        ))}
      </div>
      <button className="carousel__button carousel__button--right" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
