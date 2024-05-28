// import React, { useState } from 'react';
// import './Carousel.css'; // Import your CSS file

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="carousel">
//       <button className="carousel__button carousel__button--left" onClick={prevSlide}>
//         &#8249;
//       </button>
//       <div className="carousel__images">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className={`carousel__image ${index === currentIndex ? 'carousel__image--visible' : ''}`}
//           />
//         ))}
//       </div>
//       <button className="carousel__button carousel__button--right" onClick={nextSlide}>
//         &#8250;
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselCustom = () => (
  <>
    <Carousel arrows infinite={false}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    <br />
    
  </>
);

export default CarouselCustom;

