import React from 'react'
import "../App.css";
function Footer(){
    return(
    <div className="links">
        <ul className="ul1">
            <li><h4>Company</h4></li>
            <li><span className="footer_choices">About Us</span></li>
            <li><span className="footer_choices">Careers</span></li>
            <li><p className="footer_choices"> &copy; 2023 STAR.All Rights Reserved. <br/>Terms Of Use &nbsp; Privacy Policy FAQ</p></li>
            <li className="hide_links"><span >Visit Help Center Share Feedback</span></li>
        </ul>
        <ul className="ul2">
            <li> <h4 className="ulh2">View Website In</h4></li>
            <li  className="footer_choices"> <span> <i className="fa-solid fa-check check"></i> English</span></li>
            <li className="hide_links"><span >Visit </span></li>
            <li className="hide_links"><span >Visit </span></li>
            <li className="hide_links"><span >Visit </span></li>
            <li className="hide_links"><span >Visit </span></li>
            <li className="hide_links"><span >Visit </span></li>
        </ul>
        <ul className="ul3">
            <li><h4>Need Help?</h4></li>
            <li><span className="footer_choices">Visit Help Center<br/><br/>Share Feedback</span></li>
            <li className="hide_links"><span >Visit Help CenterShare Feedback</span></li>
            <li className="hide_links"><span >Visit Help CenterShare Feedback</span></li>
        </ul>
        <ul className="ul4">
            <li><h4>Connect with Us</h4></li>
            <li><span><i className="fa-brands fa-facebook-f social"></i> <i className="fa-brands fa-twitter social"></i></span></li>
            <li><a href="/"><img alt="pic_is_there" className="googleplay" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"  srcSet="" /></a></li>
            <li> <a href="/"><img alt="pic_is_there" className="googleplay" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"  srcSet="" /></a></li>
            
        </ul>

    </div>)
}

export default Footer;