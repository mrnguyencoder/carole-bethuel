import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logocb.png'

function NavBar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-slate-100 rounded-b-md shadow-md'>
        <Link to="/" className="">
            <img src={Logo} alt="" className='h-10 md:h-14 lg:h-20' />
        </Link>
        
        <ul className="flex space-x-3 lg:pr-6 text-lg text-slate-900 hover:text-slate-700 md:text-2xl">
            <Link to="/affiches" className="border-2 px-4 py-2 rounded-3xl bg-gray-900 text-slate-50 hover:bg-gray-700 hover:text-white">affiches</Link>
            <Link to="/contact" className="border-2 px-4 py-2 rounded-3xl bg-gray-900 text-slate-50 hover:bg-gray-700 hover:text-white">contact</Link>
        </ul>
    </nav>
  )
}

export default NavBar