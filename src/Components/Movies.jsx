import React from "react";
import '../App.css';
import Menu from './menu_bar';
import Top from './top_content';
import Carousel from "./Carousel";
import MoviesArray from "./MoviesSectionFiles.jsx"
import Footer from "./footer";
import TopCarousel from "./TopCarousel";
import TopCarouselFile from "./TopCarouselFiles"
function Home() {
  return (
    <>
      <Menu />
      <Top title="Disney+ Hotstar" duration="Grab Your Plan Now" description="Why Wait When You Can Enjoy All Rounder Entertaintment!" 
      buttonText="Subscribe" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-09-12/TheLittleMNSAhsokaNS_deskXBB-a77276f2-04ec-4546-9beb-5e726e42530f.jpg"/>
      <TopCarousel movies-title={TopCarouselFile[0]}/>
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
