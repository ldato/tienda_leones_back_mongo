const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');
const {crearCliente, getClientes, verClientePorDni, updateCliente} = require('../controllers/clientesController');

router.post('/crearCliente', verifyToken, checkAdmin, crearCliente);

router.get('/verClientes', getClientes);

router.get('/verCLientePorDni/:dni', verClientePorDni);

router.put('/updateCliente/:dni', updateCliente);

module.exports = router;

