import React from 'react'
import '../App.css';
import Horizontal_card from './horizontal_card';
import specials from '../hotstar_special';
import Continue from './continue_watching';
import Footer from './footer';
import Carousel from "./Carousel";
import HomeSection from "./HomeSectionFiles"
export default function Contents() {
  return (
    <>
        <div className="container">
          <h3 className='categories'>Continue Watching For You</h3>
          <div className='watch-history'>
            {Continue.map(Horizontal_card)}
          </div>
          <h3 className='categories'>Latest & Trending</h3>
          <Carousel cards={HomeSection[0]}/>
          <h3 className='categories'>Popular Shows</h3>
          <Carousel cards={HomeSection[1]}/>
          <h3 className='categories'>Watch With Family</h3>
          <Carousel cards={HomeSection[2]}/>
          <h3 className='categories'>Celebrating Pride</h3>
          <Carousel cards={HomeSection[3]}/>
          <h3 className='categories'>Best In Sports</h3>
          <Carousel cards={HomeSection[4]}/>
          <h3 className='categories'>Hotstar Specials - First Episode Free</h3>
          <div className='hotstar_specials'>
            {specials.map(Horizontal_card)}
          </div>
          <h3 className='categories'>Loved By Cricket Lovers</h3>
          <Carousel cards={HomeSection[5]}/>
          <Footer/>
        </div>
    </>
  )
}
