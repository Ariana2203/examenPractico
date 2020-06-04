//Importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose= require('mongoose');
//Creamos una constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear rutas
let pintoresRouter=require('./routes/pintor');

//Sitio web y HBS
const app= express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);

//Conexion con MongoDB
mongoose.Promise =global.Promise;
const cadena='mongodb+srv://Ariana:123Ariana@cluster0-d1c0o.mongodb.net/Examen?retryWrites=true&w=majority'
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
      console.log('Conexion establecida')
  })
  .catch(err=> console.log(err));

  //Arrancar servidor Web
  app.listen(PUERTO, ()=>{
      console.log('Escuchando el puerto 3000...');

  });
