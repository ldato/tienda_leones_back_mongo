require('../connection');
const Marca = require('../models/Marca');

const create = async (nombre) => {
    const nuevaMarca = new Marca({
        nombre: nombre
    })

    const marcaCreada = await nuevaMarca.save();
    return marcaCreada;
}

const getAll = async () => {
    const marcas = await Marca.find();
    return marcas;
}

module.exports = {
    create,
    getAll
}