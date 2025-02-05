// Te propongo crear un ejercicio que simula una aplicación de gestión de una tienda de videojuegos usando la PokeAPI. Esto permitirá a los estudiantes practicar con datos reales y ver diferentes formas de manejar peticiones asíncronas.

// 1. Sistema de inventario simulado
const inventario = {
  productos: new Map(),
  pedidos: [],
  carrito: new Map(),
};

// 2. Funciones base del sistema
class TiendaVideoJuegos {
  // Obtener un Pokémon y convertirlo en un "videojuego"
  static async obtenerProducto(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      return {
        id: data.id,
        nombre: data.name,
        precio: Math.floor(data.base_experience / 2),
        stock: Math.floor(Math.random() * 10),
        imagen: data.sprites.front_default,
        detalles: {
          peso: data.weight,
          altura: data.height,
          tipos: data.types.map((t) => t.type.name),
        },
      };
    } catch (error) {
      throw new Error(`Error al obtener producto: ${error.message}`);
    }
  }

  // Simular proceso de pago
  static procesarPago(total) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (total > 0) {
          resolve(`Pago de ${total}€ procesado correctamente`);
        } else {
          reject("El total debe ser mayor que 0");
        }
      }, 1500);
    });
  }

  // Simular envío
  static procesarEnvio(pedido) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          numeroPedido: Date.now(),
          productos: pedido,
          estado: "enviado",
          fechaEnvio: new Date(),
        });
      }, 2000);
    });
  }
}
// 📝 Ejercicios para los estudiantes:
// Ejercicio Básico: Inicializar inventario
// Completa la función usando .then()
function inicializarInventario() {
    inventario.then ((productos) => { 
        console.log (productos)
    })
  // Obtener los primeros 5 Pokémon y añadirlos al inventario
  const promesas = [];
  for (let i = 1; i <= 5; i++) {
    const pokemon = await productos;
    console.log (pokemon)
    // Implementa aquí
  }

  return Promise.all(promesas).then(/* completar */).catch(/* completar */);
}
Ejercicio Intermedio: Gestionar carrito
// Implementa estas funciones usando async/await
class GestorCarrito {
  async añadirAlCarrito(idProducto, cantidad) {
    // Verificar stock y añadir al carrito
  }

  async eliminarDelCarrito(idProducto) {
    // Eliminar producto del carrito
  }

  async obtenerTotal() {
    // Calcular total del carrito
  }
}
Ejercicio Avanzado: Procesar pedido completo
// Implementa esta función combinando .then() y async/await
async function procesarPedidoCompleto() {
  try {
    // 1. Obtener total del carrito
    // 2. Procesar el pago
    // 3. Crear el pedido
    // 4. Procesar el envío
    // 5. Actualizar el inventario
    // 6. Vaciar el carrito
  } catch (error) {
    console.error("Error en el pedido:", error);
    throw error;
  }
}
✅ Solución del ejercicio avanzado:
async function procesarPedidoCompleto() {
  const gestor = new GestorCarrito();

  try {
    // 1. Obtener total usando async/await
    const total = await gestor.obtenerTotal();

    // 2. Procesar pago usando .then()
    return TiendaVideoJuegos.procesarPago(total).then(async (resultadoPago) => {
      console.log(resultadoPago);

      // 3. Crear pedido
      const pedido = Array.from(inventario.carrito.entries()).map(
        ([id, cantidad]) => ({
          producto: inventario.productos.get(id),
          cantidad,
        })
      );

      // 4. Procesar envío usando async/await
      const resultadoEnvio = await TiendaVideoJuegos.procesarEnvio(pedido);

      // 5. Actualizar inventario
      pedido.forEach(({ producto, cantidad }) => {
        const productoActual = inventario.productos.get(producto.id);
        productoActual.stock -= cantidad;
      });

      // 6. Vaciar carrito
      inventario.carrito.clear();

      return {
        resultadoPago,
        resultadoEnvio,
      };
    });
  } catch (error) {
    console.error("Error en el pedido:", error);
    throw error;
  }
}
🎯 Retos adicionales:
Sistema de búsqueda:

async function buscarProductos(termino) {
  // Implementa una búsqueda que combine datos de varios endpoints de la PokeAPI
}
Sistema de ofertas:

function aplicarDescuentos() {
  // Implementa un sistema que aplique descuentos basados en tipos de Pokémon
}
Historial de pedidos:

async function obtenerHistorialPedidos() {
  // Implementa un sistema para trackear y mostrar el estado de los pedidos
}
📚 Ejemplo de uso completo:
async function ejemploUsoTienda() {
  try {
    // Inicializar inventario
    await inicializarInventario();

    // Crear gestor de carrito
    const gestor = new GestorCarrito();

    // Añadir productos al carrito
    await gestor.añadirAlCarrito(1, 2);
    await gestor.añadirAlCarrito(3, 1);

    // Procesar pedido
    const resultado = await procesarPedidoCompleto();
    console.log("Pedido completado:", resultado);
  } catch (error) {
    console.error("Error en la tienda:", error);
  }
}
🤔 Puntos de aprendizaje clave:
Combinación de .then() y async/await en el mismo flujo
Manejo de errores en diferentes niveles
Gestión de estado (inventario, carrito)
Trabajo con APIs reales (PokeAPI)
Promesas en paralelo vs secuenciales
Simulación de operaciones asíncronas (pagos, envíos)

