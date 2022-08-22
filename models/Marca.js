const {Schema, model} = require('mongoose');

const Marca = new Schema ({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Marca', Marca);