//imports
import React from 'react';
import '../hojas-de-estilo/MainHero.css';
import { Link } from 'react-router-dom';

function MainHero(){
  return (
    <article className="hero">
      <h2 className="tituloCustom">The adventure is waiting for you</h2>
      <Link to="/"  className='hero-button'> Join us</Link>
    </article>
  );
}

export default MainHero; 