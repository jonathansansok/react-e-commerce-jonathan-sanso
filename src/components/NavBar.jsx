/* import React from 'react'; */
import '../hojas-de-estilo/NavBar.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <header className="header">
        
        <h1 className="NaturAdventure" ><img src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0" alt="logo" />Travelfy</h1>
        
        <nav className="nav">
            <CartWidget
             /> 
            <ul className="ulNav">
                <li className="liNormal">
                    <NavLink to="/" className="liNav">Home </NavLink>
                </li>
                <li className="liNormal">
                <NavLink to="/america" className="liNav">América</NavLink>
                </li>
                <li className="liNormal">
                <NavLink to="/asiaoceania" className="liNav">Asia/Oceania</NavLink>
                </li>
                <li className="liNormal">
                <NavLink to="/contacto" className="liNav">Contacto</NavLink>
                </li>
            </ul>
        </nav>
          
      </header>
    );
}

 export default NavBar; 