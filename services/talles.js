require('../connection');
const Talle = require('../models/Talle');

const create = async (nombre) => {
    const nuevoTalle = new Talle({
        nombre: nombre
    })

    const talleCreado = await nuevoTalle.save();
    return talleCreado;

}

module.exports = {
    create
}