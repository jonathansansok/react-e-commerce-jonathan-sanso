import './App.css';
import Testimonio from './components/Testimonio.jsx';

function App() {
  return (
    <body className="App">
      <header className="header">
        <img src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=901886" alt="logo" />
            <nav className="nav">
                <ul className="ulNav">
                    <li className="liNav"><a href="App.js">Home</a></li>
                    <li className="liNav"><a href="App.js">Tienda</a></li>
                    <li className="liNav"><a href="App.js">Galeria</a></li>
                    <li className="liNav"><a href="App.js">Contacto</a></li>
                </ul>
            </nav>
      </header>
      <main>
      <div className="contenedor-principal">
          <article className="hero">
            <h1>The adventure is waiting for you</h1>
            <button className="hero-button"><a href="App.js">Join us</a></button>
          </article>
            <h2>Elige tus próximos viajes...</h2>
            <article className="okey">
            <Testimonio 
            nombre='Sky Ocean'
            pais='tailandia'
            imagen='tailandia'
            cargo='disfruta el mar'
            empresa='Amazon'
            testimonio='Da miedo cambiar de carrera. Solo gané la ' />
            <Testimonio 
            nombre='Sarah Chima'
            pais='Nigeria'
            imagen='costarica'
            cargo='Ingeniero de software'
            empresa='ChatDesk'
            testimonio='freeCodeCamp fue la puerta de entra' />
            <Testimonio 
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='aspen'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScr' />
            <Testimonio 
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='aspen'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScr' />
            <Testimonio 
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='aspen'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScr' />
            <Testimonio 
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='aspen'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScr' />
            <Testimonio 
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='aspen'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScr' />
            <Testimonio 
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='aspen'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScr' />
            <Testimonio 
            nombre='Emma Bostian'
            pais='Suecia'
            imagen='aspen'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScr' />
      </article>
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
    </body>
  );
}

export default App;
