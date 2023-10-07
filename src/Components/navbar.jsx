import React from 'react'
import "../App.css";
import { useState } from "react";
import "../App.css";


export default function Navbar(){
    const [isClicked, setClicked] = useState(false);

    function handleClick() {
      setClicked(!isClicked);
    }
    return(<>
      <div className="hotsnavbar">
        <button className="hamburger" onClick={handleClick}>
          <i className={isClicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>
            <div className="menu_bar" style={{visibility: isClicked ? 'visible' : 'hidden'}}>
                    <ul className="hide_menu">
                    <li><i className="fa-regular items fa-circle-user"></i>&nbsp;&nbsp;My Space</li>
                        <li><i className="fa-sharp items fa-solid fa-magnifying-glass"></i>&nbsp;Search</li>
                        <li><i className="fa-solid items fa-house"></i> Home</li>
                        <li><i className="fa-sharp items fa-solid fa-tv"></i>&nbsp;TV</li>
                        <li><i className="fa-solid items fa-volleyball"></i> &nbsp;Sports</li>
                    </ul>
            </div>
        </div>
    </>)
}