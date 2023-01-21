import React, { useState }from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowUpCircleIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

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
import pic13 from '../assets/13.jpg';
import pic14 from '../assets/14.jpg';
import pic15 from '../assets/15.jpg';
import pic16 from '../assets/16.jpg';
import pic17 from '../assets/17.jpg';
import pic18 from '../assets/18.jpg';
import pic19 from '../assets/19.jpg';
import pic20 from '../assets/20.jpg';
import pic21 from '../assets/21.jpg';
import pic22 from '../assets/22.jpg';
import pic23 from '../assets/23.jpg';
import pic24 from '../assets/24.jpg';
import pic25 from '../assets/25.jpg';
import pic26 from '../assets/26.jpg';
import pic27 from '../assets/27.jpg';



import titane1 from '../assets/titane/TIT1.jpg';
import titane2 from '../assets/titane/TIT2.jpg';
import titane3 from '../assets/titane/TIT3.jpg';
import titane4 from '../assets/titane/TIT4.jpg';
import titane5 from '../assets/titane/TIT5.jpg';
import titane6 from '../assets/titane/TIT6.jpg';
import titane7 from '../assets/titane/TIT7.jpg';
import titane8 from '../assets/titane/TIT8.jpg';





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
        id: 5,
        title: `Tous-s'est-bien-passé`,
        name: `Tous s'est bien passé`,
        poster: pic5,
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
        id: 6,
        title: 'Un-beau-matin',
        name: `Un beau matin`,
        poster: pic6,
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
        id: 7,
        title: 'Personal-Shopper',
        name: `Personal Shopper`,
        poster: pic7,
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
        id: 8,
        title: 'Sils-Maria ',
        name: `Sils Maria`,
        poster: pic8,
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
        id: 9,
        title: 'Hors-Normes',
        name: `Hors Normes`,
        poster: pic9,
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
        id: 10,
        title: 'Proxima',
        name: `Proxima`,
        poster: pic10,
        photos: [
            titane1,
            titane2,
            titane3,
            titane4,
            titane5,
            titane8,
        ]
   },
    {
        id: 11,
        title: 'Journal',
        name: `Journal`,
        poster: pic11,
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
        id: 12,
        title: '',
        name: ``,
        poster: pic12,
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
        id: 13,
        title: '',
        name: ``,
        poster: pic13,
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
        id: 14,
        title: '',
        name: ``,
        poster: pic14,
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
        id: 15,
        title: '',
        name: ``,
        poster: pic15,
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
        id: 16,
        title: '',
        name: ``,
        poster: pic16,
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
        id: 17,
        title: '',
        name: ``,
        poster: pic17,
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
        id: 18,
        title: '',
        name: ``,
        poster: pic18,
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
        id: 19,
        title: '',
        name: ``,
        poster: pic19,
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
        id: 20,
        title: '',
        name: ``,
        poster: pic20,
        photos: [
              titane1,
        ]
    },
    {
        id: 21,
        title: '',
        name: ``,
        poster: pic21,
        photos: [
              titane2,
        ]
    },
    {
        id: 22,
        title: '',
        name: ``,
        poster: pic22,
        photos: [
              titane3,
        ]
    },
    {
        id: 23,
        title: '',
        name: ``,
        poster: pic23,
        photos: [
              titane4,
        ]
    },
    {
        id: 24,
        title: '',
        name: ``,
        poster: pic24,
        photos: [
              titane5,
        ]
    },
    {
        id: 25,
        title: '',
        name: ``,
        poster: pic25,
        photos: [
              titane6,
        ]
    },
    {
        id: 26,
        title: '',
        name: ``,
        poster: pic26,
        photos: [
              titane7,
        ]
    },
    {
        id: 27,
        title: '',
        name: ``,
        poster: pic27,
        photos: [
              titane8,
        ]
    },
  ];

  
