const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para probar
router.get('/', (req, res) => {
    res.send('Módulo ventas funcionando');
});

// Ruta para guardar venta
router.post('/', (req, res) => {
    const {
        ramenCerdo,
        ramenPollo,
        ramenVeg,
        gyozasNormal,
        gyozasCamaron,
        extraNormal,
        extraCamaron,
        combo1,
        combo2,
        total
    } = req.body;

    db.run(`
        INSERT INTO ventas 
        (ramenCerdo, ramenPollo, ramenVeg, gyozasNormal, gyozasCamaron, extraNormal, extraCamaron, combo1, combo2, total)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
        ramenCerdo,
        ramenPollo,
        ramenVeg,
        gyozasNormal,
        gyozasCamaron,
        extraNormal,
        extraCamaron,
        combo1,
        combo2,
        total
    ], function(err) {
        if (err) {
            return res.json({ error: err.message });
        }
        res.json({ mensaje: "Venta guardada correctamente" });
    });
});

module.exports = router;

