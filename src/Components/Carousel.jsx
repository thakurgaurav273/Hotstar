import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import Card from './vertical_card';

const Carousel = ({ cards }) => {
  const carouselRef = useRef(null);

  const [prevTranslate, setPrevTranslate] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    // Update itemWidth when component mounts or when cards change
    if (carouselRef.current) {
      setItemWidth(carouselRef.current.querySelector('.carousel-item').offsetWidth);
    }
  }, [cards]);


const slidePrev = () => {
  const minTranslate = -itemWidth;

  if (prevTranslate < 0) {
    const newTranslate = Math.max(prevTranslate + itemWidth, minTranslate);
    carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
    setPrevTranslate(newTranslate);
  } else {
    // Snap to the first item
    const firstItemTranslate = 0;
    carouselRef.current.style.transform = `translateX(${firstItemTranslate}px)`;
    setPrevTranslate(firstItemTranslate);
  }
};

  const slideNext = () => {
    const containerWidth = carouselRef.current.offsetWidth;
    const maxTranslate = -itemWidth * (carouselRef.current.children.length - Math.floor(containerWidth / itemWidth)) + itemWidth;
  
    if (prevTranslate > maxTranslate) {
      const newTranslate = Math.min(prevTranslate - itemWidth, maxTranslate);
      carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
      setPrevTranslate(newTranslate);
    } else {
      // Snap to the last item
      const lastItemTranslate = -itemWidth * (carouselRef.current.children.length - Math.floor(containerWidth / itemWidth));
      carouselRef.current.style.transform = `translateX(${lastItemTranslate}px)`;
      setPrevTranslate(lastItemTranslate);
    }
  };
  

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        ref={carouselRef}
      >
        {cards.map((card, index) => (
          <Card key={index} title={card.title} source={card.source} />
        ))}
      </div>
      <button className="prev-button" onClick={slidePrev} disabled={prevTranslate >= 0}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="next-button" onClick={slideNext}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
