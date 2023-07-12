import React from 'react'
import '../App.css'
export default function Menu(){
  return (<>

    <section className="menu_options">
        <img alt="pic_is_there"src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" className="brand-logo" />
        <button className="subscribe">Subscribe &nbsp;</button>
      <div className="options">
        <br />
        <i className="fa-regular items fa-circle-user"></i>
        <br />
        <i className="fa-sharp items fa-solid fa-magnifying-glass"></i>
        <br />
        <i className="fa-solid items fa-house"></i>
        <br />
        <i className="fa-sharp items fa-solid fa-tv"></i>
        <br />
        <i className="fa-regular fa-film-simple"></i>
        <i className="fa-solid items fa-volleyball"></i>
      </div>
      <h2>My Space</h2>
      <h2>Search</h2>
      <h2>Home</h2>
      <h2>TV</h2>
      <h2>Sports</h2>
    </section>
  </>)
}