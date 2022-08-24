const Venta = require('../models/Venta');
const {create, findAll, findByDni} = require('../services/ventas');

const crearVenta = async (req, res) => {
    const venta = req.body;
    try {
        const nuevaVenta = await create(venta);
        return res.status(201).json({
            message: "La venta se ha registrado con éxito",
            venta: nuevaVenta
        })
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al crear el talle",
            error: error
        })
    }
}

const getVentas = async (req, res) => {
    try {
        const ventas = await findAll();
        return res.status(200).json(ventas);
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al consultar las ventas",
            error: error
        })
    }    
}

const getVentaPorDni = async (req, res) => {
    const {dni} = req.params;
    try {
        const ventasPorDni = await findByDni(dni);
        if (!ventasPorDni) {
            return res.status(404).json({
                message: "No existen ventas para el DNI consultado"              
            })
        };
        return res.status(200).json(ventasPorDni)
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error al consultar las ventas",
            error: error
        })
    }
}

module.exports = {
    crearVenta,
    getVentas,
    getVentaPorDni
}