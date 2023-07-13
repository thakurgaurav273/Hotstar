import React, { useRef, useState } from 'react';
import '../App.css';
import Card from './vertical_card';

const Carousel = ({cards}) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
    setCurrentTranslate(prevTranslate);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startPos;
    carouselRef.current.style.transform = `translateX(${currentTranslate + distance}px)`;
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    carouselRef.current.style.cursor = 'grab';
    setPrevTranslate(currentTranslate + (e.clientX - startPos));
  };

  const slidePrev = () => {
    const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth;
    const containerWidth = carouselRef.current.offsetWidth;
    const minTranslate = -itemWidth * (carouselRef.current.children.length - Math.floor(containerWidth / itemWidth));

    if (prevTranslate < 0) {
      const newTranslate = Math.max(prevTranslate + itemWidth, minTranslate);
      carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
      setCurrentTranslate(newTranslate);
      setPrevTranslate(newTranslate);
    }
  };

  const slideNext = () => {
    const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth;
    // const containerWidth = carouselRef.current.offsetWidth;
    const maxTranslate = 0;

    if (prevTranslate > -itemWidth * (carouselRef.current.children.length - 1)) {
      const newTranslate = Math.min(prevTranslate - itemWidth, maxTranslate);
      carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
      setCurrentTranslate(newTranslate);
      setPrevTranslate(newTranslate);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        // onTouchMove={handleMouseMove}
        // onTouchEnd={handleMouseUp}
        onTouchCancel={handleMouseUp}
      >
    {cards.map((card, index) => (
    <Card key={index} title={card.title} source={card.source} />
    ))}
      </div>
      <button className="prev-button" onClick={slidePrev}><i class="fa-solid fa-chevron-left"></i></button>
      <button className="next-button" onClick={slideNext}><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  );
};

export default Carousel;
