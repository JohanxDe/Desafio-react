import React from 'react'
import Header from './Header'
import { pizzas } from '../pizzas'
import CardPizza from './CardPizza'
import Cart from './Cart'

function Home({agregarAlCarrito}) {

  //const [pizzaCart, setPizzaCart] = useState([]); // Estado del carrito

  // Función para agregar pizzas al carrito
  //const agregarAlCarrito = (pizzaSeleccionada) => {
  //  const pizzaEnCarrito = pizzaCart.find((pizza) => pizza.nombre === pizzaSeleccionada.nombre);
    
  //  if (pizzaEnCarrito) {
  //     Si la pizza ya está en el carrito, aumentamos la cantidad
  //    const nuevoCarrito = pizzaCart.map((pizza) =>
  //      pizza.nombre === pizzaSeleccionada.nombre
  //        ? { ...pizza, cantidad: pizza.cantidad + 1 }
  //        : pizza
  //    );
  //    setPizzaCart(nuevoCarrito);
  //  } else {
  //     Si la pizza no está en el carrito, la agregamos
  //    setPizzaCart([...pizzaCart, { ...pizzaSeleccionada, cantidad: 1 }]);
  // }
 // };

  return (
    <div>
        <Header/>
        <div className="pizza-list">
            <h1>Nuestras Pizzas</h1>
            <div className="pizza-grid">
                {pizzas.map((pizza, index) => (
                    <CardPizza
                        key={index}
                        nombre={pizza.nombre}
                        ingredientes={pizza.ingredientes}
                        precio={pizza.precio}
                        disponible={pizza.disponible}
                        imagen={pizza.imagen}
                        agregarAlCarrito={()=> agregarAlCarrito(pizza)}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home
