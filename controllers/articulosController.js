const {create, findAll} = require('../services/articulos');

const crearArticulo = async (req, res) => {
    const articulo = req.body;
    try {
        const nuevoArticulo = await create(articulo);
        return res.status(401).json({
            message: "El artículo fue creado correctamente",
            articulo: nuevoArticulo
        })
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al crear el artículo",
            error: error
        })
    }
}

const buscarTodos = async (req, res) => {  
    try {
        const articulos = await findAll();
        res.status(200).json(articulos);
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido al consultar los articulos",
            error: error
        })
    }
}

module.exports = {
    crearArticulo,
    buscarTodos
}