import React, { useEffect, useMemo, useState } from "react";
import "../hojas-de-estilo/itemDetail.css";
import ItemCount from "./ItemCount.jsx";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext.jsx";
import Swal from "sweetalert2";
import { addDaysISO, formatDMY, futureLimitISO, todayISO } from "../lib/dates";

export function ItemDetail({ item }) {
  const { addToCart, isInCart } = useCartContext();
  const [cantidad, setCantidad] = useState(0);

  const minCheckIn = useMemo(() => todayISO(), []);
  const maxDate = useMemo(() => futureLimitISO(3), []);

  const [checkInDate, setCheckInDate] = useState(() => addDaysISO(minCheckIn, 7));
  const [checkOutDate, setCheckOutDate] = useState(() => addDaysISO(addDaysISO(minCheckIn, 7), 6));

  useEffect(() => {
    console.log("[ItemDetail] minCheckIn", minCheckIn, "maxDate", maxDate);
  }, [minCheckIn, maxDate]);

  useEffect(() => {
    const minCheckout = addDaysISO(checkInDate, 1);
    if (checkOutDate < minCheckout) {
      console.log("[ItemDetail] fixing checkout", checkOutDate, "->", minCheckout);
      setCheckOutDate(minCheckout);
    }
  }, [checkInDate, checkOutDate]);

  const { id, imagen, titulo, pais, incluye, precio, descripcion, stock, initial } = item;

  const agregarAlCarrito = (Numero) => {
    console.log("[ItemDetail] agregarAlCarrito Numero=", Numero);
    if (Numero === 0) {
      Swal.fire(`No se puede agregar cero pasajes`);
      return;
    }

    const minCheckout = addDaysISO(checkInDate, 1);
    if (checkOutDate < minCheckout) {
      Swal.fire(`Check-out debe ser posterior al check-in`);
      setCheckOutDate(minCheckout);
      return;
    }

    Swal.fire(`Se agregarán ${Numero} unidades al carrito!`);
    setCantidad(Numero);

    addToCart({
      ...item,
      initial: Numero,
      checkInDate: formatDMY(checkInDate),
      checkOutDate: formatDMY(checkOutDate),
    });
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
                  value={checkInDate}
                  min={minCheckIn}
                  max={maxDate}
                  onChange={(e) => {
                    console.log("[ItemDetail] checkIn change", e.target.value);
                    setCheckInDate(e.target.value);
                  }}
                />
              </div>

              <div className="checkOut-detail">
                <label htmlFor="checkOut">Check-Out:</label>
                <input
                  type="date"
                  id="checkOut"
                  value={checkOutDate}
                  min={addDaysISO(checkInDate, 1)}
                  max={maxDate}
                  onChange={(e) => {
                    console.log("[ItemDetail] checkOut change", e.target.value);
                    setCheckOutDate(e.target.value);
                  }}
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
                      <ItemCount stock={stock} initial={initial} onAdd={agregarAlCarrito} />
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
