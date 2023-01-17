import React, { useState, useEffect }from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

import pic1 from '../assets/1.jpg';
import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';
import pic4 from '../assets/4.jpg';
// import pic5 from '../assets/5.jpg';
// import pic6 from '../assets/6.jpg';
// import pic7 from '../assets/7.jpg';
// import pic8 from '../assets/8.jpg';
// import pic9 from '../assets/9.jpg';
// import pic10 from '../assets/10.jpg';
// import pic11 from '../assets/11.png';
// import pic12 from '../assets/12.jpg';
// import pic13 from '../assets/13.jpg';
// import pic14 from '../assets/14.jpg';
// import pic15 from '../assets/15.jpg';
// import pic16 from '../assets/16.jpg';
// import pic17 from '../assets/17.jpg';
// import pic18 from '../assets/18.jpg';
// import pic19 from '../assets/19.jpg';
// import pic20 from '../assets/20.jpg';
// import pic21 from '../assets/21.jpg';
// import pic22 from '../assets/22.jpg';
// import pic23 from '../assets/23.jpg';
// import pic24 from '../assets/24.jpg';
// import pic25 from '../assets/25.jpg';
// import pic26 from '../assets/26.jpg';
// import pic27 from '../assets/27.png';
import emily1 from '../assets/emily/emlily1.jpg';
import emily2 from '../assets/emily/emlily2.jpg';
import emily3 from '../assets/emily/emlily3.jpg';
import emily4 from '../assets/emily/emlily4.jpg';
import emily5 from '../assets/emily/emlily5.jpeg';
import emily6 from '../assets/emily/emlily6.jpg';
import emily7 from '../assets/emily/emlily7.jpg';
import emily8 from '../assets/emily/emlily8.JPG';
import emily9 from '../assets/emily/emlily9.jpg';
import emily10 from '../assets/emily/emlily10.jpg';
import emily11 from '../assets/emily/emlily11.JPG';
import emily12 from '../assets/emily/emlily12.jpg';
import emily13 from '../assets/emily/emlily13.jpg';
import emily14 from '../assets/emily/emlily14.JPG';
import emily15 from '../assets/emily/emlily15.JPG';
import emily16 from '../assets/emily/emlily16.jpg';

import titane1 from '../assets/titane/titane1.jpg';
import titane2 from '../assets/titane/titane2.jpg';
import titane3 from '../assets/titane/titane3.jpg';
import titane4 from '../assets/titane/titane4.jpg';
import titane5 from '../assets/titane/titane5.jpg';
import titane6 from '../assets/titane/titane6.jpg';
import titane7 from '../assets/titane/titane7.jpg';
import titane8 from '../assets/titane/titane8.jpg';


const films = [
    {
      id: 1,
      title: 'peter-von-kant',
      name: `Peter von Kant`,
      poster: pic1,
      photos: [
        titane1,
        titane2,
        titane3,
        titane4,
        titane5,
        titane6,
        titane7,
        titane8,
        ]
    },
    {
      id: 2,
      title: 'titane',
      name: `Titane`,
      poster: pic2,
      photos: [
        titane1,
        titane2,
        titane3,
        titane4,
        titane5,
        titane6,
        titane7,
        titane8,
        ]
    },
    {
        id: 3,
        title: 'irma-vep',
        name: `Irma Vep`,
        poster: pic3,
        photos: [
            titane1,
            titane2,
            titane3,
            titane4,
            titane5,
            titane6,
            titane7,
            titane8,
        ]
    },
    {
        id: 4,
        title: `emily-in-Paris`,
        name: `Emily in Paris`,
        poster: pic4,
        photos: [
            emily1,
            emily2,
            emily3,
            emily4,
            emily5,
            emily6,
            emily7,
            emily8,
            emily9,
            emily10,
            emily11,
            emily12,
            emily13,
            emily14,
            emily15,
            emily16,

        ]
    }
  ];

  
function Home() {
    const location = useLocation();
    const { title } = useParams();
    const film = films.find(f => f.title === title);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = (photo) => {
        setSelectedPhoto(photo);
        setModalIsOpen(true);
    }

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }

  return (
    <section>
        <div>
            {film ? (
            <div className=''>
                <h2 className="text-3xl text-center">Films</h2>
                <h3 className='text-3xl text-center'>{film.name}</h3>
                <div className="grid md:grid-cols-2 gap-5">
                    {film.photos.map((photo, index) => (
                        <div className="p-8">
                            <img key={index} src={photo} alt={`${film.title} - Photo ${index + 1}`} 
                                onClick={() => handleOpenModal(photo)} 
                                className='rounded-2xl w-full object-cover shadow-md cursor-pointer'/>
                        </div>
                    ))}

                </div>
                {modalIsOpen && (
                        <div className="flex">
                            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center">
                                <img src={selectedPhoto} alt={`${film.title}`}/>
                                <button onClick={handleCloseModal}
                                        className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                                    >
                                    <XMarkIcon  className='h-12'/>
                                </button>
                            </div>
                        </div>
                    )}
            </div>
            ) : (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8'>
                <div className="p-8">
                    <Link to={`/films/${films[0].title}`}>
                        <img src={films[0].poster} alt={films[0].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[1].title}`}>
                        <img src={films[1].poster} alt={films[1].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[2].title}`}>
                        <img src={films[2].poster} alt={films[2].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[3].title}`}>
                        <img src={films[3].poster} alt={films[3].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md'/>
                    </Link>
                </div>
            </div>
            )}
        </div>
    </section>
  )
}

export default Home