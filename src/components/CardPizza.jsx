import React from 'react'

const CardPizza = ({nombre, ingredientes, precio, disponible, imagen, agregarAlCarrito}) => {

  return (

    <div className="pizza-card">
        <img src={imagen} alt={nombre} className="pizza-image" /> {/* Mostrar imagen */}
        <h2>{nombre}</h2>
        <ul>
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li> // Mostrar cada ingrediente en un <li>
        ))}
      </ul>
        <p>Precio: ${precio.toFixed()}</p>
        <p>{disponible ? "Disponible" : "No disponible"}</p>
        <button onClick={agregarAlCarrito} disabled={!disponible}>agregar al carrito</button>
    </div>

  );
};

export default CardPizza;