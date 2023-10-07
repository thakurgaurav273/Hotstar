import React from "react";
import '../App.css';
import Menu from './menu_bar';
import Top from './top_content';
import Video from './video';
import Navbar from './navbar';
import Carousel from "./Carousel";
import MoviesArray from "./MoviesSectionFiles.jsx"
import Footer from "./footer";
function Home() {
  return (
    <>
      <Navbar/>
      <Menu />
      <Top title="Exciting Line-Up" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-03/CW_LTF_Mashup_PostL_V4_deskXBB-3ffecfee-8e3d-4874-bd2c-58afe427dc4b.jpg"/>
      <Video/>
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
