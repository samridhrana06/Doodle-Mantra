import React, { useEffect } from 'react';
import './Carousel.css';

const CarouselCustom = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextButton = document.querySelector('.carousel-control-next');
      nextButton.click();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true" 
            aria-label="Slide 1"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="1" 
            aria-label="Slide 2"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="2" 
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="src/assets/david-marcu-78A265wPiO4-unsplash.jpg" 
              className="d-block w-100" 
              alt="Beautiful Landscape" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="src/assets/david-marcu-78A265wPiO4-unsplash.jpg" 
              className="d-block w-100" 
              alt="Beautiful Landscape" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="src/assets/david-marcu-78A265wPiO4-unsplash.jpg" 
              className="d-block w-100" 
              alt="Beautiful Landscape" 
            />
          </div>
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleIndicators" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleIndicators" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselCustom;
