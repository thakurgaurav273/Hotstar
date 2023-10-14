import React from 'react';
import { useState } from 'react';
import './sidemenu.css';
import { Link } from "react-router-dom";
function App() {
  const [clicked, setClicked] = useState(false);
  let display_hamburger = "none"
  let display_menu = "none"

  function openMenu() {
    setClicked(true);
  }

  function handleClick() {
    setClicked(false);
  }

  if (!clicked) display_hamburger = "block";
  if (clicked) display_menu = "block";

  return (
    <div className='topNavBar'>
      <img alt="pic_is_there" src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" className="topmost-logo" />
      <div className="hamburger-button" style={{ display: display_hamburger }} onClick={openMenu}><i className="fa-solid fa-bars"></i></div>
      <div className="side-menu-container" onBlur={handleClick} style={{ display: display_menu }}>
        <button className='close-button' onClick={handleClick}><i class="fa-solid fa-xmark"></i></button>
        <header className='side-heading'>Menu</header>
        <div className="side-menu-links">
          <ul className="side-menu-options">
            <li className="side-menu-item">
              <Link to="/Myspace"><i className="fa-solid icons fa-user"></i> <span className="side-menu-title">
                My Space </span></Link>
            </li>
            <li className="side-menu-item">
              <Link to="/Search"><i className="fa-solid icons fa-magnifying-glass"></i><span className="side-menu-title">
                Explore</span></Link>
            </li>
            <li className="side-menu-item">
              <Link to="/"><i className="fa-solid icons fa-house"></i><span className="side-menu-title">
                Home</span></Link>
            </li>
            <li className="side-menu-item">
              <Link to="/TV"><i className="fa-solid icons fa-tv"></i><span className="side-menu-title">
                TV</span></Link>
            </li>
            <li className="side-menu-item">
              <Link to="/Sports">
                <i className="fa-solid icons fa-baseball"></i><span className="side-menu-title">
                  Sports</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
