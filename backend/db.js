const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./xcopost.db', (err) => {
    if (err) {
        console.log("Error al conectar base de datos");
    } else {
        console.log("Base de datos conectada");
    }
});

// Crear tabla ventas
db.run(`
CREATE TABLE IF NOT EXISTS ventas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    total INTEGER,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
)
`);

module.exports = db;


