// routes/usuarios.js
// Definición de rutas para el recurso "usuarios"
const express = require('express');
const router = express.Router();

// Importar controlador
const {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorId,
    crearNuevoUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require('../controllers/usuariosController');

// Rutas
router.get('/', obtenerTodosLosUsuarios);           // GET /api/usuarios
router.get('/:id', obtenerUsuarioPorId);           // GET /api/usuarios/:id
router.post('/', crearNuevoUsuario);               // POST /api/usuarios
router.put('/:id', actualizarUsuario);             // PUT /api/usuarios/:id
router.delete('/:id', eliminarUsuario);            // DELETE /api/usuarios/:id

module.exports = router;
