import React from 'react';
// import a1 from '../assets/a1.jpeg';
// import a2 from '../assets/a2.jpeg';
// import a3 from '../assets/a3.jpeg';
// import a4 from '../assets/a4.jpeg';
// import a5 from '../assets/a5.jpeg';
// import a6 from '../assets/a6.jpeg';

function Affiches() {
    // const affiches = [
    //     {
    //         id: `name-1`,
    //         img: a1,
    //     },
    //     {
    //         id: `name-2`,
    //         img: a2,
    //     },
    //     {
    //         id: `name-3`,
    //         img: a3,
    //     },
    //     {
    //         id: `name-4`,
    //         img: a4,
    //     },
    //     {
    //         id: `name-5`,
    //         img: a5,
    //     },
    //     {
    //         id: `name-6`,
    //         img: a6,
    //     },

    // ]
  return (
    <section>
        <h2 className="text-3xl text-center py-10">Affiches</h2>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
           {/* {affiches.map((item) => (
            <li key={item.img} className="p-6 mx-auto">
                <img src={item.img} alt="" className='rounded-2xl md:h-[32rem] w-full object-cover'/>
            </li> */}
           ))} 
        </ul>
    </section>
  )
}

export default Affiches