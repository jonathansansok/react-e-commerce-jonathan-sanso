import React, {useContext} from 'react';
import '../hojas-de-estilo/CartWidget.css';
/* import { useCartContext } from "./CartContext.jsx";
 */

function CartWidget(){
    /* const [items, setItems, clear] = useCartContext(); */
    return (
        <div className="liNav shoppingTodo">
        <img id="shoppingLogo" href="index.html" target="_blank" className="shoppingCart shoppingLogok" src="https://icongr.am/fontawesome/shopping-cart.svg?size=40&color=7809e0" alt="shopping cart" />
       <div className="contadorUnidades" href="index.html" id="contadorId">00</div>
       {/* <button className='ItemsContext' onClick={() => clear()}>alert items</button> */}
   </div>
    );
}

 export default CartWidget; 