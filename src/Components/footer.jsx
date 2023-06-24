import "../App.css";
function Footer(){
    return(<>
        <div className="first">
            <h4>Company</h4>
            <span className="footer_choices">About Us</span>
            <span className="footer_choices">Careers</span>
            <p className="footer_choices"> &copy; 2023 STAR.All Rights Reserved. <br/>Terms Of Use &nbsp; Privacy Policy FAQ</p>
        </div>
        <div className="second">
            <h4>View Website In</h4>
            <span className="footer_choices"> <i className="fa-solid fa-check check"></i> English</span>
        </div>
        <div className="third">
            <h4>Need Help?</h4>
            <span className="footer_choices">Visit Help Center<br/><br/>Share Feedback</span>
        </div>
        <div className="forth">
            <h4>Connect with Us</h4>
      
            <span><i className="fa-brands fa-facebook-f social"></i> <i className="fa-brands fa-twitter social"></i></span>
            <br/>
            <a href="/"><img alt="pic_is_there" className="googleplay" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"  srcSet="" /></a>
            <a href="/"><img alt="pic_is_there" className="googleplay" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"  srcSet="" /></a>
        </div>

    </>)
}

export default Footer;