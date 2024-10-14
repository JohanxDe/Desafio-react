import React from 'react'

const CardPizza = ({nombre, ingredientes, precio, disponible, imagen, agregarAlCarrito}) => {

  return (
    <div className="pizza-card">
      <img src={imagen} alt={nombre} className="pizza-image" />
      <h2>{nombre}</h2>
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <p>Precio: ${precio.toLocaleString('es-CL')} CLP</p> 
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default CardPizza;