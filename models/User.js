const { Schema, model } = require('mongoose');

const User = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roleId: {
        type: Number,
        default: 2
    }
});

module.exports = model('User', User);