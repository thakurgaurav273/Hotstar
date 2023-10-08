import React from 'react'
export default function Top(props){
    return(<>
        <div className='top-content'>
          <div className="overlap"></div>
          <img alt="pic_is_there"className='top-image' src={props.src}/>
          <div className='desc'>
            <img alt="pic_is_there"className='brand_logo' src='https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png'/>
            <p className='title'>
              <h3 style={{paddingLeft:0}}>{props.title}</h3>
              <span className='info'>{props.duration}</span>
            </p>
            <p className='detail_of_show'>{props.description}</p>
            <button style={{marginTop: '40px'}} className='top-subscribe'>{props.buttonText}</button>
          </div>
      </div>
    </>)
}