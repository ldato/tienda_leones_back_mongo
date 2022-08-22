require('../connection');
const Proveedor = require('../models/Proveedor');

const create = async (data) => {
    const nuevoProveedorData = new Proveedor({
        nombre: data.nombre,
        telefono: data.telefono,
        email: data.email
    })

    const proveedorCreado = await nuevoProveedorData.save();
    return proveedorCreado;
}

const findAll = async () => {
    const proveedores = await Proveedor.find();
    return proveedores;
}

module.exports = {
    create,
    findAll
}