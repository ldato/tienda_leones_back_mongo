const {Schema, model} = require('mongoose');

const Talle = new Schema ({
    nombre: {
        type: String,
        required: true
    }
})

module.exports = model('Talle', Talle);