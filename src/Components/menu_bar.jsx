import React, { useState } from 'react'
import '../App.css'
import MenubarItem from './menubar-items'
export default function Menu(props){
  const [hover,setHover]=useState(false);
  function handlemouse(){
    if(hover===true){
      setHover(false);
    }
    else{
      setHover(true);
    }
  }
  return (<>
    <section className="menu_options" onMouseOver={handlemouse} onMouseLeave={handlemouse}>
    <img alt="pic_is_there"src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" className="brand-logo" />
    <button className="subscribe">Subscribe &nbsp;</button>
        <MenubarItem hovered={hover} class="fa-regular items fa-circle-user" title="My Space"/>
        <MenubarItem hovered={hover} class="fa-sharp items fa-solid fa-magnifying-glass" title="Search"/>
        <MenubarItem hovered={hover} class="fa-solid items fa-house" title="Home"/>
        <MenubarItem hovered={hover} class="fa-sharp items fa-solid fa-tv" title="TV"/>
        <MenubarItem hovered={hover} class="fa-solid items fa-film" title="Movies"/>
        <MenubarItem hovered={hover} class="fa-solid items fa-volleyball" title="Sports"/>
    </section>
  </>)}