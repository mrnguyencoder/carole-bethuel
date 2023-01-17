import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/1.jpg';
import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';
import pic4 from '../assets/4.jpg';
import pic5 from '../assets/5.jpg';
import pic6 from '../assets/6.jpg';
import pic7 from '../assets/7.jpg';
import pic8 from '../assets/8.jpg';
import pic9 from '../assets/9.jpg';
import pic10 from '../assets/10.jpg';
import pic11 from '../assets/11.png';
import pic12 from '../assets/12.jpg';

const FilmGallery = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  
  const film1 = {
    id: 1,
    title: 'Film 1',
    poster: pic1,
    photos: [
      pic4,
      pic5,
      pic6,
    ]
  };
  
  const film2 = {
    id: 2,
    title: 'Film 2',
    poster: pic2,
    photos: [
      pic6,
      pic7,
      pic8,
    ]
  };
  
  const film3 = {
    id: 3,
    title: 'Film 3',
    poster: pic3,
    photos: [
      pic9,
      pic10,
      pic11,
    ]
  };
  
  const handleClick = (film) => {
    setSelectedFilm(film);
  }

  return (
    <div>
      <p className="">Films</p>
      {selectedFilm ? (
        <div>
          <h2>{selectedFilm.title}</h2>
          <Link to={`/films/${selectedFilm.title}`}>
            {selectedFilm.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`${selectedFilm.title} - Photo ${index + 1}`} />
            ))}
          </Link>
        </div>
      ) : (
        <div>
          <Link>
            <img src={film1.poster} alt={film1.title} onClick={() => handleClick(film1)} />
          </Link>
          <img src={film2.poster} alt={film2.title} onClick={() => handleClick(film2)} />
          <img src={film3.poster} alt={film3.title} onClick={() => handleClick(film3)} />
        </div>
      )}
    </div>
  );
}

export default FilmGallery;
