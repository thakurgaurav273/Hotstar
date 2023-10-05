import React from 'react'
import "./topcarouselstyle.css"
export default function TopCarousel() {
    let currentSlide = 1;

    function showSlide(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    if (n > slides.length) { currentSlide = 1; }
    if (n < 1) { currentSlide = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide - 1].style.display = 'block';
    currentSlide++;
    }

    function autoSlide() {
        showSlide(currentSlide);
    }

    setInterval(autoSlide, 5000);

  return (
    <>
          <div class="carousel-container2">
            <div class="carousel-slide" id="slide1">
                <div className="details">
                    <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2677/1572677-t-d4b93786a4ac" alt="" srcset="" />
                    <span>2023</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error accusamus quo vero laudantium.</p>
                    <button className='subscribe-top-carousel'>Watch Now</button>
                    <button className='add-to'>+</button>
                </div>
            </div>
            <div class="carousel-slide" id="slide2">
            <div className="details">
                    <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2677/1572677-t-d4b93786a4ac" alt="" srcset="" />
                    <span>2023</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error accusamus quo vero laudantium.</p>
                    <button className='subscribe-top-carousel'>Watch Now</button>
                    <button className='add-to'>+</button>
                </div>
    
            </div>
            <div class="carousel-slide" id="slide3">
            <div className="details">
                    <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2677/1572677-t-d4b93786a4ac" alt="" srcset="" />
                    <span>2023</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error accusamus quo vero laudantium.</p>
                    <button className='subscribe-top-carousel'>Watch Now</button>
                    <button className='add-to'>+</button>
                </div>
   
            </div>
            <div class="carousel-slide" id="slide4">
            <div className="details">
                    <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2677/1572677-t-d4b93786a4ac" alt="" srcset="" />
                    <span>2023</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error accusamus quo vero laudantium.</p>
                    <button className='subscribe-top-carousel'>Watch Now</button>
                    <button className='add-to'>+</button>
                </div>

            </div>
        </div>
    </>
  )
}
