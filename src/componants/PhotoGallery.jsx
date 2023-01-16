import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/1.jpg';
import image2 from '../assets/10.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';

const PhotoGallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: 'image1', group: 'group1' },
    { id: 2, src: 'image2', group: 'group1' },
    { id: 3, src: 'image3', group: 'group1' },
    { id: 4, src: 'image4', group: 'group2' },
    { id: 5, src: 'image5', group: 'group2' },
    { id: 6, src: 'image6', group: 'group2' }
  ]);

  return (
    <div>
      <h1>Group 1</h1>
      <div>
        {images
          .filter(image => image.group === 'group1')
          .map(image => (
            <Link key={image.id} to={`/photos/${image.id}`}>
              <img src={image.src} alt={image.src} />
            </Link>
          ))}
      </div>
      <h1>Group 2</h1>
      <div>
        {images
          .filter(image => image.group === 'group2')
          .map(image => (
            <Link key={image.id} to={`/photos/${image.id}`}>
              <img src={image.src} alt={image.src} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
