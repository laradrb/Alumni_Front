import React, { useState } from 'react';
import { CarouselContainer, CarouselWrapper, CarouselImage, CarouselControls, Button, ArrowIcon } from './styledCarousel';
import carousel1 from '../../assets/img/carousel1.jpg';
import carousel2 from '../../assets/img/carousel2.jpg';
import carousel3 from '../../assets/img/carousel3.jpg';
import carousel4 from '../../assets/img/carousel4.jpg';
import carousel5 from '../../assets/img/carousel5.jpg';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';

const Carousel = () => {
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  
  const [currentIndex, setCurrentIndex] = useState(0);

   const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length]
  ];

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {visibleImages.map((image, index) => (
          <CarouselImage 
            key={index} 
            src={image} 
            alt={`Slide ${index}`} 
          />
        ))}
      </CarouselWrapper>
      <CarouselControls>
        <Button onClick={goToPrevious}>
        <ArrowIcon src={arrowLeft} alt="Left Arrow" />
        </Button>
        <Button onClick={goToNext}>
        <ArrowIcon src={arrowRight} alt="Right Arrow" />
        </Button>
      </CarouselControls>
    </CarouselContainer>
  );
};

export default Carousel;