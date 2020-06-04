const express =require('express');
//Routear a los pintores
let pintor = require('../controllers/PintoresController.js');

//Crear rutas
let router =  express.Router();

router.get('/', pintor.list);
module.exports=router;