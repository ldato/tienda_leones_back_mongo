const express = require('express');
const router = express.Router();
const {crearProveedor, buscarTodos, buscarUno, updateProveedor} = require('../controllers/proveedoresController');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/crearPrveedor', verifyToken, checkAdmin, crearProveedor);

router.get('/todos', verifyToken, checkAdmin, buscarTodos);

router.get('/buscarProveedor/:nombre', verifyToken, buscarUno);

router.put('/actualizarProveedor/:nombre', verifyToken, checkAdmin, updateProveedor);

module.exports = router;