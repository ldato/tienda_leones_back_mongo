const express = require('express');
const router = express.Router();
const {crearUsuario, loginUser} = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/register', crearUsuario);

router.post('/login', loginUser);

router.get('/pruebaAdmin', verifyToken, checkAdmin);

module.exports = router;