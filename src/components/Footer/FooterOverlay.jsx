import React from 'react';

// Importing styles for the FooterOverlay component
import './FooterOverlay.css';

// Functional component representing an overlay for the footer section
const FooterOverlay = () => (
  <div className="app__footerOverlay">
    {/* Black overlay for the bottom section */}
    <div className="app__footerOverlay-black" />
    {/* Background image for the footer section */}
    <div className="app__footerOverlay-img app__bg" />
  </div>
);

// Exporting the FooterOverlay component as the default export
export default FooterOverlay;
