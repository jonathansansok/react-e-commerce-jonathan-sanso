// import el hook de styled
import styled from "styled-components";
//Este archivo .js fue colocado dentro de hojas-de-estilo porque en su mayoria contiene código ¨.css¨ y su respectivo componente se
//llama ¨NavBar.jsx¨ dentro de carpeta components.-

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: rgb(235, 235, 235);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 clamp(12px, 4vw, 40px);
  min-width: 0;
`;

export const CartUbi = styled.div`
  @media screen and (min-width: 973px) {
    display: none;
  }
  @media screen and (max-width: 973px) {
    justify-self: start;
  }
`;


export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 10px;

  @media screen and (max-width: 973px) {
    position: fixed;
    top: 90px;
    left: 0;
    width: 100%;
    height: calc(100vh - 90px);
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 18px 14px;
    gap: 12px;
    overflow-y: auto;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.25s ease;
    z-index: 80;
  }
`;

export const MenuItem = styled.li`
  height: 40%;

  @media screen and (max-width: 973px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
  }
`;



export const MenuItemLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #64b2ff;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;
  padding: 8px 12px;
  margin-left: 20px;
  border-radius: 10px;

  &:hover {
    color: #111;
    background-color: rgba(120, 9, 224, 0.12);

    div {
      color: #111;
      svg {
        fill: rgb(120, 9, 224);
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 973px) {
    width: 100%;
    margin-left: 0;
    padding: 12px 12px;

    div {
      width: 100%;
      justify-content: flex-start;
      font-weight: 700;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 973px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 90;

    svg {
      fill: rgb(120, 9, 224);
      padding-right: 0.8rem;
    }
  }
`;

export const Overlay = styled.div`
  display: none;

  @media screen and (max-width: 973px) {
    display: block;
    position: fixed;
    top: 90px;
    left: 0;
    width: 100%;
    height: calc(100vh - 90px);
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    transition: opacity 0.2s ease;
    z-index: 70;
  }
`;
