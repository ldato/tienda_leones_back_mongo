const {create, findAll, findByName, update} = require('../services/proveedores');

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
        return res.status(200).json(proveedores);
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al consultar los proveedores",
            error: error
        })
    }
}

const buscarUno = async (req, res) => {
    const {nombre} = req.params;
    try {
        const proveedor = await findByName(nombre);
        if (!proveedor) {
            return res.status(404).json({
                message: "No se encontro un proveedor con el nombre especificado"
            })
        }
        return res.status(200).json(proveedor)
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al consultar el proveedor",
            error: error
        })
    }
}

const updateProveedor = async (req, res) => {
    const {nombre} = req.params;
    const data = req.body;
    try {
        const proveedor = await findByName(nombre);
        if (!proveedor) {
            return res.status(404).json({
                message: "No se encontro un proveedor con el nombre especificado"
            })
        }
        const updateData = {
            nombre: !data.nombre ? proveedor.nombre : data.nombre,
            telefono: !data.telefono ? proveedor.telefono : data.telefono,
            email: !data.email ? proveedor.email : data.email
        }
        const proveedorUpdate = await update(nombre, updateData);
        return res.status(200).json(proveedorUpdate);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Ha ocurrido un error al actualizar el proveedor",
            error: error
        })
    }
}

module.exports = {
    crearProveedor,
    buscarTodos,
    buscarUno,
    updateProveedor
}