import React from 'react';
import '../hojas-de-estilo/NavBar.css';

export function NavBar(){
    return (
        <header className="header">
        
        <h1 className="NaturAdventure" ><img src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0" alt="logo" /> AdNat</h1>
        
        <nav className="nav">
            <div className="liNav shoppingTodo">
                 <img id="shoppingLogo" href="index.html" target="_blank" className="shoppingCart shoppingLogok" src="https://icongr.am/fontawesome/shopping-cart.svg?size=40&color=7809e0" alt="shopping cart" />
                <div className="contadorUnidades" href="index.html" id="contadorId">00</div>
            </div>
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