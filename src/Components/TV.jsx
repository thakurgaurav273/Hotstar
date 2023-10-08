import React from "react";
import '../App.css';
import Menu from './menu_bar';
import Navbar from './navbar';
import Carousel from "./Carousel";
import TvArray from "./TVSectionFiles.jsx"
import Footer from "./footer";
import TopCarousel from "./TopCarousel";
import TopCarouselFile from "./TopCarouselFiles"
import Top from "./top_content"
function Home() {
  return (
    <>
      <Navbar/>
      <Menu />
      <Top title="Disney+ Hotstar" duration="Grab Your Plan Now" description="Why Wait When You Can Enjoy All Rounder Entertaintment!" 
      buttonText="Subscribe" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-09-12/TheLittleMNSAhsokaNS_deskXBB-a77276f2-04ec-4546-9beb-5e726e42530f.jpg"/>

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
