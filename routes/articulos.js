const express = require('express');
const router = express.Router();
const {crearArticulo, buscarTodos} = require('../controllers/articulosController');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/crearArticulo', verifyToken, checkAdmin, crearArticulo);

router.get('/todos', verifyToken, checkAdmin, buscarTodos);

module.exports = router;