import React from 'react';
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
import pic27 from '../assets/27.png';

function Home() {
    const photos = [
        {
            film: `peter-vonkant`,
            img: pic1,
        },
        {
            film: `titane`,
            img: pic2,
        },
        {
            film: `irmavep`,
            img: pic3,
        },
        {
            film: ``,
            img: pic4,
        },
        {
            film: ``,
            img: pic5,
        },
        {
            film: ``,
            img: pic6,
        },
        {
            film: ``,
            img: pic7,
        },
        {
            film: ``,
            img: pic8,
        },
        {
            film: ``,
            img: pic9,
        },
        {
            film: ``,
            img: pic10,
        },
        {
            film: ``,
            img: pic11,
        },
        {
            film: ``,
            img: pic12,
        },
        {
            film: ``,
            img: pic13,
        },
        {
            film: ``,
            img: pic14,
        },
        {
            film: ``,
            img: pic15,
        },
        {
            film: ``,
            img: pic16,
        },
        {
            film: ``,
            img: pic17,
        },
        {
            film: ``,
            img: pic18,
        },
        {
            film: ``,
            img: pic19,
        },
        {
            film: ``,
            img: pic20,
        },
        {
            film: ``,
            img: pic21,
        },
        {
            film: ``,
            img: pic22,
        },
        {
            film: ``,
            img: pic23,
        },
        {
            film: ``,
            img: pic24,
        },
        {
            film: ``,
            img: pic25,
        },
        {
            film: ``,
            img: pic26,
        },
        {
            film: ``,
            img: pic27,
        },

    ]
  return (
    <section>
        <div className="">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {photos.map((item) => (
                    <li key={item.film} className="p-8">
                        <Link to={`/films/${item.film}`} className='text-center'>
                            <img src={item.img} alt={item.name} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-md'/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Home