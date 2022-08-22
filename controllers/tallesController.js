const {create} = require('../services/talles');

const crearTalle = async (req, res) => {
    const {nombre} = req.body;
    try {
        const talle = await create(nombre);
        return res.status(201).json({
            message: "El talle ha sido creado correctamente",
            talle: talle
        })
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al crear el talle",
            error: error
        })
    }
}

module.exports = {
    crearTalle
}