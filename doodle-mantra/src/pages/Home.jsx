import React from 'react';
import CarouselCustom from '../component/Carousel'; // Adjust the path according to your project structure
import Cards from '../component/Cards';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <CarouselCustom />
      <Cards/>
    </div>
  );
}
