//imports
import { useState } from "react";
import "../hojas-de-estilo/itemCount.css";
//Este componente es para modificacion de unidades de cada producto con suma, resta y stock disponible
//El onAdd es para el onClick de agregar al carrito el numero de pasajes
//Se importa la funcion addToCart de CartContext.jsx que agrega al carrito lo que el comprador decida
//initial es, previamente, la cantidad de pasajes que elegirá el usuario, proviene desde firestore como punto de partida real.

const ItemCount = ({ stock, initial, onAdd }) => {
  //seteo el numero de pasajes
  const [Numero, setNumero] = useState(initial);
  //chequeo con el numero de stock hasta cuanto puede agregar
  const [Disponible, setDisponible] = useState(stock);
  //suma que se mueve en base al stock
  const sumar = () => {
    if (Numero < stock) {
      setNumero(Numero + 1);
      setDisponible(Disponible - 1);
    } else {
      alert(`No puedes agregar mas de ${Numero} pasajes`);
    }
  };
  //resta que se mueve en base al stock
  const restar = () => {
    if (Numero > initial) {
      setNumero(Numero - 1);
      setDisponible(Disponible + 1);
    } else {
      alert("No puedes solicitar 0 pasajes");
    }
  };
  //return que nos permite usar la resta, suma, cantidad de pasajes, stock y onAdd
  return (
    <article className="CounterSection">
      <div className="botonera-acciones">
        <p className="botonera-pasaje"> Pasajes: </p>
        <div className="botonera-sumaresta" onClick={restar}>
          {" "}
          -{" "}
        </div>
        <p className="botonera-pasaje"> {Numero}</p>
        <div className="botonera-sumaresta" onClick={sumar}>
          {" "}
          +{" "}
        </div>
      </div>
      <div className="botonera-sumaresta stock"> Stock: {Disponible} </div>
      <button className="agregarACarrito-detail" onClick={() => onAdd(Numero)}>
        Agregar a carrito
      </button>
    </article>
  );
};

export default ItemCount;
