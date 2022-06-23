import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'; 
import Footer from './components/Footer.jsx';
import America from './components/America.jsx';
import AsiaOceania from './components/AsiaOceania.jsx';
import Contacto from './components/Contacto.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router> 
    <div className="App">
      <NavBar 
      />

      <Routes>
        <Route path="/" element={ <ItemListContainer titulo2='Elige tu proximo destino'/> } />
        <Route path="/item/:id" element={  <ItemDetailContainer/>  } />
        <Route path=":category:id" element={  <ItemListContainer/>  } /> 
        <Route path='America' element={<America />} />
        <Route path='AsiaOceania' element={<AsiaOceania />} />   
        <Route path='Contacto' element={<Contacto />} />
      </Routes>

      <Footer
      />
    </div>
  </Router>  
  );
}

export default App;
