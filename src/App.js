import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

import ItemDetailContainer from './components/ItemDetailContainer.jsx'; 
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router> 
    <div className="App">
      <NavBar 
      />

      <Routes>
        <Route path="/" element={ <ItemListContainer titulo2='Elige tu proximo destino'/> } />
        <Route path="about" element={  <ItemDetailContainer/>  } />
      </Routes>
   
      <Footer
      />
    </div>
  </Router>  
  );
}

export default App;
