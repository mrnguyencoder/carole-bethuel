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

// 18
import lesadieux1 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_1.jpg';
import lesadieux2 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_2.jpg';
import lesadieux3 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_3.jpg';
import lesadieux4 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_4.jpg';
import lesadieux5 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_5.jpg';
import lesadieux6 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_6.jpg';
import lesadieux7 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_7.jpg';
import lesadieux8 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_8.jpg';
import lesadieux9 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_9.jpg';
import lesadieux10 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_10.jpg';
import lesadieux11 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_11.jpg';
import lesadieux12 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_12.jpg';
import lesadieux13 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_13.jpg';
import lesadieux14 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_17.jpg';
import lesadieux15 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_21.jpg';
import lesadieux16 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_23.jpg';
import lesadieux17 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_25.jpg';
import lesadieux18 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_26.jpg';
import lesadieux19 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_28.jpg';
import lesadieux21 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_31.jpg';
import lesadieux23 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_33.jpg';
import lesadieux24 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_34.jpg';
import lesadieux25 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_35.jpg';
import lesadieux26 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_37.jpg';
import lesadieux27 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_38.jpg';
import lesadieux28 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_39.jpg';
import lesadieux29 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_41.jpg';
import lesadieux30 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_42.jpg';
// 3
import iv1 from '../assets/Irma Vep/IV1.jpg';
import iv2 from '../assets/Irma Vep/IV2.jpg';
import iv3 from '../assets/Irma Vep/IV3.jpg';
import iv4 from '../assets/Irma Vep/IV4.jpg';
import iv5 from '../assets/Irma Vep/IV5.jpg';
import iv6 from '../assets/Irma Vep/IV6.jpg';
import iv7 from '../assets/Irma Vep/IV7.jpg';
import iv8 from '../assets/Irma Vep/IV8.jpg';
import iv9 from '../assets/Irma Vep/IV9.jpg';
import iv10 from '../assets/Irma Vep/IV10.jpg';
import iv11 from '../assets/Irma Vep/IV11.jpg';
import iv12 from '../assets/Irma Vep/IV12.jpg';
import iv13 from '../assets/Irma Vep/IV13.jpg';
import iv14 from '../assets/Irma Vep/IV14.jpg';
import iv15 from '../assets/Irma Vep/IV15.jpg';
import iv16 from '../assets/Irma Vep/IV16.jpg';
import iv17 from '../assets/Irma Vep/IV17.jpg';
import iv18 from '../assets/Irma Vep/IV18.jpg';
import iv19 from '../assets/Irma Vep/IV19.jpg';
import iv20 from '../assets/Irma Vep/IV20.jpg';

