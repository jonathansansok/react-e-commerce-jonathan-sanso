//imports
import React, { useState } from "react";
import "../hojas-de-estilo/itemDetail.css";
import ItemCount from "./ItemCount.jsx";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext.jsx";
import Swal from "sweetalert2";
//Aquí se logra que el comprador pueda ver el producto en detalle y pueda cambiar la cantidad de pasajes.
//initial es, previamente, la cantidad de pasajes que elegirá el usuario.
//Me traigo como parametro el Item de ItemDetailContainer
export function ItemDetail({ item }) {
  const { addToCart, isInCart } = useCartContext();
  const [cantidad, setCantidad] = useState(0);

  // Estado para las fechas
  const [checkInDate, setCheckInDate] = useState("2024-10-01");
  const [checkOutDate, setCheckOutDate] = useState("2024-10-07");

  // Función para convertir fechas de yyyy-mm-dd a dd/mm/yyyy
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const {
    id,
    imagen,
    titulo,
    pais,
    incluye,
    precio,
    descripcion,
    stock,
    initial,
  } = item;

  const agregarAlCarrito = (Numero) => {
    if (Numero === 0) {
      Swal.fire(`No se puede agregar cero pasajes`);
    } else {
      Swal.fire(`Se agregarán ${Numero} unidades al carrito!`);
      setCantidad(Numero);
      addToCart({
        ...item,
        initial: Numero,
        checkInDate: formatDate(checkInDate), // Formatear la fecha de check-in
        checkOutDate: formatDate(checkOutDate), // Formatear la fecha de check-out
      });
    }
  };

  return (
    <section className="top-contenedor-Item-detail">
      <article className="contenedor-Item-detail">
        <div className="contenedor-Item-detail-alto">
          <div className="anyTravel-detail">
            <img className="imagen-Item-detail" src={imagen} alt={imagen} />
          </div>
          <div className="contenedor-texto-Item-detail">
            <p className="nombre-Item-detail">
              <strong>
                {titulo} en {pais}
              </strong>
            </p>
            <p className="incluye-Item-detail">{incluye}</p>
            <p className="precio-Item-detail">US$ {precio}.-</p>
            <h3>{descripcion}</h3>
          </div>
        </div>
        <div className="contenedor-texto-Item-detail-bajo">
          <div className="contenedor-texto-Item-detail-bajo letrasNumeros">
            <div className="fechasTodas-detail">
              <div className="checkIn-detail">
                <label htmlFor="checkIn">Check-in:</label>
                <input
                  type="date"
                  id="checkIn"
                  name="trip-start"
                  value={checkInDate}
                  min="2023-01-01"
                  max="2024-12-31"
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              <div className="checkOut-detail">
                <label htmlFor="checkOut">Check-Out:</label>
                <input
                  type="date"
                  id="checkOut"
                  name="trip-end"
                  value={checkOutDate}
                  min={checkInDate} // La fecha de check-out debe ser posterior al check-in
                  max="2024-12-31"
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
            </div>
            <div className="numerales-detail">
              {isInCart(id) ? (
                <>
                  <Link to="/">
                    <button className="agregarACarrito-detail terminar itemdetail">
                      Elegir más
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button className="agregarACarrito-detail terminar itemdetail">
                      Ir al Cart
                    </button>
                  </Link>
                  <p>Ya lo elegiste, modifica desde el Cart!</p>
                </>
              ) : (
                <>
                  {cantidad === 0 ? (
                    <div className="agregar-volver">
                      <ItemCount
                        stock={stock}
                        initial={initial}
                        onAdd={agregarAlCarrito}
                      />
                      <Link to="/">
                        <button className="agregarACarrito-detail terminar">
                          Elegir más
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link to="/">
                        <button className="agregarACarrito-detail terminar itemdetail">
                          Elegir más
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button className="agregarACarrito-detail terminar itemdetail">
                          Ir al Cart
                        </button>
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ItemDetail;
