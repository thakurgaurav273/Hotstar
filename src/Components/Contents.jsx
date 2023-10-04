import React from 'react'
import '../App.css';
import Horizontal_card from './horizontal_card';
import latest from '../latest';
import shows from '../popular_shows';
import family_show from '../watch_with_family';
import pride from '../celebrate_pride';
import best_in_sport from '../best_in_sport';
import specials from '../hotstar_special';
import cric_lover from '../loved_by_cricket_lovers';
import Continue from './continue_watching';
import Footer from './footer';
import Carousel from "./Carousel";

export default function Contents() {
  return (
    <>
        <div className="container">
        <h3 className='categories'>Continue Watching For You</h3>
        <div className='watch-history'>
          {Continue.map(Horizontal_card)}
        </div>
        <h3 className='categories'>Latest & Trending</h3>
        <Carousel cards={latest}/>
        <h3 className='categories'>Popular Shows</h3>
        <Carousel cards={shows}/>
        <h3 className='categories'>Watch With Family</h3>
        <Carousel cards={family_show}/>
        <h3 className='categories'>Celebrating Pride</h3>
        <Carousel cards={pride}/>
        <h3 className='categories'>Best In Sports</h3>
        <Carousel cards={best_in_sport}/>
        <h3 className='categories'>Hotstar Specials - First Episode Free</h3>
        <div className='hotstar_specials'>
          {specials.map(Horizontal_card)}
        </div>
        <h3 className='categories'>Loved By Cricket Lovers</h3>
        <Carousel cards={cric_lover}/>
        <Footer/>
      </div>
    </>
  )
}
