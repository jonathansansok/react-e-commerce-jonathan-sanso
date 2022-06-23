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
                    <NavLink className="liNav" to={"/"}>Home </NavLink>
                </li>
                <li className="liNormal">
                <NavLink className="liNav"to={"America"}>América</NavLink>
                </li>
                <li className="liNormal">
                <NavLink className="liNav"to={"AsiaOceania"}>Asia/Oceania</NavLink>
                </li>
                <li className="liNormal">
                <NavLink className="liNav"to={"Contacto"}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
          
      </header>
    );
}

 export default NavBar; 