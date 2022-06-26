## WEB DE VENTA DE PAQUETES DE TURISMO INTERNACIONAL

  La idea de esta WEB es demostrar como se procesa un fragmento de canción a través de 4 consolas de sonido, las cuales son API - NEVE - SSL-E SS-G y NEVE. Cada usuario debería tener auriculares de gama media/alta o bafles/monitores de estudio.
  
La pagina inicial es la presentación del autor y debajo se muestras las comparaciones a nivel visual y auditivo de un fragmento de canción de Hard-Rock.

En el Header podemos encontar un menu con las opciones: HOME - API - NEVE - SSL-E SS-G - NEVE - CONTACTO

Al clickear en cada uno de ellos se verá la Respuesta de frecuencia de cad consola analizada de manera visual con un ecualizador analizador de espectro, el cual muestra su respuesta de frecuencia de 20 Hz. a 20Khz., Tambíen una imagen ampliada de los parámetros que utilizada cada equipo, un descripción general del mismo y una opinión personal sobre el ejemplo demostrado. 

En la Sección de "CONTACTOS" el usuario puede contactarme a mis redes sociales o bien enviarme un mail. 

## TECNOLOGIAS UTILIZADAS 🛠️

HTML - En el cual inserté todo el contenido necesario para el proyecto. 

CSS - Para darle estilos a todos los archivos *HTML.  

JAVASCRIPT - Para la funcionalidad del E-commerce y ciertas animaciones que favorecen al diseño responsive. 

 
## COMENZANDO 🚀 
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.  

## Pre-requisitos 📋 
Es necesario contar minimamente con la última versión estable de Visual Studio Code y Google Chrome. Para verificar que versión tienen instalada: 
Vsc -v 
gch -v 
Tener instalado el administrador de Base de Datos Postgres SQL 

## Instrucciones 🔧

1 - Clonar repositorio

Desde la consola de comandos, ubicarse en la carpeta en la cual se clonara el repositrio y luego ejecutar el comando git clone mas la url.
User/Folder git clone https://github.com/jonathansansok/-art-tech-js-first-web.git

2 - Abrir editor de codigo preferido

3 - Abrir en navegador Web (Google Chrome como recomendación)

-- PARA PROYECTOS AVANZADOS: --

En la ruta principal aparecen dos carpetas api y client.

3 - Instalar las Dependencias


Desde la consola de comandos ubicarse en la carpeta api, ejecutar el siguiente comando:
npm install
Posteriormente ubicarse en la carpeta client y ejecutar el mismo comando.

4 - Crear la Base De Datos


Ingresar en una nueva ventana de la terminal de comandos. Ejecutar el siguiente comando:
psql -U postgres 
Ingresar la contraseña agregada en la instalacion de Postgres.

Crear una Base de Datos nueva con el nombre ncr. Ingresar el siguiente comando:

CREATE DATABASE ncr;
No salir de esta linea de comandos porque posteriormente se utilizara para cargar datos.

4 - Crear archivo .env


Ubicado en la carpeta api crear un archivo con el nombre .env
Ingresar los siguientes datos:
# DB config

DB_USER= 'postgres'
DB_PASSWORD = 'tuContraseñaPostgres'
DB_HOST = 'localhost'
DB_PORT = '5432'
DB_NAME = 'ncr'

# Auth Config

AUTH_SECRET = 'secretncr'
AUTH_EXPIRES = 1D
AUTH_ROUNDS = 10

# HOST
FRONTEND_URL= 'http://localhost:3000'

5 - Inciar la Apliacion


Desde la terminal de comandos ubicarse en la carpeta api y ejecutar el siguiente comando:
npm start
Repetir el mismo proceso ubicado en la carpeta client

6 - Poblar Base de Datos


Dentro de la carpeta api se encuentra una carpeta llamada sql, en esta ultima hay un archivo database.sql.
Copiar las lineas correspondientes a las tiendas.
Pegar estas lineas en la terminal donde se creo la Base de Datos. Luego Presionar Enter.
Repetir el proceso con los datos de los usuarios.

7 - Loguearse


En la aplicacion ingresar las siguientes credenciales:
username: ssanchez
password: 123456

DOCUMENTACION API ✒️
Esta documentacion se realizo enteramente con Swagger. En la misma se encuentran los endpoints que se utilizaron para acceder a los datos del Backend. Cada uno de ellos brinda un servicio distinto, los cuales pueden ser probados ingresando los datos solicitados. Para poder ingresar a la documentacion y hacer uso de ella debe seguir los siguientes pasos:

Levantar el servidor: desde la consola, ubicado en la carpeta de proyecto, moverse a la carpeta api y ejecutar el comando npm start.

Ingresar en el navegador a la ruta http://localhost:3001/api-docs. Para un acceso mas rapido puede hacer clic en este link.

Los Endpoint estan protegidos con un Token de seguridad. Para poder acceder a este debe loguearse. Para ello debe ingresar en el Endpoint de login (POST). Precionar el boton de Try it out. Con las credencialies existentes precionar el boton Execute. Esta accion arroja una respuesta 200 con los datos de un usuario y su token de autenticacion.

Seleccionar y copiar el Token de autenticacion. En la parte superior derecha de la documentacion aparece el boton de Authorize 🔒 , hacer clic en él y pegar el token en el campo value. Ahora podra ingresar al resto de los Endpoints.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
