//imports
import '../hojas-de-estilo/NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { hamburgjs } from "./Responsiveburguer";


function NavBar(){
    return (
        <header className="header">
        <div className="menu-btn">
            <img className="fas fa-bars" src="https://icongr.am/fontawesome/bars.svg?size=30&color=8d8d8d" alt="||"/>
        </div>
        <h1 className="NaturAdventure" ><img src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0" alt="logo" />Travelfy</h1>
        <nav className="nav">
           <CartWidget
             /> 
            <ul className="ulNav show">
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