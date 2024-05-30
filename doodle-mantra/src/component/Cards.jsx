import React from 'react';

export default function Cards() {
  return (
    <>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="src/assets/david-marcu-78A265wPiO4-unsplash.jpg" 
            className="card-img-top" 
            alt="Beautiful Landscape" 
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
