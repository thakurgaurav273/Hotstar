import React from "react";
import './App.css';
import Horizontal_card from './Components/horizontal_card';
import Card from './Components/vertical_card';
import latest from './latest';
import shows from './popular_shows';
import family_show from './watch_with_family';
import pride from './celebrate_pride';
import best_in_sport from './best_in_sport';
import specials from './hotstar_special';
import cric_lover from './loved_by_cricket_lovers';
import Menu from './Components/menu_bar';
import Top from './Components/top_content';
import Video from './Components/video';
import Continue from './Components/continue_watching';
import Footer from './Components/footer';
import Navbar from './Components/navbar';
function App() {

  return (
    <>
      <Navbar/>
      <Menu />
      <Top/>
      <Video/>
      <div className="container">
        <div className='watch-history'>
          <h3 className='categories'>Continue Watching For You</h3>
          {Continue.map(Horizontal_card)}
        </div>
        <h3 className='categories'>Latest & Trending</h3>
        <div className='latest'>
          {latest.map(Card)}
        </div>
        <h3 className='categories'>Popular Shows</h3>
        <div className='popular-shows'>
          {shows.map(Card)}
        </div>
        <h3 className='categories'>Watch With Family</h3>
        <div className='watch-with-family'>
          {family_show.map(Card)}
        </div>
        <h3 className='categories'>Celebrating Pride</h3>
        <div className='celebrating-pride'>
          {pride.map(Card)}
        </div>
        <h3 className='categories'>Best In Sports</h3>
        <div className='best_in_sports'>
          {best_in_sport.map(Horizontal_card)}
        </div>
        <h3 className='categories'>Hotstar Specials - First Episode Free</h3>
        <div className='hotstar_specials'>
          {specials.map(Horizontal_card)}
        </div>
        <h3 className='categories'>Loved By Cricket Lovers</h3>
        <div className='loved_cric_lover'>
          {cric_lover.map(Card)}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
