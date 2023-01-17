import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const films = [
  {
    id: 1,
    title: 'film1',
    poster: pic1,
    photos: [
      pic4,
      pic5,
      pic6,
      ]
  },
  {
    id: 2,
    title: 'Film2',
    poster: pic2,
    photos: [
      pic9,
      pic7,
      pic8,
      ]
  },
  {
      id: 3,
      title: 'Film3',
      poster: pic3,
      photos: [
        pic12,
        pic10,
        pic11,
      ]
  }
];

const FilmGallery = () => {
  const { title } = useParams();
  const film = films.find(f => f.title === title);

  return (
    <div>
      <p className="">Films</p>
      {film ? (
        <div>
          <h2>{film.title}</h2>
          {film.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`${film.title} - Photo ${index + 1}`} />
          ))}
       </div>
      ) : (
        <div>
        <Link to={`/films/${films[0].title}`}>
          <img src={films[0].poster} alt={films[0].title} />
        </Link>
        <Link to={`/films/${films[1].title}`}>
          <img src={films[1].poster} alt={films[1].title} />
        </Link>
        <Link to={`/films/${films[2].title}`}>
          <img src={films[2].poster} alt={films[2].title} />
        </Link>
      </div>
      )}
    </div>
  );
}

export default FilmGallery;
