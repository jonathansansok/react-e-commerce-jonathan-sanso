import './App.css';
import Testimonio from './components/Testimonio.jsx';

function App() {
  return (
    <body className="App">
      <header className="header">
        
        <h1 className="NaturAdventure" ><img src="https://icongr.am/jam/chevrons-square-right-f.svg?size=60&color=7809e0" alt="logo" /> AdNat</h1>

        <nav className="nav">

            <ul className="ulNav">
              <li className="liNav shoppingTodo">

                    <a id="shoppingLogo" class="shoppingCart" href="index.html" target="_blank"/><img class="shoppingLogok" src="https://icongr.am/fontawesome/shopping-cart.svg?size=40&color=7809e0" alt="shopping cart" />
                    <a class="contadorUnidades" href="index.html" id="contadorId">00</a>

              </li>
            <li className="liNav"><a href="App.js">Home</a></li>
            <li className="liNav"><a href="App.js">América</a></li>
            <li className="liNav"><a href="App.js">Asia/Oceania</a></li>
            <li className="liNav"><a href="App.js">Contacto</a></li>
            </ul>
        </nav>
          
      </header>
      <main>
      <div className="contenedor-principal">
          <article className="hero">
            <h2>The adventure is waiting for you</h2>
            <button className="hero-button"><a href="App.js">Join us</a></button>
          </article>
          <article className="tituloElige">
            <h2>Elige tus próximos viajes...</h2>
          </article>
            <article className="okey">
            <Testimonio 
            nombre='Sky Ocean'
            pais='Tailandia'
            imagen='tailandia'
            incluye='Pasaje + estadia'
            precio='3050' 
             />
            <Testimonio 
            nombre='Quintana Roo'
            pais='México'
            imagen='qroo'
            incluye='Pasaje + estadia'
            precio='2800' 
            />
            <Testimonio 
            nombre='Bariloche'
            pais='Argentina'
            imagen='bariloche'
            incluye='Pasaje + estadia'
            precio='3200' 
             />
            <Testimonio 
            nombre='Cancun tour'
            pais='México'
            imagen='cancun'
            incluye='Pasaje + estadia'
            precio='3500' 
             />
            <Testimonio 
            nombre='Villa la Angostura'
            pais='Argentina'
            imagen='angostura'
            incluye='Pasaje + estadia'
            precio='2900' 
            />
            <Testimonio 
            nombre='Tierra del Fuego'
            pais='Argentina'
            imagen='tierradelfuego'
            incluye='Pasaje + estadia'
            precio='2100' 
            />
            <Testimonio 
            nombre='Islas Fiyi'
            pais='Rep. of Fiyi'
            imagen='fiyi'
            incluye='Pasaje + estadia'
            precio='1900' 
            />
            <Testimonio 
            nombre='Isla Miyako,'
            pais='Japón'
            imagen='miyako'
            incluye='Pasaje + estadia'
            precio='2800' 
            />
            <Testimonio 
            nombre='Aspen'
            pais='Estados Unidos'
            imagen='aspen'
            incluye='Pasaje + estadia'
            precio='2900' 
            />
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
