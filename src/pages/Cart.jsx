import React from 'react';

function Cart({ pizzaCart, onRemoveFromCart }) {

    // Calcular el total del carrito sumando los totales de cada pizza
    const calcularTotal = () => {
        return pizzaCart.reduce((total, pizza) => total + (pizza.price * pizza.cantidad), 0);
    };

    return (
        <div style={{color: 'black'}}>
            <h1>Carrito de Compras</h1>
            {pizzaCart.length === 0 ? (
                <p>No tienes pizzas en tu carrito.</p>
            ) : (
                <div>
                    <ul>
                        {pizzaCart.map((pizza, index) => (
                            <li key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                                <h2>{pizza.name}</h2>
                                <img src={pizza.img} alt={pizza.name} style={{ width: '100px', height: '100px' }} />
                                <p>Precio unitario: ${pizza.price.toLocaleString('es-CL')} CLP</p>
                                <p>Cantidad: {pizza.cantidad}</p>
                                <p>Total por este producto: ${(pizza.price * pizza.cantidad).toLocaleString('es-CL')} CLP</p>
                                <button onClick={() => onRemoveFromCart(pizza)}>Eliminar del carrito</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total del carrito: ${calcularTotal().toLocaleString('es-CL')} CLP</h3>
                </div>
            )}
        </div>
    );
}

export default Cart;