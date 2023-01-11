import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-between p-4'>
        <p className="">
          ©{new Date().getFullYear()} carole bethuel 
        </p> 
        <p className="">Mentions Légales</p>
    </footer>
  )
}

export default Footer