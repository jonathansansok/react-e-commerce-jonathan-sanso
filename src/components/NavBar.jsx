//imports
import '../hojas-de-estilo/NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';



function NavBar(){
    return (
        <header className="header">
        <h1 className="NaturAdventure" ><img src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0" alt="logo" />Travelfy</h1>
        <nav className="nav">
            <Link to="/shop" className="liNav">shop 
            
            </Link>

            <CartWidget
             /> 
            <ul className="ulNav">
                <li className="liNormal">
                    <Link to="/" className="liNav">Home </Link>
                </li>
                <li className="liNormal">
                <Link to="/categoria/america" className="liNav">América</Link>
                </li>
                <li className="liNormal">
                <Link to="/categoria/asiaoceania" className="liNav">Asia/Oceania</Link>
                </li>
                <li className="liNormal">
                <Link to="/contacto" className="liNav">Contacto</Link>
                </li>
            </ul>
        </nav>
          
      </header>
    );
}

export default NavBar; 