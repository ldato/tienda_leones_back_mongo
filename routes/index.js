const router = require('express').Router();
const authRouter = require('./auth');
const marcasRouter = require('./marcas');
const proveedoresRouter = require('./proveedores');
const tallesRoutes = require('./talles');
const articulosRouter = require('./articulos');
const clientesRouter = require('./clientes');
const ventasRouter = require('./ventas');


router.get('/', (req, res) => {
    res.json({message: "Ruta origen"})
})

router.use('/auth', authRouter);
router.use('/marcas', marcasRouter);
router.use('/proveedores', proveedoresRouter);
router.use('/talles', tallesRoutes);
router.use('/articulos', articulosRouter);
router.use('/clientes', clientesRouter);
router.use('/ventas', ventasRouter);

module.exports = router;