//imports
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'; 
import Category from './components/Category';
import Cart from './components/Cart.jsx';
import Shop from './components/Shop.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';
//ahora import el ItemsProvider y envuelvo mi app
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
            <Route path="/categoria/:categoria" element={<Category titulo2='Vamos por continente!'/>  } />  
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/contacto" element={<Contacto />} />
            
          </Routes>
          <Footer/>
        </div>
      </Router>  
    </CartContextProvider>
  );
}

export default App;
