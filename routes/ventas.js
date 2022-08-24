const express = require('express');
const router = express.Router();
const {crearVenta, getVentas, getVentaPorDni} = require('../controllers/ventasController');
const verifyToken = require('../middleware/verifyToken');
// const checkAdmin = require('../middleware/checkAdmin');

router.post('/nuevaVenta', verifyToken, crearVenta);

router.get('/todasLasVentas', verifyToken, getVentas);

router.get('/ventasPorDni/:dni', verifyToken, getVentaPorDni);

module.exports = router;