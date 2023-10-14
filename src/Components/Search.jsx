import React, { useState } from 'react'
import Menu from './menu_bar'
import Footer from './footer'
import "./Routes-styling.css"
import Card from './vertical_card'
import PopularSearch from './popular-searches'
export default function Search() {
    const [newClass,setClass] = useState("fa-solid icon-of-search-page fa-magnifying-glass")
    function setfocus(){    
        setClass("fa-solid icon-of-search-page-focus fa-magnifying-glass");
    }
    function resetfocus(){    
        setClass("fa-solid icon-of-search-page fa-magnifying-glass");
    }
  return (  
    <>  
        <Menu/>
        <div className='Myspace-container'>
        <i className={newClass}></i>
            <input type="text" className="search-content" placeholder='Movies, Shows and more' onFocus={setfocus} onBlur={resetfocus}/>
            <br /><br />
            <h3 className='categories'>Popular Searches</h3>
            {PopularSearch.map(Card)}
        </div>
        <Footer/>
    </>
  )
}
