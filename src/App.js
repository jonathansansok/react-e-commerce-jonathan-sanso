import './App.css';

import NavBar from './components/NavBar.jsx';

import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar 
      />      
      <main>
        <div className="contenedor-principal">
            <article className="hero">
              <h2>The adventure is waiting for you</h2>
              <button className="hero-button"><a href="App.js">Join us</a></button>
            </article>
            <article className="tituloElige">
              <ItemListContainer 
              titulo2='Elige tus proximos destinos'/>
            </article>

    {/*     <article className="okey">
             <ItemListContainer />
            */}

        </div>
      </main>
      <footer className="footer">
        <p className="creador"><small>Website made by Jonathan Sansó 🖥️</small></p>
        <ul className="iconostodos">
            <li className="icon"><a href="https://www.instagram.com/jonathan.sanso/" target="_blank"><img src="https://icongr.am/fontawesome/instagram.svg?size=30&color=901886" alt="instagram" /></a></li>
            <li className="icon"><a href="https://www.linkedin.com/in/jonathan-sanso-fullstack" target="_blank"><img src="https://icongr.am/fontawesome/linkedin.svg?size=30&color=901886" alt="linked-In" /></a></li>
            <li className="icon"><a href="https://open.spotify.com/playlist/61gDxDScsKGSxY4wobXCya?si=09b8a654cc744767" target="_blank"><img src="https://icongr.am/fontawesome/spotify.svg?size=30&color=901886" alt="spotify" /></a></li>
            <li className="icon"><a href="https://www.facebook.com/jonathan.sanso" target="_blank"><img src="https://icongr.am/fontawesome/facebook.svg?size=30&color=901886"  alt="facebook" /></a></li>
        </ul>
    </footer>
    </div>
  );
}

export default App;