function Home() {
    const location = useLocation();
    const { title } = useParams();
    const film = films.find(f => f.title === title);
    // const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = (photo) => {
        // setSelectedPhoto(photo);
        setModalIsOpen(true);
    }

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }
    // allow users to navigate between the full size images
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % film.photos.length);
    }

    const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + film.photos.length) % film.photos.length);
    }

    const handleGoToTop = () => {
        window.scrollTo(0, 0);
      }
    
  return (
    <section>
        <div>
            {film ? (
            <div className=''>
                <div className="grid md:grid-cols-2 gap-5">
                    {film.photos.map((photo, index) => (
                        <div className="p-8">
                            <img key={index} src={photo} alt={`${film.title} - ${index + 1}`} 
                                onClick={() => handleOpenModal(photo)} 
                                className='w-full object-cover shadow-md cursor-pointer h-[20rem] md:h-[30rem]'/>
                        </div>
                    ))}

                </div>
                {modalIsOpen && (
                        <div className="flex">
                            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center">
                                <img src={film.photos[currentIndex]} alt={`${film.title}`}/>
                                <button onClick={handlePrev} className="absolute top-[50%] left-0"><ChevronDoubleLeftIcon className='h-16 text-white' /></button>
                                <button onClick={handleNext} className="absolute top-[50%] right-0 text-xl text-slate-50"><ChevronDoubleRightIcon className='h-16 text-white'/></button>
                                <button onClick={handleCloseModal}
                                        className="absolute top-0 left-0 p-4 text-white rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
                                    >
                                    <XMarkIcon  className='h-12'/>
                                </button>
                            </div>
                        </div>
                    )}
            </div>
            ) : (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8'>
                {films.map((film, index) => (
                    <div className="p-8">
                        <Link to={`/films/${film.title}`}>
                        <img src={film.poster} alt={film.title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/> 
                        </Link>
                    </div>
                ))}
                
                {/* <div className="p-8">
                    <Link to={`/films/${films[0].title}`}>
                        <img src={films[0].poster} alt={films[0].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[1].title}`}>
                        <img src={films[1].poster} alt={films[1].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[2].title}`}>
                        <img src={films[2].poster} alt={films[2].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[3].title}`}>
                        <img src={films[3].poster} alt={films[3].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[4].title}`}>
                        <img src={films[4].poster} alt={films[4].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[5].title}`}>
                        <img src={films[5].poster} alt={films[5].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[6].title}`}>
                        <img src={films[6].poster} alt={films[6].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[7].title}`}>
                        <img src={films[7].poster} alt={films[7].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[8].title}`}>
                        <img src={films[8].poster} alt={films[8].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[9].title}`}>
                        <img src={films[9].poster} alt={films[9].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[10].title}`}>
                        <img src={films[10].poster} alt={films[10].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[11].title}`}>
                        <img src={films[11].poster} alt={films[11].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[12].title}`}>
                        <img src={films[12].poster} alt={films[12].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[13].title}`}>
                        <img src={films[13].poster} alt={films[13].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[14].title}`}>
                        <img src={films[14].poster} alt={films[14].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[15].title}`}>
                        <img src={films[15].poster} alt={films[15].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[16].title}`}>
                        <img src={films[16].poster} alt={films[16].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[17].title}`}>
                        <img src={films[17].poster} alt={films[17].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[18].title}`}>
                        <img src={films[18].poster} alt={films[18].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[19].title}`}>
                        <img src={films[19].poster} alt={films[19].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[20].title}`}>
                        <img src={films[20].poster} alt={films[20].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[21].title}`}>
                        <img src={films[21].poster} alt={films[21].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[22].title}`}>
                        <img src={films[22].poster} alt={films[22].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[23].title}`}>
                        <img src={films[23].poster} alt={films[23].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[24].title}`}>
                        <img src={films[24].poster} alt={films[24].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[25].title}`}>
                        <img src={films[25].poster} alt={films[25].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div>
                <div className="p-8">
                    <Link to={`/films/${films[26].title}`}>
                        <img src={films[26].poster} alt={films[26].title} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md hover:scale-105'/>
                    </Link>
                </div> */}
            </div>
            )}
        </div>
        <button onClick={handleGoToTop} className="fixed right-1 bottom-0 text-green-600"><ArrowUpCircleIcon className='h-10' /> </button>
    </section>
  )
}

export default Home