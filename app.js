//Nos permite configurar las variables de entorno y que nos den
//problema al verificar importaciones de modulos al estilo.
import './loadEnv.js'
import router from './router.js';

import express, { json } from 'express';
//Puerto para el server
const PORT = 11000;

//Aplicacion server de express
const app = express();

//Definir el sistema de vistas a utilizar
app.set('view engine', 'ejs');

//Definir donde esta ubicados los archivos publicos (css)
app.use(express.static('public'));
app.use(express.urlencoded({extends:false}));
app.use(express(json));

console.log(process.env.DB_USERNAME)

//Routers
//URL Raiz
app.use('/' ,router)




app.listen(PORT, ()=>{
    console.log(`SERVER corriendo en ${PORT}`);
});

