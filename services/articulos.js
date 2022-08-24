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

const findByCodigo = async (codigo) => {
    const articulo = await Articulo.findOne({codigo: codigo});
    return articulo
}

const updatePrecios = async (codigo, data) => {
    const articulo = await Articulo.updateOne(
        {codigo: codigo}, {$set: {
            "precioCosto": data.precioCosto,  
            "precioVenta": data.precioVenta
        }}
    )
    return articulo;
}

module.exports = {
    create,
    findAll,
    findByCodigo,
    updatePrecios
}