const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener productos
router.get('/', (req, res) => {
    db.all('SELECT * FROM productos', [], (err, rows) => {
        if (err) {
            res.send(err);
        } else {
            res.json(rows);
        }
    });
});

// Agregar producto
router.post('/', (req, res) => {
    const { nombre, precio, stock } = req.body;

    db.run(
        'INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)',
        [nombre, precio, stock],
        function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send('Producto agregado');
            }
        }
    );
});

module.exports = router;

