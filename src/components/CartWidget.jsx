import React from 'react';
import '../hojas-de-estilo/CartWidget.css';

export function CartWidget(){
    return (
        <div className="liNav shoppingTodo">
        <img id="shoppingLogo" href="index.html" target="_blank" className="shoppingCart shoppingLogok" src="https://icongr.am/fontawesome/shopping-cart.svg?size=40&color=7809e0" alt="shopping cart" />
       <div className="contadorUnidades" href="index.html" id="contadorId">00</div>
   </div>
    );
}

 export default CartWidget; 