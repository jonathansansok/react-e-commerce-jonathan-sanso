import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// este Browserrouter es para poder linkear los <li> del header y otros componentes
//importo todos los componentes necesarios, lo haré en cada componente, si así lo requiera.
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Category from "./components/Category.jsx";
import Cart from "./components/Cart.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
//ahora importo el CartContextProvider y envuelvo mi app
import CartContextProvider from "./components/CartContext.jsx";

function App() {
  return (
    //el llamado a titulo2 es para ahorrar recursos y dinamizarlo
    // envuelvo mi app con CartContextProvider
    <CartContextProvider>
      {/* //router-routes es para linkear las paginas  con Browserrouter */}
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  className="tituloCustom"
                  titulo2="Elige tu próximo destino!"
                />
              }
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/categoria/:categoria"
              element={
                <Category
                  className="tituloElige"
                  titulo2="Vamos por continente!"
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<Contacto />} />
            {/*   ruta que me devuelve a home si esta mal escrita la direccion  */}
            <Route
              path="*"
              element={
                <ItemListContainer
                  className="tituloCustom"
                  titulo2="Elige tu próximo destino!"
                  to="/"
                  replace
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
