const Articulo = require('../models/Articulo');
const {
    create,
    findAll,
    findByCodigo,
    updatePrecios,
    findByCodigoAndUpdate
} = require('../services/articulos');

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

const buscarUnoYActualizar = async (req, res) => {
    const data = req.body;
    try {
        const nuevaCantidad = await findByCodigoAndUpdate(data.codigo, data.cantidad);
        return res.status(401).json({
            message: "El artículo fue actualizado correctamente",
            articulo: nuevaCantidad
        })
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al actualizar el artículo",
            error: error
        })
    }

}

const buscarTodos = async (req, res) => {
    try {
        const articulos = await findAll();
        return res.status(200).json(articulos);
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido al consultar los articulos",
            error: error
        })
    }
}

const buscarUno = async (req, res) => {
    const { codigo } = req.params;
    try {        
        const articulo = await findByCodigo(codigo);
        console.log(articulo);
        if (articulo === null) {
            return res.status(404).json({
                message: "No se encontro el articulo con el codigo provisto",
                error: 404
            })
        }
        return res.status(200).json(articulo);       
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "Ha ocurrido un error al consultar el codigo de articulo",
            error: error
        })
    }
}

const actualizarPrecios = async (req, res) => {
    const { codigo } = req.params;
    const data = req.body;
    try {
        const articulo = await findByCodigo(codigo);
        if (!articulo) {
            return res.status(404).json({
                message: "No se encontro un articulo con el codigo provisto"
            })
        }
        const updateArticulo = {
            precioVenta: !data.precioVenta ? articulo.precioVenta : data.precioVenta,
            precioCosto: !data.precioCosto ? articulo.precioCosto : data.precioCosto
        }
        const articuloUpdate = await updatePrecios(codigo, data);
        return res.status(200).json(articuloUpdate);
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al actualizar los precios del articulo",
            error: error
        })
    }


}

module.exports = {
    crearArticulo,
    buscarTodos,
    buscarUno,
    actualizarPrecios,
    buscarUnoYActualizar
}