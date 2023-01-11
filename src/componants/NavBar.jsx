import React from 'react';
import Logo from '../assets/logocb.png'

function NavBar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-slate-100 rounded-b-md shadow-md'>
        <img src={Logo} alt="" className='h-10 md:h-14 lg:h-20' />
        <ul className="flex space-x-3 lg:pr-6 text-lg text-slate-800 hover:text-slate-900 md:text-2xl">
            <li className="">affiches</li>
            <li className="">contact</li>
        </ul>
    </nav>
  )
}

export default NavBar