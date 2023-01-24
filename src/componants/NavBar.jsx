import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logocb.png';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

    return (
    <nav className='flex justify-between items-center p-4 pt-6 rounded-b-md'>
        <Link to="/" className="hover:animate-pulse">
            <img src={Logo} alt="" className='h-10 md:h-14 lg:h-16' />
        </Link>
        
        <ul className="hidden md:flex space-x-3 lg:pr-6 text-lg lg:text-xl text-slate-900 hover:text-slate-700">
            <Link to="/films" className="px-4 py-2 rounded-3xl text-gray-900 hover:text-gray-700">films</Link>
            <Link to="/affiches" className="px-4 py-2 rounded-3xl text-gray-900 hover:text-gray-700">affiches</Link>
            <Link to="/contact" className="px-4 py-2 rounded-3xl text-gray-900 hover:text-gray-700">contact</Link>
        </ul>

        {/* Hamberger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <Bars3BottomRightIcon className='text-gray-900 h-10' /> 
                  : <XMarkIcon className='text-slate-50 h-10'/>}
        </div>
        {/* Menu Mobile */}
        <ul className={
            !nav 
            ? 'hidden'
            : "absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center text-slate-50 space-y-9 text-3xl"
        }>
            <li className="">
                <Link to="/" onClick={handleClick} smooth={true} duration={500}>
                    Accueil
                </Link>
            </li>
            <li className="">
                <Link to="/films" onClick={handleClick} smooth={true} duration={500}>
                    Films
                </Link>
            </li>
            <li className="">
                <Link to="/affiches" onClick={handleClick} smooth={true} duration={500}>
                    Affiches
                </Link>
            </li>
            <li className="">
                <Link to="/contact" onClick={handleClick} smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            
        </ul>

    </nav>
  )
}

export default NavBar