import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* SubHeading component with a more descriptive title */}
      <SubHeading title="Indulge in Exquisite Flavors" />

      <h1 className="app__header-h1">Elevate Your Dining Experience</h1>

      {/* Updated description for the restaurant */}
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Immerse yourself in the art of fine dining where every dish is a masterpiece. Our chefs craft culinary wonders that blend flavors, textures, and creativity. Sit back, relax, and savor the moments. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.
      </p>

      {/* Explore Menu button */}
      <button type="button" className="custom__button">
        Explore Our Exquisite Menu
      </button>
    </div>

    {/* Image section with an updated image */}
    <div className="app__wrapper_img">
      <img src={images.photo2} alt="restaurant_interior" />
    </div>
  </div>
);

export default Header;
