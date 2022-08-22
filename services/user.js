require('../connection');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const salt = 10;

const create = async (data) => {
    let hashPass = await bcrypt.hash(data.password, salt);
    const nuevoUsuario = new User({
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        password: hashPass,
        roleId: data.roleId
    })
    const usuarioCreado = await nuevoUsuario.save();
    return usuarioCreado;
}

const findOne = async (email) => {
    const user = await User.findOne({email: email});
    return user;
}

module.exports = {
    create,
    findOne
}