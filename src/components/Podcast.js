import React from 'react';
import Header from './Header';
import Fotter from './Fotter';
import FooterLogo from '../image/Footer.png';
import {Link} from "react-router-dom";
import "./Podcast.css";
const Podcast = () => {
  return (
    <>
    
    <Header/>
  
    <div className='Image' >
    <Link to="/" className="logo">
    <img src={FooterLogo} alt="Logo"/>
  </Link>
    <h1 className='Comment'>  Coming Soon My Dear User 😉 </h1>
    </div>
    <Fotter/>
    </>

  )
}

export default Podcast;



