import React from 'react'
import myvideo from "../baghi.mp4";
export default function Video(){
    return(<>
        <video className="video-background" src={myvideo} autoPlay={true} muted={true}></video>
    </>)
}