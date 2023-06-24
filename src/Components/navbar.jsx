import "../App.css";
import { useState } from "react";
import "../App.css";


export default function Navbar(){
        // setting a state for whether button is clicked or not
        const [isclick,setClick]=useState("false");
        // setting a state for whether menu is hidden or not
        const [ishidden,setHidden]=useState("hidden");
        // setting a state to manage the view of button
        const [button,setButton]=useState("fa-solid fa-bars");
        // once the button is clicked following function is executed
        function handleClick(){
            if(isclick==="false"){
                // reverse the class of icon in button
                setButton("fa-solid fa-xmark");
                // reverses the visibility of menu
                setHidden("visible");
                // keep track of whether button is clicked or not
                setClick("true");
            }
            else{
                
                setButton("fa-solid fa-bars");
                setHidden("hidden");
                setClick("false");
            }
        }
    return(<>
        <div className="hotsnavbar">
            <img alt="pic_is_there"src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" className="navbar-brand-logo" />
            <button className="hamburger" onClick={handleClick}><i className={button}></i></button>
            <div className="menu_bar" style={{visibility:ishidden}}>
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