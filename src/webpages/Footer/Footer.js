
import React, { useState} from 'react';
import axios from 'axios';
import {FaHeadphones, FaFacebook,FaTwitter,FaYoutube} from "react-icons/fa"



const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/newsletter/subscribe', { email: newsletterEmail });
      setIsSubscribed(true);
      setError(false);
    } catch (error) {
      console.log(error);
      setIsSubscribed(false);
      setError(true);
    }
  };

  

  return (
    <div className ="footer_all">
        
      <footer>
        <div>
        
          <h3>Subscribe to our news letter</h3>
          {isSubscribed ? (
            <p>Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Message"
                value={newsletterEmail}
                onChange={handleInputChange}
              />
              <button className='footer-btn' type="submit">Subscribe</button>
              {error && <p>An error occurred. Please try again later.</p>}
            </form>
          )}
        </div>
        <div style={{marginTop:'12px'}}>
          <h3>Contact us</h3>
          <p>Email: info@music.com</p>
          <span style={{display:'flex'}}><FaHeadphones className='footer-contact-icon'/><p>Phone: +1 (123) 456-7890</p></span>
          <div className="footer-head">
          
          <div className="footer-head-text-icon ">
            <ul className='box-social'>
            <li ><a href='https://www.facebook.com/'><span className='box-social-margin-right box-social-icon-link back-gr-fb-icon'><FaFacebook/></span></a></li>
            <li ><a href='https://twitter.com/'><span className='box-social-margin-right box-social-icon-link back-gr-tw-icon'><FaTwitter/></span></a></li>
            
            <li ><a href='https://www.youtube.com/'><span className='box-social-margin-right box-social-icon-link back-gr-yt-icon'><FaYoutube/></span></a></li>
            </ul>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;