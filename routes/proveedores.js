const express = require('express');
const router = express.Router();
const {crearProveedor, buscarTodos} = require('../controllers/proveedoresController');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/crearPrveedor', verifyToken, checkAdmin, crearProveedor);

router.get('/todos', verifyToken, checkAdmin, buscarTodos);

module.exports = router;