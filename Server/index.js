// index.js
// Punto de entrada de la aplicación
const express = require('express');
const app = express();
const puerto = process.env.PUERTO || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const rutasUsuarios = require('./routes/usuarios');

// Usar las rutas bajo el prefijo /api/usuarios
app.use('/api/usuarios', rutasUsuarios);

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`✅ Servidor corriendo en el puerto ${puerto}`);
});
