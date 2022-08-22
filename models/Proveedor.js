const {Schema, model} = require('mongoose');

const Proveedor = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    telefono:{
        type: Number,
    },
    email:{
        type: String
    }  
})

module.exports = model('Proveedor', Proveedor);