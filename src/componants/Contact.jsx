import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import imdb from '../assets/IMDB_Logo.png';


export default function Contact() {
  return (
    <section className="h-screen">
        <div className="flex flex-col justify-start items-center space-y-16 p-10">
            <h2 className="text-4xl font-extrabold tracking-wider">Contact</h2>
            {/* <p className="mt-3 text-lg leading-6">Si vous avez des questions, des commandes spéciales,</p>  
            <p className='text-lg leading-6'>contactez-moi et je me ferai un plaisir de vous répondre.</p> */}
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
                <img src={imdb} alt="" className='h-10 animate-pulse'/>
                <p className="">CV</p>
            </a>

        </div>

        {/* <form 
            action="https://formsubmit.co/your@email.com" method="POST"
            className='flex flex-col space-y-4 px-10 pb-10 md:px-20 lg:px-60'>
           <input type="text" name="nom" placeholder='votre nom et prénom' className='px-6 py-4 outline-none rounded-lg bg-slate-200 border-b border-slate-500 hover:border-slate-900' /> 
           <input type="number" placeholder='telephone ' name="phone" id="" className='px-6 py-4 outline-none rounded-lg bg-slate-200 border-b border-slate-500 hover:border-slate-900' />
           <input type="email" name="email" placeholder='email'  id="" className='px-6 py-4 outline-none rounded-lg bg-slate-200 border-b border-slate-500 hover:border-slate-900'/>
           <textarea name="message" id="" cols="30" rows="10" placeholder='message' className='px-6 py-4 outline-none rounded-lg bg-slate-200 border-b border-slate-500 hover:border-slate-900'></textarea>
           <div className="flex justify-center">
            <button type="submit" className='bg-emerald-600 px-6 py-3 text-slate-100 text-lg rounded-full w-36 ring-2 ring-teal-400 hover:bg-emerald-700'>Envoyer</button>
            </div>
        </form> */}
    </section>
  )
}
