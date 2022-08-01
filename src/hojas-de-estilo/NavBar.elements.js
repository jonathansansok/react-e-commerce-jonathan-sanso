// import el hook de styled
import styled from "styled-components";
//Este archivo .js fue colocado dentro de hojas-de-estilo porque en su mayoria contiene código ¨.css¨ y su respectivo componente se 
//llama ¨NavBar.jsx¨ dentro de carpeta components.-

export const Container = styled.div`
  width: 100vw;
  height: 90px;
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: 480px){
  padding-left: 00px;
  padding-right: 00px;
}


`;

export const CartUbi = styled.div`
  @media screen and (min-width: 973px){
    display: none;
  }
  @media screen and (max-width: 973px){

    justify-self: start;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 973px) {
  background-color: rgb(235, 235, 235, 0.9);
  position: absolute;
  top: 90px;
  left: ${({ open }) => (open ? "0" : "-100%")}; 
  width: 45%;
  height: 50vh;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  transition: 0.5s all ease;
  border-bottom-right-radius: 90px;
  }
`;

export const MenuItem = styled.li`
  height: 40%;
  @media screen and (max-width: 973px) {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
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
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  padding: 1px 6px 1px 6px;
  margin: 0px 00px 00px 40px;

  &:hover {
    color: #fff;
    background-color: salmon;
    transition: 0.5s all ease;
    border-radius: 5px;

    div {
      color: black;
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
    div {
      width: 200px;
      justify-content: left;
      font-weight: bold;

      svg {
        display: flex;
      }
    }
  }

@media screen and (max-width: 880px) {
  div {
    justify-content: left;

    svg {
      display: flex;
    }
  }
}

@media screen and (max-width: 500px) {
  div {
    width: 60%;
    justify-content: left;

    svg {
      display: flex;
    }
  }
}

@media screen and (max-width: 260px) {
  div {
    width: 100%;
    justify-content: left;

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

  svg {
    fill: rgb(120, 9, 224);
    padding-right: 0.8rem;
  }
}
`;

