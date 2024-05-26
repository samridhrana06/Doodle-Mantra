import React from 'react';
import Carousel from '../component/Carousel';

export default function Home() {
  const images = [
    'https://via.placeholder.com/600x400/ff7f7f/333333?text=Slide+1',
    'https://via.placeholder.com/600x400/7f7fff/333333?text=Slide+2',
    'https://via.placeholder.com/600x400/7fff7f/333333?text=Slide+3',
  ];

  return (
    <>
    <div>
      <h1>Welcome to the Home Page</h1>
      <Carousel images={images} />
    </div>
    </>
  );
}
