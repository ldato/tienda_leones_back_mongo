require('../connection');
const Articulo = require('../models/Articulo');
const Marca = require('../models/Marca');

const create = async (data) => {
    const nuevoArticulo = new Articulo({
        codigo: data.codigo,
        marca: data.marca,
        proveedor: data.proveedor,
        precioVenta: data.precioVenta,
        precioCosto: data.precioCosto,
        cantidad: data.cantidad,
        tipo: data.tipo
    }) 

    const articuloCreado = await nuevoArticulo.save();
    return articuloCreado;
}

const findByCodigoAndUpdate = async (codigo, cantidad) => {
    const nuevaCantidad = await Articulo.findOneAndUpdate(
        {codigo: codigo}, 
        {$inc: {cantidad: cantidad}}
        )
    return nuevaCantidad;
}

const findAll = async () => {
    const articulos = await Articulo.find()
    return articulos;
}

// const findByCodigo = async (codigo) => {
//     const articulo = await Articulo.findOne({codigo: codigo});
//     return articulo
// }

const findByCodigo = async (codigo) => {
    const articulo = await Articulo.findOne({codigo: codigo})
    .populate('marca').lean();
    return articulo;
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
    updatePrecios,
    findByCodigoAndUpdate
}