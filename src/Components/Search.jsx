import React from 'react'
import Menu from './menu_bar'
import Footer from './footer'
import "./Routes-styling.css"
export default function Search() {
  return (  
    <>
        <Menu/>
        <div className='Myspace-container'>
            <div className="help-support">
                <button className='help-button'><i class="fa fa-question-circle"></i> &nbsp;Help & Support</button>
            </div>
            <div className="login-mssg">
                <h1 className='Login-h1'>Login to Disney+ Hotstar</h1>
                <span className='myspace-welcome-mssg'>Start watching from where you left off,personalised for kids and more</span> <br />
                <button className='Login-myspace'>Log In</button>
            </div>
            <div className='myspace-footer'>
            <Footer/>
        </div>
        </div>
       
    </>
  )
}
