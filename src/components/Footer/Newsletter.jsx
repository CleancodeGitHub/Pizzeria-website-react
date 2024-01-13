import React from 'react';

// Importing custom SubHeading component
import SubHeading from '../SubHeading/SubHeading';

// Importing styles for the Newsletter component
import './Newsletter.css';

// Functional component representing a newsletter subscription form
const Newsletter = () => (
  <div className="app__newsletter">
    {/* Newsletter heading section */}
    <div className="app__newsletter-heading">
      {/* Custom SubHeading component with title prop */}
      <SubHeading title="Newsletter" />
      {/* Main heading for the newsletter */}
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      {/* Subtitle for the newsletter section */}
      <p className="p__opensans">And never miss the latest updates!</p>
    </div>

    {/* Newsletter input and subscribe button section */}
    <div className="app__newsletter-input flex__center">
      {/* Input field for email address */}
      <input type="email" placeholder="Enter your email address" />
      {/* Button for subscribing to the newsletter */}
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

// Exporting the Newsletter component as the default export
export default Newsletter;
