const {create, findAll} = require('../services/proveedores');

const crearProveedor = async (req, res) => {
    const proveedorData = req.body;
    try {
        const proveedor = await create(proveedorData);
        res.status(201).json({
            message: "El proveedor se ha creado correctamente",
            proveedor: proveedor
        });
    } catch (error) {
        res.status(400).json({
            message: "Ha ocurrido un problema al crear el proveedor",
            error: error
        })
    }
}

const buscarTodos = async (req, res) => {
    try {
        const proveedores = await findAll();
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(400).json({
            message: "Ha ocurrido un error al consultar los proveedores",
            error: error
        })
    }
}

module.exports = {
    crearProveedor,
    buscarTodos
}