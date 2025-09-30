// models/usuarioModel.js
// Modelo simulado de usuario (almacenamiento en memoria)
let usuarios = [
    { id: 1, nombre: 'Ana García', correo: 'ana@example.com', edad: 28 },
    { id: 2, nombre: 'Luis Pérez', correo: 'luis@example.com', edad: 34 }
];

let siguienteId = 3;

// Obtener todos los usuarios
const obtenerTodos = () => {
    return [...usuarios]; // Devolver copia para evitar mutaciones externas
};

// Obtener un usuario por ID
const obtenerPorId = (id) => {
    return usuarios.find(usuario => usuario.id === id);
};

// Crear un nuevo usuario
const crear = (datosUsuario) => {
    const nuevoUsuario = {
        id: siguienteId++,
        ...datosUsuario
    };
    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
};

// Actualizar un usuario existente
const actualizar = (id, datosActualizados) => {
    const indice = usuarios.findIndex(usuario => usuario.id === id);
    if (indice === -1) return null;

    usuarios[indice] = { ...usuarios[indice], ...datosActualizados };
    return usuarios[indice];
};

// Eliminar un usuario
const eliminar = (id) => {
    const longitudAntes = usuarios.length;
    usuarios = usuarios.filter(usuario => usuario.id !== id);
    return usuarios.length < longitudAntes; // true si se eliminó
};

// Exportar funciones del modelo
module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};
