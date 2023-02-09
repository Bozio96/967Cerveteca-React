![logo](https://res.cloudinary.com/dnfil5isx/image/upload/v1662515798/imagenes/logo_k84eyr.png)
# 967-Cerveteca 

## Descripcion del Proyecto:
Esta app es un e-commerce de la cerveteca red967 de Santa Teresa - Santa Fe - Argentina.
Su funcionalidad es navegar entre un listado de productos con sus categorias mediante el uso
de parametros(useParams) y rutas(reaact-router-dom) y agregarlos a un carrito de compra.
Los productos se encuentran alojados en una base de datos en Firebase.
En el itemList se pueden ver reflejados estos productos traidos desde la misma base de datos.
A su vez en el itemDetail se carga cada uno de los productos individuales con su detalle y la opcion de agregarlos al carrito.
El carrito tiene acceso casi global por toda la app, compartiendo sus funcionalidades con el hook useContext, usando el provider CarritoProvider.
Este mismo tiene la funcionalidad de englobar los demas componentes y si fuese necesario pasarle valores por medio de props.
Dando mas detalle sobre el carrito, contiene una lista con los productos seleccionados y sus respectivas cantidades, y subtotales.
Ademas de un precio total por la suma de todos los subtotales. Luego se confirma la compra y se envian los datos de la misma a otra coleccion de la base de datos.

## Vistas de la pagina:
### Navegabilidad
![navegacion](https://res.cloudinary.com/dnfil5isx/image/upload/v1675965379/imagenes/Navegacion_wj11cv.gif)
### Agregar productos al carrito
![agregarProducto](https://res.cloudinary.com/dnfil5isx/image/upload/v1675965376/imagenes/addProducts_c6duyt.gif)
### Realizar una compra
![realizarCompra](https://res.cloudinary.com/dnfil5isx/image/upload/v1675965376/imagenes/realizarCompra_moowry.gif)
## Dependencias
* firebase version 9.16.0: Usando su servicio de Firestore para almacenar datos de los productos y ventas cumpliendo el rol de base de datos
* react version 18.2.0
* react-dom version 18.2.0
* react-router-dom version 6.6.2
* react-toastify version 9.1.1 para utilizar notificaciones para las diferentes acciones y dar mas dinamismo visual al usuario.

## Descripcion del programador
![fotoPerfil](https://res.cloudinary.com/dnfil5isx/image/upload/v1675965865/imagenes/fotoPerfil_prjfan.png)
* Nombre: Rodrigo Ezequiel Bozio
* Estudiante de Desarrollo Web Full Stack en CoderHouse.
* Alumno regular de Ingenieria en Sistemas de Informacion en la UTN FRRo

### Conocimientos previos en 
* SQL Server de Microsoft
* C#
 
### Conocimientos adquiridos durante el cursado actual:
* HTML
* CSS
* SASS
* Bootstrap
* Git
* JavaScript Vanilla
* Ajax
* React.js
* Firebase

## Getting Started with Create React App

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
