require('../connection');
const Venta = require('../models/Venta');

const create = async (data) => {
    const nuevaVenta = new Venta({
        dniCliente: data.dniCliente,
        articulos: data.articulos,
        formaPago: data.formaPago,
        subTotal: data.subTotal,
        recargo: data.recargo,
        descuento: data.descuento,
        total: data.total
    });
    const ventaRegistrada = await nuevaVenta.save();
    return ventaRegistrada;
}

const findAll = async () => {
    const ventas = await Venta.find();
    return ventas;
}

const findByDni = async (dni) => {
    const ventas = await Venta.find({dniCliente: dni});
    return ventas;
}

module. exports = {
    create,
    findAll,
    findByDni
}