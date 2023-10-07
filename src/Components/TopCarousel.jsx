import React from 'react'
import "./topcarouselstyle.css"
export default function TopCarousel() {
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
            <div class="carousel-slide" id="slide1">
            <div className="details">
                    <img className='myimg' src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2541/1602541-t-30835e5f1322" alt="" srcset="" />
                    <br />
                    <p className='timing'>2022 &#8226; 2h 3m &#8226; Hindi &#8226; <button class="transparent-button rating">U/A 16+</button></p>
                    <p className='description-of-movie'>Introverted and awkward Dr Freddy Ginwala desperately searches for a soulmate. When he finally finds her, the relationship becomes as painful as a root canal.</p>
                    <p className='timing'>Drama | Thriller | Anti-hero | Betrayal</p>
                    <br /><br />
                    <button class="transparent-button watch-free"><i class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Watch For Free</button>
                    <button class="transparent-button"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div class="carousel-slide" id="slide2">
            <div className="details">
                    <img className='myimg' src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/4934/1594934-t-c2e816be5f21" alt="" srcset="" />
                    <br />
                    <p className='timing'>2021 &#8226; 2h 33m &#8226; Hindi &#8226; <button class="transparent-button rating">U/A 13+</button></p>
                    <p className='description-of-movie'>During the late '80s, Hemant Shah, the man with the Midas touch, pulled off the biggest hustle that shook India's financial fabric. Inspired by true events.</p>
                    <p className='timing'>Crime | Drama | Biopic | Controversial</p>
                    <br /><br />
                    <button class="transparent-button watch-free"><i class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Watch For Free</button>
                    <button class="transparent-button"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div class="carousel-slide" id="slide3">
            <div className="details">
                    <img className='myimg' src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2745/1592745-t-71227bb0a25d" alt="" srcset="" />
                    <br />
                    <p className='timing'>2022 &#8226; 2h 25m &#8226; Hindi &#8226; <button class="transparent-button rating">U/A 16+</button></p>
                    <p className='description-of-movie'>When a series of mysterious events stirs pandemonium in a village, an eccentric cop Vikrant Rona sets out to solve the case wherein everyone is under the radar.</p>
                    <p className='timing'>Action | Thriller | Drama | Crime</p>
                    <br /><br />
                    <button class="transparent-button watch-free"><i class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Watch For Free</button>
                    <button class="transparent-button"><i class="fa-solid fa-plus"></i></button>
                </div>
   
            </div>
            <div class="carousel-slide" id="slide4">
            <div className="details">
                    <img className='myimg' src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/4924/1594924-t-ac6570c7646d" alt="" srcset="" />
                    <br />
                    <p className='timing'>2022 &#8226; 2h 23m &#8226; Telugu &#8226; <button class="transparent-button rating">U/A 16+</button></p>
                    <p className='description-of-movie'>An upright cop goes toe to toe with an ex-havildar over a petty case. As the quarrel between these egoistic men gets intense, how far will they go to win?</p>
                    <p className='timing'>Action | Drama | Thriller | Buddy Cop</p>
                    <br /><br />
                    <button class="transparent-button watch-free"><i class="fa-solid fa-play"></i>&nbsp;&nbsp;&nbsp;Watch For Free</button>
                    <button class="transparent-button"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
    </>
  )
}
