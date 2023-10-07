import React from "react";
import '../App.css';
import Menu from './menu_bar';
import Top from './top_content';
import Navbar from './navbar';
import Carousel from "./HorizontalCardCarousel";
import SportsArray from "./SportsSectionFile.jsx"
import Footer from "./footer";
import TopCarousel from "./Sports-top-carousel";
import TopCarouselFile from "./TopCarouselFiles"
function Home() {
  return (
    <>
      <Navbar/>
      <Menu />
      <Top title="Exciting Line-Up" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-03/CW_LTF_Mashup_PostL_V4_deskXBB-3ffecfee-8e3d-4874-bd2c-58afe427dc4b.jpg"/>
      <TopCarousel movies-title={TopCarouselFile[2]}/>
      <div className="container">
          <h3 className='categories'>India at the World Cup</h3>
          <Carousel cards={SportsArray[0]}/>
          <h3 className='categories'>ICC CWC 2023: SA vs SL</h3>
          <Carousel cards={SportsArray[1]}/>
          <h3 className='categories'>ICC CWC 2023: BAN vs AFG</h3>
          <Carousel cards={SportsArray[2]}/>
          <h3 className='categories'>ICC Men's Cricket World Cup</h3>
          <Carousel cards={SportsArray[3]}/>
          <h3 className='categories'>Popular Tournaments</h3>
          <Carousel cards={SportsArray[4]}/>
        </div>
        <Footer/>
    </>
  );
}

export default Home;
