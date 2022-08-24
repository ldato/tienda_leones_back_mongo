const express = require('express');
const router = express.Router();
const {crearMarca, verMarcas} = require('../controllers/marcasController');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/crearMarca', verifyToken, checkAdmin, crearMarca);

router.get('/verMarcas', verifyToken, verMarcas);



module.exports = router;