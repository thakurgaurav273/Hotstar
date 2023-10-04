import React from "react";
import "../App.css"
export default function MenubarItem(props) {
  return (
    <>
        <div className="menubar-item-container">
            <i className={props.class}></i>
            <h2 className="menubar-item-label">{props.title}</h2>
        </div>
    </>
  )
}
