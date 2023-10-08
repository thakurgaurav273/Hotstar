import React from 'react'
import "./topcarouselstyle.css"

export default function TopCarousel({ 'movies-title': moviesTitle }) {
    let currentSlide = 0;  // Changed initial value to 0
    function showSlide(n) {
      const slides = document.getElementsByClassName('carousel-slide');
      if (n >= slides.length) { currentSlide = 0; }  // Adjusted the condition
      if (n < 0) { currentSlide = slides.length - 1; }  // Adjusted the condition
    
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
    
      slides[currentSlide].style.display = 'block';  // Adjusted index
      currentSlide++;
    }
    
    function autoSlide() {
        const slides = document.getElementsByClassName('carousel-slide');
        if (!slides.length) return;  // Ensure there are slides
    
        showSlide(currentSlide);
    }
    
    setInterval(autoSlide, 5000);
  return (
    <>
          <div class="carousel-container2">
            {/* Slide 1 of my top carousel inline css added for dynamic background */}
            <div class="carousel-slide" id="slide1" style={{background: `url(${moviesTitle[0].backgroundimage}) center/cover no-repeat`}}>
            <div className="details">
                    <img className='myimg' src={moviesTitle[0].thumbnail} alt="" srcset="" />
                    <br />
                    <p className='timing'>{moviesTitle[0].year} &#8226; {moviesTitle[0].duration} &#8226; {moviesTitle[0].language}</p>
                    <p className='description-of-movie'>{moviesTitle[0].description}</p>
                    <br /><br />
                    <button class="transparent-button watch-free"><i class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Watch For Free</button>
        
                </div>
            </div>
            <div class="carousel-slide" id="slide2" style={{background: `url(${moviesTitle[1].backgroundimage}) center/cover no-repeat`}}>
            <div className="details">
                    <img className='myimg' src={moviesTitle[1].thumbnail} alt="" srcset="" />
                    <br />
                    <p className='timing'>{moviesTitle[1].year} &#8226; {moviesTitle[1].duration} &#8226; {moviesTitle[1].language} </p>
                    <p className='description-of-movie'>{moviesTitle[1].description}</p>
                    <br /><br />
                    <button class="transparent-button watch-free"><i class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Watch For Free</button>

                </div>
            </div>
            <div class="carousel-slide" id="slide3" style={{background: `url(${moviesTitle[2].backgroundimage}) center/cover no-repeat`}}>
            <div className="details">
                    <img className='myimg' src={moviesTitle[2].thumbnail} alt="" srcset="" />
                    <br />
                    <p className='timing'>{moviesTitle[2].year} &#8226; {moviesTitle[2].duration} &#8226; {moviesTitle[2].language}</p>
                    <p className='description-of-movie'>{moviesTitle[2].description}</p>
                    <br /><br />
                    <button class="transparent-button watch-free"><i class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Watch For Free</button>

                </div>
            </div>
            <div class="carousel-slide" id="slide4" style={{background: `url(${moviesTitle[3].backgroundimage}) center/cover no-repeat`}}>
            <div className="details">
                    <img className='myimg' src={moviesTitle[3].thumbnail} alt="" srcset="" />
                    <br />
                    <p className='timing'>{moviesTitle[3].year} &#8226; {moviesTitle[3].duration} &#8226; {moviesTitle[3].language} &#8226; <button class="transparent-button rating">{moviesTitle[0].ageRating}</button></p>
                    <p className='description-of-movie'>{moviesTitle[3].description}</p>
                    <br /><br />
                    <button class="transparent-button watch-free"><i class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Watch For Free</button>

                </div>
            </div>
        </div>
    </>
  )
}
