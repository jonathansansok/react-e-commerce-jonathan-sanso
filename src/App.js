import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'; 
import Footer from './components/Footer.jsx';
import Contacto from './components/Contacto.jsx';
/* import CartContext from './components/CartContext.jsx'; */
import Cart from './components/Cart.jsx';
//5- ahora import el ItemsProvider y envuelvo mi app
import CartContextProvider from './components/CartContext.jsx';  

function App() {
  return (
    <CartContextProvider>
      <Router> 
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer titulo2='Elige tu próximo destino!'/> } />
            <Route path="/item/:id" element={  <ItemDetailContainer/>  } />
            <Route path="/categoria/:categoria" element={<ItemListContainer/>  } />  
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
          <Footer/>
        </div>
      </Router>  
    </CartContextProvider>
  );
}

export default App;