// 7
import ps1 from '../assets/Personal Shopper/personal-shopper002.jpg';
import ps2 from '../assets/Personal Shopper/personal-shopper003.jpg';
import ps3 from '../assets/Personal Shopper/personal-shopper004.jpg';
import ps4 from '../assets/Personal Shopper/personal-shopper005.jpg';
import ps5 from '../assets/Personal Shopper/personal-shopper009.jpg';
import ps6 from '../assets/Personal Shopper/personal-shopper012.jpg';
import ps7 from '../assets/Personal Shopper/personal-shopper015.jpg';
import ps8 from '../assets/Personal Shopper/personal-shopper019.jpg';
import ps9 from '../assets/Personal Shopper/personal-shopper021.jpg';
import ps10 from '../assets/Personal Shopper/personal-shopper023.jpg';
import ps11 from '../assets/Personal Shopper/personal-shopper024.jpg';
import ps12 from '../assets/Personal Shopper/personal-shopper025.jpg';
import ps13 from '../assets/Personal Shopper/personal-shopper026.jpg';
import ps15 from '../assets/Personal Shopper/personal-shopper028.jpg';
import ps16 from '../assets/Personal Shopper/personal-shopper031.jpg';
import ps17 from '../assets/Personal Shopper/personal-shopper035.jpg';
import ps18 from '../assets/Personal Shopper/personal-shopper037.jpg';
import ps19 from '../assets/Personal Shopper/personal-shopper038.jpg';
import ps20 from '../assets/Personal Shopper/personal-shopper039_1.jpg';
import ps21 from '../assets/Personal Shopper/personal-shopper040_1.jpg';
import ps22 from '../assets/Personal Shopper/personal-shopper041_1.jpg';
import ps23 from '../assets/Personal Shopper/personal-shopper042_1.jpg';
import ps24 from '../assets/Personal Shopper/personal-shopper047_1.jpg';
import ps25 from '../assets/Personal Shopper/personal-shopper049_1.jpg';
import ps26 from '../assets/Personal Shopper/personal-shopper051_1.jpg';
import ps28 from '../assets/Personal Shopper/personal-shopper057_1.jpg';
import ps29 from '../assets/Personal Shopper/personal-shopper058_1.jpg';
// 8
import sm1 from '../assets/Sils-Maria/rz100Sils-Maria-Olivier-Assayas.jpg';
import sm2 from '../assets/Sils-Maria/rz101Sils-Maria-Olivier-Assayas.jpg';
import sm3 from '../assets/Sils-Maria/rz102Sils-Maria-Olivier-Assayas.jpg';
import sm4 from '../assets/Sils-Maria/rz103Sils-Maria-Olivier-Assayas.jpg';
import sm5 from '../assets/Sils-Maria/rz104Sils-Maria-Olivier-Assayas.jpg';
import sm6 from '../assets/Sils-Maria/rz105Sils-Maria-Olivier-Assayas.jpg';
import sm7 from '../assets/Sils-Maria/rz106Sils-Maria-Olivier-Assayas.jpg';
import sm8 from '../assets/Sils-Maria/rz108Sils-Maria-Olivier-Assayas.jpg';
import sm9 from '../assets/Sils-Maria/rz110Sils-Maria-Olivier-Assayas.jpg';
import sm10 from '../assets/Sils-Maria/rz111Sils-Maria-Olivier-Assayas.jpg';
import sm11 from '../assets/Sils-Maria/rz112Sils-Maria-Olivier-Assayas.jpg';
import sm12 from '../assets/Sils-Maria/rz113Sils-Maria-Olivier-Assayas.jpg';
import sm13 from '../assets/Sils-Maria/rz118Sils-Maria-Olivier-Assayas.jpg';
import sm14 from '../assets/Sils-Maria/rz120Sils-Maria-Olivier-Assayas.jpg';
import sm15 from '../assets/Sils-Maria/rz122Sils-Maria-Olivier-Assayas.jpg';
import sm16 from '../assets/Sils-Maria/rz125Sils-Maria-Olivier-Assayas.jpg';
import sm17 from '../assets/Sils-Maria/rz130Sils-Maria-Olivier-Assayas.jpg';
import sm18 from '../assets/Sils-Maria/rz133Sils-Maria-Olivier-Assayas.jpg';
// 10

