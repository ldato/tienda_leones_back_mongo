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

const findByName = async (nombre) => {
    const proveedor = await Proveedor.findOne({nombre: nombre});
    return proveedor;
}

const update = async (nombre, data) => {
    const proveedor = await Proveedor.updateOne(
        {nombre: nombre}, {$set: {
            "nombre": data.nombre, 
            "telefono": data.telefono,
            "email": data.email
        }
    })
    return proveedor;
}

module.exports = {
    create,
    findAll,
    findByName,
    update
}