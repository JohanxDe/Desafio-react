import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = ({ agregarAlCarrito }) => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/api/pizzas/${id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error al obtener la pizza');
                    }
                    return response.json();
                })
                .then((data) => {
                    setPizza(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [id]);
    if (loading) {
        return <p style={{ color: 'black' }}>Cargando Pizza...</p>
    }
    if (error) {
        return <p style={{ color: 'red' }}>{error.message}</p>
    }
    if (!pizza) {
        return <p>No se encontro informacion de la pizza</p>
    }


    return (
        <div className="pizza-detail-container">
            <h1 className="pizza-title">{pizza.name}</h1>
            <div className="pizza-content">
                <img src={pizza.img} alt={pizza.name} className="pizza-image" />
                <div className="pizza-info">
                    <p className="pizza-description">{pizza.desc}</p>
                    <p className="pizza-ingredients-title">Ingredientes:</p>
                    <ul className="pizza-ingredients">
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index} className="ingredient-item">{ingredient}</li>
                        ))}
                    </ul>
                    <p className="pizza-price">Precio: ${pizza.price}</p>
                    <button className="add-to-cart-btn" onClick={() => agregarAlCarrito(pizza)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Pizza;