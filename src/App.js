import './App.css';

import NavBar from './components/NavBar.jsx';
import MainHero from './components/MainHero';
import ItemListContainer from './components/ItemListContainer.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar 
      />      
      <main>
        <div className="contenedor-principal">
        <MainHero
        />
            <article className="tituloElige">
              <ItemListContainer 
                titulo2='Elige tus proximos destinos'
              />
            </article>

    {/*     <article className="okey">
             <ItemListContainer />
            */}
        </div>
      </main>
      <Footer
      />
    </div>
  );
}

export default App;
