import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    {/* Contact information section */}
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          123 Gourmet Street, Culinary District, Foodville, FC9 8GH
        </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 10:00 pm</p>
        <p className="p__opensans">Sat - Sun: 12:00 am - 08:00 pm</p>
      </div>
      {/* Visit Us button */}
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    {/* Image section */}
    <div className="app__wrapper_img">
      <img src={images.findus01} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
