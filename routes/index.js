const router = require('express').Router();
const authRouter = require('./auth');
const marcasRouter = require('./marcas');
const proveedoresRouter = require('./proveedores');
const tallesRoutes = require('./talles');
const articulosRouter = require('./articulos');


router.get('/', (req, res) => {
    res.json({message: "Ruta origen"})
})

router.use('/auth', authRouter);
router.use('/marcas', marcasRouter);
router.use('/proveedores', proveedoresRouter);
router.use('/talles', tallesRoutes);
router.use('/articulos', articulosRouter);

module.exports = router;