import proxi1 from '../assets/Proxima/pro1.jpg';
import proxi2 from '../assets/Proxima/pro2.jpg';
import proxi3 from '../assets/Proxima/pro3.jpg';
import proxi4 from '../assets/Proxima/pro4.jpg';
import proxi5 from '../assets/Proxima/pro5.jpg';
import proxi6 from '../assets/Proxima/pro6.jpg';
import proxi7 from '../assets/Proxima/pro7.jpg';
import proxi8 from '../assets/Proxima/pro8.jpg';
import proxi9 from '../assets/Proxima/pro9.jpg';
import proxi10 from '../assets/Proxima/pro10.jpg';
import proxi11 from '../assets/Proxima/pro11.jpg';
import proxi12 from '../assets/Proxima/pro12.jpg';
import proxi13 from '../assets/Proxima/pro13.jpg';
import proxi14 from '../assets/Proxima/pro14.jpg';
import proxi15 from '../assets/Proxima/pro15.jpg';
import proxi16 from '../assets/Proxima/pro16.jpg';
import proxi17 from '../assets/Proxima/pro17.jpg';
import proxi18 from '../assets/Proxima/pro18.jpg';
import proxi19 from '../assets/Proxima/pro19.jpg';
import proxi20 from '../assets/Proxima/pro20.jpg';
import proxi21 from '../assets/Proxima/pro21.jpg';
import proxi22 from '../assets/Proxima/pro22.jpg';
import proxi23 from '../assets/Proxima/pro23.jpg';
import proxi24 from '../assets/Proxima/pro24.jpg';
import proxi25 from '../assets/Proxima/pro25.jpg';
import proxi26 from '../assets/Proxima/pro26.jpg';
import proxi27 from '../assets/Proxima/pro27 copie_1.jpg';
import proxi28 from '../assets/Proxima/pro28 copie_1.jpg';
import proxi29 from '../assets/Proxima/pro29 copie_1.jpg';
import proxi30 from '../assets/Proxima/pro30 copie_1.jpg';
import proxi31 from '../assets/Proxima/pro31 copie_1.jpg';
import proxi32 from '../assets/Proxima/pro32 copie_1.jpg';




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
           iv1,
           iv2,
           iv3,
           iv4,
           iv5,
           iv6,
           iv7,
           iv8,
           iv9,
           iv10,
            iv11,
            iv12,
            iv13,
            iv14,
            iv15,
            iv16,
            iv17,
            iv18,
            iv19,
            iv20,
            
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
            ps1,
            ps2,
            ps3,
            ps4,
            ps5,
            ps6,
            ps7,
            ps8,
            ps9,
            ps10,
            ps11,
            ps12,
            ps13,
            ps15,
            ps16,
            ps17,
            ps18,
            ps19,
            ps20,
            ps21,
            ps22,
            ps23,
            ps24,
            ps25,
            ps26,
            ps28,
            ps29,
    
        ]
    },
    {
        id: 8,
        title: `Sils-Maria`,
        name: `Sils Maria`,
        poster: pic8,
        photos: [
            sm1,
            sm2,
            sm3,
            sm4,
            sm5,
            sm6,
            sm7,
            sm8,
            sm9,
            sm10,
            sm11,
            sm12,
            sm13,
            sm14,
            sm15,
            sm16,
            sm17,
            sm18,
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
            proxi1,
            proxi2,
            proxi3,
            proxi4,
            proxi5,
            proxi6,
            proxi7,
            proxi8,
            proxi9,
            proxi10,
            proxi11,
            proxi12,
            proxi13,
            proxi14,
            proxi15,
            proxi16,
            proxi17,
            proxi18,
            proxi19,
            proxi20,
            proxi21,
            proxi22,
            proxi23,
            proxi24,
            proxi25,
            proxi26,
            proxi27,
            proxi28,
            proxi29,
            proxi30,
            proxi31,
            proxi32,
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
        title: 'Les-Adieux-à-la-reine',
        name: `Les Adieux à la reine`,
        poster: pic18,
        photos: [
            lesadieux1
,            lesadieux2
,            lesadieux3
,            lesadieux4
,            lesadieux5
,            lesadieux6
,            lesadieux7
,            lesadieux8
,            lesadieux9
,            lesadieux10,
            lesadieux11,
            lesadieux12,
            lesadieux13,
            lesadieux14,
            lesadieux15,
            lesadieux16,
            lesadieux17,
            lesadieux18,
            lesadieux19,
            lesadieux21,
            lesadieux23,
            lesadieux24,
            lesadieux25,
            lesadieux26,
            lesadieux27,
            lesadieux28,
            lesadieux29,
            lesadieux30,
       
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
                        <div className="p-4">
                            <img key={index} src={photo} alt={`${film.title} - ${index + 1}`} 
                                onClick={() => handleOpenModal(photo)} 
                                className='w-full object-cover shadow-md cursor-pointer md:h-[23rem] lg:h-[30rem]'/>
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
                    <div className="p-6">
                        <Link to={`/films/${film.title}`}>
                        <img src={film.poster} alt={film.title} className='rounded-2xl md:h-[30rem] lg:h-[40rem] w-full object-cover shadow-md hover:scale-105'/> 
                        </Link>
                    </div>
                ))}
            </div>
            )}
        </div>
        <button onClick={handleGoToTop} className="fixed right-1 bottom-0 text-green-600"><ArrowUpCircleIcon className='h-10' /> </button>
    </section>
  )
}

export default Home