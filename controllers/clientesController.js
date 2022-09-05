const { create, getAll, getClientePorDni, update } = require('../services/clientes');

const crearCliente = async (req, res) => {
    const cliente = req.body;
    try {
        const nuevoCliente = await create(cliente);
        return res.status(201).json({
            message: "El cliente fue creado con exito",
            cliente: nuevoCliente
        });
    } catch (error) {
        return res.status(400).json({
            message: "Ocurrio un error al crear el cliente",
            error: error
        })
    }
};

const getClientes = async (req, res) => {
    try {
        const clientes = await getAll();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(400).json({
            message: "Ocurrio un error al consultar los cliente",
            error: error
        })
    }
}

const verClientePorDni = async (req, res) => {
    const {dni} = req.params;
    try {
        const cliente = await getClientePorDni(dni);
        if (!cliente) {
            return res.status(404).json({
                message: "No se ha encontrado un cliente con el DNI especificado",
                error: 404
            })
        }
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(404).json({
            message: "Ha ocurrido un error al consultar el cliente",
            error: error
        })
    }
}

const updateCliente = async (req, res) => {
    const {dni} = req.params;
    const data = req.body;
    try {
        const cliente = await getClientePorDni(dni);
    if (!cliente) {
        return res.status(404).json({
            message: "No se encontro un cliente con el DNI especificado"
        })
    }
    const updateData = {
        nombre: !data.nombre ? cliente.nombre : data.nombre,
        apellido: !data.apellido ? cliente.apellido : data.apellido,
        telefono: !data.telefono ? cliente.telefono : data.telefono,
        email: !data.email ? cliente.email : data.email
    }
    const clienteUpdate = await update(updateData, dni);
    return res.status(200).json(clienteUpdate);
    } catch (error) {
        return res.status(404).json({
            message: "Ha ocurrido un error al actulizar los datos del cliente",
            error: error
        })
    }
    
}



module.exports = {
    crearCliente,
    getClientes,
    verClientePorDni,
    updateCliente
}