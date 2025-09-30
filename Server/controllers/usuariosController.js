// controllers/usuariosController.js
// Controladores para manejar las operaciones de los usuarios
const Usuario = require('../models/usuarioModel');

// Obtener todos los usuarios
const obtenerTodosLosUsuarios = (req, res) => {
    try {
        const usuarios = Usuario.obtenerTodos();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios', error: error.message });
    }
};

// Obtener un usuario por su ID
const obtenerUsuarioPorId = (req, res) => {
    const { id } = req.params;
    const idNumerico = parseInt(id);

    if (isNaN(idNumerico)) {
        return res.status(400).json({ mensaje: 'El ID debe ser un número válido' });
    }

    try {
        const usuario = Usuario.obtenerPorId(idNumerico);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar el usuario', error: error.message });
    }
};

// Crear un nuevo usuario
const crearNuevoUsuario = (req, res) => {
    const { nombre, correo, edad } = req.body;

    // Validación básica
    if (!nombre || !correo || edad === undefined) {
        return res.status(400).json({ mensaje: 'Faltan datos obligatorios: nombre, correo y edad' });
    }

    try {
        const nuevoUsuario = Usuario.crear({ nombre, correo, edad });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el usuario', error: error.message });
    }
};

// Actualizar un usuario existente
const actualizarUsuario = (req, res) => {
    const { id } = req.params;
    const idNumerico = parseInt(id);
    const datosActualizados = req.body;

    if (isNaN(idNumerico)) {
        return res.status(400).json({ mensaje: 'El ID debe ser un número válido' });
    }

    try {
        const usuarioActualizado = Usuario.actualizar(idNumerico, datosActualizados);
        if (!usuarioActualizado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado para actualizar' });
        }
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el usuario', error: error.message });
    }
};

// Eliminar un usuario
const eliminarUsuario = (req, res) => {
    const { id } = req.params;
    const idNumerico = parseInt(id);

    if (isNaN(idNumerico)) {
        return res.status(400).json({ mensaje: 'El ID debe ser un número válido' });
    }

    try {
        const eliminado = Usuario.eliminar(idNumerico);
        if (!eliminado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado para eliminar' });
        }
        res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
    }
};

// Exportar los controladores
module.exports = {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorId,
    crearNuevoUsuario,
    actualizarUsuario,
    eliminarUsuario
};
