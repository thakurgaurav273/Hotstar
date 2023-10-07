import React from "react";
import '../App.css';
import Menu from './menu_bar';
import Top from './top_content';
// import Video from './video';
import Navbar from './navbar';
import Carousel from "./Carousel";
import MoviesArray from "./MoviesSectionFiles.jsx"
import Footer from "./footer";
import TopCarousel from "./TopCarousel";
function Home() {
  return (
    <>
      <Navbar/>
      <Menu />
      <Top title="Disney+ Hotstar" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-03/MaxviewWC23_deskXBB-69eac27a-68af-4eb9-8037-2257184d6b84.jpg"/>
      <TopCarousel/>
      <div className="container">
          <h3 className='categories'>Movies You Watch</h3>
          <Carousel cards={MoviesArray[4]}/>
          <h3 className='categories'>Comedy Movies</h3>
          <Carousel cards={MoviesArray[0]}/>
          <h3 className='categories'>Action Movies</h3>
          <Carousel cards={MoviesArray[1]}/>
          <h3 className='categories'>Free-Newly Added</h3>
          <Carousel cards={MoviesArray[2]}/>
          <h3 className='categories'>Hard-Hitting Movies</h3>
          <Carousel cards={MoviesArray[3]}/>
        </div>
        <Footer/>
    </>
  );
}

export default Home;
