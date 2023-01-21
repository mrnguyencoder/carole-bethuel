import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import imdb from '../assets/IMDB_Logo.png';


export default function Contact() {
  return (
    <section className="h-screen">
        <div className="flex flex-col justify-start items-center space-y-16 p-10">
            <h2 className="text-4xl font-extrabold tracking-wider">Contact</h2>
            <a href="tel:33782885224"
                className="flex space-x-3 text-xl md:text-2xl lg:text-4xl ">
                <PhoneIcon className="md: h-8 flex-shrink-0 text-green-500" aria-hidden="true" />
                <p className="">06 14 54 68 24</p>
            </a>
            <a href="mailto:carolebethuel@wanadoo.fr"
                className="flex space-x-3 text-xl md:text-2xl lg:text-4xl">
                <EnvelopeIcon className="h-8 flex-shrink-0 text-red-500" aria-hidden="true" />
                <p className="">carolebethuel@wanadoo.fr</p>
            </a>
            <a href="https://www.imdb.com/name/nm1615304/"
                target="_blank"
                className="flex space-x-3 text-xl md:text-2xl lg:text-4xl">
                <img src={imdb} alt="" className='h-10'/>
                <p className="">CV</p>
            </a>
        </div>
    </section>
  )
}
