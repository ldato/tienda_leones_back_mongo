const express = require('express');
const router = express.Router();
const {
    crearArticulo, 
    buscarTodos, 
    buscarUno, 
    actualizarPrecios,
    buscarUnoYActualizar
    } = require('../controllers/articulosController');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/crearArticulo', verifyToken, checkAdmin, crearArticulo);

router.put('/actualizarCantidad', verifyToken, checkAdmin, buscarUnoYActualizar);

router.get('/todos', verifyToken, checkAdmin, buscarTodos);

router.get('/uno/:codigo', verifyToken, checkAdmin, buscarUno);

router.put('/actualizarPrecios/:codigo', verifyToken, checkAdmin, actualizarPrecios);

module.exports = router;