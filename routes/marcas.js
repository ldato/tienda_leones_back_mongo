const express = require('express');
const router = express.Router();
const {crearMarca} = require('../controllers/marcasController');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/crearMarca', verifyToken, checkAdmin, crearMarca);

module.exports = router;