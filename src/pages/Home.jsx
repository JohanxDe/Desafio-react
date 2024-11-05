import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from './CardPizza';
import { useCart } from '../CartContex';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart(); // Usa el contexto para agregar al carrito

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error al obtener pizzas:', error));
  }, []);

  return (
    <div>
      <Header />
      <div className="pizza-list">
        <h1>Nuestras Pizzas</h1>
        <div className="pizza-grid">
          {pizzas.length === 0 ? (
            <p>Cargando pizzas...</p>
          ) : (
            pizzas.map((pizza) => (
              <CardPizza
                key={pizza.id}
                id={pizza.id}
                nombre={pizza.name}
                ingredientes={pizza.ingredients}
                precio={pizza.price}
                imagen={pizza.img}
                agregarAlCarrito={() => addToCart(pizza)} // Llama a addToCart del contexto
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;