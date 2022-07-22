//imports
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/NavBar.css';
import React, { useState } from "react";
// al no haber aprendido responsive, aprendí y adapté de youtube con react styled components
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "../hojas-de-estilo/NavBar.elements.jsx";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";



const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
  
    return (
      // la etiqueta <MenuItemLink> solo es un div que da propiedades      
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em"} }}>
            <h1 className="NaturAdventure" >
            <img src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0" alt="logo" />Travelfy</h1>
            <CartWidget
             /> 
  
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>
  
            <Menu open={showMobileMenu}>
              <MenuItem>
                <MenuItemLink>
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
                    <div>ASIA-OCEANÍA</div>
                  </Link>
                  </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink>
                  <Link onClick= {() => setShowMobileMenu(!showMobileMenu) } to="/contacto" >
                    <div>CONTACTO</div>
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