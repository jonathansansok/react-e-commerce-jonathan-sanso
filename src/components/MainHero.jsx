import React from 'react';
import '../hojas-de-estilo/MainHero.css';
import { NavLink } from 'react-router-dom';
function MainHero(){
    return (
            <article className="hero">
            <h2>The adventure is waiting for you</h2>
            <NavLink to="/"  className='hero-button'> Join us</NavLink>
          </article>
        );
    }
            
export default MainHero; 