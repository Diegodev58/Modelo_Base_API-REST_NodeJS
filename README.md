# Modelo_Base_API-REST_NodeJS
te presento un mini modelo de una API REST en Node.js     


---

# 🌐 API REST de Usuarios (Mini Proyecto)

Este es un **mini modelo de una API REST** desarrollado en **Node.js** con **Express**, siguiendo una arquitectura limpia basada en **rutas, controladores y modelos**. Está diseñado para gestionar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un recurso de **usuarios**, utilizando únicamente almacenamiento en memoria (sin base de datos externa).

Ideal para aprender, prototipar o como base para proyectos más grandes.

---

## 📦 Características

- ✅ **Arquitectura modular**: separación clara entre rutas, controladores y modelos.
- ✅ Soporte para los métodos HTTP más comunes: `GET`, `POST`, `PUT`, `DELETE`.
- ✅ Validación básica de datos y manejo de errores.
- ✅ Mensajes de respuesta en español.
- ✅ Código comentado y en español (nombres de variables, funciones y comentarios).
- ✅ Almacenamiento en memoria (sin dependencia de base de datos).
- ✅ Listo para extender (fácil de conectar a MongoDB, MySQL, etc.).

---

## 🛠️ Requisitos previos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

---

## 🚀 Instalación

1. **Clona o descarga** este proyecto en tu máquina.
2. Abre una terminal y navega hasta la carpeta del proyecto:
   ```bash
   cd mi-api
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```
   > Por defecto, el servidor escucha en el puerto **3000**. Puedes cambiarlo con la variable de entorno `PUERTO`.

---

## 📡 Endpoints disponibles

Todos los endpoints están bajo la ruta base: `http://localhost:3000/api/usuarios`

| Método | Ruta                     | Descripción                              | Cuerpo requerido (JSON)                     |
|--------|--------------------------|------------------------------------------|---------------------------------------------|
| `GET`  | `/`                      | Obtener todos los usuarios               | —                                           |
| `GET`  | `/:id`                   | Obtener un usuario por su ID             | —                                           |
| `POST` | `/`                      | Crear un nuevo usuario                   | `{ "nombre": "string", "correo": "string", "edad": number }` |
| `PUT`  | `/:id`                   | Actualizar un usuario existente          | `{ "nombre": "...", "correo": "...", "edad": ... }` (parcial o completo) |
| `DELETE`| `/:id`                  | Eliminar un usuario por su ID            | —                                           |

> ⚠️ **Nota**: El campo `id` en las rutas debe ser un **número entero válido**.

---

## 🧪 Ejemplos de uso

### 📥 Crear un nuevo usuario
```http
POST http://localhost:3000/api/usuarios
Content-Type: application/json

{
  "nombre": "María López",
  "correo": "maria@example.com",
  "edad": 30
}
```

**Respuesta exitosa (201 Created):**
```json
{
  "id": 3,
  "nombre": "María López",
  "correo": "maria@example.com",
  "edad": 30
}
```

---

### 📤 Obtener todos los usuarios
```http
GET http://localhost:3000/api/usuarios
```

**Respuesta (200 OK):**
```json
[
  {
    "id": 1,
    "nombre": "Ana García",
    "correo": "ana@example.com",
    "edad": 28
  },
  {
    "id": 2,
    "nombre": "Luis Pérez",
    "correo": "luis@example.com",
    "edad": 34
  }
]
```

---

### 🗑️ Eliminar un usuario
```http
DELETE http://localhost:3000/api/usuarios/1
```

**Respuesta (200 OK):**
```json
{
  "mensaje": "Usuario eliminado correctamente"
}
```

---

## 📁 Estructura del proyecto

```
mi-api/
├── index.js                 # Punto de entrada de la aplicación
├── routes/
│   └── usuarios.js          # Definición de rutas
├── controllers/
│   └── usuariosController.js # Lógica de negocio (controladores)
└── models/
    └── usuarioModel.js      # Modelo de datos (almacenamiento en memoria)
```

---

## 🧩 Posibles mejoras

Este proyecto es un **modelo base**. Puedes mejorarlo con:

- ✅ Conexión a una base de datos real (MongoDB, PostgreSQL, MySQL).
- ✅ Validación de esquemas con **Joi** o **Zod**.
- ✅ Autenticación y autorización (JWT, OAuth).
- ✅ Paginación y filtros en las consultas.
- ✅ Logging de solicitudes y errores.
- ✅ Pruebas unitarias e integración (Jest, Supertest).
- ✅ Dockerización.

---

## 📜 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia **MIT**.  
Ver archivo [`LICENSE`](LICENSE) para más detalles.

---

## 🙌 Autor

Desarrollado con ❤️ para fines educativos y de aprendizaje.

¿Tienes sugerencias o encontraste un error? ¡Abre un *issue* o un *pull request*!

---

> 💡 **Consejo**: Usa **Postman** o **Thunder Client** (extensión de VS Code) para probar fácilmente los endpoints.

--- 

