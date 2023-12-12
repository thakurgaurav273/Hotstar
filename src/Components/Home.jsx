import React from "react";
import '../App.css';
import Menu from './menu_bar';
import Top from './top_content';
import Video from './video';
import Contents from "./Contents";

function Home() {
  
  return (
    <>
      <Menu />
      <Top title="ICC Final World Cup" duration="Explore" description="" buttonText="Explore" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-03/CW_LTF_Mashup_PostL_V4_deskXBB-3ffecfee-8e3d-4874-bd2c-58afe427dc4b.jpg"/>
      <Video/>
      <Contents/>
    </>
  );
}

export default Home;
