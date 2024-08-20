import express from 'express'; // Importa el módulo 'express' para utilizar su funcionalidad en el archivo.

const router = express.Router(); // Crea un nuevo enrutador usando express.Router().

import { mostrarProductos } from '../controllers/productoControllers.js'; // Importa la función 'mostrarProductos' desde el archivo de controladores.

router.get('/mostrar', mostrarProductos); // Define una ruta GET para '/mostrar' que ejecutará la función 'mostrarProductos'.

export default router; // Exporta el enrutador para que pueda ser utilizado en otros archivos.
