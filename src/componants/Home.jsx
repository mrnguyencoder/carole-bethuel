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

function Home() {
    const photos = [
        {
            name: ``,
            img: pic3,
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
            img: pic2,
        },
        {
            name: ``,
            img: pic1,
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


    ]
  return (
    <section>
        <div className="">
            <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {photos.map((item) => (
                    <li key={item.img} className="p-8">
                        <img src={item.img} alt="" className='rounded-2xl md:h-[32rem] w-full object-cover'/>
                        <Link to="/" className='text-center'></Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Home