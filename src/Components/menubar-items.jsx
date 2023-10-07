import React, { useState } from "react";
import "../App.css"
import { Navigate } from "react-router-dom";
// import Myspace from "./Myspace";
export default function MenubarItem(props) {
    const [clicked,isClicked]=useState(false);
    const [link,setLink]=useState("/");
    function handleClick(){
        if(props.title==="Home"){
            setLink("/");
        }
        else if(props.title==="My Space"){
            setLink("/Myspace");
        }
        else if(props.title==="Search"){
            setLink("/Search");
        }
        else if(props.title==="TV"){
            setLink("/TV");
        }
        else if(props.title==="Movies"){
            setLink("/Movies");
        }
        else if(props.title==="Sports"){
            setLink("/Sports");
        }
        isClicked(true);
    }
    if(clicked){
        return <Navigate to={link}/>
    }
  return (
    <>
        <div className="menubar-item-container" onClick={handleClick}>
            <i className={props.class}></i>
            <h2 className="menubar-item-label">{props.title}</h2>
        </div>
    </>
  )
}
