import React from 'react';
import { useParams } from 'react-router-dom';

const ViewPhotos = () => {
  const { id } = useParams();
  const image = images.find(image => image.id === Number(id));

  return (
    <div>
      <img src={image.src} alt={image.src} />
    </div>
  );
};

export default ViewPhotos;
