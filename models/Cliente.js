const {Schema, model} = require('mongoose');

const Cliente = new Schema({
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        default: null
    },
    email: {
        type: String,
        default: null
    }
});

module.exports = model("Cliente", Cliente);