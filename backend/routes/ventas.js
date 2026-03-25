const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Módulo ventas funcionando');
});

module.exports = router;
