require('../connection');
const Articulo = require('../models/Articulo');

const create = async (data) => {
    const nuevoArticulo = new Articulo({
        codigo: data.codigo,
        marca: data.marca,
        proveedor: data.proveedor,
        precioVenta: data.precioVenta,
        precioCosto: data.precioCosto
    }) 

    const articuloCreado = await nuevoArticulo.save();
    return articuloCreado;
}

const findAll = async () => {
    const articulos = await Articulo.find()
    return articulos;
}



module.exports = {
    create,
    findAll
}