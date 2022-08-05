//imports
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
//el NavBar.elements.js antes era jsx, lo pasé a js y moví a estilos.-
// El responsive: Me parecio una buena oportunidad para aprender el manejo de react styled comp. ya que con js vanilla
//... ya los habia aprendido y usado en un freelance de Js.
//Aquí importo lo creados en NavBar.elementos.js
import {
  Container,
  Wrapper,
  CartUbi,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "../hojas-de-estilo/NavBar.elements.js";
//importo iconos de "react-icons/fa"
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";
//NavBar.css es destinado solo al  estilo solo al logo y titulo Travelfy .
//...creado para separar bien los estilados.
import '../hojas-de-estilo/NavBar.css';


const Navbar = () => {
    //cambio el icon de hamburgesa por una ¨X" con useState 
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
      // la etiqueta <MenuItemLink> solo es un div que da propiedades
      <Container>
        <Wrapper >
          <IconContext.Provider value={{ style: { fontSize: "2em"} }}>
            <Link to="/" >
              <h1 className="NaturAdventure" ><img className="NaturAdventurelogo" src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0" alt="logo" />Travelfy</h1>
            </Link>
            {/*El componenente <CartUbi/>  es para que el carrito de <CartWidget/>  se esconda en un (MIN-width: 960px) 
              //...y solo aparezca en un (MAX-width: 960px)    */}

            <CartUbi>
              <CartWidget/>
            </CartUbi>
              {/*El componenente <CartUbi/>  es para que el carrito de <CartWidget/>  se esconda en un (MIN-width: 960px) 
              //...y solo aparezca en un (MAX-width: 960px)    */}
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {/* Ternario que logra el State de hamburguesa o ¨X¨ */}
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>
  
            <Menu  open={showMobileMenu}>
              <CartWidget/>
              <MenuItem>
                <MenuItemLink>
                  {/*Cuando se clickea una seccion del header desaparece este y me lleva al link   */}                
                  <Link onClick= {() => setShowMobileMenu(!showMobileMenu) } to="/" >
                    <div>HOME</div>
                  </Link>
                  </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink>
                  <Link onClick= {() => setShowMobileMenu(!showMobileMenu) } to="/categoria/america" >
                    <div>AMÉRICA</div>
                  </Link>
                  </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink>
                  <Link onClick= {() => setShowMobileMenu(!showMobileMenu) } to="/categoria/asiaoceania" >
                    <div>ASIA/OCN</div>
                  </Link>
                  </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink>
                  <Link onClick= {() => setShowMobileMenu(!showMobileMenu) } to="/contacto" >
                    <div>CONTACT</div>
                  </Link>
                  </MenuItemLink>
              </MenuItem>

            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    );
  };
  
  export default Navbar;