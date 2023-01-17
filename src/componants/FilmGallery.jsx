import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/1.jpg';
import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';

const FilmGallery = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  
  const film1 = {
    id: 1,
    title: 'Film 1',
    poster: pic1,
    photos: [
      'https://image.com/film1-photo1.jpg',
      'https://image.com/film1-photo2.jpg',
      'https://image.com/film1-photo3.jpg'
    ]
  };
  
  const film2 = {
    id: 2,
    title: 'Film 2',
    poster: pic2,
    photos: [
      'https://image.com/film2-photo1.jpg',
      'https://image.com/film2-photo2.jpg',
      'https://image.com/film2-photo3.jpg'
    ]
  };
  
  const film3 = {
    id: 3,
    title: 'Film 3',
    poster: pic3,
    photos: [
      'https://image.com/film3-photo1.jpg',
      'https://image.com/film3-photo2.jpg',
      'https://image.com/film3-photo3.jpg'
    ]
  };
  
  const handleClick = (film) => {
    setSelectedFilm(film);
  }

  return (
    <div>
      {selectedFilm ? (
        <div>
          <h1>{selectedFilm.title}</h1>
          <Link to={`/films/${selectedFilm.id}`}>
            {selectedFilm.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`${selectedFilm.title} - Photo ${index + 1}`} />
            ))}
          </Link>
        </div>
      ) : (
        <div>
          <img src={film1.poster} alt={film1.title} onClick={() => handleClick(film1)} />
          <img src={film2.poster} alt={film2.title} onClick={() => handleClick(film2)} />
          <img src={film3.poster} alt={film3.title} onClick={() => handleClick(film3)} />
        </div>
      )}
    </div>
  );
}

export default FilmGallery;
