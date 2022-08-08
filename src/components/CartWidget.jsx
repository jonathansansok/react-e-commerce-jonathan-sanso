import '../hojas-de-estilo/cartWidget.css';
import { useCartContext } from "./CartContext.jsx";
import { Link } from 'react-router-dom';
//este componente es el logo del carrito con el contador que se va actualizando de cantidad
// Hace hincapié en totalPasajes().
function CartWidget(){
    const {totalPasajes} = useCartContext()
    return (
    <Link to='/cart' className="cartzoom">
        <div className="liNav shoppingTodo">
            <img id="shoppingLogo" href="index.html" target="_blank" className="shoppingCart shoppingLogok" src="https://icongr.am/fontawesome/shopping-cart.svg?size=40&color=7809e0" alt="shopping cart" />
            <div className="contadorUnidades" href="index.html" id="contadorId">{totalPasajes()}</div>
        </div>
   </Link>  
    );
}

export default CartWidget; 