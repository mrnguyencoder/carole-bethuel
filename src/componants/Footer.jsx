import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='text-center md:flex justify-between p-4 bg-slate-900 text-slate-100 md:text-lg md:p-6 rounded-t-md'>
        <Link to="/mentionslegales" className=' hover:border-b-2'>Mentions Légales</Link>
        <p className="">
            Copyright © {new Date().getFullYear()} carole bethuel. Tous les droits sont réservés. 
        </p> 
    </footer>
  )
}

export default Footer