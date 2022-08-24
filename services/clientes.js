require('../connection');
const Cliente = require('../models/Cliente');

const create = async (data) => {
    const nuevoCliente = new Cliente ({
        dni: data.dni,
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        email: data.email
    })
    const clienteCreado = await nuevoCliente.save();
    return clienteCreado;
}

const getAll = async () => {
    const clientes = await Cliente.find();
    return clientes;
}

const getClientePorDni = async (dni) => {
    const cliente = await Cliente.findOne({dni: dni});
    return cliente;
}

const update = async (data, dni) => {
    const cliente = await Cliente.updateOne(
        {dni: dni}, {$set: {
            "nombre": data.nombre, "apellido": data.apellido, 
            "telefono": data.telefono, "email": data.email}
                    }
    )
    return cliente;
}

module.exports = {
    create,
    getAll,
    getClientePorDni,
    update
}