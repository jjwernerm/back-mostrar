import productoModels from '../models/productoModels.js'; // Importa el modelo 'productoModels' para interactuar con la base de datos.

const mostrarProductos = async (req, res) => { // Define una función asíncrona 'mostrarProductos' para manejar las solicitudes de productos.
  try {
    const productos = await productoModels.find(); // Intenta obtener todos los productos desde la base de datos.
    res.json(productos); // Envía los productos como respuesta en formato JSON.
  } catch (error) {
    res.status(400).json({ msg: 'Error en la solicitud: contactar al administrador' }); // Si ocurre un error, responde con un mensaje de error y un código de estado 400.
    console.log(`Error ${error.status || 400}: ${error.message}`); // Registra el mensaje de error en la consola.
  }
};

export { mostrarProductos }; // Exporta la función 'mostrarProductos' para que pueda ser utilizada en otros archivos.
