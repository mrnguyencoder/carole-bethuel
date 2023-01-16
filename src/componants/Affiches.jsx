import React from 'react';
import a1 from '../assets/A1.jpg';
import a2 from '../assets/A2.jpg';
import a3 from '../assets/A3.png';
import a4 from '../assets/A4.jpg';
import a5 from '../assets/A5.jpg';
import a6 from '../assets/A6.jpg';
import a7 from '../assets/A7.jpg';
import a8 from '../assets/A8.jpg';
import a9 from '../assets/A9.jpg';
import a10 from '../assets/A10.jpg';
import a11 from '../assets/A11.jpg';
import a12 from '../assets/A12.jpg';
import a13 from '../assets/A13.jpg';
import a14 from '../assets/A14.jpg';
import a15 from '../assets/A15.jpg';
import a16 from '../assets/A16.png';
import a17 from '../assets/A17.jpg';
import a18 from '../assets/A18.jpg';
import a19 from '../assets/A19.jpg';
import a20 from '../assets/A20.jpg';
import a21 from '../assets/A21.jpg';
import a22 from '../assets/A22.jpg';
import a23 from '../assets/A23.jpg';
import a24 from '../assets/A24.jpg';
import a25 from '../assets/A25.jpg';
import a26 from '../assets/A26.jpg';
import a27 from '../assets/A27.jpg';
import a28 from '../assets/A28.jpg';
import a29 from '../assets/A29.jpg';
import a30 from '../assets/A30.jpg';
import a31 from '../assets/A31.jpg';
import a32 from '../assets/A32.jpg';
import a33 from '../assets/A33.jpg';
import a34 from '../assets/A34.jpg';
import a35 from '../assets/A35.jpg';
import a36 from '../assets/A36.jpg';
import a37 from '../assets/A37.jpg';
import a38 from '../assets/A38.jpg';
import a39 from '../assets/A39.jpg';
import a40 from '../assets/A40.jpg';
import a41 from '../assets/A41.jpg';
import a42 from '../assets/A42.jpg';
import a43 from '../assets/A43.jpg';
import a44 from '../assets/A44.jpg';
import a45 from '../assets/A45.jpg';


function Affiches() {
    const affiches = [
        {
            id: `name-1`,
            img: a1,
        },
        {
            id: `name-2`,
            img: a2,
        },
        {
            id: `name-3`,
            img: a3,
        },
        {
            id: `name-4`,
            img: a4,
        },
        {
            id: `name-5`,
            img: a5,
        },
        {
            id: `name-6`,
            img: a6,
        },
        {
            id: `name-6`,
            img: a7,
        },
        {
            id: `name-6`,
            img: a8,
        },
        {
            id: `name-6`,
            img: a9,
        },
        {
            id: `name-6`,
            img: a10,
        },
        {
            id: `name-1`,
            img: a11,
        },
        {
            id: `name-2`,
            img: a15,
        },
        {
            id: `name-3`,
            img: a13,
        },
        {
            id: `name-4`,
            img: a14,
        },
        {
            id: `name-5`,
            img: a12,
        },
        {
            id: `name-6`,
            img: a16,
        },
        {
            id: `name-6`,
            img: a17,
        },
        {
            id: `name-6`,
            img: a18,
        },
        {
            id: `name-6`,
            img: a19,
        },
        {
            id: `name-6`,
            img: a20,
        },
        {
            id: `name-1`,
            img: a21,
        },
        {
            id: `name-2`,
            img: a22,
        },
        {
            id: `name-3`,
            img: a23,
        },
        {
            id: `name-4`,
            img: a24,
        },
        {
            id: `name-5`,
            img: a27,
        },
        {
            id: `name-6`,
            img: a29,
        },
        {
            id: `name-6`,
            img: a28,
        },
        // {
        //     id: `name-6`,
        //     img: a25,
        // },
        {
            id: `name-6`,
            img: a26,
        },
        {
            id: `name-6`,
            img: a30,
        },
        {
            id: `name-1`,
            img: a37,
        },
        {
            id: `name-2`,
            img: a32,
        },
        {
            id: `name-3`,
            img: a33,
        },
        {
            id: `name-4`,
            img: a31,
        },
        {
            id: `name-5`,
            img: a35,
        },
        {
            id: `name-6`,
            img: a36,
        },
        {
            id: `name-6`,
            img: a34,
        },
        {
            id: `name-6`,
            img: a38,
        },
        {
            id: `name-6`,
            img: a39,
        },
        {
            id: `name-6`,
            img: a43,
        },
        {
            id: `name-1`,
            img: a41,
        },
        {
            id: `name-2`,
            img: a42,
        },
        {
            id: `name-3`,
            img: a40,
        },
        {
            id: `name-4`,
            img: a44,
        },
        {
            id: `name-5`,
            img: a45,
        },

    ]
  return (
    <section>
        <h2 className="text-3xl text-center py-10">Affiches</h2>

        <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {affiches.map((item) => (
            <li key={item.img} className="p-8">
                <img src={item.img} alt="" className='rounded-2xl md:h-[32rem] lg:h-[42rem] w-full object-cover shadow-lg'/>
            </li>
           ))} 
        </ul>
    </section>
  )
}

export default Affiches