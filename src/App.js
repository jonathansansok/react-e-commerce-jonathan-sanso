import './App.css';
import NavBar from './components/NavBar.jsx';
import MainHero from './components/MainHero.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Footer from './components/Footer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'; 
function App() {
  return (
    <div className="App">
      <NavBar 
      />      
      <main>
        <div className="contenedor-principal">
          <MainHero
          />
          <ItemListContainer 
            titulo2='Elige tu proximo destino'
          />
        </div>
        <ItemDetailContainer
           /> 
      </main>
      <Footer
      />
    </div>
  );
}

export default App;
