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
            name: ``,
            img: pic1,
        },
        {
            name: ``,
            img: pic2,
        },
        {
            name: ``,
            img: pic3,
        },
        {
            name: ``,
            img: pic4,
        },
        {
            name: ``,
            img: pic5,
        },
        {
            name: ``,
            img: pic6,
        },
        {
            name: ``,
            img: pic7,
        },
        {
            name: ``,
            img: pic8,
        },
        {
            name: ``,
            img: pic9,
        },
        {
            name: ``,
            img: pic10,
        },
        {
            name: ``,
            img: pic11,
        },
        {
            name: ``,
            img: pic12,
        },
        {
            name: ``,
            img: pic13,
        },
        {
            name: ``,
            img: pic14,
        },
        {
            name: ``,
            img: pic15,
        },
        {
            name: ``,
            img: pic16,
        },
        {
            name: ``,
            img: pic17,
        },
        {
            name: ``,
            img: pic18,
        },
        {
            name: ``,
            img: pic19,
        },
        {
            name: ``,
            img: pic20,
        },
        {
            name: ``,
            img: pic21,
        },
        {
            name: ``,
            img: pic22,
        },
        {
            name: ``,
            img: pic23,
        },
        {
            name: ``,
            img: pic24,
        },
        {
            name: ``,
            img: pic25,
        },
        {
            name: ``,
            img: pic26,
        },
        {
            name: ``,
            img: pic27,
        },

    ]
  return (
    <section>
        <div className="">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {photos.map((item) => (
                    <li key={item.img} className="p-8">
                        <img src={item.img} alt={item.name} className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover'/>
                        <Link to="" className='text-center'></Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Home