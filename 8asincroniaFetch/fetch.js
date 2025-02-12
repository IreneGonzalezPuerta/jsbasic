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
// Inicializar inventario
// Completa la función usando .then()
function inicializarInventario() {
  
  const promesas = [];
  for (let i = 1; i <= 5; i++) {
    if (productos.length=== 0){
      reject (newError ('Data is empty'))
    }
    setTimeout (()=>{
      resolve (productos);
    }, 2000)
    }
  }

  return Promise.all(promesas)
  .then(() => console.log ())
  .catch(()=> console.log ());
  

//   Ejercicio Intermedio: Gestionar carrito
// // Implementa estas funciones usando async/await
class GestorCarrito (){
  async añadirAlCarrito(idProducto, cantidad) {
    const pokemon = await  obternerProducto ();
    console.log (pokemon.push(añadirAlCarrito));

  }

  async eliminarDelCarrito(idProducto) {
    // Eliminar producto del carrito
  }

  async obtenerTotal() {
    // Calcular total del carrito
  }
}
