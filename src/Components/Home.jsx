import React from "react";
import '../App.css';
import Menu from './menu_bar';
import Top from './top_content';
import Video from './video';
import Navbar from './navbar';

import Contents from "./Contents";

function Home() {
  return (
    <>
      <Navbar/>
      <Menu />
      <Top/>
      <Video/>
      <Contents/>
    </>
  );
}

export default Home;
