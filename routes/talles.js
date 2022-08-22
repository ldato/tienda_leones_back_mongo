const express = require('express');
const router = express.Router();
const {crearTalle} = require('../controllers/tallesController');
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/crearTalle', verifyToken, checkAdmin, crearTalle);

module.exports = router;