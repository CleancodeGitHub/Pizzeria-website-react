import React from 'react';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

// Importing custom components and images
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

// Importing styles for the Footer component
import './Footer.css';

// Functional component representing the website footer
const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* Background overlay for the footer section */}
    <FooterOverlay />
    
    {/* Newsletter subscription section */}
    <Newsletter />

    {/* Footer links section with contact, logo, and working hours */}
    <div className="app__footer-links">
      {/* Contact information */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">7 G W3rd St, Mississauga, ON 10019,</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      {/* Logo and quote section */}
      <div className="app__footer-links_logo">
        <img src={images.logo11} alt="footer_logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of others."
        </p>
        <img src={images.spoon1} alt="footer_spoon1"className="spoon__img" style={{ marginTop: 15 }} />
        
        {/* Social media icons */}
        <div className="app__footer-links_icons">
  <FiInstagram />
  <FiTwitter />
  <FiFacebook />
  <FiLinkedin />
</div>
      </div>

      {/* Working hours information */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 10:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">12:00 am - 08:00 pm</p>
      </div>
    </div>

    {/* Copyright information */}
    <div className="footer__copyright">
      <p className="p__opensans">2019 Mia. All Rights reserved.</p>
    </div>
  </div>
);

// Exporting the Footer component as the default export
export default Footer;
