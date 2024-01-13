import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  // Ref for scrolling container
  const scrollRef = React.useRef(null);

  // Function to handle scrolling left or right
  const scroll = (direction) => {
    const { current } = scrollRef;

    // Scroll 300 pixels left or right based on the direction
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // Dummy gallery images data
  const galleryImages = [
    { imgUrl: images.food01, altText: 'Delicious Dish 1' },
    { imgUrl: images.food02, altText: 'Mouth-watering Dessert' },
    { imgUrl: images.food03, altText: 'Gourmet Cuisine' },
    { imgUrl: images.food04, altText: 'Chef\'s Special' },
  ];

  return (
    <div className="app__gallery flex__center">
      {/* Gallery content section */}
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Food Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Explore our culinary creations through a visual feast of delightful dishes.
        </p>
        <button type="button" className="custom__button">View More</button>
      </div>

      {/* Gallery images section */}
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image.imgUrl} alt={image.altText} />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        {/* Arrows for scrolling left and right */}
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
