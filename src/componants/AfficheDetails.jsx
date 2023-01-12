import React from 'react'
import { useParams } from 'react-router-dom';
import ad1 from '../assets/ad1.jpeg';
import ad2 from '../assets/ad2.jpeg';
import ad3 from '../assets/ad3.jpeg';

function AfficheDetails() {

    const {id} = useParams()

const affichedetails = [
    {
        id: `nameaffiche1`,
        imgaffiche: ad1,
    },
    {
        id: `nameaffiche2`,
        imgaffiche: ad2,
    },
    {
        id: `nameaffiche3`,
        imgaffiche: ad3,
    },
]

    return (
    <section className="">
        <ul className="">
           {affichedetails.map((item) => (
            <li key={item.id} className="">
                <h3 className="">Affiche: {id}</h3>
                <img src={item.imgaffiche} alt="" />
            </li> 
            
           ))}
        </ul>      
    </section>
    
  )
}

export default AfficheDetails