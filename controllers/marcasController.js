const {create, getAll} = require('../services/marcas');

const crearMarca = async (req, res) => {
    const {nombre} = req.body;
    try {
        const marca = await create(nombre);
        return res.status(201).json({
            message: "La marca se ha creado correctamente",
            marca: marca            
        })
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al crear la marca",
            error: error
        })
    }
}

const verMarcas = async (req, res) => {
    try {
        const marcas = await getAll();
        return res.status(200).json(marcas);
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al consultar las marcas",
            error: error
        });
    }
}

module.exports = {
    crearMarca,
    verMarcas
}