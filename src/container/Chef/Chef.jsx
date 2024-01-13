import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef1} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Insight" />
      <h1 className="headtext__cormorant">Crafting Culinary Excellence</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.lop} alt="quote_image" />
          <p className="p__opensans">At Pizzajolly, we believe in the art of bringing flavors to life, creating memorable dining experiences that linger on the palate and in the heart.</p>
        </div>
        <p className="p__opensans">Our commitment extends beyond the plate—each dish is a symphony of passion, innovation, and quality ingredients. We embrace the rich heritage of culinary traditions while continuously pushing the boundaries of taste.</p>
      </div>

      <div className="app__chef-sign">
        <p>Mia Vukov</p>
        <p className="p__opensans">Chef Extraordinaire & Founder</p>
        <img src={images.sig} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
