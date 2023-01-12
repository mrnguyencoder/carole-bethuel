import React from 'react';
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='h-screen flex flex-col justify-center items-center space-y-6'>
        <h2 className="text-red-500 text-6xl">EURREUR 404</h2>
        <p className="text-3xl">Oups!!! Petit problème...</p>
        <p className="text-2xl">Ce lien semble brisé</p>
        <Link to="/" className='border-2 px-6 py-4 rounded-full animate-bounce ring-2'> Page d'accueil</Link>
    </section>
  )
}

export default NotFound