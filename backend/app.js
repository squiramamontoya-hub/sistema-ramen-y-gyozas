const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Crear tablas
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        precio REAL,
        stock INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS ventas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        total REAL,
        fecha TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS gastos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        descripcion TEXT,
        monto REAL,
        fecha TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS reservas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        fecha TEXT,
        personas INTEGER
    )`);
});

// Rutas
const productosRoutes = require('./routes/productos');
const ventasRoutes = require('./routes/ventas');
const gastosRoutes = require('./routes/gastos');
const reservasRoutes = require('./routes/reservas');

app.use('/productos', productosRoutes);
app.use('/ventas', ventasRoutes);
app.use('/gastos', gastosRoutes);
app.use('/reservas', reservasRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor XCOPOST funcionando');
});

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});


