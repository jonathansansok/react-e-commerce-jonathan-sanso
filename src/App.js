import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'; 
import Footer from './components/Footer.jsx';
import Contacto from './components/Contacto.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
  <Router> 
    <div className="App">
      <NavBar 
      />

      <Routes>
        <Route path="/" element={ <ItemListContainer titulo2='Elige tu proximo destino!'/> } />
        <Route path="item/:id" element={  <ItemDetailContainer/>  } />
        <Route path="//detail/:id" element={<ItemListContainer/>  } /> 
        <Route path="/detail/:id" element={<ItemListContainer/>  } /> 
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer
      />
    </div>
  </Router>  
  );
}

export default App;
