//imports
import React from 'react';
import '../hojas-de-estilo/footer.css';
//Este componente simple se muestra en todas las paginas con links a mis redes.
// no usé los href y noreferer... porque daba warning en consola de node y la idea era cero warnings
function Footer(){
    return (
    <footer className="footer">
        <p className="creador"><small>Website made by Jonathan Sansó 🖥️</small></p>
        <ul className="iconostodos">
            <li className="icon"><a href="https://www.instagram.com/jonathan.sanso/"  ><img src="https://icongr.am/fontawesome/instagram.svg?size=30&color=901886" alt="instagram" /></a></li>
            <li className="icon"><a href="https://www.linkedin.com/in/jonathan-sanso-fullstack" ><img src="https://icongr.am/fontawesome/linkedin.svg?size=30&color=901886" alt="linked-In" /></a></li>
            <li className="icon"><a href="https://open.spotify.com/playlist/61gDxDScsKGSxY4wobXCya?si=09b8a654cc744767" ><img src="https://icongr.am/fontawesome/spotify.svg?size=30&color=901886" alt="spotify" /></a></li>
            <li className="icon"><a href="https://www.facebook.com/jonathan.sanso" ><img src="https://icongr.am/fontawesome/facebook.svg?size=30&color=901886"  alt="facebook" /></a></li>
        </ul>
    </footer>
        );
    }
            
export default Footer; 