import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h3 className='footer-h3'>Company</h3>
        <ul>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">&copy; 2023 STAR. All rights Reserved.</a></li>
          <li><a href="/">Terms of use</a> <a href="/">Privacy Policy</a> <a href="/">FAQ</a></li>
        </ul>
      </div>
      <div className="column">
        <h3 className='footer-h3'>View Website In</h3>
        <ul>
          <li><a href="/"><i className="fa-solid fa-check check"></i> English</a></li>
        </ul>
      </div>
      <div className="column">
        <h3 className='footer-h3'>Need Help ?</h3>
        <ul>
          <li><a href="/">Visit Help Center</a></li>
          <li><a href="/">Share Feedback</a></li>
        </ul>
      </div>
      <div className="column">
        <h3 className='footer-h3'>Connect with Us</h3>
        <ul>
          <li><a href="/"><i className="fa-brands fa-facebook-f social"></i> </a> <a href='/'><i className="fa-brands fa-twitter social"></i></a></li>
          <li><a href="/"><img alt="pic_is_there" className="googleplay" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"  srcSet="" /></a></li>
            <li> <a href="/"><img alt="pic_is_there" className="googleplay" src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"  srcSet="" /></a></li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;
