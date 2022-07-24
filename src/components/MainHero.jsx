//imports
import React from 'react';
import '../hojas-de-estilo/MainHero.css';
import { Link } from 'react-router-dom';
//este es el hero reutilizable para otras paginas futuras
function MainHero(){
  return (
    <article className="hero">
      <h2 className="tituloCustom">The adventure is waiting for you</h2>
      <Link to="/contacto"  className='hero-button'> Work with us</Link>
    </article>
  );
}

export default MainHero; 