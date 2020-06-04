const mongoose = require('mongoose');
//Schema(base de datos)

let Schema = mongoose.Schema;
//Crear coleccion
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    periodos:{
        type:String,
        required:[true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    },
    frases:{
        type: String
    }
});

module.exports=mongoose.model('Pintores', PintoresSchema);