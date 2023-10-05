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
      <Top title="ICC WTC Final 2023" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-05-29/WTCDated_deskXbb-86b250ab-6af0-4638-8d8d-627fe9415cf8.jpg"/>
      <Video/>
      <Contents/>
    </>
  );
}

export default Home;
