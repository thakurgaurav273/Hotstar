import React from "react";
import '../App.css';
import Menu from './menu_bar';
import Top from './top_content';
import Navbar from './navbar';
import Carousel from "./Carousel";
import TvArray from "./TVSectionFiles.jsx"
import Footer from "./footer";
import TopCarousel from "./TopCarousel";
import TopCarouselFile from "./TopCarouselFiles"
function Home() {
  return (
    <>
      <Navbar/>
      <Menu />
      <Top title="Disney+ Hotstar" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-03/MaxviewWC23_deskXBB-69eac27a-68af-4eb9-8037-2257184d6b84.jpg"/>
      <TopCarousel movies-title={TopCarouselFile[1]}/>
      <div className="container">
          <h3 className='categories'>Star Maa Shows</h3>
          <Carousel cards={TvArray[0]}/>
          <h3 className='categories'>Channel V Teen</h3>
          <Carousel cards={TvArray[1]}/>
          <h3 className='categories'>StarPlus Shows</h3>
          <Carousel cards={TvArray[2]}/>
          <h3 className='categories'>Popular Shows</h3>
          <Carousel cards={TvArray[3]}/>
          <h3 className='categories'>Thriller Shows</h3>
          <Carousel cards={TvArray[4]}/>
        </div>
        <Footer/>
    </>
  );
}

export default Home;
