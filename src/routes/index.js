const router = require('express').Router();

router.get('/',(req, res) => {
    res.render('index');
});

router.get('/ruta',(req, res) => {
    res.render('rutas');
});

router.get('/prueba',(req, res) => {
    res.render('pruebas');
});

module.exports = router;