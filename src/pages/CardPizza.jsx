import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const CardPizza = ({id, nombre, ingredientes, precio, disponible, imagen, agregarAlCarrito}) => {
 

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
      <Link to={`/pizza/${id}`} style={{paddingLeft: '2px'}}>
      <button>Ver Mas</button>
      </Link>
    </div>
  );
};

export default CardPizza;