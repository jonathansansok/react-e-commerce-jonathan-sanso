import React from 'react';
import '../hojas-de-estilo/NavBar.css';
import CartWidget from './CartWidget';


export function NavBar(){
    return (
        <header className="header">
        
        <h1 className="NaturAdventure" ><img src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0" alt="logo" />Travelfy</h1>
        
        <nav className="nav">
            <CartWidget
             /> 
            <ul className="ulNav">
                <li className="liNav"><a href="App.js">Home</a></li>
                <li className="liNav"><a href="App.js">América</a></li>
                <li className="liNav"><a href="App.js">Asia/Oceania</a></li>
                <li className="liNav"><a href="App.js">Contacto</a></li>
            </ul>
        </nav>
          
      </header>
    );
}

 export default NavBar; 