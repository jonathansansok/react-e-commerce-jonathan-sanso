import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import React, { useState, useCallback } from "react";
import {
  Container,
  Wrapper,
  CartUbi,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Overlay,
} from "../hojas-de-estilo/NavBar.elements.js";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../hojas-de-estilo/NavBar.css";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    console.log("[NavBar] toggleMenu prev=", showMobileMenu);
    setShowMobileMenu((v) => !v);
  }, [showMobileMenu]);

  const closeMenu = useCallback(() => {
    console.log("[NavBar] closeMenu");
    setShowMobileMenu(false);
  }, []);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <Link to="/" onClick={closeMenu}>
            <h1 className="NaturAdventure">
              <img
                className="NaturAdventurelogo"
                src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0"
                alt="logo"
              />
              Travelfy
            </h1>
          </Link>

          <CartUbi>
            <CartWidget />
          </CartUbi>

          <MobileIcon onClick={toggleMenu}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Overlay open={showMobileMenu} onClick={closeMenu} />
          <Menu open={showMobileMenu}>
            <CartWidget />

            <MenuItem>
              <MenuItemLink>
                <Link onClick={closeMenu} to="/">
                  <div>HOME</div>
                </Link>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <Link onClick={closeMenu} to="/categoria/america">
                  <div>AMÉRICA</div>
                </Link>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <Link onClick={closeMenu} to="/categoria/asiaoceania">
                  <div>ASIA/OCN</div>
                </Link>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <Link onClick={closeMenu} to="/contacto">
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
