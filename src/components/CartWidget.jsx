import React, {useContext} from 'react';
import '../hojas-de-estilo/CartWidget.css';
 import { useCartContext } from "./CartContext.jsx";
 import { Link } from 'react-router-dom';

function CartWidget(){
    const {totalPasajes} = useCartContext()
    return (
        <Link to='/cart'>
        <div className="liNav shoppingTodo">
        <img id="shoppingLogo" href="index.html" target="_blank" className="shoppingCart shoppingLogok" src="https://icongr.am/fontawesome/shopping-cart.svg?size=40&color=7809e0" alt="shopping cart" />
       <div className="contadorUnidades" href="index.html" id="contadorId">{totalPasajes()}</div>
   </div>
   </Link>  
    );
}

 export default CartWidget; 