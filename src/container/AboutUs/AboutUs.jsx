// Import necessary dependencies
import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

// AboutUs functional component
const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* AboutUs Content */}
    <div className="app__aboutus-content flex__center">
      {/* About Section */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon1} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Pizza Sove, where passion for great food meets the warmth of excellent hospitality. Our journey began with a simple idea – to create a place where people can enjoy delicious, freshly made pizzas in a cozy and inviting atmosphere. .
        </p>
        <button type="button" className="custom__button">Discover Our Story</button>
      </div>

      {/* image Section */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife30} alt="chef_knife" className="knife__img" />
      </div>

      {/* History Section */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon1} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Pizza Sove has been a cherished part of the community for over a decade. Our story is filled with passion, dedication, and the joy of serving delightful dishes that create lasting memories. Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button type="button" className="custom__button">Explore Our Journey</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
