import React, { useEffect, useState } from 'react'
import Header from './Header'
import { pizzas } from '../pizzas'
import CardPizza from './CardPizza'
import Cart from './Cart'
import Pizza from './Pizza'

function Home({agregarAlCarrito}) {

    const [pizzas, setPizzas] = useState([]);
    const [selectedPizzaId, setSelectedPizzaId] = useState(null);
      
    useEffect(() => {
        fetch('http://localhost:5000/api/pizzas')
        .then((response) => response.json())
        .then((data) => {console.log ('pizzas obtenidas', data); 
        setPizzas(data)
    }) 
        .catch((error) => console.error('Error al obtener pizzas:', error));
    }, []); 

    const handlePizzaClick = (id) => {
        setSelectedPizzaId(id)
    }

  return (
    <div>
        <Header/>
        {selectedPizzaId ? (
            <Pizza id={selectedPizzaId} agregarAlCarrito={agregarAlCarrito}/>
        ) : (
    <div className="pizza-list">
        <h1>Nuestras Pizzas</h1>
        <div className="pizza-grid">
          {pizzas.length === 0 ? (
            <p>Cargando pizzas...</p>
          ) : (
            pizzas.map((pizza, index) => (
              <CardPizza
              key={pizza.id}
              nombre={pizza.name}
              ingredientes={pizza.ingredients}
              precio={pizza.price}
              imagen={pizza.img}
              agregarAlCarrito={() => agregarAlCarrito(pizza)}
              />
            ))
          )}
        </div>
      </div>
      )}
    </div>
  );
};

export default Home
