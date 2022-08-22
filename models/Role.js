const {Schema, model} = require('mongoose');

const Role = new Schema({
    roleId: {
        type: Number,
        required: true,
        unique: true
    },

    nombre: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Role', Role